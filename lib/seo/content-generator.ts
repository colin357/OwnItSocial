import { SEOPage, SEOTemplate, SEOData } from './types';
import { TemplateEngine } from './template-engine';

export class ContentGenerator {
  /**
   * Generates multiple SEO pages from a template and data array
   */
  static generatePages(
    template: SEOTemplate,
    dataArray: SEOData[]
  ): SEOPage[] {
    return dataArray.map((data) => {
      const generated = TemplateEngine.generatePage(template, data);
      const slug = TemplateEngine.slugify(data.slug as string || generated.title);

      return {
        slug,
        title: generated.title,
        description: generated.description,
        content: generated.content,
        keywords: this.extractKeywords(generated.content),
        category: data.category as string,
        lastModified: new Date(),
      };
    });
  }

  /**
   * Extracts keywords from content (simple implementation)
   */
  private static extractKeywords(content: string): string[] {
    // Remove common words and extract unique keywords
    const commonWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for']);
    const words = content
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3 && !commonWords.has(word));

    // Get unique words and return top 10
    const uniqueWords = Array.from(new Set(words));
    return uniqueWords.slice(0, 10);
  }

  /**
   * Generates a batch of pages with pagination support
   */
  static generateBatch(
    template: SEOTemplate,
    dataArray: SEOData[],
    batchSize: number = 100,
    batchNumber: number = 0
  ): SEOPage[] {
    const start = batchNumber * batchSize;
    const end = start + batchSize;
    const batchData = dataArray.slice(start, end);

    return this.generatePages(template, batchData);
  }
}
