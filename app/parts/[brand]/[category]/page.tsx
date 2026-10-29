import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { brandsData } from '@/lib/brandsData';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

// توليد جميع المسارات (ماركة + فئة) مسبقاً
export async function generateStaticParams() {
  const paths: { brand: string; category: string }[] = [];
  for (const brandKey in brandsData) {
    const brand = brandsData[brandKey];
    for (const cat of brand.categories) {
      paths.push({ brand: brandKey, category: cat.slug });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: { params: { brand: string, category: string } }): Promise<Metadata> {
  const brand = brandsData[params.brand];
  const category = brand?.categories.find((c: any) => c.slug === params.category);
  
  if (!brand || !category) return { title: 'غير موجود' };

  return {
    title: `${category.nameAr} ${brand.nameAr} الأصلية | شحن سريع للخليج - مسبار`,
    description: `اطلب ${category.nameAr} أصلية لسيارات ${brand.nameAr} من ألمانيا. فحص VIN مسبق، شحن جوي سريع، وأسعار تنافسية.`,
    alternates: { canonical: `https://misbar.de/parts/${params.brand}/${params.category}` },
  };
}

export default function CategoryPage({ params }: { params: { brand: string, category: string } }) {
  const brand = brandsData[params.brand];
  const category = brand?.categories.find((c: any) => c.slug === params.category);

  if (!brand || !category) notFound();

  return (
    <main className="min-h-screen bg-[#05121F] text-white pt-24 pb-16" dir="rtl">
      <div className="container-x mx-auto max-w-4xl px-4">
        <Link href={`/parts/${params.brand}`} className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 mb-8">
          <ArrowLeft className="w-4 h-4" /> العودة لقطع {brand.nameAr}
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {category.nameAr} <span className="text-yellow-500">{brand.nameAr}</span>
        </h1>

        {/* AEO: فقرة الإجابة المباشرة */}
        <div className="bg-white/5 border border-yellow-500/30 rounded-2xl p-6 mb-10 shadow-[0_0_30px_rgba(245,165,36,0.1)]">
          <p className="text-lg leading-relaxed text-gray-300">
            <strong className="text-white">هل تبحث عن {category.nameAr} أصلية لسيارتك {brand.nameAr}؟</strong> يوفر مسبار قطع {category.nameAr} الأصلية (OEM) مباشرة من فرانكفورت، مع فحص دقيق لرقم الهيكل (VIN) وشحن جوي سريع إلى السعودية والإمارات والكويت خلال 3-5 أيام.
          </p>
        </div>

        {/* محتوى إضافي لبناء السلطة الموضوعية */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold">لماذا تختار {category.nameAr} من مسبار؟</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-500" /> قطع أصلية 100% مع فواتير ألمانية رسمية.</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-500" /> نتحقق من توافق القطعة مع رقم هيكل سيارتك (VIN) قبل الشراء.</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-500" /> شحن جوي سريع ومباشر من فرانكفورت إلى بابك.</li>
          </ul>
        </div>

        <div className="text-center p-10 bg-yellow-500/5 rounded-3xl border border-yellow-500/20">
          <h2 className="text-2xl font-bold mb-4">اطلب {category.nameAr} {brand.nameAr} الآن</h2>
          <Link href="/#rfq" className="inline-flex items-center justify-center rounded-xl bg-yellow-500 px-8 py-4 text-lg font-bold text-black hover:bg-yellow-400 hover:scale-105 transition-all">
            اطلب عرض سعر
          </Link>
        </div>
      </div>
    </main>
  );
}
