"use client"

import React from "react"
import { motion } from "framer-motion"
import { Heart, ShoppingBag } from "lucide-react"
import { Product } from "@/store/types"
import { useUIStore, useUserStore, useStoreData } from "@/store/hooks"

// ─── Props ───────────────────────────────────────────────────────────────────

interface ProductCardProps extends Product {
 onAdd: () => void
 index?: number
}

// ─── Component ───────────────────────────────────────────────────────────────

const ProductCard: React.FC<ProductCardProps> = ({ onAdd, index = 0, ...product }) => {
 const { id, name, weight, price, image } = product

 const uiStore = useUIStore()
 const userStore = useUserStore()

 const favorites = useStoreData(userStore, s => s.getFavorites())
 const isFavorite = favorites.includes(id)

 const setSelectedProduct = (p: any) => uiStore.setSelectedProduct(p)
 const toggleFavorite = (id: number) => userStore.toggleFavorite(id)

 return (
  <motion.div
   initial={{ opacity: 0, y: 15 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.5, delay: index * 0.05 }}
   onClick={() => setSelectedProduct(product)}
   className="bg-[#FAF7F5] rounded-[1.2rem] sm:rounded-[1.5rem] border border-[#F2F2F2] h-full transition-all duration-500 cursor-pointer group flex flex-col p-1.5 sm:p-3 font-montserrat shadow-sm hover:shadow-xl hover:shadow-[#CF8F73]/5"
  >
   {/* Image */}
   <div className="relative aspect-[4/3] w-full rounded-[0.8rem] sm:rounded-[1.1rem] bg-[#F3ECE4] overflow-hidden mb-2 sm:mb-2">
    <motion.img
     src={image}
     alt={name}
     loading="lazy"
     decoding="async"
     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <motion.button
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9, rotate: -10 }}
     onClick={(e) => { e.stopPropagation(); toggleFavorite(id) }}
     className={`absolute top-2 right-2 xs:top-2.5 xs:right-2.5 h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10 rounded-full shadow-md flex items-center justify-center transition-all ${isFavorite ? "bg-[#CD8B70] text-white" : "bg-white text-[#D8D8D8] hover:text-[#CF8F73]"
      }`}
    >
     <Heart className={`w-3 xs:w-3.5 sm:w-5 h-3 xs:h-3.5 sm:h-5 ${isFavorite ? "fill-white" : "fill-none"}`} />
    </motion.button>
   </div>

   <div className="flex-1 flex flex-col gap-3 sm:gap-4 px-2 xs:px-3 sm:px-4 pb-3 sm:pb-4">
    <div className="space-y-1.5 sm:space-y-2">
     {/* Title & Price Row */}
     <div className="flex flex-col xl:flex-row xl:items-baseline justify-between gap-1.5 xl:gap-3">
      <motion.h3
       className="text-[14px] xs:text-[15px] sm:text-[16px] xl:text-[20px] font-bold text-[#4A403A] leading-[1.2] tracking-tight line-clamp-2 min-h-[2.4em]"
      >
       {name}
      </motion.h3>
      <div className="text-[15px] xs:text-[16px] sm:text-[17px] xl:text-[22px] font-[900] text-[#4A403A] whitespace-nowrap xl:text-right mt-1">
       {price} ₽/шт
      </div>
     </div>

     {/* Row 2: Weight & Stock */}
     <div className="flex items-center justify-between text-[#8E8278] mt-1">
      <p className="text-[13px] xs:text-[14px] sm:text-[14px] xl:text-[15px] font-medium">{weight}</p>
      <p className="text-[12px] xs:text-[13px] sm:text-[13px] xl:text-[15px] font-medium text-right text-[#8E8278]/70">в наличии 10 шт</p>
     </div>
    </div>

    <motion.button
     whileTap={{ scale: 0.96 }}
     whileHover={{ y: -2 }}
     onClick={(e) => { e.stopPropagation(); onAdd() }}
     className="w-full h-12 xs:h-14 sm:h-16 mt-auto bg-smusl-terracotta rounded-[1rem] flex items-center justify-center gap-2 text-white hover:bg-[#b87a60] transition-all "
    >
     <ShoppingBag className="w-4 h-4 xs:w-5 xs:h-5 shrink-0" />
     <span className="text-[14px] xs:text-[16px] sm:text-[18px] font-bold">Добавить в корзину</span>
    </motion.button>
   </div>
  </motion.div>
 )
}

export default ProductCard
