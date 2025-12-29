export interface Competitor {
  name: string;
  website: string;
  founded?: string;
  employees?: string;
  specialties: string[];
  pros: string[];
  cons: string[];
  pricing: string;
  bestFor: string;
}

export const miamiCompetitors: Competitor[] = [
  {
    name: 'Outsmart Labs',
    website: 'outsmartlabs.com',
    founded: '2018',
    employees: '10-50',
    specialties: ['Digital Marketing', 'SEO', 'PPC', 'Web Development'],
    pros: [
      'Strong technical SEO capabilities',
      'Data-driven approach with detailed analytics',
      'Experience with enterprise clients',
      'Good track record in competitive industries',
    ],
    cons: [
      'Higher pricing tier ($10K+ monthly minimums)',
      'May be too technical for small businesses',
      'Less focus on social media and content creation',
      'Longer onboarding process',
    ],
    pricing: '$$$$',
    bestFor: 'Enterprise companies with large budgets needing technical SEO and PPC management',
  },
  {
    name: 'Relevance Digital',
    website: 'relevance.digital',
    founded: '2020',
    employees: '50-200',
    specialties: ['Performance Marketing', 'Paid Advertising', 'Analytics', 'CRO'],
    pros: [
      'Strong performance marketing focus',
      'Multiple office locations including Miami',
      'Good reporting and analytics dashboards',
      'Experience with ecommerce brands',
    ],
    cons: [
      'Premium pricing structure',
      'Less personalized service (larger agency feel)',
      'Focus mainly on paid advertising',
      'Limited organic/content marketing services',
    ],
    pricing: '$$$',
    bestFor: 'Ecommerce and direct-to-consumer brands focused on paid acquisition',
  },
  {
    name: 'ROAR Media',
    website: 'roarmedia.com',
    founded: '2012',
    employees: '20-50',
    specialties: ['Branding', 'Creative', 'Digital Strategy', 'Content Marketing'],
    pros: [
      'Strong creative and branding capabilities',
      'Good local Miami market knowledge',
      'Full-service offering',
      'Experience with hospitality and real estate',
    ],
    cons: [
      'Higher pricing for creative work',
      'Can be slower with campaign execution',
      'Less data-driven than other agencies',
      'Limited technical SEO capabilities',
    ],
    pricing: '$$$',
    bestFor: 'Hospitality, real estate, and lifestyle brands needing strong creative',
  },
];

export const ownItSocial: Competitor = {
  name: 'Own It Social',
  website: 'ownitsocial.com',
  founded: '2023',
  employees: '5-10',
  specialties: [
    'Real Estate Marketing',
    'Loan Officer Marketing',
    'Social Media Management',
    'Content Creation',
    'Email Marketing',
    'CRM Setup',
    'Paid Advertising',
  ],
  pros: [
    'Specialized expertise in real estate and mortgage marketing',
    'Done-for-you content creation and management',
    'Affordable pricing with flexible packages',
    'Fast onboarding and execution (2 weeks to launch)',
    'Personalized service with direct access to your team',
    'Bilingual content creation (English & Spanish)',
    'Strong focus on lead generation and ROI',
  ],
  cons: [
    'Newer agency with smaller team',
    'Less enterprise-level experience',
    'Focused primarily on real estate vertical',
  ],
  pricing: '$$',
  bestFor: 'Real estate agents, loan officers, and small businesses needing comprehensive, affordable marketing',
};
