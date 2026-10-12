import type { CityId } from './model';
import { escapeHTML } from './experience';
export const anatomyNotes:Record<CityId,{title:string;fact:string}>={
 heart:{title:'四腔与两条循环',fact:'右心把血液送往肺，左心把血液送往全身。瓣膜帮助血液单向流动。'},
 brain:{title:'神经元之间的联系',fact:'信号沿轴突传递，并通过突触与其他细胞沟通；信息处理依赖网络协作。'},
 lungs:{title:'肺泡与毛细血管',fact:'氧气从肺泡扩散进入血液，二氧化碳向相反方向扩散。'},
 gut:{title:'绒毛扩大吸收面积',fact:'绒毛内部有毛细血管和淋巴管。不同营养物质的吸收与转运路线不同。'},
 kidneys:{title:'过滤、回收与排出',fact:'血液在肾小球处形成滤液；肾小管把大部分水和有用物质重吸收回血液。'},
 immune:{title:'识别与协作',fact:'抗体可与特定抗原结合。免疫反应还需要多种细胞和信号协作。'},
};
const label=(x:number,y:number,text:string)=>`<text x="${x}" y="${y}" text-anchor="middle">${text}</text>`;
const path=(d:string,color='#cf8c80',wide=5)=>`<path d="${d}" fill="none" stroke="${color}" stroke-width="${wide}" stroke-linecap="round"/>`;
const flow=(d:string,color='#d69782')=>`<path class="anatomy-flow" d="${d}" fill="none" stroke="${color}" stroke-width="3" stroke-dasharray="4 12" marker-end="url(#anatomy-arrow)"/>`;
export function anatomySVG(city:CityId){
 let content='';
 if(city==='heart')content=`<rect x="48" y="61" width="65" height="57" rx="23" fill="#bacfd3"/><rect x="48" y="128" width="65" height="64" rx="24" fill="#9fbecb"/><rect x="128" y="61" width="65" height="57" rx="23" fill="#e3b4a4"/><rect x="128" y="128" width="65" height="64" rx="24" fill="#d99989"/>${label(80,93,'右心房')}${label(80,163,'右心室')}${label(160,93,'左心房')}${label(160,163,'左心室')}${flow('M 80 107 L 80 140','#7ba2b5')}${flow('M 160 107 L 160 140')}${flow('M 57 154 C 16 120 16 35 105 29','#7ba2b5')}${flow('M 130 29 C 215 28 218 60 182 76')}${label(119,19,'肺循环')}${flow('M 169 186 C 205 225 145 223 124 221')}${flow('M 117 221 C 41 226 25 115 66 74','#7ba2b5')}${label(119,235,'体循环 · 返回右心')}`;
 if(city==='brain')content=`${path('M 77 113 L 44 64 M 65 92 L 25 99 M 68 126 L 33 154 M 81 126 L 70 184','#b1a0c2',8)}<circle cx="91" cy="114" r="31" fill="#cfbfdb"/><circle cx="91" cy="114" r="13" fill="#a692bc"/>${path('M 119 114 C 146 96 162 135 187 112 L 215 99','#b9a9c7',8)}${[137,158,179].map(x=>`<rect x="${x}" y="102" width="14" height="22" rx="6" fill="#e0d8e9"/>`).join('')}${flow('M 91 114 L 118 114 C 145 96 162 135 187 112 L 214 99','#cbab6d')}${path('M 224 76 L 224 130','#b3a5bf',5)}${label(50,46,'树突')}${label(91,164,'细胞体')}${label(161,157,'有髓轴突')}${label(210,62,'突触')}${label(123,214,'信号传递依靠网络联系')}`;
 if(city==='lungs')content=`${path('M 112 20 L 112 49','#aac1ad',20)}<ellipse class="anatomy-breathe" cx="112" cy="95" rx="67" ry="52" fill="#deeadb" stroke="#a9c4b2" stroke-width="3"/>${path('M 37 137 C 2 210 223 218 203 132','#e1c3b8',25)}${flow('M 40 145 C 17 202 220 214 200 139','#9ab7c5')}<ellipse cx="83" cy="181" rx="13" ry="8" fill="#ce8d80"/><ellipse cx="166" cy="184" rx="13" ry="8" fill="#ce8d80"/>${flow('M 91 118 L 91 163','#cf957e')}${flow('M 139 162 L 139 120','#8fa9bc')}${label(111,92,'肺泡内的空气')}${label(69,143,'O₂ ↓')}${label(170,143,'CO₂ ↑')}${label(121,230,'毛细血管 · 红细胞')}`;
 if(city==='gut')content=`<path d="M 36 200 L 36 123 Q 36 66 58 66 Q 80 66 80 123 L 80 189 L 87 189 L 87 72 Q 87 30 113 30 Q 139 30 139 72 L 139 189 L 147 189 L 147 105 Q 147 59 172 59 Q 197 59 197 105 L 197 201" fill="#e2d2ac" stroke="#bead87" stroke-width="3"/>${path('M 100 209 L 100 71 Q 111 51 123 71 L 123 209','#c89584',4)}${path('M 111 207 L 111 91','#a5b798',7)}${flow('M 64 28 Q 83 25 96 61','#c7ae6d')}${flow('M 163 27 Q 151 36 126 69','#c7ae6d')}${label(111,18,'小肠绒毛')}${label(58,228,'毛细血管')}${label(168,228,'中央乳糜管')}`;
 if(city==='kidneys')content=`<circle cx="71" cy="63" r="34" fill="#d8e3db" stroke="#a1b8b2" stroke-width="4"/>${path('M 35 60 C 58 20 89 97 100 48 C 76 19 48 109 38 61','#c6948b',7)}${path('M 98 76 C 166 64 127 127 134 177 Q 138 216 160 179 L 160 105 Q 171 80 195 114 L 195 215','#b7ced1',13)}${flow('M 100 80 C 162 64 130 129 136 173 Q 138 209 160 179 L 160 109 Q 174 87 195 114 L 195 211','#76a4b1')}${flow('M 151 146 L 103 146','#b99972')}${label(62,17,'肾小球过滤')}${label(62,144,'返回血液')}${label(81,159,'重吸收')}${label(192,235,'继续形成尿液')}`;
 if(city==='immune')content=`<circle cx="79" cy="118" r="44" fill="#d5dfc0" stroke="#a8bc93" stroke-width="3"/><path d="M 65 106 Q 47 133 78 143 Q 109 126 90 103 Z" fill="#b2a7c6"/>${path('M 155 148 L 155 120 L 139 104 M 155 120 L 173 101','#ad9abe',8)}<circle class="anatomy-breathe" cx="182" cy="76" r="17" fill="#e0ba91"/><circle cx="167" cy="67" r="5" fill="#d0a97a"/>${flow('M 87 165 Q 143 203 177 134','#9db086')}${label(77,190,'免疫细胞')}${label(144,93,'抗体')}${label(189,45,'抗原')}${label(126,228,'特异性结合 · 多种机制协作')}`;
 return `<svg viewBox="0 0 240 248" role="img" aria-label="${anatomyNotes[city].title}"><defs><marker id="anatomy-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 8 4 L 0 8 Z" fill="context-stroke"/></marker></defs>${content}</svg>`;
}
export interface LensContext {city:CityId;poi:string;name:string;near:boolean;}
export class ObservationLens {
 readonly element:HTMLDivElement;
 current:LensContext|null=null;
 private last='';private x=.48;private y=.35;
 constructor(private host:HTMLElement,private sample:(x:number,y:number)=>LensContext|null,onSave:()=>void){
  this.element=document.createElement('div');this.element.className='biology-lens';this.element.hidden=true;this.element.innerHTML='<button class="lens-handle" aria-label="拖动观察窗，方向键移动">✧ 人体观察窗 <span>拖动对照</span></button><button class="lens-close" aria-label="关闭观察窗">×</button><div class="lens-content"></div><button class="lens-save">记下这次发现 ＋</button>';host.append(this.element);
  this.element.querySelector('.lens-close')!.addEventListener('click',()=>this.toggle(false));
  this.element.querySelector('.lens-save')!.addEventListener('click',onSave);
  const handle=this.element.querySelector<HTMLButtonElement>('.lens-handle')!;let drag:{x:number;y:number;left:number;top:number}|null=null;
  handle.addEventListener('pointerdown',e=>{e.stopPropagation();const r=this.element.getBoundingClientRect(),h=host.getBoundingClientRect();drag={x:e.clientX,y:e.clientY,left:r.left-h.left,top:r.top-h.top};handle.setPointerCapture(e.pointerId);});
  handle.addEventListener('pointermove',e=>{if(!drag)return;this.move(drag.left+e.clientX-drag.x,drag.top+e.clientY-drag.y);this.update();});
  handle.addEventListener('pointerup',()=>{drag=null;});handle.addEventListener('pointercancel',()=>{drag=null;});
  handle.addEventListener('keydown',e=>{const moves:Record<string,[number,number]>={ArrowLeft:[-25,0],ArrowRight:[25,0],ArrowUp:[0,-25],ArrowDown:[0,25]};const m=moves[e.key];if(!m)return;e.preventDefault();this.move(this.element.offsetLeft+m[0],this.element.offsetTop+m[1]);this.update();});
 }
 get active(){return !this.element.hidden;}
 toggle(on=!this.active){this.element.hidden=!on;document.body.classList.toggle('lens-open',on);if(on){this.move(this.host.clientWidth*this.x,this.host.clientHeight*this.y);this.update();}return on;}
 private move(x:number,y:number){const w=this.host.clientWidth,h=this.host.clientHeight;const left=Math.max(6,Math.min(w-this.element.offsetWidth-6,x)),top=Math.max(6,Math.min(h-this.element.offsetHeight-6,y));this.element.style.left=`${left}px`;this.element.style.top=`${top}px`;this.x=left/w;this.y=top/h;}
 update(){
  if(!this.active)return;this.move(this.host.clientWidth*this.x,this.host.clientHeight*this.y);
  const c=this.sample(this.element.offsetLeft+this.element.offsetWidth/2,this.element.offsetTop+this.element.offsetHeight/2);if(!c)return;this.current=c;const key=c.city+c.poi+c.near;if(key===this.last)return;this.last=key;
  this.element.querySelector('.lens-content')!.innerHTML=`<span class="lens-place">${c.near?`系统对照 · ${escapeHTML(c.name)}附近`:'移动到地标附近，对照观察'}</span>${anatomySVG(c.city)}<strong>${anatomyNotes[c.city].title}</strong><p>${anatomyNotes[c.city].fact}</p><small>结构与比例经过简化 · 非真实透视</small>`;
 }
}
