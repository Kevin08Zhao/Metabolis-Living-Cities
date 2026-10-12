import test from 'node:test';
import assert from 'node:assert/strict';
import { createSimulation, advanceSimulation } from '../src/model.ts';
import { advanceTraffic, createTraffic, sampleWalk, wrap } from '../src/street-life.ts';

test('traffic stops at a station, departs again, and preserves headway over multiple laps',()=>{
  const cars=createTraffic(8,60,42);let stopped=false,departed=false;
  for(let i=0;i<18000;i++){
    advanceTraffic(cars,60,1/30,i>8000?1.5:1);
    if(cars[0].dwell>0)stopped=true;
    if(stopped&&cars[0].dwell===0&&cars[0].speed>.4)departed=true;
    const sorted=cars.map(c=>c.distance).sort((a,b)=>a-b);
    for(let j=0;j<sorted.length;j++)assert.ok(wrap(sorted[(j+1)%sorted.length]-sorted[j],60)>=1.4999);
  }
  assert.ok(stopped);assert.ok(departed);
});
test('paused traffic is unchanged and resuming produces a bounded continuous step',()=>{
  const cars=createTraffic(6,55,18);advanceTraffic(cars,55,2);
  const before=structuredClone(cars);advanceTraffic(cars,55,0,2);assert.deepEqual(cars,before);
  advanceTraffic(cars,55,1/60,2);cars.forEach((c,i)=>assert.ok(wrap(c.distance-before[i].distance,55)<.1));
});
test('residents have reproducible individual pacing and real periods of rest',()=>{
  const samples=Array.from({length:1000},(_,i)=>sampleWalk(i*.5,35,72));
  assert.ok(samples.some(s=>!s.moving));assert.ok(samples.some(s=>s.moving));
  assert.ok(samples.every(s=>s.progress>=0&&s.progress<=1));
  assert.notEqual(sampleWalk(10,35,72).pace,sampleWalk(10,35,73).pace);
  assert.deepEqual(sampleWalk(25,35,72),sampleWalk(25,35,72));
});

 test('shared clock keeps street life still when a paused city changes activity',()=>{
  const s=createSimulation(),cars=createTraffic(6,55,18);
  for(let i=0;i<90;i++){const before=s.time;advanceSimulation(s,'walk',1/30);advanceTraffic(cars,55,s.time-before,s.flow);}
  const beforeCars=structuredClone(cars),beforeWalker=sampleWalk(s.time,35,42),beforeTime=s.time;
  advanceSimulation(s,'meal',30,2,true);advanceTraffic(cars,55,s.time-beforeTime,s.flow);
  assert.deepEqual(cars,beforeCars);assert.deepEqual(sampleWalk(s.time,35,42),beforeWalker);
  advanceSimulation(s,'meal',1/60);advanceTraffic(cars,55,s.time-beforeTime,s.flow);
  assert.ok(cars.some((c,i)=>c.distance!==beforeCars[i].distance));
 });
