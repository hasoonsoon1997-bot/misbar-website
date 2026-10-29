import { Metadata } from 'next';
import { FAQPageSchema } from '@/components/seo/schemas';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Plane } from 'lucide-react';
import { brandsData } from '@/lib/brandsData';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(brandsData).map((brand) => ({ brand }));
}

export async function generateMetadata({ params }: { params: { brand: string } }): Promise<Metadata> {
  const brandKey = params?.brand?.toLowerCase();
  const brand = brandsData[brandKey];
  if (!brand) return { title: 'غير موجود' };
  return {
    title: brand.title,
    description: brand.description,
    alternates: { canonical: `https://misbar.de/parts/${brandKey}` },
  };
}

export default function BrandPage({ params }: { params: { brand: string } }) {
  const brandKey = params?.brand?.toLowerCase();
  const brand = brandsData[brandKey];
  if (!brand) notFound();

  return (
    <main className="min-h-screen bg-[#05121F] text-white pt-24 pb-16" dir="rtl">
      <FAQPageSchema faqs={brand.faqs} />
      <div className="container-x mx-auto max-w-6xl px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 mb-8">
          <ArrowLeft className="w-4 h-4" /> العودة للرئيسية
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          قطع غيار <span className="text-yellow-500">{brand.nameAr}</span> الأصلية
        </h1>

        <div className="bg-white/5 border border-yellow-500/30 rounded-2xl p-6 mb-12">
          <p className="text-lg leading-relaxed text-gray-300">{brand.answerFirst}</p>
        </div>

        <h2 className="text-2xl font-bold mb-6">تصفح القطع حسب الفئة</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {brand.categories.map((cat: any) => (
            <Link key={cat.slug} href={`/parts/${brandKey}/${cat.slug}`} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-yellow-500/50 transition-colors group">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-500 transition-colors">{cat.nameAr}</h3>
              <p className="text-gray-400 text-sm">{cat.desc}</p>
            </Link>
          ))}
        </div>

        <div className="text-center bg-gradient-to-t from-yellow-500/10 to-transparent p-10 rounded-3xl border border-white/5">
          <h2 className="text-3xl font-bold mb-4">هل تبحث عن قطعة {brand.nameAr} محددة؟</h2>
          <Link href="/#rfq" className="inline-flex items-center justify-center rounded-xl bg-yellow-500 px-10 py-4 text-lg font-bold text-black transition-all hover:bg-yellow-400 hover:scale-105">
            اطلب قطعتك الآن
          </Link>
        </div>
      </div>
    </main>
  );
}
