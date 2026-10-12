import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { cities, getCity, bloodRoutes, createSimulation, advanceSimulation, type CityId, type ModeId } from './model';
import { CityDistrict } from './district';
import { PlanningScene } from './planning-scene';
import type { PlanningState, Network } from './planning';

const ivory = '#fff7e6', rose = '#e48d80', blue = '#85b7c8', leaf = '#99b59a';
type V = [number, number, number];
type Traffic = { mesh:T.Group; curve:T.CatmullRomCurve3; offset:number; speed:number; nutrient?:boolean };

/** An original, fully procedural miniature. No external art or network requests. */
export class LivingWorld {
  scene = new T.Scene();
  camera = new T.OrthographicCamera(-24,24,18,-18,.1,250);
  renderer:T.WebGLRenderer;
  controls:OrbitControls;
  roots = new Map<CityId,T.Group>();
  organs = new Map<CityId,T.Group>();
  traffic:Traffic[]=[];
  labels = new Map<CityId,HTMLButtonElement>();
  mode:ModeId='rest';
  paused=false;
  speed=1;
  simulation=createSimulation();
  get time(){return this.simulation.time;}
  selected:CityId|null=null;
  district:CityDistrict|null=null;
  planning:PlanningScene|null=null;
  private planningPick:(key:string)=>void=()=>{};
  onPOI:(id:string)=>void=()=>{};
  get heartRate(){return this.simulation.heart;}
  get breathRate(){return this.simulation.breath;}
  reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  private previousTime=performance.now();
  private targetPosition = new T.Vector3(0,1,3);
  private targetZoom=1;
  private following=false;
  private raycaster=new T.Raycaster();
  private pointer=new T.Vector2();
  private down={x:0,y:0};
  private ring:T.Mesh;
  private traveler:T.Group;
  private travelerLabel:HTMLElement;
  private tourPath:T.CatmullRomCurve3|null=null;
  private tourProgress=0;
  private tourDestination=new T.Vector3();
  private bubbles:T.Mesh[]=[];
  private nutrients:T.Mesh[]=[];
  private routes=new Map<string,T.CatmullRomCurve3>();
  private sunlight:T.DirectionalLight;
  private night=0;
  private ground:T.Mesh;
  private mats=new Map<string,T.MeshStandardMaterial>();
  private raf=0;
  onSelect:(id:CityId)=>void;
  onTick:(time:number)=>void=()=>{};
  constructor(private container:HTMLElement, private labelContainer:HTMLElement, onSelect:(id:CityId)=>void) {
    this.onSelect=onSelect;
    this.renderer=new T.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.8));
    this.renderer.shadowMap.enabled=true;
    this.renderer.shadowMap.type=T.PCFShadowMap;
    this.renderer.outputColorSpace=T.SRGBColorSpace;
    this.renderer.setClearColor('#e9eee3');
    this.renderer.toneMapping=T.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure=1.05;
    this.renderer.domElement.setAttribute('aria-label','六座人体城市的可交互三维地图，可拖拽平移、滚轮缩放；也可以使用城市列表选择。');
    this.container.appendChild(this.renderer.domElement);
    this.camera.position.set(0,35,40);
    this.camera.lookAt(0,1,3);
    this.controls=new OrbitControls(this.camera,this.renderer.domElement);
    this.controls.enableRotate=false;
    this.controls.enableDamping=true;
    this.controls.dampingFactor=.09;
    this.controls.minZoom=.7;
    this.controls.maxZoom=2.5;
    this.controls.mouseButtons.LEFT=T.MOUSE.PAN;
    this.controls.touches.ONE=T.TOUCH.PAN;
    this.controls.touches.TWO=T.TOUCH.DOLLY_PAN;
    this.controls.addEventListener('start',()=>{this.following=false;});
    this.controls.target.copy(this.targetPosition);
    this.scene.add(new T.HemisphereLight('#fff8e8','#b4bda7',1.8));
    const sun=new T.DirectionalLight('#fff6df',2.8);
    this.sunlight=sun;
    sun.position.set(-18,30,18);sun.castShadow=true;
    sun.shadow.mapSize.set(2048,2048);
    Object.assign(sun.shadow.camera,{left:-27,right:27,top:27,bottom:-27,near:.5,far:100});
    sun.shadow.bias=-.0005;sun.shadow.normalBias=.03;sun.shadow.radius=5;
    this.scene.add(sun);
    const fill=new T.DirectionalLight('#d8edfa',.85);fill.position.set(20,10,-20);this.scene.add(fill);
    this.scene.fog=new T.Fog('#e9eee3',65,110);
    const ground=this.mesh(new T.PlaneGeometry(300,300),'#e9eee3',this.scene,[0,-1.6,0]);this.ground=ground;
    ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;
    // A faint cellular contour gives the terrain a living, microscopic scale.
    for(let i=0;i<32;i++){
      const a=i*2.39996, r=18+(i%5)*3.2;
      const s=this.mesh(new T.TorusGeometry(.8+(i%4)*.35,.016,5,40),'#d5dfcf',this.scene,[Math.cos(a)*r,-1.56,Math.sin(a)*r]);s.rotation.x=Math.PI/2;
    }
    cities.forEach(city=>{
      const g=new T.Group();g.position.set(city.position[0],0,city.position[1]);g.userData.city=city.id;
      this.roots.set(city.id,g);this.scene.add(g);this.island(g,city.color,city.id);
      const organ=new T.Group();g.add(organ);this.organs.set(city.id,organ);
      ({heart:()=>this.heart(organ),brain:()=>this.brain(organ),lungs:()=>this.lungs(organ),gut:()=>this.gut(organ),kidneys:()=>this.kidneys(organ),immune:()=>this.immune(organ)})[city.id]();
      const label=document.createElement('button');label.className='map-label';label.style.setProperty('--city',city.color);
      label.dataset.city=city.id;label.innerHTML=`<i></i><span>${city.name}</span><b>↗</b>`;
      label.setAttribute('aria-label',`探索${city.name}`);label.addEventListener('click',()=>onSelect(city.id));labelContainer.appendChild(label);this.labels.set(city.id,label);
    });
    this.vessels();
    this.ring=this.mesh(new T.TorusGeometry(3.8,.045,8,100),'#f3fbdd',this.scene,[0,.66,0]);this.ring.rotation.x=Math.PI/2;this.ring.visible=false;
    this.traveler=this.cell(this.scene,true,2);this.traveler.visible=false;
    const beacon=this.mesh(new T.TorusGeometry(.5,.05,8,40),'#ffecaf',this.traveler,[0,.7,0]);beacon.rotation.x=Math.PI/2;
    this.travelerLabel=document.createElement('span');this.travelerLabel.className='traveler-label';this.travelerLabel.textContent='小红在这里';this.travelerLabel.hidden=true;labelContainer.appendChild(this.travelerLabel);
    this.resize();new ResizeObserver(()=>this.resize()).observe(container);
    this.renderer.domElement.addEventListener('pointerdown',e=>{this.down={x:e.clientX,y:e.clientY};});
    this.renderer.domElement.addEventListener('pointerup',e=>{
      if(e.button!==0||Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)>6)return;
      if(this.planning){const pick=this.planning.hit(e,this.renderer.domElement);if(pick)this.planningPick(pick);return;}
      if(this.district){const poi=this.district.hit(e,this.renderer.domElement);if(poi)this.onPOI(poi);return;}
      const hit=this.hit(e);if(hit)this.onSelect(hit);
    });
    this.renderer.domElement.addEventListener('pointermove',e=>{if(e.buttons)return;this.renderer.domElement.style.cursor=(this.planning?this.planning.hit(e,this.renderer.domElement):this.district?this.district.hit(e,this.renderer.domElement):this.hit(e))?'pointer':'grab';});
    this.animate();
  }
  private material(color:string){if(!this.mats.has(color))this.mats.set(color,new T.MeshStandardMaterial({color,roughness:.75,metalness:0}));return this.mats.get(color)!;}
  private mesh(geo:T.BufferGeometry,color:string,parent:T.Object3D,pos:V=[0,0,0]){const m=new T.Mesh(geo,this.material(color));m.position.set(...pos);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
  private ball(parent:T.Object3D,color:string,pos:V,scale:V){const m=this.mesh(new T.SphereGeometry(1,24,16),color,parent,pos);m.scale.set(...scale);return m;}
  private box(parent:T.Object3D,color:string,pos:V,scale:V,r=.14){return this.mesh(new RoundedBoxGeometry(...scale,3,r),color,parent,pos);}
  private tube(parent:T.Object3D,points:V[],radius:number,color:string){const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));this.mesh(new T.TubeGeometry(curve,Math.max(24,points.length*10),radius,8,false),color,parent);return curve;}
  private cylinder(parent:T.Object3D,color:string,pos:V,r:number,h:number){return this.mesh(new T.CylinderGeometry(r,r,h,40,1),color,parent,pos);}
  private island(g:T.Group,color:string,id:CityId){
    const radius=id==='heart'?4.2:3.8;
    this.ball(g,'#c5d5bd',[0,-.4,0],[radius,.95,radius*.82]);
    this.ball(g,'#e3e6cf',[0,-.03,0],[radius+.03,.58,radius*.83]);
    this.ball(g,id==='heart'?'#e8ddc4':'#d9e1c6',[0,.18,0],[radius,.36,radius*.83]);
    const road:Array<V>=[];for(let i=0;i<=50;i++){const a=i/50*Math.PI*2;road.push([Math.cos(a)*2.95,.52,Math.sin(a)*2.25]);}
    this.tube(g,road,.22,'#f9efdc');
    for(let i=0;i<9;i++){
      const a=(i/9)*Math.PI*2+.2;
      this.ball(g,'#b6cba8',[Math.cos(a)*3.4,.35,Math.sin(a)*2.85],[.4,.35,.32]);
      this.ball(g,i%2?ivory:color,[Math.cos(a)*3.48,.51,Math.sin(a)*2.9],[.17,.2,.17]);
    }
    // Cell homes: membrane shells, a nucleus roof, and transport pores.
    for(let i=0;i<5;i++){
      const a=i/5*Math.PI*2+.7,x=Math.cos(a)*2.68,z=Math.sin(a)*2.05;
      if(z>1.4&&Math.abs(x)<1)continue;
      const h=.65+(i%2)*.2;
      this.box(g,ivory,[x,.57+h/2,z],[.72,h,.65],.18);
      this.ball(g,color,[x,.62+h,z],[.46,.25,.42]);
      this.box(g,'#94acaa',[x,.65,z+.336],[.17,.26,.04],.06);
      this.ball(g,'#ffefb8',[x,.98,z+.34],[.085,.085,.025]);
    }
    // Secretory vesicle towers and epithelial terraces form a tiny neighborhood.
    for(let i=0;i<3;i++){
      const x=-1.8+i*1.7,z=-1.8-(i%2)*.25,h=.8+(i%2)*.45;
      this.cylinder(g,ivory,[x,.55+h/2,z],.34,h);
      this.ball(g,color,[x,.6+h,z],[.42,.31,.39]);
      for(let j=0;j<2;j++)this.box(g,'#9daea2',[x-.14+j*.28,.65+h*.35,z+.33],[.09,.16,.05],.035);
      this.cylinder(g,'#dfd4af',[x,.7+h,z],.055,.4);
      this.ball(g,'#ffedb2',[x,.98+h,z],[.1,.13,.1]);
    }
    // Membrane buds, mitochondria-inspired pods and small capillary branches.
    for(let i=0;i<6;i++){
      const a=i/6*Math.PI*2+.15,x=Math.cos(a)*3.1,z=Math.sin(a)*2.55;
      this.ball(g,i%2?'#b4c59d':'#c7d4b2',[x,.51,z],[.28,.14,.17]);
      this.tube(g,[[x-.1,.64,z],[x,.67,z+.06],[x+.1,.64,z]],.018,'#91a582');
      if(i%2===0){this.tube(g,[[x*.65,.56,z*.65],[x*.8,.58,z*.8],[x,.59,z]],.055,'#dda79a');}
    }
    // Neuron sprouts grow from a cell body; decorative elements stay biological.
    for(let i=0;i<3;i++){
      const x=i===0?-3:2.4+i*.25,z=i===0?-.4:-1.8+i*.7;
      this.tube(g,[[x,.4,z],[x+.07,1.1,z],[x-.15,1.45,z]],.055,'#a1b093');
      this.ball(g,leaf,[x-.15,1.45,z],[.28,.3,.25]);
      this.ball(g,'#c1d3ae',[x+.16,1.13,z+.04],[.22,.23,.2]);
      this.ball(g,ivory,[x-.17,1.5,z+.19],[.065,.065,.035]);
    }
    const citizen=this.cell(g,id!=='immune',.7);citizen.position.set(-1.8,.75,1.9);
    const citizen2=this.cell(g,id!=='immune',.55);citizen2.position.set(2,.65,.9);
    // Raised observation plate at each organ's entrance.
    this.cylinder(g,'#fbf1da',[0,.43,.65],1.55,.18);
  }
  private heart(g:T.Group){
    this.cylinder(g,'#d09b85',[0,.68,0],1.95,.45);
    this.cylinder(g,ivory,[0,.97,0],1.87,.25);
    for(const x of [-.8,.8])for(const z of [-.45,.6]){
      this.box(g,z<0?'#e9b4a2':ivory,[x,1.5,z],[1.23,1.14,1.12],.32);
      this.ball(g,z<0?'#cc776c':'#edb6a4',[x,2.03,z],[.7,.3,.64]);
    }
    const heart=new T.Shape();heart.moveTo(0,-1);heart.bezierCurveTo(-.2,-.8,-1.5,.1,-1.3,.85);heart.bezierCurveTo(-1.15,1.75,-.15,1.55,0,.98);heart.bezierCurveTo(.3,1.65,1.35,1.65,1.4,.8);heart.bezierCurveTo(1.5,.1,.3,-.85,0,-1);
    const m=this.mesh(new T.ExtrudeGeometry(heart,{depth:.7,bevelEnabled:true,bevelSegments:4,steps:1,bevelSize:.22,bevelThickness:.22,curveSegments:20}),rose,g,[0,2.65,-.5]);m.rotation.z=-.12;
    this.tube(g,[[-.3,3.4,-.5],[-.5,4.4,-.6],[.15,4.7,-.7],[.7,4.4,-.6]],.21,'#d87868');
    this.tube(g,[[-1.15,2.7,-.6],[-1.35,3.7,-.6],[-.9,4.2,-.6]],.18,blue);
    for(let i=0;i<3;i++)this.tube(g,[[.05+i*.24,4.5,-.7],[.05+i*.24,4.97-i*.08,-.7]],.095,'#dc917e');
    this.box(g,'#d77e6f',[0,1.35,1.25],[.58,.63,.12],.2);
    for(const x of [-1.3,1.3])this.box(g,'#9caeac',[x,1.47,.98],[.25,.42,.11],.08);
    this.tube(g,[[-.8,2.8,.51],[-.4,2.8,.51],[-.22,3.08,.51],[0,2.46,.51],[.23,2.85,.51],[.67,2.85,.51]],.04,ivory);
    this.tube(g,[[1.5,1.2,0],[2,.9,.4],[2.1,.6,1.2]],.17,rose);
  }
  private brain(g:T.Group){
    this.cylinder(g,'#b5a5c4',[0,.75,0],1.7,.5);
    this.cylinder(g,ivory,[0,1.28,0],1.55,.65);
    for(let i=0;i<10;i++){const a=i/10*Math.PI*2;this.cylinder(g,ivory,[Math.cos(a)*1.43,1.78,Math.sin(a)*1.43],.11,1.15);}
    this.cylinder(g,'#ddd2e1',[0,2.25,0],1.67,.2);
    this.ball(g,'#bca6d1',[-.61,2.96,0],[.92,1.02,1.19]);
    this.ball(g,'#c7b3d9',[.61,2.96,0],[.92,1.02,1.19]);
    for(let side of [-1,1])for(let i=0;i<4;i++){
      const z=-.72+i*.48;
      this.tube(g,[[side*.15,3.8,z],[side*.7,3.86,z+.08],[side*1.23,3.4,z],[side*1.3,2.95,z+.1]],.065,'#a38bbd');
    }
    this.tube(g,[[0,1.9,0],[0,2,0],[0,3.9,0],[0,4.55,0]],.05,'#d6bf79');
    this.ball(g,'#ffe7a0',[0,4.65,0],[.16,.16,.16]);
    for(let i=0;i<3;i++){
      const a=i*2.094;const x=Math.cos(a)*2.25,z=Math.sin(a)*1.6;
      this.tube(g,[[x,.5,z],[x,1.3,z],[x-.35,1.65,z]],.065,'#baa9c9');
      this.ball(g,'#dac8e6',[x-.35,1.68,z],[.24,.24,.24]);
      this.ball(g,ivory,[x-.35,1.73,z+.2],[.09,.09,.07]);
    }
    this.box(g,'#b4a2c6',[0,1.36,1.56],[.42,.61,.12],.17);
  }
  private lungs(g:T.Group){
    this.box(g,ivory,[0,1.03,0],[3.1,1.05,1.8],.28);
    this.box(g,'#94bdb3',[0,1.62,0],[3.3,.23,2],.1);
    this.tube(g,[[0,3.85,-.3],[0,2.8,-.3],[-.8,2.2,0]],.2,'#ebdac2');
    this.tube(g,[[0,2.8,-.3],[.8,2.2,0]],.18,'#ebdac2');
    for(let side of [-1,1]){
      const cluster=new T.Group();cluster.position.x=side*.86;g.add(cluster);
      this.ball(cluster,'#9ec9bb',[0,2.52,0],[.8,.95,.71]);
      for(let i=0;i<9;i++){
        const a=i*2.399;const y=1.94+(i%3)*.56;
        this.ball(cluster,i%3===0?'#e8efda':i%2?'#aed6c6':'#bdded0',[Math.cos(a)*.48,y,Math.sin(a)*.51],[.44,.45,.44]);
      }
    }
    for(const x of [-1.05,-.35,.35,1.05])this.box(g,'#78a5a6',[x,1.09,.925],[.23,.34,.06],.08);
    this.box(g,'#edcf93',[0,.92,.94],[.46,.72,.1],.15);
    for(let i=0;i<5;i++){
      const b=this.ball(g,i%2?'#f7fff0':'#bce0d6',[(i-2)*.48,3.8+i*.27,.25],[.12,.12,.12]);b.userData.base=b.position.y;this.bubbles.push(b);
    }
    this.tube(g,[[-1.7,.7,0],[-1.6,1,-.8],[0,1,-1.2],[1.65,.7,-.2]],.12,rose);
  }
  private gut(g:T.Group){
    this.box(g,ivory,[-.3,1.1,-.3],[2.6,1.1,1.9],.35);
    const stomach=new T.Shape();stomach.moveTo(-.55,1.25);stomach.bezierCurveTo(-.55,.5,-.45,.35,-.05,.45);stomach.bezierCurveTo(.5,1.6,1.25,1.2,1.3,.5);stomach.bezierCurveTo(1.55,-.5,.4,-1,-.4,-.7);stomach.bezierCurveTo(-1.2,-.45,-1.1,.2,-.85,1.25);stomach.closePath();
    const m=this.mesh(new T.ExtrudeGeometry(stomach,{depth:.7,bevelEnabled:true,bevelSize:.16,bevelThickness:.18,bevelSegments:4,curveSegments:20}), '#e8bb76',g,[-.3,2.7,-.8]);m.rotation.z=.18;
    this.tube(g,[[-1.06,3.8,-.4],[-1.13,4.25,-.4]],.22,'#e7c397');
    const intestine:V[]=[[-1.2,.94,1.04],[-.9,.94,1.65],[1.3,.94,1.65],[1.5,.94,1.2],[-.55,.94,1.16],[-.75,.94,.7],[1.32,.94,.7],[1.7,.94,.2]];
    this.tube(g,intestine,.18,'#dfa578');
    this.ball(g,'#b88364',[1.35,1.45,-.65],[.8,.38,.55]);
    for(let i=0;i<4;i++){
      this.cylinder(g,'#f5e3a2',[-2+i*.25,.95,1],.065,.45+i*.08);
      const n=this.ball(g,'#ebbd61',[-2+i*.25,1.35,1],[.11,.11,.11]);n.userData.base=n.position.y;this.nutrients.push(n);
    }
    for(let i=0;i<3;i++)this.box(g,'#bf9c70',[-1+i*.65,1.15,.68],[.2,.27,.05],.04);
  }
  private kidneys(g:T.Group){
    this.cylinder(g,ivory,[0,.67,0],1.9,.35);
    for(const side of [-1,1]){
      const k=new T.Shape();k.moveTo(0,1);k.bezierCurveTo(-1.2,1.4,-1.45,-.9,-.4,-1.15);k.bezierCurveTo(.55,-1.3,.7,-.3,.12,-.05);k.bezierCurveTo(-.2,.1,.55,.42,.4,.8);k.bezierCurveTo(.3,1,.15,1,0,1);
      const mesh=this.mesh(new T.ExtrudeGeometry(k,{depth:.5,bevelEnabled:true,bevelSize:.2,bevelThickness:.2,bevelSegments:4,curveSegments:20}),side<0?'#cb9aa6':'#d9acb6',g,[side*.65,2.1,0]);mesh.scale.x=-side*.75;mesh.rotation.z=side*.13;
      this.tube(g,[[side*.5,1.95,.7],[side*.5,1.35,.95],[side*.8,.95,1.5],[side*.45,.77,1.9]],.11,'#c9b375');
      this.tube(g,[[side*.3,1.7,.48],[side*.75,1.8,.49],[side*.8,2.4,.49]],.085,blue);
    }
    this.ball(g,'#a8d7d2',[0,.9,1.9],[.47,.28,.4]);
    this.tube(g,[[0,.83,2.12],[0,.55,2.65]],.085,'#d4be85');
    for(const side of [-1,1]){
      this.cylinder(g,'#c6ded9',[side*2,.72,.1],.48,.3);
      this.cylinder(g,'#95c8c8',[side*2,.89,.1],.37,.07);
      this.tube(g,[[side*2,.95,-.1],[side*2,1.38,-.1],[side*1.6,1.6,-.1]],.07,ivory);
    }
  }
  private immune(g:T.Group){
    this.box(g,ivory,[0,1.06,0],[2.6,1.2,1.85],.3);
    this.ball(g,'#a6bea1',[0,2.14,-.17],[1.52,1.15,1.03]);
    this.tube(g,[[-1.25,2.1,0],[-1.85,2.45,0],[-2,2.7,0]],.11,'#cbd6a7');
    this.tube(g,[[1.25,2.1,0],[1.75,2.5,0],[1.8,2.85,0]],.11,'#cbd6a7');
    this.ball(g,'#f3f1d5',[-.37,2.48,.72],[.3,.34,.14]);
    this.ball(g,'#f3f1d5',[.36,2.05,.87],[.29,.33,.1]);
    const shield=new T.Shape();shield.moveTo(0,.7);shield.lineTo(.62,.43);shield.lineTo(.52,-.25);shield.quadraticCurveTo(.3,-.65,0,-.85);shield.quadraticCurveTo(-.3,-.65,-.52,-.25);shield.lineTo(-.62,.43);shield.closePath();
    this.mesh(new T.ExtrudeGeometry(shield,{depth:.12,bevelEnabled:true,bevelThickness:.08,bevelSize:.07,bevelSegments:3}),ivory,g,[0,1.84,1]);
    this.tube(g,[[-.28,1.8,1.25],[-.04,1.57,1.25],[.36,2.02,1.25]],.06,'#829c79');
    for(let i=0;i<4;i++){
      const c=this.cell(g,false,.8);c.position.set(-1.6+i*1.1,.8,1.75+Math.sin(i)*.2);
    }
  }
  private cell(parent:T.Object3D,red:boolean,scale=1){
    const g=new T.Group();parent.add(g);g.scale.setScalar(scale);
    if(red){
      this.ball(g,'#da8178',[0,.12,0],[.28,.16,.23]);
      const ring=this.mesh(new T.TorusGeometry(.18,.085,9,20),'#e69a8c',g,[0,.2,0]);ring.rotation.x=Math.PI/2;
      this.ball(g,'#f0b9a7',[0,.19,0],[.1,.025,.09]);
      this.box(g,ivory,[.24,.17,0],[.14,.19,.18],.05);
    }else{
      this.ball(g,ivory,[0,.2,0],[.27,.27,.24]);
      this.ball(g,'#b3a8c4',[-.06,.27,.2],[.13,.11,.08]);
      for(let i=0;i<6;i++){const a=i/6*Math.PI*2;this.ball(g,ivory,[Math.cos(a)*.24,.2+Math.sin(a)*.24,0],[.075,.075,.075]);}
    }
    for(const x of [-.08,.07])this.ball(g,'#665f59',[x,.2,.22],[.022,.025,.022]);
    return g;
  }
  private vessels(){
    for(const city of cities.filter(c=>c.id!=='heart')){
      for(const returning of [false,true]){
        const end=new T.Vector3(city.position[0],.7,city.position[1]);
        const dir=end.clone().setY(0).normalize();const perpendicular=new T.Vector3(-dir.z,0,dir.x).multiplyScalar(returning?-.35:.35);
        const start=dir.clone().multiplyScalar(1.5).add(perpendicular).setY(.6);
        const finish=end.clone().sub(dir.clone().multiplyScalar(1.9)).add(perpendicular);
        const mid=start.clone().lerp(finish,.5).add(perpendicular.clone().multiplyScalar(2));mid.y=1.15;
        const points=[start,mid,finish];if(returning)points.reverse();
        const curve=new T.CatmullRomCurve3(points);
        const from=returning?city.id:'heart',to=returning?'heart':city.id;
        const oxygen=bloodRoutes.find(r=>r.from===from&&r.to===to)!.oxygen;
        this.routes.set(`${from}-${to}`,curve);
        this.mesh(new T.TubeGeometry(curve,60,.19,10,false),oxygen?'#d59c8e':'#98b7c4',this.scene);
        this.mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>p.clone().add(new T.Vector3(0,.11,0)))),60,.038,6,false),oxygen?'#f0cabc':'#c7dce3',this.scene);
        for(let i=0;i<5;i++){
          const mesh=this.cell(this.scene,true,.75);if(!oxygen)mesh.traverse(o=>{if(o instanceof T.Mesh && o.material===this.material('#da8178'))o.material=this.material('#9b819f');});
          this.traffic.push({mesh,curve,offset:i/5,speed:.025});
        }
        if(city.id==='gut'&&returning)for(let i=0;i<6;i++){
          const mesh=new T.Group();this.scene.add(mesh);this.ball(mesh,'#e5bd64',[0,.12,0],[.12,.12,.12]);this.traffic.push({mesh,curve,offset:i/6,speed:.04,nutrient:true});
        }
      }
    }
    // Fine golden axons communicate with the heart and respiratory center.
    for(const id of ['heart','lungs'] as CityId[]){
      const brain=getCity('brain').position,dest=getCity(id).position;
      const pts:V[]=[[brain[0],.5,brain[1]],[(brain[0]+dest[0])/2,.75,Math.min(brain[1],dest[1])-4],[dest[0],.6,dest[1]]];
      const curve=this.tube(this.scene,pts,.044,'#cdbb83');
      for(let i=0;i<3;i++){
        const g=new T.Group();this.scene.add(g);this.ball(g,'#ffeac0',[0,0,0],[.105,.105,.105]);this.traffic.push({mesh:g,curve,offset:i/3,speed:.11});
      }
    }
  }
  private hit(e:PointerEvent){
    const r=this.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);this.raycaster.setFromCamera(this.pointer,this.camera);
    const hits=this.raycaster.intersectObjects([...this.roots.values()],true);
    for(const hit of hits){let o:T.Object3D|null=hit.object;while(o){if(o.userData.city)return o.userData.city as CityId;o=o.parent;}}return null;
  }
  select(id:CityId|null,focus=false){
    this.closePlanning();
    if(id&&focus){
      if(this.district?.id!==id){this.district?.dispose();this.controls.enabled=false;this.district=new CityDistrict(id,this.renderer.domElement,this.labelContainer,key=>this.onPOI(key));this.resize();}this.district.preset('city');
      this.renderer.domElement.setAttribute('aria-label',`${getCity(id).name}三维城区，可拖动360度环绕、右键平移、滚轮缩放；也可以使用街区观察目录选择建筑。`);
      this.selected=id;return;
    }
    this.selected=id;this.ring.visible=!!id;
    this.labels.forEach((el,key)=>el.classList.toggle('selected',key===id));
    if(id){const c=getCity(id);this.ring.position.set(c.position[0],.65,c.position[1]);if(focus){this.targetPosition.set(c.position[0],1,c.position[1]);this.targetZoom=1.65;this.following=true;}}
  }
  openPlanning(state:PlanningState,network:Network,pick:(key:string)=>void){
    this.district?.dispose();this.district=null;this.closePlanning();this.controls.enabled=false;this.endTour();this.selected=null;
    this.planningPick=pick;this.planning=new PlanningScene(this.renderer.domElement,this.labelContainer,state,network,pick);this.resize();
    this.renderer.domElement.setAttribute('aria-label','可建设的心肺街区。点击地块或血管规划城市，拖动可360度环绕，滚轮可缩放。');
  }
  closePlanning(){if(this.planning){this.planning.dispose();this.planning=null;this.controls.enabled=true;}}
  overview(){if(this.district){this.district.dispose();this.district=null;this.controls.enabled=true;}this.renderer.domElement.setAttribute('aria-label','六座人体城市的可交互三维地图，可拖拽平移、滚轮缩放；也可以使用城市列表选择。');this.targetPosition.set(0,1,3);this.targetZoom=1;this.following=true;this.resize();}
  zoom(by:number){if(this.planning){this.planning.zoom(by);return;}if(this.district){this.district.zoom(by);return;}this.targetPosition.copy(this.controls.target);this.targetZoom=T.MathUtils.clamp(this.camera.zoom+by,.7,2.5);this.following=true;}
  setTour(from:CityId,to:CityId,oxygen:boolean){
    this.traveler.visible=true;this.tourProgress=0;
    const a=getCity(from).position,b=getCity(to).position;
    this.tourDestination.set(b[0],1.2,b[1]+1);
    const mid=new T.Vector3((a[0]+b[0])/2,2,(a[1]+b[1])/2);
    this.tourPath=this.routes.get(`${from}-${to}`)??new T.CatmullRomCurve3([new T.Vector3(a[0],1.2,a[1]+1),mid,this.tourDestination]);
    this.traveler.position.copy(this.tourPath.getPointAt(0));this.traveler.position.y+=.3;
    this.travelerLabel.hidden=false;
    this.traveler.traverse(o=>{if(o instanceof T.Mesh&&(o.material===this.material('#da8178')||o.material===this.material('#9b819f')))o.material=this.material(oxygen?'#da8178':'#9b819f');});
  }
  endTour(){this.traveler.visible=false;this.tourPath=null;this.travelerLabel.hidden=true;}
  private resize(){
    const w=this.container.clientWidth,h=this.container.clientHeight;if(!w||!h)return;
    const aspect=w/h,half=14;this.camera.left=-half*aspect;this.camera.right=half*aspect;this.camera.top=half;this.camera.bottom=-half;
    if(aspect<1.2){this.camera.left=-19;this.camera.right=19;this.camera.top=19/aspect;this.camera.bottom=-19/aspect;}
    this.camera.updateProjectionMatrix();this.renderer.setSize(w,h);
    this.district?.resize(w,h);
    this.planning?.resize(w,h);
  }
  private animate=()=>{
    this.raf=requestAnimationFrame(this.animate);const now=performance.now(),dt=Math.min((now-this.previousTime)/1000,.06);this.previousTime=now;
    advanceSimulation(this.simulation,this.mode,dt,this.speed,this.paused);
    const t=this.time;
    if(this.planning){this.onTick(t);this.planning.update(t,dt);this.renderer.render(this.planning.scene,this.planning.camera);return;}
    if(this.district){this.district.update(this.simulation,dt,this.mode,this.paused);this.renderer.render(this.district.scene,this.district.camera);this.onTick(t);return;}
    for(const p of this.traffic){p.mesh.visible=!p.nutrient||this.mode==='meal';p.mesh.position.copy(p.curve.getPointAt((this.simulation.transport*p.speed+p.offset)%1));p.mesh.position.y+=.17;}
    if(!this.reduced){
      const heart=this.organs.get('heart')!;const beat=Math.pow(Math.max(0,Math.sin(this.simulation.beats*Math.PI*2)),8);heart.scale.set(1+beat*.025,1+beat*.045,1+beat*.025);
      const lungs=this.organs.get('lungs')!,breath=Math.sin(this.simulation.breaths*Math.PI*2);lungs.scale.set(1+breath*.035,1+breath*.025,1+breath*.025);
      this.bubbles.forEach((b,i)=>{b.position.y=b.userData.base+Math.sin(t*.8+i)*.22;});
      this.nutrients.forEach((n,i)=>{n.position.y=n.userData.base+Math.abs(Math.sin(this.simulation.nutrients+i))*.22;});
    }
    if(this.tourPath&&!this.paused){this.tourProgress=Math.min(1,this.tourProgress+dt*this.speed*.18);this.traveler.position.copy(this.tourPath.getPointAt(this.tourProgress));this.traveler.position.y+=.3;}
    if(this.following){const previous=this.controls.target.clone();this.controls.target.lerp(this.targetPosition,1-Math.exp(-dt*4));this.camera.position.add(this.controls.target.clone().sub(previous));this.camera.zoom=T.MathUtils.damp(this.camera.zoom,this.targetZoom,4,dt);this.camera.updateProjectionMatrix();}
    this.controls.update();
    this.night=T.MathUtils.damp(this.night,this.mode==='sleep'?1:0,1.5,dt);
    this.sunlight.intensity=T.MathUtils.lerp(2.8,1.2,this.night);
    const skyColor=new T.Color('#e9eee3').lerp(new T.Color('#c6d3dd'),this.night);
    this.renderer.setClearColor(skyColor);(this.ground.material as T.MeshStandardMaterial).color.copy(skyColor);
    this.renderer.render(this.scene,this.camera);
    const width=this.container.clientWidth,height=this.container.clientHeight;
    for(const [id,label] of this.labels){const c=getCity(id);const p=new T.Vector3(c.position[0],.4,c.position[1]+3.3).project(this.camera);label.style.transform=`translate(-50%,-50%) translate(${(p.x*.5+.5)*width}px,${(-p.y*.5+.5)*height}px)`;label.hidden=p.x<-.98||p.x>.98||p.y<-.98||p.y>.98;}
    if(this.traveler.visible){const p=this.traveler.position.clone().add(new T.Vector3(0,1.5,0)).project(this.camera);this.travelerLabel.style.transform=`translate(-50%,-100%) translate(${(p.x*.5+.5)*width}px,${(-p.y*.5+.5)*height}px)`;}
    this.onTick(t);
  };
  capture(){
    this.renderer.render(this.planning?.scene??this.district?.scene??this.scene,this.planning?.camera??this.district?.camera??this.camera);
    const source=this.renderer.domElement,canvas=document.createElement('canvas');canvas.width=Math.min(1100,source.width);canvas.height=Math.round(canvas.width*source.height/source.width);canvas.getContext('2d')!.drawImage(source,0,0,canvas.width,canvas.height);return canvas.toDataURL('image/jpeg',.8);
  }
  dispose(){cancelAnimationFrame(this.raf);this.planning?.dispose();this.district?.dispose();this.controls.dispose();this.renderer.dispose();}
}
