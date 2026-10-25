"use client";

import { Package, User, CreditCard, FileCheck, Truck, ShieldCheck, Info, MessageCircle } from "lucide-react";

export function ShippingInfo() {
  return (
    <section id="shipping" className="py-24 bg-[#05121F] relative overflow-hidden">
      {/* إضاءات خلفية */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px]" />

      <div className="container-x relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl flex items-center justify-center gap-3">
            <Package className="text-yellow-500 w-8 h-8" />
            معلومات الشحن والجمارك
          </h2>
          <p className="mt-4 text-lg text-gray-400">يرجى القراءة بعناية قبل الطلب. نحن نؤمن بالشفافية الكاملة.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          
          {/* البطاقة 1 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <User className="text-yellow-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-white">1. أنت "المستورد" الرسمي للشحنة</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              عندما تشتري قطعة غيار وتختار الشحن المباشر إلى عنوانك، فإن اسمك هو من سيظهر كمستورد للشحنة في الجمارك. ستتعامل شركة الشحن (مثل FedEx أو DHL) معك مباشرة لإتمام إجراءات التخليص.
            </p>
          </div>

          {/* البطاقة 2 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="text-yellow-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-white">2. الرسوم الجمركية وضريبة القيمة المضافة</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              سعر القطعة لا يشمل الرسوم المحلية. عند الوصول، ستطلب منك شركة الشحن:
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• <strong className="text-white">الرسوم الجمركية:</strong> تُفرض إذا تجاوزت الشحنة <span className="text-yellow-500 font-bold">1000 ريال</span> (غالباً 5% لقطع الغيار).</li>
              <li>• <strong className="text-white">ضريبة القيمة المضافة (VAT):</strong> <span className="text-yellow-500 font-bold">15%</span> على معظم الواردات (تُحسب على القطعة + الشحن).</li>
              <li>• <strong className="text-white">رسوم معالجة:</strong> مبالغ إدارية بسيطة من شركة الشحن.</li>
            </ul>
          </div>

          {/* البطاقة 3 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="text-yellow-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-white">3. شهادة "سابر" (للأفراد)</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              بعض القطع قد تتطلب شهادة من منصة "سابر" (SABER). لأنك تستوردها لاستخدامك الشخصي، يمكنك إصدار "شهادة إرسالية للمنتجات غير التجارية" بسهولة عبر منصتهم باستخدام هويتك. ننصحك بالاستعداد لذلك مسبقاً.
            </p>
          </div>

          {/* البطاقة 4 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="text-yellow-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-white">4. كيف تتم عملية الشحن؟</h3>
            </div>
            <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
              <li>1. نقوم بتغليف القطعة بعناية وإعداد الفاتورة التجارية الدقيقة (مع رمز HS).</li>
              <li>2. شركة الشحن تتواصل معك هاتفياً عند وصول الشحنة لإبلاغك بالرسوم.</li>
              <li>3. تدفع الرسوم لشركة الشحن وتستلم قطعتك في عنوانك.</li>
            </ul>
          </div>

          {/* البطاقة 5 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-yellow-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-white">5. لماذا نطلب رقم الهوية؟</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              الجمارك تشترط أن يكون المستورد مسجلاً بهوية سارية. عند إتمام الطلب، سنطلب رقم هويتك الوطنية (أو الإقامة) لكي نضمّنه في بوليصة الشحن لأغراض التخليص فقط.
            </p>
          </div>

          {/* البطاقة 6 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <Info className="text-yellow-500 w-6 h-6" />
              <h3 className="text-xl font-bold text-white">6. التزامنا بالشفافية</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              نحن لا نضيف أي رسوم خفية. ما تدفعه لنا هو ثمن القطعة + تكلفة الشحن الدولي فقط. أي مبالغ إضافية تدفعها في بلدك هي رسوم حكومية تفرضها الجهات المحلية.
            </p>
          </div>
        </div>

        {/* تنبيه هام */}
        <div className="mt-8 p-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="text-yellow-500 w-6 h-6 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-200">
              <strong className="text-white">ملاحظة هامة:</strong> القوانين الجمركية وقواعد منصة سابر قابلة للتحديث. ننصحك بالتحقق من أحدث المتطلبات عبر منصة <span className="font-mono text-yellow-500">saber.sa</span> قبل الطلب.
            </p>
          </div>
          <a href="https://wa.me/4915786738185" target="_blank" className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-5 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400">
            <MessageCircle className="w-4 h-4" />
            استفسر الآن
          </a>
        </div>

      </div>
    </section>
  );
}
