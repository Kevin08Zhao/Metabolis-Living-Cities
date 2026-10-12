import test from 'node:test';
import assert from 'node:assert/strict';
import { cities, bloodRoutes, tourSteps, modes, readProgress, createSimulation, advanceSimulation } from '../src/model.ts';

test('pulmonary and systemic circulation have the correct oxygenation and direction',()=>{
  assert.equal(bloodRoutes.find(r=>r.from==='heart'&&r.to==='lungs')?.oxygen,false);
  assert.equal(bloodRoutes.find(r=>r.from==='lungs'&&r.to==='heart')?.oxygen,true);
  for(const city of cities.filter(c=>c.id!=='heart'&&c.id!=='lungs')){
    assert.equal(bloodRoutes.find(r=>r.from==='heart'&&r.to===city.id)?.oxygen,true);
    assert.equal(bloodRoutes.find(r=>r.from===city.id&&r.to==='heart')?.oxygen,false);
  }
});
test('every tutorial transition uses a real directed blood vessel',()=>{
  assert.equal(tourSteps[0].city,'heart');assert.equal(tourSteps.at(-1)?.city,'heart');
  for(let i=1;i<tourSteps.length;i++)assert.ok(bloodRoutes.some(r=>r.from===tourSteps[i-1].city&&r.to===tourSteps[i].city));
});
test('walking gradually increases cardiovascular activity without an instantaneous jump',()=>{
  const s=createSimulation();advanceSimulation(s,'walk',1/60);
  assert.ok(s.heart>72&&s.heart<74);assert.ok(s.flow>1&&s.flow<1.1);
  for(let i=0;i<600;i++)advanceSimulation(s,'walk',1/60);
  assert.ok(Math.abs(s.heart-modes.walk.heart)<.01);assert.ok(Math.abs(s.breath-modes.walk.breath)<.01);
});
test('pause freezes rates, phase, traffic and nutrient movement even when the mode changes',()=>{
  const s=createSimulation();advanceSimulation(s,'walk',1);const before={...s};
  advanceSimulation(s,'sleep',50,2,true);assert.deepEqual(s,before);
});
test('traffic remains continuous when switching from exercise to sleep',()=>{
  const s=createSimulation();for(let i=0;i<300;i++)advanceSimulation(s,'walk',1/60);
  const before=s.transport,beats=s.beats;advanceSimulation(s,'sleep',1/60);
  assert.ok(s.transport>before&&s.transport-before<.04);
  assert.ok(s.beats>beats&&s.beats-beats<.04);
  for(let i=0;i<600;i++)advanceSimulation(s,'sleep',1/60);
  assert.ok(Math.abs(s.heart-modes.sleep.heart)<.01);
});
test('double speed advances the simulated time twice as fast',()=>{
  const s=createSimulation();advanceSimulation(s,'rest',.5,2);
  assert.equal(s.time,1);assert.equal(s.transport,1);assert.equal(s.beats,1.2);
});
test('meal increases nutrient activity, independent of blood-flow speed',()=>{
  const s=createSimulation();for(let i=0;i<600;i++)advanceSimulation(s,'meal',1/60);
  assert.ok(s.digestion>2.29);assert.ok(s.flow<1.13);assert.ok(s.nutrients>s.transport);
});
test('invalid frame inputs cannot corrupt simulation state',()=>{
  const s=createSimulation(),before={...s};
  for(const dt of [-1,0,Infinity,NaN])advanceSimulation(s,'walk',dt);
  advanceSimulation(s,'walk',1,-1);assert.deepEqual(s,before);
});
test('exploration progress recovers safely from malformed or obsolete saves',()=>{
  for(const raw of [null,'undefined','{broken','{}','4','"heart"'])assert.deepEqual(readProgress(raw),[]);
  assert.deepEqual(readProgress('["heart","unknown","heart",null,2,"lungs"]'),['heart','lungs']);
});
test('all six visited cities survive a save round trip',()=>{
  const ids=cities.map(c=>c.id);assert.deepEqual(readProgress(JSON.stringify(ids)),ids);
});
