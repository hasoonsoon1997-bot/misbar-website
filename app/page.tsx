"use client";

import { LanguageProvider } from '@/components/misbar/language-provider'
import { Navbar } from '@/components/misbar/navbar'
import { Hero } from '@/components/misbar/hero'
import { Audience } from '@/components/misbar/audience'
import { WhyUs } from '@/components/misbar/why-us'
import { HowItWorks } from '@/components/misbar/how-it-works'
import { Parts } from '@/components/misbar/parts'
import { RfqForm } from '@/components/misbar/rfq-form'
import { Footer } from '@/components/misbar/footer'

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Audience />
        <WhyUs />
        <HowItWorks />
        <Parts />
        <RfqForm />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
