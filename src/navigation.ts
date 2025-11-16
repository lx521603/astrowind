import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    /*{
      text: '首页',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },*/
   /* {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: '服务',
          href: getPermalink('/services'),
        },
        {
          text: '价格',
          href: getPermalink('/pricing'),
        },
        {
          text: '关于我',
          href: getPermalink('/about'),
        },
        {
          text: '联系',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },*/
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: '博客',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: '服务',
          href: getPermalink('/services'),
        },
        {
          text: '价格',
          href: getPermalink('/pricing'),
        },
        {
          text: '关于我',
          href: getPermalink('/about'),
        },
        {
          text: '联系',
          href: getPermalink('/contact'),
        },
        {
          text: '博客列表',
          href: getBlogPermalink(),
        },
        {
          text: '文章',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: '文章 (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: '分类页',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: '标签页',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    /*{
      text: '小部件',
      href: '#',
    },*/
  ],
  actions: [{ text: '联系', href: 'https://viv.yt', target: '_blank' }],
};

export const footerData = {
  /*links: [
    {
      title: '产品',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: '价格', href: '#' },
        { text: '资源', href: '#' },
      ],
    },
    {
      title: '平台',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: '支持',
      links: [
        { text: '文档', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: '公司',
      links: [
        { text: '关于', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],*/
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
   /* { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/' },*/
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://rise.re"> Rise</a> · All rights reserved.
  `,
};
