import { Metadata } from 'next';
import { FAQPageSchema } from '@/components/seo/schemas';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Plane, Cpu, Disc, Settings, Zap, Car, Wrench } from 'lucide-react';
import { brandsData } from '@/lib/brandsData';
import { notFound } from 'next/navigation';

type Props = {
  params: { brand: string };
};

// هذه الدالة تخبر Next.js ببناء صفحات الماركات الأربعة مسبقاً
export async function generateStaticParams() {
  return Object.keys(brandsData).map((brand) => ({
    brand: brand,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // استخدام ?. لمنع الخطأ إذا كانت params غير معرفة
  const brandKey = params?.brand?.toLowerCase();
  const brand = brandKey ? brandsData[brandKey] : null;

  if (!brand) {
    return { title: 'غير موجود' };
  }

  return {
    title: brand.title,
    description: brand.description,
    alternates: { canonical: `https://misbar.de/parts/${brandKey}` },
  };
}

export default function BrandPage({ params }: Props) {
  // استخدام ?. مرة أخرى هنا
  const brandKey = params?.brand?.toLowerCase();
  const brand = brandKey ? brandsData[brandKey] : null;

  if (!brand) {
    notFound();
  }

  const categories = [
    { name: "كمبيوترات المحرك (ECU)", icon: Cpu, desc: "وحدات تحكم أصلية لجميع الموديلات." },
    { name: "أنظمة الفرامل", icon: Disc, desc: "أقراص، فحمات، وحساسات فرامل أصلية." },
    { name: "الإلكترونيات والحساسات", icon: Zap, desc: "حساسات وقوف، رادارات، وشاشات معلومات." },
    { name: "ناقل الحركة (الجير)", icon: Settings, desc: "قطع الميكاترونيك وناقل الحركة." },
    { name: "أنظمة التعليق", icon: Car, desc: "مساعدين هوائية وقطع نظام التعليق." },
    { name: "قطع الهيكل والمحرك", icon: Wrench, desc: "قطع ميكانيكية دقيقة وأصلية." },
  ];

  return (
    <main className="min-h-screen bg-[#05121F] text-white pt-24 pb-16" dir="rtl">
      <FAQPageSchema faqs={brand.faqs} />

      <div className="container-x mx-auto max-w-6xl px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          العودة للرئيسية
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          قطع غيار <span className="text-yellow-500">{brand.nameAr}</span> الأصلية
        </h1>

        <div className="bg-white/5 border border-yellow-500/30 rounded-2xl p-6 mb-12 shadow-[0_0_30px_rgba(245,165,36,0.1)]">
          <p className="text-lg leading-relaxed text-gray-300">
            {brand.answerFirst}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex gap-4 items-start">
            <ShieldCheck className="w-8 h-8 text-yellow-500 shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">أصالة 100%</h3>
              <p className="text-gray-400 text-sm">قطع غيار أصلية (OEM) مع فواتير رسمية من ألمانيا.</p>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex gap-4 items-start">
            <Plane className="w-8 h-8 text-yellow-500 shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">شحن سريع</h3>
              <p className="text-gray-400 text-sm">توصيل جوي مباشر من فرانكفورت إلى بابك خلال أيام.</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">فئات القطع التي نوفرها لـ {brand.nameAr}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-yellow-500/50 transition-colors group">
                <cat.icon className="w-10 h-10 text-gray-400 group-hover:text-yellow-500 mb-4 transition-colors" />
                <h3 className="text-lg font-bold mb-2">{cat.name}</h3>
                <p className="text-gray-400 text-sm">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">الأسئلة الشائعة حول قطع {brand.nameAr}</h2>
          <div className="space-y-4">
            {brand.faqs.map((faq: any, index: number) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="font-bold text-lg mb-2 text-yellow-500">{faq.question}</h3>
                <p className="text-gray-300 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-t from-yellow-500/10 to-transparent p-10 rounded-3xl border border-white/5">
          <h2 className="text-3xl font-bold mb-4">هل تبحث عن قطعة {brand.nameAr} محددة؟</h2>
          <p className="text-gray-400 mb-8">أرسل لنا رقم الهيكل (VIN) واسم القطعة، وسنوافيك بالسعر والتوفر فوراً.</p>
          <Link href="/#rfq" className="inline-flex items-center justify-center rounded-xl bg-yellow-500 px-10 py-4 text-lg font-bold text-black transition-all hover:bg-yellow-400 hover:scale-105 shadow-[0_0_20px_rgba(245,165,36,0.3)]">
            اطلب قطعة {brand.nameAr} الآن
          </Link>
        </div>
      </div>
    </main>
  );
}
