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
          <header className="md:hidden flex items-center justify-between p-4 bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-40 shadow-sm">
            <Link href={'/'}>
              <Image src="/images/Bonn-Logo.svg" alt="Bonn" width={90} height={30} className="object-contain h-7 w-auto" priority />
            </Link>
            <button
              onClick={() => supabase.auth.signOut()}
              className="text-slate-500 hover:text-red-500 p-2 bg-slate-50 hover:bg-red-50 rounded-full border border-slate-200 transition-all shadow-sm"
            >
              <LogOut size={18} strokeWidth={1.5} />
            </button>
          </header>

          {/* Desktop Sidebar */}
          <aside className="hidden md:flex w-[260px] bg-main text-slate-300 flex-col z-50 shrink-0 border-l border-white/5 relative shadow-2xl">
            
            <div className="p-8 flex items-center justify-center border-b border-white/5">
              <Link href={'/'} className="transition-transform hover:scale-105 duration-300">
                <Image src="/images/Logo-White.svg" alt="Bonn" width={120} height={40} className="object-contain h-9 w-auto" priority />
              </Link>
            </div>
            
            <div className="px-4 py-8 flex-1">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 px-4">لوحة التحكم</p>
              <nav className="space-y-2">
                <Link 
                  href="/admin" 
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    pathname === '/admin' || pathname.startsWith('/admin/products')
                      ? 'bg-second/10 text-second font-bold shadow-[inset_3px_0_0_0_#D4AF37]' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5 font-medium'
                  }`}
                >
                  <PackageSearch size={20} strokeWidth={pathname === '/admin' || pathname.startsWith('/admin/products') ? 2 : 1.5} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm">المنتجات</span>
                </Link>
                
                <Link 
                  href="/admin/messages" 
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    pathname.startsWith('/admin/messages')
                      ? 'bg-second/10 text-second font-bold shadow-[inset_3px_0_0_0_#D4AF37]' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5 font-medium'
                  }`}
                >
                  <MessageSquare size={20} strokeWidth={pathname.startsWith('/admin/messages') ? 2 : 1.5} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm">الرسائل</span>
                </Link>
                
                <Link 
                  href="/admin/reviews" 
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    pathname.startsWith('/admin/reviews')
                      ? 'bg-second/10 text-second font-bold shadow-[inset_3px_0_0_0_#D4AF37]' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5 font-medium'
                  }`}
                >
                  <Star size={20} strokeWidth={pathname.startsWith('/admin/reviews') ? 2 : 1.5} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm">التقييمات</span>
                </Link>
              </nav>
            </div>

            <div className="p-4 mt-auto">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-second/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-main flex items-center justify-center text-second border border-white/10 shadow-sm">
                    <UserCircle size={20} strokeWidth={1.5} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-white">الإدارة العليا</p>
                    <p className="text-[10px] text-slate-400 font-medium truncate mt-0.5" dir="ltr">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => supabase.auth.signOut()}
                  className="relative z-10 flex items-center justify-center gap-2 w-full px-4 py-2.5 text-slate-300 bg-white/5 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 rounded-xl font-semibold transition-all border border-white/10 shadow-sm"
                >
                  <LogOut size={16} strokeWidth={1.5} />
                  <span className="text-xs">تسجيل الخروج</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Mobile Bottom Navigation */}
          <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-200 z-50 flex items-center justify-around pb-safe pt-2 px-2 pb-2 shadow-[0_-8px_20px_rgba(0,0,0,0.03)]">
            <Link 
              href="/admin" 
              className={`flex flex-col items-center justify-center w-full py-2 gap-1 rounded-2xl transition-all ${
                pathname === '/admin' || pathname.startsWith('/admin/products')
                  ? 'text-second' 
                  : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 ${pathname === '/admin' || pathname.startsWith('/admin/products') ? 'bg-second/10 scale-110' : ''}`}>
                <PackageSearch size={22} strokeWidth={pathname === '/admin' || pathname.startsWith('/admin/products') ? 2 : 1.5} />
              </div>
              <span className="text-[10px] font-bold">المنتجات</span>
            </Link>
            
            <Link 
              href="/admin/messages" 
              className={`flex flex-col items-center justify-center w-full py-2 gap-1 rounded-2xl transition-all ${
                pathname.startsWith('/admin/messages')
                  ? 'text-second' 
                  : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 ${pathname.startsWith('/admin/messages') ? 'bg-second/10 scale-110' : ''}`}>
                <MessageSquare size={22} strokeWidth={pathname.startsWith('/admin/messages') ? 2 : 1.5} />
              </div>
              <span className="text-[10px] font-bold">الرسائل</span>
            </Link>
            
            <Link 
              href="/admin/reviews" 
              className={`flex flex-col items-center justify-center w-full py-2 gap-1 rounded-2xl transition-all ${
                pathname.startsWith('/admin/reviews')
                  ? 'text-second' 
                  : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 ${pathname.startsWith('/admin/reviews') ? 'bg-second/10 scale-110' : ''}`}>
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
