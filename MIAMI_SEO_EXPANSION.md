# Miami SEO Landing Pages - Expansion Guide

## What's Been Created

We've built a foundation for Miami-focused programmatic SEO with:

### Pages Created:
1. **Marketing Agency Miami** (`/marketing-agency-miami`)
   - Targets: "marketing agency miami", "miami marketing agency", "marketing companies miami"
   - Volume: 590/month

2. **Digital Marketing Miami** (`/digital-marketing-miami`)
   - Targets: "digital marketing miami", "digital marketing agency miami", "online marketing miami"
   - Volume: 480/month

3. **Best Marketing Agencies Miami** (`/best-marketing-agencies-miami`)
   - Comparison page featuring Own It Social + 3 competitors
   - Targets: "best marketing agencies miami", "top marketing agencies miami"
   - Volume: Varies

### Data Structures Created:
- `/app/data/miami-services.ts` - Miami market data + service definitions
- `/app/data/competitors.ts` - Competitor profiles for comparison pages
- `/public/best-marketing-agencies-miami_list_2025-12-29.csv` - Full keyword list

## Keywords from CSV (Remaining to Build)

Based on the CSV data, here are the high-priority keywords still to target:

### Service-Specific Pages (High Priority):
1. **Advertising Agency Miami** - 590/month
   - URL: `/advertising-agency-miami`
   - Service slug: `advertising-agency`

2. **Social Media Marketing Miami** - 320/month
   - URL: `/social-media-marketing-miami`
   - Service slug: `social-media-marketing`

3. **SEO Miami** - 260/month
   - URL: `/seo-miami`
   - Service slug: `seo`

### Variations (Lower Priority):
- `/ad-agencies-miami` (390/month)
- `/marketing-companies-miami-fl` (110/month)
- `/internet-marketing-miami` (140/month)
- `/miami-marketing-firms` (320/month)

## How to Create New Service Pages

### Step 1: Add Service to Data File

Edit `/app/data/miami-services.ts` and add a new service object (you can copy the existing structure):

```typescript
{
  slug: 'advertising-agency',
  title: 'Advertising Agency',
  h1: 'Advertising Agency Miami',
  metaTitle: 'Advertising Agency Miami FL | Paid Ads, OOH, Creative | Own It Social',
  metaDescription: 'Miami advertising agency creating campaigns that break through...',
  heroSubtitle: 'Advertising campaigns designed to dominate Miami...',
  description: 'Full description here...',
  challenges: [
    'Challenge 1',
    'Challenge 2',
    // Add 5-6 challenges
  ],
  benefits: [
    'Benefit 1',
    'Benefit 2',
    // Add 5-6 benefits
  ],
}
```

### Step 2: Create the Page

Copy `/app/marketing-agency-miami/page.tsx` to a new directory:

```bash
cp -r app/marketing-agency-miami app/advertising-agency-miami
```

### Step 3: Update the Service Reference

In the new `page.tsx`, change line 5:

```typescript
const service = getServiceBySlug('advertising-agency')!;
```

### Step 4: Update Metadata (Optional)

Update keywords in the metadata if needed:

```typescript
export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: 'advertising agency miami, miami advertising, ad agency miami',
};
```

That's it! The page will automatically pull all content from the data file.

## How to Create New Comparison Pages

### For "Top X Agencies" or "Best Agencies" Keywords:

1. **Research Competitors**
   - Use the CSV "Competitors" column to find agencies ranking for that keyword
   - Visit their websites to gather info

2. **Add Competitors to Data**

   Edit `/app/data/competitors.ts`:

   ```typescript
   {
     name: 'Agency Name',
     website: 'example.com',
     founded: '2020',
     employees: '10-50',
     specialties: ['Service 1', 'Service 2'],
     pros: ['Pro 1', 'Pro 2'],
     cons: ['Con 1', 'Con 2'],
     pricing: '$$$',
     bestFor: 'Who this agency is best for',
   }
   ```

3. **Create Comparison Page**

   Copy `/app/best-marketing-agencies-miami/page.tsx` to new location:

   ```bash
   cp -r app/best-marketing-agencies-miami app/top-digital-marketing-agencies-miami
   ```

4. **Update Metadata**

   Change title, description, and keywords to match new focus

## SEO Best Practices

### On-Page Optimization:
- ✅ Unique H1 for each page
- ✅ Miami-specific content and data
- ✅ Schema-ready structure (can add JSON-LD later)
- ✅ Internal linking between pages
- ✅ Mobile-responsive design

### Content Differentiation:
Even though pages use templates, each is unique because:
- Different service focus (marketing vs. digital vs. advertising)
- City-specific data (Miami demographics, industries, neighborhoods)
- Unique challenges and benefits per service
- Different target keywords

### Next Steps for Maximum Impact:

1. **Add Remaining Service Pages** (3-4 hours)
   - Advertising agency Miami
   - SEO Miami
   - Social media marketing Miami

2. **Create 2-3 More Comparison Pages** (2-3 hours)
   - Top digital marketing agencies Miami
   - Best SEO companies Miami
   - Top ad agencies Miami

3. **Add Schema Markup** (1-2 hours)
   - LocalBusiness schema
   - Service schema
   - Review/Rating schema

4. **Build Internal Linking** (30 mins)
   - Add Miami pages to main nav
   - Create hub page linking to all Miami pages
   - Add cross-links between related pages

5. **Create Supporting Content** (ongoing)
   - Blog posts about Miami marketing
   - Case studies from Miami clients
   - Neighborhood-specific guides

## URL Structure

Current structure is flat and keyword-rich:
```
/marketing-agency-miami
/digital-marketing-miami
/best-marketing-agencies-miami
```

This is SEO-friendly because:
- Short, memorable URLs
- Keywords in URL
- Easy to share
- Clean structure

## Tracking Success

Monitor these metrics in Google Search Console:

### Rankings:
- Target keywords ranking in top 10
- Featured snippet opportunities
- Local pack rankings

### Traffic:
- Organic sessions from Miami
- Click-through rates
- Time on page

### Conversions:
- Form submissions from these pages
- Phone calls
- Consultation bookings

## Quick Wins

### Immediate (Do Today):
1. Submit pages to Google Search Console
2. Build 2-3 backlinks from Miami directories
3. Add pages to sitemap

### This Week:
1. Create 2-3 more service pages
2. Add Schema markup
3. Write 1-2 blog posts linking to these pages

### This Month:
1. Build all remaining pages from CSV
2. Get local citations (Yelp, Google Business, etc.)
3. Create Miami case study content

## Technical Notes

### Build Process:
All pages are static (pre-rendered at build time):
```bash
npm run build
```

This means:
- Lightning-fast page loads
- Better SEO
- Lower hosting costs
- Great Core Web Vitals scores

### Deployment:
Push to GitHub and Vercel auto-deploys:
```bash
git add .
git commit -m "Add new Miami landing pages"
git push
```

## Questions?

The system is designed to scale easily. Each new page requires:
1. Adding service to data file (5 mins)
2. Copying page template (1 min)
3. Updating service reference (1 min)

Total time per page: ~7 minutes once you have the content written.
