import { site } from '@/data/site';
import type { FooterGroup } from '@/interface';

export const footerGroups: FooterGroup[] = [
  {
    title: '探索 Dopi',
    links: [
      { label: '持妆黑科技', href: '/#how' },
      { label: '真实用户测评', href: '/#capabilities' },
      { label: '限时优惠套装', href: '/pricing' },
      { label: '品牌故事', href: '/about' },
    ],
  },
  {
    title: '帮助中心',
    links: [
      { label: '底妆干货日记', href: '/journal' },
      { label: '色号选择指南', href: '/customers' },
      { label: '常见问题 (FAQ)', href: '/pricing#faq' },
      { label: '联系专属客服', href: '/about#contact' },
    ],
  },
];

export const footerCopy = {
  newsletter: {
    title: '订阅获取底妆干货、新品首发通知与会员专属优惠。',
    label: '电子邮箱',
    placeholder: 'your@email.com',
    note: '我们承诺拒绝垃圾邮件，随时可一键取消订阅。',
    loading: '订阅中...',
    success: '订阅成功！首封美妆指南与优惠券将发送至您的邮箱。',
    error: '邮箱格式不正确，请检查后重新输入。',
  },
  followTitle: '关注我们',
  backToTop: '回到顶部',
  legal: `© ${new Date().getFullYear()} ${site.legalName}. 保留所有权利。`,
};
