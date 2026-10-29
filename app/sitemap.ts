import { MetadataRoute } from 'next'
import { brandsData } from '@/lib/brandsData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://misbar.de';
  const currentDate = new Date().toISOString();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    }
  ];

  // إضافة صفحات الماركات والفئات تلقائياً
  for (const brandKey in brandsData) {
    const brand = brandsData[brandKey];
    
    // رابط الماركة (Hub)
    routes.push({
      url: `${baseUrl}/parts/${brandKey}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // روابط الفئات (Spoke)
    for (const cat of brand.categories) {
      routes.push({
        url: `${baseUrl}/parts/${brandKey}/${cat.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  return routes;
}
