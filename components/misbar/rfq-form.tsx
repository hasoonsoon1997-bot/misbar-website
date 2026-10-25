"use client";

import { Send, ShieldCheck } from "lucide-react";

export function RfqForm() {
  return (
    <section id="rfq" className="py-24 bg-gradient-to-b from-[#05121F] to-[#0B1F3A] relative overflow-hidden">
      {/* إضاءة خلفية */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">اطلب عرض سعر الآن</h2>
            <p className="mt-4 text-lg text-gray-400">املأ النموذج وسيتواصل معك فريقنا خلال ساعات العمل</p>
          </div>

          <form className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="grid gap-6 sm:grid-cols-2">
              
              {/* نوع العميل */}
              <div className="sm:col-span-2 flex gap-4 mb-2">
                <label className="flex-1 cursor-pointer">
                  <input type="radio" name="customerType" value="workshop" className="peer sr-only" defaultChecked />
                  <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-center text-sm font-semibold text-gray-400 transition-all peer-checked:border-yellow-500 peer-checked:bg-yellow-500/10 peer-checked:text-yellow-500 hover:bg-black/40">
                    ورشة / مركز صيانة
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input type="radio" name="customerType" value="individual" className="peer sr-only" />
                  <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-center text-sm font-semibold text-gray-400 transition-all peer-checked:border-yellow-500 peer-checked:bg-yellow-500/10 peer-checked:text-yellow-500 hover:bg-black/40">
                    فرد
                  </div>
                </label>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">اسم الورشة أو الاسم الكامل *</label>
                <input type="text" required className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-all" placeholder="مثال: ورشة النخبة" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">رقم الواتساب *</label>
                <input type="tel" required className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-all text-left" placeholder="+966XXXXXXXXX" dir="ltr" />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-gray-300 flex items-center gap-2">
                  رقم الهيكل (VIN) - 17 خانة *
                  <ShieldCheck className="w-4 h-4 text-yellow-500" />
                </label>
                <input type="text" required minLength={17} maxLength={17} className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-all font-mono tracking-widest uppercase" placeholder="17 خانة (بدون I O Q)" dir="ltr" />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-gray-300">اسم القطعة أو رقمها *</label>
                <input type="text" required className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-all" placeholder="مثال: ECU أو رقم القطعة" />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-gray-300">ملاحظات إضافية</label>
                <textarea rows={3} className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-all" placeholder="أي تفاصيل إضافية..."></textarea>
              </div>
            </div>

            <button type="button" className="mt-8 w-full flex items-center justify-center gap-2 rounded-xl bg-yellow-500 px-6 py-4 text-lg font-bold text-black transition-all hover:bg-yellow-400 hover:scale-[1.02] shadow-[0_0_20px_rgba(245,165,36,0.3)]">
              <Send className="w-5 h-5" />
              إرسال الطلب
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
