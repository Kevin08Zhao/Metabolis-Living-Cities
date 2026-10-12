/** Deterministic street activity, advanced by the shared simulation clock. */
export const wrap=(value:number,length:number)=>((value%length)+length)%length;
export function randomAt(seed:number):number {
  const x=Math.sin(seed*127.1+311.7)*43758.5453;return x-Math.floor(x);
}
export interface StreetVehicle {
  distance:number; speed:number; cruise:number; stop:number|null;
  dwell:number; dwellDuration:number; serviced:boolean;
}
export function createTraffic(count:number,length:number,seed:number):StreetVehicle[] {
  return Array.from({length:count},(_,i)=>({
    distance:wrap((i+.12+randomAt(seed+i)*.36)*length/count,length),
    speed:0,cruise:.95+randomAt(seed+i+100)*.65,
    stop:i===0?length*.62:null,dwell:0,dwellDuration:3.5+randomAt(seed)*3,serviced:false,
  }));
}
/** The hard headway limit uses the previous positions, so simultaneous updates cannot overlap. */
export function advanceTraffic(cars:StreetVehicle[],length:number,dt:number,flow=1):void {
  if(!Number.isFinite(dt)||dt<=0||!cars.length)return;
  let remaining=Math.min(dt,5);
  while(remaining>0){
    const step=Math.min(remaining,1/30);remaining-=step;
    const positions=cars.map(c=>c.distance);
    cars.forEach((car,i)=>{
      const gap=Math.min(length,...positions.filter((_,j)=>j!==i).map(p=>wrap(p-positions[i],length)));
      let desired=car.cruise*Math.max(.2,flow),toStop=Infinity;
      if(car.stop!==null){
        toStop=wrap(car.stop-car.distance,length);
        if(car.serviced&&toStop>2&&toStop<length-2)car.serviced=false;
        if(!car.serviced){
          if(toStop<.025){car.dwell=car.dwellDuration;car.serviced=true;}
          else desired=Math.min(desired,Math.max(.07,toStop*.9));
        }
      }
      if(car.dwell>0){car.dwell=Math.max(0,car.dwell-step);car.speed=0;return;}
      desired=Math.min(desired,Math.max(0,(gap-1.65)*1.4));
      car.speed+=(desired-car.speed)*(1-Math.exp(-step*2.4));
      let travel=Math.min(car.speed*step,Math.max(0,gap-1.5));
      if(!car.serviced)travel=Math.min(travel,toStop);
      car.distance=wrap(car.distance+travel,length);
    });
  }
}
export interface WalkSample { progress:number; moving:boolean; pace:number; }
/** A short errand with two different stops, rather than a synchronized endless march. */
export function sampleWalk(time:number,length:number,seed:number):WalkSample {
  const pace=.28+randomAt(seed+41)*.22;
  const half=length/pace/2,restA=2+randomAt(seed+19)*7,restB=3+randomAt(seed+31)*9;
  const cycle=2*half+restA+restB;
  const t=wrap(time+randomAt(seed)*cycle,cycle);
  if(t<half)return {progress:t/(2*half),moving:true,pace};
  if(t<half+restA)return {progress:.5,moving:false,pace};
  if(t<2*half+restA)return {progress:.5+(t-half-restA)/(2*half),moving:true,pace};
  return {progress:0,moving:false,pace};
}
