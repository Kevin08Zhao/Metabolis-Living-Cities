import type { CityId } from './model';
export interface AudioScene {city:CityId;pan:number;distance:number;walking:boolean;riding:boolean;activity?:string;}
/** Quiet, locally synthesized cues; no external audio assets or autoplay. */
export class Soundscape {
 private last=-1;private water=-1;private activity:string|undefined;
 constructor(private context:AudioContext){}
 tick(time:number,scene:AudioScene|null,paused:boolean){
  if(!scene||paused||this.context.state!=='running')return;
  if(scene.activity!==this.activity){this.activity=scene.activity;if(scene.activity==='exchange'){this.note(660,.25,scene.pan,.009);this.note(880,.35,scene.pan,.005);}else if(scene.activity==='queue')this.note(1100,.4,scene.pan,.004);else if(scene.activity==='complete')this.note(520,.5,scene.pan,.008);}
  const cadence=scene.walking?.44:scene.riding?.65:1.7;
  if(time-this.last>cadence){this.last=time;this.note(scene.walking?170:scene.riding?78:330,.06,scene.pan,.007/(1+scene.distance/10));}
  if((scene.city==='kidneys'||scene.city==='lungs')&&time-this.water>1.1){this.water=time;this.note(610+Math.sin(time)*90,.22,-scene.pan,.005/(1+scene.distance/15));}
 }
 private note(frequency:number,duration:number,pan:number,volume:number){
  const now=this.context.currentTime,osc=this.context.createOscillator(),gain=this.context.createGain(),stereo=this.context.createStereoPanner();osc.type=frequency<200?'triangle':'sine';osc.frequency.setValueAtTime(frequency,now);osc.frequency.exponentialRampToValueAtTime(frequency*.55,now+duration);gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(volume,now+.009);gain.gain.exponentialRampToValueAtTime(.00001,now+duration);stereo.pan.value=pan;osc.connect(gain);gain.connect(stereo);stereo.connect(this.context.destination);osc.start(now);osc.stop(now+duration+.01);osc.onended=()=>{osc.disconnect();gain.disconnect();stereo.disconnect();};
 }
}
