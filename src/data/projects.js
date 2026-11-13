import { img_nova, img_axiom, img_lumen, img_vela, img_alex_carter } from '../assets/images.js'

export const projects = [
  {
    id: 'nova',
    name: 'NOVA',
    subtitle: 'Crypto Presale Landing',
    description:
      'A next-generation utility token presale page: live countdown, stage progress, tokenomics and roadmap — dark space theme with a glowing moon and neon-green accents.',
    image: img_nova,
    price: '$29 template',
    tags: [
      { label: 'HTML', tone: 'g' },
      { label: 'CSS', tone: 'g' },
      { label: 'JavaScript', tone: 'g' },
      { label: 'Presale', tone: '' },
      { label: 'Crypto', tone: '' },
    ],
    demo: 'https://crypto-presale-template.vercel.app',
    github: 'https://github.com/andymulya/web-templates-vanilla',
    featured: true,
  },
  {
    id: 'axiom',
    name: 'AXIOM',
    subtitle: 'AI SaaS Landing',
    description:
      'An AI copilot product page with a live dashboard mockup, time-saved chart and automation feed — deep purple space aesthetic.',
    image: img_axiom,
    price: '$29 template',
    tags: [
      { label: 'HTML', tone: 'v' },
      { label: 'CSS', tone: 'v' },
      { label: 'JavaScript', tone: 'v' },
      { label: 'SaaS', tone: '' },
      { label: 'AI', tone: '' },
    ],
    demo: 'https://ai-saas-landing-rho.vercel.app',
    github: 'https://github.com/andymulya/web-templates-vanilla',
  },
  {
    id: 'lumen',
    name: 'LUMEN',
    subtitle: 'Admin Dashboard',
    description:
      'A clean store admin dashboard: revenue overview, orders, customers and top products — soft violet charts and a calm, professional layout.',
    image: img_lumen,
    price: '$39 template',
    tags: [
      { label: 'HTML', tone: 'c' },
      { label: 'CSS', tone: 'c' },
      { label: 'JavaScript', tone: 'c' },
      { label: 'Dashboard', tone: '' },
      { label: 'Analytics', tone: '' },
    ],
    demo: 'https://admin-dashboard-one-gamma-81.vercel.app',
    github: 'https://github.com/andymulya/web-templates-vanilla',
  },
  {
    id: 'vela',
    name: 'VELA',
    subtitle: 'E-Commerce Storefront',
    description:
      'A warm, editorial fashion store: featured products, category browsing, reviews and a working cart feel — terracotta and cream palette.',
    image: img_vela,
    price: '$39 template',
    tags: [
      { label: 'HTML', tone: 'o' },
      { label: 'CSS', tone: 'o' },
      { label: 'JavaScript', tone: 'o' },
      { label: 'E-Commerce', tone: '' },
      { label: 'Storefront', tone: '' },
    ],
    demo: 'https://ecommerce-storefront-sigma.vercel.app',
    github: 'https://github.com/andymulya/web-templates-vanilla',
  },
  {
    id: 'alex-carter',
    name: 'Alex Carter',
    subtitle: 'Personal Portfolio',
    description:
      'A bold product-designer portfolio with big serif type, project stats and a clean orange-on-cream identity.',
    image: img_alex_carter,
    price: '$19 template',
    tags: [
      { label: 'HTML', tone: '' },
      { label: 'CSS', tone: '' },
      { label: 'JavaScript', tone: '' },
      { label: 'Portfolio', tone: '' },
    ],
    demo: 'https://personal-portfolio-theta-nine-40.vercel.app',
    github: 'https://github.com/andymulya/web-templates-vanilla',
  },
  {
    id: 'vein',
    name: 'Agent Vein',
    subtitle: 'Web3 Deposit-Mining dApp',
    description:
      'My own Web3 project: a BNB deposit-mining app with an upgradeable proxy, verified contracts and a live sale — front-end built and deployed by me.',
    image: null,
    price: 'Web3 dApp · Live',
    tags: [
      { label: 'Web3', tone: 'v' },
      { label: 'BNB Chain', tone: 'v' },
      { label: 'JavaScript', tone: 'c' },
      { label: 'Smart Contracts', tone: '' },
    ],
    demo: 'https://agent-miner-vein.vercel.app',
    github: null,
  },
]

export const skills = [
  { name: 'HTML & CSS', desc: 'Semantic markup, modern layouts, animations.', level: 95 },
  { name: 'JavaScript', desc: 'Interactive UI, vanilla JS, no framework bloat.', level: 90 },
  { name: 'Responsive Design', desc: 'Pixel-perfect on phone, tablet and desktop.', level: 95 },
  { name: 'Web3 Front-End', desc: 'Wallet flows, contract reads, dApp interfaces.', level: 82 },
  { name: 'UI / UX', desc: 'Clean, conversion-focused layouts.', level: 88 },
  { name: 'Git & Vercel', desc: 'Version control, previews, production deploys.', level: 86 },
]

export const services = [
  { icon: '◈', tint: 'g', title: 'Landing Pages', desc: 'High-converting pages for launches, presales and campaigns.' },
  { icon: '▦', tint: 'v', title: 'Dashboards', desc: 'Admin panels and analytics views that are actually pleasant to use.' },
  { icon: '▣', tint: 'o', title: 'E-Commerce', desc: 'Storefronts with product grids, carts and checkout flows.' },
  { icon: '⬡', tint: 'c', title: 'Web3 Front-Ends', desc: 'dApp interfaces, sale pages and wallet-connected experiences.' },
]
