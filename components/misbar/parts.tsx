"use client";

import { Cpu, Cog, Radar, Monitor, Lightbulb, Fuel } from "lucide-react";

export function Parts() {
  const items = [
    { name: "كمبيوترات المحرك (ECU)", desc: "وحدات تحكم أصلية لجميع الماركات الألمانية.", icon: Cpu },
    { name: "وحدات الميكاترونيك", desc: "لناقل الحركة DSG و ZF.", icon: Cog },
    { name: "الحساسات والرادارات", desc: "حساسات وقوف ورادارات مسافة وأكسجين.", icon: Radar },
    { name: "الشاشات الرقمية", desc: "شاشات معلومات وترفيه أصلية ووحدات تحكم.", icon: Monitor },
    { name: "وحدات الإضاءة", desc: "LED و Xenon ووحدات تحكم إضاءة أصلية.", icon: Lightbulb },
    { name: "مضخات وحاقنات", desc: "مضخات وقود عالية الضغط وحاقنات دقيقة.", icon: Fuel },
  ];

  return (
    <section id="parts" className="py-24 bg-[#05121F] relative overflow-hidden">
      {/* إضاءات خلفية */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">القطع التي نركز عليها</h2>
          <p className="mt-4 text-lg text-gray-400">قطع إلكترونية أصلية عالية القيمة وخفيفة الوزن</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-yellow-500/50 hover:shadow-[0_8px_30px_rgba(245,165,36,0.15)] overflow-hidden"
              >
                {/* تأثير لمعان داخلي */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
