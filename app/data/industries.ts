export interface Industry {
  name: string;
  slug: string;
  title: string; // For page title
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  challenges: string[];
  services: Array<{
    title: string;
    description: string;
    benefits: string[];
  }>;
  cta: string;
}

export const industries: Record<string, Industry> = {
  'real-estate-marketing': {
    name: 'Real Estate Agent',
    slug: 'real-estate-marketing',
    title: 'Real Estate Marketing',
    metaDescription: 'Dominate your local market with proven real estate marketing strategies. Get more listings, attract qualified buyers, and become the go-to agent in your area.',
    heroTitle: 'Real Estate Marketing That Actually Gets You Listings',
    heroSubtitle: 'Stop competing on commission. Start dominating your local market with marketing that positions you as the obvious choice.',
    challenges: [
      'Spending hours on social media with little to show for it',
      'Losing listings to agents with better online presence',
      'Struggling to stand out in a crowded market',
      'Not getting enough qualified buyer and seller leads'
    ],
    services: [
      {
        title: 'Social Media Content & Branding',
        description: 'We create scroll-stopping content that showcases your listings and expertise.',
        benefits: [
          'Professional video content of your listings',
          'Market updates that position you as the local expert',
          'Consistent posting across Instagram, Facebook, TikTok, and YouTube',
          'Content that attracts both buyers and sellers'
        ]
      },
      {
        title: 'Lead Generation & Nurture',
        description: 'Automated systems that turn online engagement into qualified appointments.',
        benefits: [
          'Facebook & Instagram ads targeting your ideal buyers and sellers',
          'Automated email sequences for buyer and seller leads',
          'CRM setup to track and nurture every lead',
          'Landing pages optimized for maximum conversions'
        ]
      },
      {
        title: 'Local SEO & Online Visibility',
        description: 'Show up first when people search for real estate agents in your area.',
        benefits: [
          'Optimize your Google Business Profile',
          'Get found on Google Maps searches',
          'Build authority with AI-optimized content',
          'Dominate local search results'
        ]
      }
    ],
    cta: 'Get More Listings'
  },
  'loan-officer-marketing': {
    name: 'Loan Officer',
    slug: 'loan-officer-marketing',
    title: 'Loan Officer Marketing',
    metaDescription: 'Generate qualified mortgage leads and build lasting referral partnerships. Marketing strategies designed specifically for loan officers who want to dominate their market.',
    heroTitle: 'Loan Officer Marketing That Fills Your Pipeline',
    heroSubtitle: 'Build a referral machine and attract ready-to-buy borrowers with marketing that actually works.',
    challenges: [
      'Relying too heavily on realtor referrals',
      'Not getting enough direct borrower leads',
      'Struggling to differentiate yourself from other loan officers',
      'Spending money on ads that don\'t convert'
    ],
    services: [
      {
        title: 'Social Media & Content Marketing',
        description: 'Educational content that builds trust and positions you as the mortgage expert.',
        benefits: [
          'First-time homebuyer education content',
          'Rate update videos and market insights',
          'Refinance opportunity campaigns',
          'Content that real estate agents want to share'
        ]
      },
      {
        title: 'Realtor Partnership Marketing',
        description: 'Co-marketing campaigns that make you the preferred lender.',
        benefits: [
          'Joint listing promotion campaigns',
          'Co-branded buyer education materials',
          'Automated referral appreciation sequences',
          'Tools that make realtors look good'
        ]
      },
      {
        title: 'Direct Borrower Lead Generation',
        description: 'Paid advertising and SEO strategies that bring borrowers directly to you.',
        benefits: [
          'Targeted ads for first-time buyers and refinances',
          'Landing pages for specific loan products',
          'Email nurture sequences for mortgage leads',
          'Retargeting campaigns for warm prospects'
        ]
      }
    ],
    cta: 'Get More Loans'
  }
};

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries[slug];
}

export function getAllIndustrySlugs(): string[] {
  return Object.keys(industries);
}
