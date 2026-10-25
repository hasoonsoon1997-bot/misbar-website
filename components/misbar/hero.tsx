"use client";

import { CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-black text-white min-h-[90vh] flex items-center">
      {/* فيديو خلفية سينمائي مضمون من رابط خارجي */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-car-driving-on-a-highway-34578-large.mp4" type="video/mp4" />
      </video>

      {/* طبقة تعتيم متدرجة */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10" />

      <div className="container-x relative z-20 py-24 sm:py-32 w-full">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-black/50 backdrop-blur-md px-5 py-2 text-sm font-medium text-yellow-500 shadow-xl">
            <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
            من فرانكفورت مباشرة إلى الخليج
          </span>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl tracking-tight text-white">
            قطع غيار ألمانية أصلية
            <span className="mt-4 block bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
              تصل بابك خلال 3-5 أيام
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 sm:text-xl max-w-2xl mx-auto leading-relaxed">
            وسيط موثوق لتوريد قطع غيار Mercedes و BMW و Audi و Porsche الأصلية، للورش وأصحاب السيارات. فحص VIN مسبق، فواتير ألمانية أصلية، وأسعار أفضل من الوكيل.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#rfq" className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-500 px-8 py-4 text-lg font-bold text-black transition-all hover:bg-yellow-400 hover:scale-105 shadow-[0_0_20px_rgba(245,165,36,0.3)]">
              اطلب عرض سعر الآن
            </a>
            <a href="#how" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
              كيف نعمل؟
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["شحن من فرانكفورت", "فحص VIN قبل الشراء", "توصيل 3-5 أيام", "فواتير أصلية"].map((item, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white backdrop-blur-md">
                <CheckCircle2 className="h-4 w-4 text-yellow-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
