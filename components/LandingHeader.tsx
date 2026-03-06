"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence, Variants } from "framer-motion"

// ─── Constants ───────────────────────────────────────────────────────────────

const NAV_LINKS = [
 { label: "меню", href: "/catalog" },
 { label: "доставка", href: "/delivery" },
 { label: "новости", href: "/news" },
 { label: "контакты", href: "/contacts" },
 { label: "faq", href: "/faq" },
] as const

const SCROLL_THRESHOLD = 20

// ─── Animation Variants ──────────────────────────────────────────────────────

const menuVariants: Variants = {
 hidden: { opacity: 0 },
 show: {
  opacity: 1,
  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
 },
}

const itemVariants: Variants = {
 hidden: { opacity: 0, y: 30 },
 show: {
  opacity: 1,
  y: 0,
  transition: { type: "spring" as const, stiffness: 300, damping: 24 },
 },
}

// ─── Component ───────────────────────────────────────────────────────────────

const LandingHeader: React.FC = () => {
 const [isScrolled, setIsScrolled] = useState(false)
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

 // Scroll detection
 useEffect(() => {
  const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
  window.addEventListener("scroll", onScroll)
  return () => window.removeEventListener("scroll", onScroll)
 }, [])

 // Lock body scroll when mobile menu is open
 useEffect(() => {
  document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
  return () => { document.body.style.overflow = "" }
 }, [isMobileMenuOpen])

 const openMenu = () => setIsMobileMenuOpen(true)
 const closeMenu = () => setIsMobileMenuOpen(false)

 return (
  <>
   {/* ── Floating Header ── */}
   <div className={cn(
    "fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center",
    isScrolled ? "pt-4 md:pt-6 px-4" : "pt-0 px-0"
   )}>
    <header className={cn(
     "relative flex items-center justify-between w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
     isScrolled
      ? "max-w-[1200px] bg-white/60 backdrop-blur-2xl rounded-[32px] px-6 md:px-8 py-3 border border-white/60 shadow-[0_8px_32px_rgba(147,103,70,0.08)] ring-1 ring-black/[0.02]"
      : "container mx-auto px-4 md:px-8 py-4 md:py-6 bg-transparent"
    )}>

     {/* Mobile: hamburger */}
     <div className="lg:hidden flex-1 flex items-center justify-start">
      <button
       onClick={openMenu}
       className="p-2 -ml-2 text-[#936746] hover:text-[#B54442] transition-colors active:scale-95 group"
       aria-label="Открыть меню"
      >
       <Menu className="w-8 h-8 group-hover:drop-shadow-sm transition-all" strokeWidth={1.5} />
      </button>
     </div>

     {/* Desktop: left nav */}
     <nav className="hidden lg:flex flex-1 items-center justify-start gap-1 xl:gap-2 text-[14px] font-[800] tracking-wider text-[#936746]">
      {NAV_LINKS.map((link) => (
       <Link
        key={link.label}
        href={link.href}
        className="relative px-4 py-2 rounded-full overflow-hidden group lowercase transition-colors hover:text-[#B54442] text-[#936746]"
       >
        <span className="relative z-10">{link.label}</span>
        <span className="absolute inset-0 bg-[#936746]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center" />
       </Link>
      ))}
     </nav>

     {/* Center: logo */}
     <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
      <Link href="/" className="hover:scale-105 transition-transform duration-500 ease-out flex items-center group">
       <Image
        src="/images/Logoo.png"
        alt="СМЫСЛ ЕСТЬ"
        width={isScrolled ? 46 : 66}
        height={isScrolled ? 46 : 66}
        className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-[44px] md:w-[50px] lg:w-auto h-auto object-contain drop-shadow-sm group-hover:drop-shadow-md"
        priority
       />
      </Link>
     </div>

     {/* Desktop: right contacts */}
     <div className="hidden lg:flex flex-1 items-center justify-end gap-6 xl:gap-8 text-[15px] font-[800] text-[#936746]">
      <a href="tel:+79262104565" className="hidden xl:inline-block relative group transition-colors hover:text-[#B54442] whitespace-nowrap">
       +7 926 210-45-65
       <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B54442] group-hover:w-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
      </a>
      <a href="mailto:info@smislest.ru" className="relative group transition-colors hover:text-[#B54442]">
       info@smislest.ru
       <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B54442] group-hover:w-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
      </a>
     </div>

     {/* Mobile: right spacer */}
     <div className="lg:hidden flex-1" />
    </header>
   </div>

   {/* ── Mobile Fullscreen Menu ── */}
   <AnimatePresence>
    {isMobileMenuOpen && (
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[200] bg-[#FAF8F5]/90 backdrop-blur-2xl flex flex-col font-manrope overflow-hidden"
     >
      {/* Background blobs */}
      <motion.div
       initial={{ scale: 0.8, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       transition={{ duration: 1.5, ease: "easeOut" }}
       className="absolute top-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-[#CF8F73]/15 rounded-full blur-[80px] pointer-events-none"
      />
      <motion.div
       initial={{ scale: 0.8, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
       className="absolute bottom-[-10%] left-[-10%] w-[60vh] h-[60vh] bg-[#B54442]/10 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Menu header */}
      <div className="flex items-center justify-between px-6 py-6 w-full relative z-10">
       <div className="flex-1 flex items-center justify-start">
        <button
         onClick={closeMenu}
         className="p-2 -ml-2 text-[#936746] hover:text-[#B54442] transition-all rounded-full hover:bg-white/40 active:scale-90"
         aria-label="Закрыть меню"
        >
         <X className="w-8 h-8" strokeWidth={1} />
        </button>
       </div>
       <div className="absolute left-1/2 -translate-x-1/2 top-4 flex items-center justify-center">
        <Image
         src="/photo/logo.png"
         alt="СМЫСЛ ЕСТЬ"
         width={50}
         height={50}
         className="w-[45px] h-auto object-contain drop-shadow-sm opacity-80"
        />
       </div>
       <div className="flex-1" />
      </div>

      {/* Links */}
      <div className="flex flex-col items-center justify-center flex-1 w-full px-6 relative z-10 mt-[-40px]">
       <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-10 md:gap-12 w-full"
       >
        {NAV_LINKS.map((link) => (
         <motion.div key={link.label} variants={itemVariants}>
          <Link
           href={link.href}
           onClick={closeMenu}
           className="text-[40px] md:text-[50px] font-script tracking-[0.05em] text-[#CF6A6A] lowercase hover:opacity-70 transition-all hover:scale-[1.05] inline-block"
          >
           {link.label}
          </Link>
         </motion.div>
        ))}
       </motion.div>

       {/* Divider */}
       <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-[60px] h-[1px] bg-[#936746]/20 mt-16 mb-10"
       />

       {/* Contacts */}
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-3 text-center"
       >
        <a href="tel:+79262104565" className="text-[18px] font-[700] tracking-wide text-[#936746] hover:text-[#B54442] transition-colors">
         +7 (926) 210-45-65
        </a>
        <a href="mailto:info@smislest.ru" className="text-[16px] font-[600] text-[#936746]/60 hover:text-[#B54442] transition-colors">
         info@smislest.ru
        </a>
       </motion.div>
      </div>
     </motion.div>
    )}
   </AnimatePresence>
  </>
 )
}

export default LandingHeader
