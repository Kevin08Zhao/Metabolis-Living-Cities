import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { plots,links,nodes,buildings,roadCapacity,plotUnlocked,unlockedChapter,type Building,type PlanningState,type Network,type Delivery } from './planning';

type V=[number,number,number];
export type PlanningTool='select'|'road'|'move'|Building;
type Traveller={root:T.Group;curve:T.CatmullRomCurve3;length:number;offset:number;lot:string;amount:number;red:boolean;};
const cream='#fff2d8',coral='#db9382',sage='#99b8a5',blue='#8facb9';

/** The scene visualizes routes returned by the flow solver, including the paired return path. */
export class PlanningScene {
 readonly scene=new T.Scene();readonly camera=new T.OrthographicCamera(-24,24,18,-18,.1,220);readonly controls:OrbitControls;
 private terrain=new T.Group();private layout=new T.Group();private traffic=new T.Group();private pickables:T.Object3D[]=[];
 private mats=new Map<string,T.MeshStandardMaterial>();private geometry=new Map<string,T.BufferGeometry>();private looseGeometry=new Set<T.BufferGeometry>();
 private extraMaterials:T.Material[]=[];
 private labelRoot:HTMLElement;private labels=new Map<string,{el:HTMLButtonElement;point:T.Vector3}>();
 private lotRoots=new Map<string,T.Group>();private lamps=new Map<string,T.Mesh[]>();private roadRoots=new Map<string,T.Group>();
 private travelers:Traveller[]=[];private routeSignature='';private layoutSignature='';private tool:PlanningTool='select';private selection='';
 private lastLifeTime:number|null=null;
 private guideKey='';private labelsShown=true;private guideRing:T.Mesh;private motors:{root:T.Object3D;plot:string;axis:'y'|'z';speed:number}[]=[];private signals:{root:T.Group;from:string;to:string}[]=[];
 private repairCrew=new T.Group();private repairPatch:T.Mesh;private helpers:T.Group[]=[];
 private groundMaterial!:T.MeshBasicMaterial;private sky=new T.HemisphereLight('#fff3dc','#9cab91',1.8);
 private raycaster=new T.Raycaster();private pointer=new T.Vector2();private width=1;private height=1;private state:PlanningState;private network:Network;
 private heart=new T.Group();private lung=new T.Group();private sun:T.DirectionalLight;private redLabel:HTMLButtonElement;private following=false;private transitioning=true;
 private target=new T.Vector3(0,0,0);private eye=new T.Vector3(29,33,36);private reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
 constructor(canvas:HTMLCanvasElement,labels:HTMLElement,state:PlanningState,network:Network,private onPick:(key:string)=>void){
  this.state=state;this.network=network;if(unlockedChapter(state)>=2)this.target.set(2.5,0,1.8);this.scene.background=new T.Color('#e6ebdf');this.scene.fog=new T.Fog('#e6ebdf',85,160);
  this.scene.add(this.terrain,this.layout,this.traffic,this.sky);
  this.sun=new T.DirectionalLight('#fff1d6',2.5);this.sun.position.set(-20,36,22);this.sun.castShadow=true;this.sun.shadow.mapSize.set(2048,2048);Object.assign(this.sun.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:110});this.sun.shadow.normalBias=.04;this.sun.shadow.bias=-.0004;this.scene.add(this.sun);
  const fill=new T.DirectionalLight('#dcecff',.7);fill.position.set(20,12,-20);this.scene.add(fill);
  this.camera.position.copy(this.eye);this.camera.lookAt(this.target);
  this.controls=new OrbitControls(this.camera,canvas);this.controls.target.copy(this.target);this.controls.enableDamping=true;this.controls.dampingFactor=.09;this.controls.minZoom=.65;this.controls.maxZoom=3.2;this.controls.minPolarAngle=.12;this.controls.maxPolarAngle=1.35;this.controls.rotateSpeed=.6;
  this.controls.mouseButtons.LEFT=T.MOUSE.ROTATE;this.controls.mouseButtons.RIGHT=T.MOUSE.PAN;this.controls.touches.ONE=T.TOUCH.ROTATE;this.controls.touches.TWO=T.TOUCH.DOLLY_PAN;
  this.controls.addEventListener('start',()=>{this.following=false;this.transitioning=false;});
  this.labelRoot=document.createElement('div');this.labelRoot.className='planning-labels';labels.append(this.labelRoot);
  const guideMaterial=new T.MeshBasicMaterial({color:'#d4b45f',transparent:true,opacity:.64,side:T.DoubleSide,depthWrite:false});this.extraMaterials.push(guideMaterial);
  this.guideRing=new T.Mesh(this.geo('guideRing',()=>new T.RingGeometry(1.82,1.92,64)),guideMaterial);this.guideRing.rotation.x=-Math.PI/2;this.guideRing.visible=false;this.scene.add(this.guideRing);
  this.landscape();this.organs();
  this.scene.add(this.repairCrew);this.repairPatch=this.box([0,.25,0],[1.05,.12,.66],'#d0a780',this.repairCrew,.1);
  for(const x of [-.64,.64]){this.cyl([x,.46,-.36],.035,.62,'#aaa585',this.repairCrew);this.box([x,.78,-.36],[.26,.12,.07],'#e6cb8e',this.repairCrew,.025);const helper=this.person('#c1ceaa',false);helper.scale.setScalar(.64);helper.position.set(x,.19,.48);this.repairCrew.add(helper);this.helpers.push(helper);}
  this.repairCrew.visible=false;
  this.addLabel('heart','心脏循环站',[-10,4.1,3.3],'organ heart');this.addLabel('lungs','肺泡云朵港',[-10,4,-6],'organ lungs');
  for(const p of plots)this.addLabel(`plot:${p.id}`,`${p.name} · 空地`,[p.x+1.2,.8,p.z+1.5],'plot');
  for(const l of links){const a=nodes.find(n=>n.id===l.a)!,b=nodes.find(n=>n.id===l.b)!;this.addLabel(`road:${l.id}`,'＋',[(a.x+b.x)/2,.5,(a.z+b.z)/2],'road');}
  this.redLabel=this.addLabel('red','小红 · 循环中',[0,1,0],'red');
  this.sync(state,network,'select','');
 }
 private mat(color:string){if(!this.mats.has(color))this.mats.set(color,new T.MeshStandardMaterial({color,roughness:.78,...(['#f4d59a','#f4d988','#edce86'].includes(color)?{emissive:color,emissiveIntensity:.35}:{})}));return this.mats.get(color)!;}
 private geo(key:string,create:()=>T.BufferGeometry){if(!this.geometry.has(key))this.geometry.set(key,create());return this.geometry.get(key)!;}
 private mesh(geo:T.BufferGeometry,color:string,pos:V,parent:T.Object3D){const m=new T.Mesh(geo,this.mat(color));m.position.set(...pos);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 private box(pos:V,size:V,color:string,parent:T.Object3D=this.terrain,r=.12){return this.mesh(this.geo(`b${size}/${r}`,()=>new RoundedBoxGeometry(...size,2,r)),color,pos,parent);}
 private ball(pos:V,size:V,color:string,parent:T.Object3D=this.terrain){const b=this.mesh(this.geo('ball',()=>new T.SphereGeometry(1,18,12)),color,pos,parent);b.scale.set(...size);return b;}
 private cyl(pos:V,r:number,h:number,color:string,parent:T.Object3D=this.terrain){return this.mesh(this.geo(`c${r}/${h}`,()=>new T.CylinderGeometry(r,r,h,32)),color,pos,parent);}
 private tube(points:V[],r:number,color:string,parent:T.Object3D=this.terrain,layout=false){const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)),false,'catmullrom',.15);const geo=new T.TubeGeometry(curve,Math.max(20,points.length*12),r,7,false);if(layout)this.looseGeometry.add(geo);else this.geometry.set(`tube${this.geometry.size}`,geo);this.mesh(geo,color,[0,0,0],parent);return curve;}
 private tree(x:number,z:number,s=1,parent:T.Object3D=this.terrain){
  const g=new T.Group();g.position.set(x,0,z);g.scale.setScalar(s);parent.add(g);this.cyl([0,.65,0],.075,1.3,'#adad87',g);this.ball([0,1.4,0],[.62,.85,.55],'#a0b49a',g);this.ball([.37,1.06,.12],[.43,.48,.4],'#bcc9a2',g);this.ball([-.26,1.61,.32],[.09,.1,.08],cream,g);
 }
 private landscape(){
  const floorMaterial=this.groundMaterial=new T.MeshBasicMaterial({color:'#e6ebdf',toneMapped:false}),shadowMaterial=new T.ShadowMaterial({color:'#67725d',opacity:.14});this.extraMaterials.push(floorMaterial,shadowMaterial);
  const floor=new T.Mesh(this.geo('floor',()=>new T.PlaneGeometry(250,250)),floorMaterial);floor.position.y=-1.55;floor.rotation.x=-Math.PI/2;this.terrain.add(floor);
  const shadow=new T.Mesh(floor.geometry,shadowMaterial);shadow.position.y=-1.54;shadow.rotation.x=-Math.PI/2;shadow.receiveShadow=true;this.terrain.add(shadow);
  const outline=new T.Shape();outline.moveTo(-16,-9);outline.bezierCurveTo(-18,-3,-17,8,-10,11);outline.bezierCurveTo(-3,14,13,13,16,6);outline.bezierCurveTo(19,-2,15,-10,9,-11);outline.bezierCurveTo(0,-13,-10,-13,-16,-9);
  const geo=new T.ExtrudeGeometry(outline,{depth:1,bevelEnabled:true,bevelThickness:.35,bevelSize:.5,bevelSegments:3,curveSegments:35,steps:1});geo.rotateX(-Math.PI/2);this.geometry.set('land',geo);this.mesh(geo,'#bdcbb2',[0,-1.1,0],this.terrain);
  const top=new T.ShapeGeometry(outline,35);top.rotateX(-Math.PI/2);this.geometry.set('landtop',top);this.mesh(top,'#dce1c5',[0,.1,0],this.terrain);
  for(let i=0;i<42;i++){const a=i/42*Math.PI*2;this.ball([Math.cos(a)*15.7,-.45,Math.sin(a)*10.2],[.22,.15,.2],i%3?'#cad4b9':'#ded9b6');}
  // A living connective-tissue rim and a small public promenade.
  for(const [x,z,s] of [[-15,5,1.3],[-14,-9,1.2],[-4,-9,1.1],[3,-10,1.3],[11,-9,1],[15,3,1.2],[11,10,1.25],[4,10,1.3],[-3,10,1],[-11,8,1.1]])this.tree(x,z,s);
  this.tube([[-13,.14,7.3],[-8,.14,8.8],[-1,.14,9.4],[7,.14,9],[13,.14,7.5]],.48,'#f0e6cb');
  for(let i=0;i<4;i++){const x=-8+i*5;this.box([x,.6,8.4],[1.3,.15,.48],'#b7a782');this.box([x,.87,8.2],[1.3,.4,.09],'#c7b48d');for(const dx of [-.45,.45])this.box([x+dx,.36,8.4],[.09,.4,.4],'#93aa92');}
  for(let i=0;i<18;i++){const x=-13+(i*1.73)%28,z=i%2?-8.6:10;this.ball([x,.31,z],[.15,.24,.15],i%3?'#bbcca8':'#e0b19b');}
 }
 private organs(){
  this.heart.position.set(-10,.15,3.3);this.terrain.add(this.heart);this.lung.position.set(-10,.15,-6);this.terrain.add(this.lung);
  this.cyl([0,.22,0],2.6,.4,'#d9b8a0',this.heart);this.cyl([0,.47,0],2.4,.14,cream,this.heart);
  for(const x of [-.85,.85])for(const z of [-.65,.65]){this.box([x,1.12,z],[1.46,1.1,1.12],cream,this.heart,.28);this.ball([x,1.69,z],[.79,.45,.67],x<0?'#a7bdc1':coral,this.heart);this.box([x,1.13,z+.57],[.33,.4,.06],'#a6b6a7',this.heart);}
  this.tube([[-.7,1.7,-.5],[-.85,2.85,-.5],[-.2,3.15,-.4],[.5,2.8,-.3]],.2,coral,this.heart);
  this.tube([[.3,2.8,-.4],[.3,3.45,-.4]],.09,coral,this.heart);this.tube([[-1.55,1.4,-.6],[-1.9,2.3,-.8],[-1.5,2.8,-.8]],.16,blue,this.heart);
  this.cyl([0,.15,0],2.75,.26,'#b3c8b8',this.lung);this.cyl([0,.35,0],2.5,.16,cream,this.lung);
  for(const side of [-1,1]){this.ball([side*1.08,1.4,0],[.92,1.16,.86],'#b9d0bc',this.lung);for(let i=0;i<5;i++){const a=i/5*6.28;this.ball([side*1.08+Math.cos(a)*.64,1.4+Math.sin(a)*.68,.66],[.36,.4,.31],i%2?'#d8e3c7':'#c8d9be',this.lung);}}
  this.tube([[0,3,0],[0,2.2,0],[-.9,1.2,.4]],.14,'#ebd9b9',this.lung);this.tube([[0,2.2,0],[.9,1.2,.4]],.14,'#ebd9b9',this.lung);
  // Right heart → lungs → left heart. Tissue supply and return are separate parallel lanes.
  this.tube([[-11,0.38,3],[-13,.38,1],[-13,.38,-3],[-11.3,.38,-5]],.19,blue);
  this.tube([[-8.6,.38,-5],[-7.1,.38,-3],[-7.3,.38,.2],[-9,.38,3]],.19,coral);
  this.tube([[-9,.38,3],[-7.5,.38,3],[-6.5,.38,.15],[-5,.38,.15]],.18,coral);
  this.tube([[-5,.38,-.2],[-6.7,.38,-1.2],[-14,.38,-1.2],[-14,.38,3],[-11,.38,3]],.16,blue);
  this.cyl([-5,.22,0],.62,.18,cream);
  const hit=(key:string,p:V,size:V)=>{const m=new T.Mesh(this.geo(`hit${key}`,()=>new T.BoxGeometry(...size)),new T.MeshBasicMaterial({visible:false}));m.position.set(...p);m.userData.pick=key;this.terrain.add(m);this.pickables.push(m);};hit('heart',[-10,1.5,3.3],[5,3,5]);hit('lungs',[-10,1.5,-6],[5,3,5]);
 }
 private addLabel(key:string,text:string,point:V,cls:string){const b=document.createElement('button');b.className=`plan-marker ${cls}`;b.textContent=text;b.dataset.planPick=key;b.setAttribute('aria-label',text);b.addEventListener('click',()=>this.onPick(key));this.labelRoot.append(b);this.labels.set(key,{el:b,point:new T.Vector3(...point)});return b;}
 private clearLayout(){this.layout.clear();this.traffic.clear();this.looseGeometry.forEach(g=>g.dispose());this.looseGeometry.clear();this.lotRoots.clear();this.roadRoots.clear();this.lamps.clear();this.motors=[];this.signals=[];for(const p of this.pickables)if(p.userData.dynamic&&p instanceof T.Mesh)(p.material as T.Material).dispose();this.pickables=this.pickables.filter(o=>!o.userData.dynamic);this.travelers=[];this.routeSignature='';}
 private buildLayout(){
  this.clearLayout();
  this.keepsakes();
  for(let i=1;i<this.state.heart;i++){const x=i===1?-12.3:i===2?-7.7:-10,z=i===3?6.1:5.4;this.cyl([x,.23,z],.72,.25,'#e8d6ba',this.layout);this.box([x,.92,z],[.85,1.25,.85],cream,this.layout,.2);this.ball([x,1.6,z],[.52,.25,.52],coral,this.layout);this.tube([[x,.3,z],[-10,.3,4.9]],.1,coral,this.layout,true);}
  for(let i=1;i<this.state.lungs;i++){const x=i===1?-12.6:i===2?-7.4:-10,z=i===3?-8.8:-6.8;this.cyl([x,.23,z],.85,.25,cream,this.layout);for(let j=0;j<3;j++)this.ball([x+Math.cos(j*2.1)*.32,.83+Math.sin(j*2.1)*.2,z],[.47,.55,.43],j%2?'#d1dec1':'#aac5ad',this.layout);this.tube([[x,.28,z],[-10,.28,-6]],.1,blue,this.layout,true);}
  for(const link of links){if(!plotUnlocked(this.state,link.b)||(link.a!=='source'&&!plotUnlocked(this.state,link.a)))continue;const a=nodes.find(n=>n.id===link.a)!,b=nodes.find(n=>n.id===link.b)!,level=this.state.roads[link.id]??0;const g=new T.Group();this.layout.add(g);this.roadRoots.set(link.id,g);
   const d=new T.Vector3(b.x-a.x,0,b.z-a.z).normalize(),side=new T.Vector3(d.z,0,-d.x);
   if(level){
    const lane=(offset:number,color:string)=>this.tube([[a.x+side.x*offset,.22,a.z+side.z*offset],[(a.x+b.x)/2+side.x*offset,.22,(a.z+b.z)/2+side.z*offset],[b.x+side.x*offset,.22,b.z+side.z*offset]],level===3?.21:level===2?.17:.12,color,g,true);
    lane(.21,coral);lane(-.21,blue);
    for(let i=1;i<5;i++){const t=i/5;this.ball([a.x+(b.x-a.x)*t,.27,a.z+(b.z-a.z)*t],[.06,.035,.06],cream,g);}
   }else for(let i=0;i<8;i++){const t=(i+.5)/8;const dash=this.box([a.x+(b.x-a.x)*t,.17,a.z+(b.z-a.z)*t],[.11,.025,.28],'#b7c2a3',g,.01);dash.rotation.y=Math.atan2(d.x,d.z);}
   const hit=new T.Mesh(this.geo(`edgehit${link.length}`,()=>new T.BoxGeometry(.85,.8,link.length)),new T.MeshBasicMaterial({visible:false}));hit.position.set((a.x+b.x)/2,.35,(a.z+b.z)/2);hit.rotation.y=Math.atan2(d.x,d.z);hit.userData.pick=`road:${link.id}`;hit.userData.dynamic=true;this.layout.add(hit);this.pickables.push(hit);
  }
  for(const p of plots){
   if(!plotUnlocked(this.state,p.id))continue;
   const g=new T.Group();g.position.set(p.x,0,p.z);this.layout.add(g);this.lotRoots.set(p.id,g);
   const building=this.state.buildings[p.id];this.box([1.45,.15,1.4],[3.55,.12,3.55],building?'#e9e2c6':'#cfdabc',g,.32);
   if(!building){for(const [x,z] of [[.15,.15],[2.75,.15],[.15,2.7],[2.75,2.7]])this.cyl([x,.29,z],.06,.2,'#aab998',g);this.ball([1.45,.3,1.4],[.15,.06,.15],'#b2c49e',g);}
   else {
    this.tube([[0,.23,0],[.4,.24,.4],[.65,.25,1.4],[1,.25,1.5]],.09,coral,g,true);this.tube([[0,.22,-.17],[.65,.22,.15],[.95,.22,.8]],.07,blue,g,true);
    if(building==='garden'){this.tree(1.35,1.35,1.35,g);this.box([1.5,.55,2.6],[1.5,.12,.4],'#b8a982',g);for(let i=0;i<5;i++)this.ball([.15+i*.5,.37,.5],[.15,.2,.15],i%2?coral:'#c7d39f',g);}
    else if(building==='home'||building==='muscle')this.neighborhood(g,p.id,building==='muscle');
    else this.serviceBuilding(g,p.id,building);
   }
   const hit=new T.Mesh(this.geo('plothit',()=>new T.BoxGeometry(3.65,3,3.65)),new T.MeshBasicMaterial({visible:false}));hit.position.set(p.x+1.45,1,p.z+1.4);hit.userData.pick=`plot:${p.id}`;hit.userData.dynamic=true;this.layout.add(hit);this.pickables.push(hit);
  }
  for(const tower of plots.filter(p=>this.state.buildings[p.id]==='neuron'))for(const target of plots.filter(p=>this.state.buildings[p.id]&&this.state.buildings[p.id]!=='garden'&&this.state.buildings[p.id]!=='neuron')){
   if(Math.hypot(tower.x-target.x,tower.z-target.z)>11.01)continue;
   const g=new T.Group();this.layout.add(g);this.tube([[tower.x+1.4,2.8,tower.z+1.4],[(tower.x+target.x)/2+1.4,2.6,(tower.z+target.z)/2+1.4],[target.x+1.4,1.3,target.z+1.4]],.027,'#d8bb73',g,true);this.signals.push({root:g,from:tower.id,to:target.id});
  }
  this.resize(this.width,this.height);
 }
 private keepsakes(){
  const records=this.state.campaign.records,unlocked=unlockedChapter(this.state);
  if(unlocked>=2){for(const [y,h,color] of [[-.45,1.1,'#bdcbb2'],[.09,.08,'#dce1c5']] as const){const land=this.cyl([16,y,0],8,h,color,this.layout);land.scale.set(.76,1,1.24);}for(const z of [-8,0,8])this.tree(20.6,z,.9,this.layout);}
  if(unlocked>=4){for(const [y,h,color] of [[-.45,1.1,'#bdcbb2'],[.09,.08,'#dce1c5']] as const){const land=this.cyl([8,y,11],10,h,color,this.layout);land.scale.set(1.4,1,.54);}for(const x of [-2,4,10,17])this.tree(x,14.6,.8,this.layout);}
  if(records.dawn){this.tree(-3.5,8,1.5,this.layout);this.box([-3.5,.45,8.8],[1.2,.55,.16],'#e5c991',this.layout);}
  if(records.breakfast){
   for(let i=0;i<2;i++){const g=new T.Group();g.position.set(-7.1+i*2.1,0,8.2);this.layout.add(g);this.box([0,.65,0],[1.45,.9,.85],cream,g);for(const x of [-.66,.66])this.cyl([x,1.2,0],.04,1.7,'#b09c78',g);this.ball([0,1.93,0],[.95,.21,.65],i?'#c3cc9e':'#deb58c',g);for(let j=0;j<3;j++)this.ball([-.42+j*.4,1.2,.17],[.16,.15,.16],j%2?'#c5ba73':'#d6a981',g);const p=this.person('#bea279',false);p.position.set(.2,.18,.85);p.scale.setScalar(.68);g.add(p);}
  }
  if(records.heat){
   const g=new T.Group();g.position.set(-.5,.15,8.8);this.layout.add(g);this.cyl([0,.13,0],1.1,.3,'#d4cbaa',g);this.cyl([0,.29,0],.95,.08,'#99bfc0',g);this.cyl([0,.52,0],.2,.7,cream,g);this.ball([0,1.04,0],[.25,.28,.25],'#b8d4cb',g);for(let i=0;i<5;i++){const a=i*1.26;this.tube([[0,1,0],[Math.cos(a)*.5,1.24,Math.sin(a)*.5],[Math.cos(a)*.72,.36,Math.sin(a)*.72]],.035,'#cde2d6',g,true);}
  }
  if(records.melody){
   const g=new T.Group();g.position.set(-1.6,.14,-8.3);this.layout.add(g);this.cyl([0,.22,0],1.8,.4,'#c6b7a0',g);this.cyl([0,.44,0],1.72,.07,cream,g);this.ball([0,1.2,-.6],[1.75,1.05,.16],'#c6b9ce',g);for(let i=0;i<3;i++){const p=this.person(['#b5a1ba','#c5ae76','#8aa994'][i],false);p.position.set(-.85+i*.85,.5,.25);p.scale.setScalar(.76);g.add(p);this.ball([-.8+i*.8,.9,.55],[.17,.19,.1],'#c6ae6e',g);}for(let i=0;i<5;i++)this.ball([Math.cos(i*.6+.38)*1.4,1.4+Math.sin(i*.6+.38)*.5,-.42],[.07,.07,.07],'#efd78a',g);
  }
  if(records.repair){
   for(const x of [-8,-2,4,10]){this.cyl([x,1.4,9.4],.045,2.6,'#95a188',this.layout);this.box([x,2.78,9.4],[.37,.52,.37],cream,this.layout,.1);this.ball([x,3.1,9.4],[.3,.1,.3],'#a9b697',this.layout);this.ball([x,2.72,9.43],[.13,.19,.13],'#f4d988',this.layout);}
  }
  if(records.festival){
   this.tube([[-8,2.8,9.4],[-5,2.35,9.4],[-2,2.8,9.4],[1,2.35,9.4],[4,2.8,9.4],[7,2.35,9.4],[10,2.8,9.4]],.026,'#acac84',this.layout,true);
   for(let i=0;i<17;i++){const x=-7.5+i,top=2.6-Math.sin((i%6)/6*Math.PI)*.18;this.cyl([x,top-.18,9.4],.11,.27,i%3?'#edce86':'#dca790',this.layout);this.ball([x,top-.34,9.4],[.035,.06,.035],cream,this.layout);}
   for(let i=0;i<7;i++){const p=this.person(['#c9ad82','#a9b38f','#b99cb3'][i%3],false);p.position.set(-9+i*2,.18,7.3+(i%2)*.45);p.scale.setScalar(.7);this.layout.add(p);}
  }
 }
 private serviceBuilding(g:T.Group,id:string,type:Exclude<Building,'home'|'muscle'|'garden'>){
  const palette={food:'#d8b38b',filter:'#a9c4c4',neuron:'#b9a6c8',immune:'#b2c28e'},accent=palette[type];
  this.cyl([1.5,.29,1.4],1.35,.22,cream,g);this.tube([[.2,.25,2.95],[1.4,.25,3.03],[3.04,.25,2.97],[3.08,.25,1.4]],.11,'#f2ead1',g,true);
  if(type==='food'){
   this.box([1.45,.88,1.1],[1.85,1.08,1.4],cream,g,.28);this.ball([1.45,1.52,1.1],[1.13,.46,.91],accent,g);
   for(let i=0;i<4;i++){const x=.7+i*.5;this.cyl([x,1.95,.85],.12,.7,'#ead3aa',g);this.ball([x,2.29,.85],[.16,.23,.16],i%2?'#d4b088':'#e1cba3',g);}
   this.box([1.45,.79,2.1],[2,.17,.58],accent,g);for(let i=0;i<5;i++)this.box([.7+i*.38,1.31,2],[.35,.12,.72],i%2?'#d0b07d':cream,g);
   for(let i=0;i<3;i++){this.box([.75+i*.6,.41,2.37],[.44,.36,.38],'#c3ae87',g);this.ball([.75+i*.6,.68,2.37],[.12,.12,.12],i%2?'#b7c18c':'#dcb68d',g);}
  }else if(type==='filter'){
   for(const side of [-1,1]){const b=this.ball([1.5+side*.65,.78,1.35],[.53,.58,.97],accent,g);b.rotation.y=side*.2;this.ball([1.5+side*.65,1.21,1.35],[.38,.13,.71],'#e2efdf',g);this.tube([[1.5+side*.65,.3,.45],[1.5+side*.4,.3,1.8],[1.5,.3,2.4]],.095,'#91b7bc',g,true);}
   this.box([1.5,.6,2.45],[1.37,.22,.45],cream,g);this.cyl([1.5,.5,2.27],.45,.08,'#9dbfc0',g);
   const wheel=new T.Group();wheel.position.set(1.5,1.36,1.1);g.add(wheel);for(let i=0;i<6;i++){const a=i*Math.PI/3;const blade=this.box([Math.cos(a)*.36,Math.sin(a)*.36,0],[.25,.4,.07],'#e3d8b5',wheel,.04);blade.rotation.z=a;}this.ball([1.5,1.36,1.17],[.13,.13,.1],cream,g);this.motors.push({root:wheel,plot:id,axis:'z',speed:.65});
  }else if(type==='neuron'){
   this.cyl([1.5,.43,1.4],.82,.23,accent,g);this.cyl([1.5,1.36,1.4],.22,1.75,cream,g);this.ball([1.5,2.32,1.4],[.57,.49,.57],accent,g);this.ball([1.5,2.4,1.4],[.24,.22,.24],'#ece4ce',g);
   const crown=new T.Group();crown.position.set(1.5,2.3,1.4);g.add(crown);for(let i=0;i<6;i++){const a=i*Math.PI/3,x=Math.cos(a),z=Math.sin(a);this.tube([[x*.2,0,z*.2],[x*.67,.18,z*.67],[x*.93,.53,z*.93]],.065,accent,crown,true);this.ball([x*.93,.55,z*.93],[.12,.15,.12],'#ecd58b',crown);}this.motors.push({root:crown,plot:id,axis:'y',speed:.075});
   for(const dx of [-.65,.65])this.box([1.5+dx,.6,2.35],[.55,.33,.45],'#c8b9ce',g);
  }else{
   const body=this.mesh(this.geo('immuneHall',()=>new T.CylinderGeometry(.95,1.03,1.25,6)),cream,[1.5,.96,1.3],g);body.rotation.y=Math.PI/6;
   const roof=this.mesh(this.geo('immuneRoof',()=>new T.CylinderGeometry(.75,1.16,.42,6)),accent,[1.5,1.71,1.3],g);roof.rotation.y=Math.PI/6;
   this.box([1.5,.65,2.23],[.44,.85,.06],'#a0b190',g,.14);this.box([1.5,1.38,2.2],[.43,.11,.06],'#baa36a',g,.02);this.box([1.5,1.38,2.21],[.12,.4,.06],'#baa36a',g,.02);
   for(const x of [.4,2.6]){this.cyl([x,.84,1.2],.21,1.15,accent,g);this.ball([x,1.45,1.2],[.27,.19,.27],cream,g);}
   this.cyl([2.47,1.68,2.35],.032,2.65,'#a29c7e',g);this.box([2.69,2.65,2.35],[.43,.4,.025],accent,g,.04);
  }
  this.tree(.15,.4,.4,g);const person=this.person(type==='immune'?'#eef0d8':accent,false);person.scale.setScalar(.72);person.userData.localResident=true;g.add(person);
 }
 private neighborhood(g:T.Group,id:string,muscle:boolean){
  const lights:T.Mesh[]=[];this.lamps.set(id,lights);
  this.tube([[.25,.24,2.95],[1.5,.24,3.02],[3.08,.24,2.97],[3.15,.24,1.4]],.13,'#f1e9d1',g,true);
  const homes=muscle?[[1.45,1.25,1.2],[2.6,2.45,.52]]:[[1.35,1.18,1],[2.6,2.25,.58],[.3,2.4,.5]];
  for(const [x,z,s] of homes){
   const house=new T.Group();house.position.set(x,.25,z);house.scale.setScalar(s);g.add(house);
   this.box([0,.7,0],[1.5,1.35,1.4],cream,house,.25);this.ball([0,1.39,0],[.88,.39,.8],muscle?'#d5aa83':'#b4cbb1',house);
   this.box([0,.43,.72],[.37,.72,.06],'#9aac9b',house,.12);
   for(const dx of [-.49,.49]){this.box([dx,.92,.72],[.28,.35,.05],'#baa989',house,.06);lights.push(this.box([dx,.92,.754],[.21,.28,.025],'#f4d59a',house,.04));}
   this.box([0,.19,1],[.9,.15,.4],'#d1c4a1',house);this.cyl([.52,1.66,-.25],.09,.7,'#d6c3a0',house);this.ball([.52,2.04,-.25],[.15,.12,.15],coral,house);
   if(muscle)for(const dz of [-.4,0,.4])this.box([-.8,.86,dz],[.1,1.2,.16],'#bba084',house);
  }
  this.tree(2.9,.35,.53,g);this.box([1.4,.5,2.9],[1.1,.11,.37],'#b8a482',g);
  for(let i=0;i<3;i++){const person=this.person(i===0?'#c69379':'#a8b89a',false);person.position.set(.35+i*.75,.25,2.65);person.scale.setScalar(.75);person.userData.localResident=true;person.userData.phase=i*2;g.add(person);}
 }
 private person(color:string,red:boolean){const g=new T.Group();this.ball([0,.48,0],[.22,.3,.17],red?coral:color,g);this.ball([0,.83,0],[.23,.22,.22],cream,g);this.ball([0,1.01,0],[.29,.1,.27],color,g);for(const x of [-.085,.085]){this.ball([x,.84,.205],[.023,.027,.016],'#5f7060',g);this.box([x,.12,0],[.105,.23,.13],'#8f9b86',g,.035);}if(red){this.box([.28,.52,0],[.27,.33,.32],'#d3b783',g,.07);this.ball([.28,.76,0],[.09,.09,.09],'#f0d095',g);}return g;}
 private supplyPoints(plot:string,delivery:Delivery):V[]{
  const pts:V[]=[[-11,.52,3],[-13,.52,1],[-13,.52,-3],[-11,.52,-5.5],[-9,.52,-5.5],[-7.1,.52,-3],[-7.3,.52,0],[-9,.52,3],[-7.5,.52,3],[-6.5,.52,.2],[-5,.52,.2]];
  const lane=(path:string[],from:string,offset:number)=>{let at=from;const points:V[]=[];for(const id of path){const edge=links.find(l=>l.id===id)!,a=nodes.find(n=>n.id===edge.a)!,b=nodes.find(n=>n.id===edge.b)!,sx=(b.z-a.z)/edge.length*offset,sz=-(b.x-a.x)/edge.length*offset;const start=at===a.id?a:b,end=at===a.id?b:a;points.push([start.x+sx,.52,start.z+sz],[end.x+sx,.52,end.z+sz]);at=end.id;}return points;};
  pts.push(...lane(delivery.path,'source',.21));const p=plots.find(p=>p.id===plot)!;pts.push([p.x+.6,.52,p.z+.7],[p.x+1.25,.52,p.z+1.25],[p.x+.35,.52,p.z-.25]);
  pts.push(...lane(delivery.path.slice().reverse(),plot,-.21));pts.push([-5,.52,-.2],[-6.7,.52,-1.2],[-14,.52,-1.2],[-14,.52,3],[-11,.52,3]);return pts;
 }
 private routeTraffic(){
  const signature=JSON.stringify(Object.entries(this.network.lots).map(([id,l])=>[id,l.routes.map(r=>[r.path,Math.round(r.amount*3)])]));if(signature===this.routeSignature)return;this.routeSignature=signature;this.traffic.clear();this.travelers=[];
  for(const [id,lot] of Object.entries(this.network.lots))for(const route of lot.routes){if(route.amount<.1)continue;const curve=new T.CatmullRomCurve3(this.supplyPoints(id,route).map(p=>new T.Vector3(...p)),true,'catmullrom',.08);const length=curve.getLength();const count=Math.max(1,Math.min(7,Math.round(route.amount*1.5)));
   for(let i=0;i<count;i++){const red=this.travelers.length===0;const root=red?this.person(coral,true):new T.Group();if(!red){this.ball([0,.13,0],[.29,.16,.24],coral,root);this.ball([0,.25,0],[.13,.04,.12],'#b9746c',root);this.ball([0,.4,0],[.07,.07,.07],'#f1d797',root);}root.userData.pick=red?'red':`plot:${id}`;this.traffic.add(root);this.travelers.push({root,curve,length,offset:i/count,lot:id,amount:route.amount,red});}
  }
 }
 sync(state:PlanningState,network:Network,tool:PlanningTool,selection:string){
  this.state=state;this.network=network;this.tool=tool;this.selection=selection;
  const signature=JSON.stringify([state.buildings,state.roads,state.heart,state.lungs,Object.keys(state.campaign.records)]);if(signature!==this.layoutSignature){this.layoutSignature=signature;this.buildLayout();}
  for(const p of plots){const label=this.labels.get(`plot:${p.id}`)!.el,b=state.buildings[p.id];label.textContent=`${p.name} · ${b?buildings[b].name:'可建设'}`;label.setAttribute('aria-label',`${p.name} ${b?buildings[b].name:'空地'}`);label.classList.toggle('empty',!b);label.classList.toggle('selected',selection===`plot:${p.id}`);label.classList.toggle('undersupplied',!!network.lots[p.id]&&network.lots[p.id].ratio<.95);}
  for(const l of links){const level=state.roads[l.id]??0,label=this.labels.get(`road:${l.id}`)!.el;label.textContent=level?`${Math.round(network.edges[l.id]*10)/10} / ${roadCapacity(level)}`:`＋ ${l.cost}`;label.setAttribute('aria-label',`${l.a==='source'?'左心出口':nodes.find(n=>n.id===l.a)!.name} 到 ${nodes.find(n=>n.id===l.b)!.name} ${level?'查看血管':'铺设血管'}`);label.classList.toggle('selected',selection===`road:${l.id}`);const root=this.roadRoots.get(l.id);if(root)root.visible=!!level||tool==='road'||this.guideKey===`road:${l.id}`;}
  for(const signal of this.signals)signal.root.visible=(network.lots[signal.from]?.ratio??0)>=.5&&(tool==='neuron'||selection===`plot:${signal.from}`||selection===`plot:${signal.to}`||state.campaign.chapter===3||this.guideKey===`plot:${signal.from}`);
  const evening=state.campaign.chapter>=4,dusk=state.campaign.chapter===5,bg=dusk?'#cbd7ce':'#e6ebdf';this.sun.color.set(evening?'#ffe4b6':'#fff1d6');this.sun.intensity=dusk?1.6:evening?2.1:2.5;this.sky.intensity=dusk?1.35:1.8;this.groundMaterial.color.set(bg);(this.scene.background as T.Color).set(bg);(this.scene.fog as T.Fog).color.set(bg);
  this.routeTraffic();
 }
 guide(key:string){
  if(this.guideKey===key)return;this.guideKey=key;
  for(const [id,label] of this.labels)label.el.classList.toggle('recommended',key===id);
  this.guideRing.visible=!!key;if(!key)return;
  if(key.startsWith('plot:')){const p=plots.find(p=>p.id===key.slice(5));if(p){this.guideRing.position.set(p.x+1.45,.24,p.z+1.4);this.guideRing.userData.size=1;}}
  else if(key.startsWith('road:')){const l=links.find(l=>l.id===key.slice(5));if(l){const a=nodes.find(n=>n.id===l.a)!,b=nodes.find(n=>n.id===l.b)!;this.guideRing.position.set((a.x+b.x)/2,.26,(a.z+b.z)/2);this.guideRing.userData.size=.5;const root=this.roadRoots.get(l.id);if(root)root.visible=true;}}
  else if(key==='heart'||key==='lungs'){this.guideRing.position.set(-10,.29,key==='heart'?3.3:-6);this.guideRing.userData.size=1.5;}else this.guideRing.visible=false;
 }
 setLabels(shown:boolean){this.labelsShown=shown;}
 hit(e:PointerEvent,canvas:HTMLCanvasElement){const r=canvas.getBoundingClientRect();this.pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);this.raycaster.setFromCamera(this.pointer,this.camera);for(const hit of this.raycaster.intersectObjects([...this.pickables,...this.traffic.children],true)){let o:T.Object3D|null=hit.object;while(o){if(o.userData.pick){const key=o.userData.pick as string;if(key.startsWith('road:')&&this.tool!=='road'&&!this.state.roads[key.slice(5)])break;return key;}o=o.parent;}}return null;}
 update(time:number,dt:number){
  const lifeStep=this.lastLifeTime===null?0:Math.max(0,Math.min(.15,time-this.lastLifeTime));this.lastLifeTime=time;
  if(!this.reduceMotion){const pulse=Math.pow(Math.max(0,Math.sin(time*7)),6);this.heart.scale.set(1+pulse*.015,1+pulse*.025,1+pulse*.015);this.lung.scale.set(1+Math.sin(time*1.4)*.025,1+Math.sin(time*1.4)*.016,1);}
  this.guideRing.scale.setScalar((this.guideRing.userData.size??1)*(this.reduceMotion?1:1+Math.sin(time*2.4)*.055));
  for(const motor of this.motors)motor.root.rotation[motor.axis]+=lifeStep*motor.speed*(this.network.lots[motor.plot]?.ratio??0);
  const repair=this.state.campaign.resources.repair,site=plots.find(p=>this.state.buildings[p.id]==='muscle');this.repairCrew.visible=!!site&&this.state.phase==='walking'&&this.state.campaign.chapter>=4&&repair<100;
  if(this.repairCrew.visible&&site){this.repairCrew.position.set(site.x+1.5,0,site.z+3);this.repairPatch.scale.x=Math.max(.08,1-repair/100);this.helpers.forEach((p,i)=>{p.rotation.y=(i?1:-1)*Math.PI/2;p.position.x=(i?.65:-.65)+Math.sin(time*.9+i*2)*.12;p.rotation.z=this.reduceMotion?0:Math.sin(time*1.6+i*2)*.035;});}
  for(const t of this.travelers){const u=(time*2.2/t.length+t.offset)%1,p=t.curve.getPointAt(u),dir=t.curve.getTangentAt(u);t.root.position.copy(p);t.root.rotation.y=Math.atan2(dir.x,dir.z);if(t.red){this.labels.get('red')!.point.copy(p).add(new T.Vector3(0,1.8,0));this.redLabel.textContent=`小红 → ${plots.find(p=>p.id===t.lot)!.name}`;if(this.following){this.controls.target.lerp(p,.045);this.camera.position.lerp(p.clone().add(new T.Vector3(12,12,16)),.035);}}
  }
  for(const [id,g] of this.lotRoots){const ratio=this.network.lots[id]?.ratio??1;for(const l of this.lamps.get(id)??[])l.material=this.mat(ratio>.95?'#f4d59a':'#b7b9a2');g.children.filter(c=>c.userData.localResident).forEach((c,i)=>{
   const clock=(c.userData.walkClock??i*8)+lifeStep*(ratio>.95?1:.35);c.userData.walkClock=clock;
   const route=[[.3,2.94],[1.55,3.02],[3.06,2.96],[3.13,1.5],[3.06,2.96],[1.55,3.02]],leg=Math.floor(clock/5)%route.length,u=clock%5/3,a=route[leg],b=route[(leg+1)%route.length],progress=Math.min(1,u);
   c.position.set(a[0]+(b[0]-a[0])*progress,.25+(u<1?Math.sin(clock*11)*.012:0),a[1]+(b[1]-a[1])*progress);c.rotation.y=u<1?Math.atan2(b[0]-a[0],b[1]-a[1]):Math.sin(i+leg)*.7;
  });}
  if(this.transitioning){this.camera.position.lerp(this.eye,1-Math.exp(-dt*5));this.controls.target.lerp(this.target,1-Math.exp(-dt*5));if(this.camera.position.distanceTo(this.eye)<.03&&this.controls.target.distanceTo(this.target)<.03)this.transitioning=false;}
  this.controls.update();
  for(const [key,{el,point}] of this.labels){
   const p=point.clone().project(this.camera),isPlot=key.startsWith('plot:'),isRoad=key.startsWith('road:'),important=this.selection===key||this.guideKey===key;
   const locked=isPlot?!plotUnlocked(this.state,key.slice(5)):isRoad?!this.roadRoots.has(key.slice(5)):false;
   const emptyHidden=isPlot&&!this.state.buildings[key.slice(5)]&&!Object.hasOwn(buildings,this.tool)&&this.tool!=='move';
   el.hidden=locked||p.z< -1||p.z>1||Math.abs(p.x)>.96||Math.abs(p.y)>.94||(!important&&(!this.labelsShown||emptyHidden||isRoad&&this.tool!=='road'))||(key==='red'&&!this.travelers.length);
   el.style.transform=`translate(-50%,-100%) translate(${(p.x*.5+.5)*this.width}px,${(-p.y*.5+.5)*this.height}px)`;
  }
 }
 preset(type:'overview'|'top'|'follow'){
  this.following=type==='follow';this.transitioning=!this.following;
  if(type==='follow'){this.camera.zoom=1.5;}else{const expanded=unlockedChapter(this.state)>=2;this.target.set(expanded?2.5:0,0,expanded?1.8:0);this.eye.set(type==='top'?this.target.x:29,type==='top'?58:33,type==='top'?this.target.z+.1:36);this.camera.zoom=1;}
  this.camera.updateProjectionMatrix();
 }
 focusPlot(id:string){const plot=plots.find(p=>p.id===id);if(!plot)return;this.following=false;this.transitioning=true;this.target.set(plot.x+1.4,.7,plot.z+1.4);this.eye.copy(this.target).add(new T.Vector3(16,19,23));this.camera.zoom=2.2;this.camera.updateProjectionMatrix();}
 resize(w:number,h:number){this.width=w;this.height=h;const aspect=w/h,expanded=unlockedChapter(this.state)>=2,halfW=Math.max(expanded?23:20,(expanded?15:12)*aspect);this.camera.left=-halfW;this.camera.right=halfW;this.camera.top=halfW/aspect;this.camera.bottom=-halfW/aspect;this.camera.updateProjectionMatrix();}
 zoom(by:number){this.camera.zoom=T.MathUtils.clamp(this.camera.zoom+by,.65,3.2);this.camera.updateProjectionMatrix();}
 dispose(){this.controls.dispose();this.labelRoot.remove();this.clearLayout();this.geometry.forEach(g=>g.dispose());this.mats.forEach(m=>m.dispose());this.extraMaterials.forEach(m=>m.dispose());for(const p of this.pickables)if(p instanceof T.Mesh)(p.material as T.Material).dispose();this.sun.shadow.dispose();this.scene.clear();}
}
