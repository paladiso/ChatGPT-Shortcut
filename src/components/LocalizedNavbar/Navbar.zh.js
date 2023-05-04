const zhNavbar = {
  hideOnScroll: true,
  title: "Ask Prompts",
  logo: {
    alt: "Ask Prompts",
    src: "img/logo.svg",
  },
  items: [
    {
      type: 'dropdown',
      label: '其他工具',
      position: 'left',
      items: [
        {
        {
          label: 'IMGPrompt',
          href: 'https://prompt.newzone.top/',
        },
        {
          label: '文字处理',
          href: 'https://tools.newzone.top/',
        },
        {
          label: 'AI工具',
          href: 'https://naviai.cn',
        },
      ],
    },
    {
      to: "https://xq7pd3qu17.feishu.cn/share/base/form/shrcnK7oaSPaAcj1YAHfy4jo0Jh",
      label: "反馈/添加提示词",
      position: "left",
    },
    { type: "localeDropdown", position: "right" },
    {
      href: "https://github.com/rockbenben/ChatGPT-Shortcut",
      position: "right",
      className: "header-github-link",
    },
  ],
};

module.exports = zhNavbar;
