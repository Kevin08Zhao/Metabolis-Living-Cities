export type CityId = 'heart' | 'brain' | 'lungs' | 'gut' | 'kidneys' | 'immune';
export type ModeId = 'rest' | 'walk' | 'meal' | 'sleep';
export interface City {
  id: CityId; name: string; short: string; english: string; system: string;
  color: string; pale: string; position: [number, number]; role: string; description: string;
  facts: [string, string, string]; process: [string, string, string]; resident: string; quote: string;
}
export const cities: City[] = [
  { id:'heart', name:'心脏动力城', short:'心脏', english:'HEART QUARTER', system:'循环系统', color:'#d87565', pale:'#fae7de', position:[0,0], role:'让每一份温暖，都有去处。', description:'这里的泵站昼夜不停，把血液送向肺和全身。瓣膜像单向闸门，让运输队伍沿着正确的方向前进。', facts:['心脏有四个腔室，左右两侧分别服务肺循环和体循环。','心脏的节律起源于自身的起搏细胞；大脑和激素会调节它的快慢。','动脉把血液带离心脏，静脉让血液回到心脏；并非所有动脉都富氧。'], process:['右心 → 肺','肺 → 左心','左心 → 全身'], resident:'红细胞快递员', quote:'我的货物是氧气，下一站是需要它的细胞！' },
  { id:'brain', name:'神经指挥城', short:'大脑', english:'NEURAL QUARTER', system:'神经系统', color:'#9a83bb', pale:'#eee7f5', position:[-10,-8], role:'小小的信号，连接整个世界。', description:'神经元织成细密的通讯网络。感觉在这里被整合，指令从这里发出；脑干也参与调节呼吸和心率。', facts:['神经元通过电信号和化学信号传递信息。','大脑会整合感觉输入，再协调动作、记忆和情绪。','很多器官也有局部调节机制，并不等待大脑逐一下令。'], process:['接收感觉','整合信息','传递指令'], resident:'神经元信使', quote:'一条消息穿过突触，就能开启一次新的连接。' },
  { id:'lungs', name:'肺泡云朵港', short:'肺部', english:'ALVEOLAR HARBOR', system:'呼吸系统', color:'#559f9a', pale:'#deefeb', position:[9,-8], role:'一呼一吸，为城市换来新鲜。', description:'成簇的肺泡是一座座交换站。氧气穿过薄薄的壁进入血液，二氧化碳沿相反方向离开，随呼气排出。', facts:['气体通过扩散跨过肺泡与毛细血管之间的薄壁。','肺动脉运来含氧较少的血，肺静脉送回含氧较多的血。','呼吸运动由膈肌等呼吸肌完成，肺本身不是主动抽气的泵。'], process:['吸入空气','肺泡交换','呼出二氧化碳'], resident:'肺泡交换员', quote:'把氧气交给红细胞，再把二氧化碳送出去。' },
  { id:'gut', name:'营养加工城', short:'消化', english:'NUTRIENT GARDENS', system:'消化系统', color:'#ca9748', pale:'#f5ebd5', position:[11,5], role:'把一顿美餐，变成生活的能量。', description:'胃负责混合和初步消化，小肠继续分解并吸收。绒毛像密集的装卸码头，把营养送进身体的运输网络。', facts:['大多数营养物质在小肠被吸收；胃并不是主要吸收站。','糖类最终可被分解为单糖，蛋白质被分解为氨基酸等。','吸收的糖和氨基酸先经门静脉到肝脏；大部分膳食脂肪先进入淋巴。'], process:['分解食物','小肠吸收','运输与利用'], resident:'绒毛装卸员', quote:'食物要先变成足够小的分子，才能通行哦。' },
  { id:'kidneys', name:'肾脏净水湾', short:'肾脏', english:'RENAL SPRINGS', system:'泌尿系统', color:'#679daf', pale:'#e1eef3', position:[0,11], role:'留下需要的，送走多余的。', description:'肾单位先过滤血浆，再把大部分水和有用物质重新吸收。留下的废物和多余水分形成尿液，维持内部环境稳定。', facts:['肾小球过滤血液，血细胞和大部分蛋白质通常留在血管里。','肾小管重吸收大部分滤出的水与有用物质，也会分泌某些物质。','肾脏调节水盐和酸碱平衡；它不是只会筛掉垃圾的滤网。'], process:['肾小球过滤','肾小管重吸收','尿液排出'], resident:'肾单位管理员', quote:'等等，这些水和养分还需要送回去！' },
  { id:'immune', name:'免疫守护站', short:'免疫', english:'IMMUNE SANCTUARY', system:'免疫系统', color:'#7a9e72', pale:'#e8eddf', position:[-11,5], role:'温柔的日常，也有人在守护。', description:'免疫细胞在血液、淋巴和组织之间巡逻。淋巴结提供相遇与交流的场所，让不同细胞共同识别和应对威胁。', facts:['免疫系统分布全身，淋巴结只是其中一类协作场所。','吞噬细胞可以吞入并处理某些病原体和细胞残片。','B 细胞可分化为产生抗体的浆细胞，部分免疫细胞能形成记忆。'], process:['发现异常','协同应对','形成记忆'], resident:'白细胞巡逻员', quote:'巡逻、识别、互相配合，这就是我们的日常。' },
];
export const modes: Record<ModeId, { name:string; heart:number; breath:number; flow:number; digestion:number; message:string; changes:string[] }> = {
  rest:{name:'悠闲休息',heart:72,breath:14,flow:1,digestion:1,message:'此刻，一切都在自己的节奏里。',changes:['心脏平稳泵血','肺泡持续交换','各城维持日常工作']},
  walk:{name:'出门散步',heart:102,breath:22,flow:1.7,digestion:.8,message:'肌肉需要更多氧气，运输队伍忙起来了。',changes:['心跳与呼吸加快','血流运输加快','向活动组织供应更多氧气']},
  meal:{name:'享用午餐',heart:78,breath:15,flow:1.12,digestion:2.3,message:'营养加工城开工，新的补给正在装载。',changes:['胃肠蠕动与分泌增强','小肠吸收营养','肝脏接收和处理养分']},
  sleep:{name:'进入梦乡',heart:60,breath:11,flow:.72,digestion:.75,message:'在安静的睡眠阶段，城市放慢脚步，工作仍在继续。',changes:['示意安静的非快速眼动睡眠','心率和呼吸通常减慢','大脑与其他器官仍在工作']},
};
export const tourSteps: {city:CityId;title:string;text:string;cargo:string;oxygen:boolean}[] = [
  {city:'heart',title:'01 / 从右心出发',text:'我是红细胞小红。刚刚从身体返回，携带的氧气变少了。右心把我送进肺动脉，前往肺泡补给。',cargo:'含氧较少 · 前往肺部',oxygen:false},
  {city:'lungs',title:'02 / 在肺泡交换气体',text:'氧气从肺泡扩散进入血液，与我体内的血红蛋白结合；二氧化碳从血液进入肺泡，随后被呼出。',cargo:'装载氧气 · 卸下二氧化碳',oxygen:true},
  {city:'heart',title:'03 / 回到左心中转',text:'肺静脉把我带回左心。左心再用一次有力的收缩，把我送进主动脉，驶向全身组织。',cargo:'含氧较多 · 进入体循环',oxygen:true},
  {city:'brain',title:'04 / 给组织送去氧气',text:'这次我来到大脑的毛细血管。氧气离开血液，进入组织；细胞利用氧气参与能量代谢。其他器官也有各自的供血支路。',cargo:'交付氧气 · 接收二氧化碳',oxygen:false},
  {city:'heart',title:'05 / 返回，再次启程',text:'血液沿静脉返回右心，又一个循环开始了。二氧化碳主要以碳酸氢根形式在血液中运输，并不是都由红细胞直接背着。',cargo:'循环完成 · 旅途仍在继续',oxygen:false},
];
export const sources = [
  {label:'NHLBI · 血液怎样流动',url:'https://www.nhlbi.nih.gov/health/heart/blood-flow'},
  {label:'NHLBI · 心脏与心跳',url:'https://www.nhlbi.nih.gov/health/heart/heart-beats'},
  {label:'NHLBI · 呼吸与气体交换',url:'https://www.nhlbi.nih.gov/health/lungs/breathing-benefits'},
  {label:'NIDDK · 消化系统如何工作',url:'https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works'},
  {label:'NIDDK · 肾脏如何工作',url:'https://www.niddk.nih.gov/health-information/kidney-disease/kidneys-how-they-work'},
  {label:'NINDS · 认识大脑',url:'https://www.ninds.nih.gov/health-information/public-education/brain-basics'},
  {label:'NIAID · 免疫系统概览',url:'https://www.niaid.nih.gov/research/immune-system-overview'},
];
export const bloodRoutes = cities.filter(c=>c.id!=='heart').flatMap(c=>[
  {from:'heart' as CityId,to:c.id,oxygen:c.id!=='lungs'},
  {from:c.id,to:'heart' as CityId,oxygen:c.id==='lungs'},
]);
export function getCity(id: CityId) { return cities.find(c => c.id === id)!; }
export function approach(value:number, target:number, dt:number) { return value + (target-value)*(1-Math.exp(-Math.max(0,dt)*2)); }
export interface Simulation {
  time:number; heart:number; breath:number; flow:number; digestion:number;
  beats:number; breaths:number; transport:number; nutrients:number;
}
export function createSimulation():Simulation { return {time:0,heart:72,breath:14,flow:1,digestion:1,beats:0,breaths:0,transport:0,nutrients:0}; }
/** Integrate phases instead of multiplying elapsed time by a changing rate. */
export function advanceSimulation(state:Simulation,mode:ModeId,dt:number,speed=1,paused=false):void {
  if(paused||!Number.isFinite(dt)||dt<=0||!Number.isFinite(speed)||speed<=0)return;
  const step=dt*speed,target=modes[mode];
  state.time+=step;
  state.heart=approach(state.heart,target.heart,step);
  state.breath=approach(state.breath,target.breath,step);
  state.flow=approach(state.flow,target.flow,step);
  state.digestion=approach(state.digestion,target.digestion,step);
  state.beats+=step*state.heart/60;
  state.breaths+=step*state.breath/60;
  state.transport+=step*state.flow;
  state.nutrients+=step*state.digestion;
}
export function readProgress(raw: string | null): CityId[] {
  try { const data:unknown=JSON.parse(raw || '[]'); return Array.isArray(data) ? [...new Set(data.filter((id):id is CityId => cities.some(c=>c.id===id)))] : []; } catch { return []; }
}
