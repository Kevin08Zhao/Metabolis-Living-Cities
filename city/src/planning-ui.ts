import {icon} from './icons';
import type {LivingWorld} from './world';
import type {CityId} from './model';
import {escapeHTML as esc} from './experience';
import {chapters,badgeDefinitions} from './campaign';
import {readPlanning,newPlanning,evaluateNetwork,advancePlanning,applyPlanningAction,startWalk,nextChapter,replayChapter,chooseDecision,awaitingDecision,currentChapter,unlockedChapter,collectBadges,totalStars,signalCoverage,systemRates,systemIssue,buildingUnlocked,buildingIcons,countBuilding,plots,links,buildings,linkName,roadCapacity,roadPrice,roadValue,organPrice,type PlanningState,type PlanningAction,type Network,type Building} from './planning';
import {nextGuide,objectives,type GuideStep} from './planning-guide';
import type {PlanningTool} from './planning-scene';
import './planning.css';
import './campaign-ui.css';

type Blueprint=Pick<PlanningState,'buildings'|'roads'|'materials'|'heart'|'lungs'>;
interface Host {world:LivingWorld;enter:()=>void;explore:(city?:CityId)=>void;toast:(text:string)=>void;dialog:(content:string)=>void;closeDialog:()=>void;}
const storageKey='metabolis.planning.v2',backupKey='metabolis.planning.previous-city';
const pct=(n:number)=>Math.round(n*100)+'%',fmt=(n:number)=>Number(n.toFixed(1)).toString();
const btn=(action:string,label:string,cls='plan-primary',extra='')=>'<button class="'+cls+'" data-plan="'+action+'" '+extra+'>'+label+'</button>';
const stars=(n:number)=>'<span class="plan-stars" aria-label="'+n+'颗星">'+[0,1,2].map(i=>'<i class="'+(i<n?'earned':'')+'">★</i>').join('')+'</span>';

export class Planner {
 state:PlanningState;network:Network;visible=false;
 private sidebar:HTMLElement;private hud:HTMLElement;private inspector:HTMLElement;
 private tool:PlanningTool='select';private selected='';private moving:string|null=null;private guide:GuideStep;
 private history:Blueprint[]=[];private lastTime=0;private accumulator=0;private savedAt=0;private saved=true;
 private playback='';private guideSignature='';private projectSignature='';private catalogSignature='';private panelSignature='';
 private resumeAfterDialog=false;private noticeTimer:ReturnType<typeof setTimeout>|null=null;
 private labelsVisible=true;
 constructor(private host:Host){
  let raw=null;try{raw=localStorage.getItem(storageKey)??localStorage.getItem('metabolis.planning.v1');}catch{this.saved=false;}
  this.state=readPlanning(raw);this.network=evaluateNetwork(this.state);this.guide=nextGuide(this.state);this.lastTime=host.world.time;
  this.sidebar=document.createElement('aside');this.sidebar.className='planning-sidebar';this.sidebar.setAttribute('aria-label','生活项目与建设工具');
  this.sidebar.innerHTML=[
   '<div class="plan-intro"><span class="plan-eyebrow">ONE LITTLE TOWN · ONE WONDERFUL DAY</span><h1 id="plan-town-name"></h1><div class="plan-town-rank"><span id="plan-rank"></span>',btn('achievements','成就册 ↗','plan-text'),'</div></div>',
   '<div class="plan-journey-strip" aria-label="六章生活旅程"></div>',
   '<section class="plan-project"><div class="plan-chapter-line"><span id="plan-chapter-name"></span>',btn('chapters','旅程 ↗','plan-text'),'</div><h2 id="plan-task-title"></h2><div class="plan-checklist" id="plan-checklist"></div><div class="plan-walk-track" hidden><div><span id="plan-walk-phase"></span><b id="plan-walk-time"></b></div><div class="plan-progress"><i id="plan-walk-progress"></i></div><small id="plan-walk-quality"></small></div></section>',
   '<section class="plan-next-step" aria-label="你的下一步"></section>',
   '<div class="plan-catalog-heading"><span>自己动手规划</span>',btn('help','建设指南','plan-text'),'</div><div class="plan-catalog"></div>',
   '<div class="plan-neighbor"><span class="plan-red-face">··</span><div><strong id="plan-neighbor-name"></strong><p id="plan-neighbor-line"></p></div></div>',
   '<div class="plan-sidebar-foot"><span id="plan-save-status">自动保存 · 此浏览器</span>',btn('menu','游戏菜单','plan-text'),'</div>'
  ].join('');
  document.querySelector('#app')!.append(this.sidebar);
  this.hud=document.createElement('div');this.hud.className='planning-hud';
  this.hud.innerHTML=[
   '<div class="plan-heading"><div><span class="plan-eyebrow" id="plan-daytime"></span><h2 id="plan-scene-title"></h2></div><div class="plan-header-wallets">',
   btn('achievements','<span id="plan-total-stars">0</span><small>★ / 18</small>','plan-star-wallet','aria-label="查看星级与成就"'),
   '<div class="plan-material" title="建设消耗材料；回收全额返还。完成章节获得新材料。">'+icon('layers')+'<span><strong id="plan-materials">24</strong><small>建设材料</small></span></div></div></div>',
   '<div class="plan-scene-nav"><div class="plan-view-switch">',
   btn('view','立体','','data-view="overview" aria-pressed="true"'),btn('view','俯瞰','','data-view="top" aria-pressed="false"'),btn('view','跟随小红','','data-view="follow" aria-pressed="false"'),
   '</div><div class="plan-scene-actions">'+btn('labels','地名','plan-explore','aria-label="显示地名" aria-pressed="true"')+btn('supply',icon('layers')+'供给','plan-explore','aria-label="查看供给与运行状态"')+btn('explore',icon('globe')+'六城漫游','plan-explore')+btn('menu',icon('help'),'plan-explore','aria-label="打开游戏菜单"')+'</div></div>',
   '<section class="plan-inspector" aria-label="建设详情"></section><div class="plan-world-footer"><div class="plan-tool-hint" id="plan-tool-hint"></div><div class="plan-control-dock">',
   '<button data-plan-tool="select" aria-pressed="true">'+icon('focus')+'选择</button><button data-plan-tool="road" aria-pressed="false">'+icon('route')+'铺血管</button>',
   btn('undo',icon('undo')+'撤销','','aria-label="撤销上一次建设" disabled'),'<span></span>',
   btn('pause',icon('pause'),'','aria-label="暂停城市"'),btn('speed','1×','plan-speed','aria-label="切换运行速度"'),'<span></span>',
   btn('zoom-in',icon('plus'),'','aria-label="放大街区"'),btn('zoom-out',icon('minus'),'','aria-label="缩小街区"'),
   '</div><div class="plan-footer-note"><span><i class="coral"></i>供给</span><span><i class="blue"></i>回流</span><span>拖动 360° 环绕</span>'+btn('photo','拍下我的小镇 ↗','')+'</div></div>',
   '<div class="plan-reward-notice" role="status" hidden></div>'
  ].join('');
  document.querySelector('.exploration')!.append(this.hud);this.inspector=this.hud.querySelector('.plan-inspector')!;
  document.addEventListener('click',e=>{
   const b=(e.target as HTMLElement).closest<HTMLButtonElement>('button');if(!b)return;
   if(b.dataset.planTool){this.setTool(b.dataset.planTool as PlanningTool);return;}
   if(b.dataset.planChoice!==undefined){this.resolveChoice(Number(b.dataset.planChoice));return;}
   if(b.dataset.planReplay!==undefined){const error=replayChapter(this.state,Number(b.dataset.planReplay));if(error){host.toast(error);return;}host.closeDialog();this.changedChapter();return;}
   if(b.dataset.planCity){host.closeDialog();host.explore(b.dataset.planCity as CityId);return;}
   if(b.dataset.plan)this.action(b.dataset.plan,b);
  });
  document.querySelector<HTMLDialogElement>('#library-dialog')!.addEventListener('close',()=>{
   if(!this.state.campaign.introduced&&this.visible){this.state.campaign.introduced=true;this.save();}
   if(this.resumeAfterDialog){this.resumeAfterDialog=false;if(this.host.world.paused)this.togglePause();}
  });
  window.addEventListener('pagehide',()=>this.save());document.addEventListener('visibilitychange',()=>{if(document.hidden)this.save();});
  this.sidebar.hidden=true;this.hud.hidden=true;
 }
 private $(selector:string){return this.hud.querySelector<HTMLElement>(selector)??this.sidebar.querySelector<HTMLElement>(selector)!;}
 private set(selector:string,value:string){const el=this.$(selector);if(el&&el.textContent!==value)el.textContent=value;}
 private togglePause(){document.querySelector<HTMLButtonElement>('[data-action="pause"]')!.click();}
 private dialog(content:string){
  const open=document.querySelector<HTMLDialogElement>('#library-dialog')!.open;
  if(!open&&!this.host.world.paused){this.resumeAfterDialog=true;this.togglePause();}
  this.host.dialog(content);
 }
 open(){
  this.host.enter();this.visible=true;this.sidebar.hidden=false;this.hud.hidden=false;document.body.classList.add('planning-mode');
  document.querySelectorAll<HTMLElement>('.topnav .nav-tab').forEach(b=>b.classList.toggle('active',b.dataset.action==='planning'));
  this.host.world.openPlanning(this.state,this.network,key=>this.pick(key));this.tool='select';this.selected='';this.invalidate();this.refresh();this.renderInspector();
  if(!this.state.campaign.introduced)this.welcome();
 }
 close(){this.visible=false;this.sidebar.hidden=true;this.hud.hidden=true;document.body.classList.remove('planning-mode','plan-evening');this.host.world.closePlanning();this.save();}
 private save(){try{localStorage.setItem(storageKey,JSON.stringify(this.state));this.saved=true;}catch{this.saved=false;}this.set('#plan-save-status',this.saved?'已保存 · 此浏览器':'暂不能保存 · 请保持页面打开');this.savedAt=this.state.clock;}
 private invalidate(){this.guideSignature='';this.projectSignature='';this.catalogSignature='';this.panelSignature='';}
 private snapshot():Blueprint{return structuredClone({buildings:this.state.buildings,roads:this.state.roads,heart:this.state.heart,lungs:this.state.lungs,materials:this.state.materials});}
 private commit(action:PlanningAction){
  const before=this.snapshot(),oldBadge=this.state.campaign.badges.length,error=applyPlanningAction(this.state,action);
  if(error){this.host.toast(error);return;}
  this.history.push(before);if(this.history.length>30)this.history.shift();
  const badges=collectBadges(this.state);this.network=evaluateNetwork(this.state);
  this.save();this.invalidate();this.renderInspector();this.refresh();
  const names:Partial<Record<PlanningAction['type'],string>>={build:'新的生活，已经安家。',road:'血管连好了，路线开始运转。',upgrade:'新的配套已经投入工作。',move:'新位置安排好了。',downgrade:'配套材料已返还。','remove-building':'材料已全额返还。','remove-road':'血管材料已全额返还。'};
  if(this.state.campaign.badges.length>oldBadge)this.notice('获得成就 · '+badgeDefinitions.find(b=>b.id===badges[0])!.name,'每一次建设，都在让小镇长大。');
  else this.host.toast(names[action.type]??'建设已保存。');
 }
 private setTool(tool:PlanningTool){
  if(Object.hasOwn(buildings,tool)&&!buildingUnlocked(this.state,tool as Building)){this.host.toast('完成前面的生活项目，就能解锁这项建设。');return;}
  this.tool=tool;if(tool!=='move')this.moving=null;this.refresh();
 }
 pick(key:string){
  if(key==='red'){this.selected=key;this.host.world.planning?.preset('follow');this.renderInspector();this.refresh();return;}
  if(key.startsWith('plot:')){const id=key.slice(5);
   if(this.tool==='move'&&this.moving&&id!==this.moving){if(this.state.buildings[id]){this.host.toast('选择一块空地，把街区迁过去。');return;}const from=this.moving;this.selected=key;this.commit({type:'move',from,to:id});this.setTool('select');return;}
   if(Object.hasOwn(buildings,this.tool)&&!this.state.buildings[id]){this.selected=key;this.commit({type:'build',plot:id,building:this.tool as Building});this.setTool('select');return;}
  }
  if(key.startsWith('road:')&&this.tool==='road'&&!this.state.roads[key.slice(5)]){this.selected=key;this.commit({type:'road',id:key.slice(5)});return;}
  this.selected=key;this.renderInspector();this.refresh();
 }
 private doGuide(){
  const g=nextGuide(this.state);
  if(g.action){this.selected='';this.tool='select';this.commit(g.action);return;}
  switch(g.kind){
   case 'start':this.begin();break;
   case 'next':this.advanceChapter();break;
   case 'finish':this.ending();break;
   case 'wait':if(this.host.world.paused)this.togglePause();break;
   case 'running':if(systemIssue(this.state,this.network)){if(!this.host.world.paused)this.togglePause();this.selected='network';this.renderInspector();}else this.host.world.planning?.preset('follow');break;
   case 'budget':if(g.target){this.selected=g.target;this.renderInspector();}else this.help();break;
  }
 }
 private begin(){
  const error=startWalk(this.state);if(error){this.host.toast(error);return;}
  this.history=[];this.selected='';this.tool='select';if(this.host.world.paused)this.togglePause();
  this.invalidate();this.save();this.renderInspector();this.refresh();this.notice('出发 · '+currentChapter(this.state).title,'你的建设，正在支持大家的生活。');
 }
 private resolveChoice(index:number){const error=chooseDecision(this.state,index);if(error){this.host.toast(error);return;}this.save();this.invalidate();this.refresh();this.host.toast('安排好了，大家继续出发。');}
 private advanceChapter(){const error=nextChapter(this.state);if(error){this.host.toast(error);return;}this.host.closeDialog();this.changedChapter();this.notice('新的伙伴 · '+currentChapter(this.state).companion,currentChapter(this.state).intro);}
 private changedChapter(){this.history=[];this.selected='';this.tool='select';this.network=evaluateNetwork(this.state);this.invalidate();this.save();this.refresh();this.renderInspector();this.host.world.planning?.preset('overview');this.sidebar.scrollTop=0;}
 private action(action:string,b:HTMLButtonElement){
  switch(action){
   case 'guide':this.doGuide();break;
   case 'choose-place':if(this.guide.tool)this.setTool(this.guide.tool);break;
   case 'view':this.host.world.planning?.preset(b.dataset.view as 'overview'|'top'|'follow');this.hud.querySelectorAll('[data-plan="view"]').forEach(el=>el.setAttribute('aria-pressed',String(el===b)));break;
   case 'closeup':this.host.world.planning?.focusPlot(this.selected.slice(5));break;
   case 'explore':this.host.explore();break;
   case 'supply':this.selected='network';this.renderInspector();break;
   case 'labels':this.labelsVisible=!this.labelsVisible;b.setAttribute('aria-pressed',String(this.labelsVisible));this.host.world.planning?.setLabels(this.labelsVisible);break;
   case 'close-detail':this.selected='';this.setTool('select');this.renderInspector();break;
   case 'build':this.commit({type:'build',plot:this.selected.slice(5),building:b.dataset.building as Building});this.setTool('select');break;
   case 'road':this.commit({type:'road',id:this.selected.slice(5)});break;
   case 'upgrade':this.commit({type:'upgrade',organ:b.dataset.organ as 'heart'|'lungs'});break;
   case 'downgrade':this.commit({type:'downgrade',organ:b.dataset.organ as 'heart'|'lungs'});break;
   case 'remove':this.commit(this.selected.startsWith('plot:')?{type:'remove-building',plot:this.selected.slice(5)}:{type:'remove-road',id:this.selected.slice(5)});break;
   case 'move':this.moving=this.selected.slice(5);this.setTool('move');break;
   case 'undo':{const previous=this.history.pop();if(previous){Object.assign(this.state,previous);this.network=evaluateNetwork(this.state);this.save();this.invalidate();this.renderInspector();this.refresh();this.host.toast('已撤销上一次建设。');}break;}
   case 'pause':this.togglePause();this.refresh();break;
   case 'speed':document.querySelector<HTMLButtonElement>('[data-action="speed"]')!.click();this.refresh();break;
   case 'zoom-in':this.host.world.planning?.zoom(.25);break;
   case 'zoom-out':this.host.world.planning?.zoom(-.25);break;
   case 'walk':this.host.closeDialog();this.begin();break;
   case 'next':this.advanceChapter();break;
   case 'report':this.report();break;
   case 'ending':this.ending();break;
   case 'help':this.help();break;
   case 'menu':this.menu();break;
   case 'chapters':this.journey();break;
   case 'achievements':this.achievements();break;
   case 'resume':this.state.campaign.introduced=true;this.save();this.host.closeDialog();break;
   case 'guided':this.state.campaign.guided=!this.state.campaign.guided;this.invalidate();this.save();this.refresh();this.menu();break;
   case 'rename':{const input=document.querySelector<HTMLInputElement>('#plan-name-input');if(input?.value.trim()){this.state.campaign.townName=input.value.trim().slice(0,20);this.save();this.refresh();this.host.toast('小镇的新名字已保存。');}break;}
   case 'cancel-round':this.state.phase='prepare';this.state.walk=null;this.history=[];this.host.closeDialog();this.changedChapter();break;
   case 'restart':this.dialog('<div class="dialog-kicker">A NEW LITTLE WORLD</div><h2 id="dialog-title">再建设一个新小镇？</h2><p class="dialog-intro">当前小镇会保留为上一座城市，可以从菜单恢复。探索手记和港口故事保留。</p>'+btn('restart-confirm','保留备份，开始新小镇')+btn('menu','返回菜单','plan-text'));break;
   case 'restart-confirm':try{localStorage.setItem(backupKey,JSON.stringify(this.state));this.state=newPlanning();this.network=evaluateNetwork(this.state);this.history=[];this.host.world.openPlanning(this.state,this.network,key=>this.pick(key));this.changedChapter();this.welcome();}catch{this.host.toast('浏览器不能保存备份，当前小镇已保留。');}break;
   case 'restore':{try{const old=localStorage.getItem(backupKey);if(old){localStorage.setItem(backupKey,JSON.stringify(this.state));this.state=readPlanning(old);this.network=evaluateNetwork(this.state);this.host.closeDialog();this.host.world.openPlanning(this.state,this.network,key=>this.pick(key));this.changedChapter();}}catch{this.host.toast('暂时无法恢复备份。');}break;}
   case 'photo':this.photo();break;
  }
 }
 tick(time:number){
  const dt=Math.max(0,Math.min(1,time-this.lastTime));this.lastTime=time;if(!this.visible)return;
  const playback=this.host.world.paused+'/'+this.host.world.speed;if(playback!==this.playback){this.playback=playback;this.refresh();}
  this.accumulator+=dt;if(this.accumulator<.2)return;const step=this.accumulator;this.accumulator=0;
  const phase=this.state.phase,badgeCount=this.state.campaign.badges.length,events=advancePlanning(this.state,step);
  this.network=evaluateNetwork(this.state);
  if(events.length){this.save();if(phase!==this.state.phase)this.history=[];}
  if(phase!==this.state.phase){this.invalidate();this.renderInspector();}
  this.refresh();if(this.state.clock-this.savedAt>=5)this.save();
  if(phase==='walking'&&this.state.phase!=='walking'){this.host.world.planning?.preset('overview');this.report();}
  else if(phase==='settle'&&this.state.phase==='prepare'){this.notice('安家完成 · +6 建设材料','小红已经拜访了两处住区。下一步，准备第一次散步。');this.sidebar.scrollTop=0;}
  else if(this.state.campaign.badges.length>badgeCount){const id=this.state.campaign.badges[badgeCount];this.notice('获得成就 · '+badgeDefinitions.find(b=>b.id===id)!.name,'这份成长，已经记进小镇的成就册。');}
 }
 private refresh(){
  if(!this.visible)return;const s=this.state,n=this.network,c=currentChapter(s);
  document.body.classList.toggle('plan-evening',s.campaign.chapter===5);
  this.set('#plan-town-name',s.campaign.townName);this.set('#plan-rank',s.campaign.sandbox?'生命建筑师':totalStars(s)>=8?'街区守护者':'见习规划师');
  this.set('#plan-materials',String(s.materials));this.set('#plan-total-stars',String(totalStars(s)));this.set('#plan-daytime',c.time+' · 身体的一天 · '+c.system);this.set('#plan-scene-title',c.title);
  this.guide=nextGuide(s);this.renderProject();this.renderGuide();this.renderCatalog();
  this.sidebar.querySelectorAll<HTMLButtonElement>('[data-plan-tool]').forEach(b=>{b.classList.toggle('active',b.dataset.planTool===this.tool);b.setAttribute('aria-pressed',String(b.dataset.planTool===this.tool));});
  this.hud.querySelectorAll<HTMLButtonElement>('[data-plan-tool]').forEach(b=>{b.classList.toggle('active',b.dataset.planTool===this.tool);b.setAttribute('aria-pressed',String(b.dataset.planTool===this.tool));});
  const hint=this.tool==='move'?'点击空地完成迁移 · 迁移后检查连接':Object.hasOwn(buildings,this.tool)?'点击一块空地建设'+buildings[this.tool as Building].name+' · '+buildings[this.tool as Building].cost+' 材料':this.tool==='road'?'点击 ＋ 铺路 · 点击已有血管可扩容':'点击建筑查看细节 · 拖动 360° 环绕';
  this.set('#plan-tool-hint',this.host.world.paused?'已暂停 · 可以放心建设与观察':awaitingDecision(s)?'挑战暂停，等待你的安排':hint);
  (this.$('[data-plan="undo"]') as HTMLButtonElement).disabled=!this.history.length;
  const pause=this.$('[data-plan="pause"]'),label=this.host.world.paused?'继续城市运行':'暂停城市';if(pause.getAttribute('aria-label')!==label){pause.innerHTML=icon(this.host.world.paused?'play':'pause');pause.setAttribute('aria-label',label);}
  this.set('[data-plan="speed"]',this.host.world.speed+'×');
  this.set('#plan-neighbor-name',c.companion+'的街区来信');this.set('#plan-neighbor-line',s.phase==='complete'?c.success:s.phase==='walking'?awaitingDecision(s)?c.decision!.copy:'你建的路、房子和配套，正在支持我们完成这一段生活。':c.intro);
  this.refreshDetail();this.host.world.planning?.sync(s,n,this.tool,this.selected);this.host.world.planning?.guide(s.campaign.guided?this.guide.target:'');this.host.world.planning?.setLabels(this.labelsVisible);
 }
 private renderProject(){
  const s=this.state,c=currentChapter(s),rows=objectives(s,this.network),signature=JSON.stringify([s.campaign.chapter,s.phase,rows,s.campaign.records]);
  if(signature!==this.projectSignature){
   this.projectSignature=signature;this.set('#plan-chapter-name','第 '+(s.campaign.chapter+1)+' / 6 章 · '+c.time);
   this.set('#plan-task-title',s.phase==='settle'?'先给新邻居一个家':s.phase==='complete'?'这段生活，是你建起来的':s.phase==='walking'?'正在发生 · '+c.title:'这一章，我们要准备');
   this.$('#plan-checklist').innerHTML=rows.map(r=>'<div class="'+(r.done?'done':'')+'"><i></i><span>'+r.title+'</span><b>'+r.value+'</b></div>').join('');
   this.$('.plan-walk-track').hidden=!s.walk;
   this.$('.plan-journey-strip').innerHTML=chapters.map((v,i)=>'<button data-plan="chapters" class="'+(i===s.campaign.chapter?'current ':'')+(s.campaign.records[v.id]?'done':'')+'" aria-label="第'+(i+1)+'章 '+v.title+'">'+icon(v.icon)+(s.campaign.records[v.id]?'<small>✓</small>':'<small>'+(i+1)+'</small>')+'</button>').join('');
  }
  if(s.walk){const t=s.walk.elapsed/c.duration;this.set('#plan-walk-phase',awaitingDecision(s)?'等待你的安排':t<.2?'出发 · 慢慢适应':t<.8?'忙碌时刻 · 系统协作':'收尾 · 回到日常');this.set('#plan-walk-time',Math.floor(s.walk.elapsed)+' / '+c.duration+' 秒');this.$('#plan-walk-progress').style.width=t*100+'%';this.set('#plan-walk-quality','稳定运行 '+Math.floor(s.walk.healthy)+' / '+c.healthy+' 秒'+(s.campaign.chapter>=4?' · 修复 '+Math.floor(s.campaign.resources.repair)+'%':''));}
 }
 private renderGuide(){
  const s=this.state,g=this.guide,c=currentChapter(s),signature=JSON.stringify([g,s.campaign.guided,s.walk?.choice,this.host.world.paused]);
  if(signature===this.guideSignature)return;this.guideSignature=signature;
  const focused=(document.activeElement as HTMLElement)?.dataset?.plan==='guide';
  let html='<div class="plan-next-eyebrow"><span>'+(g.kind==='decision'?'街坊的小请求':g.kind==='running'?'现在，看看你的成果':'你的下一步')+'</span><span>'+(g.kind==='start'?'准备就绪':'小红陪你一起')+'</span></div><h3>'+g.title+'</h3><p>'+g.copy+'</p>';
  if(g.kind==='decision')html+='<div class="plan-decision-options">'+c.decision!.choices.map((choice,i)=>'<button data-plan-choice="'+i+'"><strong>'+choice.title+'</strong><small>'+choice.copy+'</small></button>').join('')+'</div>';
  else if(!s.campaign.guided&&s.phase!=='walking'&&s.phase!=='complete')html='<div class="plan-next-eyebrow">自由规划</div><h3>自己安排小镇的布局</h3><p>建设工具和供给卡会说明当前情况。需要时可以从菜单重新开启引导。</p>'+btn('walk','开始本章挑战')+btn('menu','重新开启引导','plan-text');
  else html+=btn('guide',g.kind==='wait'&&this.host.world.paused?'继续运行，等待准备完成':g.button,'plan-primary','id="plan-next-action" '+(g.kind==='wait'&&!this.host.world.paused?'disabled':''))+(g.tool&&g.kind==='build'?btn('choose-place','我想自己选择位置','plan-text'):'');
  if(g.kind==='start')html+='<div class="plan-bonus-note">★ 额外一星：'+c.bonus+'</div>';
  if(s.lastResult&&s.phase!=='walking')html+=btn('report','回顾本章成果','plan-text');
  this.$('.plan-next-step').innerHTML=html;if(focused)this.$('#plan-next-action')?.focus({preventScroll:true});
 }
 private renderCatalog(){
  const level=unlockedChapter(this.state),sig=level+'/'+(this.state.phase==='settle');if(sig===this.catalogSignature)return;this.catalogSignature=sig;
  const list=(Object.keys(buildings) as Building[]).filter(b=>buildingUnlocked(this.state,b)||(['food','filter','neuron','immune'] as string[]).indexOf(b)===level);
  this.$('.plan-catalog').innerHTML='<button data-plan-tool="road"><span class="plan-tool-icon route">'+icon('route')+'</span><span><strong>血管</strong><small>连接与扩容</small></span><b>1+</b></button>'+list.map(b=>'<button data-plan-tool="'+b+'" '+(!buildingUnlocked(this.state,b)?'disabled':'')+'><span class="plan-tool-icon '+b+'">'+icon(buildingIcons[b])+'</span><span><strong>'+buildings[b].name+'</strong><small>'+(!buildingUnlocked(this.state,b)?'完成当前阶段解锁':b==='garden'?'布置街角':'需要供给')+'</small></span><b>'+buildings[b].cost+'</b></button>').join('');
 }
 private renderInspector(){
  const s=this.state,n=this.network,key=this.selected;let content='';
  const close=key?btn('close-detail','×','plan-detail-close','aria-label="关闭建设详情"'):'';
  if(key.startsWith('plot:')){
   const id=key.slice(5),p=plots.find(p=>p.id===id);if(!p)return;const building=s.buildings[id];
   content='<span class="plan-small">'+p.name+' · 街区地块</span><h3>'+(building?buildings[building].name:'这里，等待新生活。')+'</h3>';
   if(building){content+='<p>'+buildings[building].description+'</p>'+(building!=='garden'?'<div class="plan-detail-value"><span>当前供给</span><strong id="plan-selected-supply"></strong></div><p id="plan-selected-route" class="plan-route-note"></p>':'')+'<div class="plan-detail-actions">'+btn('closeup','走近街区','')+btn('move','迁移到空地','')+btn('remove','回收 · +'+buildings[building].cost,'')+'</div>';}
   else content+='<p>选一项建设。建好后接通血管，小红就能来到这里。</p><div class="plan-build-options">'+(Object.keys(buildings) as Building[]).filter(b=>buildingUnlocked(s,b)).map(b=>btn('build','<span>'+buildings[b].name+'<small>'+(b==='garden'?'装饰街角':'日常需求 '+buildings[b].demand)+'</small></span><b>'+buildings[b].cost+' 材料</b>','','data-building="'+b+'"')).join('')+'</div>';
  }else if(key.startsWith('road:')){
   const id=key.slice(5),l=links.find(l=>l.id===id)!;if(!l)return;const level=s.roads[id]??0;
   content='<span class="plan-small">成对建设 · 供给与回流</span><h3>'+linkName(l)+'</h3><p>这段容量会被沿途街区共同使用。扩容或分流，都能帮助后面的邻居。</p><div class="plan-detail-value"><span>当前运输 / 容量</span><strong id="plan-selected-flow"></strong></div>'+btn('road',level===3?'已达到最大容量':level?'扩容至 '+roadCapacity(level+1)+' · '+roadPrice(l,level)+' 材料':'铺设这段血管 · '+l.cost+' 材料','plan-primary',level===3?'disabled':'')+(level?btn('remove','回收血管 · +'+roadValue(l,level),'plan-text'):'');
  }else if(key==='heart'||key==='lungs'){
   const heart=key==='heart',level=s[key];content='<span class="plan-small">'+level+' / 4 级配套</span><h3>'+(heart?'心脏循环站':'肺泡云朵港')+'</h3><p>'+(heart?'把完成交换的血液送往街区。要一起照顾肺泡交换和下游道路。':'为经过的血液交换氧气与二氧化碳。加大交换能力后，还需要有足够的输送空间。')+'</p><div class="plan-detail-value"><span>'+(heart?'输送能力':'交换能力')+'</span><strong>'+(heart?n.heart:n.lungs)+'</strong></div>'+btn('upgrade',level>=4?'配套已完整':'增加配套 · '+organPrice(level)+' 材料','plan-primary','data-organ="'+key+'" '+(level>=4?'disabled':''))+(level>1?btn('downgrade','回收一级 · +'+organPrice(level-1),'plan-text','data-organ="'+key+'"'):'')+'<button class="plan-text" data-plan-city="'+(heart?'heart':'lungs')+'">走进完整'+(heart?'心脏城':'肺泡港')+' ↗</button>';
  }else if(key==='red'){
   content='<span class="plan-small">你的第一位伙伴</span><h3>小红 · 氧气配送员</h3><p>你把路接到哪里，我就能去拜访哪里的邻居。今天，我们会一起认识五位新伙伴。</p><p>我按实际连接的路线走。拖动镜头，就能结束跟随。</p>'+btn('view','回到整个小镇','plan-primary','data-view="overview"');
  }else{
   content='<span class="plan-small">小镇运行室</span><h3 id="plan-status-title"></h3><div class="plan-supply-summary"><div><span>当前供氧</span><strong id="plan-coverage"></strong></div><div><span>本章高峰预览</span><strong id="plan-forecast-value"></strong></div></div><p class="plan-diagnosis" id="plan-diagnosis"></p><div class="plan-resource-list"></div><p class="plan-route-note" id="plan-forecast-note"></p>';
  }
  this.inspector.innerHTML=close+content;this.inspector.classList.toggle('has-selection',!!key);this.panelSignature='';this.refreshDetail();
 }
 private refreshDetail(){
  const set=(id:string,value:string)=>{const el=this.inspector.querySelector(id);if(el&&el.textContent!==value)el.textContent=value;},s=this.state,n=this.network,c=currentChapter(s);
  set('#plan-coverage',pct(n.coverage));const forecast=evaluateNetwork(s,c.peak);set('#plan-forecast-value',pct(forecast.coverage));set('#plan-status-title',systemIssue(s,n)?'有个地方需要照顾':'生活，正在顺畅发生');
  set('#plan-diagnosis',systemIssue(s,n)||'当前供给稳定。每一条连接都在支持街区里的生活。');set('#plan-forecast-note',forecast.coverage<.985?forecast.issue:'供氧 '+fmt(n.delivered)+' / 需求 '+fmt(n.demand)+' · 肺泡 '+n.lungs+' / 心脏 '+n.heart);
  const list=this.inspector.querySelector('.plan-resource-list');if(list){
   const r=s.campaign.resources,level=unlockedChapter(s),signal=signalCoverage(s,n),rows=[...(level>=1?[{label:'营养储备',value:Math.floor(r.food)+' / 40',ratio:r.food/40,icon:'gut',bad:r.food<5}]:[]),...(level>=2?[{label:'水分储备',value:Math.floor(r.water)+' / 40',ratio:r.water/40,icon:'kidneys',bad:r.water<5},{label:'代谢负担',value:Math.ceil(r.waste)+' · 越低越好',ratio:1-r.waste/80,icon:'layers',bad:r.waste>40}]:[]),...(level>=3?[{label:'信号覆盖',value:pct(signal),ratio:signal,icon:'brain',bad:signal<.7}]:[]),...(level>=4?[{label:'街角修复',value:pct(r.repair/100),ratio:r.repair/100,icon:'immune',bad:r.repair<95}]:[])];
   const signature=JSON.stringify(rows);if(signature!==this.panelSignature){this.panelSignature=signature;list.innerHTML=rows.map(v=>'<div class="plan-resource '+(v.bad?'low':'')+'"><span>'+icon(v.icon)+v.label+'</span><b>'+v.value+'</b><i><em style="width:'+Math.max(0,Math.min(100,v.ratio*100))+'%"></em></i></div>').join('');}
  }
  if(this.selected.startsWith('plot:')){const lot=n.lots[this.selected.slice(5)];if(lot){set('#plan-selected-supply',pct(lot.ratio)+' · '+fmt(lot.delivered)+' / '+fmt(lot.demand));set('#plan-selected-route',lot.connected?lot.ratio>=.95?'小红已经能到这里，居民正在工作与休息。':n.issue:'这里还没有接通。跟随左侧“下一步”，或自己铺设血管。');}}
  if(this.selected.startsWith('road:')){const id=this.selected.slice(5);set('#plan-selected-flow',fmt(n.edges[id]??0)+' / '+roadCapacity(s.roads[id]??0));}
 }
 private notice(title:string,copy:string){
  if(this.noticeTimer)clearTimeout(this.noticeTimer);const el=this.$('.plan-reward-notice');el.hidden=false;el.innerHTML='<span>'+icon('spark')+'</span><div><strong>'+esc(title)+'</strong><p>'+esc(copy)+'</p></div>';this.noticeTimer=setTimeout(()=>{el.hidden=true;},5200);
 }
 private welcome(){
  const returning=this.state.completed>0||countBuilding(this.state,'home')>1;
  this.dialog('<div class="plan-welcome-hero"><span class="plan-welcome-cell">··</span><div class="dialog-kicker">METABOLIS · 身体的一天</div><h2 id="dialog-title">'+(returning?'欢迎回来，街坊们都在。':'从一间小屋，建起有生命的城市。')+'</h2><p class="dialog-intro">'+(returning?'你的建筑、材料和已有成果都保留了。现在可以沿着六个生活项目，把小镇建设到灯火节。':'我是小红，今天想和你一起照顾这个小世界。先安家，再连接，最后看大家用上你建好的城市。')+'</p></div><div class="plan-welcome-steps"><div>'+icon('home')+'<strong>建起来</strong><span>每次只做一个明确的小目标</span></div><div>'+icon('route')+'<strong>连起来</strong><span>看供给真正送到居民门口</span></div><div>'+icon('spark')+'<strong>一起生活</strong><span>六章旅程、永久成就和结局</span></div></div><p class="plan-welcome-note">左侧“你的下一步”会指出位置与花费。你也可以自己选址；回收全额返还，随时可以调整。</p>'+btn('resume',returning?'接着建设我的小镇 →':'和小红一起开始 →'));
 }
 private report(){
  const r=this.state.lastResult;if(!r)return;const c=currentChapter(this.state),passed=r.passed,all=chapters.every(v=>this.state.campaign.records[v.id]?.passed);
  const next=passed?(all?btn('ending','翻开通关纪念册 →'):btn('next','迎接下一段生活 →')):btn('resume','带着提示回去调整 →');
  this.dialog('<div class="plan-result-emblem '+(passed?'success':'')+'">'+icon(passed?c.icon:'route')+'</div><div class="dialog-kicker">'+(passed?'你建的城市，做到了':'每次尝试，都有新的发现')+'</div><h2 id="dialog-title">'+(passed?c.title+'，完成！':'这次差一点，我们再调一调。')+'</h2>'+stars(r.stars??0)+'<p class="dialog-intro">'+esc(passed?c.success:r.issue)+'</p><div class="plan-report-values"><div><strong>'+Math.floor(r.healthy)+' 秒</strong><span>稳定运行 · 目标 '+c.healthy+' 秒</span></div><div><strong>'+pct(r.coverage)+'</strong><span>全程平均供氧</span></div></div>'+(passed?'<div class="plan-earned-gift">'+icon('flag')+'<div><strong>'+(r.reward?'获得 '+r.reward+' 份材料':'本章已完成 · 最佳星级已保留')+'</strong><p>永久留下：'+c.keepsake+'</p></div></div>':'<p class="plan-report-reward">布局与材料全部保留。重试免费，下一步会指出可以改进的地方。</p>')+'<div class="plan-star-conditions"><span>★ 完成本章目标</span><span class="'+((r.healthy>=c.duration*.95)?'done':'')+'">★ 至少 95% 的时间稳定运行</span><span class="'+(r.bonus?'done':'')+'">★ '+c.bonus+'</span></div>'+'<div class="plan-result-actions">'+next+btn('resume','回小镇看看','plan-text')+'</div>'+'<p class="science-note">'+c.lesson+' 容量与时间为游戏参数。</p>');
 }
 private journey(){
  const s=this.state;this.dialog('<div class="dialog-kicker">身体的一天 · 六章完整旅程</div><h2 id="dialog-title">让每一次建设，都有下一段生活。</h2><p class="dialog-intro">同一座小镇会一直保留。每章带来新的设施、伙伴和永久纪念物，最后一起举办灯火节。</p><div class="plan-chapter-grid">'+chapters.map((c,i)=>'<article class="'+(i===s.campaign.chapter?'current':'')+'"><span>'+c.time+' · '+c.system+'</span><h3>'+icon(c.icon)+c.title+'</h3><p>'+c.intro+'</p>'+stars(s.campaign.records[c.id]?.stars??0)+(i<=unlockedChapter(s)?'<button class="plan-primary" data-plan-replay="'+i+'" '+(s.phase==='walking'?'disabled':'')+'>'+(s.campaign.records[c.id]?'重玩，争取更多星':'前往这一章')+'</button>':'<small>完成前一章后开放</small>')+'</article>').join('')+'</div>');
 }
 private achievements(){
  const s=this.state;this.dialog('<div class="dialog-kicker">'+esc(s.campaign.townName)+' · 永久成就</div><h2 id="dialog-title">这些变化，都是你带来的。</h2><div class="plan-achievement-total"><strong>'+totalStars(s)+' <small>/ 18 ★</small></strong><span>'+s.campaign.badges.length+' / '+badgeDefinitions.length+' 枚纪念徽章</span></div><div class="plan-badge-grid">'+badgeDefinitions.map(b=>'<article class="'+(s.campaign.badges.includes(b.id)?'earned':'')+'">'+icon(b.icon)+'<div><strong>'+b.name+'</strong><p>'+b.copy+'</p></div><span>'+(s.campaign.badges.includes(b.id)?'✓':'未完成')+'</span></article>').join('')+'</div>'+btn('chapters','查看每章星级 →'));
 }
 private ending(){
  if(!this.state.campaign.records.festival){this.journey();return;}
  const s=this.state;this.dialog('<div class="plan-ending-lights"><i></i><i></i><i></i><i></i><i></i></div><div class="dialog-kicker">THE FIRST DAY, BUILT BY YOU</div><h2 id="dialog-title">'+esc(s.campaign.townName)+'，灯亮了。</h2><p class="dialog-intro">小红送完了最后一趟补给，芽芽收起餐篮，澄澄听着水声，闪闪哼起旋律，团团坐在街角。大家想对你说：谢谢你，把这里建成了一个家。</p><div class="plan-ending-seals">'+chapters.map(c=>'<div>'+icon(c.icon)+'<strong>'+c.title+'</strong>'+stars(s.campaign.records[c.id]?.stars??0)+'</div>').join('')+'</div><div class="plan-earned-gift">'+icon('spark')+'<div><strong>自由建设已开放 · '+totalStars(s)+' / 18 星</strong><p>十六块土地和全部设施保留。继续布置小镇、拍照，或重玩章节挑战满星。</p></div></div>'+btn('resume','回到灯火中的小镇 →')+btn('photo','拍一张通关纪念照','plan-text')+btn('chapters','重玩章节，收集星星','plan-text'));
 }
 private help(){this.dialog('<div class="dialog-kicker">和小红一起，慢慢学会</div><h2 id="dialog-title">每次，只照顾好下一步。</h2><div class="plan-guide"><p><b>看左侧“你的下一步”</b>按钮会写明地点和材料，点击就能完成这一步。地图上闪光的位置与它对应。想自己设计，可以在建设工具里选建筑，再点空地。</p><p><b>建筑先安家，血管再接通</b>未连接的建筑不会得到供给。红、蓝成对血管提供供给与回流；沿途街区共享道路容量。上游和道路要一起考虑。</p><p><b>用生活事件检验规划</b>准备好后开始本章挑战。稳定运行达到目标即可过关；途中有一个小安排需要你来决定。可以暂停改建，失败不扣材料。</p><p><b>每章留下真实的成长</b>早餐解锁东岸，旋律解锁南岸。食堂、水庭、信号塔和巡护站会继续参与后面的挑战。星级和纪念徽章永久保留。</p><p><b>放心尝试</b>回收全额返还，迁移免费，可以撤销最近建设。准备期快速补给；离开建设模式、关闭页面和等待事件选择时，不会偷偷消耗挑战进度。</p></div><p class="science-note">所有数值为游戏平衡参数。城市、居民和设备是人体过程的拟人化表达。</p>');}
 private menu(){
  let backup=false;try{backup=!!localStorage.getItem(backupKey);}catch{}
  this.dialog('<div class="dialog-kicker">MY LITTLE LIVING WORLD</div><h2 id="dialog-title">继续照顾你的小镇。</h2><label class="plan-name-label" for="plan-name-input">小镇名字</label><div class="plan-name-form"><input id="plan-name-input" maxlength="20" value="'+esc(this.state.campaign.townName)+'">'+btn('rename','保存名字','plan-primary')+'</div><div class="plan-menu-grid">'+btn('resume','继续建设 →')+btn('chapters','六章旅程','plan-menu-button')+btn('achievements','成就与星级','plan-menu-button')+btn('help','建设指南','plan-menu-button')+btn('guided','下一步引导：'+(this.state.campaign.guided?'开启':'关闭'),'plan-menu-button')+(this.state.phase==='walking'?btn('cancel-round','结束本轮，保留布局','plan-menu-button'):btn('walk','直接开始本章挑战','plan-menu-button'))+btn('restart','再建设一个新小镇','plan-menu-button')+(backup?btn('restore','切换到上一座小镇','plan-menu-button'):'')+'</div><p class="science-note">进度保存在此浏览器。菜单打开时暂停。重开会备份上一座小镇；探索手记与港口故事独立保存。</p>');
 }
 private photo(){const data=this.host.world.capture();this.dialog('<div class="dialog-kicker">A LITTLE WORLD, BUILT BY YOU</div><h2 id="dialog-title">'+esc(this.state.campaign.townName)+'，这是我们的生活。</h2><img class="plan-postcard" src="'+data+'" alt="自己建设的生命小镇"><p class="dialog-intro">'+Object.keys(this.state.campaign.records).length+' / 6 章完成 · '+totalStars(this.state)+' 颗星 · '+this.state.campaign.badges.length+' 枚纪念徽章</p><a class="primary-button" href="'+data+'" download="metabolis-my-town.jpg">保存城市照片 ↓</a>');}
}
