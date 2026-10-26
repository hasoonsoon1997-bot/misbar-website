import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // ⚠️ غير هذا الرابط لاحقاً إلى دومينك الجديد
  const baseUrl = 'https://misbar.de'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
