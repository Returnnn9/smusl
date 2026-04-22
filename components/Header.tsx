"use client"

import React from "react"
import Link from "next/link"
import { User, Search, ChevronDown } from "lucide-react"
import { useUIStore, useUserStore } from "@/store/hooks"
import { useSession } from "next-auth/react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

import { categories } from "@/data/products"

// ─── Component ───────────────────────────────────────────────────────────────

interface HeaderProps {
 showCategories?: boolean
}

const Header: React.FC<HeaderProps> = ({ showCategories = true }) => {
  const address = useUserStore(s => s.address)
  const deliveryType = useUserStore(s => s.deliveryType)
  const activeCategory = useUIStore(s => s.activeCategory)
  const searchQuery = useUIStore(s => s.searchQuery)

  const setAddressModalOpen = useUIStore(s => s.setAddressModalOpen)
  const setActiveCategory = useUIStore(s => s.setActiveCategory)
  const setSearchQuery = useUIStore(s => s.setSearchQuery)

 const { status } = useSession()
 const [mounted, setMounted] = React.useState(false)
 React.useEffect(() => setMounted(true), [])
 const isAuthenticated = mounted && status === "authenticated"

 return (
  <header className="sticky top-0 w-full z-[100] font-manrope bg-[#FDF8ED]/70 backdrop-blur-xl border-b border-[#4A403A]/5 transition-all duration-300">
   <div className="w-full px-4 sm:px-8 lg:px-12">

    {/* Primary Navigation Row */}
    <div className="flex items-center justify-between py-3 sm:py-5 gap-4 lg:gap-8">

     {/* Left Group: Logo + Desktop Navigation */}
     <div className="flex items-center gap-6 lg:gap-10 shrink-0 min-w-0">
      <Link href="/" className="flex items-center cursor-pointer shrink-0 select-none group">
       <motion.img
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        src="/photo/logo.png"
        alt="СМЫСЛ ЕСТЬ"
        width="180"
        height="46"
        className="h-[30px] xs:h-[35px] sm:h-[40px] md:h-[46px] w-auto object-contain drop-shadow-sm"
       />
      </Link>

      {/* Desktop Inline Categories */}
      {showCategories && (
       <div className="hidden lg:flex items-center gap-1 xl:gap-2">
        {categories.map((cat) => {
         const isActive = activeCategory === cat.id
         return (
          <button
           key={cat.id}
           onClick={() => {
            setActiveCategory(cat.id)
            setSearchQuery('')
           }}
           className={cn(
            "relative px-4 xl:px-5 py-2.5 rounded-full text-[14px] xl:text-[15px] font-bold transition-colors duration-300 whitespace-nowrap group",
            isActive
             ? "text-white shadow-terracotta/20"
             : "text-smusl-brown/60 hover:text-smusl-brown"
           )}
          >
           {isActive && (
            <motion.div
             layoutId="activeCategory"
             className="absolute inset-0 bg-smusl-terracotta rounded-full z-[-1] shadow-lg shadow-smusl-terracotta/20"
             initial={false}
             transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
            />
           )}
           {!isActive && (
            <div className="absolute inset-0 bg-smusl-terracotta/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-[-1]" />
           )}
           {cat.label}
          </button>
         )
        })}
       </div>
      )}
     </div>

     {/* Right Group: Address + Search + Profile */}
     <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 shrink-0 min-w-0">

      {/* Address Button */}
      <motion.button
       whileHover={{ y: -1, x: -2 }}
       onClick={() => setAddressModalOpen(true)}
       className="hidden md:flex flex-col items-end text-right group transition-all shrink-0"
      >
       <span className="text-[10px] xl:text-[11px] font-black text-smusl-terracotta/80 leading-none mb-1.5 uppercase tracking-[0.2em]">
        {deliveryType === "pickup" ? "Самовывоз" : (deliveryType === "delivery" ? "Доставка" : "Получение")}
       </span>
       <div className="flex items-center gap-2 justify-end">
        <span className="text-[14px] xl:text-[16px] font-bold text-smusl-brown max-w-[120px] lg:max-w-[160px] xl:max-w-[200px] truncate tracking-tight leading-tight group-hover:text-smusl-terracotta transition-colors">
         {address || "Выбрать адрес"}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-smusl-brown/30 group-hover:text-smusl-terracotta transition-all" />
       </div>
      </motion.button>

      {/* Premium Search Input (Matched to Profile Button Size) */}
      <div className="hidden xl:block relative w-full xl:w-[240px] 2xl:w-[320px] group transform-gpu h-[50px] sm:h-[54px]">
       <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-full border border-[#D8CEC8]/40 shadow-[inner_0_2px_8px_rgba(0,0,0,0.04)] group-hover:border-smusl-terracotta/20 transition-all duration-500" />

       {/* Shimmer Effect */}
       <div className="absolute inset-x-0 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />

       <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-smusl-brown/30 group-focus-within:text-smusl-terracotta group-focus-within:scale-110 transition-all duration-300" />
       <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск десертов..."
        className="absolute inset-0 bg-transparent px-14 text-[15px] font-bold text-smusl-brown focus:outline-none placeholder:text-smusl-brown/30 transition-all"
       />
      </div>

      {/* Profile Button */}
      <motion.div
       whileHover={{ scale: 1.02 }}
       whileTap={{ scale: 0.98 }}
       className="h-[50px] sm:h-[54px]"
      >
       <Link
        href="/profile"
        className="flex items-center gap-3 h-full px-6 bg-white border border-[#D8CEC8]/60 rounded-full text-[15px] font-bold text-smusl-brown hover:border-smusl-terracotta/40 shadow-premium transition-all shrink-0"
       >
        <User className={cn("w-5 h-5 shrink-0 transition-colors", isAuthenticated ? "text-smusl-terracotta" : "text-smusl-brown/40")} />
        <span className="hidden sm:inline tracking-tight">
         {isAuthenticated ? "Профиль" : "Войти"}
        </span>
       </Link>
      </motion.div>
     </div>
    </div>

    {/* Mobile/Tablet Address Display */}
    <div className="lg:hidden flex flex-col px-1 pt-1 mb-2">
     <span className="text-[10px] font-black text-smusl-terracotta/80 uppercase tracking-[0.15em] leading-none mb-1">
      {deliveryType === "pickup" ? "Самовывоз" : (deliveryType === "delivery" ? "Доставка" : "Получение")}
     </span>
     <button onClick={() => setAddressModalOpen(true)} className="flex items-center gap-1.5 text-smusl-brown group w-fit">
      <span className="text-[14px] font-bold truncate max-w-[220px] group-hover:text-smusl-terracotta transition-colors">
       {address || "Выбрать адрес"}
      </span>
      <ChevronDown className="w-3.5 h-3.5 text-smusl-brown/30 group-hover:text-smusl-terracotta transition-all" />
     </button>
    </div>

    {/* Mobile/Tablet Row 2: Search and Scrollable Categories */}
    <div className="lg:hidden flex flex-col gap-3 pb-4">
     {/* Search on mobile */}
     <div className="relative w-full group overflow-hidden">
      <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-smusl-brown/20 transition-all font-bold" />
      <input
       type="text"
       value={searchQuery}
       onChange={(e) => setSearchQuery(e.target.value)}
       placeholder="Поиск десертов..."
       className="w-full bg-white/60 backdrop-blur-md border border-[#4A423D]/5 rounded-full py-3.5 pl-14 pr-6 text-[15px] font-bold text-smusl-brown focus:bg-white focus:outline-none focus:border-smusl-terracotta/40 transition-all duration-300 placeholder:text-smusl-brown/30 shadow-[inner_0_2px_4px_rgba(0,0,0,0.02)]"
      />
     </div>

     {/* Categories scroll on mobile */}
     {showCategories && (
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar smooth-scroll -mx-4 px-4">
       {categories.map((cat) => {
        const isActive = activeCategory === cat.id
        return (
         <button
          key={cat.id}
          onClick={() => {
           setActiveCategory(cat.id)
           setSearchQuery('')
          }}
          className={cn(
           "relative px-5 py-2 rounded-full text-[14px] font-bold transition-colors duration-300 whitespace-nowrap group",
           isActive ? "text-white" : "text-smusl-brown/60 hover:text-smusl-brown"
          )}
         >
          {isActive && (
           <motion.div
            layoutId="activeCategoryMobile"
            className="absolute inset-0 bg-smusl-terracotta rounded-full z-[-1]"
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
           />
          )}
          {cat.label}
         </button>
        )
       })}
      </div>
     )}
    </div>

   </div>
  </header>
 )
}

export default Header
