export interface City {
  name: string;
  slug: string;
  state: string;
  description: string;
  population?: string;
  keywords: string[];
}

export const cities: City[] = [
  {
    name: 'Naples',
    slug: 'naples',
    state: 'Florida',
    description: 'Known for its high-end shopping, world-class culture, and sophisticated dining scene, Naples is a premier luxury market in Southwest Florida.',
    population: '22,000+',
    keywords: ['luxury real estate', 'waterfront properties', 'golf communities', 'retirement destination']
  },
  {
    name: 'Fort Myers',
    slug: 'fort-myers',
    state: 'Florida',
    description: 'A rapidly growing market along the Gulf Coast, Fort Myers offers beautiful beaches and a thriving real estate market.',
    population: '95,000+',
    keywords: ['beach properties', 'growing market', 'family-friendly', 'Gulf Coast']
  },
  {
    name: 'Sarasota',
    slug: 'sarasota',
    state: 'Florida',
    description: 'A cultural hub on Florida\'s Gulf Coast, Sarasota combines arts, beaches, and a competitive real estate market.',
    population: '57,000+',
    keywords: ['cultural center', 'luxury homes', 'barrier islands', 'arts district']
  },
  {
    name: 'Fort Lauderdale',
    slug: 'fort-lauderdale',
    state: 'Florida',
    description: 'Known as the "Venice of America," Fort Lauderdale features extensive waterways and a booming luxury real estate market.',
    population: '182,000+',
    keywords: ['waterfront estates', 'boating community', 'luxury condos', 'beach lifestyle']
  },
  {
    name: 'Tallahassee',
    slug: 'tallahassee',
    state: 'Florida',
    description: 'Florida\'s capital city offers a stable market driven by government, education, and a growing tech sector.',
    population: '196,000+',
    keywords: ['state capital', 'university town', 'stable market', 'growing economy']
  },
  {
    name: 'Tampa',
    slug: 'tampa',
    state: 'Florida',
    description: 'A major metropolitan area with diverse neighborhoods, Tampa Bay is one of Florida\'s hottest real estate markets.',
    population: '400,000+',
    keywords: ['metropolitan area', 'diverse neighborhoods', 'waterfront living', 'business hub']
  },
  {
    name: 'Clearwater',
    slug: 'clearwater',
    state: 'Florida',
    description: 'Home to award-winning beaches and a strong vacation rental market, Clearwater is a Gulf Coast gem.',
    population: '117,000+',
    keywords: ['beach destination', 'vacation rentals', 'tourism market', 'coastal living']
  },
  {
    name: 'Jacksonville',
    slug: 'jacksonville',
    state: 'Florida',
    description: 'As Florida\'s largest city by area, Jacksonville offers diverse real estate opportunities from beaches to urban living.',
    population: '950,000+',
    keywords: ['largest city', 'diverse markets', 'beaches', 'affordable living']
  },
  {
    name: 'Palm Beach',
    slug: 'palm-beach',
    state: 'Florida',
    description: 'An exclusive island town, Palm Beach represents the pinnacle of luxury real estate in South Florida.',
    population: '9,000+',
    keywords: ['ultra-luxury', 'oceanfront estates', 'exclusive community', 'high-net-worth']
  },
  {
    name: 'Boca Raton',
    slug: 'boca-raton',
    state: 'Florida',
    description: 'A sophisticated coastal city with upscale communities, excellent schools, and a thriving business environment.',
    population: '98,000+',
    keywords: ['upscale living', 'gated communities', 'top schools', 'corporate headquarters']
  },
  {
    name: 'Delray Beach',
    slug: 'delray-beach',
    state: 'Florida',
    description: 'A vibrant beach town with a renowned downtown, Delray Beach combines coastal charm with urban amenities.',
    population: '68,000+',
    keywords: ['beach town', 'downtown district', 'coastal lifestyle', 'cultural events']
  },
  {
    name: 'Miami',
    slug: 'miami',
    state: 'Florida',
    description: 'A global gateway city with an ultra-competitive luxury market, Miami is Florida\'s most dynamic real estate market.',
    population: '470,000+',
    keywords: ['international market', 'luxury condos', 'waterfront properties', 'cultural diversity']
  },
  {
    name: 'Orlando',
    slug: 'orlando',
    state: 'Florida',
    description: 'Beyond theme parks, Orlando is a booming metro with strong job growth and diverse real estate opportunities.',
    population: '310,000+',
    keywords: ['tourism hub', 'job growth', 'family-friendly', 'vacation homes']
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
