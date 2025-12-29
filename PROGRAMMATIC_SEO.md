# Programmatic SEO Documentation

## Overview

This website now has a programmatic SEO system that automatically generates location-specific pages for your services. Currently, it generates **26 unique pages** (2 industries × 13 cities).

## Current Setup

### Industries
- **Real Estate Marketing** (`/real-estate-marketing`)
- **Loan Officer Marketing** (`/loan-officer-marketing`)

### Cities (Florida)
1. Naples
2. Fort Myers
3. Sarasota
4. Fort Lauderdale
5. Tallahassee
6. Tampa
7. Clearwater
8. Jacksonville
9. Palm Beach
10. Boca Raton
11. Delray Beach
12. Miami
13. Orlando

### Generated URLs

Examples of automatically generated pages:
- `/real-estate-marketing/miami`
- `/real-estate-marketing/naples`
- `/loan-officer-marketing/tampa`
- `/loan-officer-marketing/orlando`
- etc.

Plus a hub page at `/locations` that showcases all available markets.

## How to Expand

### Adding More Cities

Edit `/app/data/cities.ts` and add new city objects to the array:

```typescript
{
  name: 'Cape Coral',
  slug: 'cape-coral',
  state: 'Florida',
  description: 'Your description of the market...',
  population: '200,000+',
  keywords: ['keyword1', 'keyword2', 'keyword3']
}
```

**Important:** The `slug` must be URL-friendly (lowercase, no spaces, use hyphens).

### Adding More Industries

Edit `/app/data/industries.ts` and add new industry objects:

```typescript
'mortgage-broker-marketing': {
  name: 'Mortgage Broker',
  slug: 'mortgage-broker-marketing',
  title: 'Mortgage Broker Marketing',
  metaDescription: 'Your meta description...',
  heroTitle: 'Your hero headline...',
  heroSubtitle: 'Your hero subtitle...',
  challenges: [
    'Challenge 1',
    'Challenge 2',
    'Challenge 3',
  ],
  services: [
    {
      title: 'Service Name',
      description: 'Service description...',
      benefits: [
        'Benefit 1',
        'Benefit 2',
      ]
    }
  ],
  cta: 'Your CTA text'
}
```

### Expanding to Other States

1. Update city objects to include different states
2. Optionally create state-specific data files (e.g., `cities-georgia.ts`)
3. Merge city arrays in the main page component

Example:
```typescript
import { cities as floridaCities } from '@/app/data/cities-florida';
import { cities as georgiaCities } from '@/app/data/cities-georgia';

const allCities = [...floridaCities, ...georgiaCities];
```

## SEO Benefits

### What's Optimized

1. **Unique Titles & Meta Descriptions**: Each page has location and industry-specific metadata
2. **Structured URLs**: Clean, keyword-rich URLs (`/real-estate-marketing/miami`)
3. **Unique Content**: Each page combines industry template + city-specific information
4. **Internal Linking**: Hub page at `/locations` links to all programmatic pages
5. **Keyword Targeting**: Pages target "[industry] in [city]" queries

### Keywords Targeted

- "Real Estate Marketing Miami"
- "Loan Officer Marketing Tampa"
- "Real Estate Agent Marketing Naples"
- "Mortgage Marketing Jacksonville"
- etc.

## Build Process

When you run `npm run build`, Next.js will:

1. Call `generateStaticParams()` which creates all industry × city combinations
2. Pre-render all 26 pages as static HTML
3. Generate optimized metadata for each page
4. Create a sitemap with all URLs

This means:
- ⚡ Lightning-fast page loads (static HTML)
- 🔍 Better SEO (crawlable content)
- 💰 Lower hosting costs (no server rendering needed)

## Testing Pages

Visit these URLs to test:
- http://localhost:3000/real-estate-marketing/miami
- http://localhost:3000/loan-officer-marketing/tampa
- http://localhost:3000/locations

## Expansion Ideas

### More Industries
- Title Company Marketing
- Home Inspector Marketing
- Property Management Marketing
- Real Estate Photography Marketing

### More Service Variations
- Create sub-pages like:
  - `/real-estate-marketing/miami/social-media`
  - `/real-estate-marketing/miami/paid-ads`
  - `/real-estate-marketing/miami/email-marketing`

### More Locations
- Expand to other Florida cities
- Expand to Georgia, North Carolina, South Carolina
- Target county-level pages

### Rich Content
- Add local market statistics
- Include neighborhood-specific data
- Embed local testimonials
- Add location-specific images

## File Structure

```
app/
├── [industry]/
│   └── [city]/
│       └── page.tsx          # Dynamic page template
├── data/
│   ├── cities.ts             # City data
│   └── industries.ts         # Industry templates
├── locations/
│   └── page.tsx              # Hub page
└── page.tsx                  # Main homepage
```

## Monitoring Performance

Track these metrics in Google Search Console:
- Impressions for "[industry] [city]" queries
- Click-through rates for programmatic pages
- Average position for location-based keywords
- Pages indexed (should be 26+)

## Next Steps

1. **Add More Cities**: Start with major FL markets (Cape Coral, Lakeland, etc.)
2. **Create More Industries**: Add related verticals
3. **Local Content**: Add city-specific images, testimonials, case studies
4. **Build Backlinks**: Get local citations and backlinks to programmatic pages
5. **Track Rankings**: Monitor keyword rankings in Google Search Console

## Questions?

The programmatic system is designed to be easily expandable. The most common expansions are:
- Adding more cities (easiest)
- Adding more industries (moderate)
- Adding service sub-pages (advanced)

All changes to data files will automatically regenerate pages on next build!
