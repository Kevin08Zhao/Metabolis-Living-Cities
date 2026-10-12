import type { LivingWorld } from './world';
import { escapeHTML } from './experience';
import { readWorkday,beginWorkday,advanceWorkday,choosePartner,workChapters,workProgress,type HarborPerson } from './workday';

interface StoryHost {
 world:()=>LivingWorld|null;select:()=>void;show:(title:string,html:string)=>void;
 toast:(text:string)=>void;record:(key:string,title:string,detail:string)=>void;
 photo:()=>void;dialog:(html:string)=>void;
}
const saveKey='metabolis.harbor.workday.v1';
export class HarborStory {
 readonly state;panelVisible=false;pendingPhoto=false;
 private lastTime:number|null=null;private savedAt=0;private notifiedCompletion=0;
 constructor(private host:StoryHost){let raw=null;try{raw=localStorage.getItem(saveKey);}catch{}this.state=readWorkday(raw);this.notifiedCompletion=this.state.completed;}
 get inProgress(){return this.state.active;}
 get entryLabel(){return this.state.active?'回到小红身边':this.state.completed?'老朋友，回港口坐坐':'陪小红过一个工作日';}
 private save(){try{localStorage.setItem(saveKey,JSON.stringify(this.state));return true;}catch{return false;}}
 leave(){this.panelVisible=false;this.lastTime=this.host.world()?.time??null;this.save();}
 enter(){this.host.select();this.lastTime=this.host.world()?.time??null;this.host.world()?.district?.setWorkday(this.state);this.host.world()?.district?.focusHarbor(this.state.active&&!['setting-out','returning'].includes(this.state.stage));this.render();}
 interact(key:string){
  const person=key.split(':')[1];if(person==='welcome'){this.enter();return true;}if(person==='memory'){this.memory();return true;}
  if(this.state.stage==='partner'&&this.state.active&&['bubble','cloud','green','red'].includes(person)){this.choose(person as HarborPerson);return true;}return false;
 }
 private render(){
  const s=this.state,c=workChapters[s.stage],timed=c.duration>0;
  this.host.show('港口的一天',`<div class="workday-banner"><span class="workday-sun">☼</span><span>LITTLE RED’S DAY<small>肺泡港 · 一起慢慢生活</small></span>${s.completed?'<i>熟悉的港口</i>':''}</div><span class="chapter-kicker">${c.eyebrow}</span><h3 class="workday-title">${c.title}</h3><p class="workday-body">${c.body}</p><div class="workday-dialogue"><span class="portrait ${c.speaker==='小红'?'rbc':c.speaker==='云云'?'person-2':'person-1'}">··</span><p><b>${c.speaker}</b>“${c.line}”</p></div>${s.stage==='invitation'?'<button class="workday-primary" data-exp="workday-start">一起出发 ↗</button>':s.stage==='partner'?`<div class="workday-choices" aria-label="选择交接伙伴"><button data-exp="workday-partner" data-key="bubble"><span class="portrait person-1">··</span><b>泡泡</b><small>带路的接待员</small></button><button data-exp="workday-partner" data-key="cloud"><span class="portrait person-2">··</span><b>云云</b><small>蓝帽子的交接员</small></button><button data-exp="workday-partner" data-key="green"><span class="portrait">··</span><b>小青</b><small>花房的店员</small></button></div><p class="workday-feedback" role="status">${escapeHTML(s.hint||'看一眼柜台，再向伙伴打个招呼。')}</p>`:s.stage==='complete'?`<div class="workday-keepsake">✳ ${s.photo?'小铺旁已经挂上了我们的合照。':'这座城里，有人记得你了。'}</div><button class="workday-primary" data-exp="workday-photo">${s.photo?'再拍一张合照':'给大家拍张合照'} ↗</button><button class="experience-link" data-exp="workday-memory">翻开这段记忆</button><button class="experience-link workday-replay" data-exp="workday-start">再陪小红上一次班</button>`:''}${timed?`<div class="workday-progress"><i style="width:${workProgress(s)*100}%"></i></div><div class="workday-clock"><span data-workday-clock>${Math.ceil(c.duration-s.elapsed)} 秒 · 自动继续</span><button data-exp="workday-next">快进这一段 →</button></div>`:''}<div class="workday-camera"><button data-exp="workday-wide">看整个港口</button><button data-exp="workday-follow">跟着小红走</button></div><details class="workday-note"><summary>这段故事对应什么？</summary><p>氧气从肺泡扩散进入血液，二氧化碳向相反方向扩散。柜台、箱子和下班小聚是帮助理解的城市故事；真实气体交换连续发生，不需要排队或人工搬运。</p></details><p class="workday-footnote">离开港口会暂存进度，回来可以继续。空格暂停。</p>`);
  this.panelVisible=true;
 }
 private choose(person:HarborPerson){const correct=choosePartner(this.state,person);this.save();this.render();if(correct)this.host.world()?.district?.focusHarbor(true);}
 action(action:string,key?:string):boolean {
  switch(action){
   case 'workday':this.enter();break;
   case 'workday-start':beginWorkday(this.state);this.save();this.host.world()?.district?.focusHarbor(false);this.render();break;
   case 'workday-partner':if(['red','bubble','cloud','green'].includes(key??''))this.choose(key as HarborPerson);break;
   case 'workday-next':advanceWorkday(this.state,workChapters[this.state.stage].duration-this.state.elapsed);this.changed();break;
   case 'workday-wide':this.host.world()?.district?.focusHarbor(false);break;
   case 'workday-follow':this.host.world()?.district?.follow('harbor:red');break;
   case 'workday-photo':this.pendingPhoto=true;this.host.world()?.district?.focusHarbor(true);this.host.photo();break;
   case 'workday-memory':this.memory();break;
   default:return false;
  }return true;
 }
 private changed(){
  if(this.state.completed>this.notifiedCompletion){this.notifiedCompletion=this.state.completed;this.host.record(`harbor-shift:${this.state.completed}`,'和小红一起，在肺泡港上了一天班','认识泡泡、云云和小青；完成气体交接，再在花房旁一起休息。');}
  const saved=this.save();if(!saved)this.host.toast('这段故事仍可继续，但浏览器暂时无法保存进度。');
  if(this.panelVisible){this.host.world()?.district?.focusHarbor(!['setting-out','returning'].includes(this.state.stage));this.render();}
 }
 tick(){
  const w=this.host.world();if(!w)return;const delta=this.lastTime===null?0:Math.max(0,w.time-this.lastTime);this.lastTime=w.time;
  if(w.district?.id!=='lungs')return;w.district.setWorkday(this.state);
  if(advanceWorkday(this.state,delta))this.changed();
  if(w.time-this.savedAt>5&&this.state.active){this.savedAt=w.time;this.save();}
  if(this.panelVisible){const c=workChapters[this.state.stage],bar=document.querySelector<HTMLElement>('.workday-progress i'),clock=document.querySelector<HTMLElement>('[data-workday-clock]');if(bar)bar.style.width=`${workProgress(this.state)*100}%`;if(clock)clock.textContent=w.paused?'已暂停 · 可以继续观察':`${Math.ceil(c.duration-this.state.elapsed)} 秒 · 自动继续`;}
 }
 rememberPhoto(image:string){
  if(!this.pendingPhoto)return true;const previous=this.state.photo;this.state.photo=image;
  if(!this.save()){this.state.photo=previous;return false;}return true;
 }
 photoEnded(){this.pendingPhoto=false;if(this.panelVisible)this.render();}
 private memory(){
  this.host.dialog(`<div class="dialog-kicker">A PLACE THAT REMEMBERS YOU</div><h2 id="dialog-title">港口记得这一天。</h2><p class="dialog-intro">${this.state.completed?`你和小红完成了 ${this.state.completed} 次工作日。泡泡、云云和小青已经认得你。`:'故事刚刚开始，港口还有空位等你。'}</p>${this.state.photo?`<figure class="harbor-memory-photo"><img src="${this.state.photo}" alt="你与小红在肺泡港留下的合照"><figcaption>小青花房旁 · 下次来，还坐这里。<a href="${this.state.photo}" download="metabolis-harbor-memory.jpg">保存合照 ↓</a></figcaption></figure>`:'<div class="workday-memory-empty"><span class="portrait rbc">··</span><span class="portrait person-1">··</span><span class="portrait person-2">··</span><p>完成工作日后，可以为大家留下合照。</p></div>'}<p class="workday-body">这里的相识、进度和合照保存在当前浏览器。回到港口，仍能继续这段日常。</p>`);
 }
}
