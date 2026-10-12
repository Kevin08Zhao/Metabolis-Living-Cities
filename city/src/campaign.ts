/** Authored campaign content. All quantities are game balance values. */
export type ChapterId = 'dawn' | 'breakfast' | 'heat' | 'melody' | 'repair' | 'festival';
export type Service = 'food' | 'filter' | 'neuron' | 'immune';
export interface Chapter {
 id:ChapterId; title:string; time:string; system:string; icon:string; companion:string;
 intro:string; success:string; keepsake:string; lesson:string; reward:number;
 duration:number; healthy:number; peak:number; service?:Service; bonus:string;
 decision?:{at:number;title:string;copy:string;choices:[{title:string;copy:string;food?:number;water?:number;waste?:number;repair?:number;load:number;gift:number},{title:string;copy:string;food?:number;water?:number;waste?:number;repair?:number;load:number;gift:number}]};
}
export const chapters:Chapter[] = [
 {id:'dawn',title:'第一条回家的路',time:'07:00',system:'心脏 × 肺泡',icon:'heart',companion:'小红',intro:'新邻居搬来了。先给他们一个家，再把氧气送到门口。我们一起陪身体走过今天的第一段路。',success:'窗户亮了，邻居们第一次一起出门散步。你铺好的路，让这个小世界开始生活。',keepsake:'回家纪念树',lesson:'氧气需要经过肺泡交换，再由心脏和血管送往组织。道路和上游能力都要够用。',reward:12,duration:90,healthy:75,peak:1.5,bonus:'留一座膜间花园，让邻居有地方休息。'},
 {id:'breakfast',title:'把早餐送到每条街',time:'09:00',system:'消化与营养',icon:'gut',companion:'芽芽',intro:'散步回来，大家都饿了。建起绒毛食堂，把吸收的营养变成小镇可以储备的补给。',success:'第一份早餐送到了每个街区。芽芽把食堂的招牌挂了起来，东边的新土地也开放了。',keepsake:'早餐小集与东岸扩建',lesson:'氧气和营养共同支持细胞工作。准备储备，才能应对一阵集中的需求。',reward:14,duration:60,healthy:45,peak:1.35,service:'food',bonus:'结束时保留至少 24 份营养。',decision:{at:22,title:'早餐高峰到了',copy:'街坊们同时来取餐。你想怎样安排这次交接？',choices:[{title:'分批送餐',copy:'营养 +8；本轮后续运输需求降低 5%。',food:8,load:.95,gift:0},{title:'办一桌共享早餐',copy:'营养 −6；本轮后续需求提高 8%，通关额外奖励 3 材料。',food:-6,load:1.08,gift:3}]}},
 {id:'heat',title:'留住清凉的午后',time:'12:30',system:'肾脏与水分',icon:'kidneys',companion:'澄澄',intro:'午后的风变热了。让肾单位水庭回收有用的水分、清理代谢废物，照顾仍在工作的街坊。',success:'水庭流起来了，街边多了一座清凉喷泉。澄澄说，这一回大家都能舒服地走回家。',keepsake:'水庭喷泉',lesson:'水分储备和废物清理需要同时照顾。水庭表示回收与过滤，不会凭空制造水。',reward:14,duration:65,healthy:48,peak:1.5,service:'filter',bonus:'结束时水分至少 24，代谢负担不超过 12。',decision:{at:23,title:'阳光有些晒',copy:'小红送完一趟补给，停在树荫下。给接下来的路做个安排吧。',choices:[{title:'喝水，慢慢走',copy:'水分 +12；后续运输需求降低 8%。',water:12,load:.92,gift:0},{title:'先把最后一单送完',copy:'水分 −6；后续需求提高 6%，通关额外奖励 3 材料。',water:-6,load:1.06,gift:3}]}},
 {id:'melody',title:'一起学一段旋律',time:'15:00',system:'神经信号',icon:'brain',companion:'闪闪',intro:'广场想组一个小乐队。把神经信号塔放在街区之间，让附近的工作建筑都能收到练习节拍。',success:'不同街区终于跟上了同一段旋律。广场有了小舞台，南岸也为新的生活留出了位置。',keepsake:'细胞乐台与南岸扩建',lesson:'信号塔的覆盖与位置有关。血管提供运行所需的供给，神经连线承担协调，两者作用不同。',reward:16,duration:60,healthy:45,peak:1.25,service:'neuron',bonus:'信号覆盖所有工作街区。',decision:{at:20,title:'第二段有一点难',copy:'闪闪举起了指挥棒。大家可以放慢练习，也可以尝试一次合奏。',choices:[{title:'分段练习',copy:'营养 +5；后续需求降低 5%。',food:5,load:.95,gift:0},{title:'试着一起合奏',copy:'营养 −5；后续需求提高 12%，通关额外奖励 3 材料。',food:-5,load:1.12,gift:3}]}},
 {id:'repair',title:'把小小伤口照顾好',time:'17:00',system:'免疫与修复',icon:'immune',companion:'团团',intro:'一个街角需要修补。建起免疫巡护站，让有供给的守护者一边巡查、一边帮助组织恢复。',success:'修补完成，街角重新开门了。团团留下了一盏巡护灯，说以后也会一起守护这里。',keepsake:'守护街灯',lesson:'修复需要时间和供给。巡护站获得足够的氧气、营养与信号支持，才能稳定工作。',reward:16,duration:70,healthy:50,peak:1.35,service:'immune',bonus:'完成修复，并把代谢负担控制在 12 以内。',decision:{at:24,title:'需要再派一组帮手吗',copy:'修复队已经到达街角。选择适合目前补给的安排。',choices:[{title:'有序交接',copy:'修复进度 +12；后续需求维持平稳。',repair:12,load:1,gift:0},{title:'加派修复小队',copy:'修复进度 +25，营养 −8；后续需求提高 10%，通关额外奖励 3 材料。',repair:25,food:-8,load:1.1,gift:3}]}},
 {id:'festival',title:'生命小镇的灯火节',time:'19:00',system:'六大系统协作',icon:'spark',companion:'所有街坊',intro:'今天认识的伙伴都来到了广场。安排好供氧、营养、水庭、信号和巡护，再留一座花园，一起点亮第一场灯火节。',success:'从第一间房子，到六大系统一起工作的街区——这一整天，是你和大家共同建起来的。生命小镇的第一天，圆满落幕。',keepsake:'灯火节与自由建设模式',lesson:'一个系统的变化会影响其他系统。可靠的规划，让循环、交换、营养、平衡、信号和守护共同支持生活。',reward:20,duration:100,healthy:80,peak:1.6,bonus:'结束时营养、水分均至少 20，信号覆盖所有工作街区。',decision:{at:38,title:'大家想再唱一首',copy:'广场亮起了灯。你希望第一场灯火节怎样继续？',choices:[{title:'围坐下来，慢慢唱',copy:'营养、水分各 +8；后续需求降低 5%。',food:8,water:8,load:.95,gift:0},{title:'让整条街一起跳舞',copy:'营养、水分各 −6；后续需求提高 8%，通关额外奖励 5 材料。',food:-6,water:-6,load:1.08,gift:5}]}}
];
export const badgeDefinitions = [
 {id:'neighbor',name:'新邻居来了',copy:'拥有两个细胞住区。',icon:'home'},
 {id:'connected',name:'第一条回家的路',copy:'让两个住区获得稳定供给。',icon:'route'},
 {id:'garden',name:'把温柔留在街角',copy:'建造一座膜间花园。',icon:'spark'},
 {id:'capacity',name:'给循环留点余量',copy:'扩容一段血管。',icon:'layers'},
 {id:'nourish',name:'一顿热乎的早餐',copy:'完成营养章节。',icon:'gut'},
 {id:'balance',name:'清凉的守护',copy:'完成水庭章节。',icon:'kidneys'},
 {id:'music',name:'同一段旋律',copy:'完成神经章节。',icon:'brain'},
 {id:'care',name:'街角重新开门',copy:'完成免疫章节。',icon:'immune'},
 {id:'day',name:'一起点亮的一天',copy:'完成全部六章。',icon:'sun'},
 {id:'master',name:'生命建筑师',copy:'六章都获得三颗星。',icon:'flag'}
];
