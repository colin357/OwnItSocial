# OwnItSocial - Programmatic SEO Bot

A powerful Next.js platform with programmatic SEO bot capabilities. Generate hundreds of SEO-optimized pages automatically with customizable templates and data sources.

## Features

- **Programmatic SEO Bot**: Automatically generate SEO-optimized pages from templates
- **Multiple Templates**: Location-based, category, and comparison page templates
- **Dynamic Routing**: Next.js App Router with static generation
- **SEO Optimized**: Full metadata, structured data, and sitemap generation
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Modern, responsive styling
- **Vercel Ready**: Optimized for one-click deployment to Vercel

## Quick Start

### 1. Installation

```bash
npm install
```

### 2. Environment Setup

Copy the environment example file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and set your site URL:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 3. Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### 4. Build & Deploy

Build for production:

```bash
npm run build
npm start
```

Deploy to Vercel with one click or use the Vercel CLI:

```bash
vercel
```

## SEO Bot Usage

### View Generated Pages

Visit the dashboard at `/dashboard` to see all programmatically generated pages.

### Available Templates

#### 1. Location-Based Pages

Generate pages for services in different cities:

```typescript
{
  slug: 'web-design-new-york-ny',
  service: 'Web Design',
  city: 'New York',
  state: 'NY'
}
```

Example output: `/seo/web-design-new-york-ny`

#### 2. Category Pages

Generate comprehensive category guides:

```typescript
{
  slug: 'social-media-marketing',
  category: 'Social Media Marketing',
  industry: 'digital marketing'
}
```

Example output: `/seo/social-media-marketing`

#### 3. Comparison Pages

Generate comparison pages (template available in code):

```typescript
{
  slug: 'product-a-vs-product-b',
  productA: 'Product A',
  productB: 'Product B',
  category: 'Software'
}
```

### Adding New Pages

#### Option 1: Add to Data Sources

Edit `lib/seo/data-sources.ts` and add your data to the appropriate array:

```typescript
export const sampleLocationData: SEOData[] = [
  {
    slug: 'your-service-city-state',
    service: 'Your Service',
    city: 'City',
    state: 'ST'
  },
  // ... more entries
];
```

#### Option 2: Use the API

Send a POST request to `/api/seo/generate`:

```bash
curl -X POST http://localhost:3000/api/seo/generate \
  -H "Content-Type: application/json" \
  -d '{
    "templateId": "location",
    "data": {
      "slug": "consulting-denver-co",
      "service": "Business Consulting",
      "city": "Denver",
      "state": "CO"
    }
  }'
```

### Creating Custom Templates

1. Open `lib/seo/data-sources.ts`
2. Add a new template to the `seoTemplates` object:

```typescript
export const seoTemplates: Record<string, SEOTemplate> = {
  myTemplate: {
    id: 'myTemplate',
    name: 'My Custom Template',
    titleTemplate: '{{variable}} - {{anotherVar}} | OwnItSocial',
    descriptionTemplate: 'Description with {{variable}}',
    contentTemplate: `
# My Custom Content

This is {{variable}} in {{anotherVar}}.
    `.trim(),
  },
};
```

3. Add sample data for your template
4. Rebuild the site to generate pages

## Project Structure

```
OwnItSocial/
├── app/
│   ├── api/
│   │   └── seo/
│   │       └── generate/      # API for generating pages
│   ├── dashboard/             # View all generated pages
│   ├── seo/
│   │   └── [slug]/           # Dynamic SEO pages
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Homepage
│   ├── robots.ts             # Robots.txt
│   └── sitemap.ts            # Sitemap generation
├── lib/
│   └── seo/
│       ├── types.ts          # TypeScript types
│       ├── config.ts         # SEO configuration
│       ├── template-engine.ts # Template rendering
│       ├── content-generator.ts # Page generation
│       ├── data-sources.ts   # Templates & data
│       ├── metadata.ts       # SEO metadata helpers
│       └── structured-data.ts # Schema.org JSON-LD
├── public/                   # Static assets
└── package.json
```

## SEO Features

### Metadata

Every generated page includes:
- Title tags optimized for search engines
- Meta descriptions
- Keywords
- Open Graph tags for social media
- Twitter Card tags

### Structured Data

Support for multiple schema types:
- Organization
- Article
- Breadcrumb
- FAQ
- LocalBusiness

### Sitemap

Automatically generated at `/sitemap.xml` including:
- Homepage
- Dashboard
- All generated SEO pages

### Robots.txt

Configured at `/robots.txt` with:
- Crawler permissions
- Sitemap reference

## Customization

### Update Site Configuration

Edit `lib/seo/config.ts`:

```typescript
export const seoConfig = {
  siteName: 'Your Site Name',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com',
  defaultTitle: 'Your Default Title',
  defaultDescription: 'Your description',
  twitterHandle: '@yourhandle',
  // ... more options
};
```

### Styling

The site uses Tailwind CSS. Edit `tailwind.config.ts` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints

## API Reference

### POST /api/seo/generate

Generate new SEO pages programmatically.

**Request Body:**
```json
{
  "templateId": "location",
  "data": {
    "slug": "page-slug",
    "service": "Service Name",
    "city": "City",
    "state": "ST"
  }
}
```

**Response:**
```json
{
  "success": true,
  "pages": [...],
  "count": 1
}
```

### GET /api/seo/generate

Get available templates.

**Response:**
```json
{
  "templates": [
    { "id": "location", "name": "Location-based Pages" },
    { "id": "category", "name": "Category Pages" }
  ]
}
```

## Performance

- **Static Generation**: All pages are pre-rendered at build time
- **Fast Page Loads**: Optimized for Core Web Vitals
- **SEO Friendly**: Perfect Lighthouse SEO scores
- **Scalable**: Generate thousands of pages efficiently

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Set environment variables
4. Deploy

### Other Platforms

This is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Any Node.js hosting

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this for your own projects.

## Support

For issues and questions, please open an issue on GitHub.

---

Built with Next.js, TypeScript, and Tailwind CSS