"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const LandingHero = () => {
 const { scrollY } = useScroll();
 const y1 = useTransform(scrollY, [0, 500], [0, -100]);
 const y2 = useTransform(scrollY, [0, 500], [0, 100]);

 return (
  <section className="relative pt-24 pb-32 bg-[#FAF8F5] overflow-hidden">
   <div className="w-full px-4 md:px-10 lg:px-16">
    <motion.div
     initial={{ opacity: 0, y: 30 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
     className="relative w-full aspect-[16/6] rounded-[48px] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.2),0_10px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-white/10"
    >
     <Image
      src="/images/Desert.png"
      alt="Exclusive Pastries"
      fill
      className="object-cover scale-105"
      priority
     />
     <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5" />
    </motion.div>

    {/* Headline */}
    <div className="mt-16 md:mt-24 w-full flex flex-col items-center text-center lg:items-start lg:text-left h-auto">
     <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8 w-full">
      {/* Row 1 */}
      <motion.div
       style={{ y: y1 }}
       initial={{ opacity: 0, x: -50 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
       className="flex flex-col lg:flex-row items-center lg:items-baseline justify-between w-full"
      >
       <h1 className="text-[36px] md:text-[64px] lg:text-[100px] xl:text-[140px] font-extrabold text-smusl-red uppercase tracking-tighter leading-[1.1] md:leading-[0.9]">
        БЕЗГЛЮТЕНОВЫЙ
       </h1>
       <div className="flex items-center relative mt-4 lg:mt-0 lg:ml-8">
        <motion.span
         animate={{ y: [0, -10, 0] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         className="font-script text-[60px] md:text-[100px] lg:text-[140px] xl:text-[160px] text-smusl-red leading-none select-none pointer-events-none drop-shadow-sm origin-bottom translate-y-2 lg:translate-y-4"
        >
         Х
        </motion.span>
        <h1 className="text-[36px] md:text-[64px] lg:text-[100px] xl:text-[140px] font-extrabold text-smusl-red uppercase tracking-tighter leading-[1.1] md:leading-[0.9] -ml-2 lg:-ml-4 relative z-10">
         ЛЕБ
        </h1>
       </div>
      </motion.div>

      {/* Row 2 */}
      <motion.div
       style={{ y: y2 }}
       initial={{ opacity: 0, x: 50 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
       className="flex flex-col lg:flex-row items-center lg:items-baseline justify-between w-full"
      >
       <h1 className="text-[36px] md:text-[64px] lg:text-[100px] xl:text-[140px] font-extrabold text-smusl-red uppercase tracking-tighter leading-[1.1] md:leading-[0.9] hidden lg:block">
        И
       </h1>
       <div className="flex items-center mt-4 lg:mt-0">
        <h1 className="text-[36px] md:text-[64px] lg:text-[100px] xl:text-[140px] font-extrabold text-smusl-red uppercase tracking-tighter leading-[1.1] md:leading-[0.9] lg:hidden mr-4">
         И
        </h1>
        <div className="relative isolate translate-y-2 lg:translate-y-4 pr-2 md:pr-4">
         <motion.span
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="font-script text-[70px] md:text-[110px] lg:text-[150px] xl:text-[180px] text-smusl-red leading-none select-none pointer-events-none drop-shadow-sm inline-block translate-y-2 lg:translate-y-4"
         >
          Д
         </motion.span>
        </div>
        <h1 className="text-[36px] md:text-[64px] lg:text-[100px] xl:text-[140px] font-extrabold text-smusl-red uppercase tracking-tighter leading-[1.1] md:leading-[0.9] -ml-2 lg:-ml-4 relative z-10">
         ЕСЕРТЫ В МОСКВЕ
        </h1>
       </div>
      </motion.div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default LandingHero;
