'use client';

import { ReactNode } from 'react';
import { HaveraAuthProvider, useHaveraAuth } from './context/HaveraAuthContext';
import { supabase } from '@/app/lib/supabaseClient';
import Link from 'next/link';
import Image from 'next/image';
import { LogOut, PackageSearch, MessageSquare, Star, UserCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';


function AdminShell({ children }: { children: ReactNode }) {
  const { user, loading } = useHaveraAuth();
  const pathname = usePathname();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50/50">
        <div className="animate-spin rounded-full h-10 w-10 border-3 border-gray-200 border-t-main"></div>
      </div>
    );
  }

  if (!user && pathname !== '/admin/login') {
    return null;
  }

  return (
    <div className="min-h-[100dvh] bg-slate-50 flex flex-col md:flex-row font-sans" dir="rtl">
      {user && pathname !== '/admin/login' && (
        <>
          {/* Mobile Header */}
          <header className="md:hidden flex items-center justify-between p-4 bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40">
            <Link href={'/'}>
              <Image src="/images/Rubin.png" alt="Rubin" width={90} height={30} className="object-contain h-7 w-auto" priority />
            </Link>
            <button
              onClick={() => supabase.auth.signOut()}
              className="text-gray-500 hover:text-red-500 p-2 bg-gray-50 hover:bg-red-50 rounded-full border border-gray-200 transition-all shadow-sm"
            >
              <LogOut size={18} strokeWidth={1.5} />
            </button>
          </header>

          {/* Desktop Sidebar */}
          <aside className="hidden md:flex w-[260px] bg-white text-slate-800 flex-col z-50 shrink-0 border-l border-gray-200 relative shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
            
            <div className="p-8 flex items-center justify-center border-b border-gray-100">
              <Link href={'/'} className="transition-transform hover:scale-105 duration-300">
                <Image src="/images/Rubin.png" alt="Rubin" width={120} height={40} className="object-contain h-8 w-auto" priority />
              </Link>
            </div>
            
            <div className="px-4 py-8 flex-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-4">لوحة التحكم</p>
              <nav className="space-y-1.5">
                <Link 
                  href="/admin" 
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    pathname === '/admin' || pathname.startsWith('/admin/products')
                      ? 'bg-red-50 text-main font-bold' 
                      : 'text-slate-500 hover:text-main hover:bg-slate-50 font-medium'
                  }`}
                >
                  <PackageSearch size={20} strokeWidth={pathname === '/admin' || pathname.startsWith('/admin/products') ? 2 : 1.5} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm">المنتجات</span>
                </Link>
                
                <Link 
                  href="/admin/messages" 
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    pathname.startsWith('/admin/messages')
                      ? 'bg-red-50 text-main font-bold' 
                      : 'text-slate-500 hover:text-main hover:bg-slate-50 font-medium'
                  }`}
                >
                  <MessageSquare size={20} strokeWidth={pathname.startsWith('/admin/messages') ? 2 : 1.5} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm">الرسائل</span>
                </Link>
                
                <Link 
                  href="/admin/reviews" 
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    pathname.startsWith('/admin/reviews')
                      ? 'bg-red-50 text-main font-bold' 
                      : 'text-slate-500 hover:text-main hover:bg-slate-50 font-medium'
                  }`}
                >
                  <Star size={20} strokeWidth={pathname.startsWith('/admin/reviews') ? 2 : 1.5} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm">التقييمات</span>
                </Link>
              </nav>
            </div>

            <div className="p-4 mt-auto">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-main border border-slate-200 shadow-sm">
                    <UserCircle size={20} strokeWidth={1.5} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-slate-800">الإدارة العليا</p>
                    <p className="text-[10px] text-slate-500 font-medium truncate mt-0.5">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => supabase.auth.signOut()}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-slate-600 bg-white hover:bg-red-50 hover:text-red-600 rounded-xl font-semibold transition-all border border-slate-200 shadow-sm"
                >
                  <LogOut size={16} strokeWidth={1.5} />
                  <span className="text-xs">تسجيل الخروج</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Mobile Bottom Navigation */}
          <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-gray-200 z-50 flex items-center justify-around pb-safe pt-2 px-2 pb-2 shadow-[0_-8px_20px_rgba(0,0,0,0.03)]">
            <Link 
              href="/admin" 
              className={`flex flex-col items-center justify-center w-full py-2 gap-1 rounded-2xl transition-all ${
                pathname === '/admin' || pathname.startsWith('/admin/products')
                  ? 'text-main' 
                  : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 ${pathname === '/admin' || pathname.startsWith('/admin/products') ? 'bg-red-50 scale-110' : ''}`}>
                <PackageSearch size={22} strokeWidth={pathname === '/admin' || pathname.startsWith('/admin/products') ? 2 : 1.5} />
              </div>
              <span className="text-[10px] font-bold">المنتجات</span>
            </Link>
            
            <Link 
              href="/admin/messages" 
              className={`flex flex-col items-center justify-center w-full py-2 gap-1 rounded-2xl transition-all ${
                pathname.startsWith('/admin/messages')
                  ? 'text-main' 
                  : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 ${pathname.startsWith('/admin/messages') ? 'bg-red-50 scale-110' : ''}`}>
                <MessageSquare size={22} strokeWidth={pathname.startsWith('/admin/messages') ? 2 : 1.5} />
              </div>
              <span className="text-[10px] font-bold">الرسائل</span>
            </Link>
            
            <Link 
              href="/admin/reviews" 
              className={`flex flex-col items-center justify-center w-full py-2 gap-1 rounded-2xl transition-all ${
                pathname.startsWith('/admin/reviews')
                  ? 'text-main' 
                  : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 ${pathname.startsWith('/admin/reviews') ? 'bg-red-50 scale-110' : ''}`}>
                <Star size={22} strokeWidth={pathname.startsWith('/admin/reviews') ? 2 : 1.5} />
              </div>
              <span className="text-[10px] font-bold">التقييمات</span>
            </Link>
          </nav>
        </>
      )}
      
      <main className="flex-1 h-[100dvh] md:h-screen overflow-y-auto bg-slate-50 relative pb-20 md:pb-0">
        {children}
      </main>
    </div>
  );
}

export default function HaveraAdminLayout({ children }: { children: ReactNode }) {
  return (
    <HaveraAuthProvider>
      <AdminShell>{children}</AdminShell>
    </HaveraAuthProvider>
  );
}
