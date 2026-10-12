import { site } from '@/data/site';
import type { CompareGroup, Faq, Plan } from '@/interface';

export const plans: Plan[] = [
  {
    name: '普通会员',
    // 设为相同值，规避周期切换逻辑，代表一次性门槛费
    monthly: 299,
    yearly: 299,
    description: '适合个人体验、自用以省钱，或开启美妆副业的第一步。',
    cta: site.cta.primary.label,
    href: site.cta.primary.href,
    features: [
      '享受会员专属 85 折',
      '✨ 全国包邮 (仅此级别)',
      '赠送新手体验装礼盒',
      '免费获取基础底妆课程',
    ],
  },
  {
    name: '特级代理',
    monthly: 399,
    yearly: 399,
    description: '适合有一定客源的美妆博主、实体店主，开启轻创业。',
    cta: site.cta.primary.label,
    href: site.cta.primary.href,
    featured: true,
    features: [
      '享受特代专属 6 折拿货价',
      '开放系统一件代发权限',
      '高级社群营销与引流培训',
      '官方高清素材库使用权',
    ],
  },
  {
    name: '市级代理',
    monthly: 3999,
    yearly: 3999,
    description: '适合有团队管理经验、想要深耕本地市场的美妆创业者。',
    cta: site.cta.secondary.label,
    href: site.cta.secondary.href,
    features: [
      '享受市代最低 4 折拿货价',
      '包含特代所有权益及素材',
      '线下沙龙及美导下店支持',
      '区域保护与团队业绩返利',
    ],
  },
];

export const compareGroups: CompareGroup[] = [
  {
    title: '拿货与权益',
    rows: [
      { feature: '核心产品折扣', values: ['85 折', '6 折', '4 折'] },
      { feature: '物流政策', values: ['全国包邮', '运费自理/到付', '物流专线到付'] },
      { feature: '免费试用装额度', values: ['每月 2 份', '每月 10 份', '每月 50 份'] },
      { feature: '一件代发权限', values: [false, true, true] },
    ],
  },
  {
    title: '赋能与支持',
    rows: [
      { feature: '新手底妆手法培训', values: [true, true, true] },
      { feature: '进阶朋友圈营销课', values: [false, true, true] },
      { feature: '官方素材库使用权', values: [false, true, true] },
      { feature: '线下沙龙与美导支持', values: [false, false, true] },
    ],
  },
  {
    title: '团队与管理',
    rows: [
      { feature: '招募下级代理权限', values: [false, true, true] },
      { feature: '团队管理后台', values: [false, false, true] },
      { feature: '月度业绩返利', values: [false, false, true] },
      { feature: '专属招商经理', values: [false, false, true] },
    ],
  },
];

export const faqs: Faq[] = [
  {
    question: '加入代理需要自己囤货吗？',
    answer: `完全不需要。${site.name} 支持一件代发（特代及以上），所有订单由总部仓库统一发货，让您实现真正的零库存轻创业。`,
  },
  {
    question: '为什么只有会员包邮，代理反而不包邮？',
    answer: '因为特代和市代已经享受了极低的 6 折和 4 折拿货价，利润空间已经最大化。大宗物流或代发运费由收件方承担，这是行业保障代理商高利润的通用规则。',
  },
  {
    question: '这里的费用是按月扣费吗？',
    answer: '不是的。以上价格均为**一次性门槛费/首批拿货款**，绝无隐藏的第二年续费或按月订阅扣款。交一次钱，永久保留该级别权益。',
  },
  {
    question: '我没有美妆经验可以做吗？',
    answer: `完全可以。我们提供从产品知识、底妆手法到朋友圈打造的系统化培训，新手也能在 7 天内快速上手出单。${site.name} 的商学院会全程陪跑。`,
  },
  {
    question: '市代的区域保护是什么意思？',
    answer: `市代享有当地城市的独家招商权限，该区域内新增的其他代理均归属于您的团队，并享受相应的团队管理津贴，确保您的市场利益不受侵犯。`,
  },
  {
    question: '可以先体验产品再决定升级吗？',
    answer: '当然可以。建议您先以 299 元的普通会员身份加入，体验产品和包邮服务。后续随时可以补差价无缝升级至特代或市代。',
  },
];