/* Urban Growth Labs — site content data (from the design composition) */

export const services = [
  { key: 'social', name: 'Social media', desc: 'Channel strategy, content calendars, creative, and community management, focused on the platforms that convert.' },
  { key: 'web', name: 'Website & infrastructure', desc: 'Fast, modern, conversion-focused sites with the tracking and integrations to measure real results.' },
  { key: 'design', name: 'Graphic design', desc: 'Brand identity, menus, and content that turn browsers into buyers.' },
];

export const support = ['Data analysis', 'Marketing automation', 'Market research'];

/* Feature-card metadata per service (eyebrow + product-fragment KPI) */
export const serviceFeatures = {
  social: { eyebrow: 'Reach & engage', stat: '+62%', statLabel: 'avg. engagement lift' },
  web: { eyebrow: 'Build & convert', stat: '2.4×', statLabel: 'avg. traffic growth' },
  design: { eyebrow: 'Brand & create', stat: '+33%', statLabel: 'conversion lift' },
};

export const methodSteps = [
  { n: '1', k: 'Discover', d: 'Research the business, audience, and competitors. Audit channels and find the gaps.', c: 'var(--ugl-purple-600)' },
  { n: '2', k: 'Strategize', d: 'Plan the pipeline around the highest-converting channels and the metrics that matter.', c: 'var(--ugl-purple-500)' },
  { n: '3', k: 'Execute', d: 'Build and launch the site, social, and creative, then test and optimize.', c: 'var(--ugl-vivid-violet)' },
  { n: '4', k: 'Grow', d: 'Scale what works, report results, and reinvest in the next opportunity.', c: 'var(--ugl-signal-yellow)' },
];

export const values = [
  { k: 'Curious', d: 'Ask more. Dig deeper.' },
  { k: 'Bold', d: 'Challenge norms. Create impact.' },
  { k: 'Intelligent', d: 'Data-first, always learning.' },
  { k: 'Adaptive', d: 'Move fast, evolve faster.' },
  { k: 'Impactful', d: 'Real results, real change.' },
];

export const allCases = [
  { id: 1, name: 'Brooklyn barbershop', cat: 'store', tag: 'Storefront', result: '+62%', metric: 'bookings / 90 days', svc: 'Social · Website' },
  { id: 2, name: 'Queens smoothie bar', cat: 'food', tag: 'Food & bev', result: '2.4×', metric: 'web traffic', svc: 'Website · Design' },
  { id: 3, name: 'Harlem coffee shop', cat: 'food', tag: 'Food & bev', result: '+18.7%', metric: 'lift in CTR', svc: 'Brand · Social' },
  { id: 4, name: 'Bronx salon', cat: 'salon', tag: 'Salons', result: '+41%', metric: 'repeat clients', svc: 'Social · Automation' },
  { id: 5, name: 'LES restaurant', cat: 'food', tag: 'Food & bev', result: '+33%', metric: 'covers / week', svc: 'Website · Design' },
  { id: 6, name: 'Astoria nail studio', cat: 'salon', tag: 'Salons', result: '+28%', metric: 'new clients', svc: 'Social · Website' },
];

export const workTabs = [
  { id: 'all', label: 'All' },
  { id: 'food', label: 'Food & bev' },
  { id: 'store', label: 'Storefront' },
  { id: 'salon', label: 'Salons' },
];

export const tiersRaw = [
  { key: 'starter', name: 'Starter', tagline: 'Entry package for small local businesses', base: '$750', comm: '$525', unit: 'one-time', features: ['Social profile setup', 'One channel', 'Monthly snapshot report'], featured: false },
  { key: 'growth', name: 'Growth', tagline: 'Core pipeline across social + web + design', base: '$1,800', comm: '$1,260', unit: '/mo', features: ['Social management', 'Website build', 'Creative & design', 'Monthly strategy call'], featured: true },
  { key: 'scale', name: 'Scale', tagline: 'Full pipeline with automation & analytics', base: '$3,500', comm: '$2,450', unit: '/mo', features: ['Everything in Growth', 'Marketing automation', 'Advanced analytics', 'Bi-weekly strategy'], featured: false },
  { key: 'project', name: 'Project', tagline: 'One-off builds: website or brand identity', base: 'from $2,500', comm: 'from $1,750', unit: '', features: ['Website or brand build', 'Fixed scope', 'Two revision rounds'], featured: false },
];

export const compareRows = [
  { f: 'Social media management', s: true, g: true, x: true },
  { f: 'Website design & build', s: false, g: true, x: true },
  { f: 'Graphic & content design', s: false, g: true, x: true },
  { f: 'Marketing automation', s: false, g: false, x: true },
  { f: 'Advanced analytics & reporting', s: false, g: false, x: true },
];

export const serviceOptions = ['Social media', 'Website & infrastructure', 'Graphic design', 'The full pipeline', 'Not sure yet'];

/* Tools & capabilities — scrolled in the hero marquee */
export const capabilities = [
  'Google Analytics Certified', 'Google Ads Certified', 'HubSpot Inbound Marketing',
  'Figma', 'Sketch', 'Webflow', 'WordPress', 'Squarespace', 'Zesty.io',
  'HTML', 'CSS', 'JavaScript', 'Photoshop', 'Illustrator', 'InDesign',
  'After Effects', 'Premiere Pro', 'GA4', 'Adobe Analytics', 'Google Tag Manager',
  'Tableau', 'Mailchimp', 'Constant Contact', 'Sprout Social', 'Hootsuite',
  'Salesforce', 'Canva', 'CapCut', 'Notion', 'Asana',
];
