import React from "react";

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "مسبار | Misbar",
    "url": "https://misbar.de",
    "description": "وسيط توريد قطع غيار السيارات الألمانية الأصلية من فرانكفورت إلى دول الخليج.",
    "address": { "@type": "PostalAddress", "addressLocality": "Frankfurt", "addressCountry": "DE" },
    "areaServed": ["Saudi Arabia", "United Arab Emirates", "Kuwait", "Qatar", "Bahrain"]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ProductSchema({ name, sku, brand, price }: { name: string, sku: string, brand: string, price: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name, "sku": sku, "brand": { "@type": "Brand", "name": brand },
    "offers": { "@type": "Offer", "priceCurrency": "EUR", "price": price, "availability": "https://schema.org/InStock" }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FAQPageSchema({ faqs }: { faqs: { question: string, answer: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question", "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
