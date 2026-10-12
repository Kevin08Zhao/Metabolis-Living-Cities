import { getCity, type CityId, type ModeId } from './model';
import type { LivingWorld } from './world';
import { moments,momentAt,deliveryTrip,changes,chapterAt,readJournal,addFinding,escapeHTML,type Journal,type VisitStep,type FindingKind } from './experience';
import { ObservationLens,anatomyNotes } from './observation';
import { HarborStory } from './workday-ui';

interface Host {world:()=>LivingWorld|null;select:(city:CityId)=>void;setMode:(mode:ModeId)=>void;toast:(text:string)=>void;dialog:(html:string)=>void;closeDialog:()=>void;}
type Episode={type:'delivery'|'change';steps:VisitStep[];start:number;index:number;previous:ModeId;mode:ModeId;done:boolean;};
const $=<T extends HTMLElement=HTMLElement>(s:string)=>document.querySelector<T>(s)!;
const journalKey='metabolis.journal.v2';
export class Explorer {
 private harborStory:HarborStory;
 private panel:HTMLElement;private notice:HTMLElement;private cameraBar:HTMLElement;private lens:ObservationLens;
 private journal:Journal;private profile:string|null=null;private episode:Episode|null=null;
 private internal=false;private lastTick=-1;private panelType='';private observedMoment:string|null=null;
 private photo=false;private photoLabels=true;
 constructor(private host:Host){
  let raw=null;try{raw=localStorage.getItem(journalKey);}catch{}this.journal=readJournal(raw);
  this.panel=document.createElement('section');this.panel.className='experience-card';this.panel.hidden=true;this.panel.setAttribute('aria-label','探索体验');$('.exploration').append(this.panel);
  this.notice=document.createElement('aside');this.notice.className='moment-notice';this.notice.hidden=true;$('.exploration').append(this.notice);
  this.cameraBar=document.createElement('div');this.cameraBar.className='camera-status';this.cameraBar.hidden=true;$('.exploration').append(this.cameraBar);
  this.lens=new ObservationLens($('.world-viewport'),(x,y)=>host.world()?.district?.structureAt(x,y)??null,()=>this.recordStructure());
  this.harborStory=new HarborStory({world:()=>this.world,select:()=>this.host.select('lungs'),show:(title,html)=>this.show(title,html),toast:host.toast,record:(key,title,detail)=>this.record('journey',key,title,detail,'lungs'),photo:()=>this.togglePhoto(true),dialog:host.dialog});
  window.addEventListener('pagehide',()=>this.harborStory.leave());
  const photo=document.createElement('div');photo.className='photo-controls';photo.innerHTML='<span>把这一刻，寄给自己。</span><button data-exp="capture">拍下这刻</button><button data-exp="bookmark">收藏机位</button><button data-exp="photo-exit">退出拍照</button>';$('.exploration').append(photo);
  document.addEventListener('click',e=>{const el=(e.target as HTMLElement).closest<HTMLElement>('[data-exp]');if(el)this.action(el.dataset.exp!,el.dataset.key);});
 }
 private get world(){return this.host.world();}
 private get city(){return this.world?.district?.id;}
 private save(){try{localStorage.setItem(journalKey,JSON.stringify(this.journal));return true;}catch{return false;}}
 private record(kind:FindingKind,key:string,title:string,detail:string,city=this.city){
  if(!city)return;if(addFinding(this.journal,{key,kind,city,title,detail,at:Date.now()})){const saved=this.save();this.host.toast(saved?'新的发现已收进探索手记。':'本次发现已记录；浏览器暂时无法保存到下次。');}
 }
 private show(title:string,html:string){
  this.harborStory.panelVisible=false;
  this.panelType=title;this.panel.hidden=false;$('.exploration').classList.add('experiencing');document.body.classList.remove('city-immersive');const immersion=$('[data-action="immersion"]');immersion.textContent='展开视野';immersion.setAttribute('aria-pressed','false');
  this.panel.innerHTML=`<div class="experience-head"><span>THE WORLD, A LITTLE CLOSER</span><button data-exp="close" aria-label="关闭探索面板">×</button></div><h2>${title}</h2>${html}`;this.panel.scrollTop=0;
 }
 close(){this.harborStory.panelVisible=false;this.panel.hidden=true;$('.exploration').classList.remove('experiencing');this.profile=null;this.panelType='';}
 onLocation(){if(!this.internal){this.stopEpisode(false);this.close();this.observedMoment=null;}}
 onCityChanged(){if(this.internal)return;this.harborStory.leave();this.stopEpisode(false);this.close();this.lens.toggle(false);this.togglePhoto(false);this.profile=null;this.observedMoment=null;this.lastTick=-1;}
 onOverview(){this.onCityChanged();this.notice.hidden=true;this.cameraBar.hidden=true;}
 menu(){
  this.stopEpisode(true);
  if(!this.city){this.host.select('heart');}const d=this.world?.district;if(!d)return;
  const now=momentAt(d.id,this.world!.time);
  this.show('在城里，遇见生活。',`<p class="experience-intro">认识一位居民，跟着一件小事走一段路。</p><button class="workday-entry" data-exp="workday"><span>☼ 肺泡港 · 一段可以参与的日常</span><strong>${this.harborStory.entryLabel} ↗</strong><small>交接、等候、下班小聚 · 约 3 分钟</small></button><button class="trip-feature" data-exp="delivery"><span class="portrait rbc">··</span><span><small>小红的一次送氧任务</small><strong>陪她走过五站循环 ↗</strong></span></button><h3>今天想认识谁？</h3><div class="contact-list">${d.contacts.map((r,i)=>`<button data-exp="inspect" data-key="${r.key}"><span class="portrait person-${i}">··</span><span><strong>${r.name}</strong><small>${r.role}</small></span><i>↗</i></button>`).join('')}</div><h3>换一种方式看城市</h3><div class="experience-options"><button data-exp="walk">沿街慢慢走</button><button data-exp="bench">坐一会儿</button><button data-exp="ride">搭一班慢车</button><button data-exp="lens">打开观察窗</button><button data-exp="photo">拍一张明信片</button><button data-exp="journal">翻开探索手记</button></div><div class="moment-card"><small>此刻 / 即将发生</small><strong>${now.title}</strong><p>${now.active?now.phases[now.stage]:`下一场约 ${now.remaining} 秒后开始`}</p><button data-exp="moment">${now.active?'到现场看看':'去现场等候'} ↗</button></div><div class="change-invitation"><h3>跟随一次身体变化</h3><p>先选一种生活状态，再顺着变化拜访相关城市。</p><div class="change-choices">${(['rest','walk','meal','sleep'] as ModeId[]).map((m,i)=>`<button data-exp="change" data-key="${m}">${['休息','散步','进食','睡眠'][i]}</button>`).join('')}</div></div>`);
 }
 harborInteract(key:string){return this.harborStory.interact(key);}
 inspect(key:string){
  const info=this.world?.district?.inspect(key);if(!info)return;this.profile=key;
  this.record('resident',`${this.city}:${key}`,`认识了${info.name}`,info.role);
  this.show('打个招呼吧。',`<div class="profile-heading"><span class="portrait ${key==='courier'?'rbc':'person-1'}">··</span><div><h3>${escapeHTML(info.name)}</h3><p>${escapeHTML(info.role)}</p></div></div><p class="resident-wish">“${escapeHTML(info.detail)}”</p><dl class="profile-status"><dt>现在</dt><dd id="resident-now">${escapeHTML(info.status)}</dd><dt>这一段的目的地</dt><dd>${escapeHTML(info.destination)}</dd>${info.cargo?`<dt>打开货物看看</dt><dd class="cargo-open">◌ ${escapeHTML(info.cargo)}</dd>`:''}</dl><button class="experience-primary" data-exp="follow" data-key="${key}">跟随${escapeHTML(info.name)} ↗</button><p class="experience-hint">可以随时拖动镜头，回到自由观察。</p>${key.startsWith('harbor:')?'<button class="experience-primary" data-exp="workday">回到小红的一天 ↗</button>':''}<button class="experience-link" data-exp="menu">认识其他居民</button>`);
 }
 private startEpisode(type:'delivery'|'change',mode:ModeId=this.world?.mode??'rest'){
  if(!this.world)return;this.stopEpisode(false);this.close();this.lens.toggle(false);
  const previous=this.world.mode;this.episode={type,steps:type==='delivery'?deliveryTrip:changes[mode],start:this.world.time,index:-1,previous,mode,done:false};
  if(type==='change')this.host.setMode(mode);this.advanceEpisode();
 }
 private advanceEpisode(){
  const e=this.episode,w=this.world;if(!e||!w)return;const state=chapterAt(w.time-e.start,e.steps.length);
  if(state.done&&!e.done){e.done=true;w.district?.releaseCamera();this.record(e.type==='delivery'?'journey':'change',e.type==='delivery'?'delivery-complete':`change:${e.mode}`,e.type==='delivery'?'陪小红走完一次循环':`观察了${{rest:'休息',walk:'散步',meal:'进食',sleep:'睡眠'}[e.mode]}时的身体`,e.steps.map(s=>s.title).join(' → '));this.show('这一段，记住了。',`<div class="chapter-complete">✳</div><p class="experience-intro">${e.type==='delivery'?'小红回到了右心，下一次循环还会继续。':'这些变化彼此联系，身体始终在协作。'}</p><p class="experience-hint">讲解顺序与时间经过压缩，不代表真实反应的先后或时长。</p><button class="experience-primary" data-exp="journal">去手记里看看</button><button class="experience-link" data-exp="episode-stop">${e.type==='change'?'结束并恢复之前的状态':'继续自由探索'}</button>`);return;}
  if(e.done)return;
  const step=e.steps[state.index];
  if(state.index!==e.index){
   e.index=state.index;this.internal=true;this.host.select(step.city);this.internal=false;w.district?.focus(step.poi);this.profile=null;
   if(e.type==='delivery'){w.district?.setCourier(step,state.progress);w.district?.follow('courier');}
   this.show(e.type==='delivery'?'陪小红去送氧':'跟随身体的变化',`<span class="chapter-kicker">${e.type==='delivery'?'A DAY WITH LITTLE RED':'EVERYTHING IS CONNECTED'}</span><h3 class="chapter-title">${step.title}</h3><p class="chapter-text">${step.text}</p><div class="chapter-cargo">◌ ${step.cargo}</div><div class="chapter-track">${e.steps.map((s,i)=>`<span class="${i<=state.index?'done':''}">${i+1}</span>`).join('<i></i>')}</div><div class="chapter-progress"><i id="chapter-progress"></i></div><small class="chapter-time">${state.index+1} / ${e.steps.length} · 自动继续 · 暂停会停住旅程</small><div class="chapter-actions"><button data-exp="chapter-next">${state.index===e.steps.length-1?'完成这一站':'前往下一站'} →</button><button data-exp="episode-stop">${e.type==='change'?'结束并恢复':'结束跟随'}</button></div><p class="experience-hint">城市角色与旅程时间是艺术化、压缩的示意。</p>`);
  }
  if(e.type==='delivery')w.district?.setCourier(step,state.progress);
  const progress=this.panel.querySelector<HTMLElement>('#chapter-progress');if(progress)progress.style.width=`${state.progress*100}%`;
 }
 private stopEpisode(restore:boolean){const e=this.episode;if(!e)return;this.episode=null;this.world?.district?.setCourier(null);this.world?.district?.releaseCamera();if(restore&&e.type==='change')this.host.setMode(e.previous);}
 private moment(){
  const d=this.world?.district;if(!d)return;const m=momentAt(d.id,this.world!.time);this.observedMoment=d.id;
  d.focus(m.poi);this.show('刚好，遇见这一刻。',`<span class="chapter-kicker">A LITTLE HAPPENING</span><h3 class="chapter-title">${m.title}</h3><p id="moment-phase" class="chapter-text">${m.active?m.phases[m.stage]:`下一场约 ${m.remaining} 秒后开始。可以坐下来等一会儿。`}</p><div class="moment-sequence">${m.phases.map((p,i)=>`<p><b>${i+1}</b>${p}</p>`).join('')}</div><p class="moment-fact">${m.fact}</p><button class="experience-primary" data-exp="lens">用观察窗看看机理</button><button class="experience-link" data-exp="menu">回到街区探索</button>`);
 }
 private recordStructure(){const c=this.lens.current;if(!c||!c.near){this.host.toast('把观察窗移到一个地标附近，再记下发现。');return;}this.record('structure',`structure:${c.city}`,anatomyNotes[c.city].title,anatomyNotes[c.city].fact,c.city);}
 journalView(){
  const j=this.journal,groups:Record<FindingKind,string>={resident:'相识的居民',moment:'遇见的小事',structure:'看懂的机理',journey:'旅程',change:'身体的变化'};
  this.host.dialog(`<div class="dialog-kicker">MY METABOLIS JOURNAL</div><h2 id="dialog-title">把好奇，收进手记。</h2><p class="dialog-intro">${j.findings.length} 个发现 · ${j.photos.length} 张明信片 · ${j.views.length} 个收藏机位。保存在当前浏览器。</p><div class="journal-grid"><section><h3>探索记忆</h3>${j.findings.length?j.findings.slice().reverse().map(f=>`<article class="journal-finding"><small>${groups[f.kind]} · ${getCity(f.city).name}</small><h4>${escapeHTML(f.title)}</h4><p>${escapeHTML(f.detail)}</p><button data-exp="visit" data-key="${f.city}">再去看看 ↗</button></article>`).join(''):'<p class="journal-empty">先认识一位居民，或打开观察窗，手记会从第一件小事开始。</p>'}</section><section><h3>我的机位</h3>${j.views.length?j.views.map(v=>`<button class="view-bookmark" data-exp="restore-view" data-key="${escapeHTML(v.id)}">${escapeHTML(v.title)} <span>回到这里 ↗</span></button>`).join(''):'<p class="journal-empty">在拍照模式收藏一个喜欢的角度。</p>'}<h3>城市明信片</h3>${j.photos.length?j.photos.slice().reverse().map(p=>`<figure class="journal-postcard"><img src="${p.image}" alt="${getCity(p.city).name}的城市明信片"><figcaption>${getCity(p.city).name} · ${new Date(p.at).toLocaleDateString('zh-CN')}<a href="${p.image}" download="metabolis-${p.city}.jpg">保存图片 ↓</a></figcaption></figure>`).join(''):'<p class="journal-empty">拍下一个让你想停留的瞬间。</p>'}</section></div>`);
 }
 private togglePhoto(active=!this.photo){
  if(active===this.photo||active&&!this.city)return;this.photo=active;document.body.classList.toggle('photo-mode',active);
  if(active){this.photoLabels=this.world?.district?.labelsVisible??true;if(this.photoLabels)this.world?.district?.toggleLabels();this.lens.toggle(false);}
  else {if(this.photoLabels&&this.world?.district&&!this.world.district.labelsVisible)this.world.district.toggleLabels();this.harborStory.photoEnded();}
 }
 private capture(){
  const w=this.world,city=this.city;if(!w||!city)return;const image=w.capture();
  const photo={id:String(Date.now()),city,image,at:Date.now()};const before=this.journal.photos;this.journal.photos=[...before,photo].slice(-4);
  if(!this.save()){this.journal.photos=before;this.host.toast('浏览器存储空间不足，这张照片未保存。');return;}
  const harborPhoto=this.harborStory.pendingPhoto;const savedMemory=this.harborStory.rememberPhoto(image);
  this.host.toast(!savedMemory?'明信片已存入手记，但港口合照暂时无法保存。':harborPhoto?'合照已挂在花房旁。下次回来，它还会在这里。':'明信片已保存。探索手记中可以查看和下载。');
 }
 private bookmark(){
  const view=this.world?.district?.view();if(!view)return;const before=this.journal.views;this.journal.views=[...before,{id:String(Date.now()),title:`${getCity(view.city).name} · 机位 ${before.length+1}`,view}].slice(-8);
  if(!this.save()){this.journal.views=before;this.host.toast('浏览器暂时无法保存机位。');return;}this.host.toast('这个机位已收藏到探索手记。');
 }
 action(action:string,key?:string){
  if(action==='workday')this.stopEpisode(true);
  if(this.harborStory.action(action,key))return;
  switch(action){
   case 'menu':this.menu();break;
   case 'close':this.stopEpisode(true);this.close();break;
   case 'inspect':if(key)this.inspect(key);break;
   case 'follow':if(key)this.world?.district?.follow(key);break;
   case 'free':this.world?.district?.releaseCamera();this.stopEpisode(true);this.close();break;
   case 'walk':case 'bench':case 'ride':this.stopEpisode(true);this.close();this.world?.district?.watch(action);break;
   case 'delivery':this.startEpisode('delivery');break;
   case 'change':this.startEpisode('change',(key??'walk') as ModeId);break;
   case 'chapter-next':if(this.episode){this.episode.start=this.world!.time-(this.episode.index+1)*18;this.advanceEpisode();}break;
   case 'episode-stop':this.stopEpisode(true);this.close();break;
   case 'moment':this.moment();break;
   case 'lens':this.lens.toggle();break;
   case 'journal':this.journalView();break;
   case 'photo':this.stopEpisode(true);this.togglePhoto(true);break;
   case 'photo-exit':this.togglePhoto(false);break;
   case 'capture':this.capture();break;
   case 'bookmark':this.bookmark();break;
   case 'visit':this.host.closeDialog();if(key)this.host.select(key as CityId);break;
   case 'restore-view':{const v=this.journal.views.find(v=>v.id===key);if(v){this.host.closeDialog();this.host.select(v.view.city);this.world?.district?.restoreView(v.view);}break;}
  }
 }
 tick(){
  const w=this.world;if(!w)return;this.harborStory.tick();this.advanceEpisode();
  const d=w.district;this.notice.hidden=!d||!!this.episode||(d.id==='lungs'&&this.harborStory.panelVisible);this.cameraBar.hidden=!d||d.viewMode==='free';
  if(d&&d.viewMode!=='free'){
   const text=d.viewMode==='walk'?'沿街漫游中':d.viewMode==='bench'?'坐在街边，看一会儿':`正在跟随 ${d.following?d.inspect(d.following)?.name??'居民':''}`;
   if(this.cameraBar.dataset.text!==text){this.cameraBar.dataset.text=text;this.cameraBar.innerHTML=`<span>${escapeHTML(text)}</span>${d.following?.startsWith('vehicle')?`<button data-exp="inspect" data-key="${d.following}">看看车上的货物</button>`:''}<button data-exp="free">自由观察 ×</button>`;}
  }
  const now=performance.now();if(now-this.lastTick<300)return;this.lastTick=now;
  this.lens.update();
  if(d){
   const m=momentAt(d.id,w.time),text=m.active?m.phases[m.stage]:`${m.remaining} 秒后，${m.title}`;
   if(d.id==='lungs'&&this.harborStory.inProgress){this.notice.dataset.text='harbor';this.notice.innerHTML='<i class="happening"></i><span><small>小红的一天还在继续</small><strong>回到熟悉的港口</strong></span><button data-exp="workday">回到小红身边 ↗</button>';}
   else if(this.notice.dataset.text!==text){this.notice.dataset.text=text;this.notice.innerHTML=`<i class="${m.active?'happening':''}"></i><span><small>${m.active?'此刻，城里有件小事':'城市的日常仍在继续'}</small><strong>${m.active?m.title:text}</strong></span><button data-exp="moment">去看看 ↗</button>`;}
   if(this.observedMoment===d.id&&this.panelType==='刚好，遇见这一刻。'){
    const p=this.panel.querySelector('#moment-phase');if(p)p.textContent=text;
    if(m.active&&m.stage===2)this.record('moment',`moment:${d.id}`,m.title,m.fact);
   }
   if(this.profile){const info=d.inspect(this.profile),now=this.panel.querySelector('#resident-now');if(info&&now)now.textContent=info.status;}
  }
 }
}
