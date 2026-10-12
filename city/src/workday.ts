/** A small persistent story. Time advances only while its city is being observed. */
export const workStages=['invitation','setting-out','queue','partner','exchange','returning','rest','complete'] as const;
export type WorkStage=typeof workStages[number];
export type HarborPerson='red'|'bubble'|'cloud'|'green';
export interface Workday {version:1;stage:WorkStage;elapsed:number;active:boolean;completed:number;hint:string;photo:string|null;}
export const newWorkday=():Workday=>({version:1,stage:'invitation',elapsed:0,active:false,completed:0,hint:'',photo:null});
export const workChapters:Record<WorkStage,{title:string;eyebrow:string;body:string;speaker:string;line:string;duration:number;task:string}>={
 invitation:{title:'今天，一起上班吧。',eyebrow:'肺泡港 · 小红的一天',body:'小红刚来到港口。陪她领一次补给，认识交接的伙伴，再到街边坐一会儿。约 3 分钟，不用赶时间。',speaker:'小红',line:'第一次来这个港口，你能陪我走一段吗？',duration:0,task:'和小红一起出发'},
 'setting-out':{title:'沿着风铃，去码头。',eyebrow:'01 / 06 · 出发',body:'泡泡在前面带路。小红经过街边的等候区，去找今天负责气体交接的伙伴。',speaker:'泡泡',line:'跟我来，云云今天在蓝绿色的交接柜台。',duration:28,task:'陪小红走到等候处'},
 queue:{title:'前面还有一位客人。',eyebrow:'02 / 06 · 等候',body:'云云正在整理交接柜台。小红放慢脚步，向前面的邻居点点头。看看柜台旁的两种颜色往哪里走。',speaker:'小红',line:'等一会儿也没关系。听，风铃响了。',duration:24,task:'等前一位居民完成交接'},
 partner:{title:'谁是今天的交接伙伴？',eyebrow:'03 / 06 · 打个招呼',body:'泡泡说，负责气体交接的是云云。找一找柜台边的蓝色小帽子。可以点击场景中的伙伴，也可以用下面的名片。',speaker:'泡泡',line:'我负责带路，小青照料花房，云云负责这次交接。',duration:0,task:'向云云打个招呼'},
 exchange:{title:'一来一往，刚刚好。',eyebrow:'04 / 06 · 气体交接',body:'金色的氧气标记进入小红的运输箱，蓝灰色标记向相反方向离开。两种流动一起发生。',speaker:'云云',line:'交接好了。下一段路，也拜托你啦。',duration:20,task:'观察两种气体的相反方向'},
 returning:{title:'这条街开始熟悉了。',eyebrow:'05 / 06 · 回到街角',body:'小红抱着补给箱回到街角。泡泡挥手道别，小青已经留好位置。下一次经过，你会认得这几位朋友。',speaker:'小青',line:'这里有空位，忙完过来坐坐。',duration:32,task:'陪小红回到街边'},
 rest:{title:'把今天，慢慢说完。',eyebrow:'06 / 06 · 下班小聚',body:'小红坐下来，和小青聊起刚才的交接。云云收好柜台，也过来打个招呼。',speaker:'小红',line:'谢谢你陪我来。原来这座城里，已经有认识的人了。',duration:20,task:'在街边坐一会儿'},
 complete:{title:'下次来，还坐这里。',eyebrow:'一段共同的记忆',body:'这次相遇已经留在港口。可以给大家拍张合照，照片会挂在小铺旁；下次回来，伙伴们还记得你。',speaker:'小青',line:'以后路过，记得来打个招呼。',duration:0,task:'拍张合照，或继续自由探索'},
};
export function advanceWorkday(state:Workday,delta:number,observing=true):boolean {
 if(!state.active||!observing||!Number.isFinite(delta)||delta<=0)return false;
 let remaining=delta,changed=false;
 while(remaining>0){
  const duration=workChapters[state.stage].duration;if(!duration)break;
  const step=Math.min(remaining,duration-state.elapsed);state.elapsed+=step;remaining-=step;
  if(state.elapsed>=duration){state.stage=workStages[workStages.indexOf(state.stage)+1];state.elapsed=0;state.hint='';changed=true;if(state.stage==='complete'){state.active=false;state.completed++;}}
 }
 return changed;
}
export function beginWorkday(state:Workday){
 if(state.stage==='complete'){state.stage='invitation';state.elapsed=0;}
 if(state.stage==='invitation'){state.stage='setting-out';state.elapsed=0;}
 state.active=true;state.hint='';
}
export function choosePartner(state:Workday,person:HarborPerson):boolean {
 if(!state.active||state.stage!=='partner')return false;
 if(person!=='cloud'){state.hint=person==='green'?'小青笑着指向柜台：“我在花房等你，云云就在那边。”':'泡泡朝蓝色帽子的伙伴招手：“云云，轮到小红啦。”';return false;}
 state.stage='exchange';state.elapsed=0;state.hint='';return true;
}
export function workProgress(state:Workday){const duration=workChapters[state.stage].duration;return duration?Math.min(1,state.elapsed/duration):0;}
export function readWorkday(raw:string|null):Workday {
 try{const s=JSON.parse(raw||'null');if(!s||s.version!==1||!workStages.includes(s.stage))return newWorkday();
  const duration=workChapters[s.stage as WorkStage].duration;
  return {version:1,stage:s.stage,elapsed:typeof s.elapsed==='number'&&Number.isFinite(s.elapsed)?Math.max(0,Math.min(s.elapsed,duration)):0,active:s.stage!=='complete'&&s.stage!=='invitation',completed:Number.isSafeInteger(s.completed)?Math.max(0,Math.min(999,s.completed)):0,hint:'',photo:typeof s.photo==='string'&&s.photo.length<750000&&/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(s.photo)?s.photo:null};
 }catch{return newWorkday();}
}
export function harborDialogue(state:Workday,person:HarborPerson):string {
 if(state.stage==='partner'&&state.hint)return state.hint;
 if(state.completed&&(!state.active||state.stage==='invitation'))return ({red:'又见面了！还记得我们一起去交接的那天吗？',bubble:'老朋友，欢迎回到肺泡港。',cloud:'上次的配合很顺利。今天也慢慢来。',green:'你常坐的位置还空着。过来坐吧。'})[person];
 return ({red:workChapters[state.stage].line,bubble:'沿着步道走，交接柜台就在前面。',cloud:'我是云云，负责今天的气体交接。',green:'我在花房旁的小铺等你们下班。'})[person];
}
