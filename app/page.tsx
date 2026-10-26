"use client";

import { LanguageProvider } from '@/components/misbar/language-provider'
import { Navbar } from '@/components/misbar/navbar'
import { Hero } from '@/components/misbar/hero'
import { Audience } from '@/components/misbar/audience'
import { WhyUs } from '@/components/misbar/why-us'
import { HowItWorks } from '@/components/misbar/how-it-works'
import { Parts } from '@/components/misbar/parts'
import { ShippingInfo } from '@/components/misbar/shipping-info'
import { RfqForm } from '@/components/misbar/rfq-form'
import { Footer } from '@/components/misbar/footer'
import { WhatsAppButton } from '@/components/misbar/whatsapp-button'
import { FAQPageSchema, ProductSchema } from '@/components/seo/schemas'

export default function Page() {
  return (
    <LanguageProvider>
      {/* SEO Schemas for AI & Google */}
      <FAQPageSchema 
        faqs={[
          { question: "كيف يتم الشحن إلى الخليج؟", answer: "نقوم بالشحن الجوي من فرانكفورت إلى دول الخليج خلال 3-5 أيام عمل." },
          { question: "هل قطع الغيار أصلية؟", answer: "نعم، جميع القطع أصلية 100% وتأتي مع فواتير ألمانية رسمية." }
        ]} 
      />
      <ProductSchema 
        name="كمبيوتر محرك مرسيدس" 
        sku="A205900" 
        brand="Mercedes-Benz" 
        price="850" 
      />

      <Navbar />
      <main>
        <Hero />
        <Audience />
        <WhyUs />
        <HowItWorks />
        <Parts />
        <ShippingInfo />
        <RfqForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  )
}
