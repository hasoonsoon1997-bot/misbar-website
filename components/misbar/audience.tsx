"use client";

import { Wrench, UserCheck } from "lucide-react";

export function Audience() {
  return (
    <section id="audience" className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      {/* إضاءة خلفية */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">لمن نقدم خدماتنا؟</h2>
          <p className="mt-4 text-lg text-gray-400">خدمات مصممة لاحتياجك، سواء كنت ورشة أو فرداً</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* بطاقة الورش */}
          <div className="group relative p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-yellow-500/50 hover:shadow-[0_8px_30px_rgba(245,165,36,0.15)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/20 text-yellow-500 mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">للورش ومراكز الصيانة</h3>
              <p className="text-gray-400 leading-relaxed">
                مورد موثوق لقطع الغيار الإلكترونية التي تحتاجها ورشتك. نوفر وقتك، نضمن الأصالة، ونسرّع دورة عملك.
              </p>
              <ul className="mt-6 space-y-3">
                {["أسعار جملة تنافسية", "قطع أصلية بضمان", "توفير وقت البحث", "تتبع كامل للطلبات"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* بطاقة الأفراد */}
          <div className="group relative p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-yellow-500/50 hover:shadow-[0_8px_30px_rgba(245,165,36,0.15)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <UserCheck className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">للأفراد أصحاب السيارات</h3>
              <p className="text-gray-400 leading-relaxed">
                احصل على القطعة الأصلية لسيارتك الألمانية دون عناء البحث أو مخاطر الشراء الخاطئ. نتحقق من التوافق ونشحن لبابك.
              </p>
              <ul className="mt-6 space-y-3">
                {["فحص VIN قبل الشراء", "أسعار أفضل من الوكيل", "شحن سريع مباشر", "دعم بالعربية"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
