import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Hero({ t, lang }: { t: any; lang: string }) {
  const isArabic = lang === "ar";

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center bg-[#FAFAFA] overflow-hidden">
      
      {/* Super clean elegant background */}
      <div className="absolute inset-0 bg-[#FAFAFA] z-0"></div>
      
      {/* Very subtle elegant gradient on the side */}
      <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-gradient-to-l from-[#f0eae6]/60 to-transparent z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 pt-32 pb-20">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`flex flex-col justify-center ${isArabic ? 'lg:pl-10 text-right' : 'lg:pr-10 text-left'}`}
          dir={isArabic ? 'rtl' : 'ltr'}
        >
          {/* Elegant Eyebrow */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-main/40" />
            <span className="text-main font-medium tracking-[0.2em] uppercase text-xs sm:text-sm">
              {isArabic ? "عناية فائقة وتطوير مستمر" : "Premium & Advanced Haircare"}
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] font-bold mb-8 text-[#1a1a1a] tracking-tight leading-[1.15]">
            {t.heroTitle}
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-12 leading-relaxed max-w-lg font-medium">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <Link
              href="#products"
              className="group flex items-center justify-center gap-3 bg-[#d81f25] text-white px-9 py-4 rounded-full font-medium tracking-wide text-lg transition-all duration-300 hover:bg-[#b91f25] hover:shadow-xl hover:shadow-[#d81f25]/20 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>{t.ctaBtn}</span>
              {isArabic ? (
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
              ) : (
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              )}
            </Link>
            
            <Link
              href="#contact-us"
              className="flex items-center justify-center gap-3 text-gray-700 bg-transparent hover:text-[#d81f25] px-9 py-4 rounded-full font-medium tracking-wide text-lg transition-all duration-300 w-full sm:w-auto border border-gray-300 hover:border-[#d81f25] hover:bg-white"
            >
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </Link>
          </div>
        </motion.div>

        {/* Image / Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative h-[550px] md:h-[650px] w-full hidden lg:flex justify-center items-center lg:mt-0 mt-8"
        >
          {/* Aesthetic Arch Frame */}
          <div className="relative w-full max-w-[420px] h-[95%] rounded-t-[14rem] rounded-b-[2rem] p-3 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]">
            <div className="relative w-full h-full rounded-t-[13.5rem] rounded-b-[1.5rem] overflow-hidden group">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-1000 z-20 pointer-events-none" />
              <Image
                src="/images/bgHero3.jpg"
                alt="Hevera Premium Haircare"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-[3s] ease-out"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Elegant Minimalist Accent dot */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#d81f25]"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
