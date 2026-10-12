import type { Step } from '@/interface';
import { site } from '@/data/site';

export const steps: Step[] = [
  {
    verb: 'Discover',
    tag: '约 3 分钟',
    visual: 'connect',
    title: `AI 智能匹配你的专属色号。`,
    body: `${site.name} 独家肤色识别技术，根据你的肤色、肤质和光线环境，精准推荐最适合的色号，告别选错色的尴尬。`,
    points: [
      'AI 肤色识别，3 秒匹配',
      '提供试用装，先试后买',
      '不满意可免费换色',
    ],
    image: '/images/step-connect.jpg',
  },
  {
    verb: 'Apply',
    tag: '上妆仅需 30 秒',
    visual: 'watch',
    title: '轻薄一抹，瞬间融合肌肤。',
    body: `微分子锁妆科技，与肌肤纹理无缝融合。不卡粉、不浮粉、不斑驳，仿佛天生好皮肤。`,
    points: [
      '美妆蛋轻拍即可，新手友好',
      '无需定妆粉，一步到位',
      '轻薄透气，零妆感',
    ],
    image: '/images/step-watch.jpg',
  },
  {
    verb: 'Last',
    tag: '12 小时持久',
    visual: 'brief',
    title: '从早到晚，妆面始终如初。',
    body: `独家控油锁妆配方，从早高峰挤地铁到晚聚会拍照，12 小时不脱妆、不斑驳、不暗沉。`,
    points: [
      '控油不拔干，全天清爽',
      '无需中途补妆',
      '卸妆后肌肤依然透亮',
    ],
    image: '/images/step-brief.jpg',
  },
];

export const briefPreview = {
  title: `${site.name} 妆效报告`,
  meta: '用户 林小雅，14:30',
  priority: '高满意度',
  text: '使用 Dopi 粉底液 12 小时后，妆面完整度 98%。无补妆记录，无卡粉斑驳，肌肤光泽自然。',
  actions: { secondary: '查看对比图', primary: '立即购买' },
};