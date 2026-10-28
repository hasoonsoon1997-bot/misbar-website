import { MetadataRoute } from 'next'
import { brandsData } from '@/lib/brandsData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://misbar.de';
  const currentDate = new Date().toISOString();

  // 1. الصفحات الثابتة
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    }
  ];

  // 2. إنشاء روابط الماركات تلقائياً من ملف البيانات
  const brandRoutes = Object.keys(brandsData).map((brand) => ({
    url: `${baseUrl}/parts/${brand}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...brandRoutes];
}
