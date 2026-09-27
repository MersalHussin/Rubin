import React from "react";
import { motion } from "framer-motion";
import { iconMap, Feature } from "../../types";
import { Globe } from "lucide-react";

export default function Features({ t }: { t: any }) {
  const isArabic = t.dir === "rtl" || t.featuresTitle?.match(/[\u0600-\u06FF]/);

  return (
    <section id="why-us" className="py-24 md:py-32 relative overflow-hidden bg-[#FDFCFB]">
      
      {/* Subtle Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40vw] h-[60vh] bg-gradient-to-bl from-second/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-gradient-to-tr from-main/5 to-transparent" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-main tracking-tight leading-tight">
              {isArabic ? "مميزاتنا الفريدة" : "Our Unique Features"}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-4"
          >
            <div className="w-12 h-px bg-second" />
            <span className="text-second font-medium tracking-[0.2em] text-sm uppercase">
              {t.featuresTitle || (isArabic ? "لماذا بون" : "Why Bonn")}
            </span>
          </motion.div>
        </div>

        {/* Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.features.map((f: Feature, i: number) => {
            const Icon = iconMap[f.icon] || Globe;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                className={`group relative p-8 md:p-10 bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-slate-100 hover:border-second/30 transition-all duration-700 flex flex-col justify-start overflow-hidden ${isArabic ? 'text-right' : 'text-left'}`}
                dir={isArabic ? 'rtl' : 'ltr'}
              >
                
                {/* Large Faded Watermark Icon */}
                <Icon 
                  strokeWidth={0.5} 
                  className={`absolute -bottom-8 ${isArabic ? '-left-8' : '-right-8'} w-48 h-48 text-slate-50 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1s] pointer-events-none z-0`} 
                />

                {/* Top Highlight Gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-second/0 to-transparent group-hover:via-second transition-all duration-700" />

                {/* Elegant Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-main flex items-center justify-center mb-8 transition-colors duration-500 border border-slate-100 relative z-10 shrink-0">
                  <Icon 
                    strokeWidth={1.5} 
                    className="w-8 h-8 text-main group-hover:text-second transition-colors duration-500" 
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-main mb-5 transition-colors duration-500 relative z-10 leading-snug">
                  {f.title}
                </h3>
                
                {/* Expanding Luxury Line */}
                <div className="w-12 h-[2px] bg-second/40 mb-6 group-hover:w-full transition-all duration-700 ease-in-out relative z-10 rounded-full" />

                <p className="text-slate-500 font-medium leading-relaxed relative z-10">
                  {f.desc}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
