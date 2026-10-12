import type { CityId } from './model';

export type Point2 = [number, number];
export type BuildingKind = 'pump'|'clock'|'cortex'|'relay'|'memory'|'alveoli'|'trachea'|'exchange'|'stomach'|'villi'|'liver'|'lymph'|'filter'|'tubule'|'reservoir'|'citadel'|'scanner'|'academy'|'antibody';
export interface Landmark { id:string; name:string; english:string; position:Point2; kind:BuildingKind; description:string; activity:string; }
export interface Street { name:string; points:Point2[]; color:string; vehicles:number; }
export interface CityPlan { title:string; description:string; ground:string; accent:string; vehicle:string; citizen:string; roads:Street[]; landmarks:Landmark[]; }
const oval=(x:number,z:number,rx:number,rz:number):Point2[]=>Array.from({length:12},(_,i)=>[x+Math.cos(i*Math.PI/6)*rx,z+Math.sin(i*Math.PI/6)*rz]);
const road=(name:string,points:Point2[],color:string,vehicles=8):Street=>({name,points,color,vehicles});
const spot=(id:string,name:string,english:string,position:Point2,kind:BuildingKind,description:string,activity:string):Landmark=>({id,name,english,position,kind,description,activity});

export const cityPlans:Record<CityId,CityPlan>={
  heart:{title:'四腔分区 · 双环泵站之城',description:'左右两片泵站街区，各自承担一条循环。双向运输大道围绕四个腔室，冠脉补给街服务着心肌居民。',ground:'#e4d6bd',accent:'#d67f70',vehicle:'红细胞氧气货车',citizen:'心肌居民与红细胞快递员',roads:[road('右心运输环',oval(-5,0,3.9,8.3),'#adbfc9',10),road('左心运输环',oval(5,0,3.9,8.3),'#d5a399',10),road('冠脉补给环',oval(0,0,13.5,11.6),'#c7b8a7',12)],landmarks:[
    spot('right-atrium','静脉归航站','RIGHT ATRIUM',[-5,-4],'pump','静脉把来自身体的血液带回右心房。这里像归航调度站，为下一段肺循环整理队伍。','低氧运输车依次抵达归航环线'),
    spot('right-ventricle','右心动力厂','RIGHT VENTRICLE',[-5,3.3],'pump','右心室收缩，将血液经肺动脉送往肺部。瓣膜阻止回流，泵站按共同的节律工作。','右侧泵组随心跳起伏，单向闸门循环开合'),
    spot('left-atrium','肺静脉迎新港','LEFT ATRIUM',[5,-4],'pump','完成肺泡气体交换的血液，经肺静脉返回左心房，再流入左心室。','富氧运输队从肺部归来'),
    spot('left-ventricle','左心主泵广场','LEFT VENTRICLE',[5,3.3],'pump','左心室把血液送进主动脉，供给全身。城市用高耸的双泵塔表现它持续的泵送工作。','主泵收缩，主动脉物流环保持前进'),
    spot('pacemaker','窦房结节律塔','PACEMAKER',[0,-7.4],'clock','正常心律通常起源于右心房内的窦房结。这座置于地图中央上方的钟塔是节律的城市化标记。','脉冲灯按当前心率闪动'),
    spot('coronary','心肌补给花园','CORONARY DISTRICT',[0,6.8],'exchange','心肌自身也需要供血。冠状动脉及其分支为心肌送去氧和养分，静脉负责回流。','补给车和步行居民分道通行'),
  ]},
  brain:{title:'放射网络 · 神经通信之城',description:'皮层议事厅居中，四座功能街区由树突步道和髓鞘高架连成网络。电信号沿轴突穿行，突触站负责交接。',ground:'#dcd5e3',accent:'#a58bbf',vehicle:'轴突信号电车',citizen:'神经元信使与胶质细胞',roads:[road('皮层中央环',oval(0,0,4.1,3.6),'#b7a7c8',7),road('神经外环',oval(0,0,12.3,10.1),'#b5aec5',12)],landmarks:[
    spot('cortex','皮层议事厅','CORTEX COMMONS',[0,0],'cortex','大脑皮层包含相互联系的功能区域。中央议事厅象征信息整合，并不代表所有指令只由一个中心发出。','穹顶信号灯与放射线路持续通信'),
    spot('sensory','感觉接收街','SENSORY QUARTER',[-7,-4.5],'relay','感觉通路把来自身体和环境的信息带入中枢神经系统。接收站用脉冲灯表现信号的传递。','感觉信号沿有髓轴突抵达接收塔'),
    spot('motor','运动发令港','MOTOR QUARTER',[7,-4.5],'relay','运动相关脑区和其他神经结构协作，参与组织动作。城市中的电车是信号传递的形象化比喻。','信号电车沿固定线路发车'),
    spot('memory','记忆档案馆','MEMORY ARCHIVE',[-6.5,4.8],'memory','学习与记忆涉及神经连接活动和可塑性的变化。档案馆用相互连接的书页状楼体表现信息关联。','档案楼之间持续交换金色信号'),
    spot('glia','胶质维护花园','GLIAL GARDENS',[6.5,4.8],'exchange','胶质细胞参与支持神经元、维持环境和形成髓鞘。围绕线路的维护花园是它们的工作街区。','维护居民沿步道巡查通信网络'),
  ]},
  lungs:{title:'树状分支 · 双叶交换云港',description:'气管高塔向两侧分出支气管，簇状肺泡港铺展在末梢。血管物流环从港口旁穿过，完成两种气体的交换。',ground:'#d0e0d4',accent:'#78aaa0',vehicle:'肺泡气体交换车',citizen:'肺泡细胞与红细胞搬运员',roads:[road('左叶交换环',oval(-6,1,4,6.5),'#a1bcc0',10),road('右叶交换环',oval(6,1,4,6.5),'#cba5a0',10),road('胸廓服务环',oval(0,0,13.5,11.7),'#b4c2ac',12)],landmarks:[
    spot('trachea','气管迎风塔','TRACHEAL GATE',[0,-7],'trachea','空气经气管进入逐级分支的支气管与细支气管。这里的树状管道展示空气通路的分支关系。','中央通气塔向两侧分支输送空气'),
    spot('left-alveoli','左叶肺泡温室','LEFT ALVEOLAR GROVE',[-6,-2.6],'alveoli','成簇的肺泡提供很大的气体交换表面积，外侧环绕毛细血管。柔软的温室群随呼吸一起起伏。','肺泡穹顶按照当前呼吸频率舒展'),
    spot('right-alveoli','右叶肺泡温室','RIGHT ALVEOLAR GROVE',[6,-2.6],'alveoli','氧气和二氧化碳沿各自的分压梯度扩散。两侧温室共同工作，不是只在一侧装氧、另一侧卸气。','氧分子光点从肺泡向交换码头移动'),
    spot('oxygen-dock','氧气装卸码头','GAS EXCHANGE DOCK',[-6,4.6],'exchange','氧气跨过肺泡与毛细血管之间的薄壁，与红细胞内的血红蛋白结合。二氧化碳向相反方向扩散。','货车经过码头，完成气体交接'),
    spot('diaphragm','膈肌潮汐庭院','DIAPHRAGM GARDEN',[6,4.6],'reservoir','膈肌等呼吸肌改变胸腔容积，带动吸气和呼气。肺的膨胀来自这些压力变化。','庭院的膜面随呼吸缓缓起落'),
  ]},
  gut:{title:'曲折工序 · 营养加工长街',description:'从混合车间到绒毛装卸梯田，街区沿加工顺序延伸。弯曲肠道、物料传送带和肝脏调配港各司其职。',ground:'#e9dec0',accent:'#cfa05d',vehicle:'营养分子补给车',citizen:'上皮细胞与绒毛装卸员',roads:[road('营养加工大道',[[-11,-6],[-6,-9],[3,-9],[11,-5],[11,3],[7,8],[-2,9],[-11,5],[-9,0]],'#c7b397',13),road('吸收物流环',oval(5,1,3.2,3.8),'#d3b695',7),road('门静脉转运环',oval(-4.15,2,3,4),'#b4b5c3',7)],landmarks:[
    spot('stomach','胃部混合工坊','GASTRIC WORKSHOP',[-5.5,-4.8],'stomach','胃通过肌肉运动混合食物，并用胃酸和消化酶参与消化。这里的机械翻滚与传送带是加工过程的比喻。','混合罐转动，食糜沿工序向前移动'),
    spot('enzyme','消化液配给站','ENZYME DEPOT',[3.7,-5.8],'relay','胰液、胆汁和肠液共同参与小肠内的消化。城市用多罐配给站表现不同消化液的协作。','配给小车向加工车间运送物料'),
    spot('villi','小肠绒毛梯田','VILLUS TERRACES',[5,1],'villi','绒毛和微绒毛扩大吸收面积。大多数营养物质在小肠被吸收，而不是在胃中完成吸收。','金色营养颗粒在绒毛装卸线持续流动'),
    spot('liver','肝脏调配港','HEPATIC DISPATCH',[-4.2,2],'liver','吸收的糖和氨基酸等先经门静脉到达肝脏，再参与储存、转化和分配。港口模拟这个中转环节。','营养货车在调配仓库有序停靠'),
    spot('lacteal','乳糜淋巴码头','LYMPHATIC WHARF',[1,6.7],'lymph','大部分膳食脂肪经加工后，先进入小肠绒毛内的淋巴管，再随淋巴回到血液循环。','乳糜微粒沿独立的淋巴支线离港'),
  ]},
  kidneys:{title:'双侧水城 · 肾单位回收渠',description:'双侧过滤街区围绕肾小球广场展开，U 形肾小管穿过回收花园，汇入中央集合港。水与有用物质被重新送回。',ground:'#cfdddd',accent:'#7ca9b7',vehicle:'水盐回收工程车',citizen:'肾单位管理员与回收员',roads:[road('左肾回收环',oval(-6,0,4,7.5),'#9eb9c4',11),road('右肾回收环',oval(6,0,4,7.5),'#a7c4c3',11),road('肾门运输环',oval(0,0,13.5,11.6),'#c1b6ae',11)],landmarks:[
    spot('left-filter','左肾小球滤池','LEFT GLOMERULUS',[-6,-4.4],'filter','血液经过肾小球毛细血管时，水和一些小分子进入滤液。血细胞与大部分蛋白质通常留在血管中。','滤池内的水分子进入肾小管'),
    spot('right-filter','右肾小球滤池','RIGHT GLOMERULUS',[6,-4.4],'filter','每个肾脏包含许多肾单位，过滤与后续处理共同进行。城市只用少数放大的滤池展示其工作方式。','滤池和运输车持续协同工作'),
    spot('left-tubule','左侧重吸收花园','REABSORPTION GARDEN',[-6,3.8],'tubule','肾小管把大部分滤出的水和有用物质重吸收回血液，也分泌某些物质。回收比单纯过滤更重要。','U 形渠中的回收光点不断返回'),
    spot('right-tubule','水盐平衡街区','WATER & SALT QUARTER',[6,3.8],'tubule','肾脏调节水盐及酸碱平衡。渠边的调节阀和储罐，是这些处理活动的城市化表现。','工程车巡查水渠和调节站'),
    spot('collector','集合管归流港','COLLECTING HARBOR',[0,6.7],'reservoir','经过过滤、重吸收和分泌后，剩余液体形成尿液，经集合管等通路流向肾盂和输尿管。','多条处理支线在中央水港汇合'),
  ]},
  immune:{title:'六角防线 · 淋巴守护要塞',description:'环形淋巴大道围绕协作中心，识别站、训练广场和抗体工坊分区布置。巡逻车辆与免疫居民在城墙内有序往来。',ground:'#d7dfc6',accent:'#90aa78',vehicle:'白细胞巡逻车',citizen:'吞噬细胞、T 细胞与 B 细胞',roads:[road('淋巴外巡逻环',oval(0,0,12.4,10.6),'#adbea0',13),road('协作内环',oval(0,0,4.3,3.8),'#c0c8ad',7)],landmarks:[
    spot('node','淋巴协作议事厅','LYMPH NODE COMMONS',[0,0],'citadel','淋巴结为免疫细胞提供交流与激活的场所。免疫系统分布全身，这座要塞只是协作网络的一站。','内外巡逻环与中央协作厅持续运行'),
    spot('scanner','抗原识别关卡','ANTIGEN CHECKPOINT',[-7,3.5],'scanner','免疫细胞通过多种识别机制察觉异常。关卡的扫描灯展示识别过程，不是实际的光学检测。','扫描环轮转，巡逻车分批经过'),
    spot('tcell','T 细胞协作广场','T CELL COURT',[-6.7,-4.4],'academy','不同 T 细胞参与辅助、调节或直接应对受感染细胞等任务。广场表现它们之间的协作。','细胞小队在交流步道上集结'),
    spot('bcell','抗体制造工坊','ANTIBODY WORKSHOP',[6.7,-4.4],'antibody','B 细胞可分化为浆细胞并产生抗体。Y 形的屋顶与产品，是抗体结构的艺术化标记。','Y 形抗体沿出库线路移动'),
    spot('memory','免疫记忆档案馆','IMMUNE MEMORY',[7,3.6],'memory','部分淋巴细胞形成记忆，使再次遇到相同抗原时能够更快作出反应。这里保存的是识别经验。','档案员与巡逻队不断交接信息'),
    spot('gate','淋巴入城门','LYMPHATIC GATE',[0,7.5],'lymph','淋巴与免疫细胞通过淋巴管在组织和淋巴结之间流动。城门连接更广泛的免疫网络。','淋巴运输队沿外环进入协作街区'),
  ]},
};
