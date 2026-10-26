import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/misbar/language-provider";
import { OrganizationSchema } from "@/components/seo/schemas";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://misbar.de"),
  title: "مسبار | قطع غيار سيارات ألمانية أصلية من فرانكفورت",
  description: "وسيط توريد قطع غيار السيارات الألمانية الأصلية للورش والأفراد في الخليج. فحص VIN، شحن سريع 3-5 أيام، وأسعار تنافسية.",
  alternates: { canonical: "https://misbar.de" },
  openGraph: {
    title: "مسبار | قطع غيار سيارات ألمانية أصلية",
    description: "توصيل قطع غيار أصلية من فرانكفورت إلى بابك في الخليج.",
    url: "https://misbar.de",
    siteName: "مسبار",
    locale: "ar_SA",
    type: "website",
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
        <OrganizationSchema />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
