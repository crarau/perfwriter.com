import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/PerfWriter', target: '_blank' }],
};

export const footerData = {
  links: [


  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/PerfWriter' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> PerfWriter</a> · All rights reserved.
  `,
};
