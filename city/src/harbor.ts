import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { workProgress,workChapters,harborDialogue,type Workday,type HarborPerson } from './workday';

type V=[number,number,number];
const names:Record<HarborPerson,string>={red:'小红',bubble:'泡泡',cloud:'云云',green:'小青'};
const smooth=(n:number)=>{const t=T.MathUtils.clamp(n,0,1);return t*t*(3-2*t);};
/** An inhabited harbor annex with its own reversible, clock-driven choreography. */
export class HarborWorkshop {
 readonly root=new T.Group();readonly people=new Map<string,T.Group>();
 private architecture=new T.Group();private geometry=new Set<T.BufferGeometry>();private materials=new Set<T.Material>();private textures=new Set<T.Texture>();
 private labelRoot:HTMLElement;private labels=new Map<string,HTMLButtonElement>();private speech:HTMLElement;
 private cargo=new T.Group();private guest:T.Group;private trolley=new T.Group();private stream:T.Mesh[]=[];private chimes:T.Object3D[]=[];private membrane:T.Mesh;
 private frame:T.Mesh;private frameLabel:HTMLButtonElement;private photoSource:string|null=null;private disposed=false;
 private route=new T.CatmullRomCurve3([[4.3,.2,25.4],[2,.2,26.4],[-1,.2,26.3],[-4.25,.2,25.2]].map(p=>new T.Vector3(...p)),false,'catmullrom',.3);
 constructor(templates:T.Group[],labels:HTMLElement,interact:(key:string)=>void){
  this.root.add(this.architecture);this.labelRoot=document.createElement('div');this.labelRoot.className='harbor-labels';labels.append(this.labelRoot);
  this.speech=document.createElement('div');this.speech.className='harbor-speech';this.speech.hidden=true;this.labelRoot.append(this.speech);
  const base=this.cyl([0,-.55,23.6],10.2,1.1,'#b7cbbb');base.scale.z=.61;
  const paving=this.cyl([0,.04,23.6],10,.12,'#dddcc2');paving.scale.z=.60;
  const inset=this.cyl([0,.12,23.6],9.3,.06,'#e9e4cb');inset.scale.z=.56;
  // A boardwalk connects the existing life street to the new harbor.
  for(let i=0;i<18;i++)this.box([0,.16,17.9+i*.25],[2.1,.12,.20],'#c3b797');
  for(const x of [-1.05,1.05]){this.box([x,.72,19.8],[.055,.06,3.8],'#a8b598');for(const z of [18,19.8,21.6])this.cyl([x,.45,z],.04,.8,'#a8b598');}
  // Warm pedestrian paving and a thin capillary ribbon lead to the counter.
  for(let i=0;i<45;i++){const p=this.route.getPointAt(i/44),v=this.route.getTangentAt(i/44),plank=this.box([p.x,.19,p.z],[1.45,.075,.24],'#f2ead4');plank.rotation.y=Math.atan2(v.x,v.z);}
  this.tube([[-8.2,.2,22],[-8,.2,25],[-4,.2,27.8],[2,.2,28],[7.5,.2,26]],.08,'#b5cdcb');
  // The exchange counter is visibly divided into two differently colored lanes.
  this.box([-5.6,.58,23.6],[3.2,.82,1.15],'#9ebfb4');this.box([-5.6,1.03,23.6],[3.45,.16,1.35],'#f9edce');
  for(const x of [-7.05,-4.15])this.cyl([x,1.7,23.15],.055,3.1,'#9db699');
  this.membrane=this.ball([-5.6,3.18,23.3],[2.1,.36,1.1],'#c9ded1');
  this.sign('云云 · 气体交接',[-5.6,2.53,24.15],2.5,.49);
  this.sign('O₂ →',[-6.4,1.3,24.28],.85,.26);this.sign('← CO₂',[-4.9,1.3,24.28],.92,.26);
  for(let i=0;i<5;i++){this.ball([-6.6+i*.25,1.27,23.55],[.115,.115,.115],'#e8c16e');this.ball([-5.2+i*.23,1.25,23.6],[.095,.095,.095],'#9eafc9');}
  // A round flower shop, two seats, cups and a wall for a real saved photograph.
  this.cyl([5.5,1.13,22.4],1.6,2.0,'#f7ebd2');this.ball([5.5,2.22,22.4],[1.88,.38,1.77],'#b4c6a0');
  this.box([5.5,1.05,24.02],[1.35,1.05,.06],'#8aa8a2');this.sign('小青的花房',[5.5,1.92,24.03],1.55,.38);
  for(const x of [3.1,7.6]){this.cyl([x,.42,23.5],.36,.56,'#bdad86');for(let j=0;j<5;j++){this.cyl([x+(j-2)*.11,.92,23.5],.025,.6,'#94ae8b');this.ball([x+(j-2)*.11,1.22,23.5],[.1,.13,.1],j%2?'#ead197':'#dda9a0');}}
  this.box([4.55,.55,24.8],[2.4,.16,.66],'#b9aa87');this.box([4.55,.99,24.52],[2.4,.65,.1],'#c6b895');
  for(const x of [3.65,5.45])this.box([x,.3,24.8],[.13,.6,.49],'#95a88e');
  this.cyl([6.5,.68,25.2],.61,.13,'#d4bc8e');this.cyl([6.5,.38,25.2],.075,.62,'#a8b396');
  for(const x of [6.25,6.7])this.cyl([x,.87,25.2],.085,.21,'#f8edcb');
  this.box([2.45,1.35,23.3],[1.32,1.06,.15],'#bbab83');
  const frameMat=new T.MeshStandardMaterial({color:'#efe5cc',roughness:.8});this.materials.add(frameMat);
  const frameGeo=new T.PlaneGeometry(1.14,.82);this.geometry.add(frameGeo);this.frame=new T.Mesh(frameGeo,frameMat);this.frame.position.set(2.45,1.35,23.39);this.root.add(this.frame);
  this.sign('我们的港口记忆',[2.45,.56,23.42],1.5,.25);
  this.frameLabel=this.label('memory','港口的记忆',interact);this.frameLabel.hidden=true;
  // Membrane plants around the rim, not across the walking route.
  for(const [x,z] of [[-8.4,22],[-7.8,26],[8.2,24],[.6,28],[.6,21.8]]){
   this.cyl([x,.64,z],.045,1.1,'#a5b18c');this.ball([x,1.45,z],[.55,.8,.45],'#a9c1a2');this.ball([x+.36,1.13,z],[.4,.48,.38],'#c2c995');
  }
  for(let i=0;i<5;i++){const cord=this.box([-2.2+i*.45,2.3,22.5],[.025,.65,.025],'#b7ae8d');const bell=this.ball([-2.2+i*.45,1.97,22.5],[.08,.13,.08],'#d6bd82');this.chimes.push(cord,bell);}
  this.box([-1.3,2.66,22.5],[2.6,.09,.12],'#a6b899');for(const x of [-2.65,.1])this.cyl([x,1.38,22.5],.035,2.6,'#a6b899');
  for(const [i,key] of (['red','bubble','cloud','green'] as HarborPerson[]).entries()){
   const actor=templates[i===0?0:i===1?1:i===2?3:2].clone(true);actor.scale.setScalar(i===0?1.36:1.23);actor.userData.pick=`harbor:${key}`;this.people.set(key,actor);this.root.add(actor);this.label(key,names[key],interact);
  }
  this.guest=templates[4].clone(true);this.guest.scale.setScalar(1.1);this.root.add(this.guest);
  const red=this.people.get('red')!;this.ball([0,.92,0],[.285,.11,.26],'#d99c8d',red);this.box([0,.94,.21],[.26,.035,.14],'#c8887e',red);red.add(this.cargo);this.cargo.position.set(0,.42,.28);
  this.box([0,0,0],[.40,.28,.28],'#cdb78b',this.cargo);for(let i=0;i<3;i++)this.ball([-.12+i*.12,.2,0],[.07,.07,.07],'#e6be71',this.cargo);
  this.root.add(this.trolley);this.box([0,.5,0],[.85,.45,.55],'#a5bdb2',this.trolley);for(const x of [-.3,.3])this.ball([x,.18,.12],[.14,.14,.14],'#808f80',this.trolley);this.box([0,.8,-.25],[.75,.05,.04],'#b49d78',this.trolley);
  for(let i=0;i<16;i++)this.stream.push(this.ball([0,0,0],[.075,.075,.075],i%2?'#a3b4ca':'#e9c26f',this.root));
 }
 private material(color:string){const m=new T.MeshStandardMaterial({color,roughness:.77});this.materials.add(m);return m;}
 private mesh(geo:T.BufferGeometry,color:string,p:V,parent:T.Object3D){this.geometry.add(geo);const m=new T.Mesh(geo,this.material(color));m.position.set(...p);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 private box(p:V,size:V,color:string,parent:T.Object3D=this.architecture){return this.mesh(new RoundedBoxGeometry(...size,2,.06),color,p,parent);}
 private ball(p:V,size:V,color:string,parent:T.Object3D=this.architecture){const m=this.mesh(new T.SphereGeometry(1,16,10),color,p,parent);m.scale.set(...size);return m;}
 private cyl(p:V,r:number,h:number,color:string){return this.mesh(new T.CylinderGeometry(r,r,h,32),color,p,this.architecture);}
 private tube(points:V[],r:number,color:string){return this.mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),70,r,6,false),color,[0,0,0],this.architecture);}
 private sign(text:string,p:V,w:number,h:number){
  const canvas=document.createElement('canvas');canvas.width=768;canvas.height=160;const ctx=canvas.getContext('2d')!;ctx.fillStyle='#faf1d9';ctx.fillRect(0,0,768,160);ctx.fillStyle='#6d8576';ctx.font='500 60px "PingFang SC",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,384,83);
  const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;this.textures.add(texture);const mat=new T.MeshStandardMaterial({map:texture,roughness:.9});this.materials.add(mat);const geo=new T.PlaneGeometry(w,h);this.geometry.add(geo);const mesh=new T.Mesh(geo,mat);mesh.position.set(...p);this.architecture.add(mesh);
 }
 private label(key:string,text:string,interact:(key:string)=>void){const b=document.createElement('button');b.className='harbor-person';b.textContent=text;b.setAttribute('aria-label',key==='memory'?'查看港口合照':`港口居民${text}`);b.addEventListener('click',()=>interact(`harbor:${key}`));this.labelRoot.append(b);this.labels.set(key,b);return b;}
 private pose(actor:T.Group,p:T.Vector3,heading:number,time:number,moving=false,carrying=false,seated=false,wave=false){
  actor.position.copy(p);actor.rotation.y=heading;actor.position.y+=seated?.26:moving?Math.abs(Math.sin(time*4))*.024:0;
  for(const [i,side] of ['left','right'].entries()){
   const leg=actor.getObjectByName(`leg-${side}`)!;leg.rotation.x=seated?-1.35:moving?Math.sin(time*4+i*Math.PI)*.28:0;
   const arm=actor.getObjectByName(`arm-${side}`)!;arm.rotation.x=carrying?-.9:wave&&i===1?-2.1+Math.sin(time*3)*.16:moving?-Math.sin(time*4+i*Math.PI)*.24:-.18;arm.rotation.z=wave&&i===1?-.23:0;
  }
 }
 update(state:Workday,time:number,breaths:number,mode:string){
  const p=workProgress(state),stage=state.stage,red=this.people.get('red')!,bubble=this.people.get('bubble')!,cloud=this.people.get('cloud')!,green=this.people.get('green')!;
  let u=0;if(stage==='setting-out')u=smooth(p);else if(['queue','partner','exchange'].includes(stage))u=1;else if(stage==='returning')u=1-smooth(p);
  const moving=stage==='setting-out'||stage==='returning';const pos=this.route.getPointAt(u),tangent=this.route.getTangentAt(u).multiplyScalar(stage==='returning'?-1:1);
  if(stage==='rest'||stage==='complete')pos.set(4.3,.2,24.94);
  this.pose(red,pos,moving?Math.atan2(tangent.x,tangent.z):u===1?Math.PI:0,time,moving,stage==='exchange'||stage==='returning',stage==='rest'||stage==='complete',stage==='invitation');
  const bpos=stage==='invitation'||stage==='setting-out'?this.route.getPointAt(Math.min(1,u+.14)):new T.Vector3(-2.8,.2,24.1);
  if(stage==='queue')bpos.copy(this.route.getPointAt(1)).lerp(new T.Vector3(-2.8,.2,24.1),smooth(p*4));bpos.x+=.5;
  if(stage==='rest'||stage==='complete')bpos.lerp(new T.Vector3(2.1,.2,26.1),stage==='complete'?1:smooth(p));
  this.pose(bubble,bpos,stage==='setting-out'?Math.atan2(tangent.x,tangent.z):.6,time,stage==='setting-out'||stage==='rest'&&p<.9,false,false,stage==='partner'||stage==='returning');
  const cpos=new T.Vector3(-5.55,.2,22.75);if(stage==='rest'||stage==='complete'){const u=stage==='complete'?1:smooth(p);cpos.lerp(new T.Vector3(3.15,.2,25.3),u);cpos.z+=Math.sin(u*Math.PI)*1.9;}
  this.pose(cloud,cpos,stage==='rest'?-1:0,time,stage==='rest'&&p<.9,stage==='exchange',false,stage==='partner'||stage==='complete');
  this.pose(green,new T.Vector3(6,.2,25.9),stage==='complete'?.3:-1.3,time,false,false,false,stage==='returning'||stage==='complete');
  const guestProgress=stage==='queue'?smooth(p):0;this.guest.visible=stage==='setting-out'||stage==='queue';this.pose(this.guest,new T.Vector3(-4.6+guestProgress*5,.2,24.5+guestProgress*1.9),guestProgress?Math.PI/2:Math.PI,time,guestProgress>0);
  this.cargo.visible=['exchange','returning','rest','complete'].includes(stage);this.cargo.children.slice(1).forEach((o,i)=>o.visible=stage!=='exchange'||p>(i+1)*.19);
  this.trolley.position.set(-7.1+(stage==='queue'?smooth(p)*1.2:1.2),.12,23);this.trolley.rotation.y=Math.PI/2;
  this.stream.forEach((orb,i)=>{orb.visible=stage==='exchange';const u=(p*3+i/16)%1,reverse=i%2===1;orb.position.set(-5.5+u*1.2,1.6+Math.sin(u*Math.PI)*.4,reverse?25.3-u*1.9:23.4+u*1.9);});
  this.membrane.scale.y=.36*(1+Math.sin(breaths*Math.PI*2)*.075);this.chimes.forEach((o,i)=>o.rotation.z=Math.sin(time*(mode==='walk'?1.1:.65)+i*.3)*.05);
  this.frameLabel.hidden=!state.completed;this.setPhoto(state.photo);
  const speaker=stage==='setting-out'||stage==='partner'?'bubble':stage==='exchange'?'cloud':stage==='complete'?'green':'red';this.speech.dataset.speaker=speaker;
  const text=state.hint||((state.completed&&!state.active)?harborDialogue(state,speaker):workChapters[stage].line);if(this.speech.textContent!==text)this.speech.textContent=text;
 }
 project(camera:T.Camera,width:number,height:number,visible:boolean,state:Workday){
  const near=camera.position.distanceTo(new T.Vector3(0,1,24))<38;
  for(const [key,el] of this.labels){const root=this.people.get(key),position=root?root.position.clone().add(new T.Vector3(0,1.6,0)):new T.Vector3(2.45,2.15,23.4);const p=position.project(camera);el.hidden=!visible||!near||p.z<0||p.z>1||Math.abs(p.x)>.92||Math.abs(p.y)>.86||(key==='memory'&&!state.completed);el.classList.toggle('awaiting',state.stage==='partner'&&key==='cloud');el.style.transform=`translate(-50%,-100%) translate(${(p.x/2+.5)*width}px,${(-p.y/2+.5)*height}px)`;}
  const actor=this.people.get(this.speech.dataset.speaker!)!,p=actor.position.clone().add(new T.Vector3(0,2.7,0)).project(camera);
  this.speech.hidden=!visible||!near||p.z<0||p.z>1||Math.abs(p.x)>.65||Math.abs(p.y)>.75||(-p.y/2+.5)*height<95;this.speech.style.left=`${(p.x/2+.5)*width}px`;this.speech.style.top=`${(-p.y/2+.5)*height}px`;
 }
 private setPhoto(source:string|null){
  if(source===this.photoSource)return;this.photoSource=source;const material=this.frame.material as T.MeshStandardMaterial;
  if(!source){if(material.map){this.textures.delete(material.map);material.map.dispose();material.map=null;material.needsUpdate=true;}return;}
  new T.TextureLoader().load(source,texture=>{if(this.disposed||this.photoSource!==source){texture.dispose();return;}if(material.map){this.textures.delete(material.map);material.map.dispose();}texture.colorSpace=T.SRGBColorSpace;this.textures.add(texture);material.map=texture;material.color.set('#ffffff');material.needsUpdate=true;});
 }
 dispose(){this.disposed=true;this.labelRoot.remove();this.geometry.forEach(g=>g.dispose());this.materials.forEach(m=>m.dispose());this.textures.forEach(t=>t.dispose());this.root.removeFromParent();}
}
