"use client"

import React from "react"
import { motion } from "framer-motion"
import { Heart, ShoppingBag } from "lucide-react"
import Image from "next/image"
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

 const setSelectedProduct = (p: Product) => uiStore.setSelectedProduct(p)
 const toggleFavorite = (id: number) => userStore.toggleFavorite(id)

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
}

export default ProductCard
