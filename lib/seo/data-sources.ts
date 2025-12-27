import { SEOData, SEOTemplate } from './types';

/**
 * Example SEO templates for different types of content
 */
export const seoTemplates: Record<string, SEOTemplate> = {
  location: {
    id: 'location',
    name: 'Location-based Pages',
    titleTemplate: 'Best {{service}} in {{city}}, {{state}} | OwnItSocial',
    descriptionTemplate: 'Discover the top {{service}} services in {{city}}, {{state}}. Find reviews, pricing, and more for {{service}} in your area.',
    contentTemplate: `
# Best {{service}} in {{city}}, {{state}}

Looking for quality {{service}} in {{city}}? You've come to the right place. OwnItSocial helps you discover the best {{service}} providers in {{city}}, {{state}}.

## Why Choose {{service}} in {{city}}?

{{city}} is known for its excellent {{service}} options. Whether you're a local resident or just visiting, finding the right {{service}} can make all the difference.

## Top Features

- Professional {{service}} providers in {{city}}
- Verified reviews and ratings
- Competitive pricing
- Easy booking and scheduling

## Get Started Today

Ready to find the perfect {{service}} in {{city}}, {{state}}? Browse our listings and connect with top-rated providers in your area.
    `.trim(),
  },

  category: {
    id: 'category',
    name: 'Category Pages',
    titleTemplate: '{{category}} Guide - Everything You Need to Know | OwnItSocial',
    descriptionTemplate: 'Complete guide to {{category}}. Learn about features, benefits, pricing, and find the best {{category}} solutions for your needs.',
    contentTemplate: `
# {{category}} - Complete Guide

Welcome to your comprehensive guide for {{category}}. Whether you're new to {{category}} or looking to enhance your knowledge, this guide has everything you need.

## What is {{category}}?

{{category}} is an essential part of modern {{industry}}. Understanding {{category}} can help you make better decisions and achieve your goals.

## Key Benefits

- Improved efficiency
- Cost-effective solutions
- Expert support
- Proven results

## Getting Started

Ready to explore {{category}}? Browse our curated resources and find the perfect solution for your needs.
    `.trim(),
  },

  comparison: {
    id: 'comparison',
    name: 'Comparison Pages',
    titleTemplate: '{{productA}} vs {{productB}} - Detailed Comparison 2025',
    descriptionTemplate: 'Compare {{productA}} and {{productB}}. See features, pricing, pros and cons to help you choose the best option for your needs.',
    contentTemplate: `
# {{productA}} vs {{productB}} - Which is Better?

Trying to decide between {{productA}} and {{productB}}? This comprehensive comparison will help you make an informed decision.

## Overview

Both {{productA}} and {{productB}} are popular choices in the {{category}} space. Let's dive into what makes each unique.

## Key Differences

### {{productA}}
- {{featureA1}}
- {{featureA2}}
- Best for: {{bestForA}}

### {{productB}}
- {{featureB1}}
- {{featureB2}}
- Best for: {{bestForB}}

## Final Verdict

The choice between {{productA}} and {{productB}} depends on your specific needs and preferences. Consider your budget, requirements, and goals when making your decision.
    `.trim(),
  },
};

/**
 * Example data for generating SEO pages
 * In a real application, this would come from a database or API
 */
export const sampleLocationData: SEOData[] = [
  { slug: 'web-design-new-york-ny', service: 'Web Design', city: 'New York', state: 'NY' },
  { slug: 'web-design-los-angeles-ca', service: 'Web Design', city: 'Los Angeles', state: 'CA' },
  { slug: 'web-design-chicago-il', service: 'Web Design', city: 'Chicago', state: 'IL' },
  { slug: 'seo-services-miami-fl', service: 'SEO Services', city: 'Miami', state: 'FL' },
  { slug: 'seo-services-seattle-wa', service: 'SEO Services', city: 'Seattle', state: 'WA' },
  { slug: 'marketing-boston-ma', service: 'Digital Marketing', city: 'Boston', state: 'MA' },
  { slug: 'marketing-austin-tx', service: 'Digital Marketing', city: 'Austin', state: 'TX' },
  { slug: 'consulting-san-francisco-ca', service: 'Business Consulting', city: 'San Francisco', state: 'CA' },
];

export const sampleCategoryData: SEOData[] = [
  { slug: 'social-media-marketing', category: 'Social Media Marketing', industry: 'digital marketing' },
  { slug: 'content-creation', category: 'Content Creation', industry: 'digital marketing' },
  { slug: 'email-marketing', category: 'Email Marketing', industry: 'digital marketing' },
  { slug: 'brand-strategy', category: 'Brand Strategy', industry: 'marketing' },
  { slug: 'web-development', category: 'Web Development', industry: 'technology' },
];

/**
 * Data source manager for SEO bot
 */
export class DataSourceManager {
  /**
   * Fetches data for a specific template type
   */
  static getData(templateId: string): SEOData[] {
    switch (templateId) {
      case 'location':
        return sampleLocationData;
      case 'category':
        return sampleCategoryData;
      default:
        return [];
    }
  }

  /**
   * Adds new data to a template type
   */
  static addData(templateId: string, data: SEOData): void {
    // In a real application, this would save to a database
    console.log(`Adding data to ${templateId}:`, data);
  }

  /**
   * Gets all available template IDs
   */
  static getTemplateIds(): string[] {
    return Object.keys(seoTemplates);
  }
}
