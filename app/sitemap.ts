import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://misbar.de'
  // تنسيق التاريخ المفضل لدى جوجل (سنة-شهر-يوم)
  const currentDate = new Date().toISOString().split('T')[0]
 
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    }
  ]
}
