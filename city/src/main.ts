import './style.css';
import { cities, getCity, modes, tourSteps, sources, readProgress, type CityId, type ModeId } from './model';
import { icon } from './icons';
import { LivingWorld } from './world';
import { cityPlans } from './city-plans';
import { Explorer } from './explore-ui';
import { Soundscape } from './soundscape';
import { Planner } from './planning-ui';

const $ = <T extends HTMLElement=HTMLElement>(selector:string)=>document.querySelector<T>(selector)!;
const storageKey='metabolis.explored.v1';
let visited:CityId[]=[];
try { visited=readProgress(localStorage.getItem(storageKey)); } catch { /* Exploration remains available without storage. */ }
let selected:CityId|null=null, mode:ModeId='rest', tour=-1, sound=false, audio:AudioContext|null=null, lastBeat=-1;
let world:LivingWorld|null=null;
let explorer:Explorer|null=null, soundscape:Soundscape|null=null;
let planner:Planner|null=null;
let selectedPOI:string|null=null;
let restoreFocus:HTMLElement|null=null;
let toastTimer:ReturnType<typeof setTimeout>;

document.querySelector('#app')!.innerHTML=`
  <header class="topbar">
    <a class="brand" href="#" aria-label="Metabolis 返回建设街区"><span class="brand-mark">${icon('spark')}</span><span>metabolis<span class="brand-caption">生命群岛</span></span></a>
    <nav class="topnav" aria-label="主导航"><button class="nav-tab active" data-action="planning">建设生活<span>BUILD & GROW</span></button><button class="nav-tab" data-action="overview">漫游群岛<span>EXPLORE</span></button><button class="nav-tab" data-action="atlas">城市图鉴<span>FIELD GUIDE</span></button><button class="nav-tab" data-exp="journal">探索手记<span>JOURNAL</span></button></nav>
    <div class="header-tools"><span class="live-status"><i></i>生命，正在发生</span><button class="icon-button" data-action="sound" aria-label="开启城市环境声" title="城市环境声">${icon('mute')}</button><button class="icon-button" data-action="about" aria-label="了解这个世界" title="了解这个世界">${icon('help')}</button></div>
  </header>
  <aside class="sidebar">
    <div class="intro"><div class="eyebrow"><span></span>A LITTLE WORLD WITHIN</div><h1>身体里，<br>住着一座城<span>。</span></h1><p>穿过血管的小径，拜访忙碌的细胞。<br>一起看看，生命如何悄悄运转。</p></div>
    <div class="city-nav-heading"><span>六座城市，一个生命</span><span>01 — 06</span></div>
    <nav class="city-nav" aria-label="人体城市">${cities.map((c,i)=>`<button class="city-link" data-city="${c.id}" style="--city:${c.color};--pale:${c.pale}" aria-label="${c.name}"><span class="city-symbol">${icon(c.id)}</span><span class="city-link-copy"><strong>${c.name}</strong><small>${c.system}</small></span><span class="city-link-end">${String(i+1).padStart(2,'0')}</span></button>`).join('')}</nav>
    <div class="sidebar-bottom"><div class="passport"><div><span>${icon('book')} 我的探索手记</span><b id="progress-count">${visited.length}<small> / 6</small></b></div><div class="progress-track"><i id="progress-bar" style="width:${visited.length/6*100}%"></i></div><p id="progress-caption">每一次好奇，都值得被记住。</p></div>
    <button class="journey-launch" data-action="tour" aria-label="开始红细胞旅行" title="跟随红细胞小红旅行"><span class="rbc-avatar"><i></i><b>··</b></span><span><small>跟着小红出发</small><strong>一颗红细胞的旅行 ${icon('arrow')}</strong></span></button></div>
    <div class="sidebar-foot">一个关于你自己的微观世界 <span>✳</span></div>
  </aside>
  <main class="exploration" aria-label="生命群岛互动世界">
    <div class="world-viewport"><div id="world"></div><div id="map-labels"></div><div class="world-vignette"></div></div>
    <div class="world-heading"><span class="tiny-label">THE LIVING ARCHIPELAGO</span><div><span class="world-location">群岛全景</span><span class="world-location-en">一切相连，生生不息</span></div></div>
    <div class="city-toolbar" aria-label="城市观察工具" hidden><button data-action="overview" class="city-back">← 群岛</button><span></span><button data-camera="city" class="active">全城视角</button><button data-camera="street">街区近景</button><button data-poi="life" class="life-entry">街角生活</button><button data-camera="top">俯瞰规划</button><button data-exp="menu" class="discover-entry">居民与发现</button><button data-exp="lens">观察窗</button><span></span><button data-action="orbit" aria-pressed="false">↻ 自动环绕</button><button data-action="labels" aria-pressed="true">地标</button><button data-action="immersion" aria-pressed="false">展开视野</button></div>
    <div class="vitals" aria-label="城市模拟状态"><div class="vital heart-vital">${icon('heart')}<span><b id="heart-value">72</b><small>心跳 / 分</small></span><svg viewBox="0 0 48 24" class="pulse-line"><path d="M0 13h10l4-4 5 12 6-20 4 12h19"/></svg></div><div class="vital">${icon('lungs')}<span><b id="breath-value">14</b><small>呼吸 / 分</small></span></div><span class="sim-label">示意模拟</span></div>
    <div class="map-note"><span class="map-note-star">✳</span><span>欢迎来到，你的身体。</span></div>
    <div class="legend"><span><i class="oxygen"></i>富氧血流</span><span><i class="return"></i>低氧血流</span><span><i class="signal"></i>神经信号</span></div>
    <section id="inspector" class="inspector" aria-label="城市观察卡" hidden></section>
    <section id="tour-card" class="tour-card" aria-label="红细胞旅行" hidden></section>
    <div class="view-controls"><button class="icon-button" data-action="zoom-in" aria-label="放大地图" title="放大">${icon('plus')}</button><button class="icon-button" data-action="zoom-out" aria-label="缩小地图" title="缩小">${icon('minus')}</button><span></span><button class="icon-button" data-action="reset" aria-label="返回全景" title="返回全景">${icon('focus')}</button></div>
    <div class="bottom-area"><div class="world-message"><i></i><span id="mode-message">${modes.rest.message}</span></div><div class="simulation-dock"><div class="dock-label">如果此刻…<small>A DAY IN YOUR BODY</small></div><div class="mode-buttons" role="group" aria-label="生活状态">${(Object.keys(modes) as ModeId[]).map((id,i)=>`<button class="mode-button ${id==='rest'?'active':''}" data-mode="${id}" aria-pressed="${id==='rest'}">${icon(['sun','walk','meal','moon'][i])}<span>${['休息','散步','进食','睡眠'][i]}</span></button>`).join('')}</div><div class="playback"><button class="icon-button" data-action="pause" aria-label="暂停模拟" title="暂停">${icon('pause')}</button><button class="speed-button" data-action="speed" aria-label="切换模拟速度">1×</button></div></div><div class="map-help"><span>拖动探索</span><i>·</i><span>滚轮缩放</span><i>·</i><span>点击城市发现更多</span></div></div>
    <div id="toast" class="toast" role="status" hidden></div>
  </main>
  <dialog id="library-dialog" aria-labelledby="dialog-title"></dialog>
`;

function updateProgress(){
  $('#progress-count').innerHTML=`${visited.length}<small> / 6</small>`;
  $('#progress-bar').style.width=`${visited.length/6*100}%`;
  $('#progress-caption').textContent=visited.length===6?'六城足迹已集齐，继续发现城市间的联系。':'每一次好奇，都值得被记住。';
  document.querySelectorAll<HTMLButtonElement>('.city-link').forEach(el=>{const isVisited=visited.includes(el.dataset.city as CityId);el.classList.toggle('visited',isVisited);if(isVisited)el.querySelector('.city-link-end')!.innerHTML=icon('check');});
}
function recordVisit(id:CityId){
  if(visited.includes(id))return;visited.push(id);updateProgress();
  try {localStorage.setItem(storageKey,JSON.stringify(visited));}catch{}
  if(visited.length===6)toast('六座城都留下了你的足迹。群岛探索完成！');
}
function toast(text:string){clearTimeout(toastTimer);$('#toast').textContent=text;$('#toast').hidden=false;toastTimer=setTimeout(()=>{$('#toast').hidden=true;},4200);}
function selectCity(id:CityId,focus=true){
  planner?.close();
  explorer?.onCityChanged();
  if(tour>=0)endTour();selected=id;selectedPOI=null;recordVisit(id);
  document.body.classList.remove('city-immersive');document.body.classList.add('city-mode');$('.exploration').classList.add('inspecting');$('.city-toolbar').hidden=false;
  world?.select(id,focus);
  resetCameraButtons();
  document.querySelectorAll('.city-link').forEach(el=>el.classList.toggle('active',(el as HTMLElement).dataset.city===id));
  const c=getCity(id);$('.world-location').textContent=c.name;$('.world-location-en').textContent=c.system;
  $('.map-help').innerHTML='<span>拖动 360° 环绕</span><i>·</i><span>右键 / 双指平移</span><i>·</i><span>滚轮 / 双指缩放</span>';
  $('[data-action="reset"]').setAttribute('aria-label','重置城市视角');
  renderCityPanel();
}
function resetCameraButtons(){document.querySelectorAll<HTMLElement>('[data-camera]').forEach(el=>el.classList.toggle('active',el.dataset.camera==='city'));$('[data-action="orbit"]').setAttribute('aria-pressed','false');$('[data-action="labels"]').setAttribute('aria-pressed',String(world?.district?.labelsVisible??true));$('[data-action="immersion"]').setAttribute('aria-pressed','false');$('[data-action="immersion"]').textContent='展开视野';}
function renderCityPanel(){
  if(!selected)return;const c=getCity(selected),plan=cityPlans[selected],stats=world?.district?.stats;
  const panel=$('#inspector');panel.hidden=false;panel.classList.toggle('living-panel',selectedPOI==='life');panel.style.setProperty('--city',c.color);panel.style.setProperty('--pale',c.pale);
  const poi=selectedPOI==='life'?{name:'细胞生活街',english:'A LITTLE EVERYDAY LIFE',description:'补给铺开着门，居民在树下聊天、读书，或沿着小径去办自己的事。高低错落的细胞小屋、阳台与庭院，组成这座城安静的日常。',activity:'步行居民会停留歇脚；细胞巴士会停站，后车减速等待。'}:plan.landmarks.find(l=>l.id===selectedPOI);
  panel.innerHTML=`<div class="inspector-top"><span class="tiny-label">THE CITY, UP CLOSE</span><button class="icon-button" data-action="close-city" aria-label="返回群岛全景">${icon('close')}</button></div><div class="district-heading"><span class="city-symbol">${icon(c.id)}</span><div><span>${c.english}</span><h2>${c.name}</h2></div></div>${selected==='lungs'?'<button class="workday-entry compact" data-exp="workday"><span>☼ 新故事 · 肺泡港的一天</span><strong>和小红一起上班 ↗</strong></button>':''}<h3 class="planning-title">${plan.title}</h3><p class="planning-description">${plan.description}</p><div class="district-stats"><div><b>${stats?.buildings??'—'}</b><span>功能建筑</span></div><div><b>${stats?.vehicles??'—'}</b><span>运输车辆</span></div><div><b>${stats?.residents??'—'}</b><span>细胞居民</span></div></div>${poi?`<article class="poi-detail" aria-live="polite"><span>${poi.english}</span><h3>${poi.name}</h3><p>${poi.description}</p><div><i></i>${poi.activity}</div></article>`:''}<div class="district-directory-title"><span>街区观察目录</span><small>点击前往近景 ↙</small></div><div class="poi-directory"><button class="poi-item life-item ${selectedPOI==='life'?'active':''}" data-poi="life"><b>✳</b><span>漫步细胞生活街</span><i>↗</i></button>${plan.landmarks.map((l,i)=>`<button class="poi-item ${l.id===selectedPOI?'active':''}" data-poi="${l.id}"><b>${String(i+1).padStart(2,'0')}</b><span>${l.name}</span><i>↗</i></button>`).join('')}</div><details class="district-plan-map"><summary>查看城市规划图 <span>＋</span></summary><svg viewBox="0 0 140 120" role="img" aria-label="${c.name}道路规划图">${plan.roads.map(r=>`<path d="M ${r.points.map(p=>`${70+p[0]*4},${60+p[1]*4}`).join(' L ')} Z" stroke="${r.color}" fill="none" stroke-width="3" stroke-linejoin="round"/>`).join('')}${plan.landmarks.map((l,i)=>`<circle cx="${70+l.position[0]*4}" cy="${60+l.position[1]*4}" r="6" fill="${c.pale}" stroke="${c.color}"/><text x="${70+l.position[0]*4}" y="${62+l.position[1]*4}" text-anchor="middle" font-size="5" fill="${c.color}">${i+1}</text>`).join('')}</svg><p>${plan.roads.map(r=>r.name).join(' · ')}</p></details><div class="district-resident-note">${icon('spark')}<span>${plan.vehicle}<br>${plan.citizen}</span></div><button class="text-button" data-action="learn">打开人体机理手记 ${icon('arrow')}</button>`;
}
function focusPOI(id:string){
  if(id.startsWith('harbor:')){if(!explorer?.harborInteract(id))explorer?.inspect(id);return;}
  if(id.startsWith('person:')||id.startsWith('vehicle:')||id==='courier'){explorer?.inspect(id);return;}
  explorer?.onLocation();
  if(!selected||(id!=='life'&&!cityPlans[selected].landmarks.some(l=>l.id===id)))return;
  document.body.classList.remove('city-immersive');$('[data-action="immersion"]').setAttribute('aria-pressed','false');$('[data-action="immersion"]').textContent='展开视野';selectedPOI=id;world?.district?.focus(id);renderCityPanel();$('#inspector').scrollTop=0;
  document.querySelectorAll('[data-camera]').forEach(el=>el.classList.remove('active'));$('[data-action="orbit"]').setAttribute('aria-pressed','false');
}
function overview(){
  planner?.close();
  document.querySelectorAll<HTMLElement>('.topnav .nav-tab').forEach(b=>b.classList.toggle('active',b.dataset.action==='overview'));
  explorer?.onOverview();
  if(tour>=0)endTour();selected=null;selectedPOI=null;$('#inspector').hidden=true;document.body.classList.remove('city-mode','city-immersive');$('.city-toolbar').hidden=true;$('.exploration').classList.remove('inspecting');world?.select(null);world?.overview();
  document.querySelectorAll('.city-link').forEach(e=>e.classList.remove('active'));
  $('.world-location').textContent='群岛全景';$('.world-location-en').textContent='一切相连，生生不息';
  $('.map-help').innerHTML='<span>拖动探索</span><i>·</i><span>滚轮缩放</span><i>·</i><span>点击城市发现更多</span>';
  $('[data-action="reset"]').setAttribute('aria-label','返回全景');
}
function setMode(id:ModeId){
  mode=id;if(world)world.mode=id;document.body.dataset.mode=id;
  document.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach(el=>{const on=el.dataset.mode===id;el.classList.toggle('active',on);el.setAttribute('aria-pressed',String(on));});
  $('#mode-message').textContent=modes[id].message;
  if(!world){$('#heart-value').textContent=String(modes[id].heart);$('#breath-value').textContent=String(modes[id].breath);}
  if(selected||tour>=0)toast(modes[id].changes.join(' · '));
}
function startTour(){
  overview();tour=0;$('.exploration').classList.add('touring');renderTour();
}
function renderTour(){
  const step=tourSteps[tour];recordVisit(step.city);world?.select(step.city);world?.overview();
  world?.setTour(tour===0?'heart':tourSteps[tour-1].city,step.city,step.oxygen);
  const card=$('#tour-card');card.hidden=false;
  card.innerHTML=`<div class="tour-header"><span>${icon('flag')} 小红的循环日记</span><button class="icon-button" data-action="end-tour" aria-label="结束红细胞旅行">${icon('close')}</button></div><div class="tour-illustration"><span class="tour-orbit"></span><span class="big-cell ${step.oxygen?'':'low-oxygen'}"><i></i><b>··</b><em>O₂</em></span><span class="tour-spark one">✧</span><span class="tour-spark two">✧</span><span class="cargo-tag">${step.cargo}</span></div><div class="tour-body"><span class="tiny-label">A RED BLOOD CELL'S JOURNEY</span><h2>${step.title}</h2><p>${step.text}</p><div class="tour-progress">${tourSteps.map((_,i)=>`<span class="${i<=tour?'done':''}"></span>`).join('')}<b>${tour+1} / 5</b></div><div class="tour-actions"><button class="text-button" data-action="previous-step" ${tour===0?'disabled':''}>上一步</button><button class="primary-button" data-action="next-step">${tour===4?'完成旅行':'下一站'} ${icon(tour===4?'check':'arrow')}</button></div></div>`;
  $('.world-location').textContent='跟随红细胞';$('.world-location-en').textContent=step.city==='heart'?'心脏中转站':getCity(step.city).name;
}
function endTour(){tour=-1;$('#tour-card').hidden=true;$('.exploration').classList.remove('touring');world?.endTour();}
function closeDialog(){ $('#library-dialog').closest('dialog')!.close();restoreFocus?.focus(); }
function openDialog(content:string){
  restoreFocus=document.activeElement as HTMLElement;const d=$<HTMLDialogElement>('#library-dialog');d.innerHTML=`<button class="dialog-close icon-button" data-action="close-dialog" aria-label="关闭窗口">${icon('close')}</button>${content}`;if(!d.open)d.showModal();
}
function openAtlas(city:CityId|null=null){
  const list=city?[getCity(city)]:cities;
  openDialog(`<div class="dialog-kicker">THE METABOLIS FIELD GUIDE</div><h2 id="dialog-title">${city?getCity(city).name+' · 观察手记':'每一座城，都与你有关。'}</h2><p class="dialog-intro">${city?'认识城市的居民，也读懂比喻背后的真实身体。':`已拜访 ${visited.length} / 6 座城市。把生命的日常，收进你的探索手记。`}</p><div class="atlas-grid ${city?'single':''}">${list.map(c=>`<article class="atlas-card" style="--city:${c.color};--pale:${c.pale}"><div class="atlas-title"><span class="city-symbol">${icon(c.id)}</span><div><small>${c.system}</small><h3>${c.name}</h3></div><span class="visited-badge">${visited.includes(c.id)?'已拜访':'待探索'}</span></div><p>${c.description}</p><ul>${c.facts.map(f=>`<li>${f}</li>`).join('')}</ul><button class="text-button" data-atlas-city="${c.id}">前往这座城 ${icon('arrow')}</button></article>`).join('')}</div><p class="science-note">城市的位置、大小与建筑造型是艺术化表达。血管颜色区分含氧状态，不代表真实血液会变蓝；神经线路与器官间的联系经过简化。</p>`);
}
function about(){openDialog(`<div class="dialog-kicker">WELCOME TO YOUR INNER WORLD</div><h2 id="dialog-title">生命群岛，一直在你身体里。</h2><p class="dialog-intro">Metabolis 是一座由你规划的生命群岛。从安家、早餐到灯火节，走完六章建设旅程，让供氧、营养、水分、信号与守护共同支持生活；也可以走进六座城市观察人体系统。</p><div class="about-grid"><div>${icon('globe')}<h3>拜访六座城市</h3><p>点击城市进入完整城区，360° 环绕观察道路、车辆与居民，再点击地标进入街区近景。</p></div><div>${icon('heart')}<h3>跟随一颗红细胞</h3><p>从右心到肺，从左心到组织，再回到右心。沿途观察氧气如何交接。</p></div><div>${icon('sun')}<h3>改变一天的节奏</h3><p>试试散步、进食或睡眠，观察心跳、呼吸、血流与营养活动的变化。</p></div></div><div class="about-note"><strong>关于这个世界的比喻</strong><p>六座城是人体系统的缩影，器官、血管、细胞和神经分别化作地标、道路、居民和通讯线路。大脑参与协调，但心脏有自身起搏机制，许多器官也会进行局部调节。</p><p>城市内部的道路、汽车、居民和步道是生理活动的视觉比喻，不是实际解剖结构或真实比例。这里展示经过简化的健康人体生理过程。模拟数值用于展示变化趋势，不是个体测量值或医疗判断；睡眠模式指安静的非快速眼动睡眠。</p></div><h3 class="sources-title">继续了解真实的身体</h3><div class="source-links">${sources.map(s=>`<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label} ↗</a>`).join('')}</div><div class="keyboard-help">群岛：拖拽平移 · 城区：拖动 360° 环绕，右键或双指平移<br>滚轮或双指缩放 · 空格暂停 · Esc 返回群岛<br>探索足迹保存在当前浏览器中。</div>`);}
async function toggleSound(){
  if(!sound){try{audio??=new AudioContext();await audio.resume();soundscape??=new Soundscape(audio);sound=true;}catch{toast('当前浏览器无法播放环境音。');return;}}else{sound=false;await audio?.suspend();}
  const el=$('[data-action="sound"]');el.innerHTML=icon(sound?'sound':'mute');el.setAttribute('aria-label',sound?'关闭城市环境声':'开启城市环境声');el.classList.toggle('enabled',sound);
}
function beat(){if(!sound||!audio||audio.state!=='running')return;for(const delay of [0,.15]){const o=audio.createOscillator(),g=audio.createGain();o.type='sine';o.frequency.setValueAtTime(75,audio.currentTime+delay);o.frequency.exponentialRampToValueAtTime(38,audio.currentTime+delay+.15);g.gain.setValueAtTime(0,audio.currentTime+delay);g.gain.linearRampToValueAtTime(.055,audio.currentTime+delay+.014);g.gain.exponentialRampToValueAtTime(.001,audio.currentTime+delay+.18);o.connect(g);g.connect(audio.destination);o.start(audio.currentTime+delay);o.stop(audio.currentTime+delay+.2);}}

document.addEventListener('click',e=>{
  const target=(e.target as HTMLElement).closest<HTMLElement>('button, .brand');if(!target)return;
  if(target.matches('.brand')){e.preventDefault();if(planner)planner.open();else overview();return;}
  if(target.dataset.city&&target.classList.contains('city-link')){selectCity(target.dataset.city as CityId);return;}
  if(target.dataset.atlasCity){closeDialog();selectCity(target.dataset.atlasCity as CityId);return;}
  if(target.dataset.mode){explorer?.action('episode-stop');setMode(target.dataset.mode as ModeId);return;}
  if(target.dataset.poi){focusPOI(target.dataset.poi);return;}
  if(target.dataset.camera){world?.district?.preset(target.dataset.camera as 'city'|'street'|'top');document.querySelectorAll<HTMLElement>('[data-camera]').forEach(el=>el.classList.toggle('active',el===target));$('[data-action="orbit"]').setAttribute('aria-pressed','false');return;}
  switch(target.dataset.action){
    case 'planning':planner?.open();break;
    case 'overview':case 'close-city':overview();break;
    case 'reset':if(world?.district){world.district.preset('city');document.querySelectorAll<HTMLElement>('[data-camera]').forEach(el=>el.classList.toggle('active',el.dataset.camera==='city'));$('[data-action="orbit"]').setAttribute('aria-pressed','false');}else overview();break;
    case 'atlas':openAtlas();break;
    case 'about':about();break;
    case 'learn':openAtlas(selected);break;
    case 'close-dialog':closeDialog();break;
    case 'sound':void toggleSound();break;
    case 'tour':if(explorer)explorer.action('delivery');else startTour();break;
    case 'next-step':if(tour===4){endTour();overview();toast('循环完成！每一次心跳，都在继续这段旅行。');}else if(tour>=0){tour++;renderTour();}break;
    case 'previous-step':if(tour>0){tour--;renderTour();}break;
    case 'end-tour':endTour();overview();break;
    case 'pause':if(world){world.paused=!world.paused;target.innerHTML=icon(world.paused?'play':'pause');target.setAttribute('aria-label',world.paused?'继续模拟':'暂停模拟');target.setAttribute('title',world.paused?'继续模拟':'暂停模拟');$('.live-status').innerHTML=`<i></i>${world.paused?'时光，暂时停驻':'生命，正在发生'}`;document.body.classList.toggle('paused',world.paused);}break;
    case 'speed':if(world){world.speed=world.speed===1?2:world.speed===2?.5:1;target.textContent=`${world.speed}×`;}break;
    case 'zoom-in':world?.zoom(.25);break;
    case 'zoom-out':world?.zoom(-.25);break;
    case 'orbit':target.setAttribute('aria-pressed',String(world?.district?.toggleAuto()??false));break;
    case 'labels':target.setAttribute('aria-pressed',String(world?.district?.toggleLabels()??true));break;
    case 'immersion':{const active=document.body.classList.toggle('city-immersive');target.setAttribute('aria-pressed',String(active));target.textContent=active?'显示档案':'展开视野';break;}
  }
});
$<HTMLDialogElement>('#library-dialog').addEventListener('click',e=>{if(e.target===e.currentTarget){const r=(e.currentTarget as HTMLElement).getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog();}});
document.addEventListener('keydown',e=>{
  if($<HTMLDialogElement>('#library-dialog').open)return;
  if(e.code==='Escape'){if(planner?.visible){document.querySelector<HTMLButtonElement>('[data-plan="close-detail"]')?.click();return;}if(document.body.classList.contains('photo-mode')){explorer?.action('photo-exit');return;}overview();return;}
  if((e.target as HTMLElement).matches('button, a, input, textarea'))return;
  if(e.code==='Space'){e.preventDefault();$('[data-action="pause"]').click();}
});
try {
  world=new LivingWorld($('#world'),$('#map-labels'),id=>selectCity(id));
  world.onPOI=focusPOI;
  explorer=new Explorer({world:()=>world,select:id=>selectCity(id),setMode,toast,dialog:openDialog,closeDialog});
  planner=new Planner({world,enter:()=>overview(),explore:city=>city?selectCity(city):overview(),toast,dialog:openDialog,closeDialog});
  let last=0;
  world.onTick=(time)=>{planner?.tick(time);if(time-last>.25||time<last){last=time;$('#heart-value').textContent=String(Math.round(world!.heartRate));$('#breath-value').textContent=String(Math.round(world!.breathRate));}explorer?.tick();soundscape?.tick(time,world!.district?.audioScene??null,world!.paused);const b=Math.floor(world!.simulation.beats);if(b!==lastBeat&&!world!.paused){lastBeat=b;beat();}};
  document.body.classList.add('world-ready');
  planner.open();
}catch(error){
  console.error('3D world could not start',error);
  $('#world').innerHTML=`<div class="world-fallback"><span>${icon('globe')}</span><h2>这座世界需要 3D 图形支持</h2><p>请在支持 WebGL 的浏览器中打开，并启用硬件加速。<br>你仍然可以拜访左侧六座城市、阅读手记和跟随小红旅行。</p><button class="primary-button" data-action="atlas">打开城市图鉴 ${icon('arrow')}</button></div>`;
}
updateProgress();
