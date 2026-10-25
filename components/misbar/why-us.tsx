"use client";

import { ShieldCheck, Plane, ReceiptText, Cpu, Headphones, PackageCheck } from "lucide-react";

export function WhyUs() {
  const cards = [
    { title: "فحص VIN مسبق", desc: "نتحقق من توافق القطعة مع رقم هيكل سيارتك قبل الشراء.", icon: ShieldCheck },
    { title: "شحن جوي سريع", desc: "من فرانكفورت مباشرة إلى بابك خلال 3-5 أيام عمل.", icon: Plane },
    { title: "أسعار وفواتير أصلية", desc: "أقل من الوكيل، مع فواتير ألمانية رسمية تثبت الأصالة.", icon: ReceiptText },
    { title: "قطع إلكترونية موثوقة", desc: "تخصص في ECU والحساسات ووحدات الميكاترونيك والشاشات.", icon: Cpu },
    { title: "خدمة مخصصة", desc: "تواصل مباشر بالعربية مع فريقنا في ألمانيا.", icon: Headphones },
    { title: "متابعة حتى التسليم", desc: "تتبع كامل للشحنة وتواصل مستمر حتى الاستلام.", icon: PackageCheck },
  ];

  return (
    <section id="why" className="py-24 bg-gradient-to-b from-black via-[#0B1F3A] to-black relative overflow-hidden">
      {/* إضاءات خلفية */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">لماذا تختارنا؟</h2>
          <p className="mt-4 text-lg text-gray-400">ستة أسباب تجعلنا شريكك الأول</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-yellow-500/50 hover:shadow-[0_8px_30px_rgba(245,165,36,0.15)] overflow-hidden"
              >
                {/* تأثير لمعان داخلي */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/20 text-yellow-500 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
