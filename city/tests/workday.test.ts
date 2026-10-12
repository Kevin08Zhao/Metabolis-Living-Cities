import test from 'node:test';
import assert from 'node:assert/strict';
import {newWorkday,beginWorkday,advanceWorkday,choosePartner,readWorkday,harborDialogue,workChapters,workProgress} from '../src/workday.ts';

test('the workday waits for participation and cannot auto-complete past the partner gate',()=>{
 const s=newWorkday();advanceWorkday(s,999);assert.equal(s.stage,'invitation');beginWorkday(s);advanceWorkday(s,999);
 assert.equal(s.stage,'partner');assert.equal(s.completed,0);assert.equal(s.elapsed,0);
 assert.equal(choosePartner(s,'green'),false);assert.equal(s.stage,'partner');assert.match(s.hint,/云云/);
 assert.equal(choosePartner(s,'cloud'),true);advanceWorkday(s,999);assert.equal(s.stage,'complete');assert.equal(s.completed,1);advanceWorkday(s,999);assert.equal(s.completed,1);
});
test('pausing or leaving the port freezes work without losing its progress',()=>{
 const s=newWorkday();beginWorkday(s);advanceWorkday(s,12);const saved=JSON.stringify(s);
 advanceWorkday(s,0);advanceWorkday(s,99,false);advanceWorkday(s,NaN);assert.equal(JSON.stringify(s),saved);
 const restored=readWorkday(saved);assert.equal(restored.elapsed,12);advanceWorkday(restored,16);assert.equal(restored.stage,'queue');assert.equal(restored.elapsed,0);
});
test('completing a shift changes greetings and replay preserves the shared memory',()=>{
 const s=newWorkday();beginWorkday(s);advanceWorkday(s,999);choosePartner(s,'cloud');advanceWorkday(s,999);s.photo='data:image/jpeg;base64,YWJj';
 assert.match(harborDialogue(s,'bubble'),/老朋友/);beginWorkday(s);assert.equal(s.completed,1);assert.equal(s.photo,'data:image/jpeg;base64,YWJj');assert.equal(s.stage,'setting-out');
 advanceWorkday(s,999);choosePartner(s,'cloud');advanceWorkday(s,999);assert.equal(s.completed,2);
});
test('saved workday data is bounded and rejects malformed stage and image data',()=>{
 assert.deepEqual(readWorkday('null'),newWorkday());assert.deepEqual(readWorkday('{oops'),newWorkday());
 assert.deepEqual(readWorkday('{"version":1,"stage":"bad"}'),newWorkday());
 const s=readWorkday(JSON.stringify({version:1,stage:'queue',elapsed:1e9,active:true,completed:-12,photo:'javascript:alert(1)'}));
 assert.equal(s.elapsed,workChapters.queue.duration);assert.equal(s.completed,0);assert.equal(s.photo,null);assert.equal(workProgress(s),1);
 advanceWorkday(s,1);assert.equal(s.stage,'partner');
});

test('recovering a partial save cannot leave the player in an inactive timed stage',()=>{
 const s=readWorkday(JSON.stringify({version:1,stage:'returning',elapsed:7,active:false,completed:1}));
 assert.equal(s.active,true);advanceWorkday(s,25);assert.equal(s.stage,'rest');assert.equal(s.completed,1);
});
