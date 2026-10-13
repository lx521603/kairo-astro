import type { Integration, PartnerLogo } from '@/interface';

export const customerLogos: PartnerLogo[] = [
  { name: '小红书', shape: 'spark' },       // spark 像星光，契合小红书的调性
  { name: '抖音', shape: 'wave' },          // wave 像声波/短视频的动感
  { name: '时尚芭莎', shape: 'frame' },     // frame 像杂志的边框
  { name: 'Vogue', shape: 'prism' },        // prism 棱镜，代表高级时尚
  { name: 'SGS 认证', shape: 'shield' },    // shield 盾牌，代表安全检测背书
];

// 🌟 完美适配 Dopi 的美妆图标组合
export const integrations: Integration[] = [
  { label: '深层保湿', icon: 'drop' },
  { label: '光泽微光', icon: 'sparkle' },
  { label: '天然成分', icon: 'leaf' },
  { label: '防晒保护', icon: 'sun' },
  { label: '温和呵护', icon: 'heart' },
  { label: '植物萃取', icon: 'flower' },
  { label: '完美上妆', icon: 'paint-brush' },
  { label: '多效合一', icon: 'plus' },
  { label: '安全守护', icon: 'shield' },
];