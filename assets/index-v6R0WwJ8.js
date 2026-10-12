(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`heart`,name:`心脏动力城`,short:`心脏`,english:`HEART QUARTER`,system:`循环系统`,color:`#d87565`,pale:`#fae7de`,position:[0,0],role:`让每一份温暖，都有去处。`,description:`这里的泵站昼夜不停，把血液送向肺和全身。瓣膜像单向闸门，让运输队伍沿着正确的方向前进。`,facts:[`心脏有四个腔室，左右两侧分别服务肺循环和体循环。`,`心脏的节律起源于自身的起搏细胞；大脑和激素会调节它的快慢。`,`动脉把血液带离心脏，静脉让血液回到心脏；并非所有动脉都富氧。`],process:[`右心 → 肺`,`肺 → 左心`,`左心 → 全身`],resident:`红细胞快递员`,quote:`我的货物是氧气，下一站是需要它的细胞！`},{id:`brain`,name:`神经指挥城`,short:`大脑`,english:`NEURAL QUARTER`,system:`神经系统`,color:`#9a83bb`,pale:`#eee7f5`,position:[-10,-8],role:`小小的信号，连接整个世界。`,description:`神经元织成细密的通讯网络。感觉在这里被整合，指令从这里发出；脑干也参与调节呼吸和心率。`,facts:[`神经元通过电信号和化学信号传递信息。`,`大脑会整合感觉输入，再协调动作、记忆和情绪。`,`很多器官也有局部调节机制，并不等待大脑逐一下令。`],process:[`接收感觉`,`整合信息`,`传递指令`],resident:`神经元信使`,quote:`一条消息穿过突触，就能开启一次新的连接。`},{id:`lungs`,name:`肺泡云朵港`,short:`肺部`,english:`ALVEOLAR HARBOR`,system:`呼吸系统`,color:`#559f9a`,pale:`#deefeb`,position:[9,-8],role:`一呼一吸，为城市换来新鲜。`,description:`成簇的肺泡是一座座交换站。氧气穿过薄薄的壁进入血液，二氧化碳沿相反方向离开，随呼气排出。`,facts:[`气体通过扩散跨过肺泡与毛细血管之间的薄壁。`,`肺动脉运来含氧较少的血，肺静脉送回含氧较多的血。`,`呼吸运动由膈肌等呼吸肌完成，肺本身不是主动抽气的泵。`],process:[`吸入空气`,`肺泡交换`,`呼出二氧化碳`],resident:`肺泡交换员`,quote:`把氧气交给红细胞，再把二氧化碳送出去。`},{id:`gut`,name:`营养加工城`,short:`消化`,english:`NUTRIENT GARDENS`,system:`消化系统`,color:`#ca9748`,pale:`#f5ebd5`,position:[11,5],role:`把一顿美餐，变成生活的能量。`,description:`胃负责混合和初步消化，小肠继续分解并吸收。绒毛像密集的装卸码头，把营养送进身体的运输网络。`,facts:[`大多数营养物质在小肠被吸收；胃并不是主要吸收站。`,`糖类最终可被分解为单糖，蛋白质被分解为氨基酸等。`,`吸收的糖和氨基酸先经门静脉到肝脏；大部分膳食脂肪先进入淋巴。`],process:[`分解食物`,`小肠吸收`,`运输与利用`],resident:`绒毛装卸员`,quote:`食物要先变成足够小的分子，才能通行哦。`},{id:`kidneys`,name:`肾脏净水湾`,short:`肾脏`,english:`RENAL SPRINGS`,system:`泌尿系统`,color:`#679daf`,pale:`#e1eef3`,position:[0,11],role:`留下需要的，送走多余的。`,description:`肾单位先过滤血浆，再把大部分水和有用物质重新吸收。留下的废物和多余水分形成尿液，维持内部环境稳定。`,facts:[`肾小球过滤血液，血细胞和大部分蛋白质通常留在血管里。`,`肾小管重吸收大部分滤出的水与有用物质，也会分泌某些物质。`,`肾脏调节水盐和酸碱平衡；它不是只会筛掉垃圾的滤网。`],process:[`肾小球过滤`,`肾小管重吸收`,`尿液排出`],resident:`肾单位管理员`,quote:`等等，这些水和养分还需要送回去！`},{id:`immune`,name:`免疫守护站`,short:`免疫`,english:`IMMUNE SANCTUARY`,system:`免疫系统`,color:`#7a9e72`,pale:`#e8eddf`,position:[-11,5],role:`温柔的日常，也有人在守护。`,description:`免疫细胞在血液、淋巴和组织之间巡逻。淋巴结提供相遇与交流的场所，让不同细胞共同识别和应对威胁。`,facts:[`免疫系统分布全身，淋巴结只是其中一类协作场所。`,`吞噬细胞可以吞入并处理某些病原体和细胞残片。`,`B 细胞可分化为产生抗体的浆细胞，部分免疫细胞能形成记忆。`],process:[`发现异常`,`协同应对`,`形成记忆`],resident:`白细胞巡逻员`,quote:`巡逻、识别、互相配合，这就是我们的日常。`}],t={rest:{name:`悠闲休息`,heart:72,breath:14,flow:1,digestion:1,message:`此刻，一切都在自己的节奏里。`,changes:[`心脏平稳泵血`,`肺泡持续交换`,`各城维持日常工作`]},walk:{name:`出门散步`,heart:102,breath:22,flow:1.7,digestion:.8,message:`肌肉需要更多氧气，运输队伍忙起来了。`,changes:[`心跳与呼吸加快`,`血流运输加快`,`向活动组织供应更多氧气`]},meal:{name:`享用午餐`,heart:78,breath:15,flow:1.12,digestion:2.3,message:`营养加工城开工，新的补给正在装载。`,changes:[`胃肠蠕动与分泌增强`,`小肠吸收营养`,`肝脏接收和处理养分`]},sleep:{name:`进入梦乡`,heart:60,breath:11,flow:.72,digestion:.75,message:`在安静的睡眠阶段，城市放慢脚步，工作仍在继续。`,changes:[`示意安静的非快速眼动睡眠`,`心率和呼吸通常减慢`,`大脑与其他器官仍在工作`]}},n=[{city:`heart`,title:`01 / 从右心出发`,text:`我是红细胞小红。刚刚从身体返回，携带的氧气变少了。右心把我送进肺动脉，前往肺泡补给。`,cargo:`含氧较少 · 前往肺部`,oxygen:!1},{city:`lungs`,title:`02 / 在肺泡交换气体`,text:`氧气从肺泡扩散进入血液，与我体内的血红蛋白结合；二氧化碳从血液进入肺泡，随后被呼出。`,cargo:`装载氧气 · 卸下二氧化碳`,oxygen:!0},{city:`heart`,title:`03 / 回到左心中转`,text:`肺静脉把我带回左心。左心再用一次有力的收缩，把我送进主动脉，驶向全身组织。`,cargo:`含氧较多 · 进入体循环`,oxygen:!0},{city:`brain`,title:`04 / 给组织送去氧气`,text:`这次我来到大脑的毛细血管。氧气离开血液，进入组织；细胞利用氧气参与能量代谢。其他器官也有各自的供血支路。`,cargo:`交付氧气 · 接收二氧化碳`,oxygen:!1},{city:`heart`,title:`05 / 返回，再次启程`,text:`血液沿静脉返回右心，又一个循环开始了。二氧化碳主要以碳酸氢根形式在血液中运输，并不是都由红细胞直接背着。`,cargo:`循环完成 · 旅途仍在继续`,oxygen:!1}],r=[{label:`NHLBI · 血液怎样流动`,url:`https://www.nhlbi.nih.gov/health/heart/blood-flow`},{label:`NHLBI · 心脏与心跳`,url:`https://www.nhlbi.nih.gov/health/heart/heart-beats`},{label:`NHLBI · 呼吸与气体交换`,url:`https://www.nhlbi.nih.gov/health/lungs/breathing-benefits`},{label:`NIDDK · 消化系统如何工作`,url:`https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works`},{label:`NIDDK · 肾脏如何工作`,url:`https://www.niddk.nih.gov/health-information/kidney-disease/kidneys-how-they-work`},{label:`NINDS · 认识大脑`,url:`https://www.ninds.nih.gov/health-information/public-education/brain-basics`},{label:`NIAID · 免疫系统概览`,url:`https://www.niaid.nih.gov/research/immune-system-overview`}],i=e.filter(e=>e.id!==`heart`).flatMap(e=>[{from:`heart`,to:e.id,oxygen:e.id!==`lungs`},{from:e.id,to:`heart`,oxygen:e.id===`lungs`}]);function a(t){return e.find(e=>e.id===t)}function o(e,t,n){return e+(t-e)*(1-Math.exp(-Math.max(0,n)*2))}function s(){return{time:0,heart:72,breath:14,flow:1,digestion:1,beats:0,breaths:0,transport:0,nutrients:0}}function c(e,n,r,i=1,a=!1){if(a||!Number.isFinite(r)||r<=0||!Number.isFinite(i)||i<=0)return;let s=r*i,c=t[n];e.time+=s,e.heart=o(e.heart,c.heart,s),e.breath=o(e.breath,c.breath,s),e.flow=o(e.flow,c.flow,s),e.digestion=o(e.digestion,c.digestion,s),e.beats+=s*e.heart/60,e.breaths+=s*e.breath/60,e.transport+=s*e.flow,e.nutrients+=s*e.digestion}function l(t){try{let n=JSON.parse(t||`[]`);return Array.isArray(n)?[...new Set(n.filter(t=>e.some(e=>e.id===t)))]:[]}catch{return[]}}var u={route:`<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M5 7v9a3 3 0 0 0 3 3h9M8 5h8a3 3 0 0 1 0 6H9"/>`,undo:`<path d="M9 5 4 10l5 5M4 10h10a6 6 0 0 1 0 12"/>`,heart:`<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/><path d="M4 12h4l2-4 3 8 2-4h5"/>`,brain:`<path d="M12 5c-2-5-7-2-6 1-5 0-5 7-2 8-3 4 3 8 6 5l2-2V5Zm0 0c2-5 7-2 6 1 5 0 5 7 2 8 3 4-3 8-6 5l-2-2"/><path d="M6 6c0 3 3 2 3 5M4 14c3-2 5 0 5 2m9-10c0 3-3 2-3 5m5 3c-3-2-5 0-5 2"/>`,lungs:`<path d="M12 3v7m0 0L8 14m4-4 4 4M9 7C6 2 1 15 3 19c1 3 6 0 6-2V7Zm6 0c3-5 8 8 6 12-1 3-6 0-6-2V7Z"/>`,gut:`<path d="M10 3v6c4 0 3-5 6-5 7 0 7 12 1 14-3 2-7 0-9 0-3 0-3 4 0 4h9M7 3v7c-6 0-6 8 0 8"/>`,kidneys:`<path d="M8 3C0 3 0 20 7 20c4 0 5-6 1-8 4-2 4-9 0-9Zm8 0c8 0 8 17 1 17-4 0-5-6-1-8-4-2-4-9 0-9Z"/>`,immune:`<path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z"/><path d="m8 12 3 3 5-6"/>`,globe:`<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>`,arrow:`<path d="M4 12h16m-6-6 6 6-6 6"/>`,book:`<path d="M12 5c-3-3-7-3-10-2v16c4-1 7-1 10 2 3-3 6-3 10-2V3c-3-1-7-1-10 2Zm0 0v16"/>`,sun:`<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>`,walk:`<circle cx="14" cy="4" r="2"/><path d="m8 21 4-8 1-5-4 3H6m7-3 3 5h4m-8 0 5 8"/>`,meal:`<path d="M5 3v7m3-7v7m-6-7v7c0 3 6 3 6 0M5 13v9M19 3c-4 3-5 11 0 11V3Zm0 11v8"/>`,moon:`<path d="M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z"/>`,pause:`<path d="M8 5v14M16 5v14"/>`,play:`<path d="m8 4 12 8-12 8V4Z"/>`,plus:`<path d="M12 5v14M5 12h14"/>`,minus:`<path d="M5 12h14"/>`,home:`<path d="m3 10 9-7 9 7v11H3V10Z"/><path d="M9 21v-8h6v8"/>`,close:`<path d="m6 6 12 12M6 18 18 6"/>`,check:`<path d="m5 12 4 4L19 6"/>`,sound:`<path d="M11 4 5 9H2v6h3l6 5V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>`,mute:`<path d="M11 4 5 9H2v6h3l6 5V4Zm5 5 6 6m-6 0 6-6"/>`,help:`<circle cx="12" cy="12" r="9"/><path d="M9 8a3 3 0 1 1 5 3c-2 1-2 2-2 3m0 3h.01"/>`,spark:`<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z"/>`,focus:`<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/><circle cx="12" cy="12" r="3"/>`,flag:`<path d="M5 22V3c5-4 9 4 14 0v11c-5 4-9-4-14 0"/>`,layers:`<path d="m12 3 10 6-10 6L2 9l10-6ZM2 14l10 6 10-6"/>`};function d(e,t=``){return`<svg class="icon ${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${u[e]||u.spark}</svg>`}var f={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},p={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},m=1e3,h=1001,g=1002,_=1003,v=1004,y=1005,b=1006,x=1007,S=1008,C=1009,w=1010,T=1011,E=1012,D=1013,O=1014,k=1015,A=1016,ee=1017,te=1018,ne=1020,j=35902,M=35899,re=1021,ie=1022,ae=1023,oe=1026,se=1027,N=1028,ce=1029,le=1030,ue=1031,de=1033,fe=33776,pe=33777,me=33778,he=33779,ge=35840,_e=35841,ve=35842,ye=35843,be=36196,xe=37492,Se=37496,Ce=37488,we=37489,Te=37490,Ee=37491,De=37808,Oe=37809,ke=37810,Ae=37811,je=37812,Me=37813,Ne=37814,Pe=37815,P=37816,Fe=37817,Ie=37818,Le=37819,F=37820,Re=37821,I=36492,L=36494,ze=36495,Be=36283,Ve=36284,He=36285,Ue=36286,We=2300,Ge=2301,Ke=2302,qe=2303,Je=2400,Ye=2401,Xe=2402,Ze=3200,Qe=`srgb`,$e=`srgb-linear`,et=`linear`,tt=`srgb`,nt=7680,rt=35044,it=2e3;function at(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ot(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function st(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ct(){let e=st(`canvas`);return e.style.display=`block`,e}var lt={};function ut(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function dt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=dt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=dt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ft(...e){let t=e.join(` `);t in lt||(lt[t]=!0,R(...e))}function pt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var mt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ht=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},gt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),_t=1234567,vt=Math.PI/180,yt=180/Math.PI;function bt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gt[e&255]+gt[e>>8&255]+gt[e>>16&255]+gt[e>>24&255]+`-`+gt[t&255]+gt[t>>8&255]+`-`+gt[t>>16&15|64]+gt[t>>24&255]+`-`+gt[n&63|128]+gt[n>>8&255]+`-`+gt[n>>16&255]+gt[n>>24&255]+gt[r&255]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function xt(e,t){return(e%t+t)%t}function St(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Ct(e,t,n){return e===t?0:(n-e)/(t-e)}function wt(e,t,n){return(1-n)*e+n*t}function Tt(e,t,n,r){return wt(e,t,1-Math.exp(-n*r))}function Et(e,t=1){return t-Math.abs(xt(e,t*2)-t)}function Dt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Ot(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function kt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function At(e,t){return e+Math.random()*(t-e)}function jt(e){return e*(.5-Math.random())}function Mt(e){e!==void 0&&(_t=e);let t=_t+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nt(e){return e*vt}function Pt(e){return e*yt}function Ft(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function It(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Lt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Rt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function zt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Bt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Vt={DEG2RAD:vt,RAD2DEG:yt,generateUUID:bt,clamp:B,euclideanModulo:xt,mapLinear:St,inverseLerp:Ct,lerp:wt,damp:Tt,pingpong:Et,smoothstep:Dt,smootherstep:Ot,randInt:kt,randFloat:At,randFloatSpread:jt,seededRandom:Mt,degToRad:Nt,radToDeg:Pt,isPowerOfTwo:Ft,ceilPowerOfTwo:It,floorPowerOfTwo:Lt,setQuaternionFromProperEuler:Rt,normalize:Bt,denormalize:zt},V=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ut.copy(this).projectOnVector(e),this.sub(Ut)}reflect(e){return this.sub(Ut.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ut=new H,Wt=new Ht,U=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ft(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Gt.makeScale(e,t)),this}rotate(e){return ft(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Gt.makeRotation(-e)),this}translate(e,t){return ft(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Gt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gt=new U,Kt=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qt=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jt(){let e={enabled:!0,workingColorSpace:$e,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Yt(e.r),e.g=Yt(e.g),e.b=Yt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Xt(e.r),e.g=Xt(e.g),e.b=Xt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?et:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ft(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ft(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[$e]:{primaries:t,whitePoint:r,transfer:et,toXYZ:Kt,fromXYZ:qt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:r,transfer:tt,toXYZ:Kt,fromXYZ:qt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),e}var W=Jt();function Yt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Xt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Zt,Qt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zt===void 0&&(Zt=st(`canvas`)),Zt.width=e.width,Zt.height=e.height;let t=Zt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Zt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=st(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Yt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Yt(t[e]/255)*255):t[e]=Yt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},$t=0,en=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$t++}),this.uuid=bt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(tn(r[t].image)):e.push(tn(r[t]))}else e=tn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function tn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Qt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var nn=0,rn=new H,an=class e extends ht{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=h,i=h,a=b,o=S,s=ae,c=C,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nn++}),this.uuid=bt(),this.name=``,this.source=new en(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rn).x}get height(){return this.source.getSize(rn).y}get depth(){return this.source.getSize(rn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){R(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case m:e.x-=Math.floor(e.x);break;case h:e.x=e.x<0?0:1;break;case g:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case m:e.y-=Math.floor(e.y);break;case h:e.y=e.y<0?0:1;break;case g:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null,an.DEFAULT_MAPPING=300,an.DEFAULT_ANISOTROPY=1;var on=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sn=class extends ht{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:b,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];let r=new an({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:b,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new en(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},cn=class extends sn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ln=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_,this.minFilter=_,this.wrapR=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},un=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_,this.minFilter=_,this.wrapR=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},dn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/fn.setFromMatrixColumn(e,0).length(),i=1/fn.setFromMatrixColumn(e,1).length(),a=1/fn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mn,e,hn)}lookAt(e,t,n){let r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),gn.crossVectors(n,vn),gn.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),gn.crossVectors(n,vn)),gn.normalize(),_n.crossVectors(vn,gn),r[0]=gn.x,r[4]=_n.x,r[8]=vn.x,r[1]=gn.y,r[5]=_n.y,r[9]=vn.y,r[2]=gn.z,r[6]=_n.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],ne=r[3],j=r[7],M=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*ne,i[4]=a*S+o*E+s*A+c*j,i[8]=a*C+o*D+s*ee+c*M,i[12]=a*w+o*O+s*te+c*re,i[1]=l*x+u*T+d*k+f*ne,i[5]=l*S+u*E+d*A+f*j,i[9]=l*C+u*D+d*ee+f*M,i[13]=l*w+u*O+d*te+f*re,i[2]=p*x+m*T+h*k+g*ne,i[6]=p*S+m*E+h*A+g*j,i[10]=p*C+m*D+h*ee+g*M,i[14]=p*w+m*O+h*te+g*re,i[3]=_*x+v*T+y*k+b*ne,i[7]=_*S+v*E+y*A+b*j,i[11]=_*C+v*D+y*ee+b*M,i[15]=_*w+v*O+y*te+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=fn.set(r[0],r[1],r[2]).length(),o=fn.set(r[4],r[5],r[6]).length(),s=fn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),pn.copy(this);let c=1/a,l=1/o,u=1/s;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=l,pn.elements[5]*=l,pn.elements[6]*=l,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,t.setFromRotationMatrix(pn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=it,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=it,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fn=new H,pn=new dn,mn=new H(0,0,0),hn=new H(1,1,1),gn=new H,_n=new H,vn=new H,yn=new dn,bn=new Ht,xn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bn.setFromEuler(this),this.setFromQuaternion(bn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER=`XYZ`;var Sn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Cn=0,wn=new H,Tn=new Ht,En=new dn,Dn=new H,On=new H,kn=new H,An=new Ht,jn=new H(1,0,0),Mn=new H(0,1,0),Nn=new H(0,0,1),Pn={type:`added`},Fn={type:`removed`},In={type:`childadded`,child:null},Ln={type:`childremoved`,child:null},Rn=class e extends ht{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cn++}),this.uuid=bt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new xn,r=new Ht,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dn},normalMatrix:{value:new U}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tn.setFromAxisAngle(e,t),this.quaternion.multiply(Tn),this}rotateOnWorldAxis(e,t){return Tn.setFromAxisAngle(e,t),this.quaternion.premultiply(Tn),this}rotateX(e){return this.rotateOnAxis(jn,e)}rotateY(e){return this.rotateOnAxis(Mn,e)}rotateZ(e){return this.rotateOnAxis(Nn,e)}translateOnAxis(e,t){return wn.copy(e).applyQuaternion(this.quaternion),this.position.add(wn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jn,e)}translateY(e){return this.translateOnAxis(Mn,e)}translateZ(e){return this.translateOnAxis(Nn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dn.copy(e):Dn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),On.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(On,Dn,this.up):En.lookAt(Dn,On,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),Tn.setFromRotationMatrix(En),this.quaternion.premultiply(Tn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pn),In.child=e,this.dispatchEvent(In),In.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fn),Ln.child=e,this.dispatchEvent(Ln),Ln.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pn),In.child=e,this.dispatchEvent(In),In.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,e,kn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,An,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Rn.DEFAULT_UP=new H(0,1,0),Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var G=class extends Rn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},zn={type:`move`},Bn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new G,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new G,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new G,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new G;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Un={h:0,s:0,l:0};function Wn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,W.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=W.workingColorSpace){return this.r=e,this.g=t,this.b=n,W.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=W.workingColorSpace){if(e=xt(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Wn(i,r,e+1/3),this.g=Wn(i,r,e),this.b=Wn(i,r,e-1/3)}return W.colorSpaceToWorking(this,r),this}setStyle(e,t=Qe){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qe){let n=Vn[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yt(e.r),this.g=Yt(e.g),this.b=Yt(e.b),this}copyLinearToSRGB(e){return this.r=Xt(e.r),this.g=Xt(e.g),this.b=Xt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qe){return W.workingToColorSpace(Gn.copy(this),e),Math.round(B(Gn.r*255,0,255))*65536+Math.round(B(Gn.g*255,0,255))*256+Math.round(B(Gn.b*255,0,255))}getHexString(e=Qe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=W.workingColorSpace){W.workingToColorSpace(Gn.copy(this),t);let n=Gn.r,r=Gn.g,i=Gn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=W.workingColorSpace){return W.workingToColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Qe){W.workingToColorSpace(Gn.copy(this),e);let t=Gn.r,n=Gn.g,r=Gn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Un);let n=wt(Hn.h,Un.h,t),r=wt(Hn.s,Un.s,t),i=wt(Hn.l,Un.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new K;K.NAMES=Vn;var Kn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new K(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qn=class extends Rn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jn=new H,Yn=new H,Xn=new H,Zn=new H,Qn=new H,$n=new H,er=new H,tr=new H,nr=new H,rr=new H,ir=new on,ar=new on,or=new on,sr=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Jn.subVectors(e,t),r.cross(Jn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Jn.subVectors(r,t),Yn.subVectors(n,t),Xn.subVectors(e,t);let a=Jn.dot(Jn),o=Jn.dot(Yn),s=Jn.dot(Xn),c=Yn.dot(Yn),l=Yn.dot(Xn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zn)!==null&&Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Zn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Zn.x),s.addScaledVector(a,Zn.y),s.addScaledVector(o,Zn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ir.setScalar(0),ar.setScalar(0),or.setScalar(0),ir.fromBufferAttribute(e,t),ar.fromBufferAttribute(e,n),or.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ir,i.x),a.addScaledVector(ar,i.y),a.addScaledVector(or,i.z),a}static isFrontFacing(e,t,n,r){return Jn.subVectors(n,t),Yn.subVectors(e,t),Jn.cross(Yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Jn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Qn.subVectors(r,n),$n.subVectors(i,n),tr.subVectors(e,n);let s=Qn.dot(tr),c=$n.dot(tr);if(s<=0&&c<=0)return t.copy(n);nr.subVectors(e,r);let l=Qn.dot(nr),u=$n.dot(nr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Qn,a);rr.subVectors(e,i);let f=Qn.dot(rr),p=$n.dot(rr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector($n,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return er.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(er,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Qn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cr=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ur.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ur.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ur.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ur):ur.fromBufferAttribute(r,t),ur.applyMatrix4(e.matrixWorld),this.expandByPoint(ur);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox)),dr.applyMatrix4(e.matrixWorld),this.union(dr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ur),ur.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),yr.subVectors(this.max,vr),fr.subVectors(e.a,vr),pr.subVectors(e.b,vr),mr.subVectors(e.c,vr),hr.subVectors(pr,fr),gr.subVectors(mr,pr),_r.subVectors(fr,mr);let t=[0,-hr.z,hr.y,0,-gr.z,gr.y,0,-_r.z,_r.y,hr.z,0,-hr.x,gr.z,0,-gr.x,_r.z,0,-_r.x,-hr.y,hr.x,0,-gr.y,gr.x,0,-_r.y,_r.x,0];return!Sr(t,fr,pr,mr,yr)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,fr,pr,mr,yr))?!1:(br.crossVectors(hr,gr),t=[br.x,br.y,br.z],Sr(t,fr,pr,mr,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ur).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ur).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},lr=[new H,new H,new H,new H,new H,new H,new H,new H],ur=new H,dr=new cr,fr=new H,pr=new H,mr=new H,hr=new H,gr=new H,_r=new H,vr=new H,yr=new H,br=new H,xr=new H;function Sr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){xr.fromArray(e,a);let o=i.x*Math.abs(xr.x)+i.y*Math.abs(xr.y)+i.z*Math.abs(xr.z),s=t.dot(xr),c=n.dot(xr),l=r.dot(xr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Cr=new H,wr=new V,Tr=0,Er=class extends ht{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=rt,this.updateRanges=[],this.gpuType=k,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix4(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyNormalMatrix(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.transformDirection(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Dr=class extends Er{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Or=class extends Er{constructor(e,t,n){super(new Uint32Array(e),t,n)}},q=class extends Er{constructor(e,t,n){super(new Float32Array(e),t,n)}},kr=new cr,Ar=new H,jr=new H,Mr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?kr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);let t=Ar.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Ar,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(jr)),this.expandByPoint(Ar.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Nr=0,Pr=new dn,Fr=new Rn,Ir=new H,Lr=new cr,Rr=new cr,zr=new H,Br=class e extends ht{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nr++}),this.uuid=bt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(at(e)?Or:Dr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pr.makeRotationFromQuaternion(e),this.applyMatrix4(Pr),this}rotateX(e){return Pr.makeRotationX(e),this.applyMatrix4(Pr),this}rotateY(e){return Pr.makeRotationY(e),this.applyMatrix4(Pr),this}rotateZ(e){return Pr.makeRotationZ(e),this.applyMatrix4(Pr),this}translate(e,t,n){return Pr.makeTranslation(e,t,n),this.applyMatrix4(Pr),this}scale(e,t,n){return Pr.makeScale(e,t,n),this.applyMatrix4(Pr),this}lookAt(e){return Fr.lookAt(e),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new q(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Lr.setFromBufferAttribute(n),this.morphTargetsRelative?(zr.addVectors(this.boundingBox.min,Lr.min),this.boundingBox.expandByPoint(zr),zr.addVectors(this.boundingBox.max,Lr.max),this.boundingBox.expandByPoint(zr)):(this.boundingBox.expandByPoint(Lr.min),this.boundingBox.expandByPoint(Lr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Lr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Rr.setFromBufferAttribute(n),this.morphTargetsRelative?(zr.addVectors(Lr.min,Rr.min),Lr.expandByPoint(zr),zr.addVectors(Lr.max,Rr.max),Lr.expandByPoint(zr)):(Lr.expandByPoint(Rr.min),Lr.expandByPoint(Rr.max))}Lr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)zr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(zr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)zr.fromBufferAttribute(a,t),o&&(Ir.fromBufferAttribute(e,t),zr.add(Ir)),r=Math.max(r,n.distanceToSquared(zr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Er(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new V,f=new V,p=new V,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Er(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zr.fromBufferAttribute(e,t),zr.normalize(),e.setXYZ(t,zr.x,zr.y,zr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Er(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Vr=new H,Hr=new H,Ur=new U,Wr=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Vr.subVectors(n,t).cross(Hr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Vr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ur.getNormalMatrix(e),r=this.coplanarPoint(Vr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Gr=0,Kr=class extends ht{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gr++}),this.uuid=bt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nt,this.stencilZFail=nt,this.stencilZPass=nt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){R(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Wr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},qr=new H,Jr=new H,Yr=new H,Xr=new H,Zr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qr.copy(this.origin).addScaledVector(this.direction,t),qr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Jr.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Jr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=Xr.dot(this.direction),s=-Xr.dot(Yr),c=Xr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Jr).addScaledVector(Yr,d),f}intersectSphere(e,t){if(e.radius<0)return null;qr.subVectors(e.center,this.origin);let n=qr.dot(this.direction),r=qr.dot(qr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,te,ne;if(y>=b&&y>=x?(w=s,D=u,A=p,ne=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,te=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,te=_)):b>=x?(w=c,D=d,A=m,ne=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,te=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,te=v)):(w=l,D=f,A=h,ne=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,te=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,te=g)),w===0)return null;let j=S/w,M=C/w,re=1/w,ie=T-j*D,ae=E-M*D,oe=O-j*A,se=k-M*A,N=ee-j*ne,ce=te-M*ne,le=N*se-ce*oe,ue=ie*ce-ae*N,de=oe*ae-se*ie;if(r){if(le<0||ue<0||de<0)return null}else if((le<0||ue<0||de<0)&&(le>0||ue>0||de>0))return null;let fe=le+ue+de;if(fe===0)return null;let pe=re*(le*D+ue*A+de*ne);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qr=class extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$r=new dn,ei=new Zr,ti=new Mr,ni=new H,ri=new H,ii=new H,ai=new H,oi=new H,si=new H,ci=new H,li=new H,ui=class extends Rn{constructor(e=new Br,t=new Qr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){si.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(oi.fromBufferAttribute(s,e),a?si.addScaledVector(oi,r):si.addScaledVector(oi.sub(t),r))}t.add(si)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ti.copy(n.boundingSphere),ti.applyMatrix4(i),ei.copy(e.ray).recast(e.near),!(ti.containsPoint(ei.origin)===!1&&(ei.intersectSphere(ti,ni)===null||ei.origin.distanceToSquared(ni)>(e.far-e.near)**2))&&($r.copy(i).invert(),ei.copy(e.ray).applyMatrix4($r),(n.boundingBox===null||ei.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ei)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=fi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=fi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=fi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=fi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function di(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;li.copy(s),li.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(li);return l<n.near||l>n.far?null:{distance:l,point:li.clone(),object:e}}function fi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ri),e.getVertexPosition(c,ii),e.getVertexPosition(l,ai);let u=di(e,t,n,r,ri,ii,ai,ci);if(u){let e=new H;sr.getBarycoord(ci,ri,ii,ai,e),i&&(u.uv=sr.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=sr.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=sr.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};sr.getNormal(ri,ii,ai,t.normal),u.face=t,u.barycoord=e}return u}var pi=class extends an{constructor(e=null,t=1,n=1,r,i,a,o,s,c=_,l=_,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mi=new Mr,hi=new V(.5,.5),gi=new H,_i=class{constructor(e=new Wr,t=new Wr,n=new Wr,r=new Wr,i=new Wr,a=new Wr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=it,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476+hi.distanceTo(e.center),mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(gi.x=r.normal.x>0?e.max.x:e.min.x,gi.y=r.normal.y>0?e.max.y:e.min.y,gi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},vi=class extends an{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yi=class extends an{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bi=class extends an{constructor(e,t,n=O,r,i,a,o=_,s=_,c,l=oe,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new en(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},xi=class extends bi{constructor(e,t=O,n=301,r,i,a=_,o=_,s,c=oe){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Si=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ci=class e extends Br{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new q(c,3)),this.setAttribute(`normal`,new q(l,3)),this.setAttribute(`uv`,new q(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wi=class e extends Br{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new H,g=new H;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new q(o,3)),this.setAttribute(`normal`,new q(s,3)),this.setAttribute(`uv`,new q(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ti=class e extends Br{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new H,l=new V;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new q(a,3)),this.setAttribute(`normal`,new q(o,3)),this.setAttribute(`uv`,new q(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ei=class e extends Br{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new q(u,3)),this.setAttribute(`normal`,new q(d,3)),this.setAttribute(`uv`,new q(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Di=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){R(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new V:new H);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,r=[],i=[],a=[],o=new H,s=new dn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new H)}i[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(B(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(B(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Oi=class extends Di{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new V){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ki=class extends Oi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ai(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ji=new H,Mi=new H,Ni=new Ai,Pi=new Ai,Fi=new Ai,Ii=class extends Di{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new H){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Mi.subVectors(r[0],r[1]).add(r[0]),c=Mi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ji.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ji),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ni.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Pi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Fi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ni.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Pi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Fi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ni.calc(s),Pi.calc(s),Fi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Li(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ri(e,t){let n=1-e;return n*n*t}function zi(e,t){return 2*(1-e)*e*t}function Bi(e,t){return e*e*t}function Vi(e,t,n,r){return Ri(e,t)+zi(e,n)+Bi(e,r)}function Hi(e,t){let n=1-e;return n*n*n*t}function Ui(e,t){let n=1-e;return 3*n*n*e*t}function Wi(e,t){return 3*(1-e)*e*e*t}function Gi(e,t){return e*e*e*t}function Ki(e,t,n,r,i){return Hi(e,t)+Ui(e,n)+Wi(e,r)+Gi(e,i)}var qi=class extends Di{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ki(e,r.x,i.x,a.x,o.x),Ki(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ji=class extends Di{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ki(e,r.x,i.x,a.x,o.x),Ki(e,r.y,i.y,a.y,o.y),Ki(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yi=class extends Di{constructor(e=new V,t=new V){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xi=class extends Di{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zi=class extends Di{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Vi(e,r.x,i.x,a.x),Vi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qi=class extends Di{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Vi(e,r.x,i.x,a.x),Vi(e,r.y,i.y,a.y),Vi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$i=class extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new V){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Li(o,s.x,c.x,l.x,u.x),Li(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this}},ea=Object.freeze({__proto__:null,ArcCurve:ki,CatmullRomCurve3:Ii,CubicBezierCurve:qi,CubicBezierCurve3:Ji,EllipseCurve:Oi,LineCurve:Yi,LineCurve3:Xi,QuadraticBezierCurve:Zi,QuadraticBezierCurve3:Qi,SplineCurve:$i}),ta=class extends Di{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ea[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ea[n.type]().fromJSON(n))}return this}},na=class extends ta{constructor(e){super(),this.type=`Path`,this.currentPoint=new V,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Yi(this.currentPoint.clone(),new V(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Zi(this.currentPoint.clone(),new V(e,t),new V(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new qi(this.currentPoint.clone(),new V(e,t),new V(n,r),new V(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new $i([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Oi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ra=class extends na{constructor(e){super(e),this.uuid=bt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new na().fromJSON(n))}return this}};function ia(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=aa(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=fa(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return sa(a,o,n,s,c,l,0),o}function aa(e,t,n,r,i){let a;if(i===Ia(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Na(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Na(i/r|0,e[i],e[i+1],a);return a&&Ta(a,a.next)&&(Pa(a),a=a.next),a}function oa(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Ta(n,n.next)||wa(n.prev,n,n.next)===0)){if(Pa(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function sa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&_a(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?la(e,r,i,a):ca(e)){t.push(c.i,e.i,l.i),Pa(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=ua(oa(e),t),sa(e,t,n,r,i,a,2)):o===2&&da(e,t,n,r,i,a):sa(oa(e),t,n,r,i,a,1);break}}}function ca(e){let t=e.prev,n=e,r=e.next;if(wa(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Sa(i,s,a,c,o,l,m.x,m.y)&&wa(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function la(e,t,n,r){let i=e.prev,a=e,o=e.next;if(wa(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=ya(p,m,t,n,r),v=ya(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Sa(s,u,c,d,l,f,y.x,y.y)&&wa(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Sa(s,u,c,d,l,f,b.x,b.y)&&wa(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Sa(s,u,c,d,l,f,y.x,y.y)&&wa(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Sa(s,u,c,d,l,f,b.x,b.y)&&wa(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ua(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Ta(r,i)&&Ea(r,n,n.next,i)&&Aa(r,i)&&Aa(i,r)&&(t.push(r.i,n.i,i.i),Pa(n),Pa(n.next),n=e=i),n=n.next}while(n!==e);return oa(n)}function da(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ca(o,e)){let s=Ma(o,e);o=oa(o,o.next),s=oa(s,s.next),sa(o,t,n,r,i,a,0),sa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function fa(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=aa(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ba(o))}i.sort(pa);for(let e=0;e<i.length;e++)n=ma(i[e],n);return n}function pa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function ma(e,t){let n=ha(e,t);if(!n)return t;let r=Ma(n,e);return oa(r,r.next),oa(n,n.next)}function ha(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Ta(e,n))return n;do{if(Ta(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&xa(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Aa(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&ga(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function ga(e,t){return wa(e.prev,e,t.prev)<0&&wa(t.next,e,e.next)<0}function _a(e,t,n,r){let i=e;do i.z===0&&(i.z=ya(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,va(i)}function va(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function ya(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ba(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function xa(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Sa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&xa(e,t,n,r,i,a,o,s)}function Ca(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ka(e,t)&&(Aa(e,t)&&Aa(t,e)&&ja(e,t)&&(wa(e.prev,e,t.prev)||wa(e,t.prev,t))||Ta(e,t)&&wa(e.prev,e,e.next)>0&&wa(t.prev,t,t.next)>0)}function wa(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ta(e,t){return e.x===t.x&&e.y===t.y}function Ea(e,t,n,r){let i=Oa(wa(e,t,n)),a=Oa(wa(e,t,r)),o=Oa(wa(n,r,e)),s=Oa(wa(n,r,t));return!!(i!==a&&o!==s||i===0&&Da(e,n,t)||a===0&&Da(e,r,t)||o===0&&Da(n,e,r)||s===0&&Da(n,t,r))}function Da(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Oa(e){return e>0?1:e<0?-1:0}function ka(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ea(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Aa(e,t){return wa(e.prev,e,e.next)<0?wa(e,t,e.next)>=0&&wa(e,e.prev,t)>=0:wa(e,t,e.prev)<0||wa(e,e.next,t)<0}function ja(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ma(e,t){let n=Fa(e.i,e.x,e.y),r=Fa(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Na(e,t,n,r){let i=Fa(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Pa(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Fa(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ia(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var La=class{static triangulate(e,t,n=2){return ia(e,t,n)}},Ra=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];za(e),Ba(n,e);let a=e.length;t.forEach(za);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Ba(n,t[e]);let o=La.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function za(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ba(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Va=class e extends Br{constructor(e=new ra([new V(.5,.5),new V(-.5,.5),new V(-.5,-.5),new V(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new q(r,3)),this.setAttribute(`uv`,new q(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Ha:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new H,b=new H,x=new H}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Ra.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Ra.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||z(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new V(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new V(r/a,i/a)}let ee=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),ee[e]=A(D[e],D[n],D[r]);let te=[],ne,j=ee.concat();for(let e=0,t=E;e<t;e++){let t=w[e];ne=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),ne[e]=A(t[e],t[r],t[i]);te.push(ne),j=j.concat(ne)}let M;if(p===0)M=Ra.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],ee[t],a);N(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];ne=te[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],ne[e],a);N(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}M=Ra.triangulateShape(e,t)}let re=M.length,ie=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],j[e],ie):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),N(x.x,x.y,x.z)):N(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],j[t],ie):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),N(x.x,x.y,x.z)):N(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],ee[e],r);N(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ne=te[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],ne[e],r);_?N(i.x,i.y+g[s-1].y,g[s-1].x+n):N(i.x,i.y,c+n)}}}ae(),oe();function ae(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<re;e++){let n=M[e];ce(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<re;e++){let n=M[e];ce(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<re;e++){let t=M[e];ce(t[2],t[1],t[0])}for(let e=0;e<re;e++){let t=M[e];ce(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function oe(){let e=r.length/3,t=0;se(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];se(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function se(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);le(t+r+n,t+i+n,t+i+a,t+r+a)}}}function N(e,t,n){a.push(e),a.push(t),a.push(n)}function ce(e,t,i){ue(e),ue(t),ue(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);de(o[0]),de(o[1]),de(o[2])}function le(e,t,i,a){ue(e),ue(t),ue(a),ue(t),ue(i),ue(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);de(s[0]),de(s[1]),de(s[3]),de(s[1]),de(s[2]),de(s[3])}function ue(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function de(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ua(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ea[i.type]().fromJSON(i)),new e(r,t.options)}},Ha={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new V(a,o),new V(s,c),new V(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new V(o,1-c),new V(l,1-d),new V(f,1-m),new V(h,1-_)]:[new V(s,1-c),new V(u,1-d),new V(p,1-m),new V(g,1-_)]}};function Ua(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Wa=class e extends Br{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new q(p,3)),this.setAttribute(`normal`,new q(m,3)),this.setAttribute(`uv`,new q(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ga=class e extends Br{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new H,p=new V;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new q(s,3)),this.setAttribute(`normal`,new q(c,3)),this.setAttribute(`uv`,new q(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ka=class e extends Br{constructor(e=new ra([new V(0,.5),new V(-.5,-.5),new V(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new q(r,3)),this.setAttribute(`normal`,new q(i,3)),this.setAttribute(`uv`,new q(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Ra.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Ra.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Ra.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return qa(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function qa(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Ja=class e extends Br{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new q(p,3)),this.setAttribute(`normal`,new q(m,3)),this.setAttribute(`uv`,new q(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ya=class e extends Br{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new H,f=new H,p=new H;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new q(c,3)),this.setAttribute(`normal`,new q(l,3)),this.setAttribute(`uv`,new q(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Xa=class e extends Br{constructor(e=new Qi(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new H,s=new H,c=new V,l=new H,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new q(u,3)),this.setAttribute(`normal`,new q(d,3)),this.setAttribute(`uv`,new q(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ea[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Za=class extends Kr{constructor(e){super(),this.isShadowMaterial=!0,this.type=`ShadowMaterial`,this.color=new K(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Qa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(eo(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(eo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function $a(e){let t={};for(let n=0;n<e.length;n++){let r=Qa(e[n]);for(let e in r)t[e]=r[e]}return t}function eo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function to(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function no(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:W.workingColorSpace}var ro={clone:Qa,merge:$a},io=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ao=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oo=class extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=io,this.fragmentShader=ao,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qa(e.uniforms),this.uniformsGroups=to(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new K().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new on().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new dn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},so=class extends oo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},co=class extends Kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new K(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},lo=class extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ze,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uo=class extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function po(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var mo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ho=class extends mo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Je,endingEnd:Je}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ye:i=e,o=2*t-n;break;case Xe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ye:a=e,s=2*n-t;break;case Xe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},go=class extends mo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},_o=class extends mo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},vo=class extends mo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=xo(n,t,g,y,r);i[p]=yo(x,o,_,b,m)}return i}};function yo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function bo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function xo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=yo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=bo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var So=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=fo(t,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fo(e.times,Array),values:fo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),po(e.settings)&&(n.settings={inTangents:fo(e.settings.inTangents,Array),outTangents:fo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case We:t=this.InterpolantFactoryMethodDiscrete;break;case Ge:t=this.InterpolantFactoryMethodLinear;break;case Ke:t=this.InterpolantFactoryMethodSmooth;break;case qe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return We;case this.InterpolantFactoryMethodLinear:return Ge;case this.InterpolantFactoryMethodSmooth:return Ke;case this.InterpolantFactoryMethodBezier:return qe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;po(this.settings)&&(Co(this.settings.inTangents,e),Co(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ot(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ke,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,po(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Co(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}So.prototype.ValueTypeName=``,So.prototype.TimeBufferType=Float32Array,So.prototype.ValueBufferType=Float32Array,So.prototype.DefaultInterpolation=Ge;var wo=class extends So{constructor(e,t,n){super(e,t,n)}};wo.prototype.ValueTypeName=`bool`,wo.prototype.ValueBufferType=Array,wo.prototype.DefaultInterpolation=We,wo.prototype.InterpolantFactoryMethodLinear=void 0,wo.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends So{constructor(e,t,n,r){super(e,t,n,r)}};To.prototype.ValueTypeName=`color`;var Eo=class extends So{constructor(e,t,n,r){super(e,t,n,r)}};Eo.prototype.ValueTypeName=`number`;var Do=class extends mo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ht.slerpFlat(i,0,a,c-o,a,c,s);return i}},Oo=class extends So{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Do(this.times,this.values,this.getValueSize(),e)}};Oo.prototype.ValueTypeName=`quaternion`,Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends So{constructor(e,t,n){super(e,t,n)}};ko.prototype.ValueTypeName=`string`,ko.prototype.ValueBufferType=Array,ko.prototype.DefaultInterpolation=We,ko.prototype.InterpolantFactoryMethodLinear=void 0,ko.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends So{constructor(e,t,n,r){super(e,t,n,r)}};Ao.prototype.ValueTypeName=`vector`;var jo={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Mo(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Mo(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Mo(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var No=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Po=class{constructor(e){this.manager=e===void 0?No:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Po.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Fo=new WeakMap,Io=class extends Po{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=jo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Fo.get(a);e===void 0&&(e=[],Fo.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=st(`img`);function s(){l(),t&&t(this);let n=Fo.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Fo.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),jo.remove(`image:${e}`);let n=Fo.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Fo.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),jo.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Lo=class extends Po{constructor(e){super(e)}load(e,t,n,r){let i=new an,a=new Io(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Ro=class extends Rn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new K(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},zo=class extends Ro{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Bo=new dn,Vo=new H,Ho=new H,Uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=C,this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _i,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vo),Ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ho),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Bo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wo=new H,Go=new Ht,Ko=new H,qo=class extends Rn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=it,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wo,Go,Ko),Ko.x===1&&Ko.y===1&&Ko.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Go,Ko.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Wo,Go,Ko),Ko.x===1&&Ko.y===1&&Ko.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Go,Ko.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Jo=new H,Yo=new V,Xo=new V,Zo=class extends qo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=yt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yt*2*Math.atan(Math.tan(vt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jo.x,Jo.y).multiplyScalar(-e/Jo.z),Jo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jo.x,Jo.y).multiplyScalar(-e/Jo.z)}getViewSize(e,t){return this.getViewBounds(e,Yo,Xo),t.subVectors(Xo,Yo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qo=class extends qo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$o=class extends Uo{constructor(){super(new Qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},es=class extends Ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new $o}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ts=-90,ns=1,rs=class extends Rn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zo(ts,ns,e,t);r.layers=this.layers,this.add(r);let i=new Zo(ts,ns,e,t);i.layers=this.layers,this.add(i);let a=new Zo(ts,ns,e,t);a.layers=this.layers,this.add(a);let o=new Zo(ts,ns,e,t);o.layers=this.layers,this.add(o);let s=new Zo(ts,ns,e,t);s.layers=this.layers,this.add(s);let c=new Zo(ts,ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},is=class extends Zo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},as=`\\[\\]\\.:\\/`,os=RegExp(`[\\[\\]\\.:\\/]`,`g`),ss=`[^\\[\\]\\.:\\/]`,cs=`[^`+as.replace(`\\.`,``)+`]`,ls=`((?:WC+[\\/:])*)`.replace(`WC`,ss),us=`(WCOD+)?`.replace(`WCOD`,cs),ds=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ss),fs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ss),ps=RegExp(`^`+ls+us+ds+fs+`$`),ms=[`material`,`materials`,`bones`,`map`],hs=class{constructor(e,t,n){let r=n||gs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(os,``)}static parseTrackName(e){let t=ps.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ms.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gs.Composite=hs,gs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},gs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},gs.prototype.GetterByBindingType=[gs.prototype._getValue_direct,gs.prototype._getValue_array,gs.prototype._getValue_arrayElement,gs.prototype._getValue_toArray],gs.prototype.SetterByBindingTypeAndVersioning=[[gs.prototype._setValue_direct,gs.prototype._setValue_direct_setNeedsUpdate,gs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gs.prototype._setValue_array,gs.prototype._setValue_array_setNeedsUpdate,gs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gs.prototype._setValue_arrayElement,gs.prototype._setValue_arrayElement_setNeedsUpdate,gs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gs.prototype._setValue_fromArray,gs.prototype._setValue_fromArray_setNeedsUpdate,gs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _s=new dn,vs=class{constructor(e,t,n=0,r=1/0){this.ray=new Zr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Sn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):z(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return _s.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_s),this}intersectObject(e,t=!0,n=[]){return bs(e,this,n,t),n.sort(ys),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)bs(e[r],this,n,t);return n.sort(ys),n}};function ys(e,t){return e.distance-t.distance}function bs(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)bs(r[e],t,n,!0)}}var xs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=B(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(B(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Ss=class extends ht{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Cs(e,t,n,r){let i=ws(r);switch(n){case re:return e*t;case N:return e*t/i.components*i.byteLength;case ce:return e*t/i.components*i.byteLength;case le:return e*t*2/i.components*i.byteLength;case ue:return e*t*2/i.components*i.byteLength;case ie:return e*t*3/i.components*i.byteLength;case ae:return e*t*4/i.components*i.byteLength;case de:return e*t*4/i.components*i.byteLength;case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:case ye:return Math.max(e,16)*Math.max(t,8)/4;case ge:case ve:return Math.max(e,8)*Math.max(t,8)/2;case be:case xe:case Ce:case we:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Se:case Te:case Ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case De:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Oe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ke:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ae:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case je:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Me:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ne:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Pe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case P:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Fe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ie:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Le:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case F:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Re:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case I:case L:case ze:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Be:case Ve:return Math.ceil(e/4)*Math.ceil(t/4)*8;case He:case Ue:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ws(e){switch(e){case C:case w:return{byteLength:1,components:1};case E:case T:case A:return{byteLength:2,components:1};case ee:case te:return{byteLength:2,components:4};case O:case D:case k:return{byteLength:4,components:1};case j:case M:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ts(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Es(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},Ds={basic:{uniforms:$a([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:$a([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:$a([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:$a([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:$a([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new K(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:$a([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:$a([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:$a([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:$a([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:$a([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:$a([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distance:{uniforms:$a([Y.common,Y.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distance_vert,fragmentShader:J.distance_frag},shadow:{uniforms:$a([Y.lights,Y.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};Ds.physical={uniforms:$a([Ds.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var Os={r:0,b:0,g:0},ks=new dn,As=new U;As.set(-1,0,0,0,1,0,0,0,1);function js(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ui(new Ci(1,1,1),new oo({name:`BackgroundCubeMaterial`,uniforms:Qa(Ds.backgroundCube.uniforms),vertexShader:Ds.backgroundCube.vertexShader,fragmentShader:Ds.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ks.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(As),l.material.toneMapped=W.getTransfer(i.colorSpace)!==tt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ui(new Wa(2,2),new oo({name:`BackgroundMaterial`,uniforms:Qa(Ds.background.uniforms),vertexShader:Ds.background.vertexShader,fragmentShader:Ds.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=W.getTransfer(i.colorSpace)!==tt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Os,no(e)),n.buffers.color.setClear(Os.r,Os.g,Os.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ms(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ns(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ps(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Fs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Wr,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Is=4,Ls=6,Rs=20,zs=256,Bs=new Qo,Vs=new K,Hs=null,Us=0,Ws=0,Gs=!1,Ks=new H,qs=new H,Js=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ks}=i;Hs=this._renderer.getRenderTarget(),Us=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hs,Us,Ws),this._renderer.xr.enabled=Gs,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hs=this._renderer.getRenderTarget(),Us=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:b,minFilter:b,generateMipmaps:!1,type:A,format:ae,colorSpace:$e,depthBuffer:!1},r=Xs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ys(r)),this._blurMaterial=$s(r,e,t),this._ggxMaterial=Qs(r,e,t)}return r}_compileMaterial(e){let t=new ui(new Br,e);this._renderer.compile(t,Bs)}_sceneToCubeUV(e,t,n,r,i){let a=new Zo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Vs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ui(new Ci,new Qr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Vs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Zs(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Zs(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Bs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Is?n-d+Is:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Zs(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Bs),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Zs(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Bs)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Zs(t,3*l*(r>this._lodMax-Is?r-this._lodMax+Is:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Bs)}};function Ys(e){let t=[],n=[],r=e,i=e-Is+1+Ls;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?qs.set(1,r,n):e===1?qs.set(-n,1,-r):e===2?qs.set(-n,r,1):e===3?qs.set(-1,r,-n):e===4?qs.set(-n,-1,r):qs.set(n,r,-1),qs.toArray(l,(e*6+t)*3)}}let u=new Br;u.setAttribute(`position`,new Er(c,3)),u.setAttribute(`outputDirection`,new Er(l,3)),n.push(new ui(u,null)),r>Is&&r--}return{lodMeshes:n,sizeLods:t}}function Xs(e,t,n){let r=new cn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Zs(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Qs(e,t,n){return new oo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $s(e,t,n){return new oo({name:`SphericalGaussianBlur`,defines:{SAMPLES:Rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ec(){return new oo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function tc(){return new oo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var rc=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new vi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ci(5,5,5),i=new oo({name:`CubemapFromEquirect`,uniforms:Qa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ui(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=b),new rs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function ic(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new rc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Js(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Js(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ac(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ft(`WebGLRenderer: `+e+` extension not supported.`),t}}}function oc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Or:Dr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function sc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function cc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function lc(e,t,n){let r=new WeakMap,i=new on;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new ln(h,p,m,u);g.type=k,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new V(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function uc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var dc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function fc(e,t,n,r,i,a){let o=new cn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Br;l.setAttribute(`position`,new q([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new q([0,2,0,0,2,0],2));let u=new so({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ui(l,u),f=new Qo(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new cn(t,n,{type:A,depthBuffer:!1,stencilBuffer:!1}),c=new cn(t,n,{type:A,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},W.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=dc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var pc=new an,mc=new bi(1,1),hc=new ln,gc=new un,_c=new vi,vc=[],yc=[],bc=new Float32Array(16),xc=new Float32Array(9),Sc=new Float32Array(4);function Cc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=vc[i];if(a===void 0&&(a=new Float32Array(i),vc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function wc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Tc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ec(e,t){let n=yc[t];n===void 0&&(n=new Int32Array(t),yc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Dc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(wc(n,t))return;e.uniform2fv(this.addr,t),Tc(n,t)}}function kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(wc(n,t))return;e.uniform3fv(this.addr,t),Tc(n,t)}}function Ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(wc(n,t))return;e.uniform4fv(this.addr,t),Tc(n,t)}}function jc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(wc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Tc(n,t)}else{if(wc(n,r))return;Sc.set(r),e.uniformMatrix2fv(this.addr,!1,Sc),Tc(n,r)}}function Mc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(wc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Tc(n,t)}else{if(wc(n,r))return;xc.set(r),e.uniformMatrix3fv(this.addr,!1,xc),Tc(n,r)}}function Nc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(wc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Tc(n,t)}else{if(wc(n,r))return;bc.set(r),e.uniformMatrix4fv(this.addr,!1,bc),Tc(n,r)}}function Pc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(wc(n,t))return;e.uniform2iv(this.addr,t),Tc(n,t)}}function Ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(wc(n,t))return;e.uniform3iv(this.addr,t),Tc(n,t)}}function Lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(wc(n,t))return;e.uniform4iv(this.addr,t),Tc(n,t)}}function Rc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(wc(n,t))return;e.uniform2uiv(this.addr,t),Tc(n,t)}}function Bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(wc(n,t))return;e.uniform3uiv(this.addr,t),Tc(n,t)}}function Vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(wc(n,t))return;e.uniform4uiv(this.addr,t),Tc(n,t)}}function Hc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(mc.compareFunction=n.isReversedDepthBuffer()?518:515,a=mc):a=pc,n.setTexture2D(t||a,i)}function Uc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||gc,i)}function Wc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||_c,i)}function Gc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||hc,i)}function Kc(e){switch(e){case 5126:return Dc;case 35664:return Oc;case 35665:return kc;case 35666:return Ac;case 35674:return jc;case 35675:return Mc;case 35676:return Nc;case 5124:case 35670:return Pc;case 35667:case 35671:return Fc;case 35668:case 35672:return Ic;case 35669:case 35673:return Lc;case 5125:return Rc;case 36294:return zc;case 36295:return Bc;case 36296:return Vc;case 35678:case 36198:case 36298:case 36306:case 35682:return Hc;case 35679:case 36299:case 36307:return Uc;case 35680:case 36300:case 36308:case 36293:return Wc;case 36289:case 36303:case 36311:case 36292:return Gc}}function qc(e,t){e.uniform1fv(this.addr,t)}function Jc(e,t){let n=Cc(t,this.size,2);e.uniform2fv(this.addr,n)}function Yc(e,t){let n=Cc(t,this.size,3);e.uniform3fv(this.addr,n)}function Xc(e,t){let n=Cc(t,this.size,4);e.uniform4fv(this.addr,n)}function Zc(e,t){let n=Cc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Qc(e,t){let n=Cc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function $c(e,t){let n=Cc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function el(e,t){e.uniform1iv(this.addr,t)}function tl(e,t){e.uniform2iv(this.addr,t)}function nl(e,t){e.uniform3iv(this.addr,t)}function rl(e,t){e.uniform4iv(this.addr,t)}function il(e,t){e.uniform1uiv(this.addr,t)}function al(e,t){e.uniform2uiv(this.addr,t)}function ol(e,t){e.uniform3uiv(this.addr,t)}function sl(e,t){e.uniform4uiv(this.addr,t)}function cl(e,t,n){let r=this.cache,i=t.length,a=Ec(n,i);wc(r,a)||(e.uniform1iv(this.addr,a),Tc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?mc:pc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ll(e,t,n){let r=this.cache,i=t.length,a=Ec(n,i);wc(r,a)||(e.uniform1iv(this.addr,a),Tc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||gc,a[e])}function ul(e,t,n){let r=this.cache,i=t.length,a=Ec(n,i);wc(r,a)||(e.uniform1iv(this.addr,a),Tc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||_c,a[e])}function dl(e,t,n){let r=this.cache,i=t.length,a=Ec(n,i);wc(r,a)||(e.uniform1iv(this.addr,a),Tc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||hc,a[e])}function fl(e){switch(e){case 5126:return qc;case 35664:return Jc;case 35665:return Yc;case 35666:return Xc;case 35674:return Zc;case 35675:return Qc;case 35676:return $c;case 5124:case 35670:return el;case 35667:case 35671:return tl;case 35668:case 35672:return nl;case 35669:case 35673:return rl;case 5125:return il;case 36294:return al;case 36295:return ol;case 36296:return sl;case 35678:case 36198:case 36298:case 36306:case 35682:return cl;case 35679:case 36299:case 36307:return ll;case 35680:case 36300:case 36308:case 36293:return ul;case 36289:case 36303:case 36311:case 36292:return dl}}var pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kc(t.type)}},ml=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fl(t.type)}},hl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},gl=/(\w+)(\])?(\[|\.)?/g;function _l(e,t){e.seq.push(t),e.map[t.id]=t}function vl(e,t,n){let r=e.name,i=r.length;for(gl.lastIndex=0;;){let a=gl.exec(r),o=gl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){_l(n,l===void 0?new pl(s,e,t):new ml(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new hl(s),_l(n,e)),n=e}}}var yl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);vl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function bl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var xl=37297,Sl=0;function Cl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var wl=new U;function Tl(e){W._getMatrix(wl,W.workingColorSpace,e);let t=`mat3( ${wl.elements.map(e=>e.toFixed(4))} )`;switch(W.getTransfer(e)){case et:return[t,`LinearTransferOETF`];case tt:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function El(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Cl(e.getShaderSource(t),r)}return i}function Dl(e,t){let n=Tl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ol={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function kl(e,t){let n=Ol[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Al=new H;function jl(){return W.getLuminanceCoefficients(Al),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Al.x.toFixed(4)}, ${Al.y.toFixed(4)}, ${Al.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ml(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Fl).join(`
`)}function Nl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Pl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Fl(e){return e!==``}function Il(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ll(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rl=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(e){return e.replace(Rl,Vl)}var Bl=new Map;function Vl(e,t){let n=J[t];if(n===void 0){let e=Bl.get(t);if(e!==void 0)n=J[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return zl(n)}var Hl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(e){return e.replace(Hl,Wl)}function Wl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Gl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Kl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ql(e){return Kl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Jl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Yl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Jl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Xl={302:`ENVMAP_MODE_REFRACTION`};function Zl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Xl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ql={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function $l(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ql[e.combine]||`ENVMAP_BLENDING_NONE`}function eu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function tu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ql(n),l=Yl(n),u=Zl(n),d=$l(n),f=eu(n),p=Ml(n),m=Nl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Fl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Fl).join(`
`),_.length>0&&(_+=`
`)):(g=[Gl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Fl).join(`
`),_=[Gl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:kl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,Dl(`linearToOutputTexel`,n.outputColorSpace),jl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Fl).join(`
`)),o=zl(o),o=Il(o,n),o=Ll(o,n),s=zl(s),s=Il(s,n),s=Ll(s,n),o=Ul(o),s=Ul(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=bl(i,i.VERTEX_SHADER,y),S=bl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=El(i,x,`vertex`),n=El(i,S,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new yl(i,h),T=Pl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,xl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Sl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var nu=0,ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new iu(e),t.set(e,n)),n}},iu=class{constructor(e){this.id=nu++,this.code=e,this.usedTimes=0}};function au(e){return e===1030||e===37490||e===36285}function ou(e,t,n,r,i,a){let o=new Sn,s=new ru,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ds[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),ne=h.isInstancedMesh===!0,j=h.isBatchedMesh===!0,M=!!i.map,re=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,N=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,ue=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,be=pe&&!!i.clearcoatMap,xe=pe&&!!i.clearcoatNormalMap,Se=pe&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,P=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:j,batchingColor:j&&h._colorsTexture!==null,instancing:ne,instancingColor:ne&&h.instanceColor!==null,instancingMorph:ne&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:W.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:N,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:N&&i.normalMapType===1,normalMapTangentSpace:N&&i.normalMapType===0,packedNormalMap:N&&i.normalMapType===0&&au(i.normalMap.format),metalnessMap:ue,roughnessMap:de,anisotropy:fe,anisotropyMap:ye,clearcoat:pe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:P,combine:i.combine,mapUv:M&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:N&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:ue&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(N||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(M||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&N===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&W.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&W.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||j)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ds[t];n=ro.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new tu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function su(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function cu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function lu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function uu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||cu),r.length>1&&r.sort(t||lu),i.length>1&&i.sort(t||lu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function du(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new uu,e.set(t,[i])):n>=r.length?(i=new uu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function fu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new K};break;case`SpotLight`:n={position:new H,direction:new H,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function pu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var mu=0;function hu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function gu(e){let t=new fu,n=pu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new dn,o=new dn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(hu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=mu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function _u(e){let t=new gu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function vu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new _u(e),t.set(n,[a])):r>=i.length?(a=new _u(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var yu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xu=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Su=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Cu=new dn,wu=new H,Tu=new H;function Eu(e,t,n){let r=new _i,i=new V,a=new V,o=new on,s=new lo,c=new uo,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new oo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:yu,fragmentShader:bu}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Br;m.setAttribute(`position`,new Er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new ui(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=v!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){R(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new cn(i.x,i.y,{format:le,type:A,minFilter:b,magFilter:b,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new bi(i.x,i.y,k),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=oe,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=_,d.map.depthTexture.magFilter=_}else l.isPointLight?(d.map=new rc(i.x),d.map.depthTexture=new xi(i.x,O)):(d.map=new cn(i.x,i.y),d.map.depthTexture=new bi(i.x,i.y,O)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=oe,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=b,d.map.depthTexture.magFilter=b):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=_,d.map.depthTexture.magFilter=_);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),wu.setFromMatrixPosition(l.matrixWorld),e.position.copy(wu),Tu.copy(e.position),Tu.add(xu[t]),e.up.copy(Su[t]),e.lookAt(Tu),e.updateMatrixWorld(),n.makeTranslation(-wu.x,-wu.y,-wu.z),Cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Cu,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&y(d,s),d.needsUpdate=!1}v=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function y(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new cn(i.x,i.y,{format:le,type:A}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Du(e,t){function n(){let t=!1,n=new on,r=null,i=new on(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=mt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,j=0,M=e.getParameter(e.VERSION);M.indexOf(`WebGL`)===-1?M.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),ne=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(M)[1]),ne=j>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new on().fromArray(ae),N=new on().fromArray(oe);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),ue(e.CULL_FACE),_e(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(de(e.BLEND),g=!1);return}if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(ne&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+te-1),re!==t&&(e.activeTexture(t),re=t)}function Te(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+te-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function P(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function F(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t){N.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),N.copy(t))}function I(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function L(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,se.set(0,0,e.canvas.width,e.canvas.height),N.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:P,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:I,uniformBlockBinding:L,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:F,viewport:Re,reset:ze}}function Ou(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new V,u=new WeakMap,d=new Set,f,p=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):st(`canvas`)}function T(e,t,n){let r=1,i=Ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=w(n,a));let o=t?w(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?et:W.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ee(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),j(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),re(t)}function j(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&M(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function M(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function re(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ie=0;function ae(){ie=0}function oe(){return ie}function N(e){ie=e}function ce(){let e=ie;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ie+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ue(t,i){let a=r.get(t);if(t.isVideoTexture&&P(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){xe(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){xe(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){Se(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let me={[m]:e.REPEAT,[h]:e.CLAMP_TO_EDGE,[g]:e.MIRRORED_REPEAT},he={[_]:e.NEAREST,[v]:e.NEAREST_MIPMAP_NEAREST,[y]:e.NEAREST_MIPMAP_LINEAR,[b]:e.LINEAR,[x]:e.LINEAR_MIPMAP_NEAREST,[S]:e.LINEAR_MIPMAP_LINEAR},ge={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function _e(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,me[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,me[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,me[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,he[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,he[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ge[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ve(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,te));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=le(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&M(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ye(n.start,r.width,4),c=ye(t.start,r.width,4);n.start<=i+1&&a===c&&ye(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function xe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ve(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=W.getPrimaries(W.workingColorSpace),r=o.colorSpace===``?null:W.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Fe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=k(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);_e(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,v=f.__version===void 0||l===!0,y=u.dataReady,b=ee(o,t);if(o.isDepthTexture)m=A(o.format===se,o.type),v&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(v&&n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height),y&&be(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(y){if(o.layerUpdates.size>0){let t=Cs(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?y&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?y&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,t.width,t.height,t.depth),y){if(o.layerUpdates.size>0){let i=Cs(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(v&&n.texStorage3D(e.TEXTURE_3D,b,m,t.width,t.height,t.depth),y&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(v){if(_)n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<b;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let t=Ie(g[0]);n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(v){let r=Ie(t);n.texStorage2D(e.TEXTURE_2D,b,m,r.width,r.height)}y&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);E(o)&&D(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,o,s){if(o.image.length!==6)return;let c=ve(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=W.getPrimaries(W.workingColorSpace),r=o.colorSpace===``?null:W.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Fe(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=k(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=ee(o,h);_e(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Ie(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ce(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ne(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=k(o.internalFormat,c,l,o.normalized,o.colorSpace);Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,te)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ue(i.depthTexture,0);let u=l.__webglTexture,d=Ne(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Te(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Te(i.__webglFramebuffer[0],t,0):Te(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),we(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),we(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,i){let a=r.get(t);n!==void 0&&Ce(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ee(t)}function Oe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,ne);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Pe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ne(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),we(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ce(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),_e(c,a),Ce(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),_e(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ce(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Ee(t)}function ke(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Ae=[],je=[];function Me(t){if(t.samples>0){if(Pe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ae.length=0,je.length=0,Ae.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Ae.push(l),je.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,je)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ne(e){return Math.min(i.maxSamples,e.samples)}function Pe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function P(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(W.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=N,this.setTexture2D=ue,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=De,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ku(e,t){function n(n,r=``){let i,a=W.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Au=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ju=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Si(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new oo({vertexShader:Au,fragmentShader:ju,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ui(new Wa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nu=class extends ht{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Mu,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new V,w=null,T=null,E=new Zo;E.viewport=new on;let D=new Zo;D.viewport=new on;let k=[E,D],A=new is,ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Bn,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Bn,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Bn,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}ee=null,te=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(S.width,S.height,!1),T!==null){let e=T.camera;e.fov=T.fov,e.zoom=T.zoom,e.updateProjectionMatrix(),T=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,re),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?se:oe,a=_.stencil?ne:O);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new cn(d.textureWidth,d.textureHeight,{format:ae,type:C,depthTexture:new bi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new cn(f.framebufferWidth,f.framebufferHeight,{format:ae,type:C,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ie=new H,N=new H;function ce(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),N.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(N),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function le(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=D.near=E.near=t,A.far=D.far=E.far=n,(ee!==A.near||te!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),ee=A.near,te=A.far),A.layers.mask=e.layers.mask|6,E.layers.mask=A.layers.mask&-5,D.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;le(A,i);for(let e=0;e<a.length;e++)le(a[e],i);a.length===2?ce(A,E,D):A.projectionMatrix.copy(E.projectionMatrix),T===null&&e.isPerspectiveCamera&&(T={camera:e,fov:e.fov,zoom:e.zoom}),ue(e,A,i)};function ue(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=yt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let de=null;function fe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=k[n];o===void 0&&(o=new Zo,o.layers.enable(n),o.viewport=new on,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Si,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let pe=new Ts;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},Pu=new dn,Fu=new U;Fu.set(-1,0,0,0,1,0,0,0,1);function Iu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,no(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Pu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Fu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Lu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Ru=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zu=null;function Bu(){return zu===null&&(zu=new pi(Ru,16,16,le,A),zu.name=`DFG_LUT`,zu.minFilter=b,zu.magFilter=b,zu.wrapS=h,zu.wrapT=h,zu.generateMipmaps=!1,zu.needsUpdate=!0),zu}var Vu=class{constructor(e={}){let{canvas:t=ct(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=C}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([de,ue,ce]),g=new Set([C,O,E,ne,ee,te]),_=new Uint32Array(4),v=new Int32Array(4),y=new H,b=null,x=null,w=[],T=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,j=!1,M=null,re=null,ie=null,ae=null;this._outputColorSpace=Qe;let oe=0,se=0,N=null,le=-1,fe=null,pe=new on,me=new on,he=null,ge=new K(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new on(0,0,ve,ye),we=new on(0,0,ve,ye),Te=!1,Ee=new _i,De=!1,Oe=!1,ke=new dn,Ae=new H,je=new on,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return N===null?be:1}let P=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,F,Re,I,L,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,$e,et,tt,nt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ot,!1),t.addEventListener(`webglcontextrestored`,st,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),P===null){let t=`webgl2`;if(P=Fe(t,e),P===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}rt()}catch(e){throw t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),z(`WebGLRenderer: `+e.message),e}function rt(){Ie=new ac(P),Ie.init(),et=new ku(P,Ie),Le=new Ps(P,Ie,e,et),F=new Du(P,Ie),Le.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),re=P.createFramebuffer(),ie=P.createFramebuffer(),ae=P.createFramebuffer(),Re=new cc(P),I=new su,L=new Ou(P,Ie,F,I,Le,et,Re),ze=new ic(k),Be=new Es(P),tt=new Ms(P,Be),Ve=new oc(P,Be,Re,tt),He=new uc(P,Ve,Be,tt,Re),Xe=new lc(P,Le,L),qe=new Fs(I),Ue=new ou(k,ze,Ie,Le,tt,qe),We=new Iu(k,I),Ge=new du,Ke=new vu(Ie),Ye=new js(k,ze,F,He,p,s),Je=new Eu(k,He,Le),nt=new Lu(P,Re,Le,F),Ze=new Ns(P,Ie,Re),$e=new sc(P,Ie,Re),Re.programs=Ue.programs,k.capabilities=Le,k.extensions=Ie,k.properties=I,k.renderLists=Ge,k.shadowMap=Je,k.state=F,k.info=Re}m!==1009&&(D=new fc(m,t.width,t.height,o,r,i));let at=new Nu(k,P);this.xr=at,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){if(at.isPresenting){R(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}D.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(be).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(be).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ye.getClearColor(),r=Ye.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),M=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Ye.dispose(),Ge.dispose(),Ke.dispose(),I.dispose(),ze.dispose(),He.dispose(),tt.dispose(),nt.dispose(),Ue.dispose(),at.dispose(),at.removeEventListener(`sessionstart`,vt),at.removeEventListener(`sessionend`,yt),bt.stop()};function ot(e){e.preventDefault(),ut(`WebGLRenderer: Context Lost.`),j=!0}function st(){ut(`WebGLRenderer: Context Restored.`),j=!1;let e=Re.autoReset,t=Je.enabled,n=Je.autoUpdate,r=Je.needsUpdate,i=Je.type;rt(),Re.autoReset=e,Je.enabled=t,Je.autoUpdate=n,Je.needsUpdate=r,Je.type=i}function lt(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),ft(t)}function ft(e){mt(e),I.remove(e)}function mt(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=Be.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n,r){M!==null&&e.isNodeMaterial&&M.setObject(r,e),De===!0&&qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),M!==null&&M.renderStart(e,t,n),x=Ke.get(n),x.init(t),T.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),M!==null&&M.updateLights(x.state.lightsArray),Oe=this.localClippingEnabled,De=qe.init(this.clippingPlanes,Oe),De===!0&&qe.setGlobalState(this.clippingPlanes,t),M!==null&&Je.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ht(o,n,t,e),r.add(o)}else ht(i,n,t,e),r.add(i)}}),x=T.pop(),M!==null&&M.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function _t(e){gt&&gt(e)}function vt(){bt.stop()}function yt(){bt.start()}let bt=new Ts;bt.setAnimationLoop(_t),typeof self<`u`&&bt.setContext(self),this.setAnimationLoop=function(e){gt=e,at.setAnimationLoop(e),e===null?bt.stop():bt.start()},at.addEventListener(`sessionstart`,vt),at.addEventListener(`sessionend`,yt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(j===!0)return;M!==null&&M.renderStart(e,t);let n=at.enabled===!0&&at.isPresenting===!0,r=D!==null&&(N===null||n)&&D.begin(k,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(t),t=at.getCamera()),e.isScene===!0&&e.onBeforeRender(k,e,t,N),x=Ke.get(e,T.length),x.init(t),x.state.textureUnits=L.getTextureUnits(),T.push(x),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ee.setFromProjectionMatrix(ke,it,t.reversedDepth),Oe=this.localClippingEnabled,De=qe.init(this.clippingPlanes,Oe),b=Ge.get(e,w.length),b.init(),w.push(b),at.enabled===!0&&at.isPresenting===!0){let e=k.xr.getDepthSensingMesh();e!==null&&B(e,t,-1/0,k.sortObjects)}B(e,t,0,k.sortObjects),b.finish(),M!==null&&M.updateLights(x.state.lightsArray),k.sortObjects===!0&&b.sort(xe,Se),Ne=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Ne&&Ye.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),De===!0&&qe.beginShadows();let i=x.state.shadowsArray;if(Je.render(i,e,t),De===!0&&qe.endShadows(),(r&&D.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Ne&&Ye.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(b,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Ne&&Ye.render(e),xt(b,e,t)}N!==null&&se===0&&(L.updateMultisampleRenderTarget(N),L.updateRenderTargetMipmap(N)),r&&D.end(k),e.isScene===!0&&e.onAfterRender(k,e,t),tt.resetDefaultState(),le=-1,fe=null,T.pop(),T.length>0?(x=T[T.length-1],L.setTextureUnits(x.state.textureUnits),De===!0&&qe.setGlobalState(k.clippingPlanes,x.state.camera)):x=null,w.pop(),b=w.length>0?w[w.length-1]:null,M!==null&&M.renderEnd()};function B(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ee)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=He.update(e),a=e.material;a.visible&&b.push(e,i,a,n,je.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ee))){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,je.z,s,t)}}else a.visible&&b.push(e,i,a,n,je.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)B(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),De===!0&&qe.setGlobalState(k.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new cn(1,1,{generateMipmaps:!0,type:e?A:C,minFilter:S,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:W.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*k.transmissionResolutionScale,o.w*k.transmissionResolutionScale);let s=k.getRenderTarget(),c=k.getActiveCubeFace(),l=k.getActiveMipmapLevel();k.setRenderTarget(a),k.getClearColor(ge),_e=k.getClearAlpha(),_e<1&&k.setClearColor(16777215,.5),k.clear(),Ne&&Ye.render(n);let u=k.toneMapping;k.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),De===!0&&qe.setGlobalState(k.clippingPlanes,r),Ct(e,n,r),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}k.setRenderTarget(s,c,l),k.setClearColor(ge,_e),d!==void 0&&(r.viewport=d),k.toneMapping=u}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){M!==null&&i.isNodeMaterial&&M.setObject(e,i),e.onBeforeRender(k,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(k,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=2):k.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(k,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=Me);let r=I.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=Ue.getUniforms(e),M!==null&&e.isNodeMaterial&&M.build(e,n,s),e.onBeforeCompile(s,k),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),Dt(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=yl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=Me),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?k.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:W.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=k.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=x.state.lights;if(De===!0&&(Oe===!0||e!==fe)){let t=e===fe&&r.id===le;qe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=Tt(r,t,i),M&&r.isNodeMaterial&&M.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),D=v.uniforms;if(F.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==le&&(le=r.id,w=!0),v.needsLights){let e=Ot(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(P,`projectionMatrix`,e.projectionMatrix),E.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(P,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&E.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(P,`sunShadowMap`,y.state.sunShadowMap,L),y.state.directionalShadowMap.length>0&&E.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,L),y.state.spotShadowMap.length>0&&E.setValue(P,`spotShadowMap`,y.state.spotShadowMap,L),y.state.pointShadowMap.length>0&&E.setValue(P,`pointShadowMap`,y.state.pointShadowMap,L)),i.isSkinnedMesh){E.setOptional(P,i,`bindMatrix`),E.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(P,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(E.setOptional(P,i,`batchingTexture`),E.setValue(P,`batchingTexture`,i._matricesTexture,L),E.setOptional(P,i,`batchingIdTexture`),E.setValue(P,`batchingIdTexture`,i._indirectTexture,L),E.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(P,`batchingColorTexture`,i._colorsTexture,L));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Xe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=Bu()),w){if(E.setValue(P,`toneMappingExposure`,k.toneMappingExposure),v.needsLights&&At(D,T),a&&r.fog===!0&&We.refreshFogUniforms(D,a),We.refreshMaterialUniforms(D,r,be,ye,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}yl.upload(P,Et(v),D,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(yl.upload(P,Et(v),D,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(P,`center`,i.center),E.setValue(P,`modelViewMatrix`,i.modelViewMatrix),E.setValue(P,`normalMatrix`,i.normalMatrix),E.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,S),nt.bind(n,S)}}return S}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),le=-1;return}if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=re),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}le=-1};function Mt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,et.convert(l),et.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await pt(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,ie),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){oe=0,se=0,N=null,F.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return it}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=W._getDrawingBufferColorSpace(e),t.unpackColorSpace=W._getUnpackColorSpace()}},Hu=new H;function Uu(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Hu.copy(t),Hu[r]=0,Hu.normalize();let l=.5*o/(o+s),u=1-Hu.angleTo(e)/c;return Math.sign(Hu[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Wu=class e extends Ci{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new H,c=new H,l=new H(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new H,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Uu(m,c,`z`,`y`,i,n),f[a+1]=1-Uu(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Uu(m,c,`z`,`y`,i,n),f[a+1]=1-Uu(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Uu(m,c,`x`,`z`,i,e),f[a+1]=Uu(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Uu(m,c,`x`,`z`,i,e),f[a+1]=1-Uu(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Uu(m,c,`x`,`y`,i,e),f[a+1]=1-Uu(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Uu(m,c,`x`,`y`,i,e),f[a+1]=1-Uu(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},Gu={type:`change`},Ku={type:`start`},qu={type:`end`},Ju=new Zr,Yu=new Wr,Xu=Math.cos(70*Vt.DEG2RAD),Zu=new H,Qu=2*Math.PI,$u={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ed=1e-6,td=class extends Ss{constructor(e,t=null){super(e,t),this.state=$u.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:f.ROTATE,MIDDLE:f.DOLLY,RIGHT:f.PAN},this.touches={ONE:p.ROTATE,TWO:p.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Ht,this._lastTargetPosition=new H,this._quat=new Ht().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xs,this._sphericalDelta=new xs,this._scale=1,this._panOffset=new H,this._rotateStart=new V,this._rotateEnd=new V,this._rotateDelta=new V,this._panStart=new V,this._panEnd=new V,this._panDelta=new V,this._dollyStart=new V,this._dollyEnd=new V,this._dollyDelta=new V,this._dollyDirection=new H,this._mouse=new V,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rd.bind(this),this._onPointerDown=nd.bind(this),this._onPointerUp=id.bind(this),this._onContextMenu=dd.bind(this),this._onMouseWheel=sd.bind(this),this._onKeyDown=cd.bind(this),this._onTouchStart=ld.bind(this),this._onTouchMove=ud.bind(this),this._onMouseDown=ad.bind(this),this._onMouseMove=od.bind(this),this._interceptControlDown=fd.bind(this),this._interceptControlUp=pd.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=$u.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gu),this.update(),this.state=$u.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Zu.copy(t).sub(this.target),Zu.applyQuaternion(this._quat),this._spherical.setFromVector3(Zu),this.autoRotate&&this.state===$u.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Qu:n>Math.PI&&(n-=Qu),r<-Math.PI?r+=Qu:r>Math.PI&&(r-=Qu),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Zu.setFromSpherical(this._spherical),Zu.applyQuaternion(this._quatInverse),t.copy(this.target).add(Zu),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Zu.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new H(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new H(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Zu.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Ju.origin.copy(this.object.position),Ju.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ju.direction))<Xu?this.object.lookAt(this.target):(Yu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ju.intersectPlane(Yu,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>ed||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ed||this._lastTargetPosition.distanceToSquared(this.target)>ed?(this.dispatchEvent(Gu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Qu/60/60*this.autoRotateSpeed:Qu/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Zu.setFromMatrixColumn(t,0),Zu.multiplyScalar(-e),this._panOffset.add(Zu)}_panUp(e,t){this.screenSpacePanning===!0?Zu.setFromMatrixColumn(t,1):(Zu.setFromMatrixColumn(t,0),Zu.crossVectors(this.object.up,Zu)),Zu.multiplyScalar(e),this._panOffset.add(Zu)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Zu.copy(r).sub(this.target);let i=Zu.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qu*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qu*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new V,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function nd(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function rd(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function id(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(qu),this.state=$u.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function ad(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case f.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=$u.DOLLY;break;case f.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=$u.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=$u.ROTATE}break;case f.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=$u.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=$u.PAN}break;default:this.state=$u.NONE}this.state!==$u.NONE&&this.dispatchEvent(Ku)}function od(e){switch(this.state){case $u.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case $u.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case $u.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function sd(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===$u.NONE&&(e.preventDefault(),this.dispatchEvent(Ku),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(qu))}function cd(e){this.enabled!==!1&&this._handleKeyDown(e)}function ld(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case p.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=$u.TOUCH_ROTATE;break;case p.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=$u.TOUCH_PAN;break;default:this.state=$u.NONE}break;case 2:switch(this.touches.TWO){case p.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=$u.TOUCH_DOLLY_PAN;break;case p.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=$u.TOUCH_DOLLY_ROTATE;break;default:this.state=$u.NONE}break;default:this.state=$u.NONE}this.state!==$u.NONE&&this.dispatchEvent(Ku)}function ud(e){switch(this._trackPointer(e),this.state){case $u.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case $u.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case $u.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case $u.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=$u.NONE}}function dd(e){this.enabled!==!1&&e.preventDefault()}function fd(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function pd(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function md(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Br,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=hd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=hd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function hd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Er(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var gd=(e,t,n,r)=>Array.from({length:12},(i,a)=>[e+Math.cos(a*Math.PI/6)*n,t+Math.sin(a*Math.PI/6)*r]),_d=(e,t,n,r=8)=>({name:e,points:t,color:n,vehicles:r}),vd=(e,t,n,r,i,a,o)=>({id:e,name:t,english:n,position:r,kind:i,description:a,activity:o}),yd={heart:{title:`四腔分区 · 双环泵站之城`,description:`左右两片泵站街区，各自承担一条循环。双向运输大道围绕四个腔室，冠脉补给街服务着心肌居民。`,ground:`#e4d6bd`,accent:`#d67f70`,vehicle:`红细胞氧气货车`,citizen:`心肌居民与红细胞快递员`,roads:[_d(`右心运输环`,gd(-5,0,3.9,8.3),`#adbfc9`,10),_d(`左心运输环`,gd(5,0,3.9,8.3),`#d5a399`,10),_d(`冠脉补给环`,gd(0,0,13.5,11.6),`#c7b8a7`,12)],landmarks:[vd(`right-atrium`,`静脉归航站`,`RIGHT ATRIUM`,[-5,-4],`pump`,`静脉把来自身体的血液带回右心房。这里像归航调度站，为下一段肺循环整理队伍。`,`低氧运输车依次抵达归航环线`),vd(`right-ventricle`,`右心动力厂`,`RIGHT VENTRICLE`,[-5,3.3],`pump`,`右心室收缩，将血液经肺动脉送往肺部。瓣膜阻止回流，泵站按共同的节律工作。`,`右侧泵组随心跳起伏，单向闸门循环开合`),vd(`left-atrium`,`肺静脉迎新港`,`LEFT ATRIUM`,[5,-4],`pump`,`完成肺泡气体交换的血液，经肺静脉返回左心房，再流入左心室。`,`富氧运输队从肺部归来`),vd(`left-ventricle`,`左心主泵广场`,`LEFT VENTRICLE`,[5,3.3],`pump`,`左心室把血液送进主动脉，供给全身。城市用高耸的双泵塔表现它持续的泵送工作。`,`主泵收缩，主动脉物流环保持前进`),vd(`pacemaker`,`窦房结节律塔`,`PACEMAKER`,[0,-7.4],`clock`,`正常心律通常起源于右心房内的窦房结。这座置于地图中央上方的钟塔是节律的城市化标记。`,`脉冲灯按当前心率闪动`),vd(`coronary`,`心肌补给花园`,`CORONARY DISTRICT`,[0,6.8],`exchange`,`心肌自身也需要供血。冠状动脉及其分支为心肌送去氧和养分，静脉负责回流。`,`补给车和步行居民分道通行`)]},brain:{title:`放射网络 · 神经通信之城`,description:`皮层议事厅居中，四座功能街区由树突步道和髓鞘高架连成网络。电信号沿轴突穿行，突触站负责交接。`,ground:`#dcd5e3`,accent:`#a58bbf`,vehicle:`轴突信号电车`,citizen:`神经元信使与胶质细胞`,roads:[_d(`皮层中央环`,gd(0,0,4.1,3.6),`#b7a7c8`,7),_d(`神经外环`,gd(0,0,12.3,10.1),`#b5aec5`,12)],landmarks:[vd(`cortex`,`皮层议事厅`,`CORTEX COMMONS`,[0,0],`cortex`,`大脑皮层包含相互联系的功能区域。中央议事厅象征信息整合，并不代表所有指令只由一个中心发出。`,`穹顶信号灯与放射线路持续通信`),vd(`sensory`,`感觉接收街`,`SENSORY QUARTER`,[-7,-4.5],`relay`,`感觉通路把来自身体和环境的信息带入中枢神经系统。接收站用脉冲灯表现信号的传递。`,`感觉信号沿有髓轴突抵达接收塔`),vd(`motor`,`运动发令港`,`MOTOR QUARTER`,[7,-4.5],`relay`,`运动相关脑区和其他神经结构协作，参与组织动作。城市中的电车是信号传递的形象化比喻。`,`信号电车沿固定线路发车`),vd(`memory`,`记忆档案馆`,`MEMORY ARCHIVE`,[-6.5,4.8],`memory`,`学习与记忆涉及神经连接活动和可塑性的变化。档案馆用相互连接的书页状楼体表现信息关联。`,`档案楼之间持续交换金色信号`),vd(`glia`,`胶质维护花园`,`GLIAL GARDENS`,[6.5,4.8],`exchange`,`胶质细胞参与支持神经元、维持环境和形成髓鞘。围绕线路的维护花园是它们的工作街区。`,`维护居民沿步道巡查通信网络`)]},lungs:{title:`树状分支 · 双叶交换云港`,description:`气管高塔向两侧分出支气管，簇状肺泡港铺展在末梢。血管物流环从港口旁穿过，完成两种气体的交换。`,ground:`#d0e0d4`,accent:`#78aaa0`,vehicle:`肺泡气体交换车`,citizen:`肺泡细胞与红细胞搬运员`,roads:[_d(`左叶交换环`,gd(-6,1,4,6.5),`#a1bcc0`,10),_d(`右叶交换环`,gd(6,1,4,6.5),`#cba5a0`,10),_d(`胸廓服务环`,gd(0,0,13.5,11.7),`#b4c2ac`,12)],landmarks:[vd(`trachea`,`气管迎风塔`,`TRACHEAL GATE`,[0,-7],`trachea`,`空气经气管进入逐级分支的支气管与细支气管。这里的树状管道展示空气通路的分支关系。`,`中央通气塔向两侧分支输送空气`),vd(`left-alveoli`,`左叶肺泡温室`,`LEFT ALVEOLAR GROVE`,[-6,-2.6],`alveoli`,`成簇的肺泡提供很大的气体交换表面积，外侧环绕毛细血管。柔软的温室群随呼吸一起起伏。`,`肺泡穹顶按照当前呼吸频率舒展`),vd(`right-alveoli`,`右叶肺泡温室`,`RIGHT ALVEOLAR GROVE`,[6,-2.6],`alveoli`,`氧气和二氧化碳沿各自的分压梯度扩散。两侧温室共同工作，不是只在一侧装氧、另一侧卸气。`,`氧分子光点从肺泡向交换码头移动`),vd(`oxygen-dock`,`氧气装卸码头`,`GAS EXCHANGE DOCK`,[-6,4.6],`exchange`,`氧气跨过肺泡与毛细血管之间的薄壁，与红细胞内的血红蛋白结合。二氧化碳向相反方向扩散。`,`货车经过码头，完成气体交接`),vd(`diaphragm`,`膈肌潮汐庭院`,`DIAPHRAGM GARDEN`,[6,4.6],`reservoir`,`膈肌等呼吸肌改变胸腔容积，带动吸气和呼气。肺的膨胀来自这些压力变化。`,`庭院的膜面随呼吸缓缓起落`)]},gut:{title:`曲折工序 · 营养加工长街`,description:`从混合车间到绒毛装卸梯田，街区沿加工顺序延伸。弯曲肠道、物料传送带和肝脏调配港各司其职。`,ground:`#e9dec0`,accent:`#cfa05d`,vehicle:`营养分子补给车`,citizen:`上皮细胞与绒毛装卸员`,roads:[_d(`营养加工大道`,[[-11,-6],[-6,-9],[3,-9],[11,-5],[11,3],[7,8],[-2,9],[-11,5],[-9,0]],`#c7b397`,13),_d(`吸收物流环`,gd(5,1,3.2,3.8),`#d3b695`,7),_d(`门静脉转运环`,gd(-4.15,2,3,4),`#b4b5c3`,7)],landmarks:[vd(`stomach`,`胃部混合工坊`,`GASTRIC WORKSHOP`,[-5.5,-4.8],`stomach`,`胃通过肌肉运动混合食物，并用胃酸和消化酶参与消化。这里的机械翻滚与传送带是加工过程的比喻。`,`混合罐转动，食糜沿工序向前移动`),vd(`enzyme`,`消化液配给站`,`ENZYME DEPOT`,[3.7,-5.8],`relay`,`胰液、胆汁和肠液共同参与小肠内的消化。城市用多罐配给站表现不同消化液的协作。`,`配给小车向加工车间运送物料`),vd(`villi`,`小肠绒毛梯田`,`VILLUS TERRACES`,[5,1],`villi`,`绒毛和微绒毛扩大吸收面积。大多数营养物质在小肠被吸收，而不是在胃中完成吸收。`,`金色营养颗粒在绒毛装卸线持续流动`),vd(`liver`,`肝脏调配港`,`HEPATIC DISPATCH`,[-4.2,2],`liver`,`吸收的糖和氨基酸等先经门静脉到达肝脏，再参与储存、转化和分配。港口模拟这个中转环节。`,`营养货车在调配仓库有序停靠`),vd(`lacteal`,`乳糜淋巴码头`,`LYMPHATIC WHARF`,[1,6.7],`lymph`,`大部分膳食脂肪经加工后，先进入小肠绒毛内的淋巴管，再随淋巴回到血液循环。`,`乳糜微粒沿独立的淋巴支线离港`)]},kidneys:{title:`双侧水城 · 肾单位回收渠`,description:`双侧过滤街区围绕肾小球广场展开，U 形肾小管穿过回收花园，汇入中央集合港。水与有用物质被重新送回。`,ground:`#cfdddd`,accent:`#7ca9b7`,vehicle:`水盐回收工程车`,citizen:`肾单位管理员与回收员`,roads:[_d(`左肾回收环`,gd(-6,0,4,7.5),`#9eb9c4`,11),_d(`右肾回收环`,gd(6,0,4,7.5),`#a7c4c3`,11),_d(`肾门运输环`,gd(0,0,13.5,11.6),`#c1b6ae`,11)],landmarks:[vd(`left-filter`,`左肾小球滤池`,`LEFT GLOMERULUS`,[-6,-4.4],`filter`,`血液经过肾小球毛细血管时，水和一些小分子进入滤液。血细胞与大部分蛋白质通常留在血管中。`,`滤池内的水分子进入肾小管`),vd(`right-filter`,`右肾小球滤池`,`RIGHT GLOMERULUS`,[6,-4.4],`filter`,`每个肾脏包含许多肾单位，过滤与后续处理共同进行。城市只用少数放大的滤池展示其工作方式。`,`滤池和运输车持续协同工作`),vd(`left-tubule`,`左侧重吸收花园`,`REABSORPTION GARDEN`,[-6,3.8],`tubule`,`肾小管把大部分滤出的水和有用物质重吸收回血液，也分泌某些物质。回收比单纯过滤更重要。`,`U 形渠中的回收光点不断返回`),vd(`right-tubule`,`水盐平衡街区`,`WATER & SALT QUARTER`,[6,3.8],`tubule`,`肾脏调节水盐及酸碱平衡。渠边的调节阀和储罐，是这些处理活动的城市化表现。`,`工程车巡查水渠和调节站`),vd(`collector`,`集合管归流港`,`COLLECTING HARBOR`,[0,6.7],`reservoir`,`经过过滤、重吸收和分泌后，剩余液体形成尿液，经集合管等通路流向肾盂和输尿管。`,`多条处理支线在中央水港汇合`)]},immune:{title:`六角防线 · 淋巴守护要塞`,description:`环形淋巴大道围绕协作中心，识别站、训练广场和抗体工坊分区布置。巡逻车辆与免疫居民在城墙内有序往来。`,ground:`#d7dfc6`,accent:`#90aa78`,vehicle:`白细胞巡逻车`,citizen:`吞噬细胞、T 细胞与 B 细胞`,roads:[_d(`淋巴外巡逻环`,gd(0,0,12.4,10.6),`#adbea0`,13),_d(`协作内环`,gd(0,0,4.3,3.8),`#c0c8ad`,7)],landmarks:[vd(`node`,`淋巴协作议事厅`,`LYMPH NODE COMMONS`,[0,0],`citadel`,`淋巴结为免疫细胞提供交流与激活的场所。免疫系统分布全身，这座要塞只是协作网络的一站。`,`内外巡逻环与中央协作厅持续运行`),vd(`scanner`,`抗原识别关卡`,`ANTIGEN CHECKPOINT`,[-7,3.5],`scanner`,`免疫细胞通过多种识别机制察觉异常。关卡的扫描灯展示识别过程，不是实际的光学检测。`,`扫描环轮转，巡逻车分批经过`),vd(`tcell`,`T 细胞协作广场`,`T CELL COURT`,[-6.7,-4.4],`academy`,`不同 T 细胞参与辅助、调节或直接应对受感染细胞等任务。广场表现它们之间的协作。`,`细胞小队在交流步道上集结`),vd(`bcell`,`抗体制造工坊`,`ANTIBODY WORKSHOP`,[6.7,-4.4],`antibody`,`B 细胞可分化为浆细胞并产生抗体。Y 形的屋顶与产品，是抗体结构的艺术化标记。`,`Y 形抗体沿出库线路移动`),vd(`memory`,`免疫记忆档案馆`,`IMMUNE MEMORY`,[7,3.6],`memory`,`部分淋巴细胞形成记忆，使再次遇到相同抗原时能够更快作出反应。这里保存的是识别经验。`,`档案员与巡逻队不断交接信息`),vd(`gate`,`淋巴入城门`,`LYMPHATIC GATE`,[0,7.5],`lymph`,`淋巴与免疫细胞通过淋巴管在组织和淋巴结之间流动。城门连接更广泛的免疫网络。`,`淋巴运输队沿外环进入协作街区`)]}},bd=(e,t)=>(e%t+t)%t;function xd(e){let t=Math.sin(e*127.1+311.7)*43758.5453;return t-Math.floor(t)}function Sd(e,t,n){return Array.from({length:e},(r,i)=>({distance:bd((i+.12+xd(n+i)*.36)*t/e,t),speed:0,cruise:.95+xd(n+i+100)*.65,stop:i===0?t*.62:null,dwell:0,dwellDuration:3.5+xd(n)*3,serviced:!1}))}function Cd(e,t,n,r=1){if(!Number.isFinite(n)||n<=0||!e.length)return;let i=Math.min(n,5);for(;i>0;){let n=Math.min(i,1/30);i-=n;let a=e.map(e=>e.distance);e.forEach((e,i)=>{let o=Math.min(t,...a.filter((e,t)=>t!==i).map(e=>bd(e-a[i],t))),s=e.cruise*Math.max(.2,r),c=1/0;if(e.stop!==null&&(c=bd(e.stop-e.distance,t),e.serviced&&c>2&&c<t-2&&(e.serviced=!1),e.serviced||(c<.025?(e.dwell=e.dwellDuration,e.serviced=!0):s=Math.min(s,Math.max(.07,c*.9)))),e.dwell>0){e.dwell=Math.max(0,e.dwell-n),e.speed=0;return}s=Math.min(s,Math.max(0,(o-1.65)*1.4)),e.speed+=(s-e.speed)*(1-Math.exp(-n*2.4));let l=Math.min(e.speed*n,Math.max(0,o-1.5));e.serviced||(l=Math.min(l,c)),e.distance=bd(e.distance+l,t)})}}function wd(e,t,n){let r=.28+xd(n+41)*.22,i=t/r/2,a=2+xd(n+19)*7,o=3+xd(n+31)*9,s=2*i+a+o,c=bd(e+xd(n)*s,s);return c<i?{progress:c/(2*i),moving:!0,pace:r}:c<i+a?{progress:.5,moving:!1,pace:r}:c<2*i+a?{progress:.5+(c-i-a)/(2*i),moving:!0,pace:r}:{progress:0,moving:!1,pace:r}}var Td=[`heart`,`brain`,`lungs`,`gut`,`kidneys`,`immune`],Ed={heart:[{name:`阿律`,role:`心肌街区送件员`,wish:`把今天的补给送到泵站附近。`},{name:`小栗`,role:`细胞书屋店员`,wish:`工作结束后，去街边读一会儿书。`},{name:`米粒`,role:`心肌居民`,wish:`沿着冠脉街，慢慢走回家。`}],brain:[{name:`阿突`,role:`神经元信使`,wish:`把信息交给下一位伙伴。`},{name:`绒绒`,role:`胶质维护员`,wish:`照料信使，也照料沿街的小花房。`},{name:`知知`,role:`记忆书屋店员`,wish:`今天也想认识一个新朋友。`}],lungs:[{name:`泡泡`,role:`肺泡港接待员`,wish:`等一班红细胞运输队到港。`},{name:`小青`,role:`肺泡花房店员`,wish:`在舒展的穹顶下歇一会儿。`},{name:`云云`,role:`交换码头搬运员`,wish:`把每一次交接都照看好。`}],gut:[{name:`麦芽`,role:`营养街补给员`,wish:`去绒毛梯田看看新一批补给。`},{name:`酶酶`,role:`加工街联络员`,wish:`把加工站与小集市连接起来。`},{name:`糖糖`,role:`糖原仓库店员`,wish:`整理货架，再去喝一杯茶。`}],kidneys:[{name:`小澄`,role:`肾单位回收员`,wish:`巡看水渠，找回可再利用的物质。`},{name:`盐盐`,role:`水盐街管理员`,wish:`沿水岸完成今天的巡查。`},{name:`滴滴`,role:`回收驿站店员`,wish:`在小桥边等朋友下班。`}],immune:[{name:`小白`,role:`吞噬细胞巡查员`,wish:`看看街区有没有需要协作的事情。`},{name:`阿T`,role:`T细胞联络员`,wish:`去广场与伙伴交流。`},{name:`贝贝`,role:`B细胞街区居民`,wish:`把新的识别经验写进手记。`}]},Dd={heart:{id:`delivery`,title:`泵站的补给时刻`,poi:`coronary`,phases:[`补给抵达，居民向花园集合`,`交接氧气与养分`,`居民散去，下一轮运输继续`],fact:`心肌自身也需要冠状动脉供血。`},brain:{id:`relay`,title:`一束信号的接力`,poi:`cortex`,phases:[`接收端亮起`,`信号沿连接依次传播`,`伙伴完成交接，灯光渐渐平息`],fact:`神经系统通过相互连接的神经元网络传递和处理信息。`},lungs:{id:`exchange`,title:`肺泡港的气体交接`,poi:`oxygen-dock`,phases:[`红细胞运输队靠近`,`氧气与二氧化碳向相反方向扩散`,`完成交换，运输继续`],fact:`气体沿各自分压梯度扩散；颜色和搬运情境是比喻。`},gut:{id:`harvest`,title:`绒毛梯田开仓了`,poi:`villi`,phases:[`一批营养物料抵达`,`绒毛装卸线开始交接`,`补给分送到后续处理路线`],fact:`小肠绒毛和微绒毛扩大营养吸收面积。`},kidneys:{id:`return`,title:`回收渠的归流时刻`,poi:`left-tubule`,phases:[`滤液沿肾小管前行`,`水和有用物质返回血液`,`剩余液体继续接受处理`],fact:`重吸收是选择性回收，并非把滤液全部排出。`},immune:{id:`meeting`,title:`关卡前的小小协作`,poi:`scanner`,phases:[`识别线索出现`,`免疫居民来到关卡交流`,`协作结束，巡查继续`],fact:`免疫细胞通过多种识别与交流机制协同工作。`}};function Od(e,t){let n=((t+Td.indexOf(e)*11)%66+66)%66;return{active:n<24,progress:Math.min(1,n/24),stage:Math.min(2,Math.floor(n/8)),remaining:Math.ceil(66-n),...Dd[e]}}var kd=[{city:`heart`,poi:`right-ventricle`,title:`小红 · 从右心启程`,text:`身体归来的血液含氧较少。右心室将它送往肺部；这一段经过肺动脉。`,cargo:`低氧血液`,oxygen:!1},{city:`lungs`,poi:`oxygen-dock`,title:`小红 · 在肺泡港补给`,text:`氧气从肺泡扩散进入血液，与血红蛋白结合；二氧化碳向肺泡扩散。`,cargo:`接收氧气 O₂`,oxygen:!0},{city:`heart`,poi:`left-ventricle`,title:`小红 · 左心中转`,text:`血液经肺静脉返回左心，再由左心室送入主动脉。`,cargo:`携带氧气 O₂`,oxygen:!0},{city:`brain`,poi:`cortex`,title:`小红 · 把氧送给组织`,text:`这次来到大脑组织。氧气离开毛细血管进入组织，参与细胞能量代谢。`,cargo:`向组织交付氧气`,oxygen:!1},{city:`heart`,poi:`right-atrium`,title:`小红 · 回到起点`,text:`血液沿静脉回到右心，又一次循环即将开始。二氧化碳主要以碳酸氢根形式运输。`,cargo:`返回右心 · 循环继续`,oxygen:!1}],Ad={rest:[{city:`heart`,poi:`pacemaker`,title:`回到安静的节律`,text:`观察心跳逐渐回到休息时的示意水平，而不是突然改变。`,cargo:`节律回落`},{city:`lungs`,poi:`left-alveoli`,title:`呼吸也慢下来`,text:`肺泡起伏与运输活动逐渐回到较平缓的节奏。`,cargo:`缓慢舒展`},{city:`brain`,poi:`glia`,title:`安静中的日常`,text:`休息时，身体各系统仍持续工作。`,cargo:`维持日常活动`}],walk:[{city:`heart`,poi:`left-ventricle`,title:`第一站 · 供血增加`,text:`活动时，循环系统逐渐提高输送能力。看泵站节奏与运输速度如何变化。`,cargo:`心跳与血流上升`},{city:`lungs`,poi:`left-alveoli`,title:`第二站 · 呼吸配合`,text:`呼吸活动也随之增加，为气体交换提供支持。`,cargo:`呼吸加快`},{city:`brain`,poi:`motor`,title:`第三站 · 协调动作`,text:`神经系统参与组织动作，并与身体其他调节机制协作。这里按顺序讲解，实际变化彼此重叠。`,cargo:`网络协作`}],meal:[{city:`gut`,poi:`stomach`,title:`第一站 · 混合与消化`,text:`食物在胃中混合，并在后续消化过程中进一步分解。`,cargo:`消化活动增强`},{city:`gut`,poi:`villi`,title:`第二站 · 扩大吸收`,text:`大部分营养物质在小肠被吸收。观察绒毛区的金色物料流。`,cargo:`营养转运`},{city:`gut`,poi:`liver`,title:`第三站 · 分类调配`,text:`吸收的糖和氨基酸等先经门静脉到肝脏；大部分膳食脂肪的早期转运路线不同。`,cargo:`肝脏处理与分配`}],sleep:[{city:`brain`,poi:`cortex`,title:`第一站 · 夜间的城市`,text:`睡眠中的脑仍在活动。这里用安静的非快速眼动睡眠作为示意情境。`,cargo:`窗灯渐亮`},{city:`heart`,poi:`pacemaker`,title:`第二站 · 放缓的节拍`,text:`此情境中，示意心率逐渐降低；心脏继续泵血。`,cargo:`节律放缓`},{city:`lungs`,poi:`diaphragm`,title:`第三站 · 持续的呼吸`,text:`呼吸仍持续进行。观察较慢的起伏，感受城市夜间的节奏。`,cargo:`呼吸仍在继续`}]};function jd(e,t,n=18){let r=Math.max(0,Number.isFinite(e)?e:0),i=Math.min(t-1,Math.floor(r/n));return{index:i,progress:Math.min(1,(r-i*n)/n),done:r>=t*n}}var Md=()=>({findings:[],photos:[],views:[]});function Nd(e){let t=e,n=e=>Array.isArray(e)&&e.length===3&&e.every(e=>typeof e==`number`&&Number.isFinite(e)&&Math.abs(e)<200);return!!t&&Td.includes(t.city)&&n(t.eye)&&n(t.target)&&t.eye[1]>.1}function Pd(e){try{let t=JSON.parse(e||`{}`),n=Md();return Array.isArray(t.findings)&&(n.findings=t.findings.filter(e=>e&&Td.includes(e.city)&&[`resident`,`moment`,`structure`,`journey`,`change`].includes(e.kind)&&typeof e.key==`string`&&e.key.length<100&&typeof e.title==`string`&&e.title.length<100&&typeof e.detail==`string`&&e.detail.length<600&&Number.isFinite(e.at)).slice(-120)),Array.isArray(t.photos)&&(n.photos=t.photos.filter(e=>e&&Td.includes(e.city)&&typeof e.id==`string`&&Number.isFinite(e.at)&&typeof e.image==`string`&&e.image.length<75e4&&/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(e.image)).slice(-4)),Array.isArray(t.views)&&(n.views=t.views.filter(e=>e&&typeof e.id==`string`&&/^[a-zA-Z0-9_-]{1,100}$/.test(e.id)&&typeof e.title==`string`&&e.title.length<100&&Nd(e.view)).slice(-8)),n}catch{return Md()}}function Fd(e,t){return!e.findings.some(e=>e.key===t.key)&&(e.findings.push(t),e.findings.length>120&&e.findings.shift(),!0)}var Id=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),Ld=[`invitation`,`setting-out`,`queue`,`partner`,`exchange`,`returning`,`rest`,`complete`],Rd=()=>({version:1,stage:`invitation`,elapsed:0,active:!1,completed:0,hint:``,photo:null}),zd={invitation:{title:`今天，一起上班吧。`,eyebrow:`肺泡港 · 小红的一天`,body:`小红刚来到港口。陪她领一次补给，认识交接的伙伴，再到街边坐一会儿。约 3 分钟，不用赶时间。`,speaker:`小红`,line:`第一次来这个港口，你能陪我走一段吗？`,duration:0,task:`和小红一起出发`},"setting-out":{title:`沿着风铃，去码头。`,eyebrow:`01 / 06 · 出发`,body:`泡泡在前面带路。小红经过街边的等候区，去找今天负责气体交接的伙伴。`,speaker:`泡泡`,line:`跟我来，云云今天在蓝绿色的交接柜台。`,duration:28,task:`陪小红走到等候处`},queue:{title:`前面还有一位客人。`,eyebrow:`02 / 06 · 等候`,body:`云云正在整理交接柜台。小红放慢脚步，向前面的邻居点点头。看看柜台旁的两种颜色往哪里走。`,speaker:`小红`,line:`等一会儿也没关系。听，风铃响了。`,duration:24,task:`等前一位居民完成交接`},partner:{title:`谁是今天的交接伙伴？`,eyebrow:`03 / 06 · 打个招呼`,body:`泡泡说，负责气体交接的是云云。找一找柜台边的蓝色小帽子。可以点击场景中的伙伴，也可以用下面的名片。`,speaker:`泡泡`,line:`我负责带路，小青照料花房，云云负责这次交接。`,duration:0,task:`向云云打个招呼`},exchange:{title:`一来一往，刚刚好。`,eyebrow:`04 / 06 · 气体交接`,body:`金色的氧气标记进入小红的运输箱，蓝灰色标记向相反方向离开。两种流动一起发生。`,speaker:`云云`,line:`交接好了。下一段路，也拜托你啦。`,duration:20,task:`观察两种气体的相反方向`},returning:{title:`这条街开始熟悉了。`,eyebrow:`05 / 06 · 回到街角`,body:`小红抱着补给箱回到街角。泡泡挥手道别，小青已经留好位置。下一次经过，你会认得这几位朋友。`,speaker:`小青`,line:`这里有空位，忙完过来坐坐。`,duration:32,task:`陪小红回到街边`},rest:{title:`把今天，慢慢说完。`,eyebrow:`06 / 06 · 下班小聚`,body:`小红坐下来，和小青聊起刚才的交接。云云收好柜台，也过来打个招呼。`,speaker:`小红`,line:`谢谢你陪我来。原来这座城里，已经有认识的人了。`,duration:20,task:`在街边坐一会儿`},complete:{title:`下次来，还坐这里。`,eyebrow:`一段共同的记忆`,body:`这次相遇已经留在港口。可以给大家拍张合照，照片会挂在小铺旁；下次回来，伙伴们还记得你。`,speaker:`小青`,line:`以后路过，记得来打个招呼。`,duration:0,task:`拍张合照，或继续自由探索`}};function Bd(e,t,n=!0){if(!e.active||!n||!Number.isFinite(t)||t<=0)return!1;let r=t,i=!1;for(;r>0;){let t=zd[e.stage].duration;if(!t)break;let n=Math.min(r,t-e.elapsed);e.elapsed+=n,r-=n,e.elapsed>=t&&(e.stage=Ld[Ld.indexOf(e.stage)+1],e.elapsed=0,e.hint=``,i=!0,e.stage===`complete`&&(e.active=!1,e.completed++))}return i}function Vd(e){e.stage===`complete`&&(e.stage=`invitation`,e.elapsed=0),e.stage===`invitation`&&(e.stage=`setting-out`,e.elapsed=0),e.active=!0,e.hint=``}function Hd(e,t){return!e.active||e.stage!==`partner`?!1:t===`cloud`?(e.stage=`exchange`,e.elapsed=0,e.hint=``,!0):(e.hint=t===`green`?`小青笑着指向柜台：“我在花房等你，云云就在那边。”`:`泡泡朝蓝色帽子的伙伴招手：“云云，轮到小红啦。”`,!1)}function Ud(e){let t=zd[e.stage].duration;return t?Math.min(1,e.elapsed/t):0}function Wd(e){try{let t=JSON.parse(e||`null`);if(!t||t.version!==1||!Ld.includes(t.stage))return Rd();let n=zd[t.stage].duration;return{version:1,stage:t.stage,elapsed:typeof t.elapsed==`number`&&Number.isFinite(t.elapsed)?Math.max(0,Math.min(t.elapsed,n)):0,active:t.stage!==`complete`&&t.stage!==`invitation`,completed:Number.isSafeInteger(t.completed)?Math.max(0,Math.min(999,t.completed)):0,hint:``,photo:typeof t.photo==`string`&&t.photo.length<75e4&&/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(t.photo)?t.photo:null}}catch{return Rd()}}function Gd(e,t){return e.stage===`partner`&&e.hint?e.hint:e.completed&&(!e.active||e.stage===`invitation`)?{red:`又见面了！还记得我们一起去交接的那天吗？`,bubble:`老朋友，欢迎回到肺泡港。`,cloud:`上次的配合很顺利。今天也慢慢来。`,green:`你常坐的位置还空着。过来坐吧。`}[t]:{red:zd[e.stage].line,bubble:`沿着步道走，交接柜台就在前面。`,cloud:`我是云云，负责今天的气体交接。`,green:`我在花房旁的小铺等你们下班。`}[t]}var Kd={red:`小红`,bubble:`泡泡`,cloud:`云云`,green:`小青`},qd=e=>{let t=Vt.clamp(e,0,1);return t*t*(3-2*t)},Jd=class{root=new G;people=new Map;architecture=new G;geometry=new Set;materials=new Set;textures=new Set;labelRoot;labels=new Map;speech;cargo=new G;guest;trolley=new G;stream=[];chimes=[];membrane;frame;frameLabel;photoSource=null;disposed=!1;route=new Ii([[4.3,.2,25.4],[2,.2,26.4],[-1,.2,26.3],[-4.25,.2,25.2]].map(e=>new H(...e)),!1,`catmullrom`,.3);constructor(e,t,n){this.root.add(this.architecture),this.labelRoot=document.createElement(`div`),this.labelRoot.className=`harbor-labels`,t.append(this.labelRoot),this.speech=document.createElement(`div`),this.speech.className=`harbor-speech`,this.speech.hidden=!0,this.labelRoot.append(this.speech);let r=this.cyl([0,-.55,23.6],10.2,1.1,`#b7cbbb`);r.scale.z=.61;let i=this.cyl([0,.04,23.6],10,.12,`#dddcc2`);i.scale.z=.6;let a=this.cyl([0,.12,23.6],9.3,.06,`#e9e4cb`);a.scale.z=.56;for(let e=0;e<18;e++)this.box([0,.16,17.9+e*.25],[2.1,.12,.2],`#c3b797`);for(let e of[-1.05,1.05]){this.box([e,.72,19.8],[.055,.06,3.8],`#a8b598`);for(let t of[18,19.8,21.6])this.cyl([e,.45,t],.04,.8,`#a8b598`)}for(let e=0;e<45;e++){let t=this.route.getPointAt(e/44),n=this.route.getTangentAt(e/44),r=this.box([t.x,.19,t.z],[1.45,.075,.24],`#f2ead4`);r.rotation.y=Math.atan2(n.x,n.z)}this.tube([[-8.2,.2,22],[-8,.2,25],[-4,.2,27.8],[2,.2,28],[7.5,.2,26]],.08,`#b5cdcb`),this.box([-5.6,.58,23.6],[3.2,.82,1.15],`#9ebfb4`),this.box([-5.6,1.03,23.6],[3.45,.16,1.35],`#f9edce`);for(let e of[-7.05,-4.15])this.cyl([e,1.7,23.15],.055,3.1,`#9db699`);this.membrane=this.ball([-5.6,3.18,23.3],[2.1,.36,1.1],`#c9ded1`),this.sign(`云云 · 气体交接`,[-5.6,2.53,24.15],2.5,.49),this.sign(`O₂ →`,[-6.4,1.3,24.28],.85,.26),this.sign(`← CO₂`,[-4.9,1.3,24.28],.92,.26);for(let e=0;e<5;e++)this.ball([-6.6+e*.25,1.27,23.55],[.115,.115,.115],`#e8c16e`),this.ball([-5.2+e*.23,1.25,23.6],[.095,.095,.095],`#9eafc9`);this.cyl([5.5,1.13,22.4],1.6,2,`#f7ebd2`),this.ball([5.5,2.22,22.4],[1.88,.38,1.77],`#b4c6a0`),this.box([5.5,1.05,24.02],[1.35,1.05,.06],`#8aa8a2`),this.sign(`小青的花房`,[5.5,1.92,24.03],1.55,.38);for(let e of[3.1,7.6]){this.cyl([e,.42,23.5],.36,.56,`#bdad86`);for(let t=0;t<5;t++)this.cyl([e+(t-2)*.11,.92,23.5],.025,.6,`#94ae8b`),this.ball([e+(t-2)*.11,1.22,23.5],[.1,.13,.1],t%2?`#ead197`:`#dda9a0`)}this.box([4.55,.55,24.8],[2.4,.16,.66],`#b9aa87`),this.box([4.55,.99,24.52],[2.4,.65,.1],`#c6b895`);for(let e of[3.65,5.45])this.box([e,.3,24.8],[.13,.6,.49],`#95a88e`);this.cyl([6.5,.68,25.2],.61,.13,`#d4bc8e`),this.cyl([6.5,.38,25.2],.075,.62,`#a8b396`);for(let e of[6.25,6.7])this.cyl([e,.87,25.2],.085,.21,`#f8edcb`);this.box([2.45,1.35,23.3],[1.32,1.06,.15],`#bbab83`);let o=new co({color:`#efe5cc`,roughness:.8});this.materials.add(o);let s=new Wa(1.14,.82);this.geometry.add(s),this.frame=new ui(s,o),this.frame.position.set(2.45,1.35,23.39),this.root.add(this.frame),this.sign(`我们的港口记忆`,[2.45,.56,23.42],1.5,.25),this.frameLabel=this.label(`memory`,`港口的记忆`,n),this.frameLabel.hidden=!0;for(let[e,t]of[[-8.4,22],[-7.8,26],[8.2,24],[.6,28],[.6,21.8]])this.cyl([e,.64,t],.045,1.1,`#a5b18c`),this.ball([e,1.45,t],[.55,.8,.45],`#a9c1a2`),this.ball([e+.36,1.13,t],[.4,.48,.38],`#c2c995`);for(let e=0;e<5;e++){let t=this.box([-2.2+e*.45,2.3,22.5],[.025,.65,.025],`#b7ae8d`),n=this.ball([-2.2+e*.45,1.97,22.5],[.08,.13,.08],`#d6bd82`);this.chimes.push(t,n)}this.box([-1.3,2.66,22.5],[2.6,.09,.12],`#a6b899`);for(let e of[-2.65,.1])this.cyl([e,1.38,22.5],.035,2.6,`#a6b899`);for(let[t,r]of[`red`,`bubble`,`cloud`,`green`].entries()){let i=e[t===0?0:t===1?1:t===2?3:2].clone(!0);i.scale.setScalar(t===0?1.36:1.23),i.userData.pick=`harbor:${r}`,this.people.set(r,i),this.root.add(i),this.label(r,Kd[r],n)}this.guest=e[4].clone(!0),this.guest.scale.setScalar(1.1),this.root.add(this.guest);let c=this.people.get(`red`);this.ball([0,.92,0],[.285,.11,.26],`#d99c8d`,c),this.box([0,.94,.21],[.26,.035,.14],`#c8887e`,c),c.add(this.cargo),this.cargo.position.set(0,.42,.28),this.box([0,0,0],[.4,.28,.28],`#cdb78b`,this.cargo);for(let e=0;e<3;e++)this.ball([-.12+e*.12,.2,0],[.07,.07,.07],`#e6be71`,this.cargo);this.root.add(this.trolley),this.box([0,.5,0],[.85,.45,.55],`#a5bdb2`,this.trolley);for(let e of[-.3,.3])this.ball([e,.18,.12],[.14,.14,.14],`#808f80`,this.trolley);this.box([0,.8,-.25],[.75,.05,.04],`#b49d78`,this.trolley);for(let e=0;e<16;e++)this.stream.push(this.ball([0,0,0],[.075,.075,.075],e%2?`#a3b4ca`:`#e9c26f`,this.root))}material(e){let t=new co({color:e,roughness:.77});return this.materials.add(t),t}mesh(e,t,n,r){this.geometry.add(e);let i=new ui(e,this.material(t));return i.position.set(...n),i.castShadow=!0,i.receiveShadow=!0,r.add(i),i}box(e,t,n,r=this.architecture){return this.mesh(new Wu(...t,2,.06),n,e,r)}ball(e,t,n,r=this.architecture){let i=this.mesh(new Ja(1,16,10),n,e,r);return i.scale.set(...t),i}cyl(e,t,n,r){return this.mesh(new Ei(t,t,n,32),r,e,this.architecture)}tube(e,t,n){return this.mesh(new Xa(new Ii(e.map(e=>new H(...e))),70,t,6,!1),n,[0,0,0],this.architecture)}sign(e,t,n,r){let i=document.createElement(`canvas`);i.width=768,i.height=160;let a=i.getContext(`2d`);a.fillStyle=`#faf1d9`,a.fillRect(0,0,768,160),a.fillStyle=`#6d8576`,a.font=`500 60px "PingFang SC",sans-serif`,a.textAlign=`center`,a.textBaseline=`middle`,a.fillText(e,384,83);let o=new yi(i);o.colorSpace=Qe,this.textures.add(o);let s=new co({map:o,roughness:.9});this.materials.add(s);let c=new Wa(n,r);this.geometry.add(c);let l=new ui(c,s);l.position.set(...t),this.architecture.add(l)}label(e,t,n){let r=document.createElement(`button`);return r.className=`harbor-person`,r.textContent=t,r.setAttribute(`aria-label`,e===`memory`?`查看港口合照`:`港口居民${t}`),r.addEventListener(`click`,()=>n(`harbor:${e}`)),this.labelRoot.append(r),this.labels.set(e,r),r}pose(e,t,n,r,i=!1,a=!1,o=!1,s=!1){e.position.copy(t),e.rotation.y=n,e.position.y+=o?.26:i?Math.abs(Math.sin(r*4))*.024:0;for(let[t,n]of[`left`,`right`].entries()){let c=e.getObjectByName(`leg-${n}`);c.rotation.x=o?-1.35:i?Math.sin(r*4+t*Math.PI)*.28:0;let l=e.getObjectByName(`arm-${n}`);l.rotation.x=a?-.9:s&&t===1?-2.1+Math.sin(r*3)*.16:i?-Math.sin(r*4+t*Math.PI)*.24:-.18,l.rotation.z=s&&t===1?-.23:0}}update(e,t,n,r){let i=Ud(e),a=e.stage,o=this.people.get(`red`),s=this.people.get(`bubble`),c=this.people.get(`cloud`),l=this.people.get(`green`),u=0;a===`setting-out`?u=qd(i):[`queue`,`partner`,`exchange`].includes(a)?u=1:a===`returning`&&(u=1-qd(i));let d=a===`setting-out`||a===`returning`,f=this.route.getPointAt(u),p=this.route.getTangentAt(u).multiplyScalar(a===`returning`?-1:1);(a===`rest`||a===`complete`)&&f.set(4.3,.2,24.94),this.pose(o,f,d?Math.atan2(p.x,p.z):u===1?Math.PI:0,t,d,a===`exchange`||a===`returning`,a===`rest`||a===`complete`,a===`invitation`);let m=a===`invitation`||a===`setting-out`?this.route.getPointAt(Math.min(1,u+.14)):new H(-2.8,.2,24.1);a===`queue`&&m.copy(this.route.getPointAt(1)).lerp(new H(-2.8,.2,24.1),qd(i*4)),m.x+=.5,(a===`rest`||a===`complete`)&&m.lerp(new H(2.1,.2,26.1),a===`complete`?1:qd(i)),this.pose(s,m,a===`setting-out`?Math.atan2(p.x,p.z):.6,t,a===`setting-out`||a===`rest`&&i<.9,!1,!1,a===`partner`||a===`returning`);let h=new H(-5.55,.2,22.75);if(a===`rest`||a===`complete`){let e=a===`complete`?1:qd(i);h.lerp(new H(3.15,.2,25.3),e),h.z+=Math.sin(e*Math.PI)*1.9}this.pose(c,h,a===`rest`?-1:0,t,a===`rest`&&i<.9,a===`exchange`,!1,a===`partner`||a===`complete`),this.pose(l,new H(6,.2,25.9),a===`complete`?.3:-1.3,t,!1,!1,!1,a===`returning`||a===`complete`);let g=a===`queue`?qd(i):0;this.guest.visible=a===`setting-out`||a===`queue`,this.pose(this.guest,new H(-4.6+g*5,.2,24.5+g*1.9),g?Math.PI/2:Math.PI,t,g>0),this.cargo.visible=[`exchange`,`returning`,`rest`,`complete`].includes(a),this.cargo.children.slice(1).forEach((e,t)=>e.visible=a!==`exchange`||i>(t+1)*.19),this.trolley.position.set(-7.1+(a===`queue`?qd(i)*1.2:1.2),.12,23),this.trolley.rotation.y=Math.PI/2,this.stream.forEach((e,t)=>{e.visible=a===`exchange`;let n=(i*3+t/16)%1,r=t%2==1;e.position.set(-5.5+n*1.2,1.6+Math.sin(n*Math.PI)*.4,r?25.3-n*1.9:23.4+n*1.9)}),this.membrane.scale.y=.36*(1+Math.sin(n*Math.PI*2)*.075),this.chimes.forEach((e,n)=>e.rotation.z=Math.sin(t*(r===`walk`?1.1:.65)+n*.3)*.05),this.frameLabel.hidden=!e.completed,this.setPhoto(e.photo);let _=a===`setting-out`||a===`partner`?`bubble`:a===`exchange`?`cloud`:a===`complete`?`green`:`red`;this.speech.dataset.speaker=_;let v=e.hint||(e.completed&&!e.active?Gd(e,_):zd[a].line);this.speech.textContent!==v&&(this.speech.textContent=v)}project(e,t,n,r,i){let a=e.position.distanceTo(new H(0,1,24))<38;for(let[o,s]of this.labels){let c=this.people.get(o),l=(c?c.position.clone().add(new H(0,1.6,0)):new H(2.45,2.15,23.4)).project(e);s.hidden=!r||!a||l.z<0||l.z>1||Math.abs(l.x)>.92||Math.abs(l.y)>.86||o===`memory`&&!i.completed,s.classList.toggle(`awaiting`,i.stage===`partner`&&o===`cloud`),s.style.transform=`translate(-50%,-100%) translate(${(l.x/2+.5)*t}px,${(-l.y/2+.5)*n}px)`}let o=this.people.get(this.speech.dataset.speaker).position.clone().add(new H(0,2.7,0)).project(e);this.speech.hidden=!r||!a||o.z<0||o.z>1||Math.abs(o.x)>.65||Math.abs(o.y)>.75||(-o.y/2+.5)*n<95,this.speech.style.left=`${(o.x/2+.5)*t}px`,this.speech.style.top=`${(-o.y/2+.5)*n}px`}setPhoto(e){if(e===this.photoSource)return;this.photoSource=e;let t=this.frame.material;if(!e){t.map&&(this.textures.delete(t.map),t.map.dispose(),t.map=null,t.needsUpdate=!0);return}new Lo().load(e,n=>{if(this.disposed||this.photoSource!==e){n.dispose();return}t.map&&(this.textures.delete(t.map),t.map.dispose()),n.colorSpace=Qe,this.textures.add(n),t.map=n,t.color.set(`#ffffff`),t.needsUpdate=!0})}dispose(){this.disposed=!0,this.labelRoot.remove(),this.geometry.forEach(e=>e.dispose()),this.materials.forEach(e=>e.dispose()),this.textures.forEach(e=>e.dispose()),this.root.removeFromParent()}},X=`#fff4df`,Yd=`#72989d`,Xd=`#eac777`,Zd=class{id;onPOI;scene=new qn;camera=new Zo(40,1,.1,220);controls;plan;stats={buildings:0,vehicles:0,residents:0,streets:0};staticRoot=new G;dynamicRoot=new G;materials=new Map;geometries=new Set;shapes=new Map;actors=[];trafficLanes=[];neighbors=[];previousSimulationTime=null;textures=new Set;signMaterials=new Map;lifePosition=new H(2,1.1,14.5);animations=[];lanes=[];roadSamples=[];streetFurniture=[];labels=new Map;hitboxes=[];labelRoot;sunlight;selection;target=new H(0,0,0);eye=new H(28,30,35);transitioning=!0;width=1;height=1;overviewDistance=48;raycaster=new vs;pointer=new V;selected=null;showLabels=!0;get labelsVisible(){return this.showLabels}disposed=!1;carTemplates;residentTemplates;harbor=null;workday=Rd();harborEntry=null;promenade;interactiveRoots=[];residentLabels=new Map;momentRoot=new G;courierRoot;courierStep=null;courierProgress=0;simulationTime=0;walkStarted=0;followed=null;viewMode=`free`;get following(){return this.followed}constructor(e,t,n,r){this.id=e,this.onPOI=r,this.plan=yd[e],this.scene.background=new K(`#e6e8dc`),this.scene.fog=new Kn(`#e6e8dc`,72,150),this.scene.add(this.staticRoot,this.dynamicRoot),this.scene.add(new zo(`#fff6e7`,`#9caa91`,1.15)),this.sunlight=new es(`#ffe9c8`,2.4),this.sunlight.position.set(-16,25,18),this.sunlight.castShadow=!0,this.sunlight.shadow.mapSize.set(2048,2048),Object.assign(this.sunlight.shadow.camera,{left:-28,right:28,top:28,bottom:-28,near:1,far:100}),this.sunlight.shadow.normalBias=.025,this.sunlight.shadow.bias=-2e-4,this.scene.add(this.sunlight);let i=new es(`#dce9ff`,.65);i.position.set(18,15,-20),this.scene.add(i),this.camera.position.copy(this.eye),this.camera.lookAt(0,0,0),this.controls=new td(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.085,this.controls.minDistance=7,this.controls.maxDistance=85,this.controls.minPolarAngle=.15,this.controls.maxPolarAngle=Math.PI*.465,this.controls.mouseButtons.LEFT=f.ROTATE,this.controls.mouseButtons.RIGHT=f.PAN,this.controls.touches.ONE=p.ROTATE,this.controls.touches.TWO=p.DOLLY_PAN,this.controls.panSpeed=.7,this.controls.rotateSpeed=.65,this.controls.autoRotateSpeed=.55,this.controls.addEventListener(`start`,()=>{this.transitioning=!1,this.releaseCamera()}),this.labelRoot=document.createElement(`div`),this.labelRoot.className=`district-labels`,n.append(this.labelRoot),this.terrain(),this.carTemplates=Array.from({length:4},(e,t)=>this.vehicle(t)),this.residentTemplates=Array.from({length:6},(e,t)=>this.resident(t)),this.plan.roads.forEach((e,t)=>this.street(e.points,e.color,e.vehicles,t)),this.plan.landmarks.forEach((e,t)=>this.landmark(e,t)),this.specialInfrastructure(),this.neighborhoods(),this.livingQuarter(),this.neighborhoodSignature(),this.prepareEncounters(),e===`lungs`&&(this.harbor=new Jd(this.residentTemplates,this.labelRoot,r),this.dynamicRoot.add(this.harbor.root),this.harbor.people.forEach(e=>this.interactiveRoots.push(e)),this.stats.residents+=5,this.stats.buildings+=2,this.harborEntry=document.createElement(`button`),this.harborEntry.className=`district-label harbor-entry-label`,this.harborEntry.textContent=`✧ 小红的港口一天`,this.harborEntry.addEventListener(`click`,()=>r(`harbor:welcome`)),this.labelRoot.append(this.harborEntry),Object.assign(this.sunlight.shadow.camera,{left:-40,right:40,top:40,bottom:-40}),this.sunlight.shadow.camera.updateProjectionMatrix()),this.compact(this.staticRoot),this.selection=this.mesh(new Ya(2.7,.055,6,80),`#eac779`,this.dynamicRoot,[0,.42,0]),this.selection.rotation.x=Math.PI/2,this.selection.visible=!1}mat(e,t=!1){let n=e+(t?`glass`:``);return this.materials.has(n)||this.materials.set(n,new co({color:e,roughness:t?.24:.78,emissiveIntensity:0,transparent:t,opacity:t?.46:1,depthWrite:!t})),this.materials.get(n)}geometry(e,t){if(!this.shapes.has(e)){let n=t();this.shapes.set(e,n),this.geometries.add(n)}return this.shapes.get(e)}mesh(e,t,n=this.staticRoot,r=[0,0,0],i=!1){this.geometries.add(e);let a=new ui(e,this.mat(t,i));return a.position.set(...r),a.castShadow=!i,a.receiveShadow=!0,n.add(a),a}box(e,t,n,r=this.staticRoot,i=.12){return this.mesh(this.geometry(`box${t}-${i}`,()=>new Wu(...t,2,i)),n,r,e)}sphere(e,t,n,r=this.staticRoot,i=!1){let a=this.mesh(this.geometry(`sphere`,()=>new Ja(1,18,12)),n,r,e,i);return a.scale.set(...t),a}cylinder(e,t,n,r,i=this.staticRoot,a=t){return this.mesh(this.geometry(`cyl${t}-${n}-${a}`,()=>new Ei(a,t,n,24)),r,i,e)}tube(e,t,n,r=this.staticRoot,i=!1){let a=new Ii(e.map(e=>new H(...e)),i,`catmullrom`,.35);return this.mesh(new Xa(a,Math.max(32,e.length*7),t,7,i),n,r),a}group(e,t){let n=new G;return n.position.set(e,0,t),this.staticRoot.add(n),n}compact(e){e.updateWorldMatrix(!0,!0);let t=e.matrixWorld.clone().invert(),n=new Map;e.traverse(e=>{if(!(e instanceof ui)||Array.isArray(e.material))return;let r=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();r.applyMatrix4(t.clone().multiply(e.matrixWorld)),e.material.map||r.deleteAttribute(`uv`),r.hasAttribute(`normal`)||r.computeVertexNormals(),n.has(e.material)||n.set(e.material,[]),n.get(e.material).push(r)}),e.clear();for(let[t,r]of n){let n=md(r,!1);if(r.forEach(e=>e.dispose()),!n)continue;this.geometries.add(n);let i=new ui(n,t);i.castShadow=!t.transparent,i.receiveShadow=!0,e.add(i)}}terrain(){let e=this.mesh(new Wa(250,250),`#e6e8dc`,this.staticRoot,[0,-1.85,0]);e.rotation.x=-Math.PI/2,e.castShadow=!1;let t=new ra;if(this.id===`immune`){for(let e=0;e<6;e++){let n=e*Math.PI/3,r=Math.cos(n)*24,i=Math.sin(n)*23;e?t.lineTo(r,i):t.moveTo(r,i)}t.closePath()}else if(this.id===`gut`)t.moveTo(-14,-17),t.bezierCurveTo(-25,-12,-23,14,-12,18),t.bezierCurveTo(1,23,23,19,23,3),t.bezierCurveTo(25,-8,15,-20,-1,-19),t.bezierCurveTo(-8,-19,-11,-19,-14,-17);else{let e=Array.from({length:25},(e,t)=>{let n=t/24*Math.PI*2,r=1+.025*Math.sin(n*5)+.018*Math.cos(n*7);return new V(Math.cos(n)*22.4*r,Math.sin(n)*19.5*r)});t.moveTo(e[0].x,e[0].y),t.splineThru(e.slice(1)),t.closePath()}let n=new Va(t,{depth:1.05,bevelEnabled:!0,bevelSize:.4,bevelThickness:.3,bevelSegments:3,steps:1,curveSegments:40});n.rotateX(-Math.PI/2),this.mesh(n,`#b9cbae`,this.staticRoot,[0,-1.4,0]);let r=new Ka(t,48);r.rotateX(-Math.PI/2),this.mesh(r,this.plan.ground,this.staticRoot,[0,.035,0]);for(let e=0;e<34;e++){let t=e/34*Math.PI*2,n=Math.cos(t)*21.4,r=Math.sin(t)*18.5;this.id!==`immune`&&this.id!==`gut`&&this.sphere([n,-.7,r],[.32,.24,.22],e%3?`#c5cdb5`:this.plan.accent)}}ribbon(e,t,n,r,i=0){let a=[],o=[];for(let n=0;n<=240;n++){let s=n/240,c=e.getPointAt(s),l=e.getTangentAt(s),u=new H(l.z,0,-l.x).normalize();for(let e of[-1,1]){let n=c.clone().addScaledVector(u,i+e*t/2);a.push(n.x,r,n.z)}if(n<240){let e=n*2;o.push(e,e+2,e+1,e+1,e+2,e+3)}}let s=new Br;s.setAttribute(`position`,new q(a,3)),s.setIndex(o),s.computeVertexNormals();let c=this.mesh(s,n);c.material.side=2,c.castShadow=!1}street(e,t,n,r){let i=new Ii(e.map(([e,t])=>new H(e,.2,t)),!0,`catmullrom`,.42);this.lanes.push(i),this.roadSamples.push(...i.getSpacedPoints(200)),this.stats.streets++,this.ribbon(i,2.05,`#eee8d6`,.08),this.ribbon(i,1.27,t,.105),this.ribbon(i,.4,`#ede6ce`,.135,1.04),this.ribbon(i,.055,`#faf4dc`,.13,.61),this.ribbon(i,.055,`#faf4dc`,.13,-.61);let a=i.getLength();for(let e=0;e<Math.floor(a/1.3);e++){let t=i.getPointAt(e/Math.floor(a/1.3)),n=i.getTangentAt(e/Math.floor(a/1.3)),r=this.box([t.x,.13,t.z],[.045,.015,.36],`#f5eddb`);r.rotation.y=Math.atan2(n.x,n.z)}for(let e=0;e<Math.floor(a/8);e++){let t=e/Math.floor(a/8),n=i.getPointAt(t),o=i.getTangentAt(t);this.lamp(n.x+o.z*1.42,n.z-o.x*1.42,r)}for(let e of[1,-1]){let t=e===1?Math.ceil(n/2):Math.floor(n/2),o=Sd(t,a,r*32+(e+1)*7),s=[];for(let e=0;e<t;e++){let t=this.carTemplates[e===0?2:(e+r)%4].clone(!0);this.dynamicRoot.add(t),s.push(t),this.stats.vehicles++}this.trafficLanes.push({curve:i,length:a,direction:e,cars:o,roots:s});let c=this.plan.roads.filter((e,t)=>t!==r).flatMap(e=>new Ii(e.points.map(([e,t])=>new H(e,0,t)),!0,`catmullrom`,.42).getSpacedPoints(120));o[0].stop=null;for(let t of[.62,.15,.35,.8]){let n=i.getPointAt(t),s=i.getTangentAt(t),l=n.x+s.z*e*1.78,u=n.z-s.x*e*1.78;if(c.some(e=>Math.hypot(e.x-l,e.z-u)<1.7)||this.plan.landmarks.some(e=>Math.hypot(e.position[0]-l,e.position[1]-u)<3))continue;let d=this.group(l,u);d.rotation.y=Math.atan2(s.x*e,s.z*e),this.busStop(d,r),this.streetFurniture.push([l,u]),o[0].stop=bd(t*e*a,a);break}}let o=9+r*3;for(let e=0;e<o;e++)this.walker(i,r*100+e+12,e%3==0?-1:1,1.03+(e%2?-.1:.1));for(let e=0;e<4;e++){let t=i.getPointAt((e+.24)/4),n=i.getTangentAt((e+.24)/4);for(let e=-2;e<=2;e++){let r=this.box([t.x+n.x*e*.16,.145,t.z+n.z*e*.16],[1.08,.02,.075],`#f8f0df`);r.rotation.y=Math.atan2(n.x,n.z)}}}lamp(e,t,n=0){this.cylinder([e,.7,t],.045,1.25,`#9fa78b`),this.sphere([e,1.36,t],[.17,.19,.17],n%2?`#f1dca2`:`#e8eed7`),this.cylinder([e,.16,t],.16,.13,`#c8c4a9`)}vehicle(e=0){let t=new G,n=[this.plan.accent,`#9fae91`,`#d8bd88`,`#9eb9bc`][e];this.box([0,.29,0],[.58,.36,1.08],n,t,.15),this.box([0,.53,.21],[.51,.36,.44],X,t,.13),this.box([0,.57,.455],[.37,.19,.028],Yd,t,.035);for(let e of[-.27,.27])this.box([e,.57,.22],[.025,.18,.26],Yd,t,.025);for(let e of[-.32,.32])for(let n of[-.34,.32]){let r=this.cylinder([e,.18,n],.13,.09,`#5f7068`,t);r.rotation.z=Math.PI/2,this.sphere([e*1.08,.18,n],[.025,.061,.061],`#e1ddc8`,t)}for(let e of[-.19,.19])this.box([e,.3,.54],[.1,.07,.025],`#ffedba`,t,.015);if(e===2){this.box([0,.58,-.18],[.53,.48,.8],X,t,.15);for(let e of[-.275,.275])for(let n=0;n<3;n++)this.box([e,.66,.04-n*.24],[.025,.21,.16],Yd,t,.03);this.box([0,.87,-.16],[.25,.05,.55],n,t,.035),this.signboard(t,`细胞巴士`,[0,.93,-.1],.4,.13)}else if(e===3)this.box([0,.57,-.2],[.49,.36,.53],n,t,.18),this.box([0,.71,-.12],[.37,.07,.26],Yd,t,.04);else if(this.id===`brain`)this.box([0,.56,-.23],[.5,.34,.42],`#b19cce`,t,.08),this.cylinder([0,.88,-.19],.026,.34,Xd,t),this.sphere([0,1.06,-.19],[.07,.07,.07],Xd,t);else if(this.id===`immune`)this.box([0,.53,-.21],[.48,.36,.42],X,t,.12),this.box([0,.77,-.2],[.28,.07,.1],`#a598ba`,t,.025);else for(let e=0;e<4;e++){let n=(e%2-.5)*.22,r=-.08-Math.floor(e/2)*.25;this.sphere([n,.56,r],[.115,.12,.11],this.id===`gut`?Xd:this.id===`kidneys`?`#aad7de`:`#eed2b5`,t)}return this.compact(t),t}resident(e=0){let t=new G,n=new G;t.add(n);let r=[this.plan.accent,`#9aaa85`,`#c1a278`,`#a4b8c7`,`#b598ad`,`#dfc18b`][e];if(this.sphere([0,.42,0],[.19,.24,.15],e%2?r:X,n),this.sphere([0,.73,0],[.26,.23,.23],this.id===`immune`?`#f4efe3`:[`#e7b798`,`#d6a17e`,`#ebcbb1`][e%3],n),e%3==0?(this.sphere([0,.87,0],[.28,.105,.25],r,n),this.box([0,.875,.21],[.24,.04,.13],r,n,.02)):e%3==1?(this.sphere([0,.9,-.05],[.26,.09,.24],`#897a5e`,n),this.sphere([-.19,.86,-.06],[.1,.15,.19],`#897a5e`,n)):(this.sphere([0,.87,0],[.29,.09,.26],X,n),this.sphere([0,.95,-.05],[.2,.13,.2],r,n)),this.id===`heart`||this.id===`lungs`){let e=this.mesh(new Ya(.15,.045,6,14),`#cf8479`,n,[0,.94,0]);e.rotation.x=Math.PI/2}this.id===`immune`&&this.sphere([0,.89,.12],[.11,.07,.1],`#bba6c9`,n);for(let e of[-.085,.085])this.sphere([e,.745,.213],[.022,.029,.018],`#5f6359`,n);e%2?this.box([0,.46,-.2],[.24,.28,.11],r,n,.07):this.box([.22,.38,-.06],[.13,.22,.2],`#c3ab7e`,n,.04),this.compact(n);for(let n of[-1,1]){let i=new G;i.name=n<0?`arm-left`:`arm-right`,i.position.set(n*.24,.54,0),this.box([0,-.1,0],[.09,.27,.1],e%2?r:X,i,.04),t.add(i)}for(let e of[-1,1]){let n=this.box([e*.095,.15,0],[.1,.24,.13],`#788677`,t,.045);n.name=e<0?`leg-left`:`leg-right`}return t}signboard(e,t,n,r=1.15,i=.3){let a=this.signMaterials.get(t);if(!a){let e=document.createElement(`canvas`);e.width=512,e.height=128;let n=e.getContext(`2d`);n.fillStyle=`#fbefdb`,n.fillRect(0,0,512,128),n.strokeStyle=this.plan.accent,n.lineWidth=6,n.strokeRect(8,8,496,112),n.fillStyle=`#626958`,n.font=`500 49px "Songti SC", "PingFang SC", serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(t,256,65);let r=new yi(e);r.colorSpace=Qe,this.textures.add(r),a=new co({map:r,roughness:.9}),this.signMaterials.set(t,a)}let o=new ui(this.geometry(`sign-${r}-${i}`,()=>new Wa(r,i)),a);o.position.set(...n),e.add(o)}busStop(e,t){this.box([0,.16,0],[.7,.15,1.75],`#d4cfb9`,e,.09);for(let t of[-.62,.62])this.cylinder([-.22,.92,t],.035,1.5,`#8d947c`,e);this.box([0,1.66,0],[.86,.13,1.8],this.plan.accent,e,.11),this.box([-.27,.94,0],[.045,.85,1.2],`#b7c7be`,e,.035),this.box([0,.52,0],[.35,.12,1.1],X,e,.04),this.signboard(e,t===0?`细胞慢行线`:`补给街站`,[.05,1.48,.9],.63,.18)}walker(e,t,n=1,r=0,i=!1){let a=this.residentTemplates[t%6].clone(!0),o=.66+xd(t)*.24;return a.scale.setScalar(o),this.dynamicRoot.add(a),this.stats.residents++,this.actors.push({root:a,curve:e,length:e.getLength(),direction:n,offset:r,seed:t,open:i,legs:[a.getObjectByName(`leg-left`),a.getObjectByName(`leg-right`)]}),a}neighbor(e,t,n,r,i){let a=this.residentTemplates[i%6].clone(!0);if(a.position.set(e,r===`sit`?.34:.1,t),a.rotation.y=n,a.scale.setScalar(.74+xd(i)*.18),this.dynamicRoot.add(a),r===`read`&&(this.box([0,.5,.27],[.3,.035,.21],`#a5b6aa`,a,.015).rotation.x=-.3,a.getObjectByName(`arm-left`).rotation.x=-.9,a.getObjectByName(`arm-right`).rotation.x=-.9),r===`sit`)for(let e of[`left`,`right`])a.getObjectByName(`leg-${e}`).rotation.x=-1.1;r===`shop`&&this.box([.3,.29,.05],[.19,.25,.16],`#dfbb79`,a,.035),this.neighbors.push({root:a,pose:r,phase:i,heading:n}),this.stats.residents++}bench(e,t,n=0){let r=this.group(e,t);r.rotation.y=n;for(let e of[-.52,.52])for(let t of[-.16,.16])this.box([e,.24,t],[.06,.37,.07],`#819078`,r,.02);for(let e=0;e<3;e++)this.box([0,.45,-.2+e*.17],[1.35,.06,.12],`#bcab83`,r,.025);for(let e=0;e<3;e++)this.box([0,.65+e*.12,-.26],[1.35,.08,.06],`#c7b792`,r,.025)}patch(e,t,n,r,i=`#b7c09a`){let a=this.mesh(this.geometry(`patch`,()=>new Ti(1,32)),i,this.staticRoot,[e,.064,t]);a.rotation.x=-Math.PI/2,a.rotation.z=xd(e+t)*2,a.scale.set(n,r,1),a.castShadow=!1}house(e,t,n,r=0,i=!1){let a=this.group(e,t),o=xd(n+90),s=i?1.9+o*1.1:1.2+o*1.9,c=i?2.1:1.2+o*.35,l=i?1.45:1.13,u=[`#aeaf8b`,this.plan.accent,`#bcac92`,`#9facaf`,`#c6b17e`][n%5];a.rotation.y=r,this.box([0,.12,0],[c+.36,.15,l+.3],`#d1c4a8`,a,.1),this.box([0,.2+s/2,0],[c,s,l],[`#ebdfc8`,`#d8d8c2`,`#e2cbb6`,`#d9dfd2`][n%4],a,.16),n%3==0?(this.box([0,s+.29,0],[c+.21,.19,l+.23],u,a,.07),this.sphere([-.2,s+.5,0],[c*.36,.34,.48],u,a),this.box([c*.27,s+.47,-.2],[.35,.28,.35],X,a,.09)):(this.sphere([0,s+.21,0],[c*.6,.35,l*.68],u,a),this.box([0,s+.17,0],[c+.15,.15,l+.13],u,a,.05));let d=s>2?2:1;for(let e=0;e<d;e++)for(let t of[-1,1]){let r=i?e===0?.78:Math.min(s-.2,2.43):1+e*.9;this.box([t*c*.29,r,l/2+.02],[i?.51:.3,i&&e===0?.71:.44,.055],n%4==1?`#daca92`:Yd,a,.04),this.box([t*c*.29,r,l/2+.055],[.025,i&&e===0?.69:.42,.015],X,a,.005),this.box([t*c*.29,r-.26,l/2+.09],[.4,.09,.17],u,a,.025),i&&e===1&&(this.box([t*c*.29-.19,r,l/2+.03],[.1,.44,.045],u,a,.015),this.box([t*c*.29+.19,r,l/2+.03],[.1,.44,.045],u,a,.015))}if(this.box([0,.57,l/2+.04],[.35,.8,.08],u,a,.11),this.box([0,.7,l/2+.09],[.23,.29,.025],`#b6c8bd`,a,.03),this.sphere([.09,.5,l/2+.1],[.025,.025,.025],Xd,a),i){let e={heart:[`ATP 补给铺`,`氧气邮局`,`细胞书屋`,`心肌小铺`],brain:[`记忆书屋`,`突触驿站`,`胶质花房`,`信使茶庭`],lungs:[`肺泡花房`,`氧气驿站`,`云朵补给`,`清风书屋`],gut:[`营养小集`,`绒毛补给`,`酶酶工坊`,`糖原仓库`],kidneys:[`水盐小铺`,`回收驿站`,`滤液花房`,`集合书屋`],immune:[`抗体邮局`,`巡逻休憩所`,`记忆书屋`,`细胞补给`]}[this.id];this.signboard(a,e[n%4],[0,1.48,l/2+.075],c*.87,.3);let t=this.box([0,1.33,l/2+.36],[c+.1,.09,.68],u,a,.06);t.rotation.x=.14;for(let e=0;e<7;e++)this.box([-c/2+e*c/6,1.33,l/2+.36],[c/13,.1,.65],X,a,.012).rotation.x=.14;if(this.box([0,1.25,l/2+.69],[c+.08,.17,.065],u,a,.04),s>2.45){this.box([0,2.02,l/2+.23],[c+.05,.1,.53],X,a,.04);for(let e=0;e<7;e++)this.cylinder([-c*.45+e*c*.15,2.22,l/2+.49],.017,.4,`#829582`,a);this.box([0,2.44,l/2+.49],[c,.04,.05],`#829582`,a,.012)}for(let e=0;e<2;e++){this.box([c*.65,.36,.75+e*.46],[.42,.46,.38],`#baa077`,a,.045);for(let t=0;t<3;t++)this.sphere([c*.65+(t-1)*.11,.62,.78+e*.46],[.09,.09,.09],e?this.plan.accent:`#b8c68b`,a)}if(this.signboard(a,`今日补给`,[c*.64,.85,1.26],.42,.24),this.id===`lungs`)for(let e=0;e<3;e++)this.cylinder([-.75+e*.75,s+.45,0],.22,.4,`#bfceb6`,a),this.sphere([-.75+e*.75,s+.72,0],[.24,.22,.24],`#9bbdab`,a);if(this.id===`brain`)for(let e=0;e<4;e++)this.box([c*.63,.17+e*.065,1.3],[.33,.05,.27],e%2?`#b09eb9`:`#b3bf9b`,a,.012);this.id===`immune`&&n%2==0&&(this.box([-.85,1.76,l/2+.09],[.34,.51,.055],this.plan.accent,a,.04),this.shield(a,1.77,l/2+.15))}else{this.box([-.42,.28,l/2+.27],[.36,.35,.27],`#b4a480`,a,.06);for(let e=0;e<3;e++)this.sphere([-.53+e*.11,.54,l/2+.3],[.09,.17,.09],`#92a97e`,a)}this.box([0,.14,l/2+.32],[c*.7,.09,.45],`#eee1c8`,a,.04);for(let e of[-1,1]){this.box([e*(c/2+.01),1.02,0],[.035,.43,.32],Yd,a,.04),s>2.3&&this.box([e*(c/2+.01),s-.47,0],[.035,.4,.32],Yd,a,.035),this.tube([[e*c*.43,.2,-l/2-.06],[e*c*.43,s-.03,-l/2-.06],[0,s-.03,-l/2-.06]],.028,`#b3ac8c`,a);for(let t=0;t<d;t++){let n=.96+t*.95;this.box([e*c*.27,n,-l/2-.025],[.35,.46,.055],Yd,a,.05),this.box([e*c*.27,n,-l/2-.06],[.025,.44,.02],X,a,.005),this.box([e*c*.27,n-.27,-l/2-.075],[.46,.08,.15],u,a,.03)}}if(this.box([0,.54,-l/2-.035],[.36,.72,.065],u,a,.065),this.box([0,.77,-l/2-.08],[.25,.19,.025],`#c4d0c1`,a,.025),this.box([0,.15,-l/2-.28],[.68,.1,.43],`#d5c6a7`,a,.04),i){this.cylinder([c*.64,.4,-.4],.22,.63,`#9aaa96`,a),this.sphere([c*.64,.75,-.4],[.24,.08,.24],`#bac4ae`,a),this.box([-c*.64,.34,-.4],[.4,.44,.4],`#bdab88`,a,.05);for(let e=0;e<3;e++)this.sphere([-c*.64+(e-1)*.12,.62,-.4],[.085,.1,.09],`#c5cfa6`,a)}this.stats.buildings++}plant(e,t,n){let r=.75+xd(n+5)*.65,i=this.group(e,t);i.scale.setScalar(r),i.rotation.y=xd(n)*6.28,this.patch(e,t,.65*r,.53*r,`#b6bf98`),this.cylinder([0,.72,0],.07,1.35,`#a28b64`,i,.045),this.tube([[0,.65,0],[.26,1.14,.05],[.42,1.36,.08]],.045,`#a28b64`,i);let a=new G;i.add(a),a.position.y=1.3;let o=[`#92ab7c`,`#a3b48a`,`#b4bb88`,`#8ca890`];this.sphere([-.17,.14,-.08],[.58,.65,.5],o[n%4],a),this.sphere([.35,.06,.08],[.43,.45,.44],o[(n+1)%4],a),this.sphere([.06,.52,.12],[.41,.37,.39],o[n%4],a);for(let e=0;e<3;e++)this.sphere([-.3+e*.21,.2+e*.05,.42],[.055,.08,.05],n%3?Xd:`#d6a795`,a);n%3==0&&this.animatePart(i,a,`sway`,n)}neighborhoods(){let e=[...this.streetFurniture],t=Object.keys(yd).indexOf(this.id)*117;for(let n=0;n<520;n++){let r=(xd(n*3+t)-.5)*36,i=(xd(n*3+1+t)-.5)*29;if(i>10.7||Math.abs(r)<1.7&&i>9||(r/19.5)**2+(i/15.8)**2>1)continue;let a=Math.min(...this.roadSamples.map(e=>Math.hypot(e.x-r,e.z-i))),o=Math.min(...this.plan.landmarks.map(e=>Math.hypot(e.position[0]-r,e.position[1]-i)));if(a<2.35||o<3.5||e.some(e=>Math.hypot(e[0]-r,e[1]-i)<2.15))continue;e.push([r,i]);let s=this.roadSamples.reduce((e,t)=>Math.hypot(e.x-r,e.z-i)<Math.hypot(t.x-r,t.z-i)?e:t),c=Math.atan2(s.x-r,s.z-i);if(n%3==0)this.patch(r,i,1.2,.8),this.plant(r+.3,i,n),n%2&&this.bench(r-.6,i+.1,c);else{this.house(r,i,n,c);let e=new Ii([new H(r,.1,i),new H((r+s.x)/2,.1,(i+s.z)/2),new H(s.x,.1,s.z)]);this.ribbon(e,.38,`#d7ceb6`,.074)}}for(let n=0;n<55;n++){let r=xd(n+t)*Math.PI*2,i=.87+xd(n+51)*.09,a=Math.cos(r)*21*i,o=Math.sin(r)*18*i;o>9||e.some(e=>Math.hypot(e[0]-a,e[1]-o)<1.2)||this.plant(a,o,n+71)}}livingQuarter(){let e=new Ii([[-16,10],[-12,14],[-7,17.5],[0,18.3],[7,17],[13,13.2],[16,8.8]].map(([e,t])=>new H(e,.12,t)),!1,`catmullrom`,.3);this.promenade=e,this.ribbon(e,1.35,`#e5d9bf`,.08),this.ribbon(e,.07,`#d2c2a0`,.095,.62);for(let t=0;t<78;t++){let n=e.getPointAt(t/78),r=e.getTangentAt(t/78),i=this.box([n.x,.092,n.z],[1.24,.009,.014],`#cfc4ab`,this.staticRoot,.002);i.rotation.y=Math.atan2(r.x,r.z)}[[-14,8.1],[-12,11],[-8.7,13.3],[-5.2,14.6],[-1.5,15.1],[2.5,15.1],[6.4,14.3],[10,11.8],[13,8.4]].forEach(([e,t],n)=>{let r=e<-10?-.6:e>10?.65:e/40,i=Object.keys(yd).indexOf(this.id);this.house(e,t,300+n+i*13,r,!0),n%2==0&&(this.neighbor(e-.6,t+1.75,r+Math.PI,`shop`,n+10),this.neighbor(e+.4,t+2,r+2.1,`chat`,n+24)),n%3==0&&(this.bench(e-1.6,t+1.6,r),this.neighbor(e-1.6,t+1.68,r,`sit`,n+31))});for(let t=0;t<19;t++)this.walker(e,200+t,t%2?1:-1,t%2?-.22:.22,!0);for(let[e,t,n]of[[.6,17,0],[-7.3,15.5,1],[8.4,14.6,2]]){this.cylinder([e,.55,t],.37,.09,`#c2ad86`),this.cylinder([e,.3,t],.04,.47,`#91a08c`);for(let r of[-1,1])this.cylinder([e+r*.62,.31,t],.21,.42,`#bcbd9a`),this.neighbor(e+r*.62,t,r<0?Math.PI/2:-Math.PI/2,n===1?`read`:`sit`,n*10+(r+1));this.cylinder([e,1.28,t],.025,1.4,`#b5a07d`);let r=this.sphere([e,2.01,t],[1.02,.18,.94],n%2?`#a7b698`:`#dfc69a`);this.animations.push({object:r,type:`sway`,base:0,phase:n*2});for(let n of[-1,1])this.cylinder([e+n*.18,.65,t+.08],.055,.13,X)}if(this.patch(-16,5.2,2.25,1.85,`#b9c4a0`),this.bench(-16.4,5.7,-.6),this.neighbor(-16.3,5.75,-.6,`read`,66),this.cylinder([-15.4,.23,4.4],.89,.3,`#ccbea3`),this.cylinder([-15.4,.4,4.4],.77,.07,`#a6c4bc`),this.sphere([-15.4,.64,4.4],[.2,.36,.2],`#c6d8c5`),this.plant(-17.6,4.6,21),this.plant(-17.2,7.1,25),this.id===`kidneys`){let e=new Ii([[-8,18.65],[-3,19],[2,19],[7,18]].map(([e,t])=>new H(e,.11,t)));this.ribbon(e,.68,`#adbda9`,.081),this.ribbon(e,.48,`#99bab7`,.089);for(let t of[.2,.53,.83]){let n=e.getPointAt(t),r=e.getTangentAt(t),i=this.group(n.x,n.z);i.rotation.y=Math.atan2(r.x,r.z);for(let e=0;e<6;e++)this.box([0,.18,-.5+e*.2],[.6,.08,.16],`#bfac83`,i,.02);for(let e of[-.32,.32]){this.box([e,.44,0],[.035,.035,1.25],`#b4a684`,i,.01);for(let t of[-.5,.5])this.cylinder([e,.3,t],.024,.3,`#b4a684`,i)}}}if(this.id===`gut`)for(let e of[-5.8,4.4]){let t=this.group(e,17);this.box([0,.55,0],[1.2,.65,.62],`#c2a77d`,t,.07);for(let e=0;e<8;e++)this.sphere([-.45+e%4*.3,.93,-.13+Math.floor(e/4)*.25],[.13,.13,.12],e%2?`#e4b172`:`#b6be85`,t);for(let e of[-1,1])this.cylinder([e*.57,1.15,0],.03,1.7,`#a48f6e`,t);this.box([0,2.04,0],[1.5,.12,.86],`#d4b679`,t,.08),this.signboard(t,`营养小集`,[0,1.8,.45],.85,.22),this.neighbor(e,16.5,0,`shop`,50+Math.round(e))}for(let[t,n,r]of[[-13,14,101],[-10.7,15.6,104],[-3.5,17,107],[5.4,16.2,109],[11.5,13.7,111],[16,6.3,114]]){let i=0,a=1/0;for(let r=0;r<=120;r++){let o=e.getPointAt(r/120),s=Math.hypot(o.x-t,o.z-n);s<a&&(a=s,i=r/120)}let o=e.getPointAt(i),s=e.getTangentAt(i);this.plant(a<1.6?o.x+s.z*1.6:t,a<1.6?o.z-s.x*1.6:n,r)}for(let t=0;t<15;t++){let n=e.getPointAt((t+.3)/15),r=e.getTangentAt((t+.3)/15);if(t%3==0)this.lamp(n.x+r.z*.9,n.z-r.x*.9,t);else{this.patch(n.x+r.z*.92,n.z-r.x*.92,.38,.25,`#abb790`);for(let e=0;e<3;e++)this.sphere([n.x+r.z*.9+(e-1)*.13,.2,n.z-r.x*.9],[.1,.13,.1],t%2?`#d9b1a1`:`#cfcd8e`)}}for(let e of[0]){let t=Math.max(...this.roadSamples.filter(e=>Math.abs(e.x)<1).map(e=>e.z))+1.12,n=new Ii([[e,t],[e-.35,(t+13.5)/2],[e+.25,13.5]].map(([e,t])=>new H(e,.13,t)));this.ribbon(n,.62,`#d8cfb8`,.072);for(let t=0;t<3;t++)this.walker(n,250+t+e+10,1,.12,!0)}let t=document.createElement(`button`);t.className=`district-label life-label`,t.innerHTML=`<b>✳</b><span>细胞生活街</span><i>↗</i>`,t.setAttribute(`aria-label`,`漫步细胞生活街`),t.addEventListener(`click`,()=>this.onPOI(`life`)),this.labelRoot.append(t),this.labels.set(`life`,t)}base(e,t=2.25){this.cylinder([0,.15,0],t,.24,`#e8ddc4`,e),this.cylinder([0,.3,0],t-.13,.12,X,e),this.stats.buildings++}windows(e,t,n,r=12){for(let i=0;i<r;i++){let a=i/r*Math.PI*2,o=this.box([Math.sin(a)*t,n,Math.cos(a)*t],[.19,.35,.035],Yd,e,.035);o.rotation.y=a}}sign(e,t){let n=this.plan.accent;this.box([0,1.05,1.3],[.7,.35,.08],n,e,.06);for(let t=0;t<3;t++)this.box([-.21+t*.21,1.05,1.35],[.09,.035,.03],X,e,.01)}landmark(e,t){let[n,r]=e.position,i=this.group(n,r);switch(e.id===`coronary`&&i.scale.setScalar(.85),this.base(i),e.kind){case`pump`:this.pump(i,t);break;case`clock`:this.clock(i);break;case`cortex`:this.cortex(i);break;case`relay`:this.relay(i);break;case`memory`:this.memory(i);break;case`alveoli`:this.alveoli(i);break;case`trachea`:this.trachea(i);break;case`exchange`:this.exchange(i);break;case`stomach`:this.stomach(i);break;case`villi`:this.villi(i);break;case`liver`:this.liver(i);break;case`lymph`:this.lymph(i);break;case`filter`:this.filter(i);break;case`tubule`:this.tubule(i);break;case`reservoir`:this.reservoir(i);break;case`citadel`:this.citadel(i);break;case`scanner`:this.scanner(i);break;case`academy`:this.academy(i);break;case`antibody`:this.antibody(i)}for(let e=0;e<3;e++){let i=e/3*Math.PI*2+.5;this.lamp(n+Math.sin(i)*2.35,r+Math.cos(i)*2.35,t)}let a=new ui(new Ei(2.35,2.35,5.6,12),new Qr({visible:!1}));a.position.set(n,2.8,r),a.userData.poi=e.id,this.scene.add(a),this.hitboxes.push(a),this.geometries.add(a.geometry);let o=document.createElement(`button`);o.className=`district-label`,o.style.setProperty(`--city`,this.plan.accent),o.innerHTML=`<b>${String(t+1).padStart(2,`0`)}</b><span>${e.name}</span><i>↗</i>`,o.setAttribute(`aria-label`,`近看${e.name}`),o.addEventListener(`click`,()=>this.onPOI(e.id)),this.labelRoot.append(o),this.labels.set(e.id,o)}animatePart(e,t,n,r=0){e.updateWorldMatrix(!0,!0);let i=t.getWorldPosition(new H),a=t.getWorldQuaternion(new Ht),o=t.getWorldScale(new H);this.dynamicRoot.attach(t),t.position.copy(i),t.quaternion.copy(a),t.scale.copy(o),this.animations.push({object:t,type:n,base:t.position.y,phase:r,scale:o.clone()})}pump(e,t){let n=t<2?`#95afbd`:`#d68577`;this.box([0,.85,0],[2.8,1.1,2.1],X,e,.2),this.box([0,1.48,0],[3,.18,2.25],n,e,.08);for(let t of[-1,1]){this.cylinder([t*.75,2.15,-.15],.67,1.2,`#f0d8bf`,e);let r=this.sphere([t*.75,2.9,-.15],[.76,.6,.74],n,e);this.animatePart(e,r,`pulse`,t*.1),this.tube([[t*.75,2.1,-.1],[t*1.6,2.3,-.1],[t*1.85,1.2,-.1],[t*1.95,.5,.3]],.15,n,e),this.box([t*.73,.88,1.07],[.5,.4,.05],Yd,e,.07)}this.cylinder([0,3.1,-.7],.18,1.8,n,e),this.tube([[0,3.6,-.7],[0,4.3,-.7],[.6,4.5,-.7],[.85,4.1,-.7]],.19,n,e),this.box([0,.76,1.1],[.47,.85,.1],n,e,.15),this.sign(e,`PUMP`);for(let t of[-1,1]){this.box([t*.8,.9,-1.07],[.5,.4,.05],Yd,e,.07);let n=this.box([t*1.42,.9,0],[.04,.4,.52],Yd,e,.05);n.rotation.y=0,this.tube([[t*1.25,.5,-.85],[t*1.25,1.3,-.85],[t*.7,1.3,-1.15]],.06,`#c6b789`,e)}let r=this.mesh(new Ya(.34,.045,7,30),Xd,e,[0,1.7,1.16]);this.animatePart(e,r,`rotate`)}clock(e){this.cylinder([0,1.8,0],.83,3,X,e),this.cylinder([0,3.4,0],1.02,.22,this.plan.accent,e),this.sphere([0,3.78,0],[1,.52,1],this.plan.accent,e),this.windows(e,.84,2.1,8),this.box([0,1.9,.87],[.68,.85,.05],`#cfb078`,e,.15),this.cylinder([0,4.5,0],.045,.7,Xd,e);let t=this.sphere([0,4.97,0],[.22,.22,.22],`#f4ce7b`,e);this.animatePart(e,t,`pulse`),this.tube([[-.25,1.86,.92],[-.1,2.1,.92],[0,1.64,.92],[.15,1.92,.92],[.27,1.92,.92]],.025,X,e)}cortex(e){this.cylinder([0,1.1,0],1.7,1.5,X,e),this.windows(e,1.72,1.2,16),this.cylinder([0,2,0],1.87,.28,`#c6b0d6`,e);for(let t=0;t<12;t++){let n=t/12*Math.PI*2;this.cylinder([Math.cos(n)*1.55,2.5,Math.sin(n)*1.55],.08,.85,X,e)}this.cylinder([0,3,0],1.85,.17,`#a491b7`,e);for(let t of[-1,1]){this.sphere([t*.7,3.65,0],[1,1.02,1.4],`#c3aed6`,e);for(let n=0;n<5;n++){let r=-.95+n*.46;this.tube([[t*.12,4.36,r],[t*.7,4.51,r],[t*1.46,4.02,r],[t*1.54,3.5,r+.1]],.063,`#ab8fbd`,e)}}let t=this.mesh(new Ya(2.15,.045,6,64),Xd,e,[0,3.1,0]);t.rotation.x=Math.PI/2,this.animatePart(e,t,`rotate`),this.box([0,.8,1.72],[.65,.9,.12],`#b4a0cb`,e,.2)}relay(e){for(let t=0;t<3;t++){let n=(t-1)*1.16,r=1.7+(t===1?1:.1);this.cylinder([n,.5+r/2,0],.47,r,X,e),this.sphere([n,.5+r,0],[.59,.37,.58],this.plan.accent,e),this.cylinder([n,r+1,0],.045,.85,Xd,e);let i=this.sphere([n,r+1.5,0],[.17,.17,.17],`#f5d88a`,e);this.animatePart(e,i,`pulse`,t);for(let t=0;t<3;t++)this.box([n,.9+t*.47,.46],[.27,.22,.04],Yd,e,.035);let a=this.mesh(new Ya(.4,.055,7,25),this.plan.accent,e,[n,r+.95,0]);a.rotation.x=.6}this.box([0,.56,1.05],[2.5,.55,.7],`#e1d8ba`,e,.13),this.sign(e,`SIGNAL`)}memory(e){for(let t=0;t<5;t++){let n=(t-2)*.57,r=1.5+Math.sin(t*.9)*.55;this.box([n,.4+r/2,0],[.45,r,1.55],t%2?X:`#d9c9b2`,e,.09),this.box([n,.5+r,0],[.52,.14,1.7],this.plan.accent,e,.05);for(let t=0;t<3;t++)this.box([n,.85+t*.35,.79],[.28,.045,.035],`#b7a582`,e,.01)}this.tube([[-1.6,1,-.8],[-1.7,2.5,-.8],[0,3.4,-.8],[1.7,2.5,-.8],[1.6,1,-.8]],.09,Xd,e),this.sphere([0,3.4,-.8],[.23,.22,.23],`#e4d39a`,e)}alveoli(e){this.cylinder([0,.66,0],1.78,.52,X,e),this.windows(e,1.79,.7,14);for(let t=0;t<7;t++){let n=t*Math.PI/3,r=t===6?0:1.05,i=Math.cos(n)*r,a=Math.sin(n)*r;this.cylinder([i,1.3,a],.44,.7,`#e1e7cf`,e);let o=this.sphere([i,2.15+(t===6?.65:0),a],[.76,.93,.76],t%2?`#a4cabb`:`#b5d5c8`,e);this.animatePart(e,o,`breath`,t*.1),this.sphere([i+.24,2.37+(t===6?.65:0),a+.54],[.16,.19,.055],`#e7f0da`,e)}let t=this.mesh(new Ya(1.95,.1,7,60),`#da9e91`,e,[0,1.3,0]);t.rotation.x=Math.PI/2;for(let t=0;t<5;t++){let n=this.sphere([(t-2)*.5,3.5+t*.28,.1],[.12,.12,.12],`#d9efdf`,e);this.animatePart(e,n,`float`,t)}}trachea(e){this.cylinder([0,2.3,0],.64,4,X,e);for(let t=0;t<8;t++){let n=this.mesh(new Ya(.65,.065,6,28),`#b6c7ba`,e,[0,.6+t*.45,0]);n.rotation.x=Math.PI/2}this.cylinder([0,4.4,0],.85,.25,`#8eb7a9`,e),this.cylinder([0,4.55,0],.63,.12,`#6f9b95`,e);for(let t of[-1,1])this.tube([[0,2.7,0],[t*.8,2.2,0],[t*1.7,1.65,0]],.36,`#d4dfc5`,e);this.box([0,.63,1],[1.5,.6,.85],X,e,.15),this.sign(e,`AIR`)}exchange(e){this.box([0,.9,-.45],[2.9,1.13,1.5],X,e,.19),this.box([0,1.55,-.45],[3.15,.18,1.7],this.plan.accent,e,.07);for(let t=0;t<4;t++)this.box([-.99+t*.66,1.05,.32],[.36,.47,.04],Yd,e,.07);for(let t of[-1,1])this.cylinder([t*1.3,.85,1],.41,1,`#e2d9bb`,e),this.sphere([t*1.3,1.5,1],[.45,.28,.44],this.plan.accent,e),this.tube([[t*1.3,1.65,1],[t*1.3,2.7,1],[t*.5,2.7,1]],.08,Xd,e);for(let t=0;t<5;t++)this.sphere([-.5+t*.25,.7,1.1],[.12,.13,.12],t%2?`#cfd8b3`:`#e5c284`,e);this.sign(e,`O2`)}stomach(e){this.box([0,.9,0],[3,1.2,2.25],X,e,.23),this.box([0,1.58,0],[3.2,.23,2.4],`#d2aa76`,e,.1);let t=new ra;t.moveTo(-.55,1.3),t.bezierCurveTo(-.55,.4,-.4,.35,0,.5),t.bezierCurveTo(.5,1.5,1.4,1.05,1.4,.35),t.bezierCurveTo(1.35,-.75,.2,-1.05,-.65,-.7),t.bezierCurveTo(-1.4,-.2,-1.1,.4,-.9,1.3),t.closePath(),this.mesh(new Va(t,{depth:.8,bevelEnabled:!0,bevelSize:.16,bevelThickness:.2,bevelSegments:3,curveSegments:20}),`#dfb173`,e,[0,2.9,-.5]),this.tube([[-.7,3.9,-.1],[-.7,4.6,-.1],[-1.4,4.9,-.1]],.23,`#c59867`,e);for(let t of[-1,1]){this.box([t*.9,.9,1.15],[.56,.5,.05],Yd,e,.07);let n=this.mesh(new Ya(.36,.075,6,18),Xd,e,[t*.9,1.9,1.26]);this.animatePart(e,n,`rotate`,t)}this.box([0,.66,1.35],[.7,.6,.7],`#b99264`,e,.1)}villi(e){for(let t=0;t<3;t++){this.box([0,.38+t*.28,(t-1)*.96],[3.6,.23,1.02],t%2?`#d8c291`:`#e7d6aa`,e,.1);for(let n=0;n<5;n++){let r=(n-2)*.66,i=(t-1)*.96,a=.8+n%2*.3;this.cylinder([r,.62+t*.28+a/2,i],.19,a,`#f1d69d`,e),this.sphere([r,.62+t*.28+a,i],[.24,.29,.24],`#e7bd71`,e),this.tube([[r,.7,i],[r+.05,1.2+t*.3,i],[r,1.4+t*.3,i]],.03,`#d48f78`,e);let o=this.sphere([r,1.8+t*.28,i],[.075,.075,.075],Xd,e);this.animatePart(e,o,`float`,t+n)}}}liver(e){this.box([0,1,0],[3.5,1.4,2.15],X,e,.2),this.sphere([-.3,2,0],[1.9,.7,1.25],`#b98a68`,e);for(let t=0;t<4;t++)this.box([-.98+t*.65,.85,1.09],[.42,.65,.07],`#ac9e7e`,e,.08);this.sphere([1.16,1.76,.76],[.23,.38,.2],`#aac093`,e);for(let t=0;t<4;t++)this.box([-1.35+t*.86,.52,1.63],[.51,.33,.49],t%2?`#dec18a`:`#d5ab71`,e,.055);this.tube([[-1.8,1.1,-.4],[-1.9,2.7,-.4],[0,2.9,-.4]],.1,`#a6a8be`,e)}lymph(e){for(let t of[-1,1])this.cylinder([t*1.26,1.2,0],.45,1.8,X,e),this.sphere([t*1.26,2.23,0],[.59,.44,.58],this.plan.accent,e),this.box([t*1.26,1.25,.45],[.25,.4,.04],Yd,e,.06);this.tube([[-1.26,2.25,0],[-.8,3.1,0],[.8,3.1,0],[1.26,2.25,0]],.24,`#c2d1aa`,e),this.box([0,.45,.1],[1.25,.14,2.85],`#aabc99`,e,.06);for(let t=0;t<5;t++)this.box([0,.54,-1.05+t*.5],[1.12,.02,.07],X,e,.01);this.sphere([0,3.25,0],[.35,.32,.2],X,e)}filter(e){this.cylinder([0,.66,0],1.75,.65,X,e),this.cylinder([0,1.05,0],1.57,.14,`#92c0c8`,e);for(let t=0;t<5;t++){let n=t*1.25;this.mesh(new Ya(.79,.14,7,36),t%2?`#d49491`:`#b8a0b0`,e,[Math.cos(n)*.31,1.7,Math.sin(n)*.31]).rotation.set(t*.6,t*.8,.4)}this.sphere([0,1.78,0],[1.8,1.25,1.8],`#c8e1df`,e,!0),this.tube([[-1.9,.7,0],[-1.5,1.9,0],[0,2.6,0],[1.5,1.9,0],[1.9,.7,0]],.095,X,e),this.tube([[0,1.1,1.5],[0,.65,2.1],[.9,.5,2.2]],.16,`#91bec8`,e);for(let t=0;t<4;t++){let n=this.sphere([(t-1.5)*.45,1.5,.8],[.1,.1,.1],`#dbf2e6`,e);this.animatePart(e,n,`float`,t)}}tubule(e){this.box([0,.42,0],[3.6,.18,3.4],`#ccdcd5`,e,.25);for(let t=0;t<3;t++){let n=(t-1)*1.04;this.tube([[n-.32,.75,-1.3],[n-.32,.75,.8],[n,.75,1.25],[n+.32,.75,.8],[n+.32,.75,-1.3]],.15,`#95c0bf`,e),this.cylinder([n-.32,1.1,-1.3],.28,.9,X,e),this.sphere([n-.32,1.65,-1.3],[.36,.25,.36],this.plan.accent,e);let r=this.mesh(new Ya(.2,.035,6,20),`#c5ad76`,e,[n+.32,1.12,-1.1]);r.rotation.x=Math.PI/2,this.animatePart(e,r,`rotate`,t)}this.tube([[-1.65,1,-.3],[-1.65,2.3,-.3],[1.65,2.3,-.3],[1.65,1,-.3]],.075,Xd,e)}reservoir(e){this.cylinder([0,.62,0],1.87,.62,X,e),this.cylinder([0,.96,0],1.69,.1,`#97c4cb`,e);let t=this.sphere([0,1.04,0],[1.5,.1,1.5],`#b9ded9`,e);this.animatePart(e,t,`breath`);for(let t=0;t<8;t++){let n=t/8*Math.PI*2;this.cylinder([Math.cos(n)*1.86,1.17,Math.sin(n)*1.86],.055,.73,`#bfbd96`,e)}let n=this.mesh(new Ya(1.86,.045,6,60),`#c8c29c`,e,[0,1.51,0]);n.rotation.x=Math.PI/2,this.tube([[0,.8,-1.7],[0,2.5,-1.7],[0,2.65,-.3]],.14,`#8baeb7`,e),this.sphere([0,2.1,-.3],[.12,.28,.12],`#c0e0dc`,e)}shield(e,t,n){let r=new ra;r.moveTo(0,.65),r.lineTo(.55,.43),r.lineTo(.48,-.22),r.quadraticCurveTo(.3,-.58,0,-.8),r.quadraticCurveTo(-.3,-.58,-.48,-.22),r.lineTo(-.55,.43),r.closePath(),this.mesh(new Va(r,{depth:.09,bevelEnabled:!0,bevelSize:.045,bevelThickness:.03,bevelSegments:2}),X,e,[0,t,n]),this.tube([[-.26,t-.08,n+.16],[-.04,t-.28,n+.16],[.29,t+.17,n+.16]],.055,`#94ad80`,e)}citadel(e){this.cylinder([0,1.05,0],1.8,1.4,X,e),this.windows(e,1.81,1.1,12),this.sphere([0,2.3,0],[1.95,1.25,1.75],`#a3bc91`,e);for(let t=0;t<6;t++){let n=t*Math.PI/3;this.sphere([Math.sin(n)*1.22,2.8,Math.cos(n)*1.02],[.38,.33,.35],`#bdcfa9`,e)}this.shield(e,2.1,1.63),this.cylinder([0,3.65,0],.05,1,`#b0ad81`,e),this.sphere([0,4.22,0],[.22,.22,.22],Xd,e)}scanner(e){this.box([0,.53,0],[3.5,.32,2],X,e,.16);for(let t of[-1,1])this.box([t*1.3,1.43,0],[.47,1.55,.65],`#9cb58b`,e,.13),this.sphere([t*1.3,2.3,0],[.32,.22,.35],X,e);let t=this.mesh(new Ya(1.05,.11,8,48),`#c4cea2`,e,[0,1.6,0]);this.animatePart(e,t,`rotate`);for(let t=0;t<4;t++){let n=t*Math.PI/2;this.sphere([Math.cos(n),1.6+Math.sin(n),.1],[.12,.12,.12],Xd,e)}this.box([1.6,.9,1.3],[.55,1,.6],X,e,.08),this.box([1.6,1.1,1.62],[.36,.3,.02],Yd,e,.03)}academy(e){this.box([0,1.15,-.5],[3.1,1.6,1.5],X,e,.2),this.box([0,2.02,-.5],[3.3,.2,1.7],`#9aad82`,e,.08);for(let t=0;t<5;t++)this.box([-1.05+t*.52,1.4,.28],[.26,.48,.06],Yd,e,.04);this.shield(e,2.6,-.48);for(let t=0;t<6;t++){let n=(t%3-1)*.75,r=.85+Math.floor(t/3)*.6;this.cylinder([n,.44,r],.25,.14,`#c2cda9`,e),this.sphere([n,.77,r],[.19,.26,.2],X,e),this.sphere([n,.86,r+.15],[.08,.09,.055],`#b1a3bd`,e)}}antibody(e){this.box([0,1.03,0],[3.1,1.3,2.1],X,e,.2),this.box([0,1.76,0],[3.3,.2,2.3],`#a8ba8f`,e,.08);for(let t=0;t<3;t++){let n=(t-1)*.93;this.cylinder([n,2.2,0],.26,.8,`#cfdbc0`,e),this.tube([[n,2.2,0],[n,2.85,0],[n-.36,3.2,0]],.095,`#a692bf`,e),this.tube([[n,2.85,0],[n+.36,3.2,0]],.095,`#a692bf`,e),this.box([n,.96,1.07],[.46,.6,.05],Yd,e,.07)}this.shield(e,1.06,1.15)}specialInfrastructure(){if(this.id===`brain`)for(let e of this.plan.landmarks.slice(1)){let[t,n]=e.position,r=[[0,3,0],[t*.45,3.5,n*.45],[t,2.8,n]],i=this.tube(r,.07,`#cbb77f`);for(let e=0;e<4;e++){let t=this.sphere([0,0,0],[.11,.11,.11],`#ffdf8c`,this.dynamicRoot);this.animations.push({object:t,type:`signal`,phase:e/4,base:0,curve:i})}for(let e=0;e<6;e++){let t=i.getPoint((e+.5)/6);this.mesh(new wi(.16,.34,3,10),`#c5b9d0`,this.staticRoot,[t.x,t.y,t.z]).quaternion.setFromUnitVectors(new H(0,1,0),i.getTangent((e+.5)/6))}}if(this.id===`lungs`)for(let e of[-1,1])this.tube([[0,2.6,-7],[e*2.4,2.5,-5],[e*6,1.6,-2.6]],.28,`#e2ddc3`),this.tube([[e*3,2.2,-4.6],[e*4,1.4,0],[e*6,1.1,5]],.16,`#d1d9ba`);if(this.id===`heart`){for(let e of[-5,5]){this.tube([[e,1.3,-2.6],[e,1.55,-.8],[e,1.1,1.8]],.26,e<0?`#9cb9c4`:`#d79789`);let t=this.box([e,1.1,-.25],[.65,.07,.55],Xd,this.dynamicRoot,.04);this.animations.push({object:t,type:`gate`,phase:0,base:1.1})}this.tube([[-4.4,3.9,3.3],[-2,4.8,2.4],[-1,2.5,-.5]],.15,`#a9bacb`),this.tube([[5,4.5,3],[2.6,5.3,3],[1,2.5,5.8]],.17,`#d79485`)}if(this.id===`gut`){let e=this.tube([[-5,1.1,-2.8],[-1.5,1.1,-2.2],[3,1.1,-1.5],[3.5,1.1,2.8],[.5,1.1,4.6],[-3.8,1.1,3.5]],.2,`#d0ac7e`);for(let t=0;t<14;t++){let n=this.box([0,0,0],[.26,.25,.26],t%2?Xd:`#e8d2a0`,this.dynamicRoot,.05);this.animations.push({object:n,type:`signal`,phase:t/14,base:.2,curve:e})}for(let t=0;t<7;t++){let n=e.getPoint(t/6);this.cylinder([n.x,.5,n.z],.08,.9,`#b9aa85`)}}if(this.id===`kidneys`)for(let e of[-6,6]){let t=this.tube([[e,1,-2.8],[e-1.2,.55,0],[e-1.5,.55,4.8],[e,.55,6],[e+1.5,.55,4.8],[e+1.2,.55,0]],.22,`#97bbc5`);for(let e=0;e<10;e++){let n=this.sphere([0,0,0],[.105,.09,.105],`#e0f6e9`,this.dynamicRoot);this.animations.push({object:n,type:`signal`,phase:e/10,base:.08,curve:t})}this.tube([[e,1,6],[e*.5,.7,7.4],[0,.65,6.7]],.15,`#bccbc0`)}if(this.id===`immune`)for(let e=0;e<6;e++){let t=e*Math.PI/3,n=Math.cos(t)*13.4,r=Math.sin(t)*11.8;this.cylinder([n,.8,r],.62,1.4,X),this.sphere([n,1.75,r],[.79,.58,.75],`#a7bf91`),this.cylinder([n,2.45,r],.055,.9,Xd),this.sphere([n,2.96,r],[.16,.16,.16],`#e8d49b`);let i=(e+1)*Math.PI/3,a=Math.cos(i)*13.4,o=Math.sin(i)*11.8;this.tube([[n,.57,r],[(n+a)/2,.57,(r+o)/2],[a,.57,o]],.19,`#b5c6a4`),this.stats.buildings++}}neighborhoodSignature(){if(this.id===`brain`){let e=this.tube([[-12,4.3,11],[-5,4.6,14.6],[2.5,4.8,15.1],[10,4.2,11.8]],.045,`#baa67b`);for(let t=0;t<10;t++){let n=e.getPoint(t/9);this.sphere([n.x,n.y,n.z],[.16,.16,.16],`#cfbb9b`);let r=this.sphere([0,0,0],[.1,.1,.1],Xd,this.dynamicRoot);this.animations.push({object:r,type:`signal`,base:0,phase:t/10,curve:e})}}else if(this.id===`lungs`)for(let e of[-5,2.5,10])this.tube([[e-1.3,.2,13.3],[e-1.3,2.8,13.3],[e,3.5,13.3],[e+1.3,2.8,13.3],[e+1.3,.2,13.3]],.055,`#b3cbb5`),this.sphere([e,2.35,13.3],[1.3,1.05,.18],`#d4e8dd`,this.staticRoot,!0);else if(this.id===`gut`)for(let e=0;e<4;e++){let t=-16+e*.75;this.box([t,.2+e*.16,8],[.7,.25+e*.3,2.2],`#c5bd93`);for(let n=0;n<4;n++)this.sphere([t,.43+e*.3,7.2+n*.45],[.15,.21,.15],`#c6ce95`)}else if(this.id===`heart`){this.tube([[-10,1.2,7],[-10,3.1,8],[-7,3.4,9],[-5,1.3,10]],.2,`#d49d88`);for(let e=0;e<8;e++)this.box([-10+e*.65,2.4,8.6],[.53,.13,1.1],`#d7b69a`);for(let e of[-9,-7,-5.5])this.cylinder([e,1.25,8.6],.07,2.3,`#afac8c`)}else if(this.id===`immune`)for(let e of[-11,-4,3,10]){let t=this.group(e,12.1);this.cylinder([0,1.5,0],.04,2.8,`#9baa8c`,t),this.box([.35,2.2,0],[.7,.95,.045],`#b3c49e`,t,.06);let n=new G;n.scale.setScalar(.4),n.position.set(.35,2.2,.06),t.add(n),this.shield(n,0,0)}}prepareEncounters(){this.actors.forEach((e,t)=>{e.root.userData.pick=`person:${t}`,this.interactiveRoots.push(e.root)}),this.trafficLanes.forEach((e,t)=>e.roots.forEach((e,n)=>{e.userData.pick=`vehicle:${t}:${n}`,this.interactiveRoots.push(e)}));for(let e=0;e<(this.id===`lungs`?0:3);e++){let t=`person:${e}`,n=document.createElement(`button`);n.className=`resident-label`,n.textContent=`${Ed[this.id][e].name} · 打个招呼`,n.setAttribute(`aria-label`,`认识${Ed[this.id][e].name}`),n.addEventListener(`click`,()=>this.onPOI(t)),this.labelRoot.append(n),this.residentLabels.set(t,n)}this.courierRoot=this.residentTemplates[0].clone(!0),this.courierRoot.scale.setScalar(1.05),this.courierRoot.visible=!1,this.courierRoot.userData.pick=`courier`,this.dynamicRoot.add(this.courierRoot),this.interactiveRoots.push(this.courierRoot);for(let e=0;e<3;e++)this.sphere([-.22+e*.22,1.25,-.12],[.1,.1,.1],`#efbb7e`,this.courierRoot);let e=document.createElement(`button`);e.className=`resident-label courier-label`,e.textContent=`小红 · 送氧途中`,e.addEventListener(`click`,()=>this.onPOI(`courier`)),this.labelRoot.append(e),this.residentLabels.set(`courier`,e),this.dynamicRoot.add(this.momentRoot);let t=this.mesh(new Ya(2.65,.045,6,64),Xd,this.momentRoot,[0,.4,0]);t.rotation.x=Math.PI/2;for(let e=0;e<12;e++)this.sphere([0,0,0],[.12,.12,.12],e%2?this.plan.accent:Xd,this.momentRoot);for(let e=0;e<3;e++){let t=this.residentTemplates[e+1].clone(!0);t.scale.setScalar(.8),this.momentRoot.add(t)}}rootFor(e){return this.interactiveRoots.find(t=>t.userData.pick===e)}setWorkday(e){this.workday=e}focusHarbor(e=!1){if(!this.harbor)return;this.releaseCamera(),this.selected=`__harbor`,this.selection.visible=!1,this.controls.autoRotate=!1;let t=[`queue`,`partner`,`exchange`].includes(this.workday.stage);this.target.set(e?t?-4.7:4.5:0,1.1,24.8),this.eye.copy(this.target).add(e?new H(6,5.1,8):new H(9,12,16)),this.width<600&&this.eye.sub(this.target).multiplyScalar(.78).add(this.target),this.transitioning=!0}inspect(e){if(e.startsWith(`harbor:`)){let t=e.split(`:`)[1];return this.harbor?.people.has(t)?{key:e,name:{red:`小红`,bubble:`泡泡`,cloud:`云云`,green:`小青`}[t],role:{red:`红细胞快递员`,bubble:`港口接待员`,cloud:`气体交接员`,green:`花房店员`}[t],status:zd[this.workday.stage].task,destination:`肺泡港 · 交接步道与街角花房`,detail:Gd(this.workday,t),cargo:t===`red`&&[`exchange`,`returning`,`rest`,`complete`].includes(this.workday.stage)?`氧气标记 · 运往下一段循环`:void 0}:null}if(e===`courier`&&this.courierStep)return{key:e,name:`小红`,role:`红细胞快递员`,status:this.courierProgress<.7?`正在前往交接点`:`正在完成这一站的交接`,destination:this.courierStep.title,detail:this.courierStep.text,cargo:this.courierStep.cargo};if(e.startsWith(`person:`)){let t=Number(e.split(`:`)[1]),n=this.actors[t];if(!n)return null;let r=Ed[this.id][t%3],i=wd(this.simulationTime,n.length*(n.open?2:1),n.seed),a=n.curve.getPointAt(i.progress<.5?.5:0),o=this.plan.landmarks.reduce((e,t)=>Math.hypot(e.position[0]-a.x,e.position[1]-a.z)<Math.hypot(t.position[0]-a.x,t.position[1]-a.z)?e:t);return{key:e,name:t<3&&this.id!==`lungs`?r.name:`${r.name}的邻居 ${t+1}`,role:r.role,status:i.moving?`正沿步道赶路`:`停下来歇脚、与伙伴交接`,destination:n.open?`细胞生活街的另一端`:`${o.name}附近的街区`,detail:r.wish+` 居民的工作和休息是人体城市的拟人化表达。`}}if(e.startsWith(`vehicle:`)){let[,t,n]=e.split(`:`).map(Number),r=this.trafficLanes[t]?.cars[n];if(!r)return null;let i={heart:t<2?`低氧血液的运输示意`:`氧与营养的运输示意`,brain:`信息脉冲`,lungs:`氧气 / 二氧化碳的交换示意`,gut:`糖、氨基酸等营养物料`,kidneys:`水与小分子物料`,immune:`免疫协作信息`}[this.id];return{key:e,name:n===0?`细胞慢行巴士`:`${this.plan.vehicle} ${n+1}`,role:this.plan.roads[Math.floor(t/2)].name,status:r.dwell>0?`停站交接中`:r.speed<.2?`正在等候前车`:`沿专用车道行驶`,destination:`沿线补给站`,detail:`车辆是运输活动的比喻。巴士会停站，后车保持距离；货物标签用于理解运输内容。`,cargo:i}}return null}get contacts(){return Ed[this.id].map((e,t)=>({...e,key:this.id===`lungs`?`harbor:${[`bubble`,`green`,`cloud`][t]}`:`person:${t}`}))}follow(e){this.rootFor(e)&&(this.releaseCamera(),this.followed=e,this.viewMode=`follow`,this.selected=`__entity`,this.selection.visible=!0,this.selection.scale.setScalar(.25),this.controls.autoRotate=!1,this.transitioning=!1)}releaseCamera(){this.selected===`__entity`&&(this.selection.visible=!1),this.followed=null,this.viewMode=`free`,this.controls.minDistance=7}watch(e){if(e===`ride`){this.follow(`vehicle:0:0`);return}this.releaseCamera(),this.controls.autoRotate=!1,this.viewMode=e,this.walkStarted=this.simulationTime,this.transitioning=!1,this.selected=`__entity`,this.selection.visible=!1,this.controls.minDistance=.8,e===`bench`&&(this.target.set(4,.8,17.2),this.eye.set(12.8,1.85,14.7),this.transitioning=!0)}setCourier(e,t=0){this.courierStep=e,this.courierProgress=t,this.courierRoot.visible=!!e&&e.city===this.id}view(){return{city:this.id,eye:this.camera.position.toArray(),target:this.controls.target.toArray()}}restoreView(e){this.releaseCamera(),this.controls.autoRotate=!1,this.controls.minDistance=.8,this.camera.position.fromArray(e.eye),this.controls.target.fromArray(e.target),this.transitioning=!1,this.controls.update()}structureAt(e,t){let n=this.plan.landmarks[0],r=1/0;for(let i of this.plan.landmarks){let a=new H(i.position[0],2,i.position[1]).project(this.camera),o=Math.hypot((a.x/2+.5)*this.width-e,(-a.y/2+.5)*this.height-t);o<r&&(n=i,r=o)}return{city:this.id,poi:n.id,name:n.name,near:r<160}}get audioScene(){let e=((this.harbor&&this.workday.active?this.harbor.people.get(`red`)?.position:this.followed?this.rootFor(this.followed)?.position:this.momentRoot.position)??new H).clone().sub(this.camera.position),t=new H(1,0,0).applyQuaternion(this.camera.quaternion);return{city:this.id,pan:Vt.clamp(e.clone().normalize().dot(t),-1,1),distance:e.length(),walking:this.viewMode===`walk`||!!this.followed?.startsWith(`person`)||!!this.harbor&&this.workday.active&&[`setting-out`,`returning`].includes(this.workday.stage),riding:!!this.followed?.startsWith(`vehicle`),activity:this.harbor?this.workday.stage:void 0}}updateEncounters(e,t){if(this.simulationTime=e.time,this.courierStep&&this.courierRoot.visible){let t=this.plan.landmarks.find(e=>e.id===this.courierStep.poi),n=this.lanes[this.id===`heart`&&this.courierStep.oxygen?1:0],r=0,i=1/0;for(let e=0;e<120;e++){let a=n.getPointAt(e/120),o=Math.hypot(a.x-t.position[0],a.z-t.position[1]);o<i&&(i=o,r=e/120)}let a=Math.min(1,this.courierProgress/.7),o=bd(r-.22+a*.22,1),s=n.getPointAt(o),c=n.getTangentAt(o);this.courierRoot.position.set(s.x+c.z*1.08,.16,s.z-c.x*1.08),this.courierRoot.rotation.y=Math.atan2(c.x,c.z);for(let[t,n]of[`left`,`right`].entries())this.courierRoot.getObjectByName(`leg-${n}`).rotation.x=a<1?Math.sin(e.time*5+t*Math.PI)*.3:0}let n=Od(this.id,e.time),r=this.plan.landmarks.find(e=>e.id===n.poi);if(this.momentRoot.visible=n.active,this.momentRoot.position.set(r.position[0],0,r.position[1]),this.momentRoot.children.slice(1,13).forEach((t,r)=>{let i=bd(n.progress*2+r/12,1),a=i*Math.PI*2,o=2.4+Math.sin(n.progress*Math.PI)*.6;this.id===`brain`?t.position.set(-3+i*6,2.7+Math.sin(i*Math.PI)*.45,(r%3-1)*.45):this.id===`lungs`?t.position.set((r%2?1:-1)*(.5+i*1.7),r%2?.6+i*1.7:2.3-i*1.7,2.4+r%3*.18):this.id===`gut`?t.position.set(-2.7+i*5.4,.8+Math.floor(r/4)*.25,2.5+r%3*.2):this.id===`kidneys`?t.position.set(Math.cos(a)*2.4,.8,1.5+Math.sin(a)*1.1):this.id===`immune`?t.position.set(Math.cos(a)*1.8,1.3+Math.sin(e.time*2+r)*.2,2+Math.sin(a)*.6):t.position.set(Math.cos(a)*o,.9+Math.sin(a*2+e.time)*.35,Math.sin(a)*o),t.scale.setScalar(.7+Math.sin(n.progress*Math.PI)*.6)}),this.momentRoot.children.slice(13).forEach((e,t)=>{let r=n.progress<.3?1-n.progress/.3:n.progress>.8?(n.progress-.8)/.2:0;e.position.set((t-1)*.6,.14,2.7+r*2),e.rotation.y=Math.PI}),this.viewMode===`follow`&&this.followed){let e=this.rootFor(this.followed);if(e){this.selection.position.set(e.position.x,.35,e.position.z);let n=e.position.clone().add(new H(0,.55,0));this.controls.target.lerp(n,1-Math.exp(-t*4)),this.camera.position.lerp(n.clone().add(new H(4.5,4.7,6)),1-Math.exp(-t*3))}}if(this.viewMode===`walk`){let n=bd((e.time-this.walkStarted)*.005,2),r=n<=1?n:2-n,i=n<=1?1:-1,a=this.promenade.getPointAt(Vt.clamp(r,.015,.985)),o=this.promenade.getTangentAt(Vt.clamp(r,.015,.985));this.camera.position.lerp(a.clone().add(new H(0,1.75,0)),1-Math.exp(-t*3)),this.controls.target.lerp(a.clone().addScaledVector(o,4*i).add(new H(0,1.05,0)),1-Math.exp(-t*3))}}updateResidentLabels(){let e=this.camera.position.distanceTo(this.controls.target)<25;for(let[t,n]of this.residentLabels){let r=this.rootFor(t),i=r.position.clone().add(new H(0,1.65,0)).project(this.camera);n.hidden=!this.showLabels||!r.visible||!e&&t!==`courier`||i.z<0||i.z>1||Math.abs(i.x)>.94||Math.abs(i.y)>.94||!!this.followed&&this.followed!==t,n.style.transform=`translate(-50%,-100%) translate(${(i.x/2+.5)*this.width}px,${(-i.y/2+.5)*this.height}px)`}}resize(e,t){this.width=e,this.height=t,this.camera.aspect=e/t,this.camera.fov=Math.min(85,Vt.radToDeg(2*Math.atan(Math.tan(Vt.degToRad(20))*Math.max(1,1.5/this.camera.aspect)))),this.camera.updateProjectionMatrix(),this.overviewDistance=48}focus(e){if(this.releaseCamera(),e===`life`){this.preset(`life`);return}let t=this.plan.landmarks.find(t=>t.id===e);if(!t)return;this.selected=e,this.target.set(t.position[0],1.1,t.position[1]);let n=this.camera.position.clone().sub(this.controls.target).normalize();n.y=Math.max(.4,n.y),n.normalize(),this.eye.copy(this.target).addScaledVector(n,15),this.transitioning=!0,this.controls.autoRotate=!1,this.selection.visible=!0,this.selection.scale.setScalar(1),this.selection.position.set(t.position[0],.42,t.position[1]),this.labels.forEach((t,n)=>t.classList.toggle(`active`,n===e))}preset(e){if(this.releaseCamera(),this.controls.autoRotate=!1,this.transitioning=!0,e===`life`)this.target.copy(this.lifePosition),this.eye.copy(this.target).add(new H(8,5.6,11)),this.selected=`life`,this.selection.visible=!1,this.labels.forEach((e,t)=>e.classList.toggle(`active`,t===`life`));else if(e===`street`){if(this.selected===`life`){this.preset(`life`);return}let e=this.selected?this.plan.landmarks.find(e=>e.id===this.selected)?.position??[2,14.5]:this.plan.landmarks[0].position;this.target.set(e[0],1.1,e[1]),this.eye.copy(this.target).add(new H(8,4.5,10))}else this.target.set(0,0,1.5),this.eye.copy(e===`top`?new H(.01,this.overviewDistance,this.overviewDistance*.2):new H(28,30,35).normalize().multiplyScalar(this.overviewDistance)).add(this.target),e===`city`&&(this.selected=null,this.selection.visible=!1,this.labels.forEach(e=>e.classList.remove(`active`)))}toggleAuto(){return this.releaseCamera(),this.transitioning=!1,this.controls.autoRotate=!this.controls.autoRotate,this.controls.autoRotate}toggleLabels(){return this.showLabels=!this.showLabels,this.showLabels}zoom(e){this.releaseCamera(),this.transitioning=!1;let t=this.camera.position.clone().sub(this.controls.target);t.multiplyScalar(e>0?.8:1.25),t.clampLength(this.controls.minDistance,this.controls.maxDistance),this.camera.position.copy(this.controls.target).add(t),this.controls.update()}hit(e,t){let n=t.getBoundingClientRect();this.pointer.set((e.clientX-n.left)/n.width*2-1,-(e.clientY-n.top)/n.height*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);let r=this.raycaster.intersectObjects([...this.hitboxes,...this.interactiveRoots.filter(e=>e.visible)],!0);for(let e of r){let t=e.object;for(;t;){if(t.userData.pick)return t.userData.pick;if(t.userData.poi)return t.userData.poi;t=t.parent}}}update(e,t,n,r){if(this.disposed)return;let i=this.previousSimulationTime===null?0:Math.max(0,e.time-this.previousSimulationTime);this.previousSimulationTime=e.time;for(let t of this.trafficLanes)Cd(t.cars,t.length,i,e.flow),t.cars.forEach((e,n)=>{let r=bd(e.distance/t.length*t.direction,1),i=t.curve.getPointAt(r),a=t.curve.getTangentAt(r),o=t.roots[n];o.position.set(i.x+a.z*t.direction*.29,.09,i.z-a.x*t.direction*.29),o.rotation.y=Math.atan2(a.x*t.direction,a.z*t.direction)});for(let t of this.actors){let n=wd(e.time,t.length*(t.open?2:1),t.seed),r=t.open?n.progress<.5?1:-1:t.direction,i=t.open?n.progress<.5?n.progress*2:2-n.progress*2:bd(n.progress*t.direction,1),a=t.curve.getPointAt(i),o=t.curve.getTangentAt(i),s=e.time*(4+n.pace*3)+t.seed;t.root.position.set(a.x+o.z*t.offset,.13+(n.moving?Math.abs(Math.sin(s))*.018:0),a.z-o.x*t.offset),t.root.rotation.y=Math.atan2(o.x*r,o.z*r)+(n.moving?0:Math.sin(t.seed)*.65),t.legs.forEach((e,t)=>{e.rotation.x=n.moving?Math.sin(s+t*Math.PI)*.29:0}),t.root.getObjectByName(`arm-left`).rotation.x=n.moving?Math.sin(s)*.24:-.25,t.root.getObjectByName(`arm-right`).rotation.x=n.moving?-Math.sin(s)*.24:-.4+Math.sin(e.time*.9+t.seed)*.08}for(let e=0;e<2;e++)for(let e=0;e<this.actors.length;e++)for(let t=e+1;t<this.actors.length;t++){let n=this.actors[e],r=this.actors[t];if(n.curve!==r.curve)continue;let i=n.root.position.x-r.root.position.x,a=n.root.position.z-r.root.position.z,o=Math.hypot(i,a),s=(n.root.scale.x+r.root.scale.x)*.24;if(o>=s)continue;let c=o<.001?n.seed:Math.atan2(i,a),l=(s-o)*.5;n.root.position.x+=Math.sin(c)*l,n.root.position.z+=Math.cos(c)*l,r.root.position.x-=Math.sin(c)*l,r.root.position.z-=Math.cos(c)*l}for(let t of this.neighbors)t.root.rotation.y=t.heading+Math.sin(e.time*.34+t.phase)*.09,(t.pose===`chat`||t.pose===`shop`)&&(t.root.getObjectByName(`arm-right`).rotation.x=-.55+Math.sin(e.time*1.2+t.phase)*.25),t.pose===`sit`&&(t.root.getObjectByName(`arm-left`).rotation.x=-.45+Math.sin(e.time*.65+t.phase)*.08);for(let t of this.animations){let n=e.time;if(t.type===`pulse`){let n=Math.max(0,Math.sin(e.beats*Math.PI*2))**6;t.object.scale.copy(t.scale).multiplyScalar(1+n*.065)}if(t.type===`breath`&&(t.object.scale.copy(t.scale),t.object.scale.y*=1+Math.sin(e.breaths*Math.PI*2)*.065),t.type===`rotate`&&(t.object.rotation.z=n*.45+t.phase),t.type===`float`&&(t.object.position.y=t.base+Math.sin(n*.85+t.phase)*.24),t.type===`gate`&&(t.object.rotation.x=.25+Math.max(0,Math.sin(e.beats*Math.PI*2))*.8),t.type===`sway`&&(t.object.rotation.z=Math.sin(n*.65+t.phase)*.024,t.object.rotation.x=Math.sin(n*.43+t.phase)*.016),t.type===`signal`&&t.curve){let n=this.id===`gut`?e.nutrients:e.transport,r=t.curve.getPointAt((n*.08+t.phase)%1);t.object.position.copy(r),t.object.position.y+=t.base}}if(this.updateEncounters(e,t),this.harbor?.update(this.workday,e.time,e.breaths,n),this.transitioning){let e=1-Math.exp(-t*4);this.camera.position.lerp(this.eye,e),this.controls.target.lerp(this.target,e),this.camera.position.distanceTo(this.eye)<.03&&this.controls.target.distanceTo(this.target)<.03&&(this.transitioning=!1)}let a=this.controls.autoRotate;r&&(this.controls.autoRotate=!1),this.controls.update(t),this.controls.autoRotate=a,this.sunlight.intensity=Vt.damp(this.sunlight.intensity,n===`sleep`?.75:2.4,2,i);let o=this.mat(Yd);if(o.emissive.set(`#d8ad65`),o.emissiveIntensity=Vt.damp(o.emissiveIntensity,n===`sleep`?.55:0,2,i),this.camera.updateMatrixWorld(),this.updateResidentLabels(),this.harbor?.project(this.camera,this.width,this.height,this.showLabels,this.workday),this.harborEntry){let e=new H(0,1,24).project(this.camera);this.harborEntry.hidden=!this.showLabels||this.camera.position.distanceTo(new H(0,1,24))<30||e.z>1||e.z<0||Math.abs(e.x)>.95||Math.abs(e.y)>.9,this.harborEntry.style.transform=`translate(-50%,-100%) translate(${(e.x/2+.5)*this.width}px,${(-e.y/2+.5)*this.height}px)`}this.labelRoot.dataset.cameraState=this.transitioning?`moving`:`ready`;let s=this.camera.position.distanceTo(this.controls.target)<24;for(let e of this.plan.landmarks){let t=this.labels.get(e.id),n=new H(e.position[0],e.kind===`cortex`?5.2:4.1,e.position[1]).project(this.camera),r=n.z>1||n.z<0;t.hidden=!this.showLabels||r||Math.abs(n.x)>1||Math.abs(n.y)>1||!!(s&&this.selected&&e.id!==this.selected),t.style.transform=`translate(-50%,-100%) translate(${(n.x/2+.5)*this.width}px,${(-n.y/2+.5)*this.height}px)`}let c=this.labels.get(`life`),l=this.lifePosition.clone().setY(4).project(this.camera);c.hidden=!this.showLabels||l.z>1||l.z<0||Math.abs(l.x)>1||Math.abs(l.y)>1||!!(s&&this.selected&&this.selected!==`life`),c.style.transform=`translate(-50%,-100%) translate(${(l.x/2+.5)*this.width}px,${(-l.y/2+.5)*this.height}px)`}dispose(){this.disposed=!0,this.harbor?.dispose(),this.controls.dispose(),this.labelRoot.remove(),this.geometries.forEach(e=>e.dispose()),this.materials.forEach(e=>e.dispose()),this.signMaterials.forEach(e=>e.dispose()),this.textures.forEach(e=>e.dispose()),this.hitboxes.forEach(e=>e.material.dispose()),this.sunlight.shadow.dispose(),this.scene.clear()}},Qd=[{id:`dawn`,title:`第一条回家的路`,time:`07:00`,system:`心脏 × 肺泡`,icon:`heart`,companion:`小红`,intro:`新邻居搬来了。先给他们一个家，再把氧气送到门口。我们一起陪身体走过今天的第一段路。`,success:`窗户亮了，邻居们第一次一起出门散步。你铺好的路，让这个小世界开始生活。`,keepsake:`回家纪念树`,lesson:`氧气需要经过肺泡交换，再由心脏和血管送往组织。道路和上游能力都要够用。`,reward:12,duration:90,healthy:75,peak:1.5,bonus:`留一座膜间花园，让邻居有地方休息。`},{id:`breakfast`,title:`把早餐送到每条街`,time:`09:00`,system:`消化与营养`,icon:`gut`,companion:`芽芽`,intro:`散步回来，大家都饿了。建起绒毛食堂，把吸收的营养变成小镇可以储备的补给。`,success:`第一份早餐送到了每个街区。芽芽把食堂的招牌挂了起来，东边的新土地也开放了。`,keepsake:`早餐小集与东岸扩建`,lesson:`氧气和营养共同支持细胞工作。准备储备，才能应对一阵集中的需求。`,reward:14,duration:60,healthy:45,peak:1.35,service:`food`,bonus:`结束时保留至少 24 份营养。`,decision:{at:22,title:`早餐高峰到了`,copy:`街坊们同时来取餐。你想怎样安排这次交接？`,choices:[{title:`分批送餐`,copy:`营养 +8；本轮后续运输需求降低 5%。`,food:8,load:.95,gift:0},{title:`办一桌共享早餐`,copy:`营养 −6；本轮后续需求提高 8%，通关额外奖励 3 材料。`,food:-6,load:1.08,gift:3}]}},{id:`heat`,title:`留住清凉的午后`,time:`12:30`,system:`肾脏与水分`,icon:`kidneys`,companion:`澄澄`,intro:`午后的风变热了。让肾单位水庭回收有用的水分、清理代谢废物，照顾仍在工作的街坊。`,success:`水庭流起来了，街边多了一座清凉喷泉。澄澄说，这一回大家都能舒服地走回家。`,keepsake:`水庭喷泉`,lesson:`水分储备和废物清理需要同时照顾。水庭表示回收与过滤，不会凭空制造水。`,reward:14,duration:65,healthy:48,peak:1.5,service:`filter`,bonus:`结束时水分至少 24，代谢负担不超过 12。`,decision:{at:23,title:`阳光有些晒`,copy:`小红送完一趟补给，停在树荫下。给接下来的路做个安排吧。`,choices:[{title:`喝水，慢慢走`,copy:`水分 +12；后续运输需求降低 8%。`,water:12,load:.92,gift:0},{title:`先把最后一单送完`,copy:`水分 −6；后续需求提高 6%，通关额外奖励 3 材料。`,water:-6,load:1.06,gift:3}]}},{id:`melody`,title:`一起学一段旋律`,time:`15:00`,system:`神经信号`,icon:`brain`,companion:`闪闪`,intro:`广场想组一个小乐队。把神经信号塔放在街区之间，让附近的工作建筑都能收到练习节拍。`,success:`不同街区终于跟上了同一段旋律。广场有了小舞台，南岸也为新的生活留出了位置。`,keepsake:`细胞乐台与南岸扩建`,lesson:`信号塔的覆盖与位置有关。血管提供运行所需的供给，神经连线承担协调，两者作用不同。`,reward:16,duration:60,healthy:45,peak:1.25,service:`neuron`,bonus:`信号覆盖所有工作街区。`,decision:{at:20,title:`第二段有一点难`,copy:`闪闪举起了指挥棒。大家可以放慢练习，也可以尝试一次合奏。`,choices:[{title:`分段练习`,copy:`营养 +5；后续需求降低 5%。`,food:5,load:.95,gift:0},{title:`试着一起合奏`,copy:`营养 −5；后续需求提高 12%，通关额外奖励 3 材料。`,food:-5,load:1.12,gift:3}]}},{id:`repair`,title:`把小小伤口照顾好`,time:`17:00`,system:`免疫与修复`,icon:`immune`,companion:`团团`,intro:`一个街角需要修补。建起免疫巡护站，让有供给的守护者一边巡查、一边帮助组织恢复。`,success:`修补完成，街角重新开门了。团团留下了一盏巡护灯，说以后也会一起守护这里。`,keepsake:`守护街灯`,lesson:`修复需要时间和供给。巡护站获得足够的氧气、营养与信号支持，才能稳定工作。`,reward:16,duration:70,healthy:50,peak:1.35,service:`immune`,bonus:`完成修复，并把代谢负担控制在 12 以内。`,decision:{at:24,title:`需要再派一组帮手吗`,copy:`修复队已经到达街角。选择适合目前补给的安排。`,choices:[{title:`有序交接`,copy:`修复进度 +12；后续需求维持平稳。`,repair:12,load:1,gift:0},{title:`加派修复小队`,copy:`修复进度 +25，营养 −8；后续需求提高 10%，通关额外奖励 3 材料。`,repair:25,food:-8,load:1.1,gift:3}]}},{id:`festival`,title:`生命小镇的灯火节`,time:`19:00`,system:`六大系统协作`,icon:`spark`,companion:`所有街坊`,intro:`今天认识的伙伴都来到了广场。安排好供氧、营养、水庭、信号和巡护，再留一座花园，一起点亮第一场灯火节。`,success:`从第一间房子，到六大系统一起工作的街区——这一整天，是你和大家共同建起来的。生命小镇的第一天，圆满落幕。`,keepsake:`灯火节与自由建设模式`,lesson:`一个系统的变化会影响其他系统。可靠的规划，让循环、交换、营养、平衡、信号和守护共同支持生活。`,reward:20,duration:100,healthy:80,peak:1.6,bonus:`结束时营养、水分均至少 20，信号覆盖所有工作街区。`,decision:{at:38,title:`大家想再唱一首`,copy:`广场亮起了灯。你希望第一场灯火节怎样继续？`,choices:[{title:`围坐下来，慢慢唱`,copy:`营养、水分各 +8；后续需求降低 5%。`,food:8,water:8,load:.95,gift:0},{title:`让整条街一起跳舞`,copy:`营养、水分各 −6；后续需求提高 8%，通关额外奖励 5 材料。`,food:-6,water:-6,load:1.08,gift:5}]}}],$d=[{id:`neighbor`,name:`新邻居来了`,copy:`拥有两个细胞住区。`,icon:`home`},{id:`connected`,name:`第一条回家的路`,copy:`让两个住区获得稳定供给。`,icon:`route`},{id:`garden`,name:`把温柔留在街角`,copy:`建造一座膜间花园。`,icon:`spark`},{id:`capacity`,name:`给循环留点余量`,copy:`扩容一段血管。`,icon:`layers`},{id:`nourish`,name:`一顿热乎的早餐`,copy:`完成营养章节。`,icon:`gut`},{id:`balance`,name:`清凉的守护`,copy:`完成水庭章节。`,icon:`kidneys`},{id:`music`,name:`同一段旋律`,copy:`完成神经章节。`,icon:`brain`},{id:`care`,name:`街角重新开门`,copy:`完成免疫章节。`,icon:`immune`},{id:`day`,name:`一起点亮的一天`,copy:`完成全部六章。`,icon:`sun`},{id:`master`,name:`生命建筑师`,copy:`六章都获得三颗星。`,icon:`flag`}],ef=Array.from({length:9},(e,t)=>({id:`p${t}`,name:`${`ABC`[Math.floor(t/3)]}${t%3+1}`,x:t%3*5,z:Math.floor(t/3)*5-5}));ef.push({id:`p9`,name:`A4`,x:15,z:-5},{id:`p10`,name:`B4`,x:15,z:0},{id:`p11`,name:`C4`,x:15,z:5},{id:`p12`,name:`D1`,x:0,z:10},{id:`p13`,name:`D2`,x:5,z:10},{id:`p14`,name:`D3`,x:10,z:10},{id:`p15`,name:`D4`,x:15,z:10});var tf=[{id:`source`,name:`左心出口`,x:-5,z:0},...ef],nf=[[`source`,`p0`],[`source`,`p3`],[`source`,`p6`]];for(let e=0;e<9;e++)e%3<2&&nf.push([`p${e}`,`p${e+1}`]),e<6&&nf.push([`p${e}`,`p${e+3}`]);nf.push([`p2`,`p9`],[`p5`,`p10`],[`p8`,`p11`],[`p9`,`p10`],[`p10`,`p11`],[`p6`,`p12`],[`p7`,`p13`],[`p8`,`p14`],[`p11`,`p15`],[`p12`,`p13`],[`p13`,`p14`],[`p14`,`p15`]);var rf=nf.map(([e,t])=>{let n=tf.find(t=>t.id===e),r=tf.find(e=>e.id===t),i=Math.hypot(n.x-r.x,n.z-r.z);return{id:`${e}-${t}`,a:e,b:t,length:i,cost:i>6?2:1}}),af={home:{name:`细胞住区`,cost:4,demand:2,description:`让细胞安家。需要持续供氧，散步时需求增加。`},muscle:{name:`肌肉工坊`,cost:5,demand:2.4,description:`为第一次散步准备。活动时需要更多氧气。`},food:{name:`绒毛食堂`,cost:6,demand:1.4,description:`把吸收的营养变成储备，支持所有工作街区。需要接通血管才能开工。`},filter:{name:`肾单位水庭`,cost:6,demand:1.2,description:`回收水分、清理代谢负担。需要稳定供给，才能支持炎热天气中的生活。`},neuron:{name:`神经信号塔`,cost:7,demand:1,description:`协调周围 11 格距内的工作街区。黄色连线表示信号覆盖，位置越居中，覆盖越广。`},immune:{name:`免疫巡护站`,cost:7,demand:1.4,description:`获得氧气、营养和信号支持后，派出队员帮助街区完成修复。`},garden:{name:`膜间花园`,cost:2,demand:0,description:`留一处可以歇脚的街角。装饰不提供供氧加成。`}},of=[`food`,`filter`,`neuron`,`immune`],sf={home:`home`,muscle:`layers`,garden:`spark`,food:`gut`,filter:`kidneys`,neuron:`brain`,immune:`immune`};function cf(){return{chapter:0,records:{},badges:[],resources:{food:20,water:32,waste:6,repair:100},introduced:!1,guided:!0,townName:`生命小镇`,sandbox:!1}}function lf(){return{version:2,campaign:cf(),materials:24,buildings:{p3:`home`},roads:{"source-p3":1},heart:1,lungs:1,phase:`settle`,settleTime:0,walk:null,lastResult:null,completed:0,clock:0}}function uf(e){return[0,4,8,12][e]??0}function df(e,t){return t===0?e.cost:t===1?3:t===2?4:0}function ff(e,t){return e.cost+(t>=2?3:0)+(t>=3?4:0)}function pf(e){return Qd[e.campaign.chapter]}function mf(e){let t=0;for(;t<Qd.length-1&&e.campaign.records[Qd[t].id]?.passed;)t++;return t}function hf(e,t){let n=Number(t.slice(1));return n<9||(n<12?mf(e)>=2:mf(e)>=4)}function gf(e,t){return t===`muscle`?e.phase!==`settle`||!!e.campaign.records.dawn:!of.includes(t)||mf(e)>=of.indexOf(t)+1}function _f(e,t){return Object.values(e.buildings).filter(e=>e===t).length}function vf(e){if(!e.walk)return 1;let t=pf(e),n=e.walk.elapsed/t.duration,r=t.decision&&e.walk.choice>=0?t.decision.choices[e.walk.choice].load:1;return(n<.2?1.15:n<.8?t.peak:1.1)*r}function yf(e,t=vf(e)){let n=8+(e.heart-1)*6,r=7+(e.lungs-1)*5,i=Math.min(n,r),a={},o={},s=ef.filter(t=>hf(e,t.id)&&e.buildings[t.id]&&af[e.buildings[t.id]].demand>0),c=new Map(rf.map(t=>[t.id,hf(e,t.b)&&(t.a===`source`||hf(e,t.a))?uf(e.roads[t.id]??0):0])),l=new Map(c),u=i,d=(e,t=0)=>{let n=new Map([[`source`,0]]),r=new Map,i=new Set;for(;;){let a=null,o=1/0;for(let[e,t]of n)!i.has(e)&&t<o&&(a=e,o=t);if(!a)return null;if(a===e){let t=[],n=e;for(;n!==`source`;){let e=r.get(n);t.unshift(e.edge),n=e.node}return{path:t,distance:o}}i.add(a);for(let e of rf){if((l.get(e.id)??0)<=t+1e-8)continue;let s=e.a===a?e.b:e.b===a?e.a:null;if(!s||i.has(s))continue;let c=o+e.length;c<(n.get(s)??1/0)&&(n.set(s,c),r.set(s,{node:a,edge:e.id}))}}};for(let n of s){let r=d(n.id);a[n.id]={demand:af[e.buildings[n.id]].demand*t,delivered:0,ratio:0,connected:!!r,routes:[],distance:r?.distance??0}}for(let e=0;e<160&&u>1e-7;e++){let e=s.slice().sort((e,t)=>a[e.id].delivered/a[e.id].demand-a[t.id].delivered/a[t.id].demand),t=!1;for(let n of e){let e=a[n.id],r=e.demand-e.delivered;if(r<1e-7)continue;let i=d(n.id);if(!i)continue;let o=Math.min(r,e.demand/100,u,...i.path.map(e=>l.get(e)));if(o<1e-8)continue;u-=o,e.delivered+=o;for(let e of i.path)l.set(e,l.get(e)-o);let s=e.routes.find(e=>e.path.join(`|`)===i.path.join(`|`));s?s.amount+=o:e.routes.push({path:i.path,amount:o}),t=!0}if(!t)break}for(let e of rf)o[e.id]=(c.get(e.id)??0)-(l.get(e.id)??0);for(let e of Object.values(a))e.ratio=Math.min(1,e.delivered/e.demand);let f=Object.values(a).reduce((e,t)=>e+t.demand,0),p=Object.values(a).reduce((e,t)=>e+t.delivered,0),m=f?Math.min(1,p/f):1,h=`循环顺畅，所有工作街区都有稳定供给。`,g=s.find(e=>!a[e.id].connected);if(g)h=`${g.name} 尚未接通血管。沿虚线连接到左心出口，供给和回流会一起接通。`;else if(m<.985){if(i<f&&i-p<.12)h=r<=n?`肺泡交换能力不足。增加交换单元，才能让更多氧气进入循环。`:`心脏输送能力不足。升级循环配套，才能把已有的氧气送出去。`;else{let t=rf.find(t=>(e.roads[t.id]??0)>0&&o[t.id]>=uf(e.roads[t.id])-.08);h=t?`${bf(t)} 接近满载。扩容这段血管，或另接一条支路分担运输。`:`部分街区的供给不足。检查连接，并为运输网络增加余量。`}}return{lots:a,edges:o,demand:f,delivered:p,coverage:m,heart:n,lungs:r,capacity:i,issue:h,healthyHomes:s.filter(t=>e.buildings[t.id]===`home`&&a[t.id].ratio>=.98).length,homes:s.filter(t=>e.buildings[t.id]===`home`).length,muscles:s.filter(t=>e.buildings[t.id]===`muscle`).length}}function bf(e){return`${tf.find(t=>t.id===e.a).name}—${tf.find(t=>t.id===e.b).name}`}function xf(e,t){let n=0;if(t.type===`build`){if(!ef.some(e=>e.id===t.plot)||!hf(e,t.plot)||!af[t.building])return`请选择一块可建设地块。`;if(e.buildings[t.plot])return`这块地已经有建筑了。`;if(!gf(e,t.building))return`继续完成当前章节，就能解锁这项建设。`;if(n=af[t.building].cost,e.materials<n)return`组织材料不足，可以回收或调整已有建设。`;e.buildings[t.plot]=t.building}else if(t.type===`road`){let r=rf.find(e=>e.id===t.id);if(!r||!hf(e,r.b)||r.a!==`source`&&!hf(e,r.a))return`这片土地还没有开放。`;let i=e.roads[t.id]??0;if(i>=3)return`这段血管已经达到本章最高容量。`;if(n=df(r,i),e.materials<n)return`组织材料不足，可以另选路线或回收已有设施。`;e.roads[t.id]=i+1}else if(t.type===`remove-building`){let r=e.buildings[t.plot];if(!r)return`这里没有可回收的建筑。`;n=-af[r].cost,delete e.buildings[t.plot]}else if(t.type===`remove-road`){let r=rf.find(e=>e.id===t.id),i=e.roads[t.id];if(!r||!i)return`这里没有可回收的血管。`;n=-ff(r,i),delete e.roads[t.id]}else if(t.type===`upgrade`){if(e[t.organ]>=4)return`配套已升至最高等级。`;if(n=Sf(e[t.organ]),e.materials<n)return`组织材料不足，可以回收暂时不用的设施。`;e[t.organ]++}else if(t.type===`downgrade`){if(e[t.organ]<=1)return`基础循环配套需要保留。`;n=-Sf(e[t.organ]-1),e[t.organ]--}else{if(!e.buildings[t.from]||!ef.some(e=>e.id===t.to)||!hf(e,t.to)||e.buildings[t.to])return`请选择一块空地迁入。`;e.buildings[t.to]=e.buildings[t.from],delete e.buildings[t.from]}return e.materials-=n,null}function Sf(e){return[0,5,7,9][e]??0}var Cf=(e,t=0,n=40)=>Math.max(t,Math.min(n,e));function wf(e){return[`home`,`home`,`muscle`,...of.slice(0,Math.min(4,e.campaign.chapter)),...e.campaign.chapter===5?[`garden`]:[]]}function Tf(e){let t={};for(let n of wf(e))t[n]=(t[n]??0)+1;return Object.keys(t).find(n=>_f(e,n)<t[n])}function Ef(e){let t=pf(e).decision;return!!(e.walk&&t&&e.walk.elapsed>=t.at-1e-7&&e.walk.choice<0)}function Df(e,t){let n=ef.filter(n=>e.buildings[n.id]===`neuron`&&(t.lots[n.id]?.ratio??0)>=.5),r=ef.filter(t=>e.buildings[t.id]&&e.buildings[t.id]!==`garden`&&e.buildings[t.id]!==`neuron`);return r.length?r.filter(e=>n.some(t=>Math.hypot(t.x-e.x,t.z-e.z)<=11.01)).length/r.length:1}function Of(e,t){let n=n=>Object.entries(t.lots).filter(([t])=>e.buildings[t]===n).reduce((e,[,t])=>e+t.ratio,0),r=e.campaign.chapter,i=e.phase===`walking`,a=e.campaign.resources,o=n(`food`),s=n(`filter`),c=n(`immune`),l=Df(e,t),u=.12*t.homes+.16*t.muscles+.04*of.filter(t=>_f(e,t)>0).length,d=i?r===1?.9:r===5?.8:.45:0,f=i&&e.walk.elapsed/pf(e).duration>.25&&e.walk.elapsed/pf(e).duration<.75,p=i?r===2?f?1.65:1:r===5?1.3:.65:.3;return{food:o*1.35-u-d,water:.45+s*.95-p,waste:.12+o*.16+(i?.2:0)-s*.9-.12,heal:c*1.45*(a.food>3?1:.35)*(.55+.45*l),signal:l}}function kf(e,t,n){let r=e.campaign.resources,i=Of(e,t),a=e.campaign.chapter,o=e.phase===`walking`?1:3;a>=1&&(r.food=Cf(r.food+i.food*n*o)),a>=2&&(r.water=Cf(r.water+i.water*n*o),r.waste=Cf(r.waste+i.waste*n*o,0,80)),e.phase===`walking`&&e.campaign.chapter>=4&&(r.repair=Cf(r.repair+i.heal*n,0,100))}function Af(e,t){if(Object.values(t.lots).some(e=>e.ratio<.95))return t.issue;let n=e.campaign.resources,r=e.campaign.chapter;return r>=1&&n.food<3?e.phase!==`walking`&&Of(e,t).food>0?`食堂正在准备营养。储备补足后，我们再出发。`:`营养储备不足。接通绒毛食堂，或加开一座食堂分担需求。`:r>=2&&n.water<3?e.phase!==`walking`&&Of(e,t).water>0?`水庭正在补足储备。等一等，水分会慢慢回升。`:`水分储备不足。保证水庭供给，并在准备期补足水分。`:r>=2&&n.waste>55?Of(e,t).waste<0?`水庭正在清理代谢负担。等待过滤完成，或增加水庭加快进度。`:`代谢负担偏高。增加有稳定供给的肾单位水庭。`:r>=3&&Df(e,t)<.7?`信号覆盖不足。把神经信号塔迁到街区之间，或增加一座信号塔。`:``}function jf(e){let t=yf(e),n=e.campaign.records,r={neighbor:t.homes>=2,connected:t.healthyHomes>=2,garden:_f(e,`garden`)>0,capacity:Object.values(e.roads).some(e=>e>=2),nourish:!!n.breakfast?.passed,balance:!!n.heat?.passed,music:!!n.melody?.passed,care:!!n.repair?.passed,day:!!n.festival?.passed,master:Qd.every(e=>(n[e.id]?.stars??0)===3)},i=$d.filter(t=>r[t.id]&&!e.campaign.badges.includes(t.id)).map(e=>e.id);return e.campaign.badges.push(...i),i}function Mf(e){if(e.phase===`walking`)return`这一轮已经开始了。`;if(e.phase===`settle`)return`先把两个住区接通，完成安家。`;let t=Tf(e);if(t)return`还需要`+af[t].name+`，再一起出发。`;let n=yf(e);return Object.values(n.lots).some(e=>!e.connected)?`先把所有工作街区接通血管，再一起出发。`:(e.walk={elapsed:0,healthy:0,supplied:0,requested:0,choice:-1,trouble:``},e.phase=`walking`,e.lastResult=null,e.campaign.chapter===4&&(e.campaign.resources.repair=15),e.campaign.chapter===5&&(e.campaign.resources.repair=75),null)}function Nf(e,t){if(!Ef(e)||t!==0&&t!==1)return`目前没有等待安排的事件。`;let n=pf(e).decision.choices[t];e.walk.choice=t;let r=e.campaign.resources;for(let e of[`food`,`water`,`waste`,`repair`])r[e]=Cf(r[e]+(n[e]??0),0,e===`repair`?100:e===`waste`?80:40);return null}function Pf(e,t){let n=e.campaign.resources;return[_f(e,`garden`)>0,n.food>=24,n.water>=24&&n.waste<=12,Df(e,t)>=.999,n.repair>=99.9&&n.waste<=12,n.food>=20&&n.water>=20&&Df(e,t)>=.999][e.campaign.chapter]}function Ff(e,t){let n=[];if(!Number.isFinite(t)||t<=0)return n;let r=Math.min(t,3600);for(;r>1e-8&&!Ef(e);){let t=pf(e),i=Math.min(.2,r);if(e.walk&&(i=Math.min(i,t.duration-e.walk.elapsed),t.decision&&e.walk.choice<0&&(i=Math.min(i,t.decision.at-e.walk.elapsed))),i<1e-8)break;r-=i,e.clock+=i;let a=yf(e);if(kf(e,a,i),e.phase===`settle`)e.settleTime=a.healthyHomes>=2?e.settleTime+i:0,e.settleTime>=5&&(e.phase=`prepare`,e.materials+=6,n.push(`邻居们安顿好了！+6 材料，肌肉工坊开放。`));else if(e.phase===`walking`&&e.walk){e.walk.elapsed+=i,e.walk.supplied+=a.delivered*i,e.walk.requested+=a.demand*i;let r=Af(e,a);if(!r&&!Tf(e)?e.walk.healthy+=i:e.walk.trouble||(e.walk.trouble=r||`挑战中的必要设施被回收了。`),Ef(e)&&n.push(t.companion+`有一个安排想和你商量。`),e.walk.elapsed>=t.duration-1e-7){let r=e.walk,i=e.campaign.resources,o=r.healthy,s=r.requested?r.supplied/r.requested:0,c=e.campaign.chapter<4||i.repair>=95,l=o>=t.healthy-1e-6&&c,u=Pf(e,a),d=l?1+ +(o>=t.duration*.95)+ +!!u:0,f=e.campaign.records[t.id],p=l&&!f?.passed?t.reward+(t.decision&&r.choice>=0?t.decision.choices[r.choice].gift:0):0;e.lastResult={chapter:t.id,passed:l,healthy:o,coverage:s,stars:d,reward:p,bonus:u,issue:l?t.success:c?r.trouble||`稳定运行的时间不足，再留一点余量。`:`修复还没有完成。保证巡护站的供给，或增建一座巡护站。`},e.walk=null,l?(e.phase=`complete`,e.completed++,e.materials+=p,(!f||(f.stars??0)<d)&&(e.campaign.records[t.id]={...e.lastResult}),t.id===`festival`&&(e.campaign.sandbox=!0),n.push(t.title+`完成！`+(p?` +`+p+` 材料`:` 最佳星级已保留。`))):(e.phase=`prepare`,n.push(`布局已保留，调整后可以免费再试。`))}}}return jf(e),n}function If(e){if(e.phase!==`complete`)return`先完成当前生活项目。`;let t=Qd.findIndex(t=>!e.campaign.records[t.id]?.passed);return t<0?(e.campaign.sandbox=!0,null):(e.campaign.chapter=t,e.phase=`prepare`,e.walk=null,e.lastResult=null,null)}function Lf(e,t){return!Number.isInteger(t)||t<0||t>mf(e)?`先完成前面的生活项目。`:e.phase===`walking`?`先完成当前挑战，或从菜单结束本轮。`:(e.campaign.chapter=t,e.phase=t===0&&e.settleTime<5&&_f(e,`home`)<2?`settle`:`prepare`,e.walk=null,e.lastResult=null,null)}function Rf(e){return Qd.reduce((t,n)=>t+(e.campaign.records[n.id]?.stars??0),0)}function zf(e){let t=lf();try{let n=JSON.parse(e??`null`);if(!n||![1,2].includes(n.version)||![`settle`,`prepare`,`walking`,`complete`].includes(n.phase))return t;let r=(e,t,n,r)=>typeof e==`number`&&Number.isFinite(e)?Math.max(t,Math.min(n,e)):r,i={...t,buildings:{},roads:{},materials:Math.floor(r(n.materials,0,1e4,24)),heart:Math.floor(r(n.heart,1,4,1)),lungs:Math.floor(r(n.lungs,1,4,1)),phase:n.phase,settleTime:r(n.settleTime,0,5,0),completed:Math.floor(r(n.completed,0,999,0)),clock:r(n.clock,0,1e8,0)},a=(e,t)=>e&&typeof e.passed==`boolean`?{chapter:t,passed:e.passed,healthy:r(e.healthy,0,Qd.find(e=>e.id===t).duration,0),coverage:r(e.coverage,0,1,0),stars:Math.floor(r(e.stars,0,3,+!!e.passed)),reward:0,bonus:e.bonus===!0,issue:typeof e.issue==`string`?e.issue.slice(0,200):``}:null,o=n.version===2?n.campaign:null;if(o){for(let e of Qd){let t=a(o.records?.[e.id],e.id);if(!t?.passed)break;i.campaign.records[e.id]=t}i.campaign.chapter=Math.floor(r(o.chapter,0,mf(i),0)),i.campaign.introduced=o.introduced===!0,i.campaign.guided=o.guided!==!1,i.campaign.sandbox=!!i.campaign.records.festival,typeof o.townName==`string`&&o.townName.trim()&&(i.campaign.townName=o.townName.trim().slice(0,20)),i.campaign.badges=Array.isArray(o.badges)?[...new Set(o.badges.filter(e=>$d.some(t=>t.id===e)))]:[];for(let e of[`food`,`water`,`waste`,`repair`])i.campaign.resources[e]=r(o.resources?.[e],0,e===`repair`?100:e===`waste`?80:40,t.campaign.resources[e])}else i.completed>0&&(i.campaign.records.dawn={chapter:`dawn`,passed:!0,healthy:90,coverage:1,stars:1,reward:0,bonus:!1,issue:Qd[0].success});for(let e of ef){let t=n.buildings?.[e.id];Object.hasOwn(af,t)&&hf(i,e.id)&&gf(i,t)&&(i.buildings[e.id]=t)}for(let e of rf){let t=Math.floor(r(n.roads?.[e.id],0,3,0));t&&hf(i,e.b)&&(e.a===`source`||hf(i,e.a))&&(i.roads[e.id]=t)}if(i.phase===`walking`&&n.walk&&typeof n.walk.elapsed==`number`){let e=r(n.walk.elapsed,0,pf(i).duration,0);i.walk={elapsed:e,healthy:r(n.walk.healthy,0,e,0),supplied:r(n.walk.supplied,0,1e5,0),requested:r(n.walk.requested,0,1e5,0),choice:Math.floor(r(n.walk.choice,-1,1,-1)),trouble:typeof n.walk.trouble==`string`?n.walk.trouble.slice(0,200):``},e>=pf(i).duration&&(i.walk.elapsed=pf(i).duration-1e-4)}else i.phase===`walking`&&(i.phase=`prepare`);return i.phase===`complete`&&!i.campaign.records[pf(i).id]&&(i.phase=`prepare`),i.lastResult=a(n.lastResult,pf(i).id),i.lastResult&&(i.lastResult.reward=Math.floor(r(n.lastResult?.reward,0,30,0))),i}catch{return t}}var Bf=`#fff2d8`,Vf=`#db9382`,Hf=`#8facb9`,Uf=class{onPick;scene=new qn;camera=new Qo(-24,24,18,-18,.1,220);controls;terrain=new G;layout=new G;traffic=new G;pickables=[];mats=new Map;geometry=new Map;looseGeometry=new Set;extraMaterials=[];labelRoot;labels=new Map;lotRoots=new Map;lamps=new Map;roadRoots=new Map;travelers=[];routeSignature=``;layoutSignature=``;tool=`select`;selection=``;lastLifeTime=null;guideKey=``;labelsShown=!0;guideRing;motors=[];signals=[];repairCrew=new G;repairPatch;helpers=[];groundMaterial;sky=new zo(`#fff3dc`,`#9cab91`,1.8);raycaster=new vs;pointer=new V;width=1;height=1;state;network;heart=new G;lung=new G;sun;redLabel;following=!1;transitioning=!0;target=new H(0,0,0);eye=new H(29,33,36);reduceMotion=matchMedia(`(prefers-reduced-motion: reduce)`).matches;constructor(e,t,n,r,i){this.onPick=i,this.state=n,this.network=r,mf(n)>=2&&this.target.set(2.5,0,1.8),this.scene.background=new K(`#e6ebdf`),this.scene.fog=new Kn(`#e6ebdf`,85,160),this.scene.add(this.terrain,this.layout,this.traffic,this.sky),this.sun=new es(`#fff1d6`,2.5),this.sun.position.set(-20,36,22),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:110}),this.sun.shadow.normalBias=.04,this.sun.shadow.bias=-4e-4,this.scene.add(this.sun);let a=new es(`#dcecff`,.7);a.position.set(20,12,-20),this.scene.add(a),this.camera.position.copy(this.eye),this.camera.lookAt(this.target),this.controls=new td(this.camera,e),this.controls.target.copy(this.target),this.controls.enableDamping=!0,this.controls.dampingFactor=.09,this.controls.minZoom=.65,this.controls.maxZoom=3.2,this.controls.minPolarAngle=.12,this.controls.maxPolarAngle=1.35,this.controls.rotateSpeed=.6,this.controls.mouseButtons.LEFT=f.ROTATE,this.controls.mouseButtons.RIGHT=f.PAN,this.controls.touches.ONE=p.ROTATE,this.controls.touches.TWO=p.DOLLY_PAN,this.controls.addEventListener(`start`,()=>{this.following=!1,this.transitioning=!1}),this.labelRoot=document.createElement(`div`),this.labelRoot.className=`planning-labels`,t.append(this.labelRoot);let o=new Qr({color:`#d4b45f`,transparent:!0,opacity:.64,side:2,depthWrite:!1});this.extraMaterials.push(o),this.guideRing=new ui(this.geo(`guideRing`,()=>new Ga(1.82,1.92,64)),o),this.guideRing.rotation.x=-Math.PI/2,this.guideRing.visible=!1,this.scene.add(this.guideRing),this.landscape(),this.organs(),this.scene.add(this.repairCrew),this.repairPatch=this.box([0,.25,0],[1.05,.12,.66],`#d0a780`,this.repairCrew,.1);for(let e of[-.64,.64]){this.cyl([e,.46,-.36],.035,.62,`#aaa585`,this.repairCrew),this.box([e,.78,-.36],[.26,.12,.07],`#e6cb8e`,this.repairCrew,.025);let t=this.person(`#c1ceaa`,!1);t.scale.setScalar(.64),t.position.set(e,.19,.48),this.repairCrew.add(t),this.helpers.push(t)}this.repairCrew.visible=!1,this.addLabel(`heart`,`心脏循环站`,[-10,4.1,3.3],`organ heart`),this.addLabel(`lungs`,`肺泡云朵港`,[-10,4,-6],`organ lungs`);for(let e of ef)this.addLabel(`plot:${e.id}`,`${e.name} · 空地`,[e.x+1.2,.8,e.z+1.5],`plot`);for(let e of rf){let t=tf.find(t=>t.id===e.a),n=tf.find(t=>t.id===e.b);this.addLabel(`road:${e.id}`,`＋`,[(t.x+n.x)/2,.5,(t.z+n.z)/2],`road`)}this.redLabel=this.addLabel(`red`,`小红 · 循环中`,[0,1,0],`red`),this.sync(n,r,`select`,``)}mat(e){return this.mats.has(e)||this.mats.set(e,new co({color:e,roughness:.78,...[`#f4d59a`,`#f4d988`,`#edce86`].includes(e)?{emissive:e,emissiveIntensity:.35}:{}})),this.mats.get(e)}geo(e,t){return this.geometry.has(e)||this.geometry.set(e,t()),this.geometry.get(e)}mesh(e,t,n,r){let i=new ui(e,this.mat(t));return i.position.set(...n),i.castShadow=!0,i.receiveShadow=!0,r.add(i),i}box(e,t,n,r=this.terrain,i=.12){return this.mesh(this.geo(`b${t}/${i}`,()=>new Wu(...t,2,i)),n,e,r)}ball(e,t,n,r=this.terrain){let i=this.mesh(this.geo(`ball`,()=>new Ja(1,18,12)),n,e,r);return i.scale.set(...t),i}cyl(e,t,n,r,i=this.terrain){return this.mesh(this.geo(`c${t}/${n}`,()=>new Ei(t,t,n,32)),r,e,i)}tube(e,t,n,r=this.terrain,i=!1){let a=new Ii(e.map(e=>new H(...e)),!1,`catmullrom`,.15),o=new Xa(a,Math.max(20,e.length*12),t,7,!1);return i?this.looseGeometry.add(o):this.geometry.set(`tube${this.geometry.size}`,o),this.mesh(o,n,[0,0,0],r),a}tree(e,t,n=1,r=this.terrain){let i=new G;i.position.set(e,0,t),i.scale.setScalar(n),r.add(i),this.cyl([0,.65,0],.075,1.3,`#adad87`,i),this.ball([0,1.4,0],[.62,.85,.55],`#a0b49a`,i),this.ball([.37,1.06,.12],[.43,.48,.4],`#bcc9a2`,i),this.ball([-.26,1.61,.32],[.09,.1,.08],Bf,i)}landscape(){let e=this.groundMaterial=new Qr({color:`#e6ebdf`,toneMapped:!1}),t=new Za({color:`#67725d`,opacity:.14});this.extraMaterials.push(e,t);let n=new ui(this.geo(`floor`,()=>new Wa(250,250)),e);n.position.y=-1.55,n.rotation.x=-Math.PI/2,this.terrain.add(n);let r=new ui(n.geometry,t);r.position.y=-1.54,r.rotation.x=-Math.PI/2,r.receiveShadow=!0,this.terrain.add(r);let i=new ra;i.moveTo(-16,-9),i.bezierCurveTo(-18,-3,-17,8,-10,11),i.bezierCurveTo(-3,14,13,13,16,6),i.bezierCurveTo(19,-2,15,-10,9,-11),i.bezierCurveTo(0,-13,-10,-13,-16,-9);let a=new Va(i,{depth:1,bevelEnabled:!0,bevelThickness:.35,bevelSize:.5,bevelSegments:3,curveSegments:35,steps:1});a.rotateX(-Math.PI/2),this.geometry.set(`land`,a),this.mesh(a,`#bdcbb2`,[0,-1.1,0],this.terrain);let o=new Ka(i,35);o.rotateX(-Math.PI/2),this.geometry.set(`landtop`,o),this.mesh(o,`#dce1c5`,[0,.1,0],this.terrain);for(let e=0;e<42;e++){let t=e/42*Math.PI*2;this.ball([Math.cos(t)*15.7,-.45,Math.sin(t)*10.2],[.22,.15,.2],e%3?`#cad4b9`:`#ded9b6`)}for(let[e,t,n]of[[-15,5,1.3],[-14,-9,1.2],[-4,-9,1.1],[3,-10,1.3],[11,-9,1],[15,3,1.2],[11,10,1.25],[4,10,1.3],[-3,10,1],[-11,8,1.1]])this.tree(e,t,n);this.tube([[-13,.14,7.3],[-8,.14,8.8],[-1,.14,9.4],[7,.14,9],[13,.14,7.5]],.48,`#f0e6cb`);for(let e=0;e<4;e++){let t=-8+e*5;this.box([t,.6,8.4],[1.3,.15,.48],`#b7a782`),this.box([t,.87,8.2],[1.3,.4,.09],`#c7b48d`);for(let e of[-.45,.45])this.box([t+e,.36,8.4],[.09,.4,.4],`#93aa92`)}for(let e=0;e<18;e++){let t=-13+e*1.73%28,n=e%2?-8.6:10;this.ball([t,.31,n],[.15,.24,.15],e%3?`#bbcca8`:`#e0b19b`)}}organs(){this.heart.position.set(-10,.15,3.3),this.terrain.add(this.heart),this.lung.position.set(-10,.15,-6),this.terrain.add(this.lung),this.cyl([0,.22,0],2.6,.4,`#d9b8a0`,this.heart),this.cyl([0,.47,0],2.4,.14,Bf,this.heart);for(let e of[-.85,.85])for(let t of[-.65,.65])this.box([e,1.12,t],[1.46,1.1,1.12],Bf,this.heart,.28),this.ball([e,1.69,t],[.79,.45,.67],e<0?`#a7bdc1`:Vf,this.heart),this.box([e,1.13,t+.57],[.33,.4,.06],`#a6b6a7`,this.heart);this.tube([[-.7,1.7,-.5],[-.85,2.85,-.5],[-.2,3.15,-.4],[.5,2.8,-.3]],.2,Vf,this.heart),this.tube([[.3,2.8,-.4],[.3,3.45,-.4]],.09,Vf,this.heart),this.tube([[-1.55,1.4,-.6],[-1.9,2.3,-.8],[-1.5,2.8,-.8]],.16,Hf,this.heart),this.cyl([0,.15,0],2.75,.26,`#b3c8b8`,this.lung),this.cyl([0,.35,0],2.5,.16,Bf,this.lung);for(let e of[-1,1]){this.ball([e*1.08,1.4,0],[.92,1.16,.86],`#b9d0bc`,this.lung);for(let t=0;t<5;t++){let n=t/5*6.28;this.ball([e*1.08+Math.cos(n)*.64,1.4+Math.sin(n)*.68,.66],[.36,.4,.31],t%2?`#d8e3c7`:`#c8d9be`,this.lung)}}this.tube([[0,3,0],[0,2.2,0],[-.9,1.2,.4]],.14,`#ebd9b9`,this.lung),this.tube([[0,2.2,0],[.9,1.2,.4]],.14,`#ebd9b9`,this.lung),this.tube([[-11,.38,3],[-13,.38,1],[-13,.38,-3],[-11.3,.38,-5]],.19,Hf),this.tube([[-8.6,.38,-5],[-7.1,.38,-3],[-7.3,.38,.2],[-9,.38,3]],.19,Vf),this.tube([[-9,.38,3],[-7.5,.38,3],[-6.5,.38,.15],[-5,.38,.15]],.18,Vf),this.tube([[-5,.38,-.2],[-6.7,.38,-1.2],[-14,.38,-1.2],[-14,.38,3],[-11,.38,3]],.16,Hf),this.cyl([-5,.22,0],.62,.18,Bf);let e=(e,t,n)=>{let r=new ui(this.geo(`hit${e}`,()=>new Ci(...n)),new Qr({visible:!1}));r.position.set(...t),r.userData.pick=e,this.terrain.add(r),this.pickables.push(r)};e(`heart`,[-10,1.5,3.3],[5,3,5]),e(`lungs`,[-10,1.5,-6],[5,3,5])}addLabel(e,t,n,r){let i=document.createElement(`button`);return i.className=`plan-marker ${r}`,i.textContent=t,i.dataset.planPick=e,i.setAttribute(`aria-label`,t),i.addEventListener(`click`,()=>this.onPick(e)),this.labelRoot.append(i),this.labels.set(e,{el:i,point:new H(...n)}),i}clearLayout(){this.layout.clear(),this.traffic.clear(),this.looseGeometry.forEach(e=>e.dispose()),this.looseGeometry.clear(),this.lotRoots.clear(),this.roadRoots.clear(),this.lamps.clear(),this.motors=[],this.signals=[];for(let e of this.pickables)e.userData.dynamic&&e instanceof ui&&e.material.dispose();this.pickables=this.pickables.filter(e=>!e.userData.dynamic),this.travelers=[],this.routeSignature=``}buildLayout(){this.clearLayout(),this.keepsakes();for(let e=1;e<this.state.heart;e++){let t=e===1?-12.3:e===2?-7.7:-10,n=e===3?6.1:5.4;this.cyl([t,.23,n],.72,.25,`#e8d6ba`,this.layout),this.box([t,.92,n],[.85,1.25,.85],Bf,this.layout,.2),this.ball([t,1.6,n],[.52,.25,.52],Vf,this.layout),this.tube([[t,.3,n],[-10,.3,4.9]],.1,Vf,this.layout,!0)}for(let e=1;e<this.state.lungs;e++){let t=e===1?-12.6:e===2?-7.4:-10,n=e===3?-8.8:-6.8;this.cyl([t,.23,n],.85,.25,Bf,this.layout);for(let e=0;e<3;e++)this.ball([t+Math.cos(e*2.1)*.32,.83+Math.sin(e*2.1)*.2,n],[.47,.55,.43],e%2?`#d1dec1`:`#aac5ad`,this.layout);this.tube([[t,.28,n],[-10,.28,-6]],.1,Hf,this.layout,!0)}for(let e of rf){if(!hf(this.state,e.b)||e.a!==`source`&&!hf(this.state,e.a))continue;let t=tf.find(t=>t.id===e.a),n=tf.find(t=>t.id===e.b),r=this.state.roads[e.id]??0,i=new G;this.layout.add(i),this.roadRoots.set(e.id,i);let a=new H(n.x-t.x,0,n.z-t.z).normalize(),o=new H(a.z,0,-a.x);if(r){let e=(e,a)=>this.tube([[t.x+o.x*e,.22,t.z+o.z*e],[(t.x+n.x)/2+o.x*e,.22,(t.z+n.z)/2+o.z*e],[n.x+o.x*e,.22,n.z+o.z*e]],r===3?.21:r===2?.17:.12,a,i,!0);e(.21,Vf),e(-.21,Hf);for(let e=1;e<5;e++){let r=e/5;this.ball([t.x+(n.x-t.x)*r,.27,t.z+(n.z-t.z)*r],[.06,.035,.06],Bf,i)}}else for(let e=0;e<8;e++){let r=(e+.5)/8,o=this.box([t.x+(n.x-t.x)*r,.17,t.z+(n.z-t.z)*r],[.11,.025,.28],`#b7c2a3`,i,.01);o.rotation.y=Math.atan2(a.x,a.z)}let s=new ui(this.geo(`edgehit${e.length}`,()=>new Ci(.85,.8,e.length)),new Qr({visible:!1}));s.position.set((t.x+n.x)/2,.35,(t.z+n.z)/2),s.rotation.y=Math.atan2(a.x,a.z),s.userData.pick=`road:${e.id}`,s.userData.dynamic=!0,this.layout.add(s),this.pickables.push(s)}for(let e of ef){if(!hf(this.state,e.id))continue;let t=new G;t.position.set(e.x,0,e.z),this.layout.add(t),this.lotRoots.set(e.id,t);let n=this.state.buildings[e.id];if(this.box([1.45,.15,1.4],[3.55,.12,3.55],n?`#e9e2c6`:`#cfdabc`,t,.32),!n){for(let[e,n]of[[.15,.15],[2.75,.15],[.15,2.7],[2.75,2.7]])this.cyl([e,.29,n],.06,.2,`#aab998`,t);this.ball([1.45,.3,1.4],[.15,.06,.15],`#b2c49e`,t)}else if(this.tube([[0,.23,0],[.4,.24,.4],[.65,.25,1.4],[1,.25,1.5]],.09,Vf,t,!0),this.tube([[0,.22,-.17],[.65,.22,.15],[.95,.22,.8]],.07,Hf,t,!0),n===`garden`){this.tree(1.35,1.35,1.35,t),this.box([1.5,.55,2.6],[1.5,.12,.4],`#b8a982`,t);for(let e=0;e<5;e++)this.ball([.15+e*.5,.37,.5],[.15,.2,.15],e%2?Vf:`#c7d39f`,t)}else n===`home`||n===`muscle`?this.neighborhood(t,e.id,n===`muscle`):this.serviceBuilding(t,e.id,n);let r=new ui(this.geo(`plothit`,()=>new Ci(3.65,3,3.65)),new Qr({visible:!1}));r.position.set(e.x+1.45,1,e.z+1.4),r.userData.pick=`plot:${e.id}`,r.userData.dynamic=!0,this.layout.add(r),this.pickables.push(r)}for(let e of ef.filter(e=>this.state.buildings[e.id]===`neuron`))for(let t of ef.filter(e=>this.state.buildings[e.id]&&this.state.buildings[e.id]!==`garden`&&this.state.buildings[e.id]!==`neuron`)){if(Math.hypot(e.x-t.x,e.z-t.z)>11.01)continue;let n=new G;this.layout.add(n),this.tube([[e.x+1.4,2.8,e.z+1.4],[(e.x+t.x)/2+1.4,2.6,(e.z+t.z)/2+1.4],[t.x+1.4,1.3,t.z+1.4]],.027,`#d8bb73`,n,!0),this.signals.push({root:n,from:e.id,to:t.id})}this.resize(this.width,this.height)}keepsakes(){let e=this.state.campaign.records,t=mf(this.state);if(t>=2){for(let[e,t,n]of[[-.45,1.1,`#bdcbb2`],[.09,.08,`#dce1c5`]])this.cyl([16,e,0],8,t,n,this.layout).scale.set(.76,1,1.24);for(let e of[-8,0,8])this.tree(20.6,e,.9,this.layout)}if(t>=4){for(let[e,t,n]of[[-.45,1.1,`#bdcbb2`],[.09,.08,`#dce1c5`]])this.cyl([8,e,11],10,t,n,this.layout).scale.set(1.4,1,.54);for(let e of[-2,4,10,17])this.tree(e,14.6,.8,this.layout)}if(e.dawn&&(this.tree(-3.5,8,1.5,this.layout),this.box([-3.5,.45,8.8],[1.2,.55,.16],`#e5c991`,this.layout)),e.breakfast)for(let e=0;e<2;e++){let t=new G;t.position.set(-7.1+e*2.1,0,8.2),this.layout.add(t),this.box([0,.65,0],[1.45,.9,.85],Bf,t);for(let e of[-.66,.66])this.cyl([e,1.2,0],.04,1.7,`#b09c78`,t);this.ball([0,1.93,0],[.95,.21,.65],e?`#c3cc9e`:`#deb58c`,t);for(let e=0;e<3;e++)this.ball([-.42+e*.4,1.2,.17],[.16,.15,.16],e%2?`#c5ba73`:`#d6a981`,t);let n=this.person(`#bea279`,!1);n.position.set(.2,.18,.85),n.scale.setScalar(.68),t.add(n)}if(e.heat){let e=new G;e.position.set(-.5,.15,8.8),this.layout.add(e),this.cyl([0,.13,0],1.1,.3,`#d4cbaa`,e),this.cyl([0,.29,0],.95,.08,`#99bfc0`,e),this.cyl([0,.52,0],.2,.7,Bf,e),this.ball([0,1.04,0],[.25,.28,.25],`#b8d4cb`,e);for(let t=0;t<5;t++){let n=t*1.26;this.tube([[0,1,0],[Math.cos(n)*.5,1.24,Math.sin(n)*.5],[Math.cos(n)*.72,.36,Math.sin(n)*.72]],.035,`#cde2d6`,e,!0)}}if(e.melody){let e=new G;e.position.set(-1.6,.14,-8.3),this.layout.add(e),this.cyl([0,.22,0],1.8,.4,`#c6b7a0`,e),this.cyl([0,.44,0],1.72,.07,Bf,e),this.ball([0,1.2,-.6],[1.75,1.05,.16],`#c6b9ce`,e);for(let t=0;t<3;t++){let n=this.person([`#b5a1ba`,`#c5ae76`,`#8aa994`][t],!1);n.position.set(-.85+t*.85,.5,.25),n.scale.setScalar(.76),e.add(n),this.ball([-.8+t*.8,.9,.55],[.17,.19,.1],`#c6ae6e`,e)}for(let t=0;t<5;t++)this.ball([Math.cos(t*.6+.38)*1.4,1.4+Math.sin(t*.6+.38)*.5,-.42],[.07,.07,.07],`#efd78a`,e)}if(e.repair)for(let e of[-8,-2,4,10])this.cyl([e,1.4,9.4],.045,2.6,`#95a188`,this.layout),this.box([e,2.78,9.4],[.37,.52,.37],Bf,this.layout,.1),this.ball([e,3.1,9.4],[.3,.1,.3],`#a9b697`,this.layout),this.ball([e,2.72,9.43],[.13,.19,.13],`#f4d988`,this.layout);if(e.festival){this.tube([[-8,2.8,9.4],[-5,2.35,9.4],[-2,2.8,9.4],[1,2.35,9.4],[4,2.8,9.4],[7,2.35,9.4],[10,2.8,9.4]],.026,`#acac84`,this.layout,!0);for(let e=0;e<17;e++){let t=-7.5+e,n=2.6-Math.sin(e%6/6*Math.PI)*.18;this.cyl([t,n-.18,9.4],.11,.27,e%3?`#edce86`:`#dca790`,this.layout),this.ball([t,n-.34,9.4],[.035,.06,.035],Bf,this.layout)}for(let e=0;e<7;e++){let t=this.person([`#c9ad82`,`#a9b38f`,`#b99cb3`][e%3],!1);t.position.set(-9+e*2,.18,7.3+e%2*.45),t.scale.setScalar(.7),this.layout.add(t)}}}serviceBuilding(e,t,n){let r={food:`#d8b38b`,filter:`#a9c4c4`,neuron:`#b9a6c8`,immune:`#b2c28e`}[n];if(this.cyl([1.5,.29,1.4],1.35,.22,Bf,e),this.tube([[.2,.25,2.95],[1.4,.25,3.03],[3.04,.25,2.97],[3.08,.25,1.4]],.11,`#f2ead1`,e,!0),n===`food`){this.box([1.45,.88,1.1],[1.85,1.08,1.4],Bf,e,.28),this.ball([1.45,1.52,1.1],[1.13,.46,.91],r,e);for(let t=0;t<4;t++){let n=.7+t*.5;this.cyl([n,1.95,.85],.12,.7,`#ead3aa`,e),this.ball([n,2.29,.85],[.16,.23,.16],t%2?`#d4b088`:`#e1cba3`,e)}this.box([1.45,.79,2.1],[2,.17,.58],r,e);for(let t=0;t<5;t++)this.box([.7+t*.38,1.31,2],[.35,.12,.72],t%2?`#d0b07d`:Bf,e);for(let t=0;t<3;t++)this.box([.75+t*.6,.41,2.37],[.44,.36,.38],`#c3ae87`,e),this.ball([.75+t*.6,.68,2.37],[.12,.12,.12],t%2?`#b7c18c`:`#dcb68d`,e)}else if(n===`filter`){for(let t of[-1,1]){let n=this.ball([1.5+t*.65,.78,1.35],[.53,.58,.97],r,e);n.rotation.y=t*.2,this.ball([1.5+t*.65,1.21,1.35],[.38,.13,.71],`#e2efdf`,e),this.tube([[1.5+t*.65,.3,.45],[1.5+t*.4,.3,1.8],[1.5,.3,2.4]],.095,`#91b7bc`,e,!0)}this.box([1.5,.6,2.45],[1.37,.22,.45],Bf,e),this.cyl([1.5,.5,2.27],.45,.08,`#9dbfc0`,e);let n=new G;n.position.set(1.5,1.36,1.1),e.add(n);for(let e=0;e<6;e++){let t=e*Math.PI/3,r=this.box([Math.cos(t)*.36,Math.sin(t)*.36,0],[.25,.4,.07],`#e3d8b5`,n,.04);r.rotation.z=t}this.ball([1.5,1.36,1.17],[.13,.13,.1],Bf,e),this.motors.push({root:n,plot:t,axis:`z`,speed:.65})}else if(n===`neuron`){this.cyl([1.5,.43,1.4],.82,.23,r,e),this.cyl([1.5,1.36,1.4],.22,1.75,Bf,e),this.ball([1.5,2.32,1.4],[.57,.49,.57],r,e),this.ball([1.5,2.4,1.4],[.24,.22,.24],`#ece4ce`,e);let n=new G;n.position.set(1.5,2.3,1.4),e.add(n);for(let e=0;e<6;e++){let t=e*Math.PI/3,i=Math.cos(t),a=Math.sin(t);this.tube([[i*.2,0,a*.2],[i*.67,.18,a*.67],[i*.93,.53,a*.93]],.065,r,n,!0),this.ball([i*.93,.55,a*.93],[.12,.15,.12],`#ecd58b`,n)}this.motors.push({root:n,plot:t,axis:`y`,speed:.075});for(let t of[-.65,.65])this.box([1.5+t,.6,2.35],[.55,.33,.45],`#c8b9ce`,e)}else{let t=this.mesh(this.geo(`immuneHall`,()=>new Ei(.95,1.03,1.25,6)),Bf,[1.5,.96,1.3],e);t.rotation.y=Math.PI/6;let n=this.mesh(this.geo(`immuneRoof`,()=>new Ei(.75,1.16,.42,6)),r,[1.5,1.71,1.3],e);n.rotation.y=Math.PI/6,this.box([1.5,.65,2.23],[.44,.85,.06],`#a0b190`,e,.14),this.box([1.5,1.38,2.2],[.43,.11,.06],`#baa36a`,e,.02),this.box([1.5,1.38,2.21],[.12,.4,.06],`#baa36a`,e,.02);for(let t of[.4,2.6])this.cyl([t,.84,1.2],.21,1.15,r,e),this.ball([t,1.45,1.2],[.27,.19,.27],Bf,e);this.cyl([2.47,1.68,2.35],.032,2.65,`#a29c7e`,e),this.box([2.69,2.65,2.35],[.43,.4,.025],r,e,.04)}this.tree(.15,.4,.4,e);let i=this.person(n===`immune`?`#eef0d8`:r,!1);i.scale.setScalar(.72),i.userData.localResident=!0,e.add(i)}neighborhood(e,t,n){let r=[];this.lamps.set(t,r),this.tube([[.25,.24,2.95],[1.5,.24,3.02],[3.08,.24,2.97],[3.15,.24,1.4]],.13,`#f1e9d1`,e,!0);let i=n?[[1.45,1.25,1.2],[2.6,2.45,.52]]:[[1.35,1.18,1],[2.6,2.25,.58],[.3,2.4,.5]];for(let[t,a,o]of i){let i=new G;i.position.set(t,.25,a),i.scale.setScalar(o),e.add(i),this.box([0,.7,0],[1.5,1.35,1.4],Bf,i,.25),this.ball([0,1.39,0],[.88,.39,.8],n?`#d5aa83`:`#b4cbb1`,i),this.box([0,.43,.72],[.37,.72,.06],`#9aac9b`,i,.12);for(let e of[-.49,.49])this.box([e,.92,.72],[.28,.35,.05],`#baa989`,i,.06),r.push(this.box([e,.92,.754],[.21,.28,.025],`#f4d59a`,i,.04));if(this.box([0,.19,1],[.9,.15,.4],`#d1c4a1`,i),this.cyl([.52,1.66,-.25],.09,.7,`#d6c3a0`,i),this.ball([.52,2.04,-.25],[.15,.12,.15],Vf,i),n)for(let e of[-.4,0,.4])this.box([-.8,.86,e],[.1,1.2,.16],`#bba084`,i)}this.tree(2.9,.35,.53,e),this.box([1.4,.5,2.9],[1.1,.11,.37],`#b8a482`,e);for(let t=0;t<3;t++){let n=this.person(t===0?`#c69379`:`#a8b89a`,!1);n.position.set(.35+t*.75,.25,2.65),n.scale.setScalar(.75),n.userData.localResident=!0,n.userData.phase=t*2,e.add(n)}}person(e,t){let n=new G;this.ball([0,.48,0],[.22,.3,.17],t?Vf:e,n),this.ball([0,.83,0],[.23,.22,.22],Bf,n),this.ball([0,1.01,0],[.29,.1,.27],e,n);for(let e of[-.085,.085])this.ball([e,.84,.205],[.023,.027,.016],`#5f7060`,n),this.box([e,.12,0],[.105,.23,.13],`#8f9b86`,n,.035);return t&&(this.box([.28,.52,0],[.27,.33,.32],`#d3b783`,n,.07),this.ball([.28,.76,0],[.09,.09,.09],`#f0d095`,n)),n}supplyPoints(e,t){let n=[[-11,.52,3],[-13,.52,1],[-13,.52,-3],[-11,.52,-5.5],[-9,.52,-5.5],[-7.1,.52,-3],[-7.3,.52,0],[-9,.52,3],[-7.5,.52,3],[-6.5,.52,.2],[-5,.52,.2]],r=(e,t,n)=>{let r=t,i=[];for(let t of e){let e=rf.find(e=>e.id===t),a=tf.find(t=>t.id===e.a),o=tf.find(t=>t.id===e.b),s=(o.z-a.z)/e.length*n,c=-(o.x-a.x)/e.length*n,l=r===a.id?a:o,u=r===a.id?o:a;i.push([l.x+s,.52,l.z+c],[u.x+s,.52,u.z+c]),r=u.id}return i};n.push(...r(t.path,`source`,.21));let i=ef.find(t=>t.id===e);return n.push([i.x+.6,.52,i.z+.7],[i.x+1.25,.52,i.z+1.25],[i.x+.35,.52,i.z-.25]),n.push(...r(t.path.slice().reverse(),e,-.21)),n.push([-5,.52,-.2],[-6.7,.52,-1.2],[-14,.52,-1.2],[-14,.52,3],[-11,.52,3]),n}routeTraffic(){let e=JSON.stringify(Object.entries(this.network.lots).map(([e,t])=>[e,t.routes.map(e=>[e.path,Math.round(e.amount*3)])]));if(e!==this.routeSignature){this.routeSignature=e,this.traffic.clear(),this.travelers=[];for(let[e,t]of Object.entries(this.network.lots))for(let n of t.routes){if(n.amount<.1)continue;let t=new Ii(this.supplyPoints(e,n).map(e=>new H(...e)),!0,`catmullrom`,.08),r=t.getLength(),i=Math.max(1,Math.min(7,Math.round(n.amount*1.5)));for(let a=0;a<i;a++){let o=this.travelers.length===0,s=o?this.person(Vf,!0):new G;o||(this.ball([0,.13,0],[.29,.16,.24],Vf,s),this.ball([0,.25,0],[.13,.04,.12],`#b9746c`,s),this.ball([0,.4,0],[.07,.07,.07],`#f1d797`,s)),s.userData.pick=o?`red`:`plot:${e}`,this.traffic.add(s),this.travelers.push({root:s,curve:t,length:r,offset:a/i,lot:e,amount:n.amount,red:o})}}}}sync(e,t,n,r){this.state=e,this.network=t,this.tool=n,this.selection=r;let i=JSON.stringify([e.buildings,e.roads,e.heart,e.lungs,Object.keys(e.campaign.records)]);i!==this.layoutSignature&&(this.layoutSignature=i,this.buildLayout());for(let n of ef){let i=this.labels.get(`plot:${n.id}`).el,a=e.buildings[n.id];i.textContent=`${n.name} · ${a?af[a].name:`可建设`}`,i.setAttribute(`aria-label`,`${n.name} ${a?af[a].name:`空地`}`),i.classList.toggle(`empty`,!a),i.classList.toggle(`selected`,r===`plot:${n.id}`),i.classList.toggle(`undersupplied`,!!t.lots[n.id]&&t.lots[n.id].ratio<.95)}for(let i of rf){let a=e.roads[i.id]??0,o=this.labels.get(`road:${i.id}`).el;o.textContent=a?`${Math.round(t.edges[i.id]*10)/10} / ${uf(a)}`:`＋ ${i.cost}`,o.setAttribute(`aria-label`,`${i.a===`source`?`左心出口`:tf.find(e=>e.id===i.a).name} 到 ${tf.find(e=>e.id===i.b).name} ${a?`查看血管`:`铺设血管`}`),o.classList.toggle(`selected`,r===`road:${i.id}`);let s=this.roadRoots.get(i.id);s&&(s.visible=!!a||n===`road`||this.guideKey===`road:${i.id}`)}for(let i of this.signals)i.root.visible=(t.lots[i.from]?.ratio??0)>=.5&&(n===`neuron`||r===`plot:${i.from}`||r===`plot:${i.to}`||e.campaign.chapter===3||this.guideKey===`plot:${i.from}`);let a=e.campaign.chapter>=4,o=e.campaign.chapter===5,s=o?`#cbd7ce`:`#e6ebdf`;this.sun.color.set(a?`#ffe4b6`:`#fff1d6`),this.sun.intensity=o?1.6:a?2.1:2.5,this.sky.intensity=o?1.35:1.8,this.groundMaterial.color.set(s),this.scene.background.set(s),this.scene.fog.color.set(s),this.routeTraffic()}guide(e){if(this.guideKey!==e){this.guideKey=e;for(let[t,n]of this.labels)n.el.classList.toggle(`recommended`,e===t);if(this.guideRing.visible=!!e,e){if(e.startsWith(`plot:`)){let t=ef.find(t=>t.id===e.slice(5));t&&(this.guideRing.position.set(t.x+1.45,.24,t.z+1.4),this.guideRing.userData.size=1)}else if(e.startsWith(`road:`)){let t=rf.find(t=>t.id===e.slice(5));if(t){let e=tf.find(e=>e.id===t.a),n=tf.find(e=>e.id===t.b);this.guideRing.position.set((e.x+n.x)/2,.26,(e.z+n.z)/2),this.guideRing.userData.size=.5;let r=this.roadRoots.get(t.id);r&&(r.visible=!0)}}else e===`heart`||e===`lungs`?(this.guideRing.position.set(-10,.29,e===`heart`?3.3:-6),this.guideRing.userData.size=1.5):this.guideRing.visible=!1}}}setLabels(e){this.labelsShown=e}hit(e,t){let n=t.getBoundingClientRect();this.pointer.set((e.clientX-n.left)/n.width*2-1,-(e.clientY-n.top)/n.height*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);for(let e of this.raycaster.intersectObjects([...this.pickables,...this.traffic.children],!0)){let t=e.object;for(;t;){if(t.userData.pick){let e=t.userData.pick;if(e.startsWith(`road:`)&&this.tool!==`road`&&!this.state.roads[e.slice(5)])break;return e}t=t.parent}}return null}update(e,t){let n=this.lastLifeTime===null?0:Math.max(0,Math.min(.15,e-this.lastLifeTime));if(this.lastLifeTime=e,!this.reduceMotion){let t=Math.max(0,Math.sin(e*7))**6;this.heart.scale.set(1+t*.015,1+t*.025,1+t*.015),this.lung.scale.set(1+Math.sin(e*1.4)*.025,1+Math.sin(e*1.4)*.016,1)}this.guideRing.scale.setScalar((this.guideRing.userData.size??1)*(this.reduceMotion?1:1+Math.sin(e*2.4)*.055));for(let e of this.motors)e.root.rotation[e.axis]+=n*e.speed*(this.network.lots[e.plot]?.ratio??0);let r=this.state.campaign.resources.repair,i=ef.find(e=>this.state.buildings[e.id]===`muscle`);this.repairCrew.visible=!!i&&this.state.phase===`walking`&&this.state.campaign.chapter>=4&&r<100,this.repairCrew.visible&&i&&(this.repairCrew.position.set(i.x+1.5,0,i.z+3),this.repairPatch.scale.x=Math.max(.08,1-r/100),this.helpers.forEach((t,n)=>{t.rotation.y=(n?1:-1)*Math.PI/2,t.position.x=(n?.65:-.65)+Math.sin(e*.9+n*2)*.12,t.rotation.z=this.reduceMotion?0:Math.sin(e*1.6+n*2)*.035}));for(let t of this.travelers){let n=(e*2.2/t.length+t.offset)%1,r=t.curve.getPointAt(n),i=t.curve.getTangentAt(n);t.root.position.copy(r),t.root.rotation.y=Math.atan2(i.x,i.z),t.red&&(this.labels.get(`red`).point.copy(r).add(new H(0,1.8,0)),this.redLabel.textContent=`小红 → ${ef.find(e=>e.id===t.lot).name}`,this.following&&(this.controls.target.lerp(r,.045),this.camera.position.lerp(r.clone().add(new H(12,12,16)),.035)))}for(let[e,t]of this.lotRoots){let r=this.network.lots[e]?.ratio??1;for(let t of this.lamps.get(e)??[])t.material=this.mat(r>.95?`#f4d59a`:`#b7b9a2`);t.children.filter(e=>e.userData.localResident).forEach((e,t)=>{let i=(e.userData.walkClock??t*8)+n*(r>.95?1:.35);e.userData.walkClock=i;let a=[[.3,2.94],[1.55,3.02],[3.06,2.96],[3.13,1.5],[3.06,2.96],[1.55,3.02]],o=Math.floor(i/5)%a.length,s=i%5/3,c=a[o],l=a[(o+1)%a.length],u=Math.min(1,s);e.position.set(c[0]+(l[0]-c[0])*u,.25+(s<1?Math.sin(i*11)*.012:0),c[1]+(l[1]-c[1])*u),e.rotation.y=s<1?Math.atan2(l[0]-c[0],l[1]-c[1]):Math.sin(t+o)*.7})}this.transitioning&&(this.camera.position.lerp(this.eye,1-Math.exp(-t*5)),this.controls.target.lerp(this.target,1-Math.exp(-t*5)),this.camera.position.distanceTo(this.eye)<.03&&this.controls.target.distanceTo(this.target)<.03&&(this.transitioning=!1)),this.controls.update();for(let[e,{el:t,point:n}]of this.labels){let r=n.clone().project(this.camera),i=e.startsWith(`plot:`),a=e.startsWith(`road:`),o=this.selection===e||this.guideKey===e,s=i?!hf(this.state,e.slice(5)):a?!this.roadRoots.has(e.slice(5)):!1,c=i&&!this.state.buildings[e.slice(5)]&&!Object.hasOwn(af,this.tool)&&this.tool!==`move`;t.hidden=s||r.z<-1||r.z>1||Math.abs(r.x)>.96||Math.abs(r.y)>.94||!o&&(!this.labelsShown||c||a&&this.tool!==`road`)||e===`red`&&!this.travelers.length,t.style.transform=`translate(-50%,-100%) translate(${(r.x*.5+.5)*this.width}px,${(-r.y*.5+.5)*this.height}px)`}}preset(e){if(this.following=e===`follow`,this.transitioning=!this.following,e===`follow`)this.camera.zoom=1.5;else{let t=mf(this.state)>=2;this.target.set(t?2.5:0,0,t?1.8:0),this.eye.set(e===`top`?this.target.x:29,e===`top`?58:33,e===`top`?this.target.z+.1:36),this.camera.zoom=1}this.camera.updateProjectionMatrix()}focusPlot(e){let t=ef.find(t=>t.id===e);t&&(this.following=!1,this.transitioning=!0,this.target.set(t.x+1.4,.7,t.z+1.4),this.eye.copy(this.target).add(new H(16,19,23)),this.camera.zoom=2.2,this.camera.updateProjectionMatrix())}resize(e,t){this.width=e,this.height=t;let n=e/t,r=mf(this.state)>=2,i=Math.max(r?23:20,(r?15:12)*n);this.camera.left=-i,this.camera.right=i,this.camera.top=i/n,this.camera.bottom=-i/n,this.camera.updateProjectionMatrix()}zoom(e){this.camera.zoom=Vt.clamp(this.camera.zoom+e,.65,3.2),this.camera.updateProjectionMatrix()}dispose(){this.controls.dispose(),this.labelRoot.remove(),this.clearLayout(),this.geometry.forEach(e=>e.dispose()),this.mats.forEach(e=>e.dispose()),this.extraMaterials.forEach(e=>e.dispose());for(let e of this.pickables)e instanceof ui&&e.material.dispose();this.sun.shadow.dispose(),this.scene.clear()}},Wf=`#fff7e6`,Gf=`#e48d80`,Kf=`#85b7c8`,qf=`#99b59a`,Jf=class{container;labelContainer;scene=new qn;camera=new Qo(-24,24,18,-18,.1,250);renderer;controls;roots=new Map;organs=new Map;traffic=[];labels=new Map;mode=`rest`;paused=!1;speed=1;simulation=s();get time(){return this.simulation.time}selected=null;district=null;planning=null;planningPick=()=>{};onPOI=()=>{};get heartRate(){return this.simulation.heart}get breathRate(){return this.simulation.breath}reduced=matchMedia(`(prefers-reduced-motion: reduce)`).matches;previousTime=performance.now();targetPosition=new H(0,1,3);targetZoom=1;following=!1;raycaster=new vs;pointer=new V;down={x:0,y:0};ring;traveler;travelerLabel;tourPath=null;tourProgress=0;tourDestination=new H;bubbles=[];nutrients=[];routes=new Map;sunlight;night=0;ground;mats=new Map;raf=0;onSelect;onTick=()=>{};constructor(t,n,r){this.container=t,this.labelContainer=n,this.onSelect=r,this.renderer=new Vu({antialias:!0,alpha:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.outputColorSpace=Qe,this.renderer.setClearColor(`#e9eee3`),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05,this.renderer.domElement.setAttribute(`aria-label`,`六座人体城市的可交互三维地图，可拖拽平移、滚轮缩放；也可以使用城市列表选择。`),this.container.appendChild(this.renderer.domElement),this.camera.position.set(0,35,40),this.camera.lookAt(0,1,3),this.controls=new td(this.camera,this.renderer.domElement),this.controls.enableRotate=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=.09,this.controls.minZoom=.7,this.controls.maxZoom=2.5,this.controls.mouseButtons.LEFT=f.PAN,this.controls.touches.ONE=p.PAN,this.controls.touches.TWO=p.DOLLY_PAN,this.controls.addEventListener(`start`,()=>{this.following=!1}),this.controls.target.copy(this.targetPosition),this.scene.add(new zo(`#fff8e8`,`#b4bda7`,1.8));let i=new es(`#fff6df`,2.8);this.sunlight=i,i.position.set(-18,30,18),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),Object.assign(i.shadow.camera,{left:-27,right:27,top:27,bottom:-27,near:.5,far:100}),i.shadow.bias=-5e-4,i.shadow.normalBias=.03,i.shadow.radius=5,this.scene.add(i);let a=new es(`#d8edfa`,.85);a.position.set(20,10,-20),this.scene.add(a),this.scene.fog=new Kn(`#e9eee3`,65,110);let o=this.mesh(new Wa(300,300),`#e9eee3`,this.scene,[0,-1.6,0]);this.ground=o,o.rotation.x=-Math.PI/2,o.receiveShadow=!0;for(let e=0;e<32;e++){let t=e*2.39996,n=18+e%5*3.2,r=this.mesh(new Ya(.8+e%4*.35,.016,5,40),`#d5dfcf`,this.scene,[Math.cos(t)*n,-1.56,Math.sin(t)*n]);r.rotation.x=Math.PI/2}e.forEach(e=>{let t=new G;t.position.set(e.position[0],0,e.position[1]),t.userData.city=e.id,this.roots.set(e.id,t),this.scene.add(t),this.island(t,e.color,e.id);let i=new G;t.add(i),this.organs.set(e.id,i),{heart:()=>this.heart(i),brain:()=>this.brain(i),lungs:()=>this.lungs(i),gut:()=>this.gut(i),kidneys:()=>this.kidneys(i),immune:()=>this.immune(i)}[e.id]();let a=document.createElement(`button`);a.className=`map-label`,a.style.setProperty(`--city`,e.color),a.dataset.city=e.id,a.innerHTML=`<i></i><span>${e.name}</span><b>↗</b>`,a.setAttribute(`aria-label`,`探索${e.name}`),a.addEventListener(`click`,()=>r(e.id)),n.appendChild(a),this.labels.set(e.id,a)}),this.vessels(),this.ring=this.mesh(new Ya(3.8,.045,8,100),`#f3fbdd`,this.scene,[0,.66,0]),this.ring.rotation.x=Math.PI/2,this.ring.visible=!1,this.traveler=this.cell(this.scene,!0,2),this.traveler.visible=!1;let s=this.mesh(new Ya(.5,.05,8,40),`#ffecaf`,this.traveler,[0,.7,0]);s.rotation.x=Math.PI/2,this.travelerLabel=document.createElement(`span`),this.travelerLabel.className=`traveler-label`,this.travelerLabel.textContent=`小红在这里`,this.travelerLabel.hidden=!0,n.appendChild(this.travelerLabel),this.resize(),new ResizeObserver(()=>this.resize()).observe(t),this.renderer.domElement.addEventListener(`pointerdown`,e=>{this.down={x:e.clientX,y:e.clientY}}),this.renderer.domElement.addEventListener(`pointerup`,e=>{if(e.button!==0||Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)>6)return;if(this.planning){let t=this.planning.hit(e,this.renderer.domElement);t&&this.planningPick(t);return}if(this.district){let t=this.district.hit(e,this.renderer.domElement);t&&this.onPOI(t);return}let t=this.hit(e);t&&this.onSelect(t)}),this.renderer.domElement.addEventListener(`pointermove`,e=>{e.buttons||(this.renderer.domElement.style.cursor=(this.planning?this.planning.hit(e,this.renderer.domElement):this.district?this.district.hit(e,this.renderer.domElement):this.hit(e))?`pointer`:`grab`)}),this.animate()}material(e){return this.mats.has(e)||this.mats.set(e,new co({color:e,roughness:.75,metalness:0})),this.mats.get(e)}mesh(e,t,n,r=[0,0,0]){let i=new ui(e,this.material(t));return i.position.set(...r),i.castShadow=!0,i.receiveShadow=!0,n.add(i),i}ball(e,t,n,r){let i=this.mesh(new Ja(1,24,16),t,e,n);return i.scale.set(...r),i}box(e,t,n,r,i=.14){return this.mesh(new Wu(...r,3,i),t,e,n)}tube(e,t,n,r){let i=new Ii(t.map(e=>new H(...e)));return this.mesh(new Xa(i,Math.max(24,t.length*10),n,8,!1),r,e),i}cylinder(e,t,n,r,i){return this.mesh(new Ei(r,r,i,40,1),t,e,n)}island(e,t,n){let r=n===`heart`?4.2:3.8;this.ball(e,`#c5d5bd`,[0,-.4,0],[r,.95,r*.82]),this.ball(e,`#e3e6cf`,[0,-.03,0],[r+.03,.58,r*.83]),this.ball(e,n===`heart`?`#e8ddc4`:`#d9e1c6`,[0,.18,0],[r,.36,r*.83]);let i=[];for(let e=0;e<=50;e++){let t=e/50*Math.PI*2;i.push([Math.cos(t)*2.95,.52,Math.sin(t)*2.25])}this.tube(e,i,.22,`#f9efdc`);for(let n=0;n<9;n++){let r=n/9*Math.PI*2+.2;this.ball(e,`#b6cba8`,[Math.cos(r)*3.4,.35,Math.sin(r)*2.85],[.4,.35,.32]),this.ball(e,n%2?Wf:t,[Math.cos(r)*3.48,.51,Math.sin(r)*2.9],[.17,.2,.17])}for(let n=0;n<5;n++){let r=n/5*Math.PI*2+.7,i=Math.cos(r)*2.68,a=Math.sin(r)*2.05;if(a>1.4&&Math.abs(i)<1)continue;let o=.65+n%2*.2;this.box(e,Wf,[i,.57+o/2,a],[.72,o,.65],.18),this.ball(e,t,[i,.62+o,a],[.46,.25,.42]),this.box(e,`#94acaa`,[i,.65,a+.336],[.17,.26,.04],.06),this.ball(e,`#ffefb8`,[i,.98,a+.34],[.085,.085,.025])}for(let n=0;n<3;n++){let r=-1.8+n*1.7,i=-1.8-n%2*.25,a=.8+n%2*.45;this.cylinder(e,Wf,[r,.55+a/2,i],.34,a),this.ball(e,t,[r,.6+a,i],[.42,.31,.39]);for(let t=0;t<2;t++)this.box(e,`#9daea2`,[r-.14+t*.28,.65+a*.35,i+.33],[.09,.16,.05],.035);this.cylinder(e,`#dfd4af`,[r,.7+a,i],.055,.4),this.ball(e,`#ffedb2`,[r,.98+a,i],[.1,.13,.1])}for(let t=0;t<6;t++){let n=t/6*Math.PI*2+.15,r=Math.cos(n)*3.1,i=Math.sin(n)*2.55;this.ball(e,t%2?`#b4c59d`:`#c7d4b2`,[r,.51,i],[.28,.14,.17]),this.tube(e,[[r-.1,.64,i],[r,.67,i+.06],[r+.1,.64,i]],.018,`#91a582`),t%2==0&&this.tube(e,[[r*.65,.56,i*.65],[r*.8,.58,i*.8],[r,.59,i]],.055,`#dda79a`)}for(let t=0;t<3;t++){let n=t===0?-3:2.4+t*.25,r=t===0?-.4:-1.8+t*.7;this.tube(e,[[n,.4,r],[n+.07,1.1,r],[n-.15,1.45,r]],.055,`#a1b093`),this.ball(e,qf,[n-.15,1.45,r],[.28,.3,.25]),this.ball(e,`#c1d3ae`,[n+.16,1.13,r+.04],[.22,.23,.2]),this.ball(e,Wf,[n-.17,1.5,r+.19],[.065,.065,.035])}this.cell(e,n!==`immune`,.7).position.set(-1.8,.75,1.9),this.cell(e,n!==`immune`,.55).position.set(2,.65,.9),this.cylinder(e,`#fbf1da`,[0,.43,.65],1.55,.18)}heart(e){this.cylinder(e,`#d09b85`,[0,.68,0],1.95,.45),this.cylinder(e,Wf,[0,.97,0],1.87,.25);for(let t of[-.8,.8])for(let n of[-.45,.6])this.box(e,n<0?`#e9b4a2`:Wf,[t,1.5,n],[1.23,1.14,1.12],.32),this.ball(e,n<0?`#cc776c`:`#edb6a4`,[t,2.03,n],[.7,.3,.64]);let t=new ra;t.moveTo(0,-1),t.bezierCurveTo(-.2,-.8,-1.5,.1,-1.3,.85),t.bezierCurveTo(-1.15,1.75,-.15,1.55,0,.98),t.bezierCurveTo(.3,1.65,1.35,1.65,1.4,.8),t.bezierCurveTo(1.5,.1,.3,-.85,0,-1);let n=this.mesh(new Va(t,{depth:.7,bevelEnabled:!0,bevelSegments:4,steps:1,bevelSize:.22,bevelThickness:.22,curveSegments:20}),Gf,e,[0,2.65,-.5]);n.rotation.z=-.12,this.tube(e,[[-.3,3.4,-.5],[-.5,4.4,-.6],[.15,4.7,-.7],[.7,4.4,-.6]],.21,`#d87868`),this.tube(e,[[-1.15,2.7,-.6],[-1.35,3.7,-.6],[-.9,4.2,-.6]],.18,Kf);for(let t=0;t<3;t++)this.tube(e,[[.05+t*.24,4.5,-.7],[.05+t*.24,4.97-t*.08,-.7]],.095,`#dc917e`);this.box(e,`#d77e6f`,[0,1.35,1.25],[.58,.63,.12],.2);for(let t of[-1.3,1.3])this.box(e,`#9caeac`,[t,1.47,.98],[.25,.42,.11],.08);this.tube(e,[[-.8,2.8,.51],[-.4,2.8,.51],[-.22,3.08,.51],[0,2.46,.51],[.23,2.85,.51],[.67,2.85,.51]],.04,Wf),this.tube(e,[[1.5,1.2,0],[2,.9,.4],[2.1,.6,1.2]],.17,Gf)}brain(e){this.cylinder(e,`#b5a5c4`,[0,.75,0],1.7,.5),this.cylinder(e,Wf,[0,1.28,0],1.55,.65);for(let t=0;t<10;t++){let n=t/10*Math.PI*2;this.cylinder(e,Wf,[Math.cos(n)*1.43,1.78,Math.sin(n)*1.43],.11,1.15)}this.cylinder(e,`#ddd2e1`,[0,2.25,0],1.67,.2),this.ball(e,`#bca6d1`,[-.61,2.96,0],[.92,1.02,1.19]),this.ball(e,`#c7b3d9`,[.61,2.96,0],[.92,1.02,1.19]);for(let t of[-1,1])for(let n=0;n<4;n++){let r=-.72+n*.48;this.tube(e,[[t*.15,3.8,r],[t*.7,3.86,r+.08],[t*1.23,3.4,r],[t*1.3,2.95,r+.1]],.065,`#a38bbd`)}this.tube(e,[[0,1.9,0],[0,2,0],[0,3.9,0],[0,4.55,0]],.05,`#d6bf79`),this.ball(e,`#ffe7a0`,[0,4.65,0],[.16,.16,.16]);for(let t=0;t<3;t++){let n=t*2.094,r=Math.cos(n)*2.25,i=Math.sin(n)*1.6;this.tube(e,[[r,.5,i],[r,1.3,i],[r-.35,1.65,i]],.065,`#baa9c9`),this.ball(e,`#dac8e6`,[r-.35,1.68,i],[.24,.24,.24]),this.ball(e,Wf,[r-.35,1.73,i+.2],[.09,.09,.07])}this.box(e,`#b4a2c6`,[0,1.36,1.56],[.42,.61,.12],.17)}lungs(e){this.box(e,Wf,[0,1.03,0],[3.1,1.05,1.8],.28),this.box(e,`#94bdb3`,[0,1.62,0],[3.3,.23,2],.1),this.tube(e,[[0,3.85,-.3],[0,2.8,-.3],[-.8,2.2,0]],.2,`#ebdac2`),this.tube(e,[[0,2.8,-.3],[.8,2.2,0]],.18,`#ebdac2`);for(let t of[-1,1]){let n=new G;n.position.x=t*.86,e.add(n),this.ball(n,`#9ec9bb`,[0,2.52,0],[.8,.95,.71]);for(let e=0;e<9;e++){let t=e*2.399,r=1.94+e%3*.56;this.ball(n,e%3==0?`#e8efda`:e%2?`#aed6c6`:`#bdded0`,[Math.cos(t)*.48,r,Math.sin(t)*.51],[.44,.45,.44])}}for(let t of[-1.05,-.35,.35,1.05])this.box(e,`#78a5a6`,[t,1.09,.925],[.23,.34,.06],.08);this.box(e,`#edcf93`,[0,.92,.94],[.46,.72,.1],.15);for(let t=0;t<5;t++){let n=this.ball(e,t%2?`#f7fff0`:`#bce0d6`,[(t-2)*.48,3.8+t*.27,.25],[.12,.12,.12]);n.userData.base=n.position.y,this.bubbles.push(n)}this.tube(e,[[-1.7,.7,0],[-1.6,1,-.8],[0,1,-1.2],[1.65,.7,-.2]],.12,Gf)}gut(e){this.box(e,Wf,[-.3,1.1,-.3],[2.6,1.1,1.9],.35);let t=new ra;t.moveTo(-.55,1.25),t.bezierCurveTo(-.55,.5,-.45,.35,-.05,.45),t.bezierCurveTo(.5,1.6,1.25,1.2,1.3,.5),t.bezierCurveTo(1.55,-.5,.4,-1,-.4,-.7),t.bezierCurveTo(-1.2,-.45,-1.1,.2,-.85,1.25),t.closePath();let n=this.mesh(new Va(t,{depth:.7,bevelEnabled:!0,bevelSize:.16,bevelThickness:.18,bevelSegments:4,curveSegments:20}),`#e8bb76`,e,[-.3,2.7,-.8]);n.rotation.z=.18,this.tube(e,[[-1.06,3.8,-.4],[-1.13,4.25,-.4]],.22,`#e7c397`),this.tube(e,[[-1.2,.94,1.04],[-.9,.94,1.65],[1.3,.94,1.65],[1.5,.94,1.2],[-.55,.94,1.16],[-.75,.94,.7],[1.32,.94,.7],[1.7,.94,.2]],.18,`#dfa578`),this.ball(e,`#b88364`,[1.35,1.45,-.65],[.8,.38,.55]);for(let t=0;t<4;t++){this.cylinder(e,`#f5e3a2`,[-2+t*.25,.95,1],.065,.45+t*.08);let n=this.ball(e,`#ebbd61`,[-2+t*.25,1.35,1],[.11,.11,.11]);n.userData.base=n.position.y,this.nutrients.push(n)}for(let t=0;t<3;t++)this.box(e,`#bf9c70`,[-1+t*.65,1.15,.68],[.2,.27,.05],.04)}kidneys(e){this.cylinder(e,Wf,[0,.67,0],1.9,.35);for(let t of[-1,1]){let n=new ra;n.moveTo(0,1),n.bezierCurveTo(-1.2,1.4,-1.45,-.9,-.4,-1.15),n.bezierCurveTo(.55,-1.3,.7,-.3,.12,-.05),n.bezierCurveTo(-.2,.1,.55,.42,.4,.8),n.bezierCurveTo(.3,1,.15,1,0,1);let r=this.mesh(new Va(n,{depth:.5,bevelEnabled:!0,bevelSize:.2,bevelThickness:.2,bevelSegments:4,curveSegments:20}),t<0?`#cb9aa6`:`#d9acb6`,e,[t*.65,2.1,0]);r.scale.x=-t*.75,r.rotation.z=t*.13,this.tube(e,[[t*.5,1.95,.7],[t*.5,1.35,.95],[t*.8,.95,1.5],[t*.45,.77,1.9]],.11,`#c9b375`),this.tube(e,[[t*.3,1.7,.48],[t*.75,1.8,.49],[t*.8,2.4,.49]],.085,Kf)}this.ball(e,`#a8d7d2`,[0,.9,1.9],[.47,.28,.4]),this.tube(e,[[0,.83,2.12],[0,.55,2.65]],.085,`#d4be85`);for(let t of[-1,1])this.cylinder(e,`#c6ded9`,[t*2,.72,.1],.48,.3),this.cylinder(e,`#95c8c8`,[t*2,.89,.1],.37,.07),this.tube(e,[[t*2,.95,-.1],[t*2,1.38,-.1],[t*1.6,1.6,-.1]],.07,Wf)}immune(e){this.box(e,Wf,[0,1.06,0],[2.6,1.2,1.85],.3),this.ball(e,`#a6bea1`,[0,2.14,-.17],[1.52,1.15,1.03]),this.tube(e,[[-1.25,2.1,0],[-1.85,2.45,0],[-2,2.7,0]],.11,`#cbd6a7`),this.tube(e,[[1.25,2.1,0],[1.75,2.5,0],[1.8,2.85,0]],.11,`#cbd6a7`),this.ball(e,`#f3f1d5`,[-.37,2.48,.72],[.3,.34,.14]),this.ball(e,`#f3f1d5`,[.36,2.05,.87],[.29,.33,.1]);let t=new ra;t.moveTo(0,.7),t.lineTo(.62,.43),t.lineTo(.52,-.25),t.quadraticCurveTo(.3,-.65,0,-.85),t.quadraticCurveTo(-.3,-.65,-.52,-.25),t.lineTo(-.62,.43),t.closePath(),this.mesh(new Va(t,{depth:.12,bevelEnabled:!0,bevelThickness:.08,bevelSize:.07,bevelSegments:3}),Wf,e,[0,1.84,1]),this.tube(e,[[-.28,1.8,1.25],[-.04,1.57,1.25],[.36,2.02,1.25]],.06,`#829c79`);for(let t=0;t<4;t++)this.cell(e,!1,.8).position.set(-1.6+t*1.1,.8,1.75+Math.sin(t)*.2)}cell(e,t,n=1){let r=new G;if(e.add(r),r.scale.setScalar(n),t){this.ball(r,`#da8178`,[0,.12,0],[.28,.16,.23]);let e=this.mesh(new Ya(.18,.085,9,20),`#e69a8c`,r,[0,.2,0]);e.rotation.x=Math.PI/2,this.ball(r,`#f0b9a7`,[0,.19,0],[.1,.025,.09]),this.box(r,Wf,[.24,.17,0],[.14,.19,.18],.05)}else{this.ball(r,Wf,[0,.2,0],[.27,.27,.24]),this.ball(r,`#b3a8c4`,[-.06,.27,.2],[.13,.11,.08]);for(let e=0;e<6;e++){let t=e/6*Math.PI*2;this.ball(r,Wf,[Math.cos(t)*.24,.2+Math.sin(t)*.24,0],[.075,.075,.075])}}for(let e of[-.08,.07])this.ball(r,`#665f59`,[e,.2,.22],[.022,.025,.022]);return r}vessels(){for(let t of e.filter(e=>e.id!==`heart`))for(let e of[!1,!0]){let n=new H(t.position[0],.7,t.position[1]),r=n.clone().setY(0).normalize(),a=new H(-r.z,0,r.x).multiplyScalar(e?-.35:.35),o=r.clone().multiplyScalar(1.5).add(a).setY(.6),s=n.clone().sub(r.clone().multiplyScalar(1.9)).add(a),c=o.clone().lerp(s,.5).add(a.clone().multiplyScalar(2));c.y=1.15;let l=[o,c,s];e&&l.reverse();let u=new Ii(l),d=e?t.id:`heart`,f=e?`heart`:t.id,p=i.find(e=>e.from===d&&e.to===f).oxygen;this.routes.set(`${d}-${f}`,u),this.mesh(new Xa(u,60,.19,10,!1),p?`#d59c8e`:`#98b7c4`,this.scene),this.mesh(new Xa(new Ii(l.map(e=>e.clone().add(new H(0,.11,0)))),60,.038,6,!1),p?`#f0cabc`:`#c7dce3`,this.scene);for(let e=0;e<5;e++){let t=this.cell(this.scene,!0,.75);p||t.traverse(e=>{e instanceof ui&&e.material===this.material(`#da8178`)&&(e.material=this.material(`#9b819f`))}),this.traffic.push({mesh:t,curve:u,offset:e/5,speed:.025})}if(t.id===`gut`&&e)for(let e=0;e<6;e++){let t=new G;this.scene.add(t),this.ball(t,`#e5bd64`,[0,.12,0],[.12,.12,.12]),this.traffic.push({mesh:t,curve:u,offset:e/6,speed:.04,nutrient:!0})}}for(let e of[`heart`,`lungs`]){let t=a(`brain`).position,n=a(e).position,r=[[t[0],.5,t[1]],[(t[0]+n[0])/2,.75,Math.min(t[1],n[1])-4],[n[0],.6,n[1]]],i=this.tube(this.scene,r,.044,`#cdbb83`);for(let e=0;e<3;e++){let t=new G;this.scene.add(t),this.ball(t,`#ffeac0`,[0,0,0],[.105,.105,.105]),this.traffic.push({mesh:t,curve:i,offset:e/3,speed:.11})}}}hit(e){let t=this.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);let n=this.raycaster.intersectObjects([...this.roots.values()],!0);for(let e of n){let t=e.object;for(;t;){if(t.userData.city)return t.userData.city;t=t.parent}}return null}select(e,t=!1){if(this.closePlanning(),e&&t){this.district?.id!==e&&(this.district?.dispose(),this.controls.enabled=!1,this.district=new Zd(e,this.renderer.domElement,this.labelContainer,e=>this.onPOI(e)),this.resize()),this.district.preset(`city`),this.renderer.domElement.setAttribute(`aria-label`,`${a(e).name}三维城区，可拖动360度环绕、右键平移、滚轮缩放；也可以使用街区观察目录选择建筑。`),this.selected=e;return}if(this.selected=e,this.ring.visible=!!e,this.labels.forEach((t,n)=>t.classList.toggle(`selected`,n===e)),e){let n=a(e);this.ring.position.set(n.position[0],.65,n.position[1]),t&&(this.targetPosition.set(n.position[0],1,n.position[1]),this.targetZoom=1.65,this.following=!0)}}openPlanning(e,t,n){this.district?.dispose(),this.district=null,this.closePlanning(),this.controls.enabled=!1,this.endTour(),this.selected=null,this.planningPick=n,this.planning=new Uf(this.renderer.domElement,this.labelContainer,e,t,n),this.resize(),this.renderer.domElement.setAttribute(`aria-label`,`可建设的心肺街区。点击地块或血管规划城市，拖动可360度环绕，滚轮可缩放。`)}closePlanning(){this.planning&&(this.planning.dispose(),this.planning=null,this.controls.enabled=!0)}overview(){this.district&&(this.district.dispose(),this.district=null,this.controls.enabled=!0),this.renderer.domElement.setAttribute(`aria-label`,`六座人体城市的可交互三维地图，可拖拽平移、滚轮缩放；也可以使用城市列表选择。`),this.targetPosition.set(0,1,3),this.targetZoom=1,this.following=!0,this.resize()}zoom(e){if(this.planning){this.planning.zoom(e);return}if(this.district){this.district.zoom(e);return}this.targetPosition.copy(this.controls.target),this.targetZoom=Vt.clamp(this.camera.zoom+e,.7,2.5),this.following=!0}setTour(e,t,n){this.traveler.visible=!0,this.tourProgress=0;let r=a(e).position,i=a(t).position;this.tourDestination.set(i[0],1.2,i[1]+1);let o=new H((r[0]+i[0])/2,2,(r[1]+i[1])/2);this.tourPath=this.routes.get(`${e}-${t}`)??new Ii([new H(r[0],1.2,r[1]+1),o,this.tourDestination]),this.traveler.position.copy(this.tourPath.getPointAt(0)),this.traveler.position.y+=.3,this.travelerLabel.hidden=!1,this.traveler.traverse(e=>{e instanceof ui&&(e.material===this.material(`#da8178`)||e.material===this.material(`#9b819f`))&&(e.material=this.material(n?`#da8178`:`#9b819f`))})}endTour(){this.traveler.visible=!1,this.tourPath=null,this.travelerLabel.hidden=!0}resize(){let e=this.container.clientWidth,t=this.container.clientHeight;if(!e||!t)return;let n=e/t;this.camera.left=-14*n,this.camera.right=14*n,this.camera.top=14,this.camera.bottom=-14,n<1.2&&(this.camera.left=-19,this.camera.right=19,this.camera.top=19/n,this.camera.bottom=-19/n),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.district?.resize(e,t),this.planning?.resize(e,t)}animate=()=>{this.raf=requestAnimationFrame(this.animate);let e=performance.now(),t=Math.min((e-this.previousTime)/1e3,.06);this.previousTime=e,c(this.simulation,this.mode,t,this.speed,this.paused);let n=this.time;if(this.planning){this.onTick(n),this.planning.update(n,t),this.renderer.render(this.planning.scene,this.planning.camera);return}if(this.district){this.district.update(this.simulation,t,this.mode,this.paused),this.renderer.render(this.district.scene,this.district.camera),this.onTick(n);return}for(let e of this.traffic)e.mesh.visible=!e.nutrient||this.mode===`meal`,e.mesh.position.copy(e.curve.getPointAt((this.simulation.transport*e.speed+e.offset)%1)),e.mesh.position.y+=.17;if(!this.reduced){let e=this.organs.get(`heart`),t=Math.max(0,Math.sin(this.simulation.beats*Math.PI*2))**8;e.scale.set(1+t*.025,1+t*.045,1+t*.025);let r=this.organs.get(`lungs`),i=Math.sin(this.simulation.breaths*Math.PI*2);r.scale.set(1+i*.035,1+i*.025,1+i*.025),this.bubbles.forEach((e,t)=>{e.position.y=e.userData.base+Math.sin(n*.8+t)*.22}),this.nutrients.forEach((e,t)=>{e.position.y=e.userData.base+Math.abs(Math.sin(this.simulation.nutrients+t))*.22})}if(this.tourPath&&!this.paused&&(this.tourProgress=Math.min(1,this.tourProgress+t*this.speed*.18),this.traveler.position.copy(this.tourPath.getPointAt(this.tourProgress)),this.traveler.position.y+=.3),this.following){let e=this.controls.target.clone();this.controls.target.lerp(this.targetPosition,1-Math.exp(-t*4)),this.camera.position.add(this.controls.target.clone().sub(e)),this.camera.zoom=Vt.damp(this.camera.zoom,this.targetZoom,4,t),this.camera.updateProjectionMatrix()}this.controls.update(),this.night=Vt.damp(this.night,+(this.mode===`sleep`),1.5,t),this.sunlight.intensity=Vt.lerp(2.8,1.2,this.night);let r=new K(`#e9eee3`).lerp(new K(`#c6d3dd`),this.night);this.renderer.setClearColor(r),this.ground.material.color.copy(r),this.renderer.render(this.scene,this.camera);let i=this.container.clientWidth,o=this.container.clientHeight;for(let[e,t]of this.labels){let n=a(e),r=new H(n.position[0],.4,n.position[1]+3.3).project(this.camera);t.style.transform=`translate(-50%,-50%) translate(${(r.x*.5+.5)*i}px,${(-r.y*.5+.5)*o}px)`,t.hidden=r.x<-.98||r.x>.98||r.y<-.98||r.y>.98}if(this.traveler.visible){let e=this.traveler.position.clone().add(new H(0,1.5,0)).project(this.camera);this.travelerLabel.style.transform=`translate(-50%,-100%) translate(${(e.x*.5+.5)*i}px,${(-e.y*.5+.5)*o}px)`}this.onTick(n)};capture(){this.renderer.render(this.planning?.scene??this.district?.scene??this.scene,this.planning?.camera??this.district?.camera??this.camera);let e=this.renderer.domElement,t=document.createElement(`canvas`);return t.width=Math.min(1100,e.width),t.height=Math.round(t.width*e.height/e.width),t.getContext(`2d`).drawImage(e,0,0,t.width,t.height),t.toDataURL(`image/jpeg`,.8)}dispose(){cancelAnimationFrame(this.raf),this.planning?.dispose(),this.district?.dispose(),this.controls.dispose(),this.renderer.dispose()}},Yf={heart:{title:`四腔与两条循环`,fact:`右心把血液送往肺，左心把血液送往全身。瓣膜帮助血液单向流动。`},brain:{title:`神经元之间的联系`,fact:`信号沿轴突传递，并通过突触与其他细胞沟通；信息处理依赖网络协作。`},lungs:{title:`肺泡与毛细血管`,fact:`氧气从肺泡扩散进入血液，二氧化碳向相反方向扩散。`},gut:{title:`绒毛扩大吸收面积`,fact:`绒毛内部有毛细血管和淋巴管。不同营养物质的吸收与转运路线不同。`},kidneys:{title:`过滤、回收与排出`,fact:`血液在肾小球处形成滤液；肾小管把大部分水和有用物质重吸收回血液。`},immune:{title:`识别与协作`,fact:`抗体可与特定抗原结合。免疫反应还需要多种细胞和信号协作。`}},Xf=(e,t,n)=>`<text x="${e}" y="${t}" text-anchor="middle">${n}</text>`,Zf=(e,t=`#cf8c80`,n=5)=>`<path d="${e}" fill="none" stroke="${t}" stroke-width="${n}" stroke-linecap="round"/>`,Qf=(e,t=`#d69782`)=>`<path class="anatomy-flow" d="${e}" fill="none" stroke="${t}" stroke-width="3" stroke-dasharray="4 12" marker-end="url(#anatomy-arrow)"/>`;function $f(e){let t=``;return e===`heart`&&(t=`<rect x="48" y="61" width="65" height="57" rx="23" fill="#bacfd3"/><rect x="48" y="128" width="65" height="64" rx="24" fill="#9fbecb"/><rect x="128" y="61" width="65" height="57" rx="23" fill="#e3b4a4"/><rect x="128" y="128" width="65" height="64" rx="24" fill="#d99989"/>${Xf(80,93,`右心房`)}${Xf(80,163,`右心室`)}${Xf(160,93,`左心房`)}${Xf(160,163,`左心室`)}${Qf(`M 80 107 L 80 140`,`#7ba2b5`)}${Qf(`M 160 107 L 160 140`)}${Qf(`M 57 154 C 16 120 16 35 105 29`,`#7ba2b5`)}${Qf(`M 130 29 C 215 28 218 60 182 76`)}${Xf(119,19,`肺循环`)}${Qf(`M 169 186 C 205 225 145 223 124 221`)}${Qf(`M 117 221 C 41 226 25 115 66 74`,`#7ba2b5`)}${Xf(119,235,`体循环 · 返回右心`)}`),e===`brain`&&(t=`${Zf(`M 77 113 L 44 64 M 65 92 L 25 99 M 68 126 L 33 154 M 81 126 L 70 184`,`#b1a0c2`,8)}<circle cx="91" cy="114" r="31" fill="#cfbfdb"/><circle cx="91" cy="114" r="13" fill="#a692bc"/>${Zf(`M 119 114 C 146 96 162 135 187 112 L 215 99`,`#b9a9c7`,8)}${[137,158,179].map(e=>`<rect x="${e}" y="102" width="14" height="22" rx="6" fill="#e0d8e9"/>`).join(``)}${Qf(`M 91 114 L 118 114 C 145 96 162 135 187 112 L 214 99`,`#cbab6d`)}${Zf(`M 224 76 L 224 130`,`#b3a5bf`,5)}${Xf(50,46,`树突`)}${Xf(91,164,`细胞体`)}${Xf(161,157,`有髓轴突`)}${Xf(210,62,`突触`)}${Xf(123,214,`信号传递依靠网络联系`)}`),e===`lungs`&&(t=`${Zf(`M 112 20 L 112 49`,`#aac1ad`,20)}<ellipse class="anatomy-breathe" cx="112" cy="95" rx="67" ry="52" fill="#deeadb" stroke="#a9c4b2" stroke-width="3"/>${Zf(`M 37 137 C 2 210 223 218 203 132`,`#e1c3b8`,25)}${Qf(`M 40 145 C 17 202 220 214 200 139`,`#9ab7c5`)}<ellipse cx="83" cy="181" rx="13" ry="8" fill="#ce8d80"/><ellipse cx="166" cy="184" rx="13" ry="8" fill="#ce8d80"/>${Qf(`M 91 118 L 91 163`,`#cf957e`)}${Qf(`M 139 162 L 139 120`,`#8fa9bc`)}${Xf(111,92,`肺泡内的空气`)}${Xf(69,143,`O₂ ↓`)}${Xf(170,143,`CO₂ ↑`)}${Xf(121,230,`毛细血管 · 红细胞`)}`),e===`gut`&&(t=`<path d="M 36 200 L 36 123 Q 36 66 58 66 Q 80 66 80 123 L 80 189 L 87 189 L 87 72 Q 87 30 113 30 Q 139 30 139 72 L 139 189 L 147 189 L 147 105 Q 147 59 172 59 Q 197 59 197 105 L 197 201" fill="#e2d2ac" stroke="#bead87" stroke-width="3"/>${Zf(`M 100 209 L 100 71 Q 111 51 123 71 L 123 209`,`#c89584`,4)}${Zf(`M 111 207 L 111 91`,`#a5b798`,7)}${Qf(`M 64 28 Q 83 25 96 61`,`#c7ae6d`)}${Qf(`M 163 27 Q 151 36 126 69`,`#c7ae6d`)}${Xf(111,18,`小肠绒毛`)}${Xf(58,228,`毛细血管`)}${Xf(168,228,`中央乳糜管`)}`),e===`kidneys`&&(t=`<circle cx="71" cy="63" r="34" fill="#d8e3db" stroke="#a1b8b2" stroke-width="4"/>${Zf(`M 35 60 C 58 20 89 97 100 48 C 76 19 48 109 38 61`,`#c6948b`,7)}${Zf(`M 98 76 C 166 64 127 127 134 177 Q 138 216 160 179 L 160 105 Q 171 80 195 114 L 195 215`,`#b7ced1`,13)}${Qf(`M 100 80 C 162 64 130 129 136 173 Q 138 209 160 179 L 160 109 Q 174 87 195 114 L 195 211`,`#76a4b1`)}${Qf(`M 151 146 L 103 146`,`#b99972`)}${Xf(62,17,`肾小球过滤`)}${Xf(62,144,`返回血液`)}${Xf(81,159,`重吸收`)}${Xf(192,235,`继续形成尿液`)}`),e===`immune`&&(t=`<circle cx="79" cy="118" r="44" fill="#d5dfc0" stroke="#a8bc93" stroke-width="3"/><path d="M 65 106 Q 47 133 78 143 Q 109 126 90 103 Z" fill="#b2a7c6"/>${Zf(`M 155 148 L 155 120 L 139 104 M 155 120 L 173 101`,`#ad9abe`,8)}<circle class="anatomy-breathe" cx="182" cy="76" r="17" fill="#e0ba91"/><circle cx="167" cy="67" r="5" fill="#d0a97a"/>${Qf(`M 87 165 Q 143 203 177 134`,`#9db086`)}${Xf(77,190,`免疫细胞`)}${Xf(144,93,`抗体`)}${Xf(189,45,`抗原`)}${Xf(126,228,`特异性结合 · 多种机制协作`)}`),`<svg viewBox="0 0 240 248" role="img" aria-label="${Yf[e].title}"><defs><marker id="anatomy-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 8 4 L 0 8 Z" fill="context-stroke"/></marker></defs>${t}</svg>`}var ep=class{host;sample;element;current=null;last=``;x=.48;y=.35;constructor(e,t,n){this.host=e,this.sample=t,this.element=document.createElement(`div`),this.element.className=`biology-lens`,this.element.hidden=!0,this.element.innerHTML=`<button class="lens-handle" aria-label="拖动观察窗，方向键移动">✧ 人体观察窗 <span>拖动对照</span></button><button class="lens-close" aria-label="关闭观察窗">×</button><div class="lens-content"></div><button class="lens-save">记下这次发现 ＋</button>`,e.append(this.element),this.element.querySelector(`.lens-close`).addEventListener(`click`,()=>this.toggle(!1)),this.element.querySelector(`.lens-save`).addEventListener(`click`,n);let r=this.element.querySelector(`.lens-handle`),i=null;r.addEventListener(`pointerdown`,t=>{t.stopPropagation();let n=this.element.getBoundingClientRect(),a=e.getBoundingClientRect();i={x:t.clientX,y:t.clientY,left:n.left-a.left,top:n.top-a.top},r.setPointerCapture(t.pointerId)}),r.addEventListener(`pointermove`,e=>{i&&(this.move(i.left+e.clientX-i.x,i.top+e.clientY-i.y),this.update())}),r.addEventListener(`pointerup`,()=>{i=null}),r.addEventListener(`pointercancel`,()=>{i=null}),r.addEventListener(`keydown`,e=>{let t={ArrowLeft:[-25,0],ArrowRight:[25,0],ArrowUp:[0,-25],ArrowDown:[0,25]}[e.key];t&&(e.preventDefault(),this.move(this.element.offsetLeft+t[0],this.element.offsetTop+t[1]),this.update())})}get active(){return!this.element.hidden}toggle(e=!this.active){return this.element.hidden=!e,document.body.classList.toggle(`lens-open`,e),e&&(this.move(this.host.clientWidth*this.x,this.host.clientHeight*this.y),this.update()),e}move(e,t){let n=this.host.clientWidth,r=this.host.clientHeight,i=Math.max(6,Math.min(n-this.element.offsetWidth-6,e)),a=Math.max(6,Math.min(r-this.element.offsetHeight-6,t));this.element.style.left=`${i}px`,this.element.style.top=`${a}px`,this.x=i/n,this.y=a/r}update(){if(!this.active)return;this.move(this.host.clientWidth*this.x,this.host.clientHeight*this.y);let e=this.sample(this.element.offsetLeft+this.element.offsetWidth/2,this.element.offsetTop+this.element.offsetHeight/2);if(!e)return;this.current=e;let t=e.city+e.poi+e.near;t!==this.last&&(this.last=t,this.element.querySelector(`.lens-content`).innerHTML=`<span class="lens-place">${e.near?`系统对照 · ${Id(e.name)}附近`:`移动到地标附近，对照观察`}</span>${$f(e.city)}<strong>${Yf[e.city].title}</strong><p>${Yf[e.city].fact}</p><small>结构与比例经过简化 · 非真实透视</small>`)}},tp=`metabolis.harbor.workday.v1`,np=class{host;state;panelVisible=!1;pendingPhoto=!1;lastTime=null;savedAt=0;notifiedCompletion=0;constructor(e){this.host=e;let t=null;try{t=localStorage.getItem(tp)}catch{}this.state=Wd(t),this.notifiedCompletion=this.state.completed}get inProgress(){return this.state.active}get entryLabel(){return this.state.active?`回到小红身边`:this.state.completed?`老朋友，回港口坐坐`:`陪小红过一个工作日`}save(){try{return localStorage.setItem(tp,JSON.stringify(this.state)),!0}catch{return!1}}leave(){this.panelVisible=!1,this.lastTime=this.host.world()?.time??null,this.save()}enter(){this.host.select(),this.lastTime=this.host.world()?.time??null,this.host.world()?.district?.setWorkday(this.state),this.host.world()?.district?.focusHarbor(this.state.active&&![`setting-out`,`returning`].includes(this.state.stage)),this.render()}interact(e){let t=e.split(`:`)[1];return t===`welcome`?(this.enter(),!0):t===`memory`?(this.memory(),!0):this.state.stage===`partner`&&this.state.active&&[`bubble`,`cloud`,`green`,`red`].includes(t)?(this.choose(t),!0):!1}render(){let e=this.state,t=zd[e.stage],n=t.duration>0;this.host.show(`港口的一天`,`<div class="workday-banner"><span class="workday-sun">☼</span><span>LITTLE RED’S DAY<small>肺泡港 · 一起慢慢生活</small></span>${e.completed?`<i>熟悉的港口</i>`:``}</div><span class="chapter-kicker">${t.eyebrow}</span><h3 class="workday-title">${t.title}</h3><p class="workday-body">${t.body}</p><div class="workday-dialogue"><span class="portrait ${t.speaker===`小红`?`rbc`:t.speaker===`云云`?`person-2`:`person-1`}">··</span><p><b>${t.speaker}</b>“${t.line}”</p></div>${e.stage===`invitation`?`<button class="workday-primary" data-exp="workday-start">一起出发 ↗</button>`:e.stage===`partner`?`<div class="workday-choices" aria-label="选择交接伙伴"><button data-exp="workday-partner" data-key="bubble"><span class="portrait person-1">··</span><b>泡泡</b><small>带路的接待员</small></button><button data-exp="workday-partner" data-key="cloud"><span class="portrait person-2">··</span><b>云云</b><small>蓝帽子的交接员</small></button><button data-exp="workday-partner" data-key="green"><span class="portrait">··</span><b>小青</b><small>花房的店员</small></button></div><p class="workday-feedback" role="status">${Id(e.hint||`看一眼柜台，再向伙伴打个招呼。`)}</p>`:e.stage===`complete`?`<div class="workday-keepsake">✳ ${e.photo?`小铺旁已经挂上了我们的合照。`:`这座城里，有人记得你了。`}</div><button class="workday-primary" data-exp="workday-photo">${e.photo?`再拍一张合照`:`给大家拍张合照`} ↗</button><button class="experience-link" data-exp="workday-memory">翻开这段记忆</button><button class="experience-link workday-replay" data-exp="workday-start">再陪小红上一次班</button>`:``}${n?`<div class="workday-progress"><i style="width:${Ud(e)*100}%"></i></div><div class="workday-clock"><span data-workday-clock>${Math.ceil(t.duration-e.elapsed)} 秒 · 自动继续</span><button data-exp="workday-next">快进这一段 →</button></div>`:``}<div class="workday-camera"><button data-exp="workday-wide">看整个港口</button><button data-exp="workday-follow">跟着小红走</button></div><details class="workday-note"><summary>这段故事对应什么？</summary><p>氧气从肺泡扩散进入血液，二氧化碳向相反方向扩散。柜台、箱子和下班小聚是帮助理解的城市故事；真实气体交换连续发生，不需要排队或人工搬运。</p></details><p class="workday-footnote">离开港口会暂存进度，回来可以继续。空格暂停。</p>`),this.panelVisible=!0}choose(e){let t=Hd(this.state,e);this.save(),this.render(),t&&this.host.world()?.district?.focusHarbor(!0)}action(e,t){switch(e){case`workday`:this.enter();break;case`workday-start`:Vd(this.state),this.save(),this.host.world()?.district?.focusHarbor(!1),this.render();break;case`workday-partner`:[`red`,`bubble`,`cloud`,`green`].includes(t??``)&&this.choose(t);break;case`workday-next`:Bd(this.state,zd[this.state.stage].duration-this.state.elapsed),this.changed();break;case`workday-wide`:this.host.world()?.district?.focusHarbor(!1);break;case`workday-follow`:this.host.world()?.district?.follow(`harbor:red`);break;case`workday-photo`:this.pendingPhoto=!0,this.host.world()?.district?.focusHarbor(!0),this.host.photo();break;case`workday-memory`:this.memory();break;default:return!1}return!0}changed(){this.state.completed>this.notifiedCompletion&&(this.notifiedCompletion=this.state.completed,this.host.record(`harbor-shift:${this.state.completed}`,`和小红一起，在肺泡港上了一天班`,`认识泡泡、云云和小青；完成气体交接，再在花房旁一起休息。`)),this.save()||this.host.toast(`这段故事仍可继续，但浏览器暂时无法保存进度。`),this.panelVisible&&(this.host.world()?.district?.focusHarbor(![`setting-out`,`returning`].includes(this.state.stage)),this.render())}tick(){let e=this.host.world();if(!e)return;let t=this.lastTime===null?0:Math.max(0,e.time-this.lastTime);if(this.lastTime=e.time,e.district?.id===`lungs`&&(e.district.setWorkday(this.state),Bd(this.state,t)&&this.changed(),e.time-this.savedAt>5&&this.state.active&&(this.savedAt=e.time,this.save()),this.panelVisible)){let t=zd[this.state.stage],n=document.querySelector(`.workday-progress i`),r=document.querySelector(`[data-workday-clock]`);n&&(n.style.width=`${Ud(this.state)*100}%`),r&&(r.textContent=e.paused?`已暂停 · 可以继续观察`:`${Math.ceil(t.duration-this.state.elapsed)} 秒 · 自动继续`)}}rememberPhoto(e){if(!this.pendingPhoto)return!0;let t=this.state.photo;return this.state.photo=e,this.save()?!0:(this.state.photo=t,!1)}photoEnded(){this.pendingPhoto=!1,this.panelVisible&&this.render()}memory(){this.host.dialog(`<div class="dialog-kicker">A PLACE THAT REMEMBERS YOU</div><h2 id="dialog-title">港口记得这一天。</h2><p class="dialog-intro">${this.state.completed?`你和小红完成了 ${this.state.completed} 次工作日。泡泡、云云和小青已经认得你。`:`故事刚刚开始，港口还有空位等你。`}</p>${this.state.photo?`<figure class="harbor-memory-photo"><img src="${this.state.photo}" alt="你与小红在肺泡港留下的合照"><figcaption>小青花房旁 · 下次来，还坐这里。<a href="${this.state.photo}" download="metabolis-harbor-memory.jpg">保存合照 ↓</a></figcaption></figure>`:`<div class="workday-memory-empty"><span class="portrait rbc">··</span><span class="portrait person-1">··</span><span class="portrait person-2">··</span><p>完成工作日后，可以为大家留下合照。</p></div>`}<p class="workday-body">这里的相识、进度和合照保存在当前浏览器。回到港口，仍能继续这段日常。</p>`)}},rp=e=>document.querySelector(e),ip=`metabolis.journal.v2`,ap=class{host;harborStory;panel;notice;cameraBar;lens;journal;profile=null;episode=null;internal=!1;lastTick=-1;panelType=``;observedMoment=null;photo=!1;photoLabels=!0;constructor(e){this.host=e;let t=null;try{t=localStorage.getItem(ip)}catch{}this.journal=Pd(t),this.panel=document.createElement(`section`),this.panel.className=`experience-card`,this.panel.hidden=!0,this.panel.setAttribute(`aria-label`,`探索体验`),rp(`.exploration`).append(this.panel),this.notice=document.createElement(`aside`),this.notice.className=`moment-notice`,this.notice.hidden=!0,rp(`.exploration`).append(this.notice),this.cameraBar=document.createElement(`div`),this.cameraBar.className=`camera-status`,this.cameraBar.hidden=!0,rp(`.exploration`).append(this.cameraBar),this.lens=new ep(rp(`.world-viewport`),(t,n)=>e.world()?.district?.structureAt(t,n)??null,()=>this.recordStructure()),this.harborStory=new np({world:()=>this.world,select:()=>this.host.select(`lungs`),show:(e,t)=>this.show(e,t),toast:e.toast,record:(e,t,n)=>this.record(`journey`,e,t,n,`lungs`),photo:()=>this.togglePhoto(!0),dialog:e.dialog}),window.addEventListener(`pagehide`,()=>this.harborStory.leave());let n=document.createElement(`div`);n.className=`photo-controls`,n.innerHTML=`<span>把这一刻，寄给自己。</span><button data-exp="capture">拍下这刻</button><button data-exp="bookmark">收藏机位</button><button data-exp="photo-exit">退出拍照</button>`,rp(`.exploration`).append(n),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-exp]`);t&&this.action(t.dataset.exp,t.dataset.key)})}get world(){return this.host.world()}get city(){return this.world?.district?.id}save(){try{return localStorage.setItem(ip,JSON.stringify(this.journal)),!0}catch{return!1}}record(e,t,n,r,i=this.city){if(i&&Fd(this.journal,{key:t,kind:e,city:i,title:n,detail:r,at:Date.now()})){let e=this.save();this.host.toast(e?`新的发现已收进探索手记。`:`本次发现已记录；浏览器暂时无法保存到下次。`)}}show(e,t){this.harborStory.panelVisible=!1,this.panelType=e,this.panel.hidden=!1,rp(`.exploration`).classList.add(`experiencing`),document.body.classList.remove(`city-immersive`);let n=rp(`[data-action="immersion"]`);n.textContent=`展开视野`,n.setAttribute(`aria-pressed`,`false`),this.panel.innerHTML=`<div class="experience-head"><span>THE WORLD, A LITTLE CLOSER</span><button data-exp="close" aria-label="关闭探索面板">×</button></div><h2>${e}</h2>${t}`,this.panel.scrollTop=0}close(){this.harborStory.panelVisible=!1,this.panel.hidden=!0,rp(`.exploration`).classList.remove(`experiencing`),this.profile=null,this.panelType=``}onLocation(){this.internal||(this.stopEpisode(!1),this.close(),this.observedMoment=null)}onCityChanged(){this.internal||(this.harborStory.leave(),this.stopEpisode(!1),this.close(),this.lens.toggle(!1),this.togglePhoto(!1),this.profile=null,this.observedMoment=null,this.lastTick=-1)}onOverview(){this.onCityChanged(),this.notice.hidden=!0,this.cameraBar.hidden=!0}menu(){this.stopEpisode(!0),this.city||this.host.select(`heart`);let e=this.world?.district;if(!e)return;let t=Od(e.id,this.world.time);this.show(`在城里，遇见生活。`,`<p class="experience-intro">认识一位居民，跟着一件小事走一段路。</p><button class="workday-entry" data-exp="workday"><span>☼ 肺泡港 · 一段可以参与的日常</span><strong>${this.harborStory.entryLabel} ↗</strong><small>交接、等候、下班小聚 · 约 3 分钟</small></button><button class="trip-feature" data-exp="delivery"><span class="portrait rbc">··</span><span><small>小红的一次送氧任务</small><strong>陪她走过五站循环 ↗</strong></span></button><h3>今天想认识谁？</h3><div class="contact-list">${e.contacts.map((e,t)=>`<button data-exp="inspect" data-key="${e.key}"><span class="portrait person-${t}">··</span><span><strong>${e.name}</strong><small>${e.role}</small></span><i>↗</i></button>`).join(``)}</div><h3>换一种方式看城市</h3><div class="experience-options"><button data-exp="walk">沿街慢慢走</button><button data-exp="bench">坐一会儿</button><button data-exp="ride">搭一班慢车</button><button data-exp="lens">打开观察窗</button><button data-exp="photo">拍一张明信片</button><button data-exp="journal">翻开探索手记</button></div><div class="moment-card"><small>此刻 / 即将发生</small><strong>${t.title}</strong><p>${t.active?t.phases[t.stage]:`下一场约 ${t.remaining} 秒后开始`}</p><button data-exp="moment">${t.active?`到现场看看`:`去现场等候`} ↗</button></div><div class="change-invitation"><h3>跟随一次身体变化</h3><p>先选一种生活状态，再顺着变化拜访相关城市。</p><div class="change-choices">${[`rest`,`walk`,`meal`,`sleep`].map((e,t)=>`<button data-exp="change" data-key="${e}">${[`休息`,`散步`,`进食`,`睡眠`][t]}</button>`).join(``)}</div></div>`)}harborInteract(e){return this.harborStory.interact(e)}inspect(e){let t=this.world?.district?.inspect(e);t&&(this.profile=e,this.record(`resident`,`${this.city}:${e}`,`认识了${t.name}`,t.role),this.show(`打个招呼吧。`,`<div class="profile-heading"><span class="portrait ${e===`courier`?`rbc`:`person-1`}">··</span><div><h3>${Id(t.name)}</h3><p>${Id(t.role)}</p></div></div><p class="resident-wish">“${Id(t.detail)}”</p><dl class="profile-status"><dt>现在</dt><dd id="resident-now">${Id(t.status)}</dd><dt>这一段的目的地</dt><dd>${Id(t.destination)}</dd>${t.cargo?`<dt>打开货物看看</dt><dd class="cargo-open">◌ ${Id(t.cargo)}</dd>`:``}</dl><button class="experience-primary" data-exp="follow" data-key="${e}">跟随${Id(t.name)} ↗</button><p class="experience-hint">可以随时拖动镜头，回到自由观察。</p>${e.startsWith(`harbor:`)?`<button class="experience-primary" data-exp="workday">回到小红的一天 ↗</button>`:``}<button class="experience-link" data-exp="menu">认识其他居民</button>`))}startEpisode(e,t=this.world?.mode??`rest`){if(!this.world)return;this.stopEpisode(!1),this.close(),this.lens.toggle(!1);let n=this.world.mode;this.episode={type:e,steps:e===`delivery`?kd:Ad[t],start:this.world.time,index:-1,previous:n,mode:t,done:!1},e===`change`&&this.host.setMode(t),this.advanceEpisode()}advanceEpisode(){let e=this.episode,t=this.world;if(!e||!t)return;let n=jd(t.time-e.start,e.steps.length);if(n.done&&!e.done){e.done=!0,t.district?.releaseCamera(),this.record(e.type===`delivery`?`journey`:`change`,e.type===`delivery`?`delivery-complete`:`change:${e.mode}`,e.type===`delivery`?`陪小红走完一次循环`:`观察了${{rest:`休息`,walk:`散步`,meal:`进食`,sleep:`睡眠`}[e.mode]}时的身体`,e.steps.map(e=>e.title).join(` → `)),this.show(`这一段，记住了。`,`<div class="chapter-complete">✳</div><p class="experience-intro">${e.type===`delivery`?`小红回到了右心，下一次循环还会继续。`:`这些变化彼此联系，身体始终在协作。`}</p><p class="experience-hint">讲解顺序与时间经过压缩，不代表真实反应的先后或时长。</p><button class="experience-primary" data-exp="journal">去手记里看看</button><button class="experience-link" data-exp="episode-stop">${e.type===`change`?`结束并恢复之前的状态`:`继续自由探索`}</button>`);return}if(e.done)return;let r=e.steps[n.index];n.index!==e.index&&(e.index=n.index,this.internal=!0,this.host.select(r.city),this.internal=!1,t.district?.focus(r.poi),this.profile=null,e.type===`delivery`&&(t.district?.setCourier(r,n.progress),t.district?.follow(`courier`)),this.show(e.type===`delivery`?`陪小红去送氧`:`跟随身体的变化`,`<span class="chapter-kicker">${e.type===`delivery`?`A DAY WITH LITTLE RED`:`EVERYTHING IS CONNECTED`}</span><h3 class="chapter-title">${r.title}</h3><p class="chapter-text">${r.text}</p><div class="chapter-cargo">◌ ${r.cargo}</div><div class="chapter-track">${e.steps.map((e,t)=>`<span class="${t<=n.index?`done`:``}">${t+1}</span>`).join(`<i></i>`)}</div><div class="chapter-progress"><i id="chapter-progress"></i></div><small class="chapter-time">${n.index+1} / ${e.steps.length} · 自动继续 · 暂停会停住旅程</small><div class="chapter-actions"><button data-exp="chapter-next">${n.index===e.steps.length-1?`完成这一站`:`前往下一站`} →</button><button data-exp="episode-stop">${e.type===`change`?`结束并恢复`:`结束跟随`}</button></div><p class="experience-hint">城市角色与旅程时间是艺术化、压缩的示意。</p>`)),e.type===`delivery`&&t.district?.setCourier(r,n.progress);let i=this.panel.querySelector(`#chapter-progress`);i&&(i.style.width=`${n.progress*100}%`)}stopEpisode(e){let t=this.episode;t&&(this.episode=null,this.world?.district?.setCourier(null),this.world?.district?.releaseCamera(),e&&t.type===`change`&&this.host.setMode(t.previous))}moment(){let e=this.world?.district;if(!e)return;let t=Od(e.id,this.world.time);this.observedMoment=e.id,e.focus(t.poi),this.show(`刚好，遇见这一刻。`,`<span class="chapter-kicker">A LITTLE HAPPENING</span><h3 class="chapter-title">${t.title}</h3><p id="moment-phase" class="chapter-text">${t.active?t.phases[t.stage]:`下一场约 ${t.remaining} 秒后开始。可以坐下来等一会儿。`}</p><div class="moment-sequence">${t.phases.map((e,t)=>`<p><b>${t+1}</b>${e}</p>`).join(``)}</div><p class="moment-fact">${t.fact}</p><button class="experience-primary" data-exp="lens">用观察窗看看机理</button><button class="experience-link" data-exp="menu">回到街区探索</button>`)}recordStructure(){let e=this.lens.current;if(!e||!e.near){this.host.toast(`把观察窗移到一个地标附近，再记下发现。`);return}this.record(`structure`,`structure:${e.city}`,Yf[e.city].title,Yf[e.city].fact,e.city)}journalView(){let e=this.journal,t={resident:`相识的居民`,moment:`遇见的小事`,structure:`看懂的机理`,journey:`旅程`,change:`身体的变化`};this.host.dialog(`<div class="dialog-kicker">MY METABOLIS JOURNAL</div><h2 id="dialog-title">把好奇，收进手记。</h2><p class="dialog-intro">${e.findings.length} 个发现 · ${e.photos.length} 张明信片 · ${e.views.length} 个收藏机位。保存在当前浏览器。</p><div class="journal-grid"><section><h3>探索记忆</h3>${e.findings.length?e.findings.slice().reverse().map(e=>`<article class="journal-finding"><small>${t[e.kind]} · ${a(e.city).name}</small><h4>${Id(e.title)}</h4><p>${Id(e.detail)}</p><button data-exp="visit" data-key="${e.city}">再去看看 ↗</button></article>`).join(``):`<p class="journal-empty">先认识一位居民，或打开观察窗，手记会从第一件小事开始。</p>`}</section><section><h3>我的机位</h3>${e.views.length?e.views.map(e=>`<button class="view-bookmark" data-exp="restore-view" data-key="${Id(e.id)}">${Id(e.title)} <span>回到这里 ↗</span></button>`).join(``):`<p class="journal-empty">在拍照模式收藏一个喜欢的角度。</p>`}<h3>城市明信片</h3>${e.photos.length?e.photos.slice().reverse().map(e=>`<figure class="journal-postcard"><img src="${e.image}" alt="${a(e.city).name}的城市明信片"><figcaption>${a(e.city).name} · ${new Date(e.at).toLocaleDateString(`zh-CN`)}<a href="${e.image}" download="metabolis-${e.city}.jpg">保存图片 ↓</a></figcaption></figure>`).join(``):`<p class="journal-empty">拍下一个让你想停留的瞬间。</p>`}</section></div>`)}togglePhoto(e=!this.photo){e===this.photo||e&&!this.city||(this.photo=e,document.body.classList.toggle(`photo-mode`,e),e?(this.photoLabels=this.world?.district?.labelsVisible??!0,this.photoLabels&&this.world?.district?.toggleLabels(),this.lens.toggle(!1)):(this.photoLabels&&this.world?.district&&!this.world.district.labelsVisible&&this.world.district.toggleLabels(),this.harborStory.photoEnded()))}capture(){let e=this.world,t=this.city;if(!e||!t)return;let n=e.capture(),r={id:String(Date.now()),city:t,image:n,at:Date.now()},i=this.journal.photos;if(this.journal.photos=[...i,r].slice(-4),!this.save()){this.journal.photos=i,this.host.toast(`浏览器存储空间不足，这张照片未保存。`);return}let a=this.harborStory.pendingPhoto,o=this.harborStory.rememberPhoto(n);this.host.toast(o?a?`合照已挂在花房旁。下次回来，它还会在这里。`:`明信片已保存。探索手记中可以查看和下载。`:`明信片已存入手记，但港口合照暂时无法保存。`)}bookmark(){let e=this.world?.district?.view();if(!e)return;let t=this.journal.views;if(this.journal.views=[...t,{id:String(Date.now()),title:`${a(e.city).name} · 机位 ${t.length+1}`,view:e}].slice(-8),!this.save()){this.journal.views=t,this.host.toast(`浏览器暂时无法保存机位。`);return}this.host.toast(`这个机位已收藏到探索手记。`)}action(e,t){if(e===`workday`&&this.stopEpisode(!0),!this.harborStory.action(e,t))switch(e){case`menu`:this.menu();break;case`close`:this.stopEpisode(!0),this.close();break;case`inspect`:t&&this.inspect(t);break;case`follow`:t&&this.world?.district?.follow(t);break;case`free`:this.world?.district?.releaseCamera(),this.stopEpisode(!0),this.close();break;case`walk`:case`bench`:case`ride`:this.stopEpisode(!0),this.close(),this.world?.district?.watch(e);break;case`delivery`:this.startEpisode(`delivery`);break;case`change`:this.startEpisode(`change`,t??`walk`);break;case`chapter-next`:this.episode&&(this.episode.start=this.world.time-(this.episode.index+1)*18,this.advanceEpisode());break;case`episode-stop`:this.stopEpisode(!0),this.close();break;case`moment`:this.moment();break;case`lens`:this.lens.toggle();break;case`journal`:this.journalView();break;case`photo`:this.stopEpisode(!0),this.togglePhoto(!0);break;case`photo-exit`:this.togglePhoto(!1);break;case`capture`:this.capture();break;case`bookmark`:this.bookmark();break;case`visit`:this.host.closeDialog(),t&&this.host.select(t);break;case`restore-view`:{let e=this.journal.views.find(e=>e.id===t);e&&(this.host.closeDialog(),this.host.select(e.view.city),this.world?.district?.restoreView(e.view));break}}}tick(){let e=this.world;if(!e)return;this.harborStory.tick(),this.advanceEpisode();let t=e.district;if(this.notice.hidden=!t||!!this.episode||t.id===`lungs`&&this.harborStory.panelVisible,this.cameraBar.hidden=!t||t.viewMode===`free`,t&&t.viewMode!==`free`){let e=t.viewMode===`walk`?`沿街漫游中`:t.viewMode===`bench`?`坐在街边，看一会儿`:`正在跟随 ${t.following?t.inspect(t.following)?.name??`居民`:``}`;this.cameraBar.dataset.text!==e&&(this.cameraBar.dataset.text=e,this.cameraBar.innerHTML=`<span>${Id(e)}</span>${t.following?.startsWith(`vehicle`)?`<button data-exp="inspect" data-key="${t.following}">看看车上的货物</button>`:``}<button data-exp="free">自由观察 ×</button>`)}let n=performance.now();if(!(n-this.lastTick<300)&&(this.lastTick=n,this.lens.update(),t)){let n=Od(t.id,e.time),r=n.active?n.phases[n.stage]:`${n.remaining} 秒后，${n.title}`;if(t.id===`lungs`&&this.harborStory.inProgress?(this.notice.dataset.text=`harbor`,this.notice.innerHTML=`<i class="happening"></i><span><small>小红的一天还在继续</small><strong>回到熟悉的港口</strong></span><button data-exp="workday">回到小红身边 ↗</button>`):this.notice.dataset.text!==r&&(this.notice.dataset.text=r,this.notice.innerHTML=`<i class="${n.active?`happening`:``}"></i><span><small>${n.active?`此刻，城里有件小事`:`城市的日常仍在继续`}</small><strong>${n.active?n.title:r}</strong></span><button data-exp="moment">去看看 ↗</button>`),this.observedMoment===t.id&&this.panelType===`刚好，遇见这一刻。`){let e=this.panel.querySelector(`#moment-phase`);e&&(e.textContent=r),n.active&&n.stage===2&&this.record(`moment`,`moment:${t.id}`,n.title,n.fact)}if(this.profile){let e=t.inspect(this.profile),n=this.panel.querySelector(`#resident-now`);e&&n&&(n.textContent=e.status)}}}},op=class{context;last=-1;water=-1;activity;constructor(e){this.context=e}tick(e,t,n){if(!t||n||this.context.state!==`running`)return;t.activity!==this.activity&&(this.activity=t.activity,t.activity===`exchange`?(this.note(660,.25,t.pan,.009),this.note(880,.35,t.pan,.005)):t.activity===`queue`?this.note(1100,.4,t.pan,.004):t.activity===`complete`&&this.note(520,.5,t.pan,.008));let r=t.walking?.44:t.riding?.65:1.7;e-this.last>r&&(this.last=e,this.note(t.walking?170:t.riding?78:330,.06,t.pan,.007/(1+t.distance/10))),(t.city===`kidneys`||t.city===`lungs`)&&e-this.water>1.1&&(this.water=e,this.note(610+Math.sin(e)*90,.22,-t.pan,.005/(1+t.distance/15)))}note(e,t,n,r){let i=this.context.currentTime,a=this.context.createOscillator(),o=this.context.createGain(),s=this.context.createStereoPanner();a.type=e<200?`triangle`:`sine`,a.frequency.setValueAtTime(e,i),a.frequency.exponentialRampToValueAtTime(e*.55,i+t),o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(r,i+.009),o.gain.exponentialRampToValueAtTime(1e-5,i+t),s.pan.value=n,a.connect(o),o.connect(s),s.connect(this.context.destination),a.start(i),a.stop(i+t+.01),a.onended=()=>{a.disconnect(),o.disconnect(),s.disconnect()}}},sp={home:[`p0`,`p4`,`p1`],muscle:[`p6`,`p7`],food:[`p1`,`p2`,`p9`],filter:[`p7`,`p8`,`p10`],neuron:[`p4`,`p5`],immune:[`p5`,`p8`,`p10`],garden:[`p2`,`p8`,`p9`]};function cp(e,t){let n=ef.filter(t=>hf(e,t.id)&&!e.buildings[t.id]);if(t===`neuron`){let t=ef.filter(t=>e.buildings[t.id]&&e.buildings[t.id]!==`garden`&&e.buildings[t.id]!==`neuron`);return n.sort((e,n)=>t.filter(e=>Math.hypot(n.x-e.x,n.z-e.z)<=11).length-t.filter(t=>Math.hypot(e.x-t.x,e.z-t.z)<=11).length||Math.hypot(e.x-5,e.z)-Math.hypot(n.x-5,n.z)),n[0]}return n.find(e=>sp[t].includes(e.id))??n[0]}function lp(e,t){let n=new Map([[`source`,0]]),r=new Map,i=new Set;for(;;){let a=null,o=1/0;for(let[e,t]of n)!i.has(e)&&t<o&&(a=e,o=t);if(!a)return null;if(a===t){let t=[],n=a;for(;n!==`source`;){let e=r.get(n);t.unshift(e.edge),n=e.node}return t.find(t=>!e.roads[t])??null}i.add(a);for(let t of rf){if(!hf(e,t.b)||t.a!==`source`&&!hf(e,t.a))continue;let s=t.a===a?t.b:t.b===a?t.a:null;if(!s||i.has(s))continue;let c=o+(e.roads[t.id]?.25:t.cost)+t.length*.4;c<(n.get(s)??1/0)&&(n.set(s,c),r.set(s,{node:a,edge:t.id}))}}}function up(e,t){if(t.cost<=e.materials)return t;let n=ef.find(t=>e.buildings[t.id]===`garden`);return{kind:`budget`,title:`先整理一点建设材料`,copy:`这一步需要 `+t.cost+` 材料，当前有 `+e.materials+`。回收设施会全额返还，布局也能重新安排。`,button:n?`回收 `+n.name+` 花园 · +2`:`查看建设指南`,target:n?`plot:`+n.id:``,cost:0,action:n?{type:`remove-building`,plot:n.id}:void 0}}function dp(e,t){let n=cp(e,t);if(!n){let t=ef.find(t=>e.buildings[t.id]===`garden`);return{kind:`budget`,title:`给新设施留一个位置`,copy:`地块已用满。可以迁移或回收一座暂时不用的建筑；材料全额返还。`,button:t?`查看花园地块`:`选择建筑整理空间`,target:t?`plot:`+t.id:``,cost:0}}return up(e,{kind:`build`,title:`建一座`+af[t].name,copy:{home:`第二个住区建好后，再接通血管，小红就能把氧气送过去。`,muscle:`肌肉工坊支持身体活动。建好后，需要给它接一条路。`,food:`食堂需要供氧才能生产营养。早餐的储备会接着支持后面的章节。`,filter:`水庭回收水分并清理代谢负担，让炎热的午后也能平稳运行。`,neuron:`这里靠近其他工作街区。黄色连线会显示它能协调哪些建筑。`,immune:`巡护站获得供给后，会帮助街角完成修复。`,garden:`在工作街区旁留个能歇脚的地方。花园也是灯火节的集合地点。`}[t]+` 推荐 `+n.name+`，也可以自己选址。`,button:`在 `+n.name+` 建造 · `+af[t].cost,target:`plot:`+n.id,cost:af[t].cost,action:{type:`build`,plot:n.id,building:t},tool:t})}function fp(e){let t=pf(e),n=yf(e),r={target:``,cost:0};if(e.phase===`complete`){let n=Qd.find(t=>!e.campaign.records[t.id]?.passed);return n?{...r,kind:`next`,title:`新的生活，在等你`,copy:t.success,button:`前往：`+n.title}:{...r,kind:`finish`,title:`属于你们的一天，完成了`,copy:`六大系统已经一起工作。继续自由建设，或重玩章节收集全部 18 颗星。`,button:`打开通关纪念册`}}if(e.phase===`walking`){if(Ef(e))return{...r,kind:`decision`,title:t.decision.title,copy:t.decision.copy,button:`等待你的安排`};let i=Af(e,n);return{...r,kind:`running`,title:i?`有个地方需要照顾`:`城市正在支持这段生活`,copy:i||`可以跟随小红观察。每一段稳定运行的时间，都会计入本章成果。`,button:i?`暂停，调整规划`:`跟随小红看看`}}let i=e.phase===`settle`?n.homes<2?`home`:void 0:Tf(e);if(i)return dp(e,i);let a=ef.find(e=>n.lots[e.id]&&!n.lots[e.id].connected);if(a){let t=lp(e,a.id);if(t){let n=rf.find(e=>e.id===t),r=tf.find(e=>e.id===n.a).name,i=tf.find(e=>e.id===n.b).name;return up(e,{kind:`connect`,title:`让供给送到 `+a.name,copy:a.name+` 已经建好了，现在还没有接通。闪光的支路会把它连回循环。`,button:`连接 `+r+` → `+i+` · `+n.cost,target:`road:`+t,cost:n.cost,action:{type:`road`,id:t},tool:`road`})}}let o=yf(e,e.phase===`settle`?1:t.peak);if(o.coverage<.985){if(o.capacity<o.demand&&o.delivered>=o.capacity-.12){let t=o.lungs<=o.heart?`lungs`:`heart`;if(e[t]<4)return up(e,{kind:`upgrade`,title:t===`lungs`?`给肺泡增加交换空间`:`让心脏送得更从容`,copy:o.issue+` 这是提高上游能力，不会自动加宽支路。`,button:(t===`lungs`?`扩建肺泡`:`升级心脏`)+` · `+Sf(e[t]),target:t,cost:Sf(e[t]),action:{type:`upgrade`,organ:t}})}let t=rf.filter(t=>(e.roads[t.id]??0)>0&&(e.roads[t.id]??0)<3&&o.edges[t.id]>=uf(e.roads[t.id])-.1).sort((e,t)=>o.edges[t.id]-o.edges[e.id])[0];if(t){let n=df(t,e.roads[t.id]);return up(e,{kind:`upgrade`,title:`给这段血管留点余量`,copy:o.issue,button:`扩容至 `+uf(e.roads[t.id]+1)+` · `+n,target:`road:`+t.id,cost:n,action:{type:`road`,id:t.id},tool:`road`})}let n=rf.filter(t=>!e.roads[t.id]&&hf(e,t.b)&&(t.a===`source`||hf(e,t.a))).map(t=>({link:t,gain:yf({...e,roads:{...e.roads,[t.id]:1}},pf(e).peak).coverage-o.coverage})).filter(e=>e.gain>.01).sort((e,t)=>t.gain/t.link.cost-e.gain/e.link.cost)[0];return n?up(e,{kind:`connect`,title:`分一条路，让循环轻松一点`,copy:`现有主路已达到容量上限。这条新支路能分担实际运输。`,button:`铺设分流支路 · `+n.link.cost,target:`road:`+n.link.id,cost:n.link.cost,action:{type:`road`,id:n.link.id},tool:`road`}):{...r,kind:`budget`,title:`给拥挤的循环减点负担`,copy:`工作街区较多。可以回收暂时不用的重复设施，或铺设一条新支路。`,button:`查看当前供给`,target:`network`}}if(e.phase===`settle`)return{...r,kind:`wait`,title:`小红正在拜访新邻居`,copy:`两个住区都已接通。稳定运行 5 秒后，居民会送来新材料。`,button:`正在安顿 · `+Math.min(5,Math.floor(e.settleTime))+` / 5 秒`};if(e.campaign.chapter>=3&&Df(e,n)<.7){let t=cp(e,`neuron`),i=ef.find(t=>e.buildings[t.id]===`neuron`);if(t&&i){let a={...e,buildings:{...e.buildings,[i.id]:void 0,[t.id]:`neuron`}};if(Df(a,yf(a))>Df(e,n)+.05)return{...r,kind:`move`,title:`把信号塔放得更居中`,copy:`当前覆盖 `+Math.round(Df(e,n)*100)+`%。迁到 `+t.name+` 能照顾更多街区；迁移后记得接通血管。`,button:`迁移到 `+t.name+` · 免费`,target:`plot:`+t.id,action:{type:`move`,from:i.id,to:t.id}}}return dp(e,`neuron`)}let s=e.campaign.resources,c=Of(e,n);return e.campaign.chapter>=1&&s.food<12?c.food<=0?dp(e,`food`):{...r,kind:`wait`,title:`让早餐先储备一点`,copy:`准备期间会快速补给，凑够 12 份就可以出发。现在 `+Math.floor(s.food)+` / 12。`,button:`食堂正在准备补给`}:e.campaign.chapter>=2&&(s.water<12||s.waste>30)?c.water<=0||c.waste>0?dp(e,`filter`):{...r,kind:`wait`,title:`让水庭整理一下循环`,copy:`准备期间快速回收。水分达到 12、代谢负担低于 30 后，出发会更从容。`,button:`水庭正在回收与过滤`}:{...r,kind:`start`,title:`准备好了，一起出发`,copy:`高峰供给 `+Math.round(o.coverage*100)+`%。本章需要稳定运行 `+t.healthy+` 秒`+(e.campaign.chapter>=4?`，并达到 95% 修复`:``)+`；可以随时暂停调整。`,button:`开始`+(e.campaign.chapter===0?`第一次散步`:`本章挑战`)+` · `+t.duration+` 秒`}}function pp(e,t){let n=e.campaign.chapter,r=Object.values(t.lots).filter(e=>e.connected).length,i=Object.keys(t.lots).length;return e.phase===`settle`?[{title:`两处细胞住区`,value:t.homes+` / 2`,done:t.homes>=2},{title:`连续稳定供给`,value:Math.min(5,Math.floor(e.settleTime))+` / 5 秒`,done:e.settleTime>=5}]:[n>=4&&e.walk?{title:`街角修复`,value:Math.floor(e.campaign.resources.repair)+` / 95%`,done:e.campaign.resources.repair>=95}:n===0?{title:`肌肉工坊`,value:t.muscles+` / 1`,done:t.muscles>=1}:n<5?{title:af[pf(e).service].name,value:_f(e,pf(e).service)+` / 1`,done:_f(e,pf(e).service)>=1}:{title:`六大系统与花园`,value:Tf(e)?`准备中`:`已就绪`,done:!Tf(e)},{title:`工作街区全部连通`,value:r+` / `+i,done:r===i},{title:`应对本章高峰`,value:Math.round(yf(e,pf(e).peak).coverage*100)+`%`,done:yf(e,pf(e).peak).coverage>=.985}]}var mp=`metabolis.planning.v2`,hp=`metabolis.planning.previous-city`,gp=e=>Math.round(e*100)+`%`,_p=e=>Number(e.toFixed(1)).toString(),Z=(e,t,n=`plan-primary`,r=``)=>`<button class="`+n+`" data-plan="`+e+`" `+r+`>`+t+`</button>`,vp=e=>`<span class="plan-stars" aria-label="`+e+`颗星">`+[0,1,2].map(t=>`<i class="`+(t<e?`earned`:``)+`">★</i>`).join(``)+`</span>`,yp=class{host;state;network;visible=!1;sidebar;hud;inspector;tool=`select`;selected=``;moving=null;guide;history=[];lastTime=0;accumulator=0;savedAt=0;saved=!0;playback=``;guideSignature=``;projectSignature=``;catalogSignature=``;panelSignature=``;resumeAfterDialog=!1;noticeTimer=null;labelsVisible=!0;constructor(e){this.host=e;let t=null;try{t=localStorage.getItem(mp)??localStorage.getItem(`metabolis.planning.v1`)}catch{this.saved=!1}this.state=zf(t),this.network=yf(this.state),this.guide=fp(this.state),this.lastTime=e.world.time,this.sidebar=document.createElement(`aside`),this.sidebar.className=`planning-sidebar`,this.sidebar.setAttribute(`aria-label`,`生活项目与建设工具`),this.sidebar.innerHTML=[`<div class="plan-intro"><span class="plan-eyebrow">ONE LITTLE TOWN · ONE WONDERFUL DAY</span><h1 id="plan-town-name"></h1><div class="plan-town-rank"><span id="plan-rank"></span>`,Z(`achievements`,`成就册 ↗`,`plan-text`),`</div></div>`,`<div class="plan-journey-strip" aria-label="六章生活旅程"></div>`,`<section class="plan-project"><div class="plan-chapter-line"><span id="plan-chapter-name"></span>`,Z(`chapters`,`旅程 ↗`,`plan-text`),`</div><h2 id="plan-task-title"></h2><div class="plan-checklist" id="plan-checklist"></div><div class="plan-walk-track" hidden><div><span id="plan-walk-phase"></span><b id="plan-walk-time"></b></div><div class="plan-progress"><i id="plan-walk-progress"></i></div><small id="plan-walk-quality"></small></div></section>`,`<section class="plan-next-step" aria-label="你的下一步"></section>`,`<div class="plan-catalog-heading"><span>自己动手规划</span>`,Z(`help`,`建设指南`,`plan-text`),`</div><div class="plan-catalog"></div>`,`<div class="plan-neighbor"><span class="plan-red-face">··</span><div><strong id="plan-neighbor-name"></strong><p id="plan-neighbor-line"></p></div></div>`,`<div class="plan-sidebar-foot"><span id="plan-save-status">自动保存 · 此浏览器</span>`,Z(`menu`,`游戏菜单`,`plan-text`),`</div>`].join(``),document.querySelector(`#app`).append(this.sidebar),this.hud=document.createElement(`div`),this.hud.className=`planning-hud`,this.hud.innerHTML=[`<div class="plan-heading"><div><span class="plan-eyebrow" id="plan-daytime"></span><h2 id="plan-scene-title"></h2></div><div class="plan-header-wallets">`,Z(`achievements`,`<span id="plan-total-stars">0</span><small>★ / 18</small>`,`plan-star-wallet`,`aria-label="查看星级与成就"`),`<div class="plan-material" title="建设消耗材料；回收全额返还。完成章节获得新材料。">`+d(`layers`)+`<span><strong id="plan-materials">24</strong><small>建设材料</small></span></div></div></div>`,`<div class="plan-scene-nav"><div class="plan-view-switch">`,Z(`view`,`立体`,``,`data-view="overview" aria-pressed="true"`),Z(`view`,`俯瞰`,``,`data-view="top" aria-pressed="false"`),Z(`view`,`跟随小红`,``,`data-view="follow" aria-pressed="false"`),`</div><div class="plan-scene-actions">`+Z(`labels`,`地名`,`plan-explore`,`aria-label="显示地名" aria-pressed="true"`)+Z(`supply`,d(`layers`)+`供给`,`plan-explore`,`aria-label="查看供给与运行状态"`)+Z(`explore`,d(`globe`)+`六城漫游`,`plan-explore`)+Z(`menu`,d(`help`),`plan-explore`,`aria-label="打开游戏菜单"`)+`</div></div>`,`<section class="plan-inspector" aria-label="建设详情"></section><div class="plan-world-footer"><div class="plan-tool-hint" id="plan-tool-hint"></div><div class="plan-control-dock">`,`<button data-plan-tool="select" aria-pressed="true">`+d(`focus`)+`选择</button><button data-plan-tool="road" aria-pressed="false">`+d(`route`)+`铺血管</button>`,Z(`undo`,d(`undo`)+`撤销`,``,`aria-label="撤销上一次建设" disabled`),`<span></span>`,Z(`pause`,d(`pause`),``,`aria-label="暂停城市"`),Z(`speed`,`1×`,`plan-speed`,`aria-label="切换运行速度"`),`<span></span>`,Z(`zoom-in`,d(`plus`),``,`aria-label="放大街区"`),Z(`zoom-out`,d(`minus`),``,`aria-label="缩小街区"`),`</div><div class="plan-footer-note"><span><i class="coral"></i>供给</span><span><i class="blue"></i>回流</span><span>拖动 360° 环绕</span>`+Z(`photo`,`拍下我的小镇 ↗`,``)+`</div></div>`,`<div class="plan-reward-notice" role="status" hidden></div>`].join(``),document.querySelector(`.exploration`).append(this.hud),this.inspector=this.hud.querySelector(`.plan-inspector`),document.addEventListener(`click`,t=>{let n=t.target.closest(`button`);if(n){if(n.dataset.planTool){this.setTool(n.dataset.planTool);return}if(n.dataset.planChoice!==void 0){this.resolveChoice(Number(n.dataset.planChoice));return}if(n.dataset.planReplay!==void 0){let t=Lf(this.state,Number(n.dataset.planReplay));if(t){e.toast(t);return}e.closeDialog(),this.changedChapter();return}if(n.dataset.planCity){e.closeDialog(),e.explore(n.dataset.planCity);return}n.dataset.plan&&this.action(n.dataset.plan,n)}}),document.querySelector(`#library-dialog`).addEventListener(`close`,()=>{!this.state.campaign.introduced&&this.visible&&(this.state.campaign.introduced=!0,this.save()),this.resumeAfterDialog&&(this.resumeAfterDialog=!1,this.host.world.paused&&this.togglePause())}),window.addEventListener(`pagehide`,()=>this.save()),document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.save()}),this.sidebar.hidden=!0,this.hud.hidden=!0}$(e){return this.hud.querySelector(e)??this.sidebar.querySelector(e)}set(e,t){let n=this.$(e);n&&n.textContent!==t&&(n.textContent=t)}togglePause(){document.querySelector(`[data-action="pause"]`).click()}dialog(e){!document.querySelector(`#library-dialog`).open&&!this.host.world.paused&&(this.resumeAfterDialog=!0,this.togglePause()),this.host.dialog(e)}open(){this.host.enter(),this.visible=!0,this.sidebar.hidden=!1,this.hud.hidden=!1,document.body.classList.add(`planning-mode`),document.querySelectorAll(`.topnav .nav-tab`).forEach(e=>e.classList.toggle(`active`,e.dataset.action===`planning`)),this.host.world.openPlanning(this.state,this.network,e=>this.pick(e)),this.tool=`select`,this.selected=``,this.invalidate(),this.refresh(),this.renderInspector(),this.state.campaign.introduced||this.welcome()}close(){this.visible=!1,this.sidebar.hidden=!0,this.hud.hidden=!0,document.body.classList.remove(`planning-mode`,`plan-evening`),this.host.world.closePlanning(),this.save()}save(){try{localStorage.setItem(mp,JSON.stringify(this.state)),this.saved=!0}catch{this.saved=!1}this.set(`#plan-save-status`,this.saved?`已保存 · 此浏览器`:`暂不能保存 · 请保持页面打开`),this.savedAt=this.state.clock}invalidate(){this.guideSignature=``,this.projectSignature=``,this.catalogSignature=``,this.panelSignature=``}snapshot(){return structuredClone({buildings:this.state.buildings,roads:this.state.roads,heart:this.state.heart,lungs:this.state.lungs,materials:this.state.materials})}commit(e){let t=this.snapshot(),n=this.state.campaign.badges.length,r=xf(this.state,e);if(r){this.host.toast(r);return}this.history.push(t),this.history.length>30&&this.history.shift();let i=jf(this.state);this.network=yf(this.state),this.save(),this.invalidate(),this.renderInspector(),this.refresh(),this.state.campaign.badges.length>n?this.notice(`获得成就 · `+$d.find(e=>e.id===i[0]).name,`每一次建设，都在让小镇长大。`):this.host.toast({build:`新的生活，已经安家。`,road:`血管连好了，路线开始运转。`,upgrade:`新的配套已经投入工作。`,move:`新位置安排好了。`,downgrade:`配套材料已返还。`,"remove-building":`材料已全额返还。`,"remove-road":`血管材料已全额返还。`}[e.type]??`建设已保存。`)}setTool(e){if(Object.hasOwn(af,e)&&!gf(this.state,e)){this.host.toast(`完成前面的生活项目，就能解锁这项建设。`);return}this.tool=e,e!==`move`&&(this.moving=null),this.refresh()}pick(e){if(e===`red`){this.selected=e,this.host.world.planning?.preset(`follow`),this.renderInspector(),this.refresh();return}if(e.startsWith(`plot:`)){let t=e.slice(5);if(this.tool===`move`&&this.moving&&t!==this.moving){if(this.state.buildings[t]){this.host.toast(`选择一块空地，把街区迁过去。`);return}let n=this.moving;this.selected=e,this.commit({type:`move`,from:n,to:t}),this.setTool(`select`);return}if(Object.hasOwn(af,this.tool)&&!this.state.buildings[t]){this.selected=e,this.commit({type:`build`,plot:t,building:this.tool}),this.setTool(`select`);return}}if(e.startsWith(`road:`)&&this.tool===`road`&&!this.state.roads[e.slice(5)]){this.selected=e,this.commit({type:`road`,id:e.slice(5)});return}this.selected=e,this.renderInspector(),this.refresh()}doGuide(){let e=fp(this.state);if(e.action){this.selected=``,this.tool=`select`,this.commit(e.action);return}switch(e.kind){case`start`:this.begin();break;case`next`:this.advanceChapter();break;case`finish`:this.ending();break;case`wait`:this.host.world.paused&&this.togglePause();break;case`running`:Af(this.state,this.network)?(this.host.world.paused||this.togglePause(),this.selected=`network`,this.renderInspector()):this.host.world.planning?.preset(`follow`);break;case`budget`:e.target?(this.selected=e.target,this.renderInspector()):this.help()}}begin(){let e=Mf(this.state);if(e){this.host.toast(e);return}this.history=[],this.selected=``,this.tool=`select`,this.host.world.paused&&this.togglePause(),this.invalidate(),this.save(),this.renderInspector(),this.refresh(),this.notice(`出发 · `+pf(this.state).title,`你的建设，正在支持大家的生活。`)}resolveChoice(e){let t=Nf(this.state,e);if(t){this.host.toast(t);return}this.save(),this.invalidate(),this.refresh(),this.host.toast(`安排好了，大家继续出发。`)}advanceChapter(){let e=If(this.state);if(e){this.host.toast(e);return}this.host.closeDialog(),this.changedChapter(),this.notice(`新的伙伴 · `+pf(this.state).companion,pf(this.state).intro)}changedChapter(){this.history=[],this.selected=``,this.tool=`select`,this.network=yf(this.state),this.invalidate(),this.save(),this.refresh(),this.renderInspector(),this.host.world.planning?.preset(`overview`),this.sidebar.scrollTop=0}action(e,t){switch(e){case`guide`:this.doGuide();break;case`choose-place`:this.guide.tool&&this.setTool(this.guide.tool);break;case`view`:this.host.world.planning?.preset(t.dataset.view),this.hud.querySelectorAll(`[data-plan="view"]`).forEach(e=>e.setAttribute(`aria-pressed`,String(e===t)));break;case`closeup`:this.host.world.planning?.focusPlot(this.selected.slice(5));break;case`explore`:this.host.explore();break;case`supply`:this.selected=`network`,this.renderInspector();break;case`labels`:this.labelsVisible=!this.labelsVisible,t.setAttribute(`aria-pressed`,String(this.labelsVisible)),this.host.world.planning?.setLabels(this.labelsVisible);break;case`close-detail`:this.selected=``,this.setTool(`select`),this.renderInspector();break;case`build`:this.commit({type:`build`,plot:this.selected.slice(5),building:t.dataset.building}),this.setTool(`select`);break;case`road`:this.commit({type:`road`,id:this.selected.slice(5)});break;case`upgrade`:this.commit({type:`upgrade`,organ:t.dataset.organ});break;case`downgrade`:this.commit({type:`downgrade`,organ:t.dataset.organ});break;case`remove`:this.commit(this.selected.startsWith(`plot:`)?{type:`remove-building`,plot:this.selected.slice(5)}:{type:`remove-road`,id:this.selected.slice(5)});break;case`move`:this.moving=this.selected.slice(5),this.setTool(`move`);break;case`undo`:{let e=this.history.pop();e&&(Object.assign(this.state,e),this.network=yf(this.state),this.save(),this.invalidate(),this.renderInspector(),this.refresh(),this.host.toast(`已撤销上一次建设。`));break}case`pause`:this.togglePause(),this.refresh();break;case`speed`:document.querySelector(`[data-action="speed"]`).click(),this.refresh();break;case`zoom-in`:this.host.world.planning?.zoom(.25);break;case`zoom-out`:this.host.world.planning?.zoom(-.25);break;case`walk`:this.host.closeDialog(),this.begin();break;case`next`:this.advanceChapter();break;case`report`:this.report();break;case`ending`:this.ending();break;case`help`:this.help();break;case`menu`:this.menu();break;case`chapters`:this.journey();break;case`achievements`:this.achievements();break;case`resume`:this.state.campaign.introduced=!0,this.save(),this.host.closeDialog();break;case`guided`:this.state.campaign.guided=!this.state.campaign.guided,this.invalidate(),this.save(),this.refresh(),this.menu();break;case`rename`:{let e=document.querySelector(`#plan-name-input`);e?.value.trim()&&(this.state.campaign.townName=e.value.trim().slice(0,20),this.save(),this.refresh(),this.host.toast(`小镇的新名字已保存。`));break}case`cancel-round`:this.state.phase=`prepare`,this.state.walk=null,this.history=[],this.host.closeDialog(),this.changedChapter();break;case`restart`:this.dialog(`<div class="dialog-kicker">A NEW LITTLE WORLD</div><h2 id="dialog-title">再建设一个新小镇？</h2><p class="dialog-intro">当前小镇会保留为上一座城市，可以从菜单恢复。探索手记和港口故事保留。</p>`+Z(`restart-confirm`,`保留备份，开始新小镇`)+Z(`menu`,`返回菜单`,`plan-text`));break;case`restart-confirm`:try{localStorage.setItem(hp,JSON.stringify(this.state)),this.state=lf(),this.network=yf(this.state),this.history=[],this.host.world.openPlanning(this.state,this.network,e=>this.pick(e)),this.changedChapter(),this.welcome()}catch{this.host.toast(`浏览器不能保存备份，当前小镇已保留。`)}break;case`restore`:try{let e=localStorage.getItem(hp);e&&(localStorage.setItem(hp,JSON.stringify(this.state)),this.state=zf(e),this.network=yf(this.state),this.host.closeDialog(),this.host.world.openPlanning(this.state,this.network,e=>this.pick(e)),this.changedChapter())}catch{this.host.toast(`暂时无法恢复备份。`)}break;case`photo`:this.photo()}}tick(e){let t=Math.max(0,Math.min(1,e-this.lastTime));if(this.lastTime=e,!this.visible)return;let n=this.host.world.paused+`/`+this.host.world.speed;if(n!==this.playback&&(this.playback=n,this.refresh()),this.accumulator+=t,this.accumulator<.2)return;let r=this.accumulator;this.accumulator=0;let i=this.state.phase,a=this.state.campaign.badges.length,o=Ff(this.state,r);if(this.network=yf(this.state),o.length&&(this.save(),i!==this.state.phase&&(this.history=[])),i!==this.state.phase&&(this.invalidate(),this.renderInspector()),this.refresh(),this.state.clock-this.savedAt>=5&&this.save(),i===`walking`&&this.state.phase!==`walking`)this.host.world.planning?.preset(`overview`),this.report();else if(i===`settle`&&this.state.phase===`prepare`)this.notice(`安家完成 · +6 建设材料`,`小红已经拜访了两处住区。下一步，准备第一次散步。`),this.sidebar.scrollTop=0;else if(this.state.campaign.badges.length>a){let e=this.state.campaign.badges[a];this.notice(`获得成就 · `+$d.find(t=>t.id===e).name,`这份成长，已经记进小镇的成就册。`)}}refresh(){if(!this.visible)return;let e=this.state,t=this.network,n=pf(e);document.body.classList.toggle(`plan-evening`,e.campaign.chapter===5),this.set(`#plan-town-name`,e.campaign.townName),this.set(`#plan-rank`,e.campaign.sandbox?`生命建筑师`:Rf(e)>=8?`街区守护者`:`见习规划师`),this.set(`#plan-materials`,String(e.materials)),this.set(`#plan-total-stars`,String(Rf(e))),this.set(`#plan-daytime`,n.time+` · 身体的一天 · `+n.system),this.set(`#plan-scene-title`,n.title),this.guide=fp(e),this.renderProject(),this.renderGuide(),this.renderCatalog(),this.sidebar.querySelectorAll(`[data-plan-tool]`).forEach(e=>{e.classList.toggle(`active`,e.dataset.planTool===this.tool),e.setAttribute(`aria-pressed`,String(e.dataset.planTool===this.tool))}),this.hud.querySelectorAll(`[data-plan-tool]`).forEach(e=>{e.classList.toggle(`active`,e.dataset.planTool===this.tool),e.setAttribute(`aria-pressed`,String(e.dataset.planTool===this.tool))});let r=this.tool===`move`?`点击空地完成迁移 · 迁移后检查连接`:Object.hasOwn(af,this.tool)?`点击一块空地建设`+af[this.tool].name+` · `+af[this.tool].cost+` 材料`:this.tool===`road`?`点击 ＋ 铺路 · 点击已有血管可扩容`:`点击建筑查看细节 · 拖动 360° 环绕`;this.set(`#plan-tool-hint`,this.host.world.paused?`已暂停 · 可以放心建设与观察`:Ef(e)?`挑战暂停，等待你的安排`:r),this.$(`[data-plan="undo"]`).disabled=!this.history.length;let i=this.$(`[data-plan="pause"]`),a=this.host.world.paused?`继续城市运行`:`暂停城市`;i.getAttribute(`aria-label`)!==a&&(i.innerHTML=d(this.host.world.paused?`play`:`pause`),i.setAttribute(`aria-label`,a)),this.set(`[data-plan="speed"]`,this.host.world.speed+`×`),this.set(`#plan-neighbor-name`,n.companion+`的街区来信`),this.set(`#plan-neighbor-line`,e.phase===`complete`?n.success:e.phase===`walking`?Ef(e)?n.decision.copy:`你建的路、房子和配套，正在支持我们完成这一段生活。`:n.intro),this.refreshDetail(),this.host.world.planning?.sync(e,t,this.tool,this.selected),this.host.world.planning?.guide(e.campaign.guided?this.guide.target:``),this.host.world.planning?.setLabels(this.labelsVisible)}renderProject(){let e=this.state,t=pf(e),n=pp(e,this.network),r=JSON.stringify([e.campaign.chapter,e.phase,n,e.campaign.records]);if(r!==this.projectSignature&&(this.projectSignature=r,this.set(`#plan-chapter-name`,`第 `+(e.campaign.chapter+1)+` / 6 章 · `+t.time),this.set(`#plan-task-title`,e.phase===`settle`?`先给新邻居一个家`:e.phase===`complete`?`这段生活，是你建起来的`:e.phase===`walking`?`正在发生 · `+t.title:`这一章，我们要准备`),this.$(`#plan-checklist`).innerHTML=n.map(e=>`<div class="`+(e.done?`done`:``)+`"><i></i><span>`+e.title+`</span><b>`+e.value+`</b></div>`).join(``),this.$(`.plan-walk-track`).hidden=!e.walk,this.$(`.plan-journey-strip`).innerHTML=Qd.map((t,n)=>`<button data-plan="chapters" class="`+(n===e.campaign.chapter?`current `:``)+(e.campaign.records[t.id]?`done`:``)+`" aria-label="第`+(n+1)+`章 `+t.title+`">`+d(t.icon)+(e.campaign.records[t.id]?`<small>✓</small>`:`<small>`+(n+1)+`</small>`)+`</button>`).join(``)),e.walk){let n=e.walk.elapsed/t.duration;this.set(`#plan-walk-phase`,Ef(e)?`等待你的安排`:n<.2?`出发 · 慢慢适应`:n<.8?`忙碌时刻 · 系统协作`:`收尾 · 回到日常`),this.set(`#plan-walk-time`,Math.floor(e.walk.elapsed)+` / `+t.duration+` 秒`),this.$(`#plan-walk-progress`).style.width=n*100+`%`,this.set(`#plan-walk-quality`,`稳定运行 `+Math.floor(e.walk.healthy)+` / `+t.healthy+` 秒`+(e.campaign.chapter>=4?` · 修复 `+Math.floor(e.campaign.resources.repair)+`%`:``))}}renderGuide(){let e=this.state,t=this.guide,n=pf(e),r=JSON.stringify([t,e.campaign.guided,e.walk?.choice,this.host.world.paused]);if(r===this.guideSignature)return;this.guideSignature=r;let i=document.activeElement?.dataset?.plan===`guide`,a=`<div class="plan-next-eyebrow"><span>`+(t.kind===`decision`?`街坊的小请求`:t.kind===`running`?`现在，看看你的成果`:`你的下一步`)+`</span><span>`+(t.kind===`start`?`准备就绪`:`小红陪你一起`)+`</span></div><h3>`+t.title+`</h3><p>`+t.copy+`</p>`;t.kind===`decision`?a+=`<div class="plan-decision-options">`+n.decision.choices.map((e,t)=>`<button data-plan-choice="`+t+`"><strong>`+e.title+`</strong><small>`+e.copy+`</small></button>`).join(``)+`</div>`:!e.campaign.guided&&e.phase!==`walking`&&e.phase!==`complete`?a=`<div class="plan-next-eyebrow">自由规划</div><h3>自己安排小镇的布局</h3><p>建设工具和供给卡会说明当前情况。需要时可以从菜单重新开启引导。</p>`+Z(`walk`,`开始本章挑战`)+Z(`menu`,`重新开启引导`,`plan-text`):a+=Z(`guide`,t.kind===`wait`&&this.host.world.paused?`继续运行，等待准备完成`:t.button,`plan-primary`,`id="plan-next-action" `+(t.kind===`wait`&&!this.host.world.paused?`disabled`:``))+(t.tool&&t.kind===`build`?Z(`choose-place`,`我想自己选择位置`,`plan-text`):``),t.kind===`start`&&(a+=`<div class="plan-bonus-note">★ 额外一星：`+n.bonus+`</div>`),e.lastResult&&e.phase!==`walking`&&(a+=Z(`report`,`回顾本章成果`,`plan-text`)),this.$(`.plan-next-step`).innerHTML=a,i&&this.$(`#plan-next-action`)?.focus({preventScroll:!0})}renderCatalog(){let e=mf(this.state),t=e+`/`+(this.state.phase===`settle`);if(t===this.catalogSignature)return;this.catalogSignature=t;let n=Object.keys(af).filter(t=>gf(this.state,t)||[`food`,`filter`,`neuron`,`immune`].indexOf(t)===e);this.$(`.plan-catalog`).innerHTML=`<button data-plan-tool="road"><span class="plan-tool-icon route">`+d(`route`)+`</span><span><strong>血管</strong><small>连接与扩容</small></span><b>1+</b></button>`+n.map(e=>`<button data-plan-tool="`+e+`" `+(gf(this.state,e)?``:`disabled`)+`><span class="plan-tool-icon `+e+`">`+d(sf[e])+`</span><span><strong>`+af[e].name+`</strong><small>`+(gf(this.state,e)?e===`garden`?`布置街角`:`需要供给`:`完成当前阶段解锁`)+`</small></span><b>`+af[e].cost+`</b></button>`).join(``)}renderInspector(){let e=this.state,t=this.network,n=this.selected,r=``,i=n?Z(`close-detail`,`×`,`plan-detail-close`,`aria-label="关闭建设详情"`):``;if(n.startsWith(`plot:`)){let t=n.slice(5),i=ef.find(e=>e.id===t);if(!i)return;let a=e.buildings[t];r=`<span class="plan-small">`+i.name+` · 街区地块</span><h3>`+(a?af[a].name:`这里，等待新生活。`)+`</h3>`,r+=a?`<p>`+af[a].description+`</p>`+(a===`garden`?``:`<div class="plan-detail-value"><span>当前供给</span><strong id="plan-selected-supply"></strong></div><p id="plan-selected-route" class="plan-route-note"></p>`)+`<div class="plan-detail-actions">`+Z(`closeup`,`走近街区`,``)+Z(`move`,`迁移到空地`,``)+Z(`remove`,`回收 · +`+af[a].cost,``)+`</div>`:`<p>选一项建设。建好后接通血管，小红就能来到这里。</p><div class="plan-build-options">`+Object.keys(af).filter(t=>gf(e,t)).map(e=>Z(`build`,`<span>`+af[e].name+`<small>`+(e===`garden`?`装饰街角`:`日常需求 `+af[e].demand)+`</small></span><b>`+af[e].cost+` 材料</b>`,``,`data-building="`+e+`"`)).join(``)+`</div>`}else if(n.startsWith(`road:`)){let t=n.slice(5),i=rf.find(e=>e.id===t);if(!i)return;let a=e.roads[t]??0;r=`<span class="plan-small">成对建设 · 供给与回流</span><h3>`+bf(i)+`</h3><p>这段容量会被沿途街区共同使用。扩容或分流，都能帮助后面的邻居。</p><div class="plan-detail-value"><span>当前运输 / 容量</span><strong id="plan-selected-flow"></strong></div>`+Z(`road`,a===3?`已达到最大容量`:a?`扩容至 `+uf(a+1)+` · `+df(i,a)+` 材料`:`铺设这段血管 · `+i.cost+` 材料`,`plan-primary`,a===3?`disabled`:``)+(a?Z(`remove`,`回收血管 · +`+ff(i,a),`plan-text`):``)}else if(n===`heart`||n===`lungs`){let i=n===`heart`,a=e[n];r=`<span class="plan-small">`+a+` / 4 级配套</span><h3>`+(i?`心脏循环站`:`肺泡云朵港`)+`</h3><p>`+(i?`把完成交换的血液送往街区。要一起照顾肺泡交换和下游道路。`:`为经过的血液交换氧气与二氧化碳。加大交换能力后，还需要有足够的输送空间。`)+`</p><div class="plan-detail-value"><span>`+(i?`输送能力`:`交换能力`)+`</span><strong>`+(i?t.heart:t.lungs)+`</strong></div>`+Z(`upgrade`,a>=4?`配套已完整`:`增加配套 · `+Sf(a)+` 材料`,`plan-primary`,`data-organ="`+n+`" `+(a>=4?`disabled`:``))+(a>1?Z(`downgrade`,`回收一级 · +`+Sf(a-1),`plan-text`,`data-organ="`+n+`"`):``)+`<button class="plan-text" data-plan-city="`+(i?`heart`:`lungs`)+`">走进完整`+(i?`心脏城`:`肺泡港`)+` ↗</button>`}else r=n===`red`?`<span class="plan-small">你的第一位伙伴</span><h3>小红 · 氧气配送员</h3><p>你把路接到哪里，我就能去拜访哪里的邻居。今天，我们会一起认识五位新伙伴。</p><p>我按实际连接的路线走。拖动镜头，就能结束跟随。</p>`+Z(`view`,`回到整个小镇`,`plan-primary`,`data-view="overview"`):`<span class="plan-small">小镇运行室</span><h3 id="plan-status-title"></h3><div class="plan-supply-summary"><div><span>当前供氧</span><strong id="plan-coverage"></strong></div><div><span>本章高峰预览</span><strong id="plan-forecast-value"></strong></div></div><p class="plan-diagnosis" id="plan-diagnosis"></p><div class="plan-resource-list"></div><p class="plan-route-note" id="plan-forecast-note"></p>`;this.inspector.innerHTML=i+r,this.inspector.classList.toggle(`has-selection`,!!n),this.panelSignature=``,this.refreshDetail()}refreshDetail(){let e=(e,t)=>{let n=this.inspector.querySelector(e);n&&n.textContent!==t&&(n.textContent=t)},t=this.state,n=this.network,r=pf(t);e(`#plan-coverage`,gp(n.coverage));let i=yf(t,r.peak);e(`#plan-forecast-value`,gp(i.coverage)),e(`#plan-status-title`,Af(t,n)?`有个地方需要照顾`:`生活，正在顺畅发生`),e(`#plan-diagnosis`,Af(t,n)||`当前供给稳定。每一条连接都在支持街区里的生活。`),e(`#plan-forecast-note`,i.coverage<.985?i.issue:`供氧 `+_p(n.delivered)+` / 需求 `+_p(n.demand)+` · 肺泡 `+n.lungs+` / 心脏 `+n.heart);let a=this.inspector.querySelector(`.plan-resource-list`);if(a){let e=t.campaign.resources,r=mf(t),i=Df(t,n),o=[...r>=1?[{label:`营养储备`,value:Math.floor(e.food)+` / 40`,ratio:e.food/40,icon:`gut`,bad:e.food<5}]:[],...r>=2?[{label:`水分储备`,value:Math.floor(e.water)+` / 40`,ratio:e.water/40,icon:`kidneys`,bad:e.water<5},{label:`代谢负担`,value:Math.ceil(e.waste)+` · 越低越好`,ratio:1-e.waste/80,icon:`layers`,bad:e.waste>40}]:[],...r>=3?[{label:`信号覆盖`,value:gp(i),ratio:i,icon:`brain`,bad:i<.7}]:[],...r>=4?[{label:`街角修复`,value:gp(e.repair/100),ratio:e.repair/100,icon:`immune`,bad:e.repair<95}]:[]],s=JSON.stringify(o);s!==this.panelSignature&&(this.panelSignature=s,a.innerHTML=o.map(e=>`<div class="plan-resource `+(e.bad?`low`:``)+`"><span>`+d(e.icon)+e.label+`</span><b>`+e.value+`</b><i><em style="width:`+Math.max(0,Math.min(100,e.ratio*100))+`%"></em></i></div>`).join(``))}if(this.selected.startsWith(`plot:`)){let t=n.lots[this.selected.slice(5)];t&&(e(`#plan-selected-supply`,gp(t.ratio)+` · `+_p(t.delivered)+` / `+_p(t.demand)),e(`#plan-selected-route`,t.connected?t.ratio>=.95?`小红已经能到这里，居民正在工作与休息。`:n.issue:`这里还没有接通。跟随左侧“下一步”，或自己铺设血管。`))}if(this.selected.startsWith(`road:`)){let r=this.selected.slice(5);e(`#plan-selected-flow`,_p(n.edges[r]??0)+` / `+uf(t.roads[r]??0))}}notice(e,t){this.noticeTimer&&clearTimeout(this.noticeTimer);let n=this.$(`.plan-reward-notice`);n.hidden=!1,n.innerHTML=`<span>`+d(`spark`)+`</span><div><strong>`+Id(e)+`</strong><p>`+Id(t)+`</p></div>`,this.noticeTimer=setTimeout(()=>{n.hidden=!0},5200)}welcome(){let e=this.state.completed>0||_f(this.state,`home`)>1;this.dialog(`<div class="plan-welcome-hero"><span class="plan-welcome-cell">··</span><div class="dialog-kicker">METABOLIS · 身体的一天</div><h2 id="dialog-title">`+(e?`欢迎回来，街坊们都在。`:`从一间小屋，建起有生命的城市。`)+`</h2><p class="dialog-intro">`+(e?`你的建筑、材料和已有成果都保留了。现在可以沿着六个生活项目，把小镇建设到灯火节。`:`我是小红，今天想和你一起照顾这个小世界。先安家，再连接，最后看大家用上你建好的城市。`)+`</p></div><div class="plan-welcome-steps"><div>`+d(`home`)+`<strong>建起来</strong><span>每次只做一个明确的小目标</span></div><div>`+d(`route`)+`<strong>连起来</strong><span>看供给真正送到居民门口</span></div><div>`+d(`spark`)+`<strong>一起生活</strong><span>六章旅程、永久成就和结局</span></div></div><p class="plan-welcome-note">左侧“你的下一步”会指出位置与花费。你也可以自己选址；回收全额返还，随时可以调整。</p>`+Z(`resume`,e?`接着建设我的小镇 →`:`和小红一起开始 →`))}report(){let e=this.state.lastResult;if(!e)return;let t=pf(this.state),n=e.passed,r=Qd.every(e=>this.state.campaign.records[e.id]?.passed),i=n?r?Z(`ending`,`翻开通关纪念册 →`):Z(`next`,`迎接下一段生活 →`):Z(`resume`,`带着提示回去调整 →`);this.dialog(`<div class="plan-result-emblem `+(n?`success`:``)+`">`+d(n?t.icon:`route`)+`</div><div class="dialog-kicker">`+(n?`你建的城市，做到了`:`每次尝试，都有新的发现`)+`</div><h2 id="dialog-title">`+(n?t.title+`，完成！`:`这次差一点，我们再调一调。`)+`</h2>`+vp(e.stars??0)+`<p class="dialog-intro">`+Id(n?t.success:e.issue)+`</p><div class="plan-report-values"><div><strong>`+Math.floor(e.healthy)+` 秒</strong><span>稳定运行 · 目标 `+t.healthy+` 秒</span></div><div><strong>`+gp(e.coverage)+`</strong><span>全程平均供氧</span></div></div>`+(n?`<div class="plan-earned-gift">`+d(`flag`)+`<div><strong>`+(e.reward?`获得 `+e.reward+` 份材料`:`本章已完成 · 最佳星级已保留`)+`</strong><p>永久留下：`+t.keepsake+`</p></div></div>`:`<p class="plan-report-reward">布局与材料全部保留。重试免费，下一步会指出可以改进的地方。</p>`)+`<div class="plan-star-conditions"><span>★ 完成本章目标</span><span class="`+(e.healthy>=t.duration*.95?`done`:``)+`">★ 至少 95% 的时间稳定运行</span><span class="`+(e.bonus?`done`:``)+`">★ `+t.bonus+`</span></div><div class="plan-result-actions">`+i+Z(`resume`,`回小镇看看`,`plan-text`)+`</div><p class="science-note">`+t.lesson+` 容量与时间为游戏参数。</p>`)}journey(){let e=this.state;this.dialog(`<div class="dialog-kicker">身体的一天 · 六章完整旅程</div><h2 id="dialog-title">让每一次建设，都有下一段生活。</h2><p class="dialog-intro">同一座小镇会一直保留。每章带来新的设施、伙伴和永久纪念物，最后一起举办灯火节。</p><div class="plan-chapter-grid">`+Qd.map((t,n)=>`<article class="`+(n===e.campaign.chapter?`current`:``)+`"><span>`+t.time+` · `+t.system+`</span><h3>`+d(t.icon)+t.title+`</h3><p>`+t.intro+`</p>`+vp(e.campaign.records[t.id]?.stars??0)+(n<=mf(e)?`<button class="plan-primary" data-plan-replay="`+n+`" `+(e.phase===`walking`?`disabled`:``)+`>`+(e.campaign.records[t.id]?`重玩，争取更多星`:`前往这一章`)+`</button>`:`<small>完成前一章后开放</small>`)+`</article>`).join(``)+`</div>`)}achievements(){let e=this.state;this.dialog(`<div class="dialog-kicker">`+Id(e.campaign.townName)+` · 永久成就</div><h2 id="dialog-title">这些变化，都是你带来的。</h2><div class="plan-achievement-total"><strong>`+Rf(e)+` <small>/ 18 ★</small></strong><span>`+e.campaign.badges.length+` / `+$d.length+` 枚纪念徽章</span></div><div class="plan-badge-grid">`+$d.map(t=>`<article class="`+(e.campaign.badges.includes(t.id)?`earned`:``)+`">`+d(t.icon)+`<div><strong>`+t.name+`</strong><p>`+t.copy+`</p></div><span>`+(e.campaign.badges.includes(t.id)?`✓`:`未完成`)+`</span></article>`).join(``)+`</div>`+Z(`chapters`,`查看每章星级 →`))}ending(){if(!this.state.campaign.records.festival){this.journey();return}let e=this.state;this.dialog(`<div class="plan-ending-lights"><i></i><i></i><i></i><i></i><i></i></div><div class="dialog-kicker">THE FIRST DAY, BUILT BY YOU</div><h2 id="dialog-title">`+Id(e.campaign.townName)+`，灯亮了。</h2><p class="dialog-intro">小红送完了最后一趟补给，芽芽收起餐篮，澄澄听着水声，闪闪哼起旋律，团团坐在街角。大家想对你说：谢谢你，把这里建成了一个家。</p><div class="plan-ending-seals">`+Qd.map(t=>`<div>`+d(t.icon)+`<strong>`+t.title+`</strong>`+vp(e.campaign.records[t.id]?.stars??0)+`</div>`).join(``)+`</div><div class="plan-earned-gift">`+d(`spark`)+`<div><strong>自由建设已开放 · `+Rf(e)+` / 18 星</strong><p>十六块土地和全部设施保留。继续布置小镇、拍照，或重玩章节挑战满星。</p></div></div>`+Z(`resume`,`回到灯火中的小镇 →`)+Z(`photo`,`拍一张通关纪念照`,`plan-text`)+Z(`chapters`,`重玩章节，收集星星`,`plan-text`))}help(){this.dialog(`<div class="dialog-kicker">和小红一起，慢慢学会</div><h2 id="dialog-title">每次，只照顾好下一步。</h2><div class="plan-guide"><p><b>看左侧“你的下一步”</b>按钮会写明地点和材料，点击就能完成这一步。地图上闪光的位置与它对应。想自己设计，可以在建设工具里选建筑，再点空地。</p><p><b>建筑先安家，血管再接通</b>未连接的建筑不会得到供给。红、蓝成对血管提供供给与回流；沿途街区共享道路容量。上游和道路要一起考虑。</p><p><b>用生活事件检验规划</b>准备好后开始本章挑战。稳定运行达到目标即可过关；途中有一个小安排需要你来决定。可以暂停改建，失败不扣材料。</p><p><b>每章留下真实的成长</b>早餐解锁东岸，旋律解锁南岸。食堂、水庭、信号塔和巡护站会继续参与后面的挑战。星级和纪念徽章永久保留。</p><p><b>放心尝试</b>回收全额返还，迁移免费，可以撤销最近建设。准备期快速补给；离开建设模式、关闭页面和等待事件选择时，不会偷偷消耗挑战进度。</p></div><p class="science-note">所有数值为游戏平衡参数。城市、居民和设备是人体过程的拟人化表达。</p>`)}menu(){let e=!1;try{e=!!localStorage.getItem(hp)}catch{}this.dialog(`<div class="dialog-kicker">MY LITTLE LIVING WORLD</div><h2 id="dialog-title">继续照顾你的小镇。</h2><label class="plan-name-label" for="plan-name-input">小镇名字</label><div class="plan-name-form"><input id="plan-name-input" maxlength="20" value="`+Id(this.state.campaign.townName)+`">`+Z(`rename`,`保存名字`,`plan-primary`)+`</div><div class="plan-menu-grid">`+Z(`resume`,`继续建设 →`)+Z(`chapters`,`六章旅程`,`plan-menu-button`)+Z(`achievements`,`成就与星级`,`plan-menu-button`)+Z(`help`,`建设指南`,`plan-menu-button`)+Z(`guided`,`下一步引导：`+(this.state.campaign.guided?`开启`:`关闭`),`plan-menu-button`)+(this.state.phase===`walking`?Z(`cancel-round`,`结束本轮，保留布局`,`plan-menu-button`):Z(`walk`,`直接开始本章挑战`,`plan-menu-button`))+Z(`restart`,`再建设一个新小镇`,`plan-menu-button`)+(e?Z(`restore`,`切换到上一座小镇`,`plan-menu-button`):``)+`</div><p class="science-note">进度保存在此浏览器。菜单打开时暂停。重开会备份上一座小镇；探索手记与港口故事独立保存。</p>`)}photo(){let e=this.host.world.capture();this.dialog(`<div class="dialog-kicker">A LITTLE WORLD, BUILT BY YOU</div><h2 id="dialog-title">`+Id(this.state.campaign.townName)+`，这是我们的生活。</h2><img class="plan-postcard" src="`+e+`" alt="自己建设的生命小镇"><p class="dialog-intro">`+Object.keys(this.state.campaign.records).length+` / 6 章完成 · `+Rf(this.state)+` 颗星 · `+this.state.campaign.badges.length+` 枚纪念徽章</p><a class="primary-button" href="`+e+`" download="metabolis-my-town.jpg">保存城市照片 ↓</a>`)}},Q=e=>document.querySelector(e),bp=`metabolis.explored.v1`,xp=[];try{xp=l(localStorage.getItem(bp))}catch{}var Sp=null,Cp=-1,wp=!1,Tp=null,Ep=-1,$=null,Dp=null,Op=null,kp=null,Ap=null,jp=null,Mp;document.querySelector(`#app`).innerHTML=`
  <header class="topbar">
    <a class="brand" href="#" aria-label="Metabolis 返回建设街区"><span class="brand-mark">${d(`spark`)}</span><span>metabolis<span class="brand-caption">生命群岛</span></span></a>
    <nav class="topnav" aria-label="主导航"><button class="nav-tab active" data-action="planning">建设生活<span>BUILD & GROW</span></button><button class="nav-tab" data-action="overview">漫游群岛<span>EXPLORE</span></button><button class="nav-tab" data-action="atlas">城市图鉴<span>FIELD GUIDE</span></button><button class="nav-tab" data-exp="journal">探索手记<span>JOURNAL</span></button></nav>
    <div class="header-tools"><span class="live-status"><i></i>生命，正在发生</span><button class="icon-button" data-action="sound" aria-label="开启城市环境声" title="城市环境声">${d(`mute`)}</button><button class="icon-button" data-action="about" aria-label="了解这个世界" title="了解这个世界">${d(`help`)}</button></div>
  </header>
  <aside class="sidebar">
    <div class="intro"><div class="eyebrow"><span></span>A LITTLE WORLD WITHIN</div><h1>身体里，<br>住着一座城<span>。</span></h1><p>穿过血管的小径，拜访忙碌的细胞。<br>一起看看，生命如何悄悄运转。</p></div>
    <div class="city-nav-heading"><span>六座城市，一个生命</span><span>01 — 06</span></div>
    <nav class="city-nav" aria-label="人体城市">${e.map((e,t)=>`<button class="city-link" data-city="${e.id}" style="--city:${e.color};--pale:${e.pale}" aria-label="${e.name}"><span class="city-symbol">${d(e.id)}</span><span class="city-link-copy"><strong>${e.name}</strong><small>${e.system}</small></span><span class="city-link-end">${String(t+1).padStart(2,`0`)}</span></button>`).join(``)}</nav>
    <div class="sidebar-bottom"><div class="passport"><div><span>${d(`book`)} 我的探索手记</span><b id="progress-count">${xp.length}<small> / 6</small></b></div><div class="progress-track"><i id="progress-bar" style="width:${xp.length/6*100}%"></i></div><p id="progress-caption">每一次好奇，都值得被记住。</p></div>
    <button class="journey-launch" data-action="tour" aria-label="开始红细胞旅行" title="跟随红细胞小红旅行"><span class="rbc-avatar"><i></i><b>··</b></span><span><small>跟着小红出发</small><strong>一颗红细胞的旅行 ${d(`arrow`)}</strong></span></button></div>
    <div class="sidebar-foot">一个关于你自己的微观世界 <span>✳</span></div>
  </aside>
  <main class="exploration" aria-label="生命群岛互动世界">
    <div class="world-viewport"><div id="world"></div><div id="map-labels"></div><div class="world-vignette"></div></div>
    <div class="world-heading"><span class="tiny-label">THE LIVING ARCHIPELAGO</span><div><span class="world-location">群岛全景</span><span class="world-location-en">一切相连，生生不息</span></div></div>
    <div class="city-toolbar" aria-label="城市观察工具" hidden><button data-action="overview" class="city-back">← 群岛</button><span></span><button data-camera="city" class="active">全城视角</button><button data-camera="street">街区近景</button><button data-poi="life" class="life-entry">街角生活</button><button data-camera="top">俯瞰规划</button><button data-exp="menu" class="discover-entry">居民与发现</button><button data-exp="lens">观察窗</button><span></span><button data-action="orbit" aria-pressed="false">↻ 自动环绕</button><button data-action="labels" aria-pressed="true">地标</button><button data-action="immersion" aria-pressed="false">展开视野</button></div>
    <div class="vitals" aria-label="城市模拟状态"><div class="vital heart-vital">${d(`heart`)}<span><b id="heart-value">72</b><small>心跳 / 分</small></span><svg viewBox="0 0 48 24" class="pulse-line"><path d="M0 13h10l4-4 5 12 6-20 4 12h19"/></svg></div><div class="vital">${d(`lungs`)}<span><b id="breath-value">14</b><small>呼吸 / 分</small></span></div><span class="sim-label">示意模拟</span></div>
    <div class="map-note"><span class="map-note-star">✳</span><span>欢迎来到，你的身体。</span></div>
    <div class="legend"><span><i class="oxygen"></i>富氧血流</span><span><i class="return"></i>低氧血流</span><span><i class="signal"></i>神经信号</span></div>
    <section id="inspector" class="inspector" aria-label="城市观察卡" hidden></section>
    <section id="tour-card" class="tour-card" aria-label="红细胞旅行" hidden></section>
    <div class="view-controls"><button class="icon-button" data-action="zoom-in" aria-label="放大地图" title="放大">${d(`plus`)}</button><button class="icon-button" data-action="zoom-out" aria-label="缩小地图" title="缩小">${d(`minus`)}</button><span></span><button class="icon-button" data-action="reset" aria-label="返回全景" title="返回全景">${d(`focus`)}</button></div>
    <div class="bottom-area"><div class="world-message"><i></i><span id="mode-message">${t.rest.message}</span></div><div class="simulation-dock"><div class="dock-label">如果此刻…<small>A DAY IN YOUR BODY</small></div><div class="mode-buttons" role="group" aria-label="生活状态">${Object.keys(t).map((e,t)=>`<button class="mode-button ${e===`rest`?`active`:``}" data-mode="${e}" aria-pressed="${e===`rest`}">${d([`sun`,`walk`,`meal`,`moon`][t])}<span>${[`休息`,`散步`,`进食`,`睡眠`][t]}</span></button>`).join(``)}</div><div class="playback"><button class="icon-button" data-action="pause" aria-label="暂停模拟" title="暂停">${d(`pause`)}</button><button class="speed-button" data-action="speed" aria-label="切换模拟速度">1×</button></div></div><div class="map-help"><span>拖动探索</span><i>·</i><span>滚轮缩放</span><i>·</i><span>点击城市发现更多</span></div></div>
    <div id="toast" class="toast" role="status" hidden></div>
  </main>
  <dialog id="library-dialog" aria-labelledby="dialog-title"></dialog>
`;function Np(){Q(`#progress-count`).innerHTML=`${xp.length}<small> / 6</small>`,Q(`#progress-bar`).style.width=`${xp.length/6*100}%`,Q(`#progress-caption`).textContent=xp.length===6?`六城足迹已集齐，继续发现城市间的联系。`:`每一次好奇，都值得被记住。`,document.querySelectorAll(`.city-link`).forEach(e=>{let t=xp.includes(e.dataset.city);e.classList.toggle(`visited`,t),t&&(e.querySelector(`.city-link-end`).innerHTML=d(`check`))})}function Pp(e){if(!xp.includes(e)){xp.push(e),Np();try{localStorage.setItem(bp,JSON.stringify(xp))}catch{}xp.length===6&&Fp(`六座城都留下了你的足迹。群岛探索完成！`)}}function Fp(e){clearTimeout(Mp),Q(`#toast`).textContent=e,Q(`#toast`).hidden=!1,Mp=setTimeout(()=>{Q(`#toast`).hidden=!0},4200)}function Ip(e,t=!0){kp?.close(),Dp?.onCityChanged(),Cp>=0&&Wp(),Sp=e,Ap=null,Pp(e),document.body.classList.remove(`city-immersive`),document.body.classList.add(`city-mode`),Q(`.exploration`).classList.add(`inspecting`),Q(`.city-toolbar`).hidden=!1,$?.select(e,t),Lp(),document.querySelectorAll(`.city-link`).forEach(t=>t.classList.toggle(`active`,t.dataset.city===e));let n=a(e);Q(`.world-location`).textContent=n.name,Q(`.world-location-en`).textContent=n.system,Q(`.map-help`).innerHTML=`<span>拖动 360° 环绕</span><i>·</i><span>右键 / 双指平移</span><i>·</i><span>滚轮 / 双指缩放</span>`,Q(`[data-action="reset"]`).setAttribute(`aria-label`,`重置城市视角`),Rp()}function Lp(){document.querySelectorAll(`[data-camera]`).forEach(e=>e.classList.toggle(`active`,e.dataset.camera===`city`)),Q(`[data-action="orbit"]`).setAttribute(`aria-pressed`,`false`),Q(`[data-action="labels"]`).setAttribute(`aria-pressed`,String($?.district?.labelsVisible??!0)),Q(`[data-action="immersion"]`).setAttribute(`aria-pressed`,`false`),Q(`[data-action="immersion"]`).textContent=`展开视野`}function Rp(){if(!Sp)return;let e=a(Sp),t=yd[Sp],n=$?.district?.stats,r=Q(`#inspector`);r.hidden=!1,r.classList.toggle(`living-panel`,Ap===`life`),r.style.setProperty(`--city`,e.color),r.style.setProperty(`--pale`,e.pale);let i=Ap===`life`?{name:`细胞生活街`,english:`A LITTLE EVERYDAY LIFE`,description:`补给铺开着门，居民在树下聊天、读书，或沿着小径去办自己的事。高低错落的细胞小屋、阳台与庭院，组成这座城安静的日常。`,activity:`步行居民会停留歇脚；细胞巴士会停站，后车减速等待。`}:t.landmarks.find(e=>e.id===Ap);r.innerHTML=`<div class="inspector-top"><span class="tiny-label">THE CITY, UP CLOSE</span><button class="icon-button" data-action="close-city" aria-label="返回群岛全景">${d(`close`)}</button></div><div class="district-heading"><span class="city-symbol">${d(e.id)}</span><div><span>${e.english}</span><h2>${e.name}</h2></div></div>${Sp===`lungs`?`<button class="workday-entry compact" data-exp="workday"><span>☼ 新故事 · 肺泡港的一天</span><strong>和小红一起上班 ↗</strong></button>`:``}<h3 class="planning-title">${t.title}</h3><p class="planning-description">${t.description}</p><div class="district-stats"><div><b>${n?.buildings??`—`}</b><span>功能建筑</span></div><div><b>${n?.vehicles??`—`}</b><span>运输车辆</span></div><div><b>${n?.residents??`—`}</b><span>细胞居民</span></div></div>${i?`<article class="poi-detail" aria-live="polite"><span>${i.english}</span><h3>${i.name}</h3><p>${i.description}</p><div><i></i>${i.activity}</div></article>`:``}<div class="district-directory-title"><span>街区观察目录</span><small>点击前往近景 ↙</small></div><div class="poi-directory"><button class="poi-item life-item ${Ap===`life`?`active`:``}" data-poi="life"><b>✳</b><span>漫步细胞生活街</span><i>↗</i></button>${t.landmarks.map((e,t)=>`<button class="poi-item ${e.id===Ap?`active`:``}" data-poi="${e.id}"><b>${String(t+1).padStart(2,`0`)}</b><span>${e.name}</span><i>↗</i></button>`).join(``)}</div><details class="district-plan-map"><summary>查看城市规划图 <span>＋</span></summary><svg viewBox="0 0 140 120" role="img" aria-label="${e.name}道路规划图">${t.roads.map(e=>`<path d="M ${e.points.map(e=>`${70+e[0]*4},${60+e[1]*4}`).join(` L `)} Z" stroke="${e.color}" fill="none" stroke-width="3" stroke-linejoin="round"/>`).join(``)}${t.landmarks.map((t,n)=>`<circle cx="${70+t.position[0]*4}" cy="${60+t.position[1]*4}" r="6" fill="${e.pale}" stroke="${e.color}"/><text x="${70+t.position[0]*4}" y="${62+t.position[1]*4}" text-anchor="middle" font-size="5" fill="${e.color}">${n+1}</text>`).join(``)}</svg><p>${t.roads.map(e=>e.name).join(` · `)}</p></details><div class="district-resident-note">${d(`spark`)}<span>${t.vehicle}<br>${t.citizen}</span></div><button class="text-button" data-action="learn">打开人体机理手记 ${d(`arrow`)}</button>`}function zp(e){if(e.startsWith(`harbor:`)){Dp?.harborInteract(e)||Dp?.inspect(e);return}if(e.startsWith(`person:`)||e.startsWith(`vehicle:`)||e===`courier`){Dp?.inspect(e);return}Dp?.onLocation(),Sp&&(e===`life`||yd[Sp].landmarks.some(t=>t.id===e))&&(document.body.classList.remove(`city-immersive`),Q(`[data-action="immersion"]`).setAttribute(`aria-pressed`,`false`),Q(`[data-action="immersion"]`).textContent=`展开视野`,Ap=e,$?.district?.focus(e),Rp(),Q(`#inspector`).scrollTop=0,document.querySelectorAll(`[data-camera]`).forEach(e=>e.classList.remove(`active`)),Q(`[data-action="orbit"]`).setAttribute(`aria-pressed`,`false`))}function Bp(){kp?.close(),document.querySelectorAll(`.topnav .nav-tab`).forEach(e=>e.classList.toggle(`active`,e.dataset.action===`overview`)),Dp?.onOverview(),Cp>=0&&Wp(),Sp=null,Ap=null,Q(`#inspector`).hidden=!0,document.body.classList.remove(`city-mode`,`city-immersive`),Q(`.city-toolbar`).hidden=!0,Q(`.exploration`).classList.remove(`inspecting`),$?.select(null),$?.overview(),document.querySelectorAll(`.city-link`).forEach(e=>e.classList.remove(`active`)),Q(`.world-location`).textContent=`群岛全景`,Q(`.world-location-en`).textContent=`一切相连，生生不息`,Q(`.map-help`).innerHTML=`<span>拖动探索</span><i>·</i><span>滚轮缩放</span><i>·</i><span>点击城市发现更多</span>`,Q(`[data-action="reset"]`).setAttribute(`aria-label`,`返回全景`)}function Vp(e){$&&($.mode=e),document.body.dataset.mode=e,document.querySelectorAll(`[data-mode]`).forEach(t=>{let n=t.dataset.mode===e;t.classList.toggle(`active`,n),t.setAttribute(`aria-pressed`,String(n))}),Q(`#mode-message`).textContent=t[e].message,$||(Q(`#heart-value`).textContent=String(t[e].heart),Q(`#breath-value`).textContent=String(t[e].breath)),(Sp||Cp>=0)&&Fp(t[e].changes.join(` · `))}function Hp(){Bp(),Cp=0,Q(`.exploration`).classList.add(`touring`),Up()}function Up(){let e=n[Cp];Pp(e.city),$?.select(e.city),$?.overview(),$?.setTour(Cp===0?`heart`:n[Cp-1].city,e.city,e.oxygen);let t=Q(`#tour-card`);t.hidden=!1,t.innerHTML=`<div class="tour-header"><span>${d(`flag`)} 小红的循环日记</span><button class="icon-button" data-action="end-tour" aria-label="结束红细胞旅行">${d(`close`)}</button></div><div class="tour-illustration"><span class="tour-orbit"></span><span class="big-cell ${e.oxygen?``:`low-oxygen`}"><i></i><b>··</b><em>O₂</em></span><span class="tour-spark one">✧</span><span class="tour-spark two">✧</span><span class="cargo-tag">${e.cargo}</span></div><div class="tour-body"><span class="tiny-label">A RED BLOOD CELL'S JOURNEY</span><h2>${e.title}</h2><p>${e.text}</p><div class="tour-progress">${n.map((e,t)=>`<span class="${t<=Cp?`done`:``}"></span>`).join(``)}<b>${Cp+1} / 5</b></div><div class="tour-actions"><button class="text-button" data-action="previous-step" ${Cp===0?`disabled`:``}>上一步</button><button class="primary-button" data-action="next-step">${Cp===4?`完成旅行`:`下一站`} ${d(Cp===4?`check`:`arrow`)}</button></div></div>`,Q(`.world-location`).textContent=`跟随红细胞`,Q(`.world-location-en`).textContent=e.city===`heart`?`心脏中转站`:a(e.city).name}function Wp(){Cp=-1,Q(`#tour-card`).hidden=!0,Q(`.exploration`).classList.remove(`touring`),$?.endTour()}function Gp(){Q(`#library-dialog`).closest(`dialog`).close(),jp?.focus()}function Kp(e){jp=document.activeElement;let t=Q(`#library-dialog`);t.innerHTML=`<button class="dialog-close icon-button" data-action="close-dialog" aria-label="关闭窗口">${d(`close`)}</button>${e}`,t.open||t.showModal()}function qp(t=null){let n=t?[a(t)]:e;Kp(`<div class="dialog-kicker">THE METABOLIS FIELD GUIDE</div><h2 id="dialog-title">${t?a(t).name+` · 观察手记`:`每一座城，都与你有关。`}</h2><p class="dialog-intro">${t?`认识城市的居民，也读懂比喻背后的真实身体。`:`已拜访 ${xp.length} / 6 座城市。把生命的日常，收进你的探索手记。`}</p><div class="atlas-grid ${t?`single`:``}">${n.map(e=>`<article class="atlas-card" style="--city:${e.color};--pale:${e.pale}"><div class="atlas-title"><span class="city-symbol">${d(e.id)}</span><div><small>${e.system}</small><h3>${e.name}</h3></div><span class="visited-badge">${xp.includes(e.id)?`已拜访`:`待探索`}</span></div><p>${e.description}</p><ul>${e.facts.map(e=>`<li>${e}</li>`).join(``)}</ul><button class="text-button" data-atlas-city="${e.id}">前往这座城 ${d(`arrow`)}</button></article>`).join(``)}</div><p class="science-note">城市的位置、大小与建筑造型是艺术化表达。血管颜色区分含氧状态，不代表真实血液会变蓝；神经线路与器官间的联系经过简化。</p>`)}function Jp(){Kp(`<div class="dialog-kicker">WELCOME TO YOUR INNER WORLD</div><h2 id="dialog-title">生命群岛，一直在你身体里。</h2><p class="dialog-intro">Metabolis 是一座由你规划的生命群岛。从安家、早餐到灯火节，走完六章建设旅程，让供氧、营养、水分、信号与守护共同支持生活；也可以走进六座城市观察人体系统。</p><div class="about-grid"><div>${d(`globe`)}<h3>拜访六座城市</h3><p>点击城市进入完整城区，360° 环绕观察道路、车辆与居民，再点击地标进入街区近景。</p></div><div>${d(`heart`)}<h3>跟随一颗红细胞</h3><p>从右心到肺，从左心到组织，再回到右心。沿途观察氧气如何交接。</p></div><div>${d(`sun`)}<h3>改变一天的节奏</h3><p>试试散步、进食或睡眠，观察心跳、呼吸、血流与营养活动的变化。</p></div></div><div class="about-note"><strong>关于这个世界的比喻</strong><p>六座城是人体系统的缩影，器官、血管、细胞和神经分别化作地标、道路、居民和通讯线路。大脑参与协调，但心脏有自身起搏机制，许多器官也会进行局部调节。</p><p>城市内部的道路、汽车、居民和步道是生理活动的视觉比喻，不是实际解剖结构或真实比例。这里展示经过简化的健康人体生理过程。模拟数值用于展示变化趋势，不是个体测量值或医疗判断；睡眠模式指安静的非快速眼动睡眠。</p></div><h3 class="sources-title">继续了解真实的身体</h3><div class="source-links">${r.map(e=>`<a href="${e.url}" target="_blank" rel="noopener noreferrer">${e.label} ↗</a>`).join(``)}</div><div class="keyboard-help">群岛：拖拽平移 · 城区：拖动 360° 环绕，右键或双指平移<br>滚轮或双指缩放 · 空格暂停 · Esc 返回群岛<br>探索足迹保存在当前浏览器中。</div>`)}async function Yp(){if(wp)wp=!1,await Tp?.suspend();else try{Tp??=new AudioContext,await Tp.resume(),Op??=new op(Tp),wp=!0}catch{Fp(`当前浏览器无法播放环境音。`);return}let e=Q(`[data-action="sound"]`);e.innerHTML=d(wp?`sound`:`mute`),e.setAttribute(`aria-label`,wp?`关闭城市环境声`:`开启城市环境声`),e.classList.toggle(`enabled`,wp)}function Xp(){if(wp&&Tp&&Tp.state===`running`)for(let e of[0,.15]){let t=Tp.createOscillator(),n=Tp.createGain();t.type=`sine`,t.frequency.setValueAtTime(75,Tp.currentTime+e),t.frequency.exponentialRampToValueAtTime(38,Tp.currentTime+e+.15),n.gain.setValueAtTime(0,Tp.currentTime+e),n.gain.linearRampToValueAtTime(.055,Tp.currentTime+e+.014),n.gain.exponentialRampToValueAtTime(.001,Tp.currentTime+e+.18),t.connect(n),n.connect(Tp.destination),t.start(Tp.currentTime+e),t.stop(Tp.currentTime+e+.2)}}document.addEventListener(`click`,e=>{let t=e.target.closest(`button, .brand`);if(t){if(t.matches(`.brand`)){e.preventDefault(),kp?kp.open():Bp();return}if(t.dataset.city&&t.classList.contains(`city-link`)){Ip(t.dataset.city);return}if(t.dataset.atlasCity){Gp(),Ip(t.dataset.atlasCity);return}if(t.dataset.mode){Dp?.action(`episode-stop`),Vp(t.dataset.mode);return}if(t.dataset.poi){zp(t.dataset.poi);return}if(t.dataset.camera){$?.district?.preset(t.dataset.camera),document.querySelectorAll(`[data-camera]`).forEach(e=>e.classList.toggle(`active`,e===t)),Q(`[data-action="orbit"]`).setAttribute(`aria-pressed`,`false`);return}switch(t.dataset.action){case`planning`:kp?.open();break;case`overview`:case`close-city`:Bp();break;case`reset`:$?.district?($.district.preset(`city`),document.querySelectorAll(`[data-camera]`).forEach(e=>e.classList.toggle(`active`,e.dataset.camera===`city`)),Q(`[data-action="orbit"]`).setAttribute(`aria-pressed`,`false`)):Bp();break;case`atlas`:qp();break;case`about`:Jp();break;case`learn`:qp(Sp);break;case`close-dialog`:Gp();break;case`sound`:Yp();break;case`tour`:Dp?Dp.action(`delivery`):Hp();break;case`next-step`:Cp===4?(Wp(),Bp(),Fp(`循环完成！每一次心跳，都在继续这段旅行。`)):Cp>=0&&(Cp++,Up());break;case`previous-step`:Cp>0&&(Cp--,Up());break;case`end-tour`:Wp(),Bp();break;case`pause`:$&&($.paused=!$.paused,t.innerHTML=d($.paused?`play`:`pause`),t.setAttribute(`aria-label`,$.paused?`继续模拟`:`暂停模拟`),t.setAttribute(`title`,$.paused?`继续模拟`:`暂停模拟`),Q(`.live-status`).innerHTML=`<i></i>${$.paused?`时光，暂时停驻`:`生命，正在发生`}`,document.body.classList.toggle(`paused`,$.paused));break;case`speed`:$&&($.speed=$.speed===1?2:$.speed===2?.5:1,t.textContent=`${$.speed}×`);break;case`zoom-in`:$?.zoom(.25);break;case`zoom-out`:$?.zoom(-.25);break;case`orbit`:t.setAttribute(`aria-pressed`,String($?.district?.toggleAuto()??!1));break;case`labels`:t.setAttribute(`aria-pressed`,String($?.district?.toggleLabels()??!0));break;case`immersion`:{let e=document.body.classList.toggle(`city-immersive`);t.setAttribute(`aria-pressed`,String(e)),t.textContent=e?`显示档案`:`展开视野`;break}}}}),Q(`#library-dialog`).addEventListener(`click`,e=>{if(e.target===e.currentTarget){let t=e.currentTarget.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&Gp()}}),document.addEventListener(`keydown`,e=>{if(!Q(`#library-dialog`).open){if(e.code===`Escape`){if(kp?.visible){document.querySelector(`[data-plan="close-detail"]`)?.click();return}if(document.body.classList.contains(`photo-mode`)){Dp?.action(`photo-exit`);return}Bp();return}e.target.matches(`button, a, input, textarea`)||e.code===`Space`&&(e.preventDefault(),Q(`[data-action="pause"]`).click())}});try{$=new Jf(Q(`#world`),Q(`#map-labels`),e=>Ip(e)),$.onPOI=zp,Dp=new ap({world:()=>$,select:e=>Ip(e),setMode:Vp,toast:Fp,dialog:Kp,closeDialog:Gp}),kp=new yp({world:$,enter:()=>Bp(),explore:e=>e?Ip(e):Bp(),toast:Fp,dialog:Kp,closeDialog:Gp});let e=0;$.onTick=t=>{kp?.tick(t),(t-e>.25||t<e)&&(e=t,Q(`#heart-value`).textContent=String(Math.round($.heartRate)),Q(`#breath-value`).textContent=String(Math.round($.breathRate))),Dp?.tick(),Op?.tick(t,$.district?.audioScene??null,$.paused);let n=Math.floor($.simulation.beats);n!==Ep&&!$.paused&&(Ep=n,Xp())},document.body.classList.add(`world-ready`),kp.open()}catch(e){console.error(`3D world could not start`,e),Q(`#world`).innerHTML=`<div class="world-fallback"><span>${d(`globe`)}</span><h2>这座世界需要 3D 图形支持</h2><p>请在支持 WebGL 的浏览器中打开，并启用硬件加速。<br>你仍然可以拜访左侧六座城市、阅读手记和跟随小红旅行。</p><button class="primary-button" data-action="atlas">打开城市图鉴 ${d(`arrow`)}</button></div>`}Np();