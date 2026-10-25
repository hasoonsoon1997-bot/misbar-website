"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  // ضع رقم هاتفك هنا بصيغة دولية بدون أصفار أو علامة +
  const phoneNumber = "491234567890"; // غير هذا الرقم لرقمك الحقيقي
  const message = "مرحباً مِسبار، أرغب في الاستفسار عن قطعة غيار.";
  
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 group"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* تأثير النبض للفت الانتباه */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
      
      {/* تلميح يظهر عند التمرير */}
      <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        تواصل معنا الآن
      </span>
    </a>
  );
}
