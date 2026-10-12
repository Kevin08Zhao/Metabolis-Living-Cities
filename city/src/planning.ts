import { chapters, badgeDefinitions, type ChapterId, type Service } from './campaign.ts';
/** The planning simulation is independent of cameras, scenery and wall-clock time. */
export type Building = 'home' | 'muscle' | 'garden' | Service;
export type PlanningPhase = 'settle' | 'prepare' | 'walking' | 'complete';
export interface Plot { id:string; name:string; x:number; z:number; }
export const plots:Plot[] = Array.from({length:9},(_,i)=>({id:`p${i}`,name:`${'ABC'[Math.floor(i/3)]}${i%3+1}`,x:(i%3)*5,z:Math.floor(i/3)*5-5}));
plots.push(...[{id:'p9',name:'A4',x:15,z:-5},{id:'p10',name:'B4',x:15,z:0},{id:'p11',name:'C4',x:15,z:5},{id:'p12',name:'D1',x:0,z:10},{id:'p13',name:'D2',x:5,z:10},{id:'p14',name:'D3',x:10,z:10},{id:'p15',name:'D4',x:15,z:10}]);
export const source:Plot = {id:'source',name:'左心出口',x:-5,z:0};
export const nodes = [source,...plots];
export interface Link {id:string; a:string; b:string; cost:number; length:number;}
const pairs = [['source','p0'],['source','p3'],['source','p6']];
for(let i=0;i<9;i++){if(i%3<2)pairs.push([`p${i}`,`p${i+1}`]);if(i<6)pairs.push([`p${i}`,`p${i+3}`]);}
pairs.push(['p2','p9'],['p5','p10'],['p8','p11'],['p9','p10'],['p10','p11'],['p6','p12'],['p7','p13'],['p8','p14'],['p11','p15'],['p12','p13'],['p13','p14'],['p14','p15']);
export const links:Link[] = pairs.map(([a,b])=>{const p=nodes.find(n=>n.id===a)!,q=nodes.find(n=>n.id===b)!;const length=Math.hypot(p.x-q.x,p.z-q.z);return{id:`${a}-${b}`,a,b,length,cost:length>6?2:1};});
export const buildings:Record<Building,{name:string;cost:number;demand:number;description:string}> = {
 home:{name:'细胞住区',cost:4,demand:2,description:'让细胞安家。需要持续供氧，散步时需求增加。'},
 muscle:{name:'肌肉工坊',cost:5,demand:2.4,description:'为第一次散步准备。活动时需要更多氧气。'},
 food:{name:'绒毛食堂',cost:6,demand:1.4,description:'把吸收的营养变成储备，支持所有工作街区。需要接通血管才能开工。'},
 filter:{name:'肾单位水庭',cost:6,demand:1.2,description:'回收水分、清理代谢负担。需要稳定供给，才能支持炎热天气中的生活。'},
 neuron:{name:'神经信号塔',cost:7,demand:1,description:'协调周围 11 格距内的工作街区。黄色连线表示信号覆盖，位置越居中，覆盖越广。'},
 immune:{name:'免疫巡护站',cost:7,demand:1.4,description:'获得氧气、营养和信号支持后，派出队员帮助街区完成修复。'},
 garden:{name:'膜间花园',cost:2,demand:0,description:'留一处可以歇脚的街角。装饰不提供供氧加成。'},
};
export interface WalkResult {passed:boolean;healthy:number;coverage:number;issue:string;chapter?:ChapterId;stars?:number;reward?:number;bonus?:boolean;}
export interface Resources {food:number;water:number;waste:number;repair:number;}
export interface Campaign {chapter:number;records:Partial<Record<ChapterId,WalkResult>>;badges:string[];resources:Resources;introduced:boolean;guided:boolean;townName:string;sandbox:boolean;}
export const services:Service[]=['food','filter','neuron','immune'];
export const buildingIcons:Record<Building,string>={home:'home',muscle:'layers',garden:'spark',food:'gut',filter:'kidneys',neuron:'brain',immune:'immune'};
export function newCampaign():Campaign{return{chapter:0,records:{},badges:[],resources:{food:20,water:32,waste:6,repair:100},introduced:false,guided:true,townName:'生命小镇',sandbox:false};}
export interface Walk {elapsed:number;healthy:number;supplied:number;requested:number;choice:number;trouble:string;}
export interface PlanningState {
 version:2;campaign:Campaign;materials:number;buildings:Partial<Record<string,Building>>;roads:Partial<Record<string,number>>;
 heart:number;lungs:number;phase:PlanningPhase;settleTime:number;walk:Walk|null;lastResult:WalkResult|null;
 completed:number;clock:number;
}
export interface Delivery {path:string[];amount:number;}
export interface LotSupply {demand:number;delivered:number;ratio:number;connected:boolean;routes:Delivery[];distance:number;}
export interface Network {
 lots:Record<string,LotSupply>;edges:Record<string,number>;demand:number;delivered:number;coverage:number;
 heart:number;lungs:number;capacity:number;issue:string;healthyHomes:number;homes:number;muscles:number;
}
export const WALK_DURATION=90;
export const HEALTHY_SECONDS=75;
export function newPlanning():PlanningState{return{version:2,campaign:newCampaign(),materials:24,buildings:{p3:'home'},roads:{'source-p3':1},heart:1,lungs:1,phase:'settle',settleTime:0,walk:null,lastResult:null,completed:0,clock:0};}
export function roadCapacity(level:number){return [0,4,8,12][level]??0;}
export function roadPrice(link:Link,level:number){return level===0?link.cost:level===1?3:level===2?4:0;}
export function roadValue(link:Link,level:number){return link.cost+(level>=2?3:0)+(level>=3?4:0);}
export function currentChapter(s:PlanningState){return chapters[s.campaign.chapter];}
export function unlockedChapter(s:PlanningState){let i=0;while(i<chapters.length-1&&s.campaign.records[chapters[i].id]?.passed)i++;return i;}
export function plotUnlocked(s:PlanningState,id:string){const i=Number(id.slice(1));return i<9||(i<12?unlockedChapter(s)>=2:unlockedChapter(s)>=4);}
export function buildingUnlocked(s:PlanningState,b:Building){return b==='muscle'?s.phase!=='settle'||!!s.campaign.records.dawn:services.includes(b as Service)?unlockedChapter(s)>=services.indexOf(b as Service)+1:true;}
export function countBuilding(s:PlanningState,b:Building){return Object.values(s.buildings).filter(v=>v===b).length;}
export function walkIntensity(s:PlanningState){if(!s.walk)return 1;const c=currentChapter(s),t=s.walk.elapsed/c.duration,load=c.decision&&s.walk.choice>=0?c.decision.choices[s.walk.choice].load:1;return (t<.2?1.15:t<.8?c.peak:1.1)*load;}
export function evaluateNetwork(s:PlanningState,intensity=walkIntensity(s)):Network {
 const heart=8+(s.heart-1)*6,lungs=7+(s.lungs-1)*5,capacity=Math.min(heart,lungs);
 const lots:Record<string,LotSupply>={},edges:Record<string,number>={};
 const active=plots.filter(p=>plotUnlocked(s,p.id)&&s.buildings[p.id]&&buildings[s.buildings[p.id]!].demand>0);
 const capacities=new Map(links.map(l=>[l.id,plotUnlocked(s,l.b)&&(l.a==='source'||plotUnlocked(s,l.a))?roadCapacity(s.roads[l.id]??0):0]));
 const remaining=new Map(capacities);let available=capacity;
 // Shortest residual paths allow a neighborhood to receive flow through multiple branches.
 const route=(target:string,min=0):{path:string[];distance:number}|null=>{
  const distances=new Map<string,number>([['source',0]]),prev=new Map<string,{node:string;edge:string}>(),visited=new Set<string>();
  while(true){
   let at:string|null=null,best=Infinity;for(const [id,d] of distances)if(!visited.has(id)&&d<best){at=id;best=d;}
   if(!at)return null;if(at===target){const path:string[]=[];let id=target;while(id!=='source'){const p=prev.get(id)!;path.unshift(p.edge);id=p.node;}return{path,distance:best};}
   visited.add(at);
   for(const edge of links){if((remaining.get(edge.id)??0)<=min+1e-8)continue;const other=edge.a===at?edge.b:edge.b===at?edge.a:null;if(!other||visited.has(other))continue;const next=best+edge.length;if(next<(distances.get(other)??Infinity)){distances.set(other,next);prev.set(other,{node:at,edge:edge.id});}}
  }
 };
 for(const p of active){const path=route(p.id);lots[p.id]={demand:buildings[s.buildings[p.id]!].demand*intensity,delivered:0,ratio:0,connected:!!path,routes:[],distance:path?.distance??0};}
 // Progressive proportional allocation: a distant neighborhood is not starved by iteration order.
 for(let round=0;round<160&&available>1e-7;round++){
  const ordered=active.slice().sort((a,b)=>lots[a.id].delivered/lots[a.id].demand-lots[b.id].delivered/lots[b.id].demand);
  let moved=false;
  for(const p of ordered){const lot=lots[p.id],need=lot.demand-lot.delivered;if(need<1e-7)continue;const r=route(p.id);if(!r)continue;
   const amount=Math.min(need,lot.demand/100,available,...r.path.map(id=>remaining.get(id)!));if(amount<1e-8)continue;
   available-=amount;lot.delivered+=amount;for(const id of r.path)remaining.set(id,remaining.get(id)!-amount);
   const old=lot.routes.find(v=>v.path.join('|')===r.path.join('|'));if(old)old.amount+=amount;else lot.routes.push({path:r.path,amount});moved=true;
  }if(!moved)break;
 }
 for(const l of links)edges[l.id]=(capacities.get(l.id)??0)-(remaining.get(l.id)??0);
 for(const lot of Object.values(lots))lot.ratio=Math.min(1,lot.delivered/lot.demand);
 const demand=Object.values(lots).reduce((n,v)=>n+v.demand,0),delivered=Object.values(lots).reduce((n,v)=>n+v.delivered,0);
 const coverage=demand?Math.min(1,delivered/demand):1;
 let issue='循环顺畅，所有工作街区都有稳定供给。';
 const isolated=active.find(p=>!lots[p.id].connected);
 if(isolated)issue=`${isolated.name} 尚未接通血管。沿虚线连接到左心出口，供给和回流会一起接通。`;
 else if(coverage<.985){
  if(capacity<demand&&capacity-delivered<.12)issue=lungs<=heart?'肺泡交换能力不足。增加交换单元，才能让更多氧气进入循环。':'心脏输送能力不足。升级循环配套，才能把已有的氧气送出去。';
  else {const full=links.find(l=>(s.roads[l.id]??0)>0&&edges[l.id]>=roadCapacity(s.roads[l.id]!)-.08);issue=full?`${linkName(full)} 接近满载。扩容这段血管，或另接一条支路分担运输。`:'部分街区的供给不足。检查连接，并为运输网络增加余量。';}
 }
 return{lots,edges,demand,delivered,coverage,heart,lungs,capacity,issue,healthyHomes:active.filter(p=>s.buildings[p.id]==='home'&&lots[p.id].ratio>=.98).length,homes:active.filter(p=>s.buildings[p.id]==='home').length,muscles:active.filter(p=>s.buildings[p.id]==='muscle').length};
}
export function linkName(link:Link){return `${nodes.find(n=>n.id===link.a)!.name}—${nodes.find(n=>n.id===link.b)!.name}`;}
export type PlanningAction = {type:'build';plot:string;building:Building}|{type:'road';id:string}|{type:'remove-building';plot:string}|{type:'remove-road';id:string}|{type:'upgrade';organ:'heart'|'lungs'}|{type:'downgrade';organ:'heart'|'lungs'}|{type:'move';from:string;to:string};
export function applyPlanningAction(s:PlanningState,action:PlanningAction):string|null {
 let cost=0;
 if(action.type==='build'){
  if(!plots.some(p=>p.id===action.plot)||!plotUnlocked(s,action.plot)||!buildings[action.building])return'请选择一块可建设地块。';
  if(s.buildings[action.plot])return'这块地已经有建筑了。';
  if(!buildingUnlocked(s,action.building))return'继续完成当前章节，就能解锁这项建设。';
  cost=buildings[action.building].cost;if(s.materials<cost)return'组织材料不足，可以回收或调整已有建设。';s.buildings[action.plot]=action.building;
 }else if(action.type==='road'){
  const link=links.find(l=>l.id===action.id);if(!link||!plotUnlocked(s,link.b)||(link.a!=='source'&&!plotUnlocked(s,link.a)))return'这片土地还没有开放。';const level=s.roads[action.id]??0;
  if(level>=3)return'这段血管已经达到本章最高容量。';cost=roadPrice(link,level);if(s.materials<cost)return'组织材料不足，可以另选路线或回收已有设施。';s.roads[action.id]=level+1;
 }else if(action.type==='remove-building'){
  const building=s.buildings[action.plot];if(!building)return'这里没有可回收的建筑。';cost=-buildings[building].cost;delete s.buildings[action.plot];
 }else if(action.type==='remove-road'){
  const link=links.find(l=>l.id===action.id),level=s.roads[action.id];if(!link||!level)return'这里没有可回收的血管。';cost=-roadValue(link,level);delete s.roads[action.id];
 }else if(action.type==='upgrade'){
  if(s[action.organ]>=4)return'配套已升至最高等级。';cost=organPrice(s[action.organ]);if(s.materials<cost)return'组织材料不足，可以回收暂时不用的设施。';s[action.organ]++;
 }else if(action.type==='downgrade'){
  if(s[action.organ]<=1)return'基础循环配套需要保留。';cost=-organPrice(s[action.organ]-1);s[action.organ]--;
 }else{
  if(!s.buildings[action.from]||!plots.some(p=>p.id===action.to)||!plotUnlocked(s,action.to)||s.buildings[action.to])return'请选择一块空地迁入。';s.buildings[action.to]=s.buildings[action.from];delete s.buildings[action.from];
 }
 s.materials-=cost;return null;
}
export function organPrice(level:number){return [0,5,7,9][level]??0;}
const clamp=(n:number,min=0,max=40)=>Math.max(min,Math.min(max,n));
export function chapterRequirements(s:PlanningState):Building[]{return ['home','home','muscle',...services.slice(0,Math.min(4,s.campaign.chapter)),...(s.campaign.chapter===5?['garden' as const]:[])];}
export function missingBuilding(s:PlanningState):Building|undefined {const wanted:Partial<Record<Building,number>>={};for(const b of chapterRequirements(s))wanted[b]=(wanted[b]??0)+1;return (Object.keys(wanted) as Building[]).find(b=>countBuilding(s,b)<wanted[b]!);}
export function awaitingDecision(s:PlanningState){const d=currentChapter(s).decision;return !!(s.walk&&d&&s.walk.elapsed>=d.at-1e-7&&s.walk.choice<0);}
export function signalCoverage(s:PlanningState,n:Network){
 const towers=plots.filter(p=>s.buildings[p.id]==='neuron'&&(n.lots[p.id]?.ratio??0)>=.5);
 const targets=plots.filter(p=>s.buildings[p.id]&&s.buildings[p.id]!=='garden'&&s.buildings[p.id]!=='neuron');
 return targets.length?targets.filter(p=>towers.some(t=>Math.hypot(t.x-p.x,t.z-p.z)<=11.01)).length/targets.length:1;
}
export function systemRates(s:PlanningState,n:Network){
 const efficiency=(b:Building)=>Object.entries(n.lots).filter(([id])=>s.buildings[id]===b).reduce((sum,[,l])=>sum+l.ratio,0);
 const c=s.campaign.chapter,walking=s.phase==='walking',r=s.campaign.resources;
 const food=efficiency('food'),filter=efficiency('filter'),immune=efficiency('immune'),signal=signalCoverage(s,n);
 const nutritionUse=.12*n.homes+.16*n.muscles+.04*services.filter(b=>countBuilding(s,b)>0).length;
 const extraFood=walking?(c===1?.9:c===5?.8:.45):0;
 const heat=walking&&s.walk!.elapsed/currentChapter(s).duration>.25&&s.walk!.elapsed/currentChapter(s).duration<.75;
 const waterUse=walking?(c===2?(heat?1.65:1):c===5?1.3:.65):.3;
 return {food:food*1.35-nutritionUse-extraFood,water:.45+filter*.95-waterUse,waste:.12+food*.16+(walking?.2:0)-filter*.9-.12,
  heal:immune*1.45*(r.food>3?1:.35)*(.55+.45*signal),signal};
}
function advanceResources(s:PlanningState,n:Network,dt:number){
 const r=s.campaign.resources,rates=systemRates(s,n),chapter=s.campaign.chapter,speed=s.phase==='walking'?1:3;
 // A new system starts when its chapter is entered, so it cannot deteriorate before it is introduced.
 if(chapter>=1)r.food=clamp(r.food+rates.food*dt*speed);
 if(chapter>=2){r.water=clamp(r.water+rates.water*dt*speed);r.waste=clamp(r.waste+rates.waste*dt*speed,0,80);}
 if(s.phase==='walking'&&s.campaign.chapter>=4)r.repair=clamp(r.repair+rates.heal*dt,0,100);
}
export function systemIssue(s:PlanningState,n:Network):string{
 if(Object.values(n.lots).some(l=>l.ratio<.95))return n.issue;
 const r=s.campaign.resources,c=s.campaign.chapter;
 if(c>=1&&r.food<3)return s.phase!=='walking'&&systemRates(s,n).food>0?'食堂正在准备营养。储备补足后，我们再出发。':'营养储备不足。接通绒毛食堂，或加开一座食堂分担需求。';
 if(c>=2&&r.water<3)return s.phase!=='walking'&&systemRates(s,n).water>0?'水庭正在补足储备。等一等，水分会慢慢回升。':'水分储备不足。保证水庭供给，并在准备期补足水分。';
 if(c>=2&&r.waste>55)return systemRates(s,n).waste<0?'水庭正在清理代谢负担。等待过滤完成，或增加水庭加快进度。':'代谢负担偏高。增加有稳定供给的肾单位水庭。';
 if(c>=3&&signalCoverage(s,n)<.7)return'信号覆盖不足。把神经信号塔迁到街区之间，或增加一座信号塔。';
 return '';
}
export function collectBadges(s:PlanningState):string[]{
 const n=evaluateNetwork(s),r=s.campaign.records;
 const checks:Record<string,boolean>={neighbor:n.homes>=2,connected:n.healthyHomes>=2,garden:countBuilding(s,'garden')>0,capacity:Object.values(s.roads).some(v=>v!>=2),nourish:!!r.breakfast?.passed,balance:!!r.heat?.passed,music:!!r.melody?.passed,care:!!r.repair?.passed,day:!!r.festival?.passed,master:chapters.every(c=>(r[c.id]?.stars??0)===3)};
 const added=badgeDefinitions.filter(b=>checks[b.id]&&!s.campaign.badges.includes(b.id)).map(b=>b.id);s.campaign.badges.push(...added);return added;
}
export function startWalk(s:PlanningState):string|null {
 if(s.phase==='walking')return'这一轮已经开始了。';if(s.phase==='settle')return'先把两个住区接通，完成安家。';
 const missing=missingBuilding(s);if(missing)return'还需要'+buildings[missing].name+'，再一起出发。';
 const n=evaluateNetwork(s);if(Object.values(n.lots).some(l=>!l.connected))return'先把所有工作街区接通血管，再一起出发。';
 s.walk={elapsed:0,healthy:0,supplied:0,requested:0,choice:-1,trouble:''};s.phase='walking';s.lastResult=null;
 if(s.campaign.chapter===4)s.campaign.resources.repair=15;
 if(s.campaign.chapter===5)s.campaign.resources.repair=75;
 return null;
}
export function chooseDecision(s:PlanningState,index:number):string|null{
 if(!awaitingDecision(s)||(index!==0&&index!==1))return'目前没有等待安排的事件。';
 const choice=currentChapter(s).decision!.choices[index];s.walk!.choice=index;
 const r=s.campaign.resources;for(const key of ['food','water','waste','repair'] as const)r[key]=clamp(r[key]+(choice[key]??0),0,key==='repair'?100:key==='waste'?80:40);
 return null;
}
function bonusAchieved(s:PlanningState,n:Network){const r=s.campaign.resources;return [countBuilding(s,'garden')>0,r.food>=24,r.water>=24&&r.waste<=12,signalCoverage(s,n)>=.999,r.repair>=99.9&&r.waste<=12,r.food>=20&&r.water>=20&&signalCoverage(s,n)>=.999][s.campaign.chapter];}
export function advancePlanning(s:PlanningState,dt:number):string[] {
 const events:string[]=[];if(!Number.isFinite(dt)||dt<=0)return events;
 let left=Math.min(dt,3600);
 while(left>1e-8){
  if(awaitingDecision(s))break;
  const c=currentChapter(s);let step=Math.min(.2,left);
  if(s.walk){step=Math.min(step,c.duration-s.walk.elapsed);if(c.decision&&s.walk.choice<0)step=Math.min(step,c.decision.at-s.walk.elapsed);}
  if(step<1e-8)break;left-=step;s.clock+=step;
  const n=evaluateNetwork(s);advanceResources(s,n,step);
  if(s.phase==='settle'){
   s.settleTime=n.healthyHomes>=2?s.settleTime+step:0;
   if(s.settleTime>=5){s.phase='prepare';s.materials+=6;events.push('邻居们安顿好了！+6 材料，肌肉工坊开放。');}
  }else if(s.phase==='walking'&&s.walk){
   s.walk.elapsed+=step;s.walk.supplied+=n.delivered*step;s.walk.requested+=n.demand*step;
   const issue=systemIssue(s,n);if(!issue&&!missingBuilding(s))s.walk.healthy+=step;else if(!s.walk.trouble)s.walk.trouble=issue||'挑战中的必要设施被回收了。';
   if(awaitingDecision(s))events.push(c.companion+'有一个安排想和你商量。');
   if(s.walk.elapsed>=c.duration-1e-7){
    const w=s.walk,r=s.campaign.resources,healthy=w.healthy,coverage=w.requested?w.supplied/w.requested:0;
    const repairReady=s.campaign.chapter<4||r.repair>=95,passed=healthy>=c.healthy-1e-6&&repairReady,bonus=bonusAchieved(s,n),stars=passed?1+(healthy>=c.duration*.95?1:0)+(bonus?1:0):0;
    const previous=s.campaign.records[c.id],first=passed&&!previous?.passed,reward=first?c.reward+(c.decision&&w.choice>=0?c.decision.choices[w.choice].gift:0):0;
    s.lastResult={chapter:c.id,passed,healthy,coverage,stars,reward,bonus,issue:passed?c.success:!repairReady?'修复还没有完成。保证巡护站的供给，或增建一座巡护站。':w.trouble||'稳定运行的时间不足，再留一点余量。'};
    s.walk=null;
    if(passed){s.phase='complete';s.completed++;s.materials+=reward;if(!previous||(previous.stars??0)<stars)s.campaign.records[c.id]={...s.lastResult};if(c.id==='festival')s.campaign.sandbox=true;events.push(c.title+'完成！'+(reward?' +'+reward+' 材料':' 最佳星级已保留。'));}
    else{s.phase='prepare';events.push('布局已保留，调整后可以免费再试。');}
   }
  }
 }
 collectBadges(s);return events;
}
export function nextChapter(s:PlanningState):string|null {
 if(s.phase!=='complete')return'先完成当前生活项目。';
 const next=chapters.findIndex(c=>!s.campaign.records[c.id]?.passed);
 if(next<0){s.campaign.sandbox=true;return null;}
 s.campaign.chapter=next;s.phase='prepare';s.walk=null;s.lastResult=null;
 return null;
}
export function replayChapter(s:PlanningState,index:number):string|null{
 if(!Number.isInteger(index)||index<0||index>unlockedChapter(s))return'先完成前面的生活项目。';
 if(s.phase==='walking')return'先完成当前挑战，或从菜单结束本轮。';
 s.campaign.chapter=index;s.phase=index===0&&s.settleTime<5&&countBuilding(s,'home')<2?'settle':'prepare';s.walk=null;s.lastResult=null;return null;
}
export function totalStars(s:PlanningState){return chapters.reduce((sum,c)=>sum+(s.campaign.records[c.id]?.stars??0),0);}
export function readPlanning(raw:string|null):PlanningState {
 const fresh=newPlanning();try{
  const v=JSON.parse(raw??'null');if(!v||![1,2].includes(v.version)||!['settle','prepare','walking','complete'].includes(v.phase))return fresh;
  const num=(value:unknown,min:number,max:number,fallback:number)=>typeof value==='number'&&Number.isFinite(value)?Math.max(min,Math.min(max,value)):fallback;
  const s:PlanningState={...fresh,buildings:{},roads:{},materials:Math.floor(num(v.materials,0,10000,24)),heart:Math.floor(num(v.heart,1,4,1)),lungs:Math.floor(num(v.lungs,1,4,1)),phase:v.phase,settleTime:num(v.settleTime,0,5,0),completed:Math.floor(num(v.completed,0,999,0)),clock:num(v.clock,0,1e8,0)};
  const readResult=(value:any,id:ChapterId):WalkResult|null=>value&&typeof value.passed==='boolean'?{chapter:id,passed:value.passed,healthy:num(value.healthy,0,chapters.find(c=>c.id===id)!.duration,0),coverage:num(value.coverage,0,1,0),stars:Math.floor(num(value.stars,0,3,value.passed?1:0)),reward:0,bonus:value.bonus===true,issue:typeof value.issue==='string'?value.issue.slice(0,200):''}:null;
  const cv=v.version===2?v.campaign:null;
  if(cv){
   for(const c of chapters){const record=readResult(cv.records?.[c.id],c.id);if(!record?.passed)break;s.campaign.records[c.id]=record;}
   s.campaign.chapter=Math.floor(num(cv.chapter,0,unlockedChapter(s),0));
   s.campaign.introduced=cv.introduced===true;s.campaign.guided=cv.guided!==false;s.campaign.sandbox=!!s.campaign.records.festival;
   if(typeof cv.townName==='string'&&cv.townName.trim())s.campaign.townName=cv.townName.trim().slice(0,20);
   s.campaign.badges=Array.isArray(cv.badges)?[...new Set<string>(cv.badges.filter((id:unknown)=>badgeDefinitions.some(b=>b.id===id)))]:[];
   for(const key of ['food','water','waste','repair'] as const)s.campaign.resources[key]=num(cv.resources?.[key],0,key==='repair'?100:key==='waste'?80:40,fresh.campaign.resources[key]);
  }else if(s.completed>0){s.campaign.records.dawn={chapter:'dawn',passed:true,healthy:90,coverage:1,stars:1,reward:0,bonus:false,issue:chapters[0].success};}
  for(const p of plots){const b=v.buildings?.[p.id];if(Object.hasOwn(buildings,b)&&plotUnlocked(s,p.id)&&buildingUnlocked(s,b))s.buildings[p.id]=b;}
  for(const l of links){const level=Math.floor(num(v.roads?.[l.id],0,3,0));if(level&&plotUnlocked(s,l.b)&&(l.a==='source'||plotUnlocked(s,l.a)))s.roads[l.id]=level;}
  if(s.phase==='walking'&&v.walk&&typeof v.walk.elapsed==='number'){
   const elapsed=num(v.walk.elapsed,0,currentChapter(s).duration,0);s.walk={elapsed,healthy:num(v.walk.healthy,0,elapsed,0),supplied:num(v.walk.supplied,0,1e5,0),requested:num(v.walk.requested,0,1e5,0),choice:Math.floor(num(v.walk.choice,-1,1,-1)),trouble:typeof v.walk.trouble==='string'?v.walk.trouble.slice(0,200):''};
   // A save exactly at the finish line must resolve, rather than stall with a zero time step.
   if(elapsed>=currentChapter(s).duration)s.walk.elapsed=currentChapter(s).duration-.0001;
  }else if(s.phase==='walking')s.phase='prepare';
  if(s.phase==='complete'&&!s.campaign.records[currentChapter(s).id])s.phase='prepare';
  s.lastResult=readResult(v.lastResult,currentChapter(s).id);if(s.lastResult)s.lastResult.reward=Math.floor(num(v.lastResult?.reward,0,30,0));return s;
 }catch{return fresh;}
}
