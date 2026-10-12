import test from 'node:test';
import assert from 'node:assert/strict';
import {newPlanning,applyPlanningAction,advancePlanning,startWalk,nextChapter,chooseDecision,awaitingDecision,currentChapter,readPlanning,totalStars,evaluateNetwork,signalCoverage,plotUnlocked,countBuilding,replayChapter,systemRates} from '../src/planning.ts';
import {nextGuide} from '../src/planning-guide.ts';
import {chapters} from '../src/campaign.ts';
function ready(s:ReturnType<typeof newPlanning>){
 for(let i=0;i<90;i++){const g=nextGuide(s);if(g.kind==='start')return;if(g.action){assert.equal(applyPlanningAction(s,g.action),null,g.title);}else if(g.kind==='wait')advancePlanning(s,6);else assert.fail('Guide cannot progress: '+JSON.stringify(g));}
 assert.fail('Guidance loop did not converge');
}
function finish(s:ReturnType<typeof newPlanning>,choice=0){assert.equal(startWalk(s),null);for(let i=0;i<200&&s.phase==='walking';i++){advancePlanning(s,1);if(awaitingDecision(s))assert.equal(chooseDecision(s,choice),null);}assert.equal(s.lastResult?.passed,true,JSON.stringify(s.lastResult));}
test('a new player can follow concrete actions through all six chapters to a persistent ending',()=>{
 const s=newPlanning();for(let i=0;i<chapters.length;i++){assert.equal(s.campaign.chapter,i);ready(s);assert.ok(s.materials>=0);finish(s);assert.ok(s.campaign.records[chapters[i].id]?.passed);if(i<5)assert.equal(nextChapter(s),null);}
 assert.equal(s.campaign.sandbox,true);assert.ok(totalStars(s)>=12);assert.ok(plotUnlocked(s,'p15'));assert.ok(s.campaign.badges.includes('day'));
 const loaded=readPlanning(JSON.stringify(s));assert.equal(loaded.campaign.sandbox,true);assert.equal(totalStars(loaded),totalStars(s));assert.equal(loaded.materials,s.materials);
});
test('chapter choices wait for the player, survive a reload, and apply exactly once',()=>{
 const s=newPlanning();ready(s);finish(s);nextChapter(s);ready(s);startWalk(s);advancePlanning(s,30);assert.ok(awaitingDecision(s));const before=s.walk!.elapsed;
 advancePlanning(s,60);assert.equal(s.walk!.elapsed,before);const loaded=readPlanning(JSON.stringify(s));assert.ok(awaitingDecision(loaded));
 assert.equal(chooseDecision(loaded,1),null);const resources=JSON.stringify(loaded.campaign.resources);assert.ok(chooseDecision(loaded,0));assert.equal(JSON.stringify(loaded.campaign.resources),resources);advancePlanning(loaded,40);assert.equal(loaded.phase,'complete');
});
test('finished chapters can be replayed, but rewards and the best stars are never lost or farmed',()=>{
 const s=newPlanning();ready(s);applyPlanningAction(s,{type:'build',plot:'p2',building:'garden'});finish(s);const money=s.materials,stars=totalStars(s);replayChapter(s,0);finish(s);assert.equal(s.materials,money);assert.equal(totalStars(s),stars);assert.equal(s.lastResult?.reward,0);
});
test('locked buildings and expansion plots cannot be purchased before their chapters',()=>{
 const s=newPlanning(),original=JSON.stringify(s);assert.ok(applyPlanningAction(s,{type:'build',plot:'p1',building:'food'}));assert.equal(JSON.stringify(s),original);assert.ok(applyPlanningAction(s,{type:'build',plot:'p9',building:'home'}));assert.ok(applyPlanningAction(s,{type:'road',id:'p2-p9'}));assert.equal(JSON.stringify(s),original);
});
test('the old first-chapter save migrates without changing layout, materials, or claiming its reward again',()=>{
 const old={version:1,materials:9,buildings:{p0:'home',p3:'home',p6:'muscle',p1:'garden',p4:'garden',p7:'garden'},roads:{'source-p0':1,'source-p3':1,'source-p6':1},heart:2,lungs:2,phase:'complete',completed:1,clock:123,settleTime:5,walk:null,lastResult:{passed:true,healthy:90,coverage:1,issue:'完成'}};
 const s=readPlanning(JSON.stringify(old));assert.equal(s.version,2);assert.equal(s.materials,9);assert.deepEqual(s.buildings,old.buildings);assert.deepEqual(s.roads,old.roads);assert.equal(s.phase,'complete');assert.ok(s.campaign.records.dawn?.passed);assert.equal(nextChapter(s),null);assert.equal(s.campaign.chapter,1);ready(s);finish(s);
});
test('signals depend on placement and oxygen connectivity; disconnected services do not produce supplies',()=>{
 const s=newPlanning();for(let i=0;i<3;i++){ready(s);finish(s);nextChapter(s);}ready(s);
 const full=signalCoverage(s,evaluateNetwork(s));const tower=Object.entries(s.buildings).find(([,b])=>b==='neuron')![0];
 const old={...s.roads};s.roads={};assert.equal(signalCoverage(s,evaluateNetwork(s)),0);assert.ok(systemRates(s,evaluateNetwork(s)).food<0);s.roads=old;
 const near={...s.buildings};delete s.buildings[tower];s.buildings.p9='neuron';assert.ok(signalCoverage(s,evaluateNetwork(s))<full);s.buildings=near;
});
test('save recovery bounds campaign resources, chapter access, and decision state',()=>{
 const s=newPlanning();const recovered=readPlanning(JSON.stringify({...s,campaign:{...s.campaign,chapter:99,resources:{food:-1,water:999,waste:999,repair:-10},records:{repair:{passed:true,stars:3}},badges:['not-real'],townName:'<b>test</b>'}}));
 assert.equal(recovered.campaign.chapter,0);assert.equal(recovered.campaign.resources.food,0);assert.equal(recovered.campaign.resources.water,40);assert.equal(recovered.campaign.records.repair,undefined);assert.deepEqual(recovered.campaign.badges,[]);assert.equal(countBuilding(recovered,'home'),1);
});

test('every chapter can earn three stars and the final mastery badge with a cared-for town',()=>{
 const s=newPlanning();ready(s);assert.equal(applyPlanningAction(s,{type:'build',plot:'p2',building:'garden'}),null);
 for(let i=0;i<chapters.length;i++){ready(s);advancePlanning(s,30);finish(s);assert.equal(s.lastResult?.stars,3,chapters[i].id);if(i<5)nextChapter(s);}
 assert.equal(totalStars(s),18);assert.ok(s.campaign.badges.includes('master'));
});

test('a poor resource decision can fail breakfast, preserve construction, and recover through the guide',()=>{
 const s=newPlanning();ready(s);finish(s);nextChapter(s);ready(s);s.campaign.resources.food=6;
 const layout=JSON.stringify([s.buildings,s.roads]),materials=s.materials;startWalk(s);advancePlanning(s,22);chooseDecision(s,1);advancePlanning(s,60);
 assert.equal(s.lastResult?.passed,false);assert.match(s.lastResult!.issue,/营养/);assert.equal(s.materials,materials);assert.equal(JSON.stringify([s.buildings,s.roads]),layout);assert.equal(s.campaign.records.breakfast,undefined);
 ready(s);finish(s);assert.ok(s.campaign.records.breakfast?.passed);
});

test('reopening the tutorial after recycling a home cannot repeat the settling reward',()=>{
 const s=newPlanning();ready(s);assert.equal(applyPlanningAction(s,{type:'remove-building',plot:'p0'}),null);const materials=s.materials;
 assert.equal(replayChapter(s,0),null);assert.equal(s.phase,'prepare');ready(s);assert.equal(s.materials,materials-4);
 const loaded=readPlanning(JSON.stringify(s));assert.equal(countBuilding(loaded,'muscle'),1);
});

test('systems do not start consuming resources before their chapter introduces them',()=>{
 const s=newPlanning();ready(s);finish(s);const supplies={...s.campaign.resources};advancePlanning(s,30);assert.deepEqual(s.campaign.resources,supplies);
 nextChapter(s);ready(s);finish(s);const water=s.campaign.resources.water,waste=s.campaign.resources.waste;advancePlanning(s,30);assert.equal(s.campaign.resources.water,water);assert.equal(s.campaign.resources.waste,waste);
});

test('more demanding chapter choices remain winnable with the recommended connected town',()=>{
 const s=newPlanning();for(let i=0;i<chapters.length;i++){ready(s);advancePlanning(s,30);finish(s,1);assert.equal(s.lastResult?.reward,chapters[i].reward+(chapters[i].decision?.choices[1].gift??0));if(i<5)nextChapter(s);}
 assert.equal(s.campaign.sandbox,true);
});
