export interface SEOPage {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  category?: string;
  lastModified?: Date;
}

export interface SEOTemplate {
  id: string;
  name: string;
  titleTemplate: string;
  descriptionTemplate: string;
  contentTemplate: string;
}

export interface SEOData {
  [key: string]: string | number | boolean;
}

export interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}
