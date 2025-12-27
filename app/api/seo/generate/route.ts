import { NextRequest, NextResponse } from 'next/server';
import { ContentGenerator } from '@/lib/seo/content-generator';
import { seoTemplates } from '@/lib/seo/data-sources';
import { SEOData } from '@/lib/seo/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { templateId, data } = body;

    if (!templateId || !data) {
      return NextResponse.json(
        { error: 'Template ID and data are required' },
        { status: 400 }
      );
    }

    const template = seoTemplates[templateId];

    if (!template) {
      return NextResponse.json(
        { error: 'Template not found' },
        { status: 404 }
      );
    }

    // Generate pages from the provided data
    const dataArray = Array.isArray(data) ? data : [data];
    const pages = ContentGenerator.generatePages(template, dataArray as SEOData[]);

    return NextResponse.json({
      success: true,
      pages,
      count: pages.length,
    });
  } catch (error) {
    console.error('Error generating SEO pages:', error);
    return NextResponse.json(
      { error: 'Failed to generate pages' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const templates = Object.entries(seoTemplates).map(([id, template]) => ({
    id,
    name: template.name,
  }));

  return NextResponse.json({
    templates,
  });
}
