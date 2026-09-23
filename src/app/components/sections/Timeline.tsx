import React from "react";
import { motion } from "framer-motion";
import {
  Microscope,
  Blend,
  ClipboardCheck,
  FileBadge,
  Rocket,
  Globe,
} from "lucide-react";

export default function Timeline({ t }: { t: any }) {
  const isArabic = t.dir === "rtl" || t.timelineTitle === "رحلة المنتج" || t.timelineTitle?.match(/[\u0600-\u06FF]/);

  return (
    <section id="product-journey" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Premium Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-main/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-main/15 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.2)]"
          >
            <span className="text-main font-bold tracking-[0.2em] text-xs md:text-sm uppercase">
              {isArabic ? "مراحل الإنتاج" : "Production Stages"}
            </span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide"
          >
            {t.timelineTitle}
          </motion.h3>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-20">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-20 right-20 h-[2px] bg-white/5 z-0">
             <motion.div 
               className="absolute top-0 left-0 h-full bg-gradient-to-r from-main/20 via-main to-main/20"
               initial={{ width: "0%" }}
               whileInView={{ width: "100%" }}
               transition={{ duration: 2, ease: "easeInOut" }}
               viewport={{ once: true }}
             />
          </div>
          
          {/* Vertical Line (Mobile/Tablet) */}
          <div className="lg:hidden absolute top-8 bottom-8 left-[43px] rtl:right-[43px] rtl:left-auto w-[2px] bg-white/5 z-0">
             <motion.div 
               className="absolute top-0 left-0 w-full bg-gradient-to-b from-main/20 via-main to-main/20"
               initial={{ height: "0%" }}
               whileInView={{ height: "100%" }}
               transition={{ duration: 2, ease: "easeInOut" }}
               viewport={{ once: true }}
             />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {t.timeline.map((step: string, i: number) => {
              const icons = [Microscope, Blend, ClipboardCheck, FileBadge, Rocket];
              const Icon = icons[i] || Globe;
              const numberString = (i + 1).toString().padStart(2, "0");

              return (
                <motion.div
                  key={i}
                  className="group relative flex flex-row lg:flex-col items-start lg:items-center gap-8 lg:gap-12 cursor-default"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                >
                  {/* Icon Node */}
                  <div className="relative flex-shrink-0 flex items-center justify-center pt-1 lg:pt-0">
                    {/* Glowing effect behind icon */}
                    <div className="absolute inset-0 bg-main/30 rounded-full blur-2xl scale-50 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out" />
                    
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-900 rounded-full border-4 border-slate-800 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.4)] group-hover:border-main transition-colors duration-500 z-10 relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(var(--main-color-rgb),0.3)]">
                       <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       <Icon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-white/50 group-hover:text-main group-hover:scale-110 transition-all duration-500 relative z-20" />
                    </div>
                    
                    {/* Floating Step Number */}
                    <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-8 h-8 md:w-10 md:h-10 bg-main rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.5)] border-2 border-slate-900 z-30 transform group-hover:-translate-y-1 transition-transform duration-500">
                      <span className="text-white font-bold text-xs md:text-sm">
                        {numberString}
                      </span>
                    </div>
                  </div>

                  {/* Step Content Card */}
                  <div className="flex-1 w-full relative group/card mt-2 lg:mt-0">
                    <div className="lg:text-center p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl group-hover:bg-white/[0.08] group-hover:border-white/20 group-hover:-translate-y-2 transition-all duration-500 w-full overflow-hidden relative">
                      {/* Subtle hover gradient inside card */}
                      <div className="absolute inset-0 bg-gradient-to-br from-main/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      {/* Top accent line in card */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-main/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <h4 className="text-base md:text-lg lg:text-xl font-bold text-white/90 group-hover:text-white transition-colors duration-500 tracking-wide leading-relaxed relative z-10">
                        {step}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
