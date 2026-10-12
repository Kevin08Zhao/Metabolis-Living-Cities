import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { type CityId, type Simulation, type ModeId } from './model';
import { cityPlans, type Landmark, type Point2 } from './city-plans';
import { advanceTraffic, createTraffic, randomAt, sampleWalk, wrap, type StreetVehicle } from './street-life';
import { residents, momentAt, type ViewMemory, type VisitStep } from './experience';
import { HarborWorkshop } from './harbor';
import { newWorkday, harborDialogue, workChapters, type Workday, type HarborPerson } from './workday';

export interface Inspection {key:string;name:string;role:string;status:string;destination:string;detail:string;cargo?:string;}

type V=[number,number,number];
type Actor={root:T.Group;curve:T.CatmullRomCurve3;length:number;direction:number;offset:number;legs:T.Object3D[];seed:number;open?:boolean};
type TrafficLane={curve:T.CatmullRomCurve3;length:number;direction:number;cars:StreetVehicle[];roots:T.Group[]};
type Neighbor={root:T.Group;pose:'chat'|'read'|'sit'|'shop';phase:number;heading:number};
type Animation={object:T.Object3D;type:'pulse'|'breath'|'rotate'|'float'|'signal'|'gate'|'sway';base:number;phase:number;scale?:T.Vector3;curve?:T.CatmullRomCurve3};
const cream='#fff4df',glass='#72989d',gold='#eac777';

/** One fully modeled city at a time; static geometry is batched by material. */
export class CityDistrict {
  readonly scene=new T.Scene();
  readonly camera=new T.PerspectiveCamera(40,1,.1,220);
  readonly controls:OrbitControls;
  readonly plan;
  readonly stats={buildings:0,vehicles:0,residents:0,streets:0};
  private staticRoot=new T.Group();
  private dynamicRoot=new T.Group();
  private materials=new Map<string,T.MeshStandardMaterial>();
  private geometries=new Set<T.BufferGeometry>();
  private shapes=new Map<string,T.BufferGeometry>();
  private actors:Actor[]=[];
  private trafficLanes:TrafficLane[]=[];
  private neighbors:Neighbor[]=[];
  private previousSimulationTime:number|null=null;
  private textures=new Set<T.Texture>();
  private signMaterials=new Map<string,T.MeshStandardMaterial>();
  private lifePosition=new T.Vector3(2,1.1,14.5);
  private animations:Animation[]=[];
  private lanes:T.CatmullRomCurve3[]=[];
  private roadSamples:T.Vector3[]=[];
  private streetFurniture:Point2[]=[];
  private labels=new Map<string,HTMLButtonElement>();
  private hitboxes:T.Mesh[]=[];
  private labelRoot:HTMLElement;
  private sunlight:T.DirectionalLight;
  private selection:T.Mesh;
  private target=new T.Vector3(0,0,0);
  private eye=new T.Vector3(28,30,35);
  private transitioning=true;
  private width=1;
  private height=1;
  private overviewDistance=48;
  private raycaster=new T.Raycaster();
  private pointer=new T.Vector2();
  private selected:string|null=null;
  private showLabels=true;
  get labelsVisible(){return this.showLabels;}
  private disposed=false;
  private carTemplates:T.Group[];
  private residentTemplates:T.Group[];
  private harbor:HarborWorkshop|null=null;
  private workday:Workday=newWorkday();
  private harborEntry:HTMLButtonElement|null=null;
  private promenade!:T.CatmullRomCurve3;
  private interactiveRoots:T.Group[]=[];
  private residentLabels=new Map<string,HTMLButtonElement>();
  private momentRoot=new T.Group();
  private courierRoot!:T.Group;
  private courierStep:VisitStep|null=null;
  private courierProgress=0;
  private simulationTime=0;
  private walkStarted=0;
  private followed:string|null=null;
  viewMode:'free'|'follow'|'walk'|'bench'='free';
  get following(){return this.followed;}
  constructor(readonly id:CityId,canvas:HTMLCanvasElement,labelContainer:HTMLElement,private onPOI:(id:string)=>void){
    this.plan=cityPlans[id];
    this.scene.background=new T.Color('#e6e8dc');this.scene.fog=new T.Fog('#e6e8dc',72,150);
    this.scene.add(this.staticRoot,this.dynamicRoot);
    this.scene.add(new T.HemisphereLight('#fff6e7','#9caa91',1.15));
    this.sunlight=new T.DirectionalLight('#ffe9c8',2.4);this.sunlight.position.set(-16,25,18);this.sunlight.castShadow=true;
    this.sunlight.shadow.mapSize.set(2048,2048);Object.assign(this.sunlight.shadow.camera,{left:-28,right:28,top:28,bottom:-28,near:1,far:100});this.sunlight.shadow.normalBias=.025;this.sunlight.shadow.bias=-.0002;this.scene.add(this.sunlight);
    const fill=new T.DirectionalLight('#dce9ff',.65);fill.position.set(18,15,-20);this.scene.add(fill);
    this.camera.position.copy(this.eye);this.camera.lookAt(0,0,0);
    this.controls=new OrbitControls(this.camera,canvas);this.controls.enableDamping=true;this.controls.dampingFactor=.085;
    this.controls.minDistance=7;this.controls.maxDistance=85;this.controls.minPolarAngle=.15;this.controls.maxPolarAngle=Math.PI*.465;
    this.controls.mouseButtons.LEFT=T.MOUSE.ROTATE;this.controls.mouseButtons.RIGHT=T.MOUSE.PAN;
    this.controls.touches.ONE=T.TOUCH.ROTATE;this.controls.touches.TWO=T.TOUCH.DOLLY_PAN;this.controls.panSpeed=.7;this.controls.rotateSpeed=.65;this.controls.autoRotateSpeed=.55;
    this.controls.addEventListener('start',()=>{this.transitioning=false;this.releaseCamera();});
    this.labelRoot=document.createElement('div');this.labelRoot.className='district-labels';labelContainer.append(this.labelRoot);
    this.terrain();
    this.carTemplates=Array.from({length:4},(_,i)=>this.vehicle(i));this.residentTemplates=Array.from({length:6},(_,i)=>this.resident(i));
    this.plan.roads.forEach((r,i)=>this.street(r.points,r.color,r.vehicles,i));
    this.plan.landmarks.forEach((l,i)=>this.landmark(l,i));
    this.specialInfrastructure();
    this.neighborhoods();
    this.livingQuarter();
    this.neighborhoodSignature();
    this.prepareEncounters();
    if(id==='lungs'){
      this.harbor=new HarborWorkshop(this.residentTemplates,this.labelRoot,onPOI);this.dynamicRoot.add(this.harbor.root);
      this.harbor.people.forEach(root=>this.interactiveRoots.push(root));this.stats.residents+=5;this.stats.buildings+=2;
      this.harborEntry=document.createElement('button');this.harborEntry.className='district-label harbor-entry-label';this.harborEntry.textContent='✧ 小红的港口一天';this.harborEntry.addEventListener('click',()=>onPOI('harbor:welcome'));this.labelRoot.append(this.harborEntry);
      Object.assign(this.sunlight.shadow.camera,{left:-40,right:40,top:40,bottom:-40});this.sunlight.shadow.camera.updateProjectionMatrix();
    }
    this.compact(this.staticRoot);
    this.selection=this.mesh(new T.TorusGeometry(2.7,.055,6,80),'#eac779',this.dynamicRoot,[0,.42,0]);this.selection.rotation.x=Math.PI/2;this.selection.visible=false;
  }
  private mat(color:string,transparent=false){const key=color+(transparent?'glass':'');if(!this.materials.has(key))this.materials.set(key,new T.MeshStandardMaterial({color,roughness:transparent?.24:.78,emissiveIntensity:0,transparent,opacity:transparent?.46:1,depthWrite:!transparent}));return this.materials.get(key)!;}
  private geometry(key:string,make:()=>T.BufferGeometry){if(!this.shapes.has(key)){const g=make();this.shapes.set(key,g);this.geometries.add(g);}return this.shapes.get(key)!;}
  private mesh(geometry:T.BufferGeometry,color:string,parent:T.Object3D=this.staticRoot,pos:V=[0,0,0],transparent=false){this.geometries.add(geometry);const m=new T.Mesh(geometry,this.mat(color,transparent));m.position.set(...pos);m.castShadow=!transparent;m.receiveShadow=true;parent.add(m);return m;}
  private box(pos:V,size:V,color:string,parent:T.Object3D=this.staticRoot,r=.12){return this.mesh(this.geometry(`box${size}-${r}`,()=>new RoundedBoxGeometry(...size,2,r)),color,parent,pos);}
  private sphere(pos:V,size:V,color:string,parent:T.Object3D=this.staticRoot,transparent=false){const m=this.mesh(this.geometry('sphere',()=>new T.SphereGeometry(1,18,12)),color,parent,pos,transparent);m.scale.set(...size);return m;}
  private cylinder(pos:V,r:number,h:number,color:string,parent:T.Object3D=this.staticRoot,top=r){return this.mesh(this.geometry(`cyl${r}-${h}-${top}`,()=>new T.CylinderGeometry(top,r,h,24)),color,parent,pos);}
  private tube(points:V[],r:number,color:string,parent:T.Object3D=this.staticRoot,closed=false){const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)),closed,'catmullrom',.35);this.mesh(new T.TubeGeometry(curve,Math.max(32,points.length*7),r,7,closed),color,parent);return curve;}
  private group(x:number,z:number){const g=new T.Group();g.position.set(x,0,z);this.staticRoot.add(g);return g;}
  private compact(root:T.Group){
    root.updateWorldMatrix(true,true);const inverse=root.matrixWorld.clone().invert();const groups=new Map<T.Material,T.BufferGeometry[]>();
    root.traverse(o=>{if(!(o instanceof T.Mesh)||Array.isArray(o.material))return;const geom=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geom.applyMatrix4(inverse.clone().multiply(o.matrixWorld));if(!o.material.map)geom.deleteAttribute('uv');if(!geom.hasAttribute('normal'))geom.computeVertexNormals();if(!groups.has(o.material))groups.set(o.material,[]);groups.get(o.material)!.push(geom);});
    root.clear();for(const [material,parts] of groups){const geometry=mergeGeometries(parts,false);parts.forEach(p=>p.dispose());if(!geometry)continue;this.geometries.add(geometry);const mesh=new T.Mesh(geometry,material);mesh.castShadow=!material.transparent;mesh.receiveShadow=true;root.add(mesh);}
  }
  private terrain(){
    const floor=this.mesh(new T.PlaneGeometry(250,250),'#e6e8dc',this.staticRoot,[0,-1.85,0]);floor.rotation.x=-Math.PI/2;floor.castShadow=false;
    const outline=new T.Shape();
    if(this.id==='immune'){
      for(let i=0;i<6;i++){const a=i*Math.PI/3,x=Math.cos(a)*24,z=Math.sin(a)*23; i?outline.lineTo(x,z):outline.moveTo(x,z);}outline.closePath();
    }else if(this.id==='gut'){
      outline.moveTo(-14,-17);outline.bezierCurveTo(-25,-12,-23,14,-12,18);outline.bezierCurveTo(1,23,23,19,23,3);outline.bezierCurveTo(25,-8,15,-20,-1,-19);outline.bezierCurveTo(-8,-19,-11,-19,-14,-17);
    }else{
      const points=Array.from({length:25},(_,i)=>{const a=i/24*Math.PI*2;const r=1+.025*Math.sin(a*5)+.018*Math.cos(a*7);return new T.Vector2(Math.cos(a)*22.4*r,Math.sin(a)*19.5*r);});
      outline.moveTo(points[0].x,points[0].y);outline.splineThru(points.slice(1));outline.closePath();
    }
    const geo=new T.ExtrudeGeometry(outline,{depth:1.05,bevelEnabled:true,bevelSize:.4,bevelThickness:.3,bevelSegments:3,steps:1,curveSegments:40});geo.rotateX(-Math.PI/2);
    this.mesh(geo,'#b9cbae',this.staticRoot,[0,-1.4,0]);
    const top=new T.ShapeGeometry(outline,48);top.rotateX(-Math.PI/2);this.mesh(top,this.plan.ground,this.staticRoot,[0,.035,0]);
    // The cutaway rim is connective tissue: soft layers and embedded cell bodies.
    for(let i=0;i<34;i++){const a=i/34*Math.PI*2,x=Math.cos(a)*21.4,z=Math.sin(a)*18.5;if(this.id==='immune'||this.id==='gut')continue;this.sphere([x,-.7,z],[.32,.24,.22],i%3?'#c5cdb5':this.plan.accent);}
  }
  private ribbon(curve:T.CatmullRomCurve3,width:number,color:string,height:number,offset=0){
    const n=240,vertices:number[]=[],indices:number[]=[];
    for(let i=0;i<=n;i++){const t=i/n,p=curve.getPointAt(t),v=curve.getTangentAt(t),side=new T.Vector3(v.z,0,-v.x).normalize();for(const sign of [-1,1]){const q=p.clone().addScaledVector(side,offset+sign*width/2);vertices.push(q.x,height,q.z);}if(i<n){const k=i*2;indices.push(k,k+2,k+1,k+1,k+2,k+3);}}
    const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(vertices,3));geometry.setIndex(indices);geometry.computeVertexNormals();const m=this.mesh(geometry,color);m.material.side=T.DoubleSide;m.castShadow=false;
  }
  private street(points:Point2[],color:string,count:number,index:number){
    const curve=new T.CatmullRomCurve3(points.map(([x,z])=>new T.Vector3(x,.2,z)),true,'catmullrom',.42);this.lanes.push(curve);this.roadSamples.push(...curve.getSpacedPoints(200));this.stats.streets++;
    this.ribbon(curve,2.05,'#eee8d6',.08);this.ribbon(curve,1.27,color,.105);
    this.ribbon(curve,.4,'#ede6ce',.135,1.04);this.ribbon(curve,.055,'#faf4dc',.13,.61);this.ribbon(curve,.055,'#faf4dc',.13,-.61);
    const length=curve.getLength();
    for(let i=0;i<Math.floor(length/1.3);i++){const p=curve.getPointAt(i/Math.floor(length/1.3)),t=curve.getTangentAt(i/Math.floor(length/1.3));const dash=this.box([p.x,.13,p.z],[.045,.015,.36],'#f5eddb');dash.rotation.y=Math.atan2(t.x,t.z);}
    for(let i=0;i<Math.floor(length/8);i++){const u=i/Math.floor(length/8),p=curve.getPointAt(u),t=curve.getTangentAt(u);this.lamp(p.x+t.z*1.42,p.z-t.x*1.42,index);}
    for(let direction of [1,-1]){
      const n=direction===1?Math.ceil(count/2):Math.floor(count/2);
      const cars=createTraffic(n,length,index*32+(direction+1)*7),roots:T.Group[]=[];
      for(let i=0;i<n;i++){const root=this.carTemplates[i===0?2:(i+index)%4].clone(true);this.dynamicRoot.add(root);roots.push(root);this.stats.vehicles++;}
      this.trafficLanes.push({curve,length,direction,cars,roots});
      const otherRoads=this.plan.roads.filter((_,i)=>i!==index).flatMap(r=>new T.CatmullRomCurve3(r.points.map(([x,z])=>new T.Vector3(x,0,z)),true,'catmullrom',.42).getSpacedPoints(120));
      cars[0].stop=null;
      for(const u of [.62,.15,.35,.8]){
        const p=curve.getPointAt(u),t=curve.getTangentAt(u),x=p.x+t.z*direction*1.78,z=p.z-t.x*direction*1.78;
        if(otherRoads.some(p=>Math.hypot(p.x-x,p.z-z)<1.7)||this.plan.landmarks.some(l=>Math.hypot(l.position[0]-x,l.position[1]-z)<3))continue;
        const stop=this.group(x,z);stop.rotation.y=Math.atan2(t.x*direction,t.z*direction);this.busStop(stop,index);this.streetFurniture.push([x,z]);cars[0].stop=wrap(u*direction*length,length);break;
      }
    }
    const people=9+index*3;
    for(let i=0;i<people;i++){
      this.walker(curve,index*100+i+12,i%3===0?-1:1,1.03+(i%2?-.1:.1));
    }
    // Cell-membrane crossing plates identify station approaches.
    for(let i=0;i<4;i++){const p=curve.getPointAt((i+.24)/4),t=curve.getTangentAt((i+.24)/4);for(let j=-2;j<=2;j++){const b=this.box([p.x+t.x*j*.16,.145,p.z+t.z*j*.16],[1.08,.02,.075],'#f8f0df');b.rotation.y=Math.atan2(t.x,t.z);}}
  }
  private lamp(x:number,z:number,i=0){this.cylinder([x,.7,z],.045,1.25,'#9fa78b');this.sphere([x,1.36,z],[.17,.19,.17],i%2?'#f1dca2':'#e8eed7');this.cylinder([x,.16,z],.16,.13,'#c8c4a9');}
  private vehicle(variant=0){
    const g=new T.Group(),c=[this.plan.accent,'#9fae91','#d8bd88','#9eb9bc'][variant];
    this.box([0,.29,0],[.58,.36,1.08],c,g,.15);this.box([0,.53,.21],[.51,.36,.44],cream,g,.13);
    this.box([0,.57,.455],[.37,.19,.028],glass,g,.035);
    for(const x of [-.27,.27])this.box([x,.57,.22],[.025,.18,.26],glass,g,.025);
    for(const x of [-.32,.32])for(const z of [-.34,.32]){const w=this.cylinder([x,.18,z],.13,.09,'#5f7068',g);w.rotation.z=Math.PI/2;this.sphere([x*1.08,.18,z],[.025,.061,.061],'#e1ddc8',g);}
    for(const x of [-.19,.19])this.box([x,.3,.54],[.1,.07,.025],'#ffedba',g,.015);
    if(variant===2){
      this.box([0,.58,-.18],[.53,.48,.8],cream,g,.15);
      for(const x of [-.275,.275])for(let j=0;j<3;j++)this.box([x,.66,.04-j*.24],[.025,.21,.16],glass,g,.03);
      this.box([0,.87,-.16],[.25,.05,.55],c,g,.035);
      this.signboard(g,'细胞巴士',[0,.93,-.1],.4,.13);
    }else if(variant===3){
      this.box([0,.57,-.2],[.49,.36,.53],c,g,.18);this.box([0,.71,-.12],[.37,.07,.26],glass,g,.04);
    }else if(this.id==='brain'){
      this.box([0,.56,-.23],[.5,.34,.42],'#b19cce',g,.08);this.cylinder([0,.88,-.19],.026,.34,gold,g);this.sphere([0,1.06,-.19],[.07,.07,.07],gold,g);
    }else if(this.id==='immune'){
      this.box([0,.53,-.21],[.48,.36,.42],cream,g,.12);this.box([0,.77,-.2],[.28,.07,.1],'#a598ba',g,.025);
    }else{
      for(let i=0;i<4;i++){const x=(i%2-.5)*.22,z=-.08-Math.floor(i/2)*.25;this.sphere([x,.56,z],[.115,.12,.11],this.id==='gut'?gold:this.id==='kidneys'?'#aad7de':'#eed2b5',g);}
    }
    this.compact(g);return g;
  }
  private resident(variant=0){
    const g=new T.Group(),body=new T.Group();g.add(body);const c=[this.plan.accent,'#9aaa85','#c1a278','#a4b8c7','#b598ad','#dfc18b'][variant];
    this.sphere([0,.42,0],[.19,.24,.15],variant%2?c:cream,body);this.sphere([0,.73,0],[.26,.23,.23],this.id==='immune'?'#f4efe3':['#e7b798','#d6a17e','#ebcbb1'][variant%3],body);
    if(variant%3===0){this.sphere([0,.87,0],[.28,.105,.25],c,body);this.box([0,.875,.21],[.24,.04,.13],c,body,.02);}
    else if(variant%3===1){this.sphere([0,.9,-.05],[.26,.09,.24],'#897a5e',body);this.sphere([-.19,.86,-.06],[.1,.15,.19],'#897a5e',body);}
    else{this.sphere([0,.87,0],[.29,.09,.26],cream,body);this.sphere([0,.95,-.05],[.2,.13,.2],c,body);}
    if(this.id==='heart'||this.id==='lungs'){const hat=this.mesh(new T.TorusGeometry(.15,.045,6,14),'#cf8479',body,[0,.94,0]);hat.rotation.x=Math.PI/2;}
    if(this.id==='immune')this.sphere([0,.89,.12],[.11,.07,.1],'#bba6c9',body);
    for(const x of [-.085,.085])this.sphere([x,.745,.213],[.022,.029,.018],'#5f6359',body);
    if(variant%2)this.box([0,.46,-.2],[.24,.28,.11],c,body,.07);
    else this.box([.22,.38,-.06],[.13,.22,.2],'#c3ab7e',body,.04);this.compact(body);
    for(const side of [-1,1]){const arm=new T.Group();arm.name=side<0?'arm-left':'arm-right';arm.position.set(side*.24,.54,0);this.box([0,-.1,0],[.09,.27,.1],variant%2?c:cream,arm,.04);g.add(arm);}
    for(const side of [-1,1]){const leg=this.box([side*.095,.15,0],[.1,.24,.13],'#788677',g,.045);leg.name=side<0?'leg-left':'leg-right';}
    return g;
  }
  private signboard(parent:T.Object3D,text:string,pos:V,w=1.15,h=.3){
    let material=this.signMaterials.get(text);
    if(!material){
      const canvas=document.createElement('canvas');canvas.width=512;canvas.height=128;
      const ctx=canvas.getContext('2d')!;ctx.fillStyle='#fbefdb';ctx.fillRect(0,0,512,128);
      ctx.strokeStyle=this.plan.accent;ctx.lineWidth=6;ctx.strokeRect(8,8,496,112);
      ctx.fillStyle='#626958';ctx.font='500 49px "Songti SC", "PingFang SC", serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,256,65);
      const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;this.textures.add(texture);
      material=new T.MeshStandardMaterial({map:texture,roughness:.9});this.signMaterials.set(text,material);
    }
    const geometry=this.geometry(`sign-${w}-${h}`,()=>new T.PlaneGeometry(w,h));
    const m=new T.Mesh(geometry,material);m.position.set(...pos);parent.add(m);
  }
  private busStop(g:T.Group,index:number){
    this.box([0,.16,0],[.7,.15,1.75],'#d4cfb9',g,.09);
    for(const z of [-.62,.62])this.cylinder([-.22,.92,z],.035,1.5,'#8d947c',g);
    this.box([0,1.66,0],[.86,.13,1.8],this.plan.accent,g,.11);
    this.box([-.27,.94,0],[.045,.85,1.2],'#b7c7be',g,.035);
    this.box([0,.52,0],[.35,.12,1.1],cream,g,.04);
    this.signboard(g,index===0?'细胞慢行线':'补给街站',[.05,1.48,.9],.63,.18);
  }
  private walker(curve:T.CatmullRomCurve3,seed:number,direction=1,offset=0,open=false){
    const root=this.residentTemplates[seed%6].clone(true),scale=.66+randomAt(seed)*.24;
    root.scale.setScalar(scale);this.dynamicRoot.add(root);this.stats.residents++;
    this.actors.push({root,curve,length:curve.getLength(),direction,offset,seed,open,legs:[root.getObjectByName('leg-left')!,root.getObjectByName('leg-right')!]});
    return root;
  }
  private neighbor(x:number,z:number,heading:number,pose:Neighbor['pose'],seed:number){
    const root=this.residentTemplates[seed%6].clone(true);root.position.set(x,pose==='sit'?.34:.1,z);root.rotation.y=heading;root.scale.setScalar(.74+randomAt(seed)*.18);this.dynamicRoot.add(root);
    if(pose==='read'){
      this.box([0,.5,.27],[.3,.035,.21],'#a5b6aa',root,.015).rotation.x=-.3;
      root.getObjectByName('arm-left')!.rotation.x=-.9;root.getObjectByName('arm-right')!.rotation.x=-.9;
    }
    if(pose==='sit')for(const side of ['left','right'])root.getObjectByName(`leg-${side}`)!.rotation.x=-1.1;
    if(pose==='shop')this.box([.3,.29,.05],[.19,.25,.16],'#dfbb79',root,.035);
    this.neighbors.push({root,pose,phase:seed,heading});this.stats.residents++;
  }
  private bench(x:number,z:number,angle=0){
    const g=this.group(x,z);g.rotation.y=angle;
    for(const xx of [-.52,.52])for(const zz of [-.16,.16])this.box([xx,.24,zz],[.06,.37,.07],'#819078',g,.02);
    for(let i=0;i<3;i++)this.box([0,.45,-.2+i*.17],[1.35,.06,.12],'#bcab83',g,.025);
    for(let i=0;i<3;i++)this.box([0,.65+i*.12,-.26],[1.35,.08,.06],'#c7b792',g,.025);
  }
  private patch(x:number,z:number,rx:number,rz:number,color='#b7c09a'){
    const m=this.mesh(this.geometry('patch',()=>new T.CircleGeometry(1,32)),color,this.staticRoot,[x,.064,z]);m.rotation.x=-Math.PI/2;m.rotation.z=randomAt(x+z)*2;m.scale.set(rx,rz,1);m.castShadow=false;
  }
  private house(x:number,z:number,index:number,angle=0,shop=false){
    const g=this.group(x,z),r=randomAt(index+90),h=shop?1.9+r*1.1:1.2+r*1.9,w=shop?2.1:1.2+r*.35,depth=shop?1.45:1.13;
    const c=['#aeaf8b',this.plan.accent,'#bcac92','#9facaf','#c6b17e'][index%5];g.rotation.y=angle;
    this.box([0,.12,0],[w+.36,.15,depth+.3],'#d1c4a8',g,.1);
    this.box([0,.2+h/2,0],[w,h,depth],['#ebdfc8','#d8d8c2','#e2cbb6','#d9dfd2'][index%4],g,.16);
    if(index%3===0){
      this.box([0,h+.29,0],[w+.21,.19,depth+.23],c,g,.07);
      this.sphere([-.2,h+.5,0],[w*.36,.34,.48],c,g);
      this.box([w*.27,h+.47,-.2],[.35,.28,.35],cream,g,.09);
    }else{
      this.sphere([0,h+.21,0],[w*.6,.35,depth*.68],c,g);
      this.box([0,h+.17,0],[w+.15,.15,depth+.13],c,g,.05);
    }
    const floors=h>2?2:1;
    for(let level=0;level<floors;level++)for(const side of [-1,1]){
      const y=shop?(level===0?.78:Math.min(h-.2,2.43)):1+level*.9;
      this.box([side*w*.29,y,depth/2+.02],[shop?.51:.3,shop&&level===0?.71:.44,.055],index%4===1?'#daca92':glass,g,.04);
      this.box([side*w*.29,y,depth/2+.055],[.025,shop&&level===0?.69:.42,.015],cream,g,.005);
      this.box([side*w*.29,y-.26,depth/2+.09],[.4,.09,.17],c,g,.025);
      if(shop&&level===1){
        this.box([side*w*.29-.19,y,depth/2+.03],[.1,.44,.045],c,g,.015);
        this.box([side*w*.29+.19,y,depth/2+.03],[.1,.44,.045],c,g,.015);
      }
    }
    this.box([0,.57,depth/2+.04],[.35,.8,.08],c,g,.11);
    this.box([0,.7,depth/2+.09],[.23,.29,.025],'#b6c8bd',g,.03);
    this.sphere([.09,.5,depth/2+.1],[.025,.025,.025],gold,g);
    if(shop){
      const names={heart:['ATP 补给铺','氧气邮局','细胞书屋','心肌小铺'],brain:['记忆书屋','突触驿站','胶质花房','信使茶庭'],lungs:['肺泡花房','氧气驿站','云朵补给','清风书屋'],gut:['营养小集','绒毛补给','酶酶工坊','糖原仓库'],kidneys:['水盐小铺','回收驿站','滤液花房','集合书屋'],immune:['抗体邮局','巡逻休憩所','记忆书屋','细胞补给']}[this.id];
      this.signboard(g,names[index%4],[0,1.48,depth/2+.075],w*.87,.3);
      const awning=this.box([0,1.33,depth/2+.36],[w+.1,.09,.68],c,g,.06);awning.rotation.x=.14;
      for(let i=0;i<7;i++)this.box([-w/2+i*w/6,1.33,depth/2+.36],[w/13,.1,.65],cream,g,.012).rotation.x=.14;
      this.box([0,1.25,depth/2+.69],[w+.08,.17,.065],c,g,.04);
      if(h>2.45){
        this.box([0,2.02,depth/2+.23],[w+.05,.1,.53],cream,g,.04);
        for(let i=0;i<7;i++)this.cylinder([-w*.45+i*w*.15,2.22,depth/2+.49],.017,.4,'#829582',g);
        this.box([0,2.44,depth/2+.49],[w,.04,.05],'#829582',g,.012);
      }
      // Vesicle baskets at the storefront: the little neighborhood's daily provisions.
      for(let j=0;j<2;j++){
        this.box([w*.65,.36,.75+j*.46],[.42,.46,.38],'#baa077',g,.045);
        for(let k=0;k<3;k++)this.sphere([w*.65+(k-1)*.11,.62,.78+j*.46],[.09,.09,.09],j?this.plan.accent:'#b8c68b',g);
      }
      this.signboard(g,'今日补给',[w*.64,.85,1.26],.42,.24);
      if(this.id==='lungs'){
        for(let j=0;j<3;j++){this.cylinder([-.75+j*.75,h+.45,0],.22,.4,'#bfceb6',g);this.sphere([-.75+j*.75,h+.72,0],[.24,.22,.24],'#9bbdab',g);}
      }
      if(this.id==='brain')for(let j=0;j<4;j++)this.box([w*.63,.17+j*.065,1.3],[.33,.05,.27],j%2?'#b09eb9':'#b3bf9b',g,.012);
      if(this.id==='immune'&&index%2===0){this.box([-.85,1.76,depth/2+.09],[.34,.51,.055],this.plan.accent,g,.04);this.shield(g,1.77,depth/2+.15);}
    }else{
      this.box([-.42,.28,depth/2+.27],[.36,.35,.27],'#b4a480',g,.06);
      for(let i=0;i<3;i++)this.sphere([-.53+i*.11,.54,depth/2+.3],[.09,.17,.09],'#92a97e',g);
    }
    this.box([0,.14,depth/2+.32],[w*.7,.09,.45],'#eee1c8',g,.04);
    // Side windows and utility pipes keep buildings convincing when seen from behind.
    for(const side of [-1,1]){
      this.box([side*(w/2+.01),1.02,0],[.035,.43,.32],glass,g,.04);
      if(h>2.3)this.box([side*(w/2+.01),h-.47,0],[.035,.4,.32],glass,g,.035);
      this.tube([[side*w*.43,.2,-depth/2-.06],[side*w*.43,h-.03,-depth/2-.06],[0,h-.03,-depth/2-.06]],.028,'#b3ac8c',g);
      for(let level=0;level<floors;level++){
        const y=.96+level*.95;
        this.box([side*w*.27,y,-depth/2-.025],[.35,.46,.055],glass,g,.05);
        this.box([side*w*.27,y,-depth/2-.06],[.025,.44,.02],cream,g,.005);
        this.box([side*w*.27,y-.27,-depth/2-.075],[.46,.08,.15],c,g,.03);
      }
    }
    this.box([0,.54,-depth/2-.035],[.36,.72,.065],c,g,.065);
    this.box([0,.77,-depth/2-.08],[.25,.19,.025],'#c4d0c1',g,.025);
    this.box([0,.15,-depth/2-.28],[.68,.1,.43],'#d5c6a7',g,.04);
    if(shop){
      this.cylinder([w*.64,.4,-.4],.22,.63,'#9aaa96',g);this.sphere([w*.64,.75,-.4],[.24,.08,.24],'#bac4ae',g);
      this.box([-w*.64,.34,-.4],[.4,.44,.4],'#bdab88',g,.05);
      for(let j=0;j<3;j++)this.sphere([-w*.64+(j-1)*.12,.62,-.4],[.085,.1,.09],'#c5cfa6',g);
    }
    this.stats.buildings++;
  }
  private plant(x:number,z:number,i:number){
    const size=.75+randomAt(i+5)*.65,g=this.group(x,z);g.scale.setScalar(size);g.rotation.y=randomAt(i)*6.28;
    this.patch(x,z,.65*size,.53*size,'#b6bf98');
    this.cylinder([0,.72,0],.07,1.35,'#a28b64',g,.045);
    this.tube([[0,.65,0],[.26,1.14,.05],[.42,1.36,.08]],.045,'#a28b64',g);
    const crown=new T.Group();g.add(crown);crown.position.y=1.3;
    const palette=['#92ab7c','#a3b48a','#b4bb88','#8ca890'];
    this.sphere([-.17,.14,-.08],[.58,.65,.5],palette[i%4],crown);
    this.sphere([.35,.06,.08],[.43,.45,.44],palette[(i+1)%4],crown);
    this.sphere([.06,.52,.12],[.41,.37,.39],palette[i%4],crown);
    for(let j=0;j<3;j++)this.sphere([-.3+j*.21,.2+j*.05,.42],[.055,.08,.05],i%3?gold:'#d6a795',crown);
    if(i%3===0)this.animatePart(g,crown,'sway',i);
  }
  private neighborhoods(){
    const occupied:Point2[]=[...this.streetFurniture],seed=Object.keys(cityPlans).indexOf(this.id)*117;
    for(let i=0;i<520;i++){
      const x=(randomAt(i*3+seed)-.5)*36,z=(randomAt(i*3+1+seed)-.5)*29;
      if(z>10.7||(Math.abs(x)<1.7&&z>9)||(x/19.5)**2+(z/15.8)**2>1)continue;
      const nearRoad=Math.min(...this.roadSamples.map(p=>Math.hypot(p.x-x,p.z-z)));
      const nearLandmark=Math.min(...this.plan.landmarks.map(l=>Math.hypot(l.position[0]-x,l.position[1]-z)));
      if(nearRoad<2.35||nearLandmark<3.5||occupied.some(p=>Math.hypot(p[0]-x,p[1]-z)<2.15))continue;
      occupied.push([x,z]);
      const nearest=this.roadSamples.reduce((a,b)=>Math.hypot(a.x-x,a.z-z)<Math.hypot(b.x-x,b.z-z)?a:b);
      const angle=Math.atan2(nearest.x-x,nearest.z-z);
      if(i%3===0){this.patch(x,z,1.2,.8);this.plant(x+.3,z,i);if(i%2)this.bench(x-.6,z+.1,angle);}
      else{
        this.house(x,z,i,angle);
        const path=new T.CatmullRomCurve3([new T.Vector3(x,.1,z),new T.Vector3((x+nearest.x)/2,.1,(z+nearest.z)/2),new T.Vector3(nearest.x,.1,nearest.z)]);
        this.ribbon(path,.38,'#d7ceb6',.074);
      }
    }
    for(let i=0;i<55;i++){
      const a=randomAt(i+seed)*Math.PI*2,r=.87+randomAt(i+51)*.09,x=Math.cos(a)*21*r,z=Math.sin(a)*18*r;
      if(z>9||occupied.some(p=>Math.hypot(p[0]-x,p[1]-z)<1.2))continue;
      this.plant(x,z,i+71);
    }
  }
  private livingQuarter(){
    const promenade=new T.CatmullRomCurve3([[-16,10],[-12,14],[-7,17.5],[0,18.3],[7,17],[13,13.2],[16,8.8]].map(([x,z])=>new T.Vector3(x,.12,z)),false,'catmullrom',.3);
    this.promenade=promenade;
    this.ribbon(promenade,1.35,'#e5d9bf',.08);this.ribbon(promenade,.07,'#d2c2a0',.095,.62);
    for(let i=0;i<78;i++){
      const p=promenade.getPointAt(i/78),t=promenade.getTangentAt(i/78);
      const seam=this.box([p.x,.092,p.z],[1.24,.009,.014],'#cfc4ab',this.staticRoot,.002);seam.rotation.y=Math.atan2(t.x,t.z);
    }
    const homes:Point2[]=[[-14,8.1],[-12,11],[-8.7,13.3],[-5.2,14.6],[-1.5,15.1],[2.5,15.1],[6.4,14.3],[10,11.8],[13,8.4]];
    homes.forEach(([x,z],i)=>{
      const angle=x< -10?-.6:x>10?.65:x/40,variant=Object.keys(cityPlans).indexOf(this.id);
      this.house(x,z,300+i+variant*13,angle,true);
      if(i%2===0){this.neighbor(x-.6,z+1.75,angle+Math.PI,'shop',i+10);this.neighbor(x+.4,z+2,angle+2.1,'chat',i+24);}
      if(i%3===0){this.bench(x-1.6,z+1.6,angle);this.neighbor(x-1.6,z+1.68,angle,'sit',i+31);}
    });
    for(let i=0;i<19;i++)this.walker(promenade,200+i,i%2?1:-1,(i%2?-.22:.22),true);
    // Two neighbors share a table beneath a membrane canopy.
    for(const [x,z,index] of [[.6,17,0],[-7.3,15.5,1],[8.4,14.6,2]]){
      this.cylinder([x,.55,z],.37,.09,'#c2ad86');this.cylinder([x,.3,z],.04,.47,'#91a08c');
      for(const side of [-1,1]){
        this.cylinder([x+side*.62,.31,z],.21,.42,'#bcbd9a');
        this.neighbor(x+side*.62,z,side<0?Math.PI/2:-Math.PI/2,index===1?'read':'sit',index*10+(side+1));
      }
      this.cylinder([x,1.28,z],.025,1.4,'#b5a07d');
      const canopy=this.sphere([x,2.01,z],[1.02,.18,.94],index%2?'#a7b698':'#dfc69a');
      this.animations.push({object:canopy,type:'sway',base:0,phase:index*2});
      for(const side of [-1,1])this.cylinder([x+side*.18,.65,z+.08],.055,.13,cream);
    }
    // A quiet organelle courtyard, set back from the main circulation roads.
    this.patch(-16,5.2,2.25,1.85,'#b9c4a0');this.bench(-16.4,5.7,-.6);this.neighbor(-16.3,5.75,-.6,'read',66);
    this.cylinder([-15.4,.23,4.4],.89,.3,'#ccbea3');this.cylinder([-15.4,.4,4.4],.77,.07,'#a6c4bc');
    this.sphere([-15.4,.64,4.4],[.2,.36,.2],'#c6d8c5');
    this.plant(-17.6,4.6,21);this.plant(-17.2,7.1,25);
    if(this.id==='kidneys'){
      // A slow water channel and tiny footbridges give the recycling city its own waterfront.
      const canal=new T.CatmullRomCurve3([[-8,18.65],[-3,19],[2,19],[7,18]].map(([x,z])=>new T.Vector3(x,.11,z)));
      this.ribbon(canal,.68,'#adbda9',.081);this.ribbon(canal,.48,'#99bab7',.089);
      for(const t of [.2,.53,.83]){
        const p=canal.getPointAt(t),v=canal.getTangentAt(t),bridge=this.group(p.x,p.z);bridge.rotation.y=Math.atan2(v.x,v.z);
        for(let j=0;j<6;j++)this.box([0,.18,-.5+j*.2],[.6,.08,.16],'#bfac83',bridge,.02);
        for(const x of [-.32,.32]){this.box([x,.44,0],[.035,.035,1.25],'#b4a684',bridge,.01);for(const z of [-.5,.5])this.cylinder([x,.3,z],.024,.3,'#b4a684',bridge);}
      }
    }
    if(this.id==='gut')for(const x of [-5.8,4.4]){
      const g=this.group(x,17);this.box([0,.55,0],[1.2,.65,.62],'#c2a77d',g,.07);
      for(let j=0;j<8;j++)this.sphere([-.45+(j%4)*.3,.93,-.13+Math.floor(j/4)*.25],[.13,.13,.12],j%2?'#e4b172':'#b6be85',g);
      for(const side of [-1,1])this.cylinder([side*.57,1.15,0],.03,1.7,'#a48f6e',g);
      this.box([0,2.04,0],[1.5,.12,.86],'#d4b679',g,.08);this.signboard(g,'营养小集',[0,1.8,.45],.85,.22);
      this.neighbor(x,16.5,0,'shop',50+Math.round(x));
    }
    for(const [x,z,i] of [[-13,14,101],[-10.7,15.6,104],[-3.5,17,107],[5.4,16.2,109],[11.5,13.7,111],[16,6.3,114]]){
      let nearest=0,distance=Infinity;
      for(let j=0;j<=120;j++){const p=promenade.getPointAt(j/120),d=Math.hypot(p.x-x,p.z-z);if(d<distance){distance=d;nearest=j/120;}}
      const p=promenade.getPointAt(nearest),v=promenade.getTangentAt(nearest);
      this.plant(distance<1.6?p.x+v.z*1.6:x,distance<1.6?p.z-v.x*1.6:z,i);
    }
    for(let i=0;i<15;i++){
      const p=promenade.getPointAt((i+.3)/15),v=promenade.getTangentAt((i+.3)/15);
      if(i%3===0)this.lamp(p.x+v.z*.9,p.z-v.x*.9,i);
      else{this.patch(p.x+v.z*.92,p.z-v.x*.92,.38,.25,'#abb790');for(let j=0;j<3;j++)this.sphere([p.x+v.z*.9+(j-1)*.13,.2,p.z-v.x*.9],[.1,.13,.1],i%2?'#d9b1a1':'#cfcd8e');}
    }
    // Side alleys connect the neighborhood to the physiological service streets.
    for(const x of [0]){
      const edge=Math.max(...this.roadSamples.filter(p=>Math.abs(p.x)<1).map(p=>p.z))+1.12;
      const path=new T.CatmullRomCurve3([[x,edge],[x-.35,(edge+13.5)/2],[x+.25,13.5]].map(([px,pz])=>new T.Vector3(px,.13,pz)));
      this.ribbon(path,.62,'#d8cfb8',.072);for(let i=0;i<3;i++)this.walker(path,250+i+x+10,1,.12,true);
    }
    const label=document.createElement('button');label.className='district-label life-label';label.innerHTML='<b>✳</b><span>细胞生活街</span><i>↗</i>';label.setAttribute('aria-label','漫步细胞生活街');label.addEventListener('click',()=>this.onPOI('life'));this.labelRoot.append(label);this.labels.set('life',label);
  }
  private base(g:T.Group,r=2.25){this.cylinder([0,.15,0],r,.24,'#e8ddc4',g);this.cylinder([0,.3,0],r-.13,.12,cream,g);this.stats.buildings++;}
  private windows(g:T.Group,r:number,y:number,n=12){for(let i=0;i<n;i++){const a=i/n*Math.PI*2;const w=this.box([Math.sin(a)*r,y,Math.cos(a)*r],[.19,.35,.035],glass,g,.035);w.rotation.y=a;}}
  private sign(g:T.Group,text:string){
    // Names remain accessible DOM labels; this panel represents the building's cell nucleus.
    const c=this.plan.accent;this.box([0,1.05,1.3],[.7,.35,.08],c,g,.06);for(let i=0;i<3;i++)this.box([-.21+i*.21,1.05,1.35],[.09,.035,.03],cream,g,.01);
  }
  private landmark(l:Landmark,index:number){
    const [x,z]=l.position,g=this.group(x,z);if(l.id==='coronary')g.scale.setScalar(.85);this.base(g);
    switch(l.kind){
      case 'pump':this.pump(g,index);break;
      case 'clock':this.clock(g);break;
      case 'cortex':this.cortex(g);break;
      case 'relay':this.relay(g);break;
      case 'memory':this.memory(g);break;
      case 'alveoli':this.alveoli(g);break;
      case 'trachea':this.trachea(g);break;
      case 'exchange':this.exchange(g);break;
      case 'stomach':this.stomach(g);break;
      case 'villi':this.villi(g);break;
      case 'liver':this.liver(g);break;
      case 'lymph':this.lymph(g);break;
      case 'filter':this.filter(g);break;
      case 'tubule':this.tubule(g);break;
      case 'reservoir':this.reservoir(g);break;
      case 'citadel':this.citadel(g);break;
      case 'scanner':this.scanner(g);break;
      case 'academy':this.academy(g);break;
      case 'antibody':this.antibody(g);break;
    }
    for(let i=0;i<3;i++){const a=(i/3)*Math.PI*2+.5;this.lamp(x+Math.sin(a)*2.35,z+Math.cos(a)*2.35,index);}
    const collider=new T.Mesh(new T.CylinderGeometry(2.35,2.35,5.6,12),new T.MeshBasicMaterial({visible:false}));collider.position.set(x,2.8,z);collider.userData.poi=l.id;this.scene.add(collider);this.hitboxes.push(collider);this.geometries.add(collider.geometry);
    const label=document.createElement('button');label.className='district-label';label.style.setProperty('--city',this.plan.accent);label.innerHTML=`<b>${String(index+1).padStart(2,'0')}</b><span>${l.name}</span><i>↗</i>`;label.setAttribute('aria-label',`近看${l.name}`);label.addEventListener('click',()=>this.onPOI(l.id));this.labelRoot.append(label);this.labels.set(l.id,label);
  }
  private animatePart(g:T.Group,object:T.Object3D,type:Animation['type'],phase=0){
    g.updateWorldMatrix(true,true);const p=object.getWorldPosition(new T.Vector3());const q=object.getWorldQuaternion(new T.Quaternion());const s=object.getWorldScale(new T.Vector3());this.dynamicRoot.attach(object);object.position.copy(p);object.quaternion.copy(q);object.scale.copy(s);this.animations.push({object,type,base:object.position.y,phase,scale:s.clone()});
  }
  private pump(g:T.Group,index:number){
    const c=index<2?'#95afbd':'#d68577';
    this.box([0,.85,0],[2.8,1.1,2.1],cream,g,.2);this.box([0,1.48,0],[3,.18,2.25],c,g,.08);
    for(const side of [-1,1]){
      this.cylinder([side*.75,2.15,-.15],.67,1.2,'#f0d8bf',g);
      const piston=this.sphere([side*.75,2.9,-.15],[.76,.6,.74],c,g);this.animatePart(g,piston,'pulse',side*.1);
      this.tube([[side*.75,2.1,-.1],[side*1.6,2.3,-.1],[side*1.85,1.2,-.1],[side*1.95,.5,.3]],.15,c,g);
      this.box([side*.73,.88,1.07],[.5,.4,.05],glass,g,.07);
    }
    this.cylinder([0,3.1,-.7],.18,1.8,c,g);this.tube([[0,3.6,-.7],[0,4.3,-.7],[.6,4.5,-.7],[.85,4.1,-.7]],.19,c,g);
    this.box([0,.76,1.1],[.47,.85,.1],c,g,.15);this.sign(g,'PUMP');
    for(const side of [-1,1]){
      this.box([side*.8,.9,-1.07],[.5,.4,.05],glass,g,.07);
      const window=this.box([side*1.42,.9,0],[.04,.4,.52],glass,g,.05);window.rotation.y=0;
      this.tube([[side*1.25,.5,-.85],[side*1.25,1.3,-.85],[side*.7,1.3,-1.15]],.06,'#c6b789',g);
    }
    const rotor=this.mesh(new T.TorusGeometry(.34,.045,7,30),gold,g,[0,1.7,1.16]);this.animatePart(g,rotor,'rotate');
  }
  private clock(g:T.Group){
    this.cylinder([0,1.8,0],.83,3,cream,g);this.cylinder([0,3.4,0],1.02,.22,this.plan.accent,g);this.sphere([0,3.78,0],[1,.52,1],this.plan.accent,g);
    this.windows(g,.84,2.1,8);this.box([0,1.9,.87],[.68,.85,.05],'#cfb078',g,.15);
    this.cylinder([0,4.5,0],.045,.7,gold,g);const pulse=this.sphere([0,4.97,0],[.22,.22,.22],'#f4ce7b',g);this.animatePart(g,pulse,'pulse');
    this.tube([[-.25,1.86,.92],[-.1,2.1,.92],[0,1.64,.92],[.15,1.92,.92],[.27,1.92,.92]],.025,cream,g);
  }
  private cortex(g:T.Group){
    this.cylinder([0,1.1,0],1.7,1.5,cream,g);this.windows(g,1.72,1.2,16);
    this.cylinder([0,2,0],1.87,.28,'#c6b0d6',g);
    for(let i=0;i<12;i++){const a=i/12*Math.PI*2;this.cylinder([Math.cos(a)*1.55,2.5,Math.sin(a)*1.55],.08,.85,cream,g);}
    this.cylinder([0,3,0],1.85,.17,'#a491b7',g);
    for(const s of [-1,1]){
      this.sphere([s*.7,3.65,0],[1,1.02,1.4],'#c3aed6',g);
      for(let j=0;j<5;j++){const z=-.95+j*.46;this.tube([[s*.12,4.36,z],[s*.7,4.51,z],[s*1.46,4.02,z],[s*1.54,3.5,z+.1]],.063,'#ab8fbd',g);}
    }
    const ring=this.mesh(new T.TorusGeometry(2.15,.045,6,64),gold,g,[0,3.1,0]);ring.rotation.x=Math.PI/2;this.animatePart(g,ring,'rotate');
    this.box([0,.8,1.72],[.65,.9,.12],'#b4a0cb',g,.2);
  }
  private relay(g:T.Group){
    for(let i=0;i<3;i++){
      const x=(i-1)*1.16,h=1.7+(i===1?1:.1);
      this.cylinder([x,.5+h/2,0],.47,h,cream,g);this.sphere([x,.5+h,0],[.59,.37,.58],this.plan.accent,g);
      this.cylinder([x,h+1,0],.045,.85,gold,g);const orb=this.sphere([x,h+1.5,0],[.17,.17,.17],'#f5d88a',g);this.animatePart(g,orb,'pulse',i);
      for(let j=0;j<3;j++)this.box([x,.9+j*.47,.46],[.27,.22,.04],glass,g,.035);
      const dish=this.mesh(new T.TorusGeometry(.4,.055,7,25),this.plan.accent,g,[x,h+.95,0]);dish.rotation.x=.6;
    }
    this.box([0,.56,1.05],[2.5,.55,.7],'#e1d8ba',g,.13);this.sign(g,'SIGNAL');
  }
  private memory(g:T.Group){
    for(let i=0;i<5;i++){
      const x=(i-2)*.57,h=1.5+Math.sin(i*.9)*.55;
      this.box([x,.4+h/2,0],[.45,h,1.55],i%2?cream:'#d9c9b2',g,.09);
      this.box([x,.5+h,0],[.52,.14,1.7],this.plan.accent,g,.05);
      for(let j=0;j<3;j++)this.box([x,.85+j*.35,.79],[.28,.045,.035],'#b7a582',g,.01);
    }
    this.tube([[-1.6,1,-.8],[-1.7,2.5,-.8],[0,3.4,-.8],[1.7,2.5,-.8],[1.6,1,-.8]],.09,gold,g);
    this.sphere([0,3.4,-.8],[.23,.22,.23],'#e4d39a',g);
  }
  private alveoli(g:T.Group){
    this.cylinder([0,.66,0],1.78,.52,cream,g);this.windows(g,1.79,.7,14);
    for(let i=0;i<7;i++){
      const a=i*Math.PI/3,r=i===6?0:1.05,x=Math.cos(a)*r,z=Math.sin(a)*r;
      this.cylinder([x,1.3,z],.44,.7,'#e1e7cf',g);
      const dome=this.sphere([x,2.15+(i===6?.65:0),z],[.76,.93,.76],i%2?'#a4cabb':'#b5d5c8',g);this.animatePart(g,dome,'breath',i*.1);
      this.sphere([x+.24,2.37+(i===6?.65:0),z+.54],[.16,.19,.055],'#e7f0da',g);
    }
    const ring=this.mesh(new T.TorusGeometry(1.95,.1,7,60),'#da9e91',g,[0,1.3,0]);ring.rotation.x=Math.PI/2;
    for(let i=0;i<5;i++){const bubble=this.sphere([(i-2)*.5,3.5+i*.28,.1],[.12,.12,.12],'#d9efdf',g);this.animatePart(g,bubble,'float',i);}
  }
  private trachea(g:T.Group){
    this.cylinder([0,2.3,0],.64,4,cream,g);
    for(let i=0;i<8;i++){const ring=this.mesh(new T.TorusGeometry(.65,.065,6,28),'#b6c7ba',g,[0,.6+i*.45,0]);ring.rotation.x=Math.PI/2;}
    this.cylinder([0,4.4,0],.85,.25,'#8eb7a9',g);this.cylinder([0,4.55,0],.63,.12,'#6f9b95',g);
    for(const s of [-1,1])this.tube([[0,2.7,0],[s*.8,2.2,0],[s*1.7,1.65,0]],.36,'#d4dfc5',g);
    this.box([0,.63,1],[1.5,.6,.85],cream,g,.15);this.sign(g,'AIR');
  }
  private exchange(g:T.Group){
    this.box([0,.9,-.45],[2.9,1.13,1.5],cream,g,.19);this.box([0,1.55,-.45],[3.15,.18,1.7],this.plan.accent,g,.07);
    for(let i=0;i<4;i++)this.box([-.99+i*.66,1.05,.32],[.36,.47,.04],glass,g,.07);
    for(const s of [-1,1]){
      this.cylinder([s*1.3,.85,1],.41,1, '#e2d9bb',g);this.sphere([s*1.3,1.5,1],[.45,.28,.44],this.plan.accent,g);
      this.tube([[s*1.3,1.65,1],[s*1.3,2.7,1],[s*.5,2.7,1]],.08,gold,g);
    }
    for(let i=0;i<5;i++)this.sphere([-.5+i*.25,.7,1.1],[.12,.13,.12],i%2?'#cfd8b3':'#e5c284',g);
    this.sign(g,'O2');
  }
  private stomach(g:T.Group){
    this.box([0,.9,0],[3,1.2,2.25],cream,g,.23);this.box([0,1.58,0],[3.2,.23,2.4],'#d2aa76',g,.1);
    const shape=new T.Shape();shape.moveTo(-.55,1.3);shape.bezierCurveTo(-.55,.4,-.4,.35,0,.5);shape.bezierCurveTo(.5,1.5,1.4,1.05,1.4,.35);shape.bezierCurveTo(1.35,-.75,.2,-1.05,-.65,-.7);shape.bezierCurveTo(-1.4,-.2,-1.1,.4,-.9,1.3);shape.closePath();
    this.mesh(new T.ExtrudeGeometry(shape,{depth:.8,bevelEnabled:true,bevelSize:.16,bevelThickness:.2,bevelSegments:3,curveSegments:20}),'#dfb173',g,[0,2.9,-.5]);
    this.tube([[-.7,3.9,-.1],[-.7,4.6,-.1],[-1.4,4.9,-.1]],.23,'#c59867',g);
    for(const s of [-1,1]){this.box([s*.9,.9,1.15],[.56,.5,.05],glass,g,.07);const gear=this.mesh(new T.TorusGeometry(.36,.075,6,18),gold,g,[s*.9,1.9,1.26]);this.animatePart(g,gear,'rotate',s);}
    this.box([0,.66,1.35],[.7,.6,.7],'#b99264',g,.1);
  }
  private villi(g:T.Group){
    for(let i=0;i<3;i++){
      this.box([0,.38+i*.28,(i-1)*.96],[3.6,.23,1.02],i%2?'#d8c291':'#e7d6aa',g,.1);
      for(let j=0;j<5;j++){const x=(j-2)*.66,z=(i-1)*.96,h=.8+(j%2)*.3;
        this.cylinder([x,.62+i*.28+h/2,z],.19,h,'#f1d69d',g);this.sphere([x,.62+i*.28+h,z],[.24,.29,.24],'#e7bd71',g);
        this.tube([[x,.7,z],[x+.05,1.2+i*.3,z],[x,1.4+i*.3,z]],.03,'#d48f78',g);
        const orb=this.sphere([x,1.8+i*.28,z],[.075,.075,.075],gold,g);this.animatePart(g,orb,'float',i+j);
      }
    }
  }
  private liver(g:T.Group){
    this.box([0,1,0],[3.5,1.4,2.15],cream,g,.2);this.sphere([-.3,2,0],[1.9,.7,1.25],'#b98a68',g);
    for(let i=0;i<4;i++)this.box([-.98+i*.65,.85,1.09],[.42,.65,.07],'#ac9e7e',g,.08);
    this.sphere([1.16,1.76,.76],[.23,.38,.2],'#aac093',g);
    for(let i=0;i<4;i++)this.box([-1.35+i*.86,.52,1.63],[.51,.33,.49],i%2?'#dec18a':'#d5ab71',g,.055);
    this.tube([[-1.8,1.1,-.4],[-1.9,2.7,-.4],[0,2.9,-.4]],.1,'#a6a8be',g);
  }
  private lymph(g:T.Group){
    for(const s of [-1,1]){this.cylinder([s*1.26,1.2,0],.45,1.8,cream,g);this.sphere([s*1.26,2.23,0],[.59,.44,.58],this.plan.accent,g);this.box([s*1.26,1.25,.45],[.25,.4,.04],glass,g,.06);}
    this.tube([[-1.26,2.25,0],[-.8,3.1,0],[.8,3.1,0],[1.26,2.25,0]],.24,'#c2d1aa',g);
    this.box([0,.45,.1],[1.25,.14,2.85],'#aabc99',g,.06);
    for(let i=0;i<5;i++)this.box([0,.54,-1.05+i*.5],[1.12,.02,.07],cream,g,.01);
    this.sphere([0,3.25,0],[.35,.32,.2],cream,g);
  }
  private filter(g:T.Group){
    this.cylinder([0,.66,0],1.75,.65,cream,g);this.cylinder([0,1.05,0],1.57,.14,'#92c0c8',g);
    for(let i=0;i<5;i++){const a=i*1.25;const ring=this.mesh(new T.TorusGeometry(.79,.14,7,36),i%2?'#d49491':'#b8a0b0',g,[Math.cos(a)*.31,1.7,Math.sin(a)*.31]);ring.rotation.set(i*.6,i*.8,.4);}
    this.sphere([0,1.78,0],[1.8,1.25,1.8],'#c8e1df',g,true);
    this.tube([[-1.9,.7,0],[-1.5,1.9,0],[0,2.6,0],[1.5,1.9,0],[1.9,.7,0]],.095,cream,g);
    this.tube([[0,1.1,1.5],[0,.65,2.1],[.9,.5,2.2]],.16,'#91bec8',g);
    for(let i=0;i<4;i++){const b=this.sphere([(i-1.5)*.45,1.5,.8],[.1,.1,.1],'#dbf2e6',g);this.animatePart(g,b,'float',i);}
  }
  private tubule(g:T.Group){
    this.box([0,.42,0],[3.6,.18,3.4],'#ccdcd5',g,.25);
    for(let i=0;i<3;i++){
      const x=(i-1)*1.04;
      this.tube([[x-.32,.75,-1.3],[x-.32,.75,.8],[x,.75,1.25],[x+.32,.75,.8],[x+.32,.75,-1.3]],.15,'#95c0bf',g);
      this.cylinder([x-.32,1.1,-1.3],.28,.9,cream,g);this.sphere([x-.32,1.65,-1.3],[.36,.25,.36],this.plan.accent,g);
      const handle=this.mesh(new T.TorusGeometry(.2,.035,6,20),'#c5ad76',g,[x+.32,1.12,-1.1]);handle.rotation.x=Math.PI/2;this.animatePart(g,handle,'rotate',i);
    }
    this.tube([[-1.65,1,-.3],[-1.65,2.3,-.3],[1.65,2.3,-.3],[1.65,1,-.3]],.075,gold,g);
  }
  private reservoir(g:T.Group){
    this.cylinder([0,.62,0],1.87,.62,cream,g);this.cylinder([0,.96,0],1.69,.1,'#97c4cb',g);
    const water=this.sphere([0,1.04,0],[1.5,.1,1.5],'#b9ded9',g);this.animatePart(g,water,'breath');
    for(let i=0;i<8;i++){const a=i/8*Math.PI*2;this.cylinder([Math.cos(a)*1.86,1.17,Math.sin(a)*1.86],.055,.73,'#bfbd96',g);}
    const rail=this.mesh(new T.TorusGeometry(1.86,.045,6,60),'#c8c29c',g,[0,1.51,0]);rail.rotation.x=Math.PI/2;
    this.tube([[0,.8,-1.7],[0,2.5,-1.7],[0,2.65,-.3]],.14,'#8baeb7',g);
    this.sphere([0,2.1,-.3],[.12,.28,.12],'#c0e0dc',g);
  }
  private shield(g:T.Group,y:number,z:number){const shape=new T.Shape();shape.moveTo(0,.65);shape.lineTo(.55,.43);shape.lineTo(.48,-.22);shape.quadraticCurveTo(.3,-.58,0,-.8);shape.quadraticCurveTo(-.3,-.58,-.48,-.22);shape.lineTo(-.55,.43);shape.closePath();this.mesh(new T.ExtrudeGeometry(shape,{depth:.09,bevelEnabled:true,bevelSize:.045,bevelThickness:.03,bevelSegments:2}),cream,g,[0,y,z]);this.tube([[-.26,y-.08,z+.16],[-.04,y-.28,z+.16],[.29,y+.17,z+.16]],.055,'#94ad80',g);}
  private citadel(g:T.Group){
    this.cylinder([0,1.05,0],1.8,1.4,cream,g);this.windows(g,1.81,1.1,12);this.sphere([0,2.3,0],[1.95,1.25,1.75],'#a3bc91',g);
    for(let i=0;i<6;i++){const a=i*Math.PI/3;this.sphere([Math.sin(a)*1.22,2.8,Math.cos(a)*1.02],[.38,.33,.35],'#bdcfa9',g);}
    this.shield(g,2.1,1.63);this.cylinder([0,3.65,0],.05,1, '#b0ad81',g);this.sphere([0,4.22,0],[.22,.22,.22],gold,g);
  }
  private scanner(g:T.Group){
    this.box([0,.53,0],[3.5,.32,2],cream,g,.16);
    for(const s of [-1,1]){this.box([s*1.3,1.43,0],[.47,1.55,.65],'#9cb58b',g,.13);this.sphere([s*1.3,2.3,0],[.32,.22,.35],cream,g);}
    const ring=this.mesh(new T.TorusGeometry(1.05,.11,8,48),'#c4cea2',g,[0,1.6,0]);this.animatePart(g,ring,'rotate');
    for(let i=0;i<4;i++){const a=i*Math.PI/2;this.sphere([Math.cos(a),1.6+Math.sin(a),.1],[.12,.12,.12],gold,g);}
    this.box([1.6,.9,1.3],[.55,1,.6],cream,g,.08);this.box([1.6,1.1,1.62],[.36,.3,.02],glass,g,.03);
  }
  private academy(g:T.Group){
    this.box([0,1.15,-.5],[3.1,1.6,1.5],cream,g,.2);this.box([0,2.02,-.5],[3.3,.2,1.7],'#9aad82',g,.08);
    for(let i=0;i<5;i++)this.box([-1.05+i*.52,1.4,.28],[.26,.48,.06],glass,g,.04);
    this.shield(g,2.6,-.48);
    for(let i=0;i<6;i++){const x=(i%3-1)*.75,z=.85+Math.floor(i/3)*.6;this.cylinder([x,.44,z],.25,.14,'#c2cda9',g);this.sphere([x,.77,z],[.19,.26,.2],cream,g);this.sphere([x,.86,z+.15],[.08,.09,.055],'#b1a3bd',g);}
  }
  private antibody(g:T.Group){
    this.box([0,1.03,0],[3.1,1.3,2.1],cream,g,.2);this.box([0,1.76,0],[3.3,.2,2.3],'#a8ba8f',g,.08);
    for(let i=0;i<3;i++){const x=(i-1)*.93;this.cylinder([x,2.2,0],.26,.8,'#cfdbc0',g);this.tube([[x,2.2,0],[x,2.85,0],[x-.36,3.2,0]],.095,'#a692bf',g);this.tube([[x,2.85,0],[x+.36,3.2,0]],.095,'#a692bf',g);this.box([x,.96,1.07],[.46,.6,.05],glass,g,.07);}
    this.shield(g,1.06,1.15);
  }
  private specialInfrastructure(){
    if(this.id==='brain'){
      for(const l of this.plan.landmarks.slice(1)){
        const [x,z]=l.position,points:V[]=[[0,3,0],[x*.45,3.5,z*.45],[x,2.8,z]];
        const curve=this.tube(points,.07,'#cbb77f');
        for(let i=0;i<4;i++){const light=this.sphere([0,0,0],[.11,.11,.11],'#ffdf8c',this.dynamicRoot);this.animations.push({object:light,type:'signal',phase:i/4,base:0,curve});}
        for(let j=0;j<6;j++){const p=curve.getPoint((j+.5)/6);const sleeve=this.mesh(new T.CapsuleGeometry(.16,.34,3,10),'#c5b9d0',this.staticRoot,[p.x,p.y,p.z]);sleeve.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),curve.getTangent((j+.5)/6));}
      }
    }
    if(this.id==='lungs')for(const s of [-1,1]){
      this.tube([[0,2.6,-7],[s*2.4,2.5,-5],[s*6,1.6,-2.6]],.28,'#e2ddc3');
      this.tube([[s*3,2.2,-4.6],[s*4,1.4,0],[s*6,1.1,5]],.16,'#d1d9ba');
    }
    if(this.id==='heart'){
      for(const x of [-5,5]){
        this.tube([[x,1.3,-2.6],[x,1.55,-.8],[x,1.1,1.8]],.26,x<0?'#9cb9c4':'#d79789');
        const gate=this.box([x,1.1,-.25],[.65,.07,.55],gold,this.dynamicRoot,.04);this.animations.push({object:gate,type:'gate',phase:0,base:1.1});
      }
      this.tube([[-4.4,3.9,3.3],[-2,4.8,2.4],[-1,2.5,-.5]],.15,'#a9bacb');
      this.tube([[5,4.5,3],[2.6,5.3,3],[1,2.5,5.8]],.17,'#d79485');
    }
    if(this.id==='gut'){
      const curve=this.tube([[-5,1.1,-2.8],[-1.5,1.1,-2.2],[3,1.1,-1.5],[3.5,1.1,2.8],[.5,1.1,4.6],[-3.8,1.1,3.5]],.2,'#d0ac7e');
      for(let i=0;i<14;i++){const crate=this.box([0,0,0],[.26,.25,.26],i%2?gold:'#e8d2a0',this.dynamicRoot,.05);this.animations.push({object:crate,type:'signal',phase:i/14,base:.2,curve});}
      for(let i=0;i<7;i++){const p=curve.getPoint(i/6);this.cylinder([p.x,.5,p.z],.08,.9,'#b9aa85');}
    }
    if(this.id==='kidneys')for(const x of [-6,6]){
      const curve=this.tube([[x,1,-2.8],[x-1.2,.55,0],[x-1.5,.55,4.8],[x,.55,6],[x+1.5,.55,4.8],[x+1.2,.55,0]],.22,'#97bbc5');
      for(let i=0;i<10;i++){const drop=this.sphere([0,0,0],[.105,.09,.105],'#e0f6e9',this.dynamicRoot);this.animations.push({object:drop,type:'signal',phase:i/10,base:.08,curve});}
      this.tube([[x,1,6],[x*.5,.7,7.4],[0,.65,6.7]],.15,'#bccbc0');
    }
    if(this.id==='immune'){
      for(let i=0;i<6;i++){
        const a=i*Math.PI/3,x=Math.cos(a)*13.4,z=Math.sin(a)*11.8;
        this.cylinder([x,.8,z],.62,1.4,cream);this.sphere([x,1.75,z],[.79,.58,.75],'#a7bf91');
        this.cylinder([x,2.45,z],.055,.9,gold);this.sphere([x,2.96,z],[.16,.16,.16],'#e8d49b');
        const next=(i+1)*Math.PI/3,nx=Math.cos(next)*13.4,nz=Math.sin(next)*11.8;this.tube([[x,.57,z],[(x+nx)/2,.57,(z+nz)/2],[nx,.57,nz]],.19,'#b5c6a4');
        this.stats.buildings++;
      }
    }
  }
  private neighborhoodSignature(){
    if(this.id==='brain'){
      const curve=this.tube([[-12,4.3,11],[-5,4.6,14.6],[2.5,4.8,15.1],[10,4.2,11.8]],.045,'#baa67b');
      for(let i=0;i<10;i++){const p=curve.getPoint(i/9);this.sphere([p.x,p.y,p.z],[.16,.16,.16],'#cfbb9b');const light=this.sphere([0,0,0],[.1,.1,.1],gold,this.dynamicRoot);this.animations.push({object:light,type:'signal',base:0,phase:i/10,curve});}
    }else if(this.id==='lungs'){
      for(const x of [-5,2.5,10]){
        this.tube([[x-1.3,.2,13.3],[x-1.3,2.8,13.3],[x,3.5,13.3],[x+1.3,2.8,13.3],[x+1.3,.2,13.3]],.055,'#b3cbb5');
        this.sphere([x,2.35,13.3],[1.3,1.05,.18],'#d4e8dd',this.staticRoot,true);
      }
    }else if(this.id==='gut'){
      for(let i=0;i<4;i++){const x=-16+i*.75;this.box([x,.2+i*.16,8],[.7,.25+i*.3,2.2],'#c5bd93');for(let j=0;j<4;j++)this.sphere([x,.43+i*.3,7.2+j*.45],[.15,.21,.15],'#c6ce95');}
    }else if(this.id==='heart'){
      this.tube([[-10,1.2,7],[-10,3.1,8],[-7,3.4,9],[-5,1.3,10]],.2,'#d49d88');
      for(let i=0;i<8;i++)this.box([-10+i*.65,2.4,8.6],[.53,.13,1.1],'#d7b69a');
      for(const x of [-9,-7,-5.5])this.cylinder([x,1.25,8.6],.07,2.3,'#afac8c');
    }else if(this.id==='immune'){
      for(const x of [-11,-4,3,10]){const g=this.group(x,12.1);this.cylinder([0,1.5,0],.04,2.8,'#9baa8c',g);this.box([.35,2.2,0],[.7,.95,.045],'#b3c49e',g,.06);const emblem=new T.Group();emblem.scale.setScalar(.4);emblem.position.set(.35,2.2,.06);g.add(emblem);this.shield(emblem,0,0);}
    }
  }
  private prepareEncounters(){
    this.actors.forEach((a,i)=>{a.root.userData.pick=`person:${i}`;this.interactiveRoots.push(a.root);});
    this.trafficLanes.forEach((lane,i)=>lane.roots.forEach((root,j)=>{root.userData.pick=`vehicle:${i}:${j}`;this.interactiveRoots.push(root);}));
    for(let i=0;i<(this.id==='lungs'?0:3);i++){
      const key=`person:${i}`,button=document.createElement('button');button.className='resident-label';button.textContent=`${residents[this.id][i].name} · 打个招呼`;button.setAttribute('aria-label',`认识${residents[this.id][i].name}`);button.addEventListener('click',()=>this.onPOI(key));this.labelRoot.append(button);this.residentLabels.set(key,button);
    }
    this.courierRoot=this.residentTemplates[0].clone(true);this.courierRoot.scale.setScalar(1.05);this.courierRoot.visible=false;this.courierRoot.userData.pick='courier';this.dynamicRoot.add(this.courierRoot);this.interactiveRoots.push(this.courierRoot);
    for(let i=0;i<3;i++)this.sphere([-.22+i*.22,1.25,-.12],[.1,.1,.1],'#efbb7e',this.courierRoot);
    const label=document.createElement('button');label.className='resident-label courier-label';label.textContent='小红 · 送氧途中';label.addEventListener('click',()=>this.onPOI('courier'));this.labelRoot.append(label);this.residentLabels.set('courier',label);
    this.dynamicRoot.add(this.momentRoot);
    const ring=this.mesh(new T.TorusGeometry(2.65,.045,6,64),gold,this.momentRoot,[0,.4,0]);ring.rotation.x=Math.PI/2;
    for(let i=0;i<12;i++)this.sphere([0,0,0],[.12,.12,.12],i%2?this.plan.accent:gold,this.momentRoot);
    for(let i=0;i<3;i++){const visitor=this.residentTemplates[i+1].clone(true);visitor.scale.setScalar(.8);this.momentRoot.add(visitor);}
  }
  private rootFor(key:string){return this.interactiveRoots.find(root=>root.userData.pick===key);}
  setWorkday(state:Workday){this.workday=state;}
  focusHarbor(close=false){
    if(!this.harbor)return;this.releaseCamera();this.selected='__harbor';this.selection.visible=false;this.controls.autoRotate=false;
    const exchange=['queue','partner','exchange'].includes(this.workday.stage);
    this.target.set(close?(exchange?-4.7:4.5):0,1.1,24.8);this.eye.copy(this.target).add(close?new T.Vector3(6,5.1,8):new T.Vector3(9,12,16));if(this.width<600)this.eye.sub(this.target).multiplyScalar(.78).add(this.target);this.transitioning=true;
  }
  inspect(key:string):Inspection|null {
    if(key.startsWith('harbor:')){const person=key.split(':')[1] as HarborPerson;if(!this.harbor?.people.has(person))return null;
      return {key,name:{red:'小红',bubble:'泡泡',cloud:'云云',green:'小青'}[person],role:{red:'红细胞快递员',bubble:'港口接待员',cloud:'气体交接员',green:'花房店员'}[person],status:workChapters[this.workday.stage].task,destination:'肺泡港 · 交接步道与街角花房',detail:harborDialogue(this.workday,person),cargo:person==='red'&&['exchange','returning','rest','complete'].includes(this.workday.stage)?'氧气标记 · 运往下一段循环':undefined};
    }
    if(key==='courier'&&this.courierStep)return {key,name:'小红',role:'红细胞快递员',status:this.courierProgress<.7?'正在前往交接点':'正在完成这一站的交接',destination:this.courierStep.title,detail:this.courierStep.text,cargo:this.courierStep.cargo};
    if(key.startsWith('person:')){
      const index=Number(key.split(':')[1]),a=this.actors[index];if(!a)return null;
      const identity=residents[this.id][index%3],sample=sampleWalk(this.simulationTime,a.length*(a.open?2:1),a.seed);
      const stop=a.curve.getPointAt(sample.progress<.5?.5:0);
      const nearest=this.plan.landmarks.reduce((a,b)=>Math.hypot(a.position[0]-stop.x,a.position[1]-stop.z)<Math.hypot(b.position[0]-stop.x,b.position[1]-stop.z)?a:b);
      return {key,name:index<3&&this.id!=='lungs'?identity.name:`${identity.name}的邻居 ${index+1}`,role:identity.role,status:sample.moving?'正沿步道赶路':'停下来歇脚、与伙伴交接',destination:a.open?'细胞生活街的另一端':`${nearest.name}附近的街区`,detail:identity.wish+' 居民的工作和休息是人体城市的拟人化表达。'};
    }
    if(key.startsWith('vehicle:')){
      const [,i,j]=key.split(':').map(Number),lane=this.trafficLanes[i],car=lane?.cars[j];if(!car)return null;
      const cargo={heart:i<2?'低氧血液的运输示意':'氧与营养的运输示意',brain:'信息脉冲',lungs:'氧气 / 二氧化碳的交换示意',gut:'糖、氨基酸等营养物料',kidneys:'水与小分子物料',immune:'免疫协作信息'}[this.id];
      return {key,name:j===0?'细胞慢行巴士':`${this.plan.vehicle} ${j+1}`,role:this.plan.roads[Math.floor(i/2)].name,status:car.dwell>0?'停站交接中':car.speed<.2?'正在等候前车':'沿专用车道行驶',destination:'沿线补给站',detail:'车辆是运输活动的比喻。巴士会停站，后车保持距离；货物标签用于理解运输内容。',cargo};
    }
    return null;
  }
  get contacts(){return residents[this.id].map((r,i)=>({...r,key:this.id==='lungs'?`harbor:${['bubble','green','cloud'][i]}`:`person:${i}`}));}
  follow(key:string){
    if(!this.rootFor(key))return;this.releaseCamera();this.followed=key;this.viewMode='follow';this.selected='__entity';this.selection.visible=true;this.selection.scale.setScalar(.25);this.controls.autoRotate=false;this.transitioning=false;
  }
  releaseCamera(){if(this.selected==='__entity')this.selection.visible=false;this.followed=null;this.viewMode='free';this.controls.minDistance=7;}
  watch(type:'walk'|'bench'|'ride'){
    if(type==='ride'){this.follow('vehicle:0:0');return;}
    this.releaseCamera();this.controls.autoRotate=false;this.viewMode=type;this.walkStarted=this.simulationTime;this.transitioning=false;this.selected='__entity';this.selection.visible=false;this.controls.minDistance=.8;
    if(type==='bench'){this.target.set(4,.8,17.2);this.eye.set(12.8,1.85,14.7);this.transitioning=true;}
  }
  setCourier(step:VisitStep|null,progress=0){this.courierStep=step;this.courierProgress=progress;this.courierRoot.visible=!!step&&step.city===this.id;}
  view():ViewMemory{return {city:this.id,eye:this.camera.position.toArray() as V,target:this.controls.target.toArray() as V};}
  restoreView(view:ViewMemory){this.releaseCamera();this.controls.autoRotate=false;this.controls.minDistance=.8;this.camera.position.fromArray(view.eye);this.controls.target.fromArray(view.target);this.transitioning=false;this.controls.update();}
  structureAt(x:number,y:number){
    let nearest=this.plan.landmarks[0],distance=Infinity;
    for(const l of this.plan.landmarks){const p=new T.Vector3(l.position[0],2,l.position[1]).project(this.camera);const d=Math.hypot((p.x/2+.5)*this.width-x,(-p.y/2+.5)*this.height-y);if(d<distance){nearest=l;distance=d;}}
    return {city:this.id,poi:nearest.id,name:nearest.name,near:distance<160};
  }
  get audioScene(){
    const point=this.harbor&&this.workday.active?this.harbor.people.get('red')?.position:this.followed?this.rootFor(this.followed)?.position:this.momentRoot.position;
    const delta=(point??new T.Vector3()).clone().sub(this.camera.position),right=new T.Vector3(1,0,0).applyQuaternion(this.camera.quaternion);
    return {city:this.id,pan:T.MathUtils.clamp(delta.clone().normalize().dot(right),-1,1),distance:delta.length(),walking:this.viewMode==='walk'||!!this.followed?.startsWith('person')||!!this.harbor&&this.workday.active&&['setting-out','returning'].includes(this.workday.stage),riding:!!this.followed?.startsWith('vehicle'),activity:this.harbor?this.workday.stage:undefined};
  }
  private updateEncounters(s:Simulation,dt:number){
    this.simulationTime=s.time;
    if(this.courierStep&&this.courierRoot.visible){
      const spot=this.plan.landmarks.find(l=>l.id===this.courierStep!.poi)!,lane=this.lanes[this.id==='heart'&&this.courierStep.oxygen?1:0];
      let end=0,nearest=Infinity;for(let i=0;i<120;i++){const p=lane.getPointAt(i/120),d=Math.hypot(p.x-spot.position[0],p.z-spot.position[1]);if(d<nearest){nearest=d;end=i/120;}}
      const progress=Math.min(1,this.courierProgress/.7),u=wrap(end-.22+progress*.22,1),p=lane.getPointAt(u),v=lane.getTangentAt(u);
      this.courierRoot.position.set(p.x+v.z*1.08,.16,p.z-v.x*1.08);this.courierRoot.rotation.y=Math.atan2(v.x,v.z);
      for(const [i,side] of ['left','right'].entries())this.courierRoot.getObjectByName(`leg-${side}`)!.rotation.x=progress<1?Math.sin(s.time*5+i*Math.PI)*.3:0;
    }
    const moment=momentAt(this.id,s.time),spot=this.plan.landmarks.find(l=>l.id===moment.poi)!;this.momentRoot.visible=moment.active;this.momentRoot.position.set(spot.position[0],0,spot.position[1]);
    this.momentRoot.children.slice(1,13).forEach((o,i)=>{
      const u=wrap(moment.progress*2+i/12,1),angle=u*Math.PI*2,r=2.4+Math.sin(moment.progress*Math.PI)*.6;
      if(this.id==='brain')o.position.set(-3+u*6,2.7+Math.sin(u*Math.PI)*.45,(i%3-1)*.45);
      else if(this.id==='lungs')o.position.set((i%2?1:-1)*(.5+u*1.7),i%2?.6+u*1.7:2.3-u*1.7,2.4+(i%3)*.18);
      else if(this.id==='gut')o.position.set(-2.7+u*5.4,.8+Math.floor(i/4)*.25,2.5+(i%3)*.2);
      else if(this.id==='kidneys')o.position.set(Math.cos(angle)*2.4,.8,1.5+Math.sin(angle)*1.1);
      else if(this.id==='immune')o.position.set(Math.cos(angle)*1.8,1.3+Math.sin(s.time*2+i)*.2,2+Math.sin(angle)*.6);
      else o.position.set(Math.cos(angle)*r,.9+Math.sin(angle*2+s.time)*.35,Math.sin(angle)*r);
      o.scale.setScalar(.7+Math.sin(moment.progress*Math.PI)*.6);
    });
    this.momentRoot.children.slice(13).forEach((o,i)=>{const approach=moment.progress<.3?1-moment.progress/.3:moment.progress>.8?(moment.progress-.8)/.2:0;o.position.set((i-1)*.6,.14,2.7+approach*2);o.rotation.y=Math.PI;});
    if(this.viewMode==='follow'&&this.followed){const root=this.rootFor(this.followed);if(root){this.selection.position.set(root.position.x,.35,root.position.z);const target=root.position.clone().add(new T.Vector3(0,.55,0));this.controls.target.lerp(target,1-Math.exp(-dt*4));this.camera.position.lerp(target.clone().add(new T.Vector3(4.5,4.7,6)),1-Math.exp(-dt*3));}}
    if(this.viewMode==='walk'){
      const raw=wrap((s.time-this.walkStarted)*.005,2),u=raw<=1?raw:2-raw,direction=raw<=1?1:-1,p=this.promenade.getPointAt(T.MathUtils.clamp(u,.015,.985)),v=this.promenade.getTangentAt(T.MathUtils.clamp(u,.015,.985));
      this.camera.position.lerp(p.clone().add(new T.Vector3(0,1.75,0)),1-Math.exp(-dt*3));this.controls.target.lerp(p.clone().addScaledVector(v,4*direction).add(new T.Vector3(0,1.05,0)),1-Math.exp(-dt*3));
    }
  }
  private updateResidentLabels(){
    const close=this.camera.position.distanceTo(this.controls.target)<25;
    for(const [key,label] of this.residentLabels){const root=this.rootFor(key)!,p=root.position.clone().add(new T.Vector3(0,1.65,0)).project(this.camera);label.hidden=!this.showLabels||!root.visible||(!close&&key!=='courier')||p.z<0||p.z>1||Math.abs(p.x)>.94||Math.abs(p.y)>.94||(!!this.followed&&this.followed!==key);label.style.transform=`translate(-50%,-100%) translate(${(p.x/2+.5)*this.width}px,${(-p.y/2+.5)*this.height}px)`;}
  }

  resize(width:number,height:number){
    this.width=width;this.height=height;this.camera.aspect=width/height;
    // Preserve a useful horizontal field on phones when the information sheet opens.
    this.camera.fov=Math.min(85,T.MathUtils.radToDeg(2*Math.atan(Math.tan(T.MathUtils.degToRad(20))*Math.max(1,1.5/this.camera.aspect))));
    this.camera.updateProjectionMatrix();this.overviewDistance=48;
  }
  focus(id:string){
    this.releaseCamera();
    if(id==='life'){this.preset('life');return;}
    const l=this.plan.landmarks.find(p=>p.id===id);if(!l)return;this.selected=id;
    this.target.set(l.position[0],1.1,l.position[1]);const direction=this.camera.position.clone().sub(this.controls.target).normalize();direction.y=Math.max(.4,direction.y);direction.normalize();this.eye.copy(this.target).addScaledVector(direction,15);this.transitioning=true;this.controls.autoRotate=false;
    this.selection.visible=true;this.selection.scale.setScalar(1);this.selection.position.set(l.position[0],.42,l.position[1]);
    this.labels.forEach((el,key)=>el.classList.toggle('active',key===id));
  }
  preset(type:'city'|'street'|'top'|'life'){
    this.releaseCamera();this.controls.autoRotate=false;this.transitioning=true;
    if(type==='life'){
      this.target.copy(this.lifePosition);this.eye.copy(this.target).add(new T.Vector3(8,5.6,11));
      this.selected='life';this.selection.visible=false;this.labels.forEach((el,key)=>el.classList.toggle('active',key==='life'));
    }else if(type==='street'){
      if(this.selected==='life'){this.preset('life');return;}
      const p=this.selected?(this.plan.landmarks.find(l=>l.id===this.selected)?.position??[2,14.5]):this.plan.landmarks[0].position;
      this.target.set(p[0],1.1,p[1]);this.eye.copy(this.target).add(new T.Vector3(8,4.5,10));
    }else{
      this.target.set(0,0,1.5);this.eye.copy(type==='top'?new T.Vector3(.01,this.overviewDistance,this.overviewDistance*.2):new T.Vector3(28,30,35).normalize().multiplyScalar(this.overviewDistance)).add(this.target);
      if(type==='city'){this.selected=null;this.selection.visible=false;this.labels.forEach(el=>el.classList.remove('active'));}
    }
  }
  toggleAuto(){this.releaseCamera();this.transitioning=false;this.controls.autoRotate=!this.controls.autoRotate;return this.controls.autoRotate;}
  toggleLabels(){this.showLabels=!this.showLabels;return this.showLabels;}
  zoom(by:number){this.releaseCamera();this.transitioning=false;const delta=this.camera.position.clone().sub(this.controls.target);delta.multiplyScalar(by>0?.8:1.25);delta.clampLength(this.controls.minDistance,this.controls.maxDistance);this.camera.position.copy(this.controls.target).add(delta);this.controls.update();}
  hit(e:PointerEvent,canvas:HTMLCanvasElement){
    const r=canvas.getBoundingClientRect();this.pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);this.raycaster.setFromCamera(this.pointer,this.camera);const hits=this.raycaster.intersectObjects([...this.hitboxes,...this.interactiveRoots.filter(r=>r.visible)],true);for(const hit of hits){let node:T.Object3D|null=hit.object;while(node){if(node.userData.pick)return node.userData.pick as string;if(node.userData.poi)return node.userData.poi as string;node=node.parent;}}return undefined;
  }
  update(s:Simulation,dt:number,mode:ModeId,paused:boolean){
    if(this.disposed)return;
    const elapsed=this.previousSimulationTime===null?0:Math.max(0,s.time-this.previousSimulationTime);this.previousSimulationTime=s.time;
    for(const lane of this.trafficLanes){
      advanceTraffic(lane.cars,lane.length,elapsed,s.flow);
      lane.cars.forEach((car,i)=>{
        const u=wrap(car.distance/lane.length*lane.direction,1),p=lane.curve.getPointAt(u),v=lane.curve.getTangentAt(u),root=lane.roots[i];
        root.position.set(p.x+v.z*lane.direction*.29,.09,p.z-v.x*lane.direction*.29);root.rotation.y=Math.atan2(v.x*lane.direction,v.z*lane.direction);
      });
    }
    for(const a of this.actors){
      const walk=sampleWalk(s.time,a.length*(a.open?2:1),a.seed),forward=a.open?(walk.progress<.5?1:-1):a.direction;
      const u=a.open?(walk.progress<.5?walk.progress*2:2-walk.progress*2):wrap(walk.progress*a.direction,1);
      const p=a.curve.getPointAt(u),v=a.curve.getTangentAt(u),gait=s.time*(4+walk.pace*3)+a.seed;
      a.root.position.set(p.x+v.z*a.offset,.13+(walk.moving?Math.abs(Math.sin(gait))*.018:0),p.z-v.x*a.offset);
      a.root.rotation.y=Math.atan2(v.x*forward,v.z*forward)+(walk.moving?0:Math.sin(a.seed)*.65);
      a.legs.forEach((leg,i)=>{leg.rotation.x=walk.moving?Math.sin(gait+i*Math.PI)*.29:0;});
      a.root.getObjectByName('arm-left')!.rotation.x=walk.moving?Math.sin(gait)*.24:-.25;
      a.root.getObjectByName('arm-right')!.rotation.x=walk.moving?-Math.sin(gait)*.24:-.4+Math.sin(s.time*.9+a.seed)*.08;
    }
    // Small local adjustments let walkers make room when their errands bring them together.
    for(let pass=0;pass<2;pass++)for(let i=0;i<this.actors.length;i++)for(let j=i+1;j<this.actors.length;j++){
      const a=this.actors[i],b=this.actors[j];if(a.curve!==b.curve)continue;
      const dx=a.root.position.x-b.root.position.x,dz=a.root.position.z-b.root.position.z,distance=Math.hypot(dx,dz);
      const space=(a.root.scale.x+b.root.scale.x)*.24;
      if(distance>=space)continue;
      const angle=distance<.001?a.seed:Math.atan2(dx,dz),push=(space-distance)*.5;
      a.root.position.x+=Math.sin(angle)*push;a.root.position.z+=Math.cos(angle)*push;
      b.root.position.x-=Math.sin(angle)*push;b.root.position.z-=Math.cos(angle)*push;
    }
    for(const n of this.neighbors){
      n.root.rotation.y=n.heading+Math.sin(s.time*.34+n.phase)*.09;
      if(n.pose==='chat'||n.pose==='shop')n.root.getObjectByName('arm-right')!.rotation.x=-.55+Math.sin(s.time*1.2+n.phase)*.25;
      if(n.pose==='sit')n.root.getObjectByName('arm-left')!.rotation.x=-.45+Math.sin(s.time*.65+n.phase)*.08;
    }
    for(const a of this.animations){
      const t=s.time;
      if(a.type==='pulse'){const pulse=Math.pow(Math.max(0,Math.sin(s.beats*Math.PI*2)),6);a.object.scale.copy(a.scale!).multiplyScalar(1+pulse*.065);}
      if(a.type==='breath'){a.object.scale.copy(a.scale!);a.object.scale.y*=1+Math.sin(s.breaths*Math.PI*2)*.065;}
      if(a.type==='rotate')a.object.rotation.z=t*.45+a.phase;
      if(a.type==='float')a.object.position.y=a.base+Math.sin(t*.85+a.phase)*.24;
      if(a.type==='gate')a.object.rotation.x=.25+Math.max(0,Math.sin(s.beats*Math.PI*2))*.8;
      if(a.type==='sway'){a.object.rotation.z=Math.sin(t*.65+a.phase)*.024;a.object.rotation.x=Math.sin(t*.43+a.phase)*.016;}
      if(a.type==='signal'&&a.curve){const clock=this.id==='gut'?s.nutrients:s.transport;const p=a.curve.getPointAt((clock*.08+a.phase)%1);a.object.position.copy(p);a.object.position.y+=a.base;}
    }
    this.updateEncounters(s,dt);
    this.harbor?.update(this.workday,s.time,s.breaths,mode);
    if(this.transitioning){const alpha=1-Math.exp(-dt*4);this.camera.position.lerp(this.eye,alpha);this.controls.target.lerp(this.target,alpha);if(this.camera.position.distanceTo(this.eye)<.03&&this.controls.target.distanceTo(this.target)<.03)this.transitioning=false;}
    // Pausing stops autonomous activity, while manual camera inspection stays available.
    const auto=this.controls.autoRotate;if(paused)this.controls.autoRotate=false;this.controls.update(dt);this.controls.autoRotate=auto;
    this.sunlight.intensity=T.MathUtils.damp(this.sunlight.intensity,mode==='sleep'?.75:2.4,2,elapsed);
    const windows=this.mat(glass);windows.emissive.set('#d8ad65');windows.emissiveIntensity=T.MathUtils.damp(windows.emissiveIntensity,mode==='sleep'?.55:0,2,elapsed);
    this.camera.updateMatrixWorld();this.updateResidentLabels();
    this.harbor?.project(this.camera,this.width,this.height,this.showLabels,this.workday);
    if(this.harborEntry){const p=new T.Vector3(0,1,24).project(this.camera);this.harborEntry.hidden=!this.showLabels||this.camera.position.distanceTo(new T.Vector3(0,1,24))<30||p.z>1||p.z<0||Math.abs(p.x)>.95||Math.abs(p.y)>.9;this.harborEntry.style.transform=`translate(-50%,-100%) translate(${(p.x/2+.5)*this.width}px,${(-p.y/2+.5)*this.height}px)`;}

    this.labelRoot.dataset.cameraState=this.transitioning?'moving':'ready';
    const close=this.camera.position.distanceTo(this.controls.target)<24;
    for(const l of this.plan.landmarks){const label=this.labels.get(l.id)!,p=new T.Vector3(l.position[0],l.kind==='cortex'?5.2:4.1,l.position[1]).project(this.camera);const beyond=p.z>1||p.z<0;label.hidden=!this.showLabels||beyond||Math.abs(p.x)>1||Math.abs(p.y)>1||!!(close&&this.selected&&l.id!==this.selected);label.style.transform=`translate(-50%,-100%) translate(${(p.x/2+.5)*this.width}px,${(-p.y/2+.5)*this.height}px)`;}
    const lifeLabel=this.labels.get('life')!,point=this.lifePosition.clone().setY(4).project(this.camera);
    lifeLabel.hidden=!this.showLabels||point.z>1||point.z<0||Math.abs(point.x)>1||Math.abs(point.y)>1||!!(close&&this.selected&&this.selected!=='life');lifeLabel.style.transform=`translate(-50%,-100%) translate(${(point.x/2+.5)*this.width}px,${(-point.y/2+.5)*this.height}px)`;
  }
  dispose(){
    this.disposed=true;this.harbor?.dispose();this.controls.dispose();this.labelRoot.remove();this.geometries.forEach(g=>g.dispose());this.materials.forEach(m=>m.dispose());this.signMaterials.forEach(m=>m.dispose());this.textures.forEach(t=>t.dispose());this.hitboxes.forEach(h=>(h.material as T.Material).dispose());this.sunlight.shadow.dispose();this.scene.clear();
  }
}
