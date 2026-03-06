"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LandingFooter = () => {
 return (
  <footer className="w-full">
   {/* CTA Section (Light Background) */}
   <div className="bg-[#FAF8F5] pt-20 pb-20">
    <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

     {/* Image Left */}
     <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-sm"
     >
      <Image
       src="/images/Rectangle 12.svg" // We need the specific croissant & coffee image here, but reusing current for layout matching
       alt="Coffee and Croissant"
       fill
       className="object-cover"
      />
     </motion.div>

     {/* Text Right */}
     <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="w-full lg:w-1/2 flex flex-col items-start gap-8 lg:gap-14"
     >
      <h2 className="text-[36px] md:text-[46px] lg:text-[54px] xl:text-[60px] font-medium text-[#CF6A6A] leading-[1.05] tracking-[-0.03em] uppercase break-words">
       МЫ УБРАЛИ ГЛЮТЕН<br />- ВКУС ТРОГАТЬ НЕ СТАЛИ!
      </h2>

      <div className="flex flex-col md:flex-row items-start lg:items-end justify-between w-full gap-8">
       <p className="text-[13px] md:text-[14px] text-[#CF6A6A] leading-[1.3] max-w-[280px] tracking-wide font-medium">
        Оставили сочность, хруст, тягучие<br />
        начинки, насыщенный шоколад и тот<br />
        самый аромат свежей выпечки, от<br />
        которого невозможно пройти мимо
       </p>

       <Link href="/catalog" className="flex items-center gap-3 group mb-1 mr-4">
        <span className="text-[16px] lg:text-[17px] font-light uppercase tracking-[0.02em] text-[#CF6A6A] group-hover:opacity-70 transition-opacity">СМОТРЕТЬ КАТАЛОГ</span>
        <span className="text-2xl text-[#CF6A6A] font-thin group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
       </Link>
      </div>
     </motion.div>
    </div>
   </div>

   {/* Footer Grid Section (Dark Background from Market) */}
   <div className="bg-smusl-brown text-white py-12 px-4 sm:px-6 lg:px-10">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
     <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
      {/* ── Logo ── */}
      <div className="flex flex-col gap-4">
       <Link href="/" className="block w-fit select-none hover:opacity-80 transition-opacity">
        <Image
         src="/photo/logo.png"
         alt="Logo"
         width={160}
         height={160}
         className="h-auto w-[140px] sm:w-[180px] brightness-0 invert opacity-90"
        />
       </Link>
      </div>

      {/* ── Contacts ── */}
      <div className="flex flex-col gap-6 pt-4">
       <div className="flex items-center gap-4">
        <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-[16px] font-bold">10:00 - 19:00</span>
       </div>
       <div className="flex items-start gap-4">
        <svg className="w-5 h-5 text-white/80 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-[16px] font-bold leading-tight">Россия, г. Москва, ул. Ижорская 3</span>
       </div>
       <div className="flex items-center gap-3 mt-4">
        <Link href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center font-bold text-[11px] hover:bg-white hover:text-smusl-brown transition-colors">VK</Link>
        <Link href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity">
         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
         </svg>
        </Link>
       </div>
      </div>

      {/* ── Support ── */}
      <div className="flex flex-col gap-6 pt-4">
       <div className="flex items-center gap-4">
        <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <a href="mailto:info@smislest.ru" className="text-[16px] font-bold hover:text-smusl-terracotta transition-colors">info@smislest.ru</a>
       </div>
       <div className="flex items-center gap-4">
        <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <a href="tel:+79262104565" className="text-[16px] font-bold hover:text-smusl-terracotta transition-colors">+7 (926) 210-45-65</a>
       </div>
      </div>

      {/* ── Links ── */}
      <nav className="flex flex-col gap-4 pt-4">
       <Link href="/policy" className="text-[16px] font-bold hover:text-smusl-terracotta transition-colors">Почему без глютена?</Link>
       <Link href="/faq" className="text-[16px] font-bold hover:text-smusl-terracotta transition-colors">FAQ</Link>
       <Link href="/news" className="text-[16px] font-bold hover:text-smusl-terracotta transition-colors">Статьи</Link>
      </nav>
     </div>
    </div>
   </div>
  </footer>
 );
};

export default LandingFooter;
