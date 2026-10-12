import { site } from '@/data/site';
import type { Testimonial } from '@/interface';

export const testimonials: Testimonial[] = [
  {
    quote: `以前一到下午就要疯狂补妆，现在用 ${site.name} 出门 12 小时，晚上回家妆面还是完整的。终于不用再随身带粉饼了。`,
    name: '林小雅',
    role: '美妆博主 / 10万+粉丝',
    company: '小红书',
    image: '/images/portrait-ines.jpg',
    metric: { value: 12, prefix: '', suffix: ' 小时', label: '全天候持妆无补妆' },
  },
  {
    quote:
      '店里之前卖粉底液退货率特别高，自从换了 Dopi，顾客反馈不卡粉不脱妆，复购率直接翻倍。现在成了店里的王牌产品。',
    name: '张美琳',
    role: '美妆集合店主理人',
    company: 'Molly Beauty',
    image: '/images/story-halden.jpg',
    metric: { value: 98, suffix: '%', label: '顾客回购率' },
  },
  {
    quote:
      '作为敏感肌，我试过无数粉底液都闷痘。Dopi 是我用过唯一一款连续用一个月，皮肤状态反而变好的底妆产品。',
    name: '王雨萱',
    role: '互联网产品经理',
    company: '某大厂',
    image: '/images/portrait-maren.jpg',
    metric: { value: 30, suffix: ' 天', label: '连续使用无闷痘' },
  },
  {
    quote: '给新娘化妆最怕脱妆尴尬，现在用 Dopi 打底，婚礼现场又哭又笑，妆面依然完美。同行都在问我要链接。',
    name: '陈艺萱',
    role: '资深婚礼化妆师',
    company: '独立工作室',
    image: '/images/story-solvane.jpg',
    metric: { value: 87, suffix: '%', label: '客户满意度提升' },
  },
  {
    quote: '早高峰挤地铁、中午吃火锅、晚上加班，一天下来妆还在。这就是我一直在找的那款粉底液。',
    name: '李思琪',
    role: '金融分析师',
    company: '某投行',
    image: '/images/portrait-tobi.jpg',
    metric: { value: 3, suffix: ' 个月', label: '持续回购中' },
  },
  {
    quote: `做代理两年了，${site.name} 是我带过复购率最高的产品。顾客用一次就会回来找我续单，根本不需要我推销。`,
    name: '赵晓婷',
    role: '市级代理 / 团队 50+人',
    company: 'Dopi 合伙人',
    image: '/images/story-corvid.jpg',
    metric: { value: 65, suffix: '%', label: '月均复购率' },
  },
];