import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import { cityPlans } from '../src/city-plans.ts';
import { cities } from '../src/model.ts';

test('all six cities provide distinct plans, at least five explorable landmarks and named roads',()=>{
  assert.equal(new Set(Object.values(cityPlans).map(p=>p.title)).size,6);
  for(const city of cities){const plan=cityPlans[city.id];assert.ok(plan.landmarks.length>=5);assert.ok(plan.roads.length>=2);assert.equal(new Set(plan.landmarks.map(l=>l.id)).size,plan.landmarks.length);for(const l of plan.landmarks){assert.ok(l.description.trim().length>0);assert.ok(l.activity.trim().length>0);assert.ok(l.position.every(Number.isFinite));}}
});
test('traffic loops are continuous at their seam',()=>{
  for(const p of Object.values(cityPlans))for(const road of p.roads){
    const curve=new T.CatmullRomCurve3(road.points.map(([x,z])=>new T.Vector3(x,0,z)),true,'catmullrom',.42);
    assert.ok(curve.getPointAt(0).distanceTo(curve.getPointAt(1))<1e-6);
    assert.ok(curve.getTangentAt(.0001).dot(curve.getTangentAt(.9999))>.99);
    assert.ok(curve.getLength()/Math.ceil(road.vehicles/2)>2,'Vehicles have more than two body lengths of space.');
  }
});
test('independent traffic loops leave clearance for both vehicles and sidewalk residents',()=>{
  for(const [id,plan] of Object.entries(cityPlans)){
    const samples=plan.roads.map(road=>new T.CatmullRomCurve3(road.points.map(([x,z])=>new T.Vector3(x,0,z)),true,'catmullrom',.42).getSpacedPoints(300));
    for(let i=0;i<samples.length;i++)for(let j=i+1;j<samples.length;j++){
      let min=Infinity;for(const a of samples[i])for(const b of samples[j])min=Math.min(min,a.distanceTo(b));
      assert.ok(min>=2,`${id}: lanes ${i} and ${j} overlap (${min.toFixed(2)}).`);
    }
  }
});
