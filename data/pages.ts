import { site } from '@/data/site';

export const customersPage = {
  meta: {
    title: '真实测评',
    description: `看看美妆博主、职场女性如何使用 ${site.name} 保持全天候完美底妆，告别脱妆焦虑。`,
  },
  hero: {
    lines: ['来自真实用户的', '不脱妆底气。'],
    intro:
      '听听她们如何告别补妆焦虑，从早高峰到深夜聚会，全天候保持精致与自信。',
  },
  grid: {
    filterLabel: '按肤质筛选测评',
    one: '篇测评',
    many: '篇测评',
    empty: '该肤质暂无测评，敬请期待。',
  },
  results: {
    title: '使用 Dopi 后的真实改变。',
    items: [
      { value: 12, suffix: '小时', label: '全天候持妆，平均无补妆记录' },
      { value: 98, suffix: '%', label: '的用户在首次使用后决定持续回购' },
      { value: 30, suffix: '秒', label: '快速上妆，新手也能轻松打造完美底妆' },
    ],
  },
  cta: { title: '成为下一个发光女孩。', body: '绝大多数用户在使用 Dopi 的第一天，就感受到了不脱妆的自信。' },
};

export const storyPage = {
  metaSuffix: '真实测评',
  labels: { industry: '肤质', team: '使用者', since: '使用时长', next: '下一篇测评' },
};

export const pricingPage = {
  meta: {
    title: '选购套装',
    description: `从体验装开始，找到最适合你的完美色号与持妆方案。`,
  },
  hero: {
    lines: ['先试后买。', '找到你的本命色号。'],
    accent: 1,
    intro:
      '所有套装均含正装保障与试用装。升级套装可享专属美妆蛋、定制粉扑及会员专属礼遇。',
  },
  plans: {
    monthly: '单次购买',
    yearly: '周期订阅',
    yearlyBadge: '立省 20%',
    note: '*仅普通会员包邮',
    featuredLabel: '大多数人的首选',
    free: '体验装免费',
    perMonth: '/ 套',
    noCard: '无需预付定金',
    billedMonthly: '单次结算',
    billedYearly: '按周期结算',
    enterprise: { prompt: '需要企业团购或定制色号？', link: '联系专属客服' },
  },
  compare: {
    title: '套装权益对比。',
    caption: '各套装包含权益明细',
    feature: '权益',
    yes: '包含',
    no: '不包含',
  },
  faq: { title: '常见问题解答。' },
  sales: {
    title: '告诉我们你的肌肤需求。',
    body: `立即免费申领试用装，或预约 30 分钟线上 1v1 肤质诊断，为你定制专属底妆方案。`,
    image: '/images/gallery-window.jpg',
    imageAlt: '阳光透过窗户洒在精致的化妆台上',
    intentLegend: '我希望',
    intents: { free: site.cta.primary.label, demo: site.cta.secondary.label },
    fields: {
      name: { label: '您的姓名', placeholder: '李小美', error: '请告诉我们如何称呼您。' },
      email: {
        label: '电子邮箱',
        placeholder: 'your@email.com',
        error: '请输入有效的电子邮箱地址。',
      },
      company: { label: '肤质类型', placeholder: '混油皮/敏感肌', error: '请选择或填写您的肤质。' },
      size: { label: '日常妆造需求', help: '帮助我们为您推荐最合适的套装。' },
      message: {
        label: `您希望 Dopi 为您解决什么底妆困扰？`,
        placeholder: '经常卡粉、下午容易脱妆...',
      },
    },
    sizes: ['日常通勤淡妆', '重要场合全妆', '专业影视/舞台妆', '敏感肌特殊护理', '其他定制需求'],
    submit: { free: '免费申领试用装', demo: '预约 1v1 肤质诊断' },
    consent: `提交即表示您同意接收 Dopi 的相关资讯。我们承诺绝不发送垃圾邮件。`,
    sending: '提交中...',
    success: {
      demo: '感谢 {name}。我们将于 1 个工作日内发送邮件至 {email} 为您确认诊断时间。',
      free: '您的专属试用装申领已提交。请留意 {email} 的确认邮件。',
    },
  },
};

export const journalPage = {
  meta: {
    title: '底妆日记',
    description: `Dopi 团队分享的底妆干货、持妆技巧与美妆趋势洞察。`,
  },
  hero: {
    lines: ['关于完美底妆的', '每一个小细节。'],
    intro: `来自 Dopi 美妆实验室的研究报告与干货文章，教你如何应对各种脱妆危机。`,
  },
  list: { title: '全部文章', filterLabel: '按主题筛选文章', empty: '该主题暂无文章，敬请期待。' },
  post: { related: '推荐阅读', back: '返回日记列表' },
};

export const aboutPage = {
  meta: {
    title: '品牌故事',
    description: `Dopi 由一群热爱美妆的研发者创立，我们坚信：完美的底妆，应该从清晨持续到日暮。`,
  },
  hero: {
    lines: ['我们致力于', '守护你', '每一个高光时刻。'],
    accent: 2,
    intro: `Dopi 诞生于一个简单的愿望：让每一位女性都能拥有全天候的自信底妆。我们正在打造那款我们曾经梦寐以求的完美粉底液。`,
    image: '/images/about-hero.jpg',
    imageAlt: '清晨阳光下，展现自然光泽的健康肌肤特写',
    facts: [
      { value: 2021, from: 2001, grouping: false, label: '品牌创立年份' },
      { value: 50, suffix: '+', label: '专业研发与美妆团队成员' },
      { value: 100, suffix: '万+', label: `信赖 Dopi 的用户` },
    ] as { value: number; from?: number; suffix?: string; grouping?: boolean; label: string }[],
  },
  timeline: {
    title: '我们的成长足迹。',
    body: '数年打磨，一个坚定的信念：让脱妆成为历史。',
  },
  values: { title: '我们坚守的品牌理念。' },
  team: { title: '幕后研发团队。' },
  roles: {
    title: '加入 Dopi。',
    body: '我们寻找热爱美妆、追求极致体验的伙伴，一起重新定义底妆标准。',
  },
};

export const notFoundPage = {
  meta: { title: '页面未找到', description: '这个页面好像迷路了。' },
  eyebrow: '404 找不到页面',
  lines: [{ text: '这个页面' }, { text: '好像', accent: '迷路了。' }],
  body: '别担心，点击下方按钮，带你回到美丽的起点。',
  cta: { label: '返回首页', href: '/' },
};
