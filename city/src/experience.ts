import type { CityId, ModeId } from './model';
export const cityIds:CityId[]=['heart','brain','lungs','gut','kidneys','immune'];
export interface ResidentIdentity { name:string;role:string;wish:string; }
export const residents:Record<CityId,ResidentIdentity[]>={
 heart:[{name:'阿律',role:'心肌街区送件员',wish:'把今天的补给送到泵站附近。'},{name:'小栗',role:'细胞书屋店员',wish:'工作结束后，去街边读一会儿书。'},{name:'米粒',role:'心肌居民',wish:'沿着冠脉街，慢慢走回家。'}],
 brain:[{name:'阿突',role:'神经元信使',wish:'把信息交给下一位伙伴。'},{name:'绒绒',role:'胶质维护员',wish:'照料信使，也照料沿街的小花房。'},{name:'知知',role:'记忆书屋店员',wish:'今天也想认识一个新朋友。'}],
 lungs:[{name:'泡泡',role:'肺泡港接待员',wish:'等一班红细胞运输队到港。'},{name:'小青',role:'肺泡花房店员',wish:'在舒展的穹顶下歇一会儿。'},{name:'云云',role:'交换码头搬运员',wish:'把每一次交接都照看好。'}],
 gut:[{name:'麦芽',role:'营养街补给员',wish:'去绒毛梯田看看新一批补给。'},{name:'酶酶',role:'加工街联络员',wish:'把加工站与小集市连接起来。'},{name:'糖糖',role:'糖原仓库店员',wish:'整理货架，再去喝一杯茶。'}],
 kidneys:[{name:'小澄',role:'肾单位回收员',wish:'巡看水渠，找回可再利用的物质。'},{name:'盐盐',role:'水盐街管理员',wish:'沿水岸完成今天的巡查。'},{name:'滴滴',role:'回收驿站店员',wish:'在小桥边等朋友下班。'}],
 immune:[{name:'小白',role:'吞噬细胞巡查员',wish:'看看街区有没有需要协作的事情。'},{name:'阿T',role:'T细胞联络员',wish:'去广场与伙伴交流。'},{name:'贝贝',role:'B细胞街区居民',wish:'把新的识别经验写进手记。'}],
};
export interface CityMoment { id:string; title:string; poi:string; phases:[string,string,string]; fact:string; }
export const moments:Record<CityId,CityMoment>={
 heart:{id:'delivery',title:'泵站的补给时刻',poi:'coronary',phases:['补给抵达，居民向花园集合','交接氧气与养分','居民散去，下一轮运输继续'],fact:'心肌自身也需要冠状动脉供血。'},
 brain:{id:'relay',title:'一束信号的接力',poi:'cortex',phases:['接收端亮起','信号沿连接依次传播','伙伴完成交接，灯光渐渐平息'],fact:'神经系统通过相互连接的神经元网络传递和处理信息。'},
 lungs:{id:'exchange',title:'肺泡港的气体交接',poi:'oxygen-dock',phases:['红细胞运输队靠近','氧气与二氧化碳向相反方向扩散','完成交换，运输继续'],fact:'气体沿各自分压梯度扩散；颜色和搬运情境是比喻。'},
 gut:{id:'harvest',title:'绒毛梯田开仓了',poi:'villi',phases:['一批营养物料抵达','绒毛装卸线开始交接','补给分送到后续处理路线'],fact:'小肠绒毛和微绒毛扩大营养吸收面积。'},
 kidneys:{id:'return',title:'回收渠的归流时刻',poi:'left-tubule',phases:['滤液沿肾小管前行','水和有用物质返回血液','剩余液体继续接受处理'],fact:'重吸收是选择性回收，并非把滤液全部排出。'},
 immune:{id:'meeting',title:'关卡前的小小协作',poi:'scanner',phases:['识别线索出现','免疫居民来到关卡交流','协作结束，巡查继续'],fact:'免疫细胞通过多种识别与交流机制协同工作。'},
};
export function momentAt(city:CityId,time:number){
 const phase=((time+cityIds.indexOf(city)*11)%66+66)%66;
 return {active:phase<24,progress:Math.min(1,phase/24),stage:Math.min(2,Math.floor(phase/8)),remaining:Math.ceil(66-phase),...moments[city]};
}
export interface VisitStep {city:CityId;poi:string;title:string;text:string;cargo:string;oxygen?:boolean;}
export const deliveryTrip:VisitStep[]=[
 {city:'heart',poi:'right-ventricle',title:'小红 · 从右心启程',text:'身体归来的血液含氧较少。右心室将它送往肺部；这一段经过肺动脉。',cargo:'低氧血液',oxygen:false},
 {city:'lungs',poi:'oxygen-dock',title:'小红 · 在肺泡港补给',text:'氧气从肺泡扩散进入血液，与血红蛋白结合；二氧化碳向肺泡扩散。',cargo:'接收氧气 O₂',oxygen:true},
 {city:'heart',poi:'left-ventricle',title:'小红 · 左心中转',text:'血液经肺静脉返回左心，再由左心室送入主动脉。',cargo:'携带氧气 O₂',oxygen:true},
 {city:'brain',poi:'cortex',title:'小红 · 把氧送给组织',text:'这次来到大脑组织。氧气离开毛细血管进入组织，参与细胞能量代谢。',cargo:'向组织交付氧气',oxygen:false},
 {city:'heart',poi:'right-atrium',title:'小红 · 回到起点',text:'血液沿静脉回到右心，又一次循环即将开始。二氧化碳主要以碳酸氢根形式运输。',cargo:'返回右心 · 循环继续',oxygen:false},
];
export const changes:Record<ModeId,VisitStep[]>={
 rest:[{city:'heart',poi:'pacemaker',title:'回到安静的节律',text:'观察心跳逐渐回到休息时的示意水平，而不是突然改变。',cargo:'节律回落'},{city:'lungs',poi:'left-alveoli',title:'呼吸也慢下来',text:'肺泡起伏与运输活动逐渐回到较平缓的节奏。',cargo:'缓慢舒展'},{city:'brain',poi:'glia',title:'安静中的日常',text:'休息时，身体各系统仍持续工作。',cargo:'维持日常活动'}],
 walk:[{city:'heart',poi:'left-ventricle',title:'第一站 · 供血增加',text:'活动时，循环系统逐渐提高输送能力。看泵站节奏与运输速度如何变化。',cargo:'心跳与血流上升'},{city:'lungs',poi:'left-alveoli',title:'第二站 · 呼吸配合',text:'呼吸活动也随之增加，为气体交换提供支持。',cargo:'呼吸加快'},{city:'brain',poi:'motor',title:'第三站 · 协调动作',text:'神经系统参与组织动作，并与身体其他调节机制协作。这里按顺序讲解，实际变化彼此重叠。',cargo:'网络协作'}],
 meal:[{city:'gut',poi:'stomach',title:'第一站 · 混合与消化',text:'食物在胃中混合，并在后续消化过程中进一步分解。',cargo:'消化活动增强'},{city:'gut',poi:'villi',title:'第二站 · 扩大吸收',text:'大部分营养物质在小肠被吸收。观察绒毛区的金色物料流。',cargo:'营养转运'},{city:'gut',poi:'liver',title:'第三站 · 分类调配',text:'吸收的糖和氨基酸等先经门静脉到肝脏；大部分膳食脂肪的早期转运路线不同。',cargo:'肝脏处理与分配'}],
 sleep:[{city:'brain',poi:'cortex',title:'第一站 · 夜间的城市',text:'睡眠中的脑仍在活动。这里用安静的非快速眼动睡眠作为示意情境。',cargo:'窗灯渐亮'},{city:'heart',poi:'pacemaker',title:'第二站 · 放缓的节拍',text:'此情境中，示意心率逐渐降低；心脏继续泵血。',cargo:'节律放缓'},{city:'lungs',poi:'diaphragm',title:'第三站 · 持续的呼吸',text:'呼吸仍持续进行。观察较慢的起伏，感受城市夜间的节奏。',cargo:'呼吸仍在继续'}],
};
export function chapterAt(elapsed:number,count:number,duration=18){
 const t=Math.max(0,Number.isFinite(elapsed)?elapsed:0),index=Math.min(count-1,Math.floor(t/duration));
 return {index,progress:Math.min(1,(t-index*duration)/duration),done:t>=count*duration};
}
export interface ViewMemory {city:CityId;eye:[number,number,number];target:[number,number,number];}
export type FindingKind='resident'|'moment'|'structure'|'journey'|'change';
export interface Finding {key:string;kind:FindingKind;city:CityId;title:string;detail:string;at:number;}
export interface Postcard {id:string;city:CityId;image:string;at:number;}
export interface Bookmark {id:string;title:string;view:ViewMemory;}
export interface Journal {findings:Finding[];photos:Postcard[];views:Bookmark[];}
export const emptyJournal=():Journal=>({findings:[],photos:[],views:[]});
export function validView(value:unknown):value is ViewMemory {
 const v=value as ViewMemory;const point=(p:unknown)=>Array.isArray(p)&&p.length===3&&p.every(n=>typeof n==='number'&&Number.isFinite(n)&&Math.abs(n)<200);
 return !!v&&cityIds.includes(v.city)&&point(v.eye)&&point(v.target)&&v.eye[1]>.1;
}
export function readJournal(raw:string|null):Journal {
 try{
  const j=JSON.parse(raw||'{}'),out=emptyJournal();
  if(Array.isArray(j.findings))out.findings=j.findings.filter((f:Finding)=>f&&cityIds.includes(f.city)&&['resident','moment','structure','journey','change'].includes(f.kind)&&typeof f.key==='string'&&f.key.length<100&&typeof f.title==='string'&&f.title.length<100&&typeof f.detail==='string'&&f.detail.length<600&&Number.isFinite(f.at)).slice(-120);
  if(Array.isArray(j.photos))out.photos=j.photos.filter((p:Postcard)=>p&&cityIds.includes(p.city)&&typeof p.id==='string'&&Number.isFinite(p.at)&&typeof p.image==='string'&&p.image.length<750000&&/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(p.image)).slice(-4);
  if(Array.isArray(j.views))out.views=j.views.filter((v:Bookmark)=>v&&typeof v.id==='string'&&/^[a-zA-Z0-9_-]{1,100}$/.test(v.id)&&typeof v.title==='string'&&v.title.length<100&&validView(v.view)).slice(-8);
  return out;
 }catch{return emptyJournal();}
}
export function addFinding(journal:Journal,finding:Finding):boolean {
 if(journal.findings.some(f=>f.key===finding.key))return false;
 journal.findings.push(finding);if(journal.findings.length>120)journal.findings.shift();return true;
}
export const escapeHTML=(text:string)=>text.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
