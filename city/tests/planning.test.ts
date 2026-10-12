import test from 'node:test';
import assert from 'node:assert/strict';
import {newPlanning,evaluateNetwork,applyPlanningAction,advancePlanning,startWalk,readPlanning,links,roadCapacity,type PlanningState,type PlanningAction} from '../src/planning.ts';

const act=(s:PlanningState,a:PlanningAction)=>assert.equal(applyPlanningAction(s,a),null);
function prepare(spread=true){
 const s=newPlanning();act(s,{type:'build',plot:spread?'p0':'p4',building:'home'});act(s,{type:'road',id:spread?'source-p0':'p3-p4'});advancePlanning(s,6);assert.equal(s.phase,'prepare');
 act(s,{type:'build',plot:'p6',building:'muscle'});act(s,{type:'road',id:spread?'source-p6':'p3-p6'});
 if(!spread){act(s,{type:'road',id:'source-p3'});act(s,{type:'road',id:'source-p3'});}
 act(s,{type:'upgrade',organ:'heart'});act(s,{type:'upgrade',organ:'lungs'});return s;
}
test('a new city runs, but an unconnected neighborhood cannot be supplied or finish the project',()=>{
 const s=newPlanning();assert.equal(evaluateNetwork(s).coverage,1);act(s,{type:'build',plot:'p8',building:'home'});advancePlanning(s,20);
 const n=evaluateNetwork(s);assert.equal(n.lots.p8.delivered,0);assert.equal(n.lots.p8.connected,false);assert.match(n.issue,/尚未接通/);assert.equal(s.phase,'settle');
});
test('adding neighborhoods exposes a shared road bottleneck; upstream upgrades alone do not remove it',()=>{
 const s=newPlanning();act(s,{type:'build',plot:'p4',building:'home'});act(s,{type:'road',id:'p3-p4'});advancePlanning(s,6);
 act(s,{type:'build',plot:'p6',building:'muscle'});act(s,{type:'road',id:'p3-p6'});act(s,{type:'upgrade',organ:'lungs'});act(s,{type:'upgrade',organ:'heart'});
 const n=evaluateNetwork(s,1.5);assert.ok(n.delivered<=4.000001);assert.match(n.issue,/满载/);
 act(s,{type:'road',id:'source-p6'});assert.ok(evaluateNetwork(s,1.5).delivered>n.delivered);
});
test('distributed branches and an upgraded shared trunk are both affordable winning plans',()=>{
 for(const spread of [true,false]){const s=prepare(spread);assert.ok(s.materials>=0);assert.ok(evaluateNetwork(s,1.5).coverage>.999);assert.equal(startWalk(s),null);advancePlanning(s,91);assert.equal(s.phase,'complete');assert.equal(s.completed,1);assert.equal(s.lastResult?.passed,true);assert.ok(s.lastResult!.healthy>89.9);}
});
test('the solver conserves flow, respects every capacity and fairly shares a limited upstream supply',()=>{
 const s=prepare(true);s.materials=50;for(const p of ['p1','p2','p4','p5','p7','p8'])act(s,{type:'build',plot:p,building:'home'});
 // Construct an intentionally overloaded network independently of the construction budget.
 for(const l of links)s.roads[l.id]=2;
 const n=evaluateNetwork(s,1.5);assert.ok(n.delivered<=n.capacity+1e-7);
 assert.ok(Math.abs(Object.values(n.lots).reduce((a,l)=>a+l.delivered,0)-n.delivered)<1e-8);
 for(const l of links)assert.ok(n.edges[l.id]<=roadCapacity(s.roads[l.id]??0)+1e-7);
 for(const lot of Object.values(n.lots)){assert.ok(lot.delivered<=lot.demand+1e-7);assert.ok(lot.delivered>0);}
 const ratios=Object.values(n.lots).map(l=>l.ratio);assert.ok(Math.max(...ratios)-Math.min(...ratios)<.025);
});
test('failed walks preserve the plan and can be retried without spending materials',()=>{
 const s=prepare(true);act(s,{type:'downgrade',organ:'lungs'});const before=JSON.stringify(s.buildings),money=s.materials;
 assert.equal(startWalk(s),null);advancePlanning(s,90);assert.equal(s.phase,'prepare');assert.equal(s.lastResult?.passed,false);assert.equal(s.materials,money);assert.equal(JSON.stringify(s.buildings),before);assert.equal(startWalk(s),null);
});
test('pause, save/resume and playback subdivisions preserve the challenge outcome; rewards are not farmable',()=>{
 const a=prepare(true);startWalk(a);advancePlanning(a,29);const b=readPlanning(JSON.stringify(a)),saved=JSON.stringify(b);advancePlanning(b,0);advancePlanning(b,NaN);assert.equal(JSON.stringify(b),saved);
 advancePlanning(a,61);for(let i=0;i<610;i++)advancePlanning(b,.1);assert.equal(b.phase,'complete');assert.ok(Math.abs(a.lastResult!.healthy-b.lastResult!.healthy)<.21);
 const money=b.materials;startWalk(b);advancePlanning(b,90);assert.equal(b.materials,money);assert.equal(b.completed,2);
});
test('construction rejection is atomic, and every purchased facility can return its materials',()=>{
 const s=newPlanning();const original=JSON.stringify(s);assert.ok(applyPlanningAction(s,{type:'build',plot:'p3',building:'home'}));assert.equal(JSON.stringify(s),original);
 for(const organ of ['heart','lungs'] as const){act(s,{type:'upgrade',organ});act(s,{type:'upgrade',organ});}assert.equal(s.materials,0);
 const poor=JSON.stringify(s);assert.ok(applyPlanningAction(s,{type:'build',plot:'p4',building:'home'}));assert.equal(JSON.stringify(s),poor);
 for(const organ of ['heart','lungs'] as const){act(s,{type:'downgrade',organ});act(s,{type:'downgrade',organ});}assert.equal(s.materials,24);
 act(s,{type:'road',id:'source-p0'});act(s,{type:'road',id:'source-p0'});act(s,{type:'remove-road',id:'source-p0'});assert.equal(s.materials,24);
});
test('moving a building changes its supply path while preserving its construction value',()=>{
 const s=newPlanning(),money=s.materials;act(s,{type:'move',from:'p3',to:'p8'});assert.equal(s.materials,money);assert.equal(s.buildings.p3,undefined);assert.equal(evaluateNetwork(s).lots.p8.connected,false);
});
test('save parsing rejects unknown schema, paths and non-finite or out-of-range values',()=>{
 assert.deepEqual(readPlanning('null'),newPlanning());assert.deepEqual(readPlanning('{oops'),newPlanning());assert.deepEqual(readPlanning('{"version":9}'),newPlanning());
 const s=readPlanning(JSON.stringify({...prepare(),materials:-4,roads:{'source-p0':200,'evil':2},buildings:{p0:'home',p2:'invalid',evil:'home'},phase:'walking',walk:null}));
 assert.equal(s.materials,0);assert.equal(s.roads['source-p0'],3);assert.equal(s.roads.evil,undefined);assert.equal(s.buildings.p2,undefined);assert.equal(s.buildings.evil,undefined);assert.equal(s.phase,'prepare');
});
