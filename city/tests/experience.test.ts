import test from 'node:test';
import assert from 'node:assert/strict';
import { addFinding,emptyJournal,readJournal,chapterAt,deliveryTrip,changes,momentAt,moments,cityIds,validView,escapeHTML } from '../src/experience.ts';
import { cityPlans } from '../src/city-plans.ts';
import { createSimulation,advanceSimulation } from '../src/model.ts';

test('all visit steps and events resolve to modeled landmarks',()=>{
 for(const step of [...deliveryTrip,...Object.values(changes).flat()])assert.ok(cityPlans[step.city].landmarks.some(l=>l.id===step.poi),`${step.city}/${step.poi}`);
 for(const city of cityIds)assert.ok(cityPlans[city].landmarks.some(l=>l.id===moments[city].poi));
});
test('delivery follows the directed pulmonary and systemic circulation',()=>{
 assert.deepEqual(deliveryTrip.map(s=>s.city),['heart','lungs','heart','brain','heart']);
 assert.deepEqual(deliveryTrip.map(s=>s.oxygen),[false,true,true,false,false]);
 assert.equal(deliveryTrip[0].poi,'right-ventricle');assert.equal(deliveryTrip[2].poi,'left-ventricle');assert.equal(deliveryTrip[4].poi,'right-atrium');
});
test('chapter boundaries include every stop and finish without running beyond the trip',()=>{
 assert.deepEqual(chapterAt(-4,5),{index:0,progress:0,done:false});
 assert.equal(chapterAt(17.99,5).index,0);assert.equal(chapterAt(18,5).index,1);
 assert.deepEqual(chapterAt(90,5),{index:4,progress:1,done:true});assert.equal(chapterAt(9000,5).index,4);
});
test('trips and short events freeze with the shared simulation clock',()=>{
 const s=createSimulation();advanceSimulation(s,'walk',21);const a=chapterAt(s.time,5),b=momentAt('heart',s.time);
 advanceSimulation(s,'sleep',300,2,true);assert.deepEqual(chapterAt(s.time,5),a);assert.deepEqual(momentAt('heart',s.time),b);
 advanceSimulation(s,'walk',1,2);assert.equal(s.time,23);
});
test('every short event has three phases and a quiet interval',()=>{
 for(const city of cityIds){const states=Array.from({length:66},(_,i)=>momentAt(city,i));assert.equal(states.filter(s=>s.active).length,24);assert.deepEqual([...new Set(states.filter(s=>s.active).map(s=>s.stage))].sort(),[0,1,2]);}
});
test('journal recovers from corrupt data and rejects unsafe images and non-finite views',()=>{
 assert.deepEqual(readJournal('{oops'),emptyJournal());assert.deepEqual(readJournal('null'),emptyJournal());
 const j=readJournal(JSON.stringify({photos:[{id:'x',city:'heart',at:1,image:'javascript:alert(1)'}],views:[{id:'x',title:'x',view:{city:'heart',eye:[0,null,0],target:[0,0,0]}}]}));assert.equal(j.photos.length,0);assert.equal(j.views.length,0);
 assert.ok(validView({city:'heart',eye:[8,4,7],target:[0,1,0]}));assert.ok(!validView({city:'bad',eye:[8,4,7],target:[0,1,0]}));
});
test('findings deduplicate and survive a saved round trip',()=>{
 const j=emptyJournal(),f={key:'heart:person:0',kind:'resident' as const,city:'heart' as const,title:'认识阿律',detail:'居民',at:1};
 assert.ok(addFinding(j,f));assert.ok(!addFinding(j,f));assert.deepEqual(readJournal(JSON.stringify(j)),j);
 assert.equal(escapeHTML('<img onerror="x">'),'&lt;img onerror=&quot;x&quot;&gt;');
});
