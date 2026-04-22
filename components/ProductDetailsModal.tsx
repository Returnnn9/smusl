"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShoppingBag, Heart } from "lucide-react"
import { useUIStore, useCartStore, useUserStore, useStoreData } from "@/store/hooks"
import { Product } from "@/store/types"

// ─── Component ───────────────────────────────────────────────────────────────

export default function ProductDetailsModal() {
 const uiStore = useUIStore()
 const cartStore = useCartStore()
 const userStore = useUserStore()

 const selectedProduct = useStoreData(uiStore, s => s.getSelectedProduct())
 const favorites = useStoreData(userStore, s => s.getFavorites())

 const setSelectedProduct = (p: Product | null) => uiStore.setSelectedProduct(p)
 const addToCart = (p: Product, q?: number) => cartStore.addToCart(p, q)
 const toggleFavorite = (id: number) => userStore.toggleFavorite(id)

 const [quantity, setQuantity] = useState(1)

 const handleClose = () => {
  setSelectedProduct(null)
  setQuantity(1)
 }

 const handleAddToCart = () => {
  if (!selectedProduct) return
  addToCart(selectedProduct, quantity)
  handleClose()
 }

 const decrement = () => setQuantity(q => Math.max(1, q - 1))
 const increment = () => setQuantity(q => q + 1)

 const renderContent = () => {
  if (!selectedProduct) return null
  const isFavorite = favorites.includes(selectedProduct.id)

  return (
   <>
    {/* Image & Buttons */}
    <div className="w-full bg-[#FCFBF9] overflow-hidden aspect-[4/3] sm:aspect-[16/9] relative shrink-0 flex items-center justify-center group rounded-t-[2.5rem] sm:rounded-t-none">
     {selectedProduct.image ? (
      <motion.img
       src={selectedProduct.image}
       alt={selectedProduct.name}
       className="w-full h-full object-cover sm:transition-transform sm:duration-700 sm:group-hover:scale-105"
       initial={{ scale: 0.95, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      />
     ) : (
      <div className="w-full h-full bg-[#EBE7E2]" />
     )}

     {/* Close Button */}
     <button
      onClick={handleClose}
      className="absolute top-4 left-4 sm:top-6 sm:left-6 h-10 w-10 rounded-full bg-white/80 backdrop-blur-md border border-[#F2F2F2] shadow-[0_4px_15px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#3A332E] hover:bg-white transition-all z-10 active:scale-90"
     >
      <X className="w-5 h-5 sm:w-6 sm:h-6" />
     </button>

     {/* Favorite Button */}
     <button
      onClick={(e) => { e.stopPropagation(); toggleFavorite(selectedProduct.id); }}
      className={`absolute top-4 right-4 sm:top-6 sm:right-6 h-10 w-10 rounded-full backdrop-blur-md border border-[#F2F2F2] shadow-[0_4px_15px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all z-10 active:scale-90 ${isFavorite ? "bg-[#CA8A70] text-white border-[#CA8A70]" : "bg-white/80 text-[#A19C98] hover:text-[#CA8A70] hover:bg-white"
       }`}
     >
      <Heart className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} />
     </button>
    </div>

    {/* Content */}
    <div className="flex flex-col p-6 sm:p-10 gap-6 sm:gap-8 flex-1 pb-10 sm:pb-12 bg-[#FAF8F5]">
     {/* Name + weight */}
     <div>
      <h1 className="text-[28px] sm:text-[36px] font-[900] text-[#3A332E] leading-[1.1] mb-1.5 tracking-tight">
       {selectedProduct.name}
      </h1>
      <p className="text-[14px] sm:text-[16px] font-[700] text-[#A19C98] uppercase tracking-widest">{selectedProduct.weight}</p>
     </div>

     {/* Price */}
     <div className="flex items-center gap-4">
      <span className="px-6 py-3 bg-[#CA8A70] text-white text-[20px] sm:text-[26px] font-[900] rounded-[1.4rem] shadow-[0_8px_20px_rgba(202,138,112,0.25)]">
       {selectedProduct.price} ₽/шт
      </span>
      <span className="text-[12px] sm:text-[14px] font-[700] text-[#A19C98] bg-[#F2F2F2] px-3 py-1.5 rounded-full">в наличии 31 шт</span>
     </div>

     {/* Quantity + Add */}
     <div className="flex items-center gap-3 sm:gap-6 select-none">
      <div className="flex items-center gap-2 bg-[#FAF8F5] rounded-[1.8rem] px-2 py-2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
       <button
        onClick={decrement}
        className="text-[20px] font-[500] text-[#CA8A70] leading-none w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(202,138,112,0.15)] transition-all active:scale-90 select-none touch-manipulation"
       >
        −
       </button>
       <span className="text-[16px] sm:text-[18px] font-[800] text-[#3A332E] min-w-[32px] sm:min-w-[40px] text-center select-none cursor-default">
        {quantity}
       </span>
       <button
        onClick={increment}
        className="text-[20px] font-[500] text-[#CA8A70] leading-none w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(202,138,112,0.15)] transition-all active:scale-90 select-none touch-manipulation"
       >
        +
       </button>
      </div>

      <button
       onClick={handleAddToCart}
       className="flex-1 h-[64px] sm:h-[76px] bg-[#CA8A70] text-white rounded-[1.5rem] font-[900] text-[16px] sm:text-[20px] flex items-center justify-center gap-2 sm:gap-3 transition-all active:scale-[0.98] shadow-[0_12px_30px_rgba(202,138,112,0.3)] hover:bg-[#bd7d64] hover:shadow-[0_15px_40px_rgba(202,138,112,0.4)] relative overflow-hidden group select-none touch-manipulation"
      >
       {/* Gloss effect */}
       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

       <ShoppingBag className="w-5 h-5 sm:w-7 sm:h-7 shrink-0 text-white relative z-10" />
       <span className="relative z-10 drop-shadow-sm tracking-wide pointer-events-none">
        <span className="sm:hidden">В корзину</span>
        <span className="hidden sm:inline">Добавить в корзину</span>
       </span>
      </button>
     </div>

     {/* Nutrition */}
     {selectedProduct.nutrition && (
      <div className="w-full bg-white border border-[#F2F2F2] rounded-[1.5rem] p-5 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
       <p className="text-[10px] sm:text-[11px] font-[900] text-[#A19C98] uppercase tracking-[0.2em] mb-5 sm:mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#CA8A70]" />
        На 100 грамм продукта
       </p>
       <div className="grid grid-cols-4 gap-4 sm:gap-8">
        {[
         { label: "Ккал", val: selectedProduct.nutrition.kcal },
         { label: "Белки", val: selectedProduct.nutrition.proteins },
         { label: "Жиры", val: selectedProduct.nutrition.fats },
         { label: "Углев.", val: selectedProduct.nutrition.carbs },
        ].map((n, i) => (
         <div key={i} className="flex flex-col gap-0.5 sm:gap-1">
          <span className="text-[18px] sm:text-[26px] font-[900] text-[#3A332E] leading-none tracking-tight">{n.val}</span>
          <span className="text-[9px] sm:text-[10px] font-[800] text-[#A19C98] uppercase tracking-wider leading-tight">{n.label}</span>
         </div>
        ))}
       </div>
      </div>
     )}

     {/* Description */}
     {selectedProduct.description && (
      <div className="space-y-2">
       <h3 className="text-[14px] sm:text-[16px] font-[900] text-[#3A332E] uppercase tracking-widest">Описание</h3>
       <p className="text-[15px] sm:text-[17px] text-[#3A332E]/80 leading-[1.6] sm:leading-[1.7] font-[600]">
        {selectedProduct.description}
       </p>
      </div>
     )}

     {/* Composition */}
     {selectedProduct.composition && (
      <div className="pb-2 space-y-2">
       <h3 className="text-[14px] sm:text-[16px] font-[900] text-[#3A332E] uppercase tracking-widest">Состав</h3>
       <p className="text-[14px] sm:text-[16px] text-[#A19C98] leading-[1.6] sm:leading-[1.7] font-[600]">
        {selectedProduct.composition}
       </p>
      </div>
     )}
    </div>
   </>
  )
 }

 return (
  <AnimatePresence>
   {selectedProduct && (
    <>
     {/* Overlay */}
     <motion.div
      key="overlay"
      className="fixed inset-0 z-[100] bg-[#3A332E]/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={handleClose}
     />

     {/* Mobile: bottom sheet */}
     <motion.div
      key="modal-mobile"
      className="fixed inset-x-0 bottom-0 z-[110] sm:hidden"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
     >
      <div className="relative bg-[#FCFBF9] rounded-t-[2.5rem] shadow-[0_-12px_40px_rgba(0,0,0,0.15)] w-full max-h-[92dvh] overflow-y-auto flex flex-col font-montserrat pb-20">
       {/* Drag handle */}
       <div className="sticky top-0 z-20 flex justify-center pt-4 pb-2 bg-[#FCFBF9]/95 backdrop-blur-md">
        <div className="w-12 h-1.5 rounded-full bg-[#E8E1DA]" />
       </div>
       {renderContent()}
      </div>
     </motion.div>

     {/* Desktop: right drawer */}
     <motion.div
      key="modal-desktop"
      className="fixed inset-y-0 right-0 z-[110] hidden sm:flex items-stretch"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
     >
      <div className="relative bg-[#FCFBF9] shadow-[-20px_0_60px_rgba(0,0,0,0.1)] w-[min(640px,100vw)] h-full overflow-y-auto flex flex-col font-montserrat">
       {renderContent()}
      </div>
     </motion.div>
    </>
   )}
  </AnimatePresence>
 )
}
