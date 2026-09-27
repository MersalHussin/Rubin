"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>, email: string) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `mailto:${email}`;
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
    }
  };

  return (
    <footer className="bg-[#0a0f1d] text-slate-300 border-t border-white/5 relative overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      {/* Premium Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-second/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-main/50 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12 relative z-10"
      >
        {/* Logo & About */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="w-fit flex justify-start items-center">
            <Image 
              src="/images/Logo-White.svg" 
              alt="Bonn" 
              width={180} 
              height={70} 
              className="object-contain  opacity-100 transition-opacity" 
            />
          </div>
          <p className="text-sm leading-relaxed text-slate-400 max-w-sm font-medium">
            {isAr 
              ? "علامة سعودية متخصصة في العناية المتقدمة بالشعر، جزء من منظومة مصنع بون للصناعات الطبية."
              : "Saudi brand specializing in advanced hair care, part of Bonn Medical Industries."}
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          <h3 className="text-white font-bold text-lg mb-1 relative inline-block w-fit tracking-wide">
            {isAr ? "معلومات التواصل" : "Contact Info"}
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-second rounded-full"></span>
          </h3>
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-start gap-3 text-sm text-slate-400 group">
              <MapPin className="w-5 h-5 text-second shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <p className="group-hover:text-white transition-colors">{isAr ? "المشاعل، الرياض، المملكة العربية السعودية" : "Al Mashael, Riyadh, Saudi Arabia"}</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-400 group">
              <Mail className="w-5 h-5 text-second shrink-0 group-hover:scale-110 transition-transform" />
              <a 
                href="mailto:Relation@bonnmed.com" 
                onClick={(e) => handleEmailClick(e, "Relation@bonnmed.com")}
                className="hover:text-white transition-colors"
              >
                Relation@bonnmed.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-400 group">
              <Phone className="w-5 h-5 text-second shrink-0 group-hover:scale-110 transition-transform" />
              <a href="tel:+966580347173" className="hover:text-white transition-colors font-medium" dir="ltr">+966 5803 47173</a>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <h3 className="text-white font-bold text-lg mb-1 relative inline-block w-fit tracking-wide">
            {isAr ? "الشركة" : "Company"}
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-second rounded-full"></span>
          </h3>
          <div className="flex flex-col gap-3 mt-2">
            <Link href="/#who-we-are" className="text-sm text-slate-400 hover:text-second hover:translate-x-1 rtl:hover:-translate-x-1 transition-all w-fit flex items-center gap-2">
              <span className="w-1 h-1 bg-second rounded-full opacity-0 transition-opacity" /> {isAr ? "من نحن" : "Who We Are"}
            </Link>
            <Link href="/#why-us" className="text-sm text-slate-400 hover:text-second hover:translate-x-1 rtl:hover:-translate-x-1 transition-all w-fit flex items-center gap-2">
              <span className="w-1 h-1 bg-second rounded-full opacity-0 transition-opacity" /> {isAr ? "لماذا نحن" : "Why Us"}
            </Link>
            <a href="https://bonnmed.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-200 hover:text-second hover:translate-x-1 rtl:hover:-translate-x-1 transition-all w-fit flex items-center gap-2">
              {isAr ? "بون للصناعات الطبية" : "Bonn Medical Industries"}
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <h3 className="text-white font-bold text-lg mb-1 relative inline-block w-fit tracking-wide">
            {isAr ? "استكشف" : "Explore"}
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-second rounded-full"></span>
          </h3>
          <div className="flex flex-col gap-3 mt-2">
            <Link href="/#products" className="text-sm text-slate-400 hover:text-second hover:translate-x-1 rtl:hover:-translate-x-1 transition-all w-fit flex items-center gap-2">
              <span className="w-1 h-1 bg-second rounded-full opacity-0 transition-opacity" /> {isAr ? "المنتجات" : "Products"}
            </Link>
            <Link href="/#product-journey" className="text-sm text-slate-400 hover:text-second hover:translate-x-1 rtl:hover:-translate-x-1 transition-all w-fit flex items-center gap-2">
              <span className="w-1 h-1 bg-second rounded-full opacity-0 transition-opacity" /> {isAr ? "رحلة المنتج" : "Product Journey"}
            </Link>
            <Link href="/#contact-us" className="text-sm text-slate-400 hover:text-second hover:translate-x-1 rtl:hover:-translate-x-1 transition-all w-fit flex items-center gap-2">
              <span className="w-1 h-1 bg-second rounded-full opacity-0 transition-opacity" /> {isAr ? "تواصل معنا" : "Contact Us"}
            </Link>
          </div>
        </div>

        {/* Legal & Social */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <h3 className="text-white font-bold text-lg mb-1 relative inline-block w-fit tracking-wide">
            {isAr ? "روابط هامة" : "Legal"}
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-second rounded-full"></span>
          </h3>
          <div className="flex flex-col gap-3 mt-2 mb-4">
            <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-second hover:translate-x-1 rtl:hover:-translate-x-1 transition-all w-fit">
              {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <Link href="/terms" className="text-sm text-slate-400 hover:text-second hover:translate-x-1 rtl:hover:-translate-x-1 transition-all w-fit">
              {isAr ? "الشروط والأحكام" : "Terms & Conditions"}
            </Link>
          </div>

          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">
            {t("footer.followUs", "Follow Us")}
          </h3>
          <div className="flex flex-wrap gap-3 text-white">
            <Link href="https://www.facebook.com/bonnmedical" aria-label="Visit Our Facebook" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-2.5 rounded-full hover:bg-second hover:border-second hover:-translate-y-1 transition-all duration-300">
              <FaFacebookF size={14} />
            </Link>
            <Link href="https://instagram.com/bonnmedical" aria-label="Visit Our Instagram" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-2.5 rounded-full hover:bg-second hover:border-second hover:-translate-y-1 transition-all duration-300">
              <FaInstagram size={14} />
            </Link>
            <Link href="https://www.linkedin.com/company/bonnmedical" aria-label="Visit Our Linkedin" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-2.5 rounded-full hover:bg-second hover:border-second hover:-translate-y-1 transition-all duration-300">
              <FaLinkedinIn size={14} />
            </Link>
            <Link href="https://www.youtube.com/@BonnMedical" aria-label="Visit Our Youtube" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-2.5 rounded-full hover:bg-second hover:border-second hover:-translate-y-1 transition-all duration-300">
              <FaYoutube size={14} />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="bg-[#05080f] text-center text-sm text-slate-400 py-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-medium">© {new Date().getFullYear()} Bonn. {t("footer.rights", "All rights reserved.")}</p>
          <p className="text-xs opacity-80 flex items-center gap-2">
            {isAr ? "صُنع بكل فخر في المملكة العربية السعودية" : "Proudly made in Saudi Arabia"}
            <span className="text-lg">🇸🇦</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
