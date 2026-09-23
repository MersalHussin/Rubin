import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types";

export default function Products({
  t,
  lang,
  isArabic,
  grouped,
  liked,
  toggleLike,
  fadeUp,
  loading,
}: {
  t: any;
  lang: string;
  isArabic: boolean;
  grouped: Record<string, Product[]>;
  liked: Record<string, boolean>;
  toggleLike: (p: Product) => void;
  fadeUp: any;
  loading: boolean;
}) {
  return (
    <section
      id="products"
      className="py-32 bg-[#FAFAFA] relative overflow-hidden"
    >
      {/* Elegant minimalist background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-main/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-main/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="space-y-6">
            <motion.h2
              {...fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-main uppercase"
            >
              {lang === "ar" ? "المنتجات" : "Products"}
            </motion.h2>
            <motion.div 
              {...fadeUp}
              className="w-24 h-[1px] bg-main mx-auto" 
            />
          </div>
        </div>

        {/* PRODUCTS CAROUSEL */}
        {loading ? (
          <div className="space-y-8 w-full">
            <div dir={isArabic ? "rtl" : "ltr"} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-16 pb-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group flex flex-col animate-pulse bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm border border-gray-100/50">
                  <div className="w-full pt-[110%] bg-gray-100" />
                  <div className="p-4 md:p-6 flex-1 flex flex-col space-y-3">
                     <div className="h-5 bg-gray-200 rounded w-2/3" />
                     <div className="h-3 bg-gray-100 rounded w-full mt-2" />
                     <div className="h-3 bg-gray-100 rounded w-4/5" />
                     <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
                       <div className="h-4 bg-gray-200 rounded w-24" />
                       <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100" />
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : Object.keys(grouped).length === 0 ? (
          <div className="text-center py-24 text-gray-400 font-light text-xl tracking-wide">
            {isArabic ? "المجموعة غير متوفرة حالياً" : "Collection currently unavailable"}
          </div>
        ) : (
          Object.entries(grouped).map(([brandName, items]) => {
          return (
            <div key={brandName} className="space-y-12">
              <div
                dir={isArabic ? "rtl" : "ltr"}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
              >
                {items.map((p) => (
                  <motion.div
                    key={p.id}
                    className="group flex flex-col bg-white h-full cursor-pointer rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 border border-gray-100/50 relative"
                  >
                    <Link
                      href={`/products/${p.slug}`}
                      className="block relative w-full pt-[110%] bg-gray-50 overflow-hidden"
                    >
                      {/* Subtle hover overlay in main color */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                      
                      <Image
                        src={p.images?.[0] || "/images/Sensa.png"}
                        alt={isArabic ? p.name_ar : p.name_en}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out absolute top-0 left-0 w-full h-full"
                      />
                      
                      {p.best_selling && (
                        <div className="absolute top-3 rtl:right-3 ltr:left-3 md:top-5 md:rtl:right-5 md:ltr:left-5 z-20">
                          <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-main/90 backdrop-blur-sm text-white shadow-lg border border-white/20">
                            {isArabic ? "الأكثر مبيعاً" : "Best Seller"}
                          </span>
                        </div>
                      )}
                    </Link>
                    
                    <div className="p-4 md:p-6 flex flex-col flex-grow text-start bg-white relative z-20">
                      <Link
                        href={`/products/${p.slug}`}
                        className="block mb-2 flex-grow"
                      >
                        <h3
                          className="font-bold text-sm md:text-lg text-gray-900 transition-colors group-hover:text-main mb-1.5 md:mb-2 line-clamp-1"
                        >
                          {isArabic ? p.name_ar : p.name_en}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500 line-clamp-2 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                          {isArabic ? p.description_ar : p.description_en}
                        </p>
                      </Link>

                      <div className="flex items-center justify-between mt-4 md:mt-6 w-full pt-4 border-t border-gray-100/50">
                        <Link
                          href={`/products/${p.slug}`}
                          className="text-main font-bold tracking-wider uppercase text-[10px] md:text-xs hover:text-gray-900 transition-colors duration-300 flex items-center gap-2"
                        >
                          {isArabic ? "اكتشف المزيد" : "Discover More"}
                        </Link>
                        
                        <Link
                          href={`/products/${p.slug}`}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-main group-hover:text-white transition-all duration-300 shadow-sm"
                        >
                          <svg className="w-4 h-4 md:w-5 md:h-5 transform rtl:-scale-x-100 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })
        )}
      </div>
    </section>
  );
}
