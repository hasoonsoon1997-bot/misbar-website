"use client";

import { useLanguage } from '@/components/misbar/language-provider';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const waLink = "https://wa.me/491234567890"; // يمكنك تغيير الرقم لاحقاً

  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8 border-t border-white/10">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* الشعار والوصف */}
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold text-navy font-bold text-xl">M</span>
              <span className="font-bold text-xl">{isAr ? 'مِسبار' : 'Misbar'}</span>
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              {isAr 
                ? 'وسيط توريد قطع غيار السيارات الألمانية الأصلية من ألمانيا إلى الخليج. نتحقق، نشتري، ونشحن بسرعة وشفافية.'
                : 'Sourcing genuine German auto parts from Germany to the Gulf. We verify, buy, and ship with speed and transparency.'}
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="font-bold text-gold mb-4">{isAr ? 'روابط سريعة' : 'Quick Links'}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#audience" className="hover:text-white transition-colors">
                  {isAr ? 'خدماتنا' : 'Services'}
                </a>
              </li>
              <li>
                <a href="#why" className="hover:text-white transition-colors">
                  {isAr ? 'لماذا نحن' : 'Why Us'}
                </a>
              </li>
              <li>
                <a href="#how" className="hover:text-white transition-colors">
                  {isAr ? 'كيف نعمل' : 'How It Works'}
                </a>
              </li>
              <li>
                <a href="#rfq" className="hover:text-white transition-colors">
                  {isAr ? 'اطلب عرض سعر' : 'Request a Quote'}
                </a>
              </li>
            </ul>
          </div>

          {/* تواصل معنا */}
          <div>
            <h4 className="font-bold text-gold mb-4">{isAr ? 'تواصل معنا' : 'Contact Us'}</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  {isAr ? 'واتساب مباشر' : 'WhatsApp'}
                </a>
              </li>
              <li>
                <a href="mailto:info@misbar.de" className="inline-flex items-center gap-2 hover:text-white transition-colors" dir="ltr">
                  <Mail className="h-4 w-4" />
                  info@misbar.de
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {isAr ? 'فرانكفورت، ألمانيا' : 'Frankfurt, Germany'}
              </li>
            </ul>
          </div>

        </div>

        {/* الحقوق */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          <p>
            {isAr 
              ? '© 2025 مِسبار. جميع الحقوق محفوظة. وسيط توريد مستقل ولا يمثل أي وكيل رسمي لأي ماركة.'
              : '© 2025 Misbar. All rights reserved. Independent sourcing broker — not an official dealer of any brand.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
