import { MetadataRoute } from 'next'
import { brandsData } from '@/lib/brandsData'
import { blogData } from '@/lib/blogData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://misbar.de';
  const currentDate = new Date().toISOString();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    }
  ];

  // إضافة الماركات والفئات
  for (const brandKey in brandsData) {
    const brand = brandsData[brandKey];
    routes.push({
      url: `${baseUrl}/parts/${brandKey}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    for (const cat of brand.categories) {
      routes.push({
        url: `${baseUrl}/parts/${brandKey}/${cat.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  // إضافة المقالات
  for (const slug in blogData) {
    routes.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  return routes;
}
