"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LandingAbout = () => {
 return (
  <section className="py-20 md:py-32 bg-[#FAF8F5] overflow-hidden relative">
   <div className="w-full max-w-[1700px] mx-auto px-4 md:px-8 lg:px-12">

    {/* Top Row: Title & Text */}
    <div className="flex flex-col items-center lg:items-end gap-6 lg:gap-10 mb-20 md:mb-28 w-full max-w-[1400px] mx-auto">

     {/* Title and Description Container */}
     <div className="w-full lg:w-[80%] xl:w-[70%] flex flex-col items-start gap-4">

      {/* Section Header: ( о Нас ) */}
      <motion.div
       initial={{ opacity: 0, x: -30 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.8 }}
       className="flex items-center gap-2 lg:gap-4 -ml-4 md:-ml-8"
      >
       <span className="font-manrope text-[30px] md:text-[50px] lg:text-[60px] font-thin text-[#CF6A6A]/60 select-none translate-y-1">(</span>
       <div className="flex items-baseline gap-2 md:gap-4">
        <span className="font-manrope text-2xl md:text-4xl lg:text-5xl text-[#CF6A6A] font-medium -translate-y-2 md:-translate-y-4">о</span>
        <h2 className="font-script text-[50px] md:text-[80px] lg:text-[90px] font-normal text-[#CF6A6A] -ml-2 pt-2">Нас</h2>
       </div>
       <span className="font-manrope text-[30px] md:text-[50px] lg:text-[60px] font-thin text-[#CF6A6A]/60 select-none translate-y-1">)</span>
      </motion.div>

      {/* Description Block */}
      <motion.div
       initial={{ opacity: 0, x: 50 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
       viewport={{ once: true }}
       className="w-full md:pl-20"
      >
       <p className="text-[12px] md:text-[15px] lg:text-[18px] xl:text-[20px] leading-[1.3] md:leading-[1.4] text-[#CF6A6A] font-medium uppercase tracking-[0.02em] md:tracking-[0.03em]">
        <span className="font-script text-[60px] md:text-[100px] lg:text-[120px] leading-[0.5] inline-block translate-y-[10px] md:translate-y-[20px] lg:translate-y-[30px] mr-2 md:mr-3 lg:mr-4 align-bottom font-normal">Мы</span>
        ПЕРВЫМИ В РОССИИ НАЧАЛИ ИМПОРТ ТЕФОВОЙ МУКИ И РАБОТАЕМ С ШИРОКИМ СПЕКТРОМ АЛЬТЕРНАТИВНОГО СЫРЬЯ: АМАРАНТОВОЙ, РИСОВОЙ, ГРЕЧНЕВОЙ, КУКУРУЗНОЙ, ОВСЯНОЙ И ОРЕХОВОЙ МУКОЙ. В АССОРТИМЕНТЕ БРЕНДА «СМЫСЛ ЕСТЬ» — БОЛЕЕ 20 ВИДОВ ПРОДУКЦИИ: ОТ ХЛЕБА ДО ДЕСЕРТОВ
       </p>
      </motion.div>
     </div>
    </div>

    {/* Image Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 lg:gap-x-16 xl:gap-x-24 gap-y-16 w-full items-start max-w-[1500px] mx-auto">

     {/* Left Column: Chef Image & Text */}
     <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true }}
      className="col-span-1 lg:col-span-4 xl:col-span-4 flex flex-col items-start lg:mt-[-40px]"
     >
      <div className="relative w-[85%] md:w-[70%] lg:w-[100%] aspect-[4/3] rounded-[20px] md:rounded-[24px] overflow-hidden mb-5">
       <Image
        src="/images/Rectangle 19.svg"
        alt="Chef at work"
        fill
        className="object-cover hover:scale-[1.03] transition-transform duration-700"
        sizes="(max-width: 1024px) 85vw, 30vw"
       />
      </div>
      <p className="text-[13px] md:text-[15px] leading-[1.4] text-[#CF6A6A] font-medium w-[90%] md:w-[80%] lg:w-[95%] tracking-wide">
       «Смысл есть» — это пекарня в Москве, специализирующаяся на производстве безглютенового хлеба и выпечки
      </p>
     </motion.div>

     {/* Center Column: Baguettes & Button */}
     <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
      className="col-span-1 lg:col-span-6 xl:col-span-6 flex flex-col items-start lg:mt-24 xl:mt-32"
     >
      <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[24px] overflow-hidden mb-6 md:mb-8">
       <Image
        src="/images/Rectangle 14.svg"
        alt="Artisanal Bread"
        fill
        className="object-cover hover:scale-[1.03] transition-transform duration-700"
        sizes="(max-width: 1024px) 100vw, 50vw"
       />
      </div>
      <button className="flex items-center gap-2 md:gap-3 text-[16px] md:text-[18px] lg:text-[20px] font-normal uppercase tracking-[0.03em] text-[#CF6A6A] hover:opacity-70 transition-opacity group">
       СМОТРЕТЬ КАТАЛОГ
       <span className="text-xl md:text-2xl font-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
      </button>
     </motion.div>

     {/* Right Column: Vertical Baguette */}
     <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      className="col-span-1 lg:col-span-2 xl:col-span-2 flex flex-col justify-start lg:mt-10"
     >
      <div className="relative w-[60%] sm:w-[45%] lg:w-full ml-auto lg:ml-0 aspect-[1/2.8] rounded-[20px] md:rounded-[24px] overflow-hidden">
       <Image
        src="/images/Rectangle 13.svg"
        alt="Packaging"
        fill
        className="object-cover hover:scale-[1.03] transition-transform duration-700"
        sizes="(max-width: 1024px) 50vw, 15vw"
       />
      </div>
     </motion.div>

    </div>
   </div>
  </section>
 );
};

export default LandingAbout;
