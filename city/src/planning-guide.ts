import {plots,links,nodes,buildings,evaluateNetwork,currentChapter,plotUnlocked,missingBuilding,countBuilding,roadCapacity,roadPrice,organPrice,signalCoverage,systemRates,systemIssue,awaitingDecision,type PlanningState,type PlanningAction,type Building,type Network} from './planning.ts';
import {chapters} from './campaign.ts';
export interface GuideStep {kind:'build'|'connect'|'upgrade'|'move'|'wait'|'start'|'running'|'decision'|'next'|'finish'|'budget';title:string;copy:string;button:string;target:string;cost:number;action?:PlanningAction;tool?:Building|'road';}
const preferred:Record<Building,string[]>={home:['p0','p4','p1'],muscle:['p6','p7'],food:['p1','p2','p9'],filter:['p7','p8','p10'],neuron:['p4','p5'],immune:['p5','p8','p10'],garden:['p2','p8','p9']};
export function recommendPlot(s:PlanningState,b:Building){
 const free=plots.filter(p=>plotUnlocked(s,p.id)&&!s.buildings[p.id]);
 if(b==='neuron'){const targets=plots.filter(p=>s.buildings[p.id]&&s.buildings[p.id]!=='garden'&&s.buildings[p.id]!=='neuron');free.sort((a,b)=>targets.filter(p=>Math.hypot(b.x-p.x,b.z-p.z)<=11).length-targets.filter(p=>Math.hypot(a.x-p.x,a.z-p.z)<=11).length||Math.hypot(a.x-5,a.z)-Math.hypot(b.x-5,b.z));return free[0];}
 return free.find(p=>preferred[b].includes(p.id))??free[0];
}
function connection(s:PlanningState,target:string){
 const distances=new Map<string,number>([['source',0]]),previous=new Map<string,{node:string;edge:string}>(),seen=new Set<string>();
 while(true){let at:string|null=null,best=Infinity;for(const [id,d] of distances)if(!seen.has(id)&&d<best){at=id;best=d;}if(!at)return null;
  if(at===target){const path:string[]=[];let cursor:string=at;while(cursor!=='source'){const p:{node:string;edge:string}=previous.get(cursor)!;path.unshift(p.edge);cursor=p.node;}return path.find(id=>!s.roads[id])??null;}
  seen.add(at);for(const l of links){if(!plotUnlocked(s,l.b)||(l.a!=='source'&&!plotUnlocked(s,l.a)))continue;const to=l.a===at?l.b:l.b===at?l.a:null;if(!to||seen.has(to))continue;const value=best+(s.roads[l.id]?.25:l.cost)+l.length*.4;if(value<(distances.get(to)??Infinity)){distances.set(to,value);previous.set(to,{node:at,edge:l.id});}}
 }
}
function budget(s:PlanningState,step:GuideStep):GuideStep{
 if(step.cost<=s.materials)return step;
 const garden=plots.find(p=>s.buildings[p.id]==='garden');return{kind:'budget',title:'先整理一点建设材料',copy:'这一步需要 '+step.cost+' 材料，当前有 '+s.materials+'。回收设施会全额返还，布局也能重新安排。',button:garden?'回收 '+garden.name+' 花园 · +2':'查看建设指南',target:garden?'plot:'+garden.id:'',cost:0,action:garden?{type:'remove-building',plot:garden.id}:undefined};
}
function build(s:PlanningState,b:Building):GuideStep{
 const p=recommendPlot(s,b);if(!p){const garden=plots.find(p=>s.buildings[p.id]==='garden');return{kind:'budget',title:'给新设施留一个位置',copy:'地块已用满。可以迁移或回收一座暂时不用的建筑；材料全额返还。',button:garden?'查看花园地块':'选择建筑整理空间',target:garden?'plot:'+garden.id:'',cost:0};}
 const purpose:Record<Building,string>={home:'第二个住区建好后，再接通血管，小红就能把氧气送过去。',muscle:'肌肉工坊支持身体活动。建好后，需要给它接一条路。',food:'食堂需要供氧才能生产营养。早餐的储备会接着支持后面的章节。',filter:'水庭回收水分并清理代谢负担，让炎热的午后也能平稳运行。',neuron:'这里靠近其他工作街区。黄色连线会显示它能协调哪些建筑。',immune:'巡护站获得供给后，会帮助街角完成修复。',garden:'在工作街区旁留个能歇脚的地方。花园也是灯火节的集合地点。'};
 return budget(s,{kind:'build',title:'建一座'+buildings[b].name,copy:purpose[b]+' 推荐 '+p.name+'，也可以自己选址。',button:'在 '+p.name+' 建造 · '+buildings[b].cost,target:'plot:'+p.id,cost:buildings[b].cost,action:{type:'build',plot:p.id,building:b},tool:b});
}
export function nextGuide(s:PlanningState):GuideStep{
 const c=currentChapter(s),n=evaluateNetwork(s),base={target:'',cost:0};
 if(s.phase==='complete'){const next=chapters.find(v=>!s.campaign.records[v.id]?.passed);return next?{...base,kind:'next',title:'新的生活，在等你',copy:c.success,button:'前往：'+next.title}:{...base,kind:'finish',title:'属于你们的一天，完成了',copy:'六大系统已经一起工作。继续自由建设，或重玩章节收集全部 18 颗星。',button:'打开通关纪念册'};}
 if(s.phase==='walking'){
  if(awaitingDecision(s))return{...base,kind:'decision',title:c.decision!.title,copy:c.decision!.copy,button:'等待你的安排'};
  const issue=systemIssue(s,n);return{...base,kind:'running',title:issue?'有个地方需要照顾':'城市正在支持这段生活',copy:issue||'可以跟随小红观察。每一段稳定运行的时间，都会计入本章成果。',button:issue?'暂停，调整规划':'跟随小红看看'};
 }
 const missing=s.phase==='settle'?(n.homes<2?'home':undefined):missingBuilding(s);if(missing)return build(s,missing);
 const isolated=plots.find(p=>n.lots[p.id]&&!n.lots[p.id].connected);
 if(isolated){const id=connection(s,isolated.id);if(id){const l=links.find(l=>l.id===id)!,from=nodes.find(n=>n.id===l.a)!.name,to=nodes.find(n=>n.id===l.b)!.name;return budget(s,{kind:'connect',title:'让供给送到 '+isolated.name,copy:isolated.name+' 已经建好了，现在还没有接通。闪光的支路会把它连回循环。',button:'连接 '+from+' → '+to+' · '+l.cost,target:'road:'+id,cost:l.cost,action:{type:'road',id},tool:'road'});}}
 const forecast=evaluateNetwork(s,s.phase==='settle'?1:c.peak);
 if(forecast.coverage<.985){
  if(forecast.capacity<forecast.demand&&forecast.delivered>=forecast.capacity-.12){const organ=forecast.lungs<=forecast.heart?'lungs':'heart';if(s[organ]<4)return budget(s,{kind:'upgrade',title:organ==='lungs'?'给肺泡增加交换空间':'让心脏送得更从容',copy:forecast.issue+' 这是提高上游能力，不会自动加宽支路。',button:(organ==='lungs'?'扩建肺泡':'升级心脏')+' · '+organPrice(s[organ]),target:organ,cost:organPrice(s[organ]),action:{type:'upgrade',organ}});}
  const edge=links.filter(l=>(s.roads[l.id]??0)>0&&(s.roads[l.id]??0)<3&&forecast.edges[l.id]>=roadCapacity(s.roads[l.id]!)-.1).sort((a,b)=>forecast.edges[b.id]-forecast.edges[a.id])[0];
  if(edge){const cost=roadPrice(edge,s.roads[edge.id]!);return budget(s,{kind:'upgrade',title:'给这段血管留点余量',copy:forecast.issue,button:'扩容至 '+roadCapacity(s.roads[edge.id]!+1)+' · '+cost,target:'road:'+edge.id,cost,action:{type:'road',id:edge.id},tool:'road'});}
  const alternate=links.filter(l=>!s.roads[l.id]&&plotUnlocked(s,l.b)&&(l.a==='source'||plotUnlocked(s,l.a))).map(l=>({link:l,gain:evaluateNetwork({...s,roads:{...s.roads,[l.id]:1}},currentChapter(s).peak).coverage-forecast.coverage})).filter(v=>v.gain>.01).sort((a,b)=>b.gain/b.link.cost-a.gain/a.link.cost)[0];
  if(alternate)return budget(s,{kind:'connect',title:'分一条路，让循环轻松一点',copy:'现有主路已达到容量上限。这条新支路能分担实际运输。',button:'铺设分流支路 · '+alternate.link.cost,target:'road:'+alternate.link.id,cost:alternate.link.cost,action:{type:'road',id:alternate.link.id},tool:'road'});
  return{...base,kind:'budget',title:'给拥挤的循环减点负担',copy:'工作街区较多。可以回收暂时不用的重复设施，或铺设一条新支路。',button:'查看当前供给',target:'network'};
 }
 if(s.phase==='settle')return{...base,kind:'wait',title:'小红正在拜访新邻居',copy:'两个住区都已接通。稳定运行 5 秒后，居民会送来新材料。',button:'正在安顿 · '+Math.min(5,Math.floor(s.settleTime))+' / 5 秒'};
 if(s.campaign.chapter>=3&&signalCoverage(s,n)<.7){const p=recommendPlot(s,'neuron'),tower=plots.find(p=>s.buildings[p.id]==='neuron');if(p&&tower){const moved={...s,buildings:{...s.buildings,[tower.id]:undefined,[p.id]:'neuron' as const}};if(signalCoverage(moved,evaluateNetwork(moved))>signalCoverage(s,n)+.05)return{...base,kind:'move',title:'把信号塔放得更居中',copy:'当前覆盖 '+Math.round(signalCoverage(s,n)*100)+'%。迁到 '+p.name+' 能照顾更多街区；迁移后记得接通血管。',button:'迁移到 '+p.name+' · 免费',target:'plot:'+p.id,action:{type:'move',from:tower.id,to:p.id}};}return build(s,'neuron');}
 const r=s.campaign.resources,rates=systemRates(s,n);
 if(s.campaign.chapter>=1&&r.food<12){if(rates.food<=0)return build(s,'food');return{...base,kind:'wait',title:'让早餐先储备一点',copy:'准备期间会快速补给，凑够 12 份就可以出发。现在 '+Math.floor(r.food)+' / 12。',button:'食堂正在准备补给'};}
 if(s.campaign.chapter>=2&&(r.water<12||r.waste>30)){if(rates.water<=0||rates.waste>0)return build(s,'filter');return{...base,kind:'wait',title:'让水庭整理一下循环',copy:'准备期间快速回收。水分达到 12、代谢负担低于 30 后，出发会更从容。',button:'水庭正在回收与过滤'};}
 return{...base,kind:'start',title:'准备好了，一起出发',copy:'高峰供给 '+Math.round(forecast.coverage*100)+'%。本章需要稳定运行 '+c.healthy+' 秒'+(s.campaign.chapter>=4?'，并达到 95% 修复':'')+'；可以随时暂停调整。',button:'开始'+(s.campaign.chapter===0?'第一次散步':'本章挑战')+' · '+c.duration+' 秒'};
}
export function objectives(s:PlanningState,n:Network){
 const c=s.campaign.chapter,connected=Object.values(n.lots).filter(l=>l.connected).length,all=Object.keys(n.lots).length;
 if(s.phase==='settle')return[{title:'两处细胞住区',value:n.homes+' / 2',done:n.homes>=2},{title:'连续稳定供给',value:Math.min(5,Math.floor(s.settleTime))+' / 5 秒',done:s.settleTime>=5}];
 const first=c>=4&&s.walk?{title:'街角修复',value:Math.floor(s.campaign.resources.repair)+' / 95%',done:s.campaign.resources.repair>=95}:c===0?{title:'肌肉工坊',value:n.muscles+' / 1',done:n.muscles>=1}:c<5?{title:buildings[currentChapter(s).service!].name,value:countBuilding(s,currentChapter(s).service!)+' / 1',done:countBuilding(s,currentChapter(s).service!)>=1}:{title:'六大系统与花园',value:missingBuilding(s)?'准备中':'已就绪',done:!missingBuilding(s)};
 return[first,{title:'工作街区全部连通',value:connected+' / '+all,done:connected===all},{title:'应对本章高峰',value:Math.round(evaluateNetwork(s,currentChapter(s).peak).coverage*100)+'%',done:evaluateNetwork(s,currentChapter(s).peak).coverage>=.985}];
}
