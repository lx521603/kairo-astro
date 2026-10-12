import { site } from '@/data/site';

export const hero = {
  lines: [{ text: '长久持妆' }, { text: 'Dopi' },{ text: '不脱妆', accent: '粉底液' }],
  intro: `${site.name} 专为亚洲肌肤研发的养肤级彩妆与护肤系列。防晒、美白、持妆三合一，让你无惧镜头，时刻闪耀。`,
};

export const logosSection = {
  label: '拒绝照骗，无滤镜实拍。看看 Dopi 女孩们的真实上脸效果与持妆记录，每一张都是自信的证明。',
};

export const manifesto = {
  eyebrow: `为什么选择 ${site.name}`,
  parts: [
    { text: '防水' },
    { image: '/images/manifesto-face.jpg' },
    { text: ' 防汗' },
    { image: '/images/manifesto-city.jpg' },
    { text: ` 防蹭 ${site.name} 不脱妆粉底液` },
    { image: '/images/manifesto-hand.jpg' },
    { text: '12 小时长久持妆' },
  ] as ({ text: string } | { image: string })[],
  hint: 'Drag across the line, or tap it',
};

export const productStory = {
  title: ['Dopi,', '不脱妆 粉底液.'],
  heroImage: '/images/journal-noise.jpg',
  tiles: [
    'products-10',
    'products-01',
    'products-02',
    'products-03',
    'products-04',
    'products-05',
    'products-06',
    'products-07',
    'products-08',
    'products-09',
    'DSC00701',
    'DSC00960',
    'social',
    'DSC00975',
  ].map((name) => `/images/${name}.jpg`),
  acts: [
    {
      tab: '妆面',
      title: '奶油肌，自然发光。',
      body: `不是厚重假面，是肌肤本身的光泽。轻薄透气，仿佛第二层肌肤，素颜感妆效让人忍不住靠近。`,
      count: 98,
      unit: '% 用户回购',
    },
    {
      tab: '持妆',
      title: '12小时，纹丝不动。',
      body: '独家锁妆科技，控油不拔干。从早高峰挤地铁到晚聚会拍照，妆面始终如初，不斑驳不卡粉。',
      count: 12,
      unit: '小时持久不脱',
    },
    {
      tab: '遮瑕',
      title: '瑕疵，一秒隐形。',
      body: '痘印、暗沉、毛孔，Dopi 高遮瑕配方轻轻一抹，肌肤瞬间匀净透亮，仿佛天生好皮肤。',
      count: 98,
      unit: '% 瑕疵覆盖',
    },
  ],
};

export const capabilities = {
  title: 'Dopi 粉底液，为不脱妆而生。',
  detect: {
  title: '智能检测肤质',
  body: `AI 肤色识别技术，根据你的肤色、肤质和光线环境，精准匹配最适合的色号，告别选错色的尴尬。`,
  label: '3秒匹配色号',
},
connect: {
  title: '完美融合肌肤',
  body: '微分子锁妆科技，与肌肤纹理无缝融合。不卡粉、不浮粉、不斑驳，仿佛天生好皮肤。',
  image: '/images/capability-lights.jpg',
},
rank: {
  title: '真实效果对比',
  body: '10万+用户真实反馈，效果数据透明可见。好不好用，数字说了算。',
  items: [
    { title: '12小时持妆测试', value: '98% 不脱妆' },
    { title: '控油效果对比', value: '出油减少 87%' },
    { title: '用户回购率', value: '连续3个月第一' },
  ],
},
brief: {
  title: '30秒快速上手',
  body: '无需专业技巧，简单3步完成完美底妆。新手也能轻松驾驭，出门前快速搞定。',
  text: '洁面后取适量 Dopi 粉底液，用美妆蛋均匀点涂于面部，轻轻拍开即可。无需定妆粉，12小时持久不脱妆。',
},
privacy: {
  title: '温和安全配方',
  body: '无酒精、无香精、无防腐剂。通过皮肤科医生测试，敏感肌、痘痘肌也能安心使用。',
},
};

export const howItWorks = {
  title: '30秒，打造完美底妆。',
  watchHint: '滑动查看步骤',
};

export const storiesSection = {
  title: '那些告别脱妆困扰的女孩。',
  body: `从早高峰挤地铁的通勤族，到深夜聚会的职场女性，她们都用 Dopi 守住了完美底妆。`,
  cta: { label: '看更多真实反馈', href: '/customers' },
};

export const proofSection = {
  title: '听听她们怎么说。',
};

export const closingCta = {
  title: '让每一次出门，都从容不迫。',
  body: '20分钟下单到手，首次试用装免费寄送。不满意全额退款，零风险体验。',
};
