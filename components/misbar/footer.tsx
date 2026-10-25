"use client";

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05121F] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* إضاءة خلفية خفيفة */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* الشعار والوصف */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-yellow-500 text-black font-bold text-2xl shadow-[0_0_15px_rgba(245,165,36,0.4)]">
                M
              </span>
              <span className="font-bold text-2xl tracking-wide">مِسبار</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              وسيط توريد قطع غيار السيارات الألمانية الأصلية من ألمانيا إلى الخليج. نتحقق، نشتري، ونشحن بسرعة وشفافية.
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">روابط سريعة</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#audience" className="hover:text-yellow-500 transition-colors">خدماتنا</a>
              </li>
              <li>
                <a href="#why" className="hover:text-yellow-500 transition-colors">لماذا نحن</a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-yellow-500 transition-colors">معلومات الشحن والجمارك</a>
              </li>
              <li>
                <a href="#rfq" className="hover:text-yellow-500 transition-colors">اطلب عرض سعر</a>
              </li>
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">تواصل معنا</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              
              {/* البريد الإلكتروني */}
              <li>
                <a href="mailto:info@misbar.de" className="flex items-center gap-3 hover:text-yellow-500 transition-colors group">
                  <span className="p-2 rounded-lg bg-white/5 group-hover:bg-yellow-500/10 transition-colors">
                    <Mail className="h-5 w-5 text-yellow-500" />
                  </span>
                  <span dir="ltr">info@misbar.de</span>
                </a>
              </li>

              {/* رقم الهاتف / الواتساب */}
              <li>
                <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-yellow-500 transition-colors group">
                  <span className="p-2 rounded-lg bg-white/5 group-hover:bg-yellow-500/10 transition-colors">
                    <Phone className="h-5 w-5 text-yellow-500" />
                  </span>
                  <span dir="ltr">+49 123 456 7890</span>
                </a>
              </li>

              {/* الموقع */}
              <li className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-white/5">
                  <MapPin className="h-5 w-5 text-yellow-500" />
                </span>
                <span>فرانكفورت، ألمانيا</span>
              </li>

            </ul>
          </div>

        </div>

        {/* الحقوق */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} مِسبار. جميع الحقوق محفوظة. نحن وسيط توريد مستقل ولا نمثل أي وكيل رسمي لأي ماركة.
          </p>
          <div className="flex items-center gap-4">
             <a href="https://wa.me/491234567890" target="_blank" className="text-gray-400 hover:text-green-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
             </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
