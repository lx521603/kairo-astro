import type { SiteConfig } from '@/interface';

export const site: SiteConfig = {
  name: 'Dopi',
  legalName: 'Dopi',
  url: 'https://zaeth.com',
  title: 'Dopi - 懂你的底妆专家',
  description:
    '专为亚洲肌肤研发的养肤级彩妆与护肤系列',
  email: 'x@zaeth.com',
  careersEmail: 'x@zaeth.com',
  accent: '#ff5b1f',
  cta: {
    // 👇 指向真实的 #sales，并用 ?intent= 传递意图
    primary: { label: '加入我们', href: '/pricing?intent=join#sales' },
    secondary: { label: '联系我', href: '/pricing?intent=contact#sales' },
  },
  socials: [
    { label: 'X', href: 'https://x.com', icon: 'x' },
    { label: 'Instagram', href: 'https://instagram.com/viviwang911', icon: 'instagram' },
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  ],
};
