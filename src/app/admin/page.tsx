'use client';

import { useEffect, useState } from 'react';
import { getSensaProducts } from '@/app/actions/haveraProductActions';
import Link from 'next/link';
import Image from 'next/image';
import { Edit, Plus, PackageSearch, PackageOpen, Tag, Box, Star } from 'lucide-react';
import DeleteButton from './components/DeleteButton';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getSensaProducts();
        if (res.success) {
          setProducts(res.data || []);
        } else {
          setError(res.error || 'فشل في تحميل المنتجات');
        }
      } catch (e: any) {
        setError(e.message || 'خطأ غير متوقع');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6 md:p-10 min-h-screen" dir="rtl">
      
      {/* Luxury Header */}
      <div className="relative overflow-hidden rounded-[1.5rem] bg-white border border-slate-100 shadow-sm p-8 md:p-10 z-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-2xl opacity-60 -mr-10 -mt-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-main/5 to-transparent rounded-full blur-3xl opacity-70 -ml-10 -mb-10 pointer-events-none"></div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-5">
            <div className="bg-red-50 border border-red-100 p-4 rounded-2xl text-main shadow-sm">
              <PackageSearch size={32} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-main uppercase tracking-[0.2em] mb-1.5">إدارة المخزون</p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">المنتجات</h1>
            </div>
          </div>
          <Link 
            href="/admin/products/new"
            className="group flex items-center gap-2.5 bg-main text-white px-8 py-3.5 rounded-xl font-bold transition-all hover:bg-red-700 hover:shadow-md border border-red-700/50 w-full sm:w-auto justify-center"
          >
            <Plus size={20} strokeWidth={2.5} className="group-hover:rotate-90 transition-transform duration-300" />
            <span>إضافة منتج</span>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      {!loading && !error && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden group hover:border-slate-300 hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-1 h-full bg-slate-200 group-hover:bg-slate-400 transition-colors"></div>
            <div className="flex items-center justify-between mb-4">
              <div className="bg-slate-50 text-slate-500 p-3 rounded-xl border border-slate-100">
                <PackageOpen size={20} strokeWidth={2} />
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-800 mb-1">{products.length}</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">إجمالي المنتجات</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden group hover:border-red-200 hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-1 h-full bg-red-200 group-hover:bg-main transition-colors"></div>
            <div className="flex items-center justify-between mb-4">
              <div className="bg-red-50 text-main p-3 rounded-xl border border-red-100">
                <Star size={20} strokeWidth={2} />
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-800 mb-1">{products.filter((p: any) => p.best_selling).length}</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">الأكثر مبيعاً</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden group hover:border-slate-300 hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 w-1 h-full bg-slate-200 group-hover:bg-slate-400 transition-colors"></div>
            <div className="flex items-center justify-between mb-4">
              <div className="bg-slate-50 text-slate-500 p-3 rounded-xl border border-slate-100">
                <Tag size={20} strokeWidth={2} />
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-800 mb-1">
                {Array.from(new Set(products.map(p => p.category?.[0]).filter(Boolean))).length}
              </p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">الأقسام</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="bg-white rounded-[1.5rem] shadow-sm border border-slate-100 overflow-hidden">
        {loading ? (
          <div className="py-32 flex flex-col items-center justify-center gap-4">
            <div className="animate-spin h-8 w-8 border-2 border-slate-100 border-t-main rounded-full"></div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">جاري التحميل</p>
          </div>
        ) : error ? (
          <div className="py-24 text-center">
            <p className="text-red-500 font-bold">{error}</p>
          </div>
        ) : products.length === 0 ? (
          <div className="py-32 text-center bg-white flex flex-col items-center">
            <Box size={48} className="text-slate-200 mb-4" strokeWidth={1} />
            <p className="text-slate-400 font-bold text-lg">لا توجد منتجات حالياً</p>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-right text-slate-800 border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="py-5 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider w-[350px]">المنتج</th>
                    <th className="py-5 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">الاسم بالإنجليزي</th>
                    <th className="py-5 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">الحجم</th>
                    <th className="py-5 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">الحالة</th>
                    <th className="py-5 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-left">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {products.map((product: any) => (
                    <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-5">
                          <div className="relative w-14 h-16 bg-slate-50 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100">
                            {product.images && product.images[0] ? (
                              <Image 
                                src={product.images[0]} 
                                alt={product.name_ar} 
                                fill 
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex flex-col items-center justify-center text-slate-300">
                                <Box size={20} strokeWidth={1.5} />
                              </div>
                            )}
                          </div>
                          <div>
                            <span className="font-bold text-sm text-slate-800 block mb-1.5">{product.name_ar}</span>
                            {product.category && product.category.length > 0 && (
                              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold border border-slate-200 px-2 py-0.5 rounded bg-white">
                                {product.category[0]}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-6 font-semibold text-sm text-slate-600" dir="ltr">{product.name_en || '-'}</td>
                      <td className="py-5 px-6">
                        <span className="bg-slate-50 text-slate-600 border border-slate-200 px-3 py-1 rounded-lg text-xs font-bold inline-block" dir="ltr">
                          {product.volume || '-'}
                        </span>
                      </td>
                      <td className="py-5 px-6">
                        {product.best_selling ? (
                          <div className="flex items-center gap-1.5 text-main bg-red-50 border border-red-100 px-3 py-1.5 rounded-lg text-xs font-bold w-fit">
                            <Star size={14} className="fill-main text-main" />
                            <span>أكثر مبيعاً</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold w-fit">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                            <span>عادي</span>
                          </div>
                        )}
                      </td>
                      <td className="py-5 px-6 text-left">
                        <div className="flex items-center justify-end gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
                          <Link 
                            href={`/admin/products/${product.id}/edit`}
                            className="flex items-center justify-center w-9 h-9 bg-white border border-slate-200 text-slate-500 hover:text-main hover:border-red-200 hover:bg-red-50 rounded-lg transition-all shadow-sm"
                            title="تعديل"
                          >
                            <Edit size={16} strokeWidth={2} />
                          </Link>
                          <DeleteButton id={product.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View */}
            <div className="md:hidden flex flex-col divide-y divide-slate-100">
              {products.map((product: any) => (
                <div key={product.id} className="p-4 bg-white flex flex-col gap-3">
                  <div className="flex gap-4">
                    <div className="relative w-20 h-24 bg-slate-50 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100">
                      {product.images && product.images[0] ? (
                        <Image 
                          src={product.images[0]} 
                          alt={product.name_ar} 
                          fill 
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-slate-300">
                          <Box size={24} strokeWidth={1.5} />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="font-bold text-sm text-slate-800">{product.name_ar}</h3>
                        <p className="text-xs text-slate-500 mt-0.5 font-medium" dir="ltr">{product.name_en || '-'}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {product.category && product.category.length > 0 && (
                          <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold border border-slate-200 px-2 py-0.5 rounded bg-slate-50">
                            {product.category[0]}
                          </span>
                        )}
                        {product.volume && (
                          <span className="text-[9px] text-slate-600 border border-slate-200 px-2 py-0.5 rounded bg-slate-50" dir="ltr">
                            {product.volume}
                          </span>
                        )}
                        {product.best_selling && (
                          <span className="flex items-center gap-1 text-[9px] text-main border border-red-100 px-2 py-0.5 rounded bg-red-50">
                            <Star size={9} className="fill-main text-main" />
                            أكثر مبيعاً
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2 mt-1">
                    <Link 
                      href={`/admin/products/${product.id}/edit`}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 rounded-lg text-xs font-bold active:bg-slate-100 transition-colors"
                    >
                      <Edit size={14} strokeWidth={2} />
                      تعديل
                    </Link>
                    <DeleteButton id={product.id} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      
      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
