import { SEOTemplate, SEOData } from './types';

export class TemplateEngine {
  /**
   * Replaces template variables in a string with actual data
   * Example: "Best {{category}} in {{location}}" with {category: 'pizza', location: 'NYC'}
   * Returns: "Best pizza in NYC"
   */
  static render(template: string, data: SEOData): string {
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      const value = data[key];
      return value !== undefined ? String(value) : match;
    });
  }

  /**
   * Generates a complete SEO page from a template and data
   */
  static generatePage(template: SEOTemplate, data: SEOData) {
    return {
      title: this.render(template.titleTemplate, data),
      description: this.render(template.descriptionTemplate, data),
      content: this.render(template.contentTemplate, data),
    };
  }

  /**
   * Capitalizes the first letter of a string
   */
  static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Converts a string to URL-friendly slug
   */
  static slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}
