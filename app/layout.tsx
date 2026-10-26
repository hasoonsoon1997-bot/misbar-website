import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/misbar/language-provider";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

// ⚠️ لاحقاً عندما تشتري الدومين، غير الرابط أدناه إلى رابطك الجديد (مثلاً: https://misbar.de)
const siteUrl = "https://misbar.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "مِسبار | قطع غيار سيارات ألمانية أصلية من فرانكفورت",
    template: "%s | مِسبار"
  },
  description: "وسيط توريد قطع غيار السيارات الألمانية الأصلية (مرسيدس، BMW، أودي، بورش) للورش والأفراد في السعودية، الإمارات، الكويت، قطر والبحرين. فحص VIN مسبق، شحن جوي سريع 3-5 أيام، وأسعار تنافسية.",
  keywords: [
    "قطع غيار سيارات ألمانية",
    "قطع غيار مرسيدس",
    "قطع غيار BMW",
    "قطع غيار أودي",
    "قطع غيار بورش",
    "قطع غيار السعودية",
    "قطع غيار الإمارات",
    "شحن قطع غيار من ألمانيا",
    "فحص VIN",
    "مسبار"
  ],
  authors: [{ name: "Misbar" }],
  creator: "Misbar",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteUrl,
    title: "مِسبار | قطع غيار سيارات ألمانية أصلية",
    description: "توصيل قطع غيار أصلية من فرانكفورت إلى بابك في الخليج خلال 3-5 أيام.",
    siteName: "مِسبار",
  },
  twitter: {
    card: "summary_large_image",
    title: "مِسبار | قطع غيار سيارات ألمانية أصلية",
    description: "توصيل قطع غيار أصلية من فرانكفورت إلى بابك في الخليج خلال 3-5 أيام.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable}`}>
      <body className="bg-[#05121F] text-white antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
