export const loader = {
  modules: [
    { label: '色号匹配', count: 12840 },
    { label: '真实测评', count: 3120 },
    { label: '客服咨询', count: 460 },
    { label: '底妆干货', count: 205 },
  ],
  status: { waiting: '准备中', syncing: '分析中', live: '已就绪' },
  caption: { loading: '正在分析肌肤状态...', done: '专属底妆方案已锁定' },
  
  // 🌟 保持原有逻辑和路径结构不变。
  // 后续你只需要在 assets/images/ 目录下，用你自己的图片替换掉这些同名文件即可。
  frames: [
    'story-halden',
    'manifesto-face',
    'story-solvane',
    'gallery-street',
    'story-mirelab',
    'journal-face',
    'story-aerowin',
    'manifesto-city',
  ].map((name) => `/images/${name}.jpg`),
};