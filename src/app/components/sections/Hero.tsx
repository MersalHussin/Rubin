import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Hero({ t, lang }: { t: any; lang: string }) {
  const isArabic = lang === "ar";

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center bg-white overflow-hidden">
      
      {/* Abstract premium background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60vw] h-[100vh] bg-gradient-to-bl from-second/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[60vh] bg-gradient-to-tr from-main/5 via-transparent to-transparent pointer-events-none" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 pt-32 pb-20">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`flex flex-col justify-center lg:col-span-6 ${isArabic ? 'lg:pl-8 text-right' : 'lg:pr-8 text-left'}`}
          dir={isArabic ? 'rtl' : 'ltr'}
        >
          <h1 className="text-4xl md:text-5xl lg:text-[60px] xl:text-[72px] font-black mb-8 text-main tracking-tight leading-[1.1]">
            {t.heroTitle}
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-lg font-medium">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <Link
              href="#products"
              className="group flex items-center justify-center gap-3 bg-main text-white px-9 py-4 rounded-full font-bold tracking-wide text-lg transition-all duration-300 hover:bg-main-hover hover:shadow-[0_15px_30px_rgba(15,23,42,0.2)] hover:-translate-y-1 w-full sm:w-auto"
            >
              <span>{t.ctaBtn}</span>
              {isArabic ? (
                <ArrowLeft size={18} className="group-hover:-translate-x-1.5 transition-transform duration-300" />
              ) : (
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              )}
            </Link>
            
            <Link
              href="#contact-us"
              className="flex items-center justify-center gap-3 text-main bg-transparent hover:text-second px-9 py-4 rounded-full font-bold tracking-wide text-lg transition-all duration-300 w-full sm:w-auto border-2 border-main/10 hover:border-second hover:bg-second/5"
            >
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </Link>
          </div>
        </motion.div>

        {/* Image / Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative h-[550px] md:h-[650px] w-full hidden lg:flex justify-center items-center lg:mt-0 mt-8 lg:col-span-6"
        >
          {/* Aesthetic Modern Layout */}
          <div className="relative w-full h-full flex items-center justify-center">
             
             {/* Main Image Frame */}
             <div className="relative w-full max-w-[480px] aspect-[4/5] p-2 bg-white rounded-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] z-10 overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-second/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none" />
               <Image
                 src="/images/bgHero.jpg"
                 alt="Bonn Premium"
                 fill
                 className="object-cover object-center rounded-[1.2rem] group-hover:scale-105 transition-transform duration-[2s] ease-out"
                 priority
                 quality={100}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-[1.2rem] pointer-events-none" />
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
