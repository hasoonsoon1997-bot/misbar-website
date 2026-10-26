import { Metadata } from 'next';
import { FAQPageSchema } from '@/components/seo/schemas';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Plane } from 'lucide-react';

// 1. إعدادات الـ SEO لهذه الصفحة
export const metadata: Metadata = {
  title: "قطع غيار مرسيدس أصلية | شحن سريع من فرانكفورت للخليج - مسبار",
  description: "اطلب قطع غيار مرسيدس (Mercedes-Benz) الأصلية من ألمانيا. فحص VIN، شحن جوي سريع 3-5 أيام إلى السعودية والإمارات والكويت مع فواتير أصلية.",
  alternates: {
    canonical: "https://misbar.de/parts/mercedes",
  },
};

// 2. محتوى الصفحة
export default function MercedesPage() {
  const faqs = [
    { 
      question: "كيف أتأكد أن قطعة غيار مرسيدس متوافقة مع سيارتي؟", 
      answer: "نحن نطلب دائماً رقم الهيكل (VIN) المكون من 17 خانة لسيارتك. يقوم فريقنا الفني في ألمانيا بالتحقق من التوافق الدقيق للقطعة قبل الشراء والشحن." 
    },
    { 
      question: "كم تستغرق مدة الشحن إلى السعودية أو الإمارات؟", 
      answer: "نستخدم الشحن الجوي السريع من فرانكفورت. تستغرق الشحنة عادة من 3 إلى 5 أيام عمل لتصل إلى بابك، مع توفير رقم تتبع." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#05121F] text-white pt-24 pb-16" dir="rtl">
      {/* إضافة الـ Schema الخاص بالأسئلة */}
      <FAQPageSchema faqs={faqs} />

      <div className="container-x mx-auto max-w-4xl">
        {/* زر العودة */}
        <Link href="/" className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          العودة للرئيسية
        </Link>

        {/* العنوان الرئيسي */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          قطع غيار <span className="text-yellow-500">مرسيدس</span> الأصلية
        </h1>

        {/* فقرة الإجابة المباشرة (AEO) - مهمة جداً للذكاء الاصطناعي */}
        <div className="bg-white/5 border border-yellow-500/30 rounded-2xl p-6 mb-10 shadow-[0_0_30px_rgba(245,165,36,0.1)]">
          <p className="text-lg leading-relaxed text-gray-300">
            <strong className="text-white">مسبار</strong> هو وسيطك الموثوق لتوريد قطع غيار <strong className="text-white">مرسيدس-بنز (Mercedes-Benz)</strong> الأصلية مباشرة من فرانكفورت، ألمانيا. نوفر فحص توافق رقم الهيكل (VIN)، وشحن جوي سريع خلال 3-5 أيام إلى السعودية، الإمارات، الكويت، قطر، والبحرين، مع توفير فواتير ألمانية رسمية لضمان الأصالة.
          </p>
        </div>

        {/* المميزات */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <ShieldCheck className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">أصالة 100%</h3>
            <p className="text-gray-400">قطع غيار أصلية (OEM) مع فواتير رسمية من ألمانيا.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <Plane className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">شحن سريع</h3>
            <p className="text-gray-400">توصيل جوي مباشر من فرانكفورت إلى بابك خلال أيام.</p>
          </div>
        </div>

        {/* قسم الأسئلة الشائعة */}
        <h2 className="text-2xl font-bold mb-6">الأسئلة الشائعة حول قطع مرسيدس</h2>
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="font-bold text-lg mb-2 text-yellow-500">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* زر طلب عرض السعر */}
        <div className="text-center">
          <Link href="/#rfq" className="inline-flex items-center justify-center rounded-xl bg-yellow-500 px-8 py-4 text-lg font-bold text-black transition-all hover:bg-yellow-400 hover:scale-105">
            اطلب قطعة مرسيدس الآن
          </Link>
        </div>
      </div>
    </main>
  );
}
