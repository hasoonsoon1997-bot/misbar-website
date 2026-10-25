"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "خدماتنا", href: "#audience" },
    { name: "لماذا نحن", href: "#why" },
    { name: "كيف نعمل", href: "#how" },
    { name: "القطع", href: "#parts" },
    { name: "الشحن والجمارك", href: "#shipping" },
  ];

  return (
    // هنا جعلنا الخلفية داكنة دائماً مع تأثير الزجاج (Blur)
    <nav className="fixed top-0 w-full z-50 bg-[#05121F]/90 backdrop-blur-xl border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="container-x flex h-20 items-center justify-between">
        
        {/* الشعار */}
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-yellow-500 text-black font-bold text-xl shadow-[0_0_15px_rgba(245,165,36,0.3)]">M</span>
          <span className="font-bold text-xl text-white tracking-wide">مِسبار</span>
        </a>

        {/* روابط سطح المكتب */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* الأزرار */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors">
            <Globe className="w-4 h-4" />
            EN
          </button>
          <a href="#rfq" className="rounded-xl bg-yellow-500 px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:scale-105 shadow-[0_0_15px_rgba(245,165,36,0.2)]">
            اطلب عرض سعر
          </a>
        </div>

        {/* زر الهاتف */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* قائمة الهاتف */}
      {isOpen && (
        <div className="md:hidden bg-[#05121F] border-t border-white/10 absolute w-full left-0 shadow-2xl">
          <div className="flex flex-col px-4 py-6 gap-4">
            {links.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 font-medium hover:text-yellow-500">
                {link.name}
              </a>
            ))}
            <a href="#rfq" onClick={() => setIsOpen(false)} className="mt-4 rounded-xl bg-yellow-500 px-6 py-3 text-center text-sm font-bold text-black">
              اطلب عرض سعر
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
