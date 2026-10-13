import { site } from '@/data/site';
import type { Milestone, Role, TeamMember, Value } from '@/interface';

export const milestones: Milestone[] = [
  {
    year: '2022',
    title: '从一次脱妆的尴尬开始',
    body: '创始人在一次重要会议上遭遇脱妆窘境，由此萌生了打造一款真正不脱妆粉底液的想法。调研了 214 位女性的底妆困扰。',
    image: '/images/about-city.jpg',
  },
  {
    year: '2023',
    title: '第一款配方诞生',
    body: '与 12 位皮肤科医生合作，历经 18 个月研发。首批 100 位测试用户，98% 反馈 12 小时不脱妆。',
    image: '/images/gallery-desk.jpg',
  },
  {
    year: '2024',
    title: '从实验室走向市场',
    body: '正式推出 Dopi 粉底液，独家微分子锁妆科技。首月销量突破 10 万瓶，成为美妆圈现象级产品。',
    image: '/images/about-studio.jpg',
  },
  {
    year: '2026',
    title: '百万用户的信赖之选',
    body: `超过 100 万女性选择 ${site.name} 作为日常底妆。从职场新人到专业化妆师，Dopi 成为不脱妆的代名词。`,
    image: '/images/gallery-tower.jpg',
  },
];

export const values: Value[] = [
  {
    title: '真实效果胜过完美包装',
    body: '我们不追求华丽的营销话术，只专注产品的真实效果。每一滴粉底液都经得起 12 小时的考验。',
  },
  {
    title: '温和是底线，不是卖点',
    body: `无酒精、无香精、无防腐剂。${site.name} 坚信，好的底妆不应该以牺牲肌肤健康为代价。`,
  },
  {
    title: '用数据说话',
    body: '每一条宣传都有真实测试数据支撑。12 小时持妆、98% 回购率，数字不会说谎。',
  },
  {
    title: '为真实场景而生',
    body: '我们不为拍照而设计，只为挤地铁、开会、约会这些真实场景。让你在任何时刻都从容自信。',
  },
];

export const team: TeamMember[] = [
  { name: '薇薇', role: '模特 & 合伙人', image: '/images/TfH0okk1.webp' },
  { name: 'Maggie', role: '用户', image: '/images/Q30A3919.webp' },
  { name: '陈艺萱', role: '用户', image: '/images/Q30A3553.webp' },
  { name: '玲', role: '用户', image: '/images/Q30A640@0.5x.webp' },
  { name: '小新', role: '用户', image: '/images/Q30A3552.webp' },
  { name: '苏菲', role: '品牌战略顾问', image: '/images/Q30A4354.webp' },
];

export const roles: Role[] = [
  { title: '高级美妆研发工程师', team: '研发部', location: '上海 / 远程' },
  { title: '配方科学家', team: '实验室', location: '广州或远程' },
  { title: '品牌视觉设计师', team: '设计部', location: '北京或远程' },
  { title: '客户成功经理', team: '运营部', location: '上海' },
];
