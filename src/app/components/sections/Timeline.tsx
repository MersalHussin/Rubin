import React from "react";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Settings,
  ShieldCheck,
  Award,
  PackageCheck,
  Globe,
} from "lucide-react";

export default function Timeline({ t }: { t: any }) {
  const isArabic = t.dir === "rtl" || t.timelineTitle === "رحلة المنتج" || t.timelineTitle?.match(/[\u0600-\u06FF]/);

  return (
    <section id="product-journey" className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-main tracking-tight leading-tight">
              {t.timelineTitle}
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-4"
          >
            <div className="w-12 h-px bg-second" />
            <span className="text-second font-medium tracking-[0.2em] text-sm uppercase">
              {isArabic ? "مراحل التصنيع" : "Our Process"}
            </span>
          </motion.div>
        </div>

        {/* Premium List Timeline */}
        <div className="relative border-t border-slate-100/80">
          {t.timeline.map((step: string, i: number) => {
            const icons = [FlaskConical, Settings, ShieldCheck, Award, PackageCheck];
            const Icon = icons[i] || Globe;
            const numberString = (i + 1).toString().padStart(2, "0");

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-10 md:py-16 border-b border-slate-100/80 hover:bg-slate-50/50 transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl cursor-default"
              >
                
                <div className="flex items-center gap-6 md:gap-12 lg:gap-20">
                  {/* Huge Number */}
                  <span className="text-5xl md:text-7xl font-light text-slate-200 group-hover:text-second transition-colors duration-500 font-serif">
                    {numberString}
                  </span>
                  
                  {/* Step Title */}
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 group-hover:text-main transition-colors duration-500 leading-tight">
                    {step}
                  </h4>
                </div>

                {/* Minimalist Icon */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 group-hover:bg-main transition-colors duration-500 shrink-0">
                  <Icon strokeWidth={1.5} className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors duration-500" />
                </div>
                
                {/* Mobile Icon (shown next to text on small screens) */}
                <div className="md:hidden flex items-center gap-4 mt-2">
                   <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                     <Icon strokeWidth={1.5} className="w-5 h-5 text-slate-400 group-hover:text-second transition-colors" />
                   </div>
                   <div className="w-12 h-px bg-slate-100 group-hover:bg-second/30 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
