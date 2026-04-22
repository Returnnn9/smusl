"use client"

import React, { useState } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { Heart, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { Product } from "@/store/types"
import { useUIStore, useUserStore } from "@/store/hooks"
import { cn } from "@/lib/utils"

// ─── Props ───────────────────────────────────────────────────────────────────

interface ProductCardProps extends Product {
  onAdd: () => void
  index?: number
  isNew?: boolean
}

// ─── Component ───────────────────────────────────────────────────────────────

const ProductCard: React.FC<ProductCardProps> = ({ onAdd, index = 0, ...product }) => {
  const { id, name, weight, price, image } = product
  const [isHovered, setIsHovered] = useState(false)

  const setSelectedProduct = useUIStore((s) => s.setSelectedProduct)
  const toggleFavorite = useUserStore((s) => s.toggleFavorite)
  const favorites = useUserStore((s) => s.favorites)
  
  const isFavorite = Array.isArray(favorites) && favorites.includes(id)

  // 3D Tilt Physics
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

<<<<<<< HEAD
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onClick={() => setSelectedProduct(product)}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative flex flex-col bg-white border border-[#4A423D]/5 rounded-[2.5rem] p-3 sm:p-4 h-full cursor-pointer group font-manrope transition-shadow duration-500 hover:shadow-[0_40px_80px_-20px_rgba(74,64,58,0.15)] transform-gpu"
    >
      {/* Premium Glass Shell Effect */}
      <div className="absolute inset-0 rounded-[2.5rem] border border-white/40 pointer-events-none z-10" />
      
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full rounded-[1.8rem] bg-[#FDF8F3] overflow-hidden mb-4 transform-gpu" style={{ transform: "translateZ(30px)" }}>
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index <= 1}
            className="object-cover"
          />
        </motion.div>

        {/* Glass Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => { e.stopPropagation(); toggleFavorite(id) }}
          className={cn(
            "absolute top-3 right-3 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center transition-all duration-500 backdrop-blur-xl border z-20",
            isFavorite 
              ? "bg-smusl-terracotta text-white border-smusl-terracotta/20 shadow-lg shadow-smusl-terracotta/30" 
              : "bg-white/40 text-smusl-brown/30 border-white/40 hover:bg-white/80 hover:text-smusl-terracotta translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          )}
        >
          <Heart className={cn("w-5 h-5 sm:w-6 sm:h-6", isFavorite && "fill-current")} />
        </motion.button>

        {/* New Badge */}
        {product.isNew && (
          <div className="absolute top-3 left-3 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-white/50 z-20">
            <span className="text-[10px] sm:text-[11px] font-black text-smusl-terracotta uppercase tracking-[0.2em]">New</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col px-1 sm:px-2" style={{ transform: "translateZ(20px)" }}>
        <div className="space-y-1 mb-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[17px] sm:text-[19px] xl:text-[22px] font-black text-smusl-brown leading-[1.1] tracking-tight line-clamp-2 group-hover:text-smusl-terracotta transition-colors duration-300">
              {name}
            </h3>
            <div className="text-[19px] sm:text-[22px] xl:text-[24px] font-[900] text-smusl-brown whitespace-nowrap tracking-tighter">
              {price} ₽
            </div>
          </div>
          <div className="flex items-center justify-between opacity-60">
            <span className="text-[13px] sm:text-[15px] font-bold text-smusl-brown/60 uppercase tracking-widest">{weight}</span>
            {product.quantity != null && (
            <span className="text-[12px] sm:text-[14px] font-medium text-smusl-brown/40 italic">в наличии {product.quantity} шт</span>
          )}
          </div>
        </div>

        {/* WOW Action Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={(e) => { e.stopPropagation(); onAdd() }}
          className="w-full h-[56px] sm:h-[64px] bg-gradient-to-br from-[#DF997E] to-[#CD8B70] rounded-[1.4rem] flex items-center justify-center gap-2.5 text-white transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(223,153,126,0.25)] select-none touch-manipulation transform-gpu"
        >
          <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 drop-shadow-md group-hover:scale-110 transition-transform duration-500" />
          <span className="text-[15px] sm:text-[16px] font-black uppercase tracking-[0.1em] drop-shadow-md">
            <span className="sm:hidden">В корзину</span>
            <span className="hidden sm:inline">Добавить в корзину</span>
          </span>
        </motion.button>
      </div>
    </motion.div>
  )
=======
 return (
  <motion.div
   initial={{ opacity: 0, y: 30 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true, margin: "-50px" }}
   transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
   onClick={() => setSelectedProduct(product)}
   className="group relative flex flex-col bg-white rounded-[2.5rem] p-4 sm:p-5 border border-[#F2EEE9] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(202,138,112,0.12)] transition-all duration-500 hover:-translate-y-1.5 font-montserrat"
  >
   {/* Image */}
   <div className="relative aspect-square w-full rounded-[2.2rem] overflow-hidden bg-[#FDFBF9] border border-[#F2EEE9] mb-4">
    <Image
     src={image}
     alt={name}
     fill
     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
     priority={index <= 1} // First 2 images are treated as LCP / priority
     className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <motion.button
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9, rotate: -10 }}
     onClick={(e) => { e.stopPropagation(); toggleFavorite(id) }}
     className={`absolute top-3 right-3 h-10 w-10 rounded-full shadow-md flex items-center justify-center transition-all ${isFavorite ? "bg-[#CA8A70] text-white" : "bg-white text-[#A19C98] hover:text-[#CA8A70]"
      }`}
    >
     <Heart className={`w-5 h-5 ${isFavorite ? "fill-white" : "fill-none"}`} />
    </motion.button>
   </div>

   <div className="flex-1 flex flex-col gap-3 sm:gap-4 px-1">
    <div className="flex flex-col justify-between">
     <div className="space-y-1">
      {/* Title & Price Row */}
      <div className="flex items-start justify-between gap-4 w-full overflow-hidden">
       <motion.h3
        className="text-[16px] sm:text-[18px] font-[800] text-[#3A332E] leading-[1.2] tracking-tight line-clamp-2 flex-1 min-w-0 pr-1 break-words"
       >
        {name}
       </motion.h3>
       <div className="text-[18px] sm:text-[20px] font-[900] text-[#CA8A70] whitespace-nowrap text-right shrink-0 tracking-tight">
        {price} ₽
       </div>
      </div>

      {/* Row 2: Weight & Stock */}
      <div className="flex items-center justify-between mt-1">
       <p className="text-[14px] font-[700] text-[#A19C98]">{weight}</p>
       <p className="text-[13px] font-[700] text-[#A19C98]/60 text-right">в наличии 10 шт</p>
      </div>
     </div>
    </div>

     <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); onAdd() }}
      className="w-full h-[56px] sm:h-[64px] bg-white border border-[#F2F2F2] text-[#CA8A70] rounded-[1.4rem] font-[800] text-[14px] sm:text-[15px] flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] group-hover:border-[#CA8A70]/40 group-hover:bg-[#CA8A70] group-hover:text-white mt-4"
     >
      <ShoppingBag className="w-5 h-5 shrink-0" />
      <span className="tracking-wide">
       <span className="sm:hidden">В корзину</span>
       <span className="hidden sm:inline">Добавить в корзину</span>
      </span>
     </button>
   </div>
  </motion.div>
 )
>>>>>>> 63ace912840f4aa73853efb951a605ee01f139de
}

export default ProductCard
