import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function About({
  t,
  lang,
}: {
  t: any;
  lang: string;
}) {
  return (
    <section id="who-we-are" className="py-32 relative overflow-hidden bg-main text-white">
      {/* Luxury subtle glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      
      {/* Subtle grid pattern for texture */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.05] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10 relative z-10 flex flex-col items-center"
        >
          <div className="space-y-6 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="text-second font-bold tracking-[0.2em] text-xs md:text-sm uppercase">
                {lang === "ar" ? "رؤيتنا وقيمنا" : "Our Vision & Values"}
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-wide text-white leading-tight">
              {t.whoTitle}
            </h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-second to-transparent" />
          </div>
          
          <p className="text-white/80 text-lg md:text-2xl leading-relaxed font-medium tracking-wide max-w-4xl mx-auto">
            {t.whoText}
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="pt-8"
          >
             <Link
                href="#products"
                className="inline-flex items-center justify-center gap-3 bg-second text-main hover:bg-second/90 px-10 py-4 rounded-full font-bold tracking-wide text-lg transition-all duration-300 shadow-[0_10px_20px_rgba(212,175,55,0.2)] hover:-translate-y-1"
             >
                {lang === "ar" ? "اكتشف منتجاتنا" : "Discover Our Products"}
             </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
