"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShoppingBag, Heart } from "lucide-react"
import { useApp } from "@/store/AppContext"

// ─── Component ───────────────────────────────────────────────────────────────

export default function ProductDetailsModal() {
 const { selectedProduct, setSelectedProduct, addToCart } = useApp()
 const [quantity, setQuantity] = useState(1)

 const handleClose = () => {
  setSelectedProduct(null)
  setQuantity(1)
 }

 const handleAddToCart = () => {
  if (!selectedProduct) return
  for (let i = 0; i < quantity; i++) addToCart(selectedProduct)
  handleClose()
 }

 const decrement = () => setQuantity(q => Math.max(1, q - 1))
 const increment = () => setQuantity(q => q + 1)

 return (
  <AnimatePresence>
   {selectedProduct && (
    <>
     {/* Overlay */}
     <motion.div
      key="overlay"
      className="fixed inset-0 z-[100] bg-[#4A403A]/40 backdrop-blur-sm"
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
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
     >
      <div className="relative bg-white rounded-t-[2rem] shadow-2xl w-full max-h-[92dvh] overflow-y-auto flex flex-col font-montserrat">
       {/* Drag handle */}
       <div className="sticky top-0 z-20 flex justify-center pt-3 pb-1 bg-white/80 backdrop-blur-sm">
        <div className="w-10 h-1 rounded-full bg-[#4A403A]/15" />
       </div>
       {/* Close */}


       {/* Image */}
       <div className="w-full bg-[#EBE7E2] overflow-hidden aspect-[4/3] relative shrink-0 group">
        <motion.img
         src={selectedProduct.image}
         alt={selectedProduct.name}
         className="w-full h-full object-cover"
         initial={{ scale: 0.97, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ duration: 0.4, delay: 0.05 }}
        />
        <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center text-[#D8D8D8] hover:text-[#CF8F73] transition-colors z-10">
         <Heart className="w-5 h-5" />
        </button>
       </div>

       {/* Content */}
       <div className="flex flex-col p-5 gap-5 flex-1 pb-8">
        <div>
         <h1 className="text-[24px] font-bold text-[#4A403A] leading-[1.1] mb-1">{selectedProduct.name}</h1>
         <p className="text-[14px] font-medium text-[#4A403A]/60">{selectedProduct.weight}</p>
        </div>
        <div className="flex items-center gap-3">
         <span className="px-5 py-2.5 bg-[#CF8F73] text-white text-[19px] font-bold rounded-[1rem] shadow-sm shadow-[#CF8F73]/20">
          {selectedProduct.price} ₽/шт
         </span>
         <span className="text-[13px] font-medium text-[#4A403A]/50">в наличии 31 шт</span>
        </div>
        <div className="flex items-center gap-3">
         <div className="flex items-center gap-4 bg-[#FDF4EE] rounded-[1rem] px-5 py-3">
          <button onClick={decrement} className="text-[24px] font-light text-[#CF8F73] leading-none w-6 text-center hover:opacity-70 transition-opacity">−</button>
          <span className="text-[19px] font-bold text-[#4A403A] min-w-[20px] text-center">{quantity}</span>
          <button onClick={increment} className="text-[24px] font-light text-[#CF8F73] leading-none w-6 text-center hover:opacity-70 transition-opacity">+</button>
         </div>
         <button
          onClick={handleAddToCart}
          className="flex-1 h-[56px] bg-[#CF8F73] text-white rounded-[1.2rem] font-semibold text-[16px] flex items-center justify-center gap-2 shadow-lg shadow-[#CF8F73]/20 hover:bg-[#b87a60] transition-all active:scale-95"
         >
          <ShoppingBag className="w-5 h-5" />
          Добавить в корзину
         </button>
        </div>
        {selectedProduct.nutrition && (
         <div className="w-full bg-[#FEF4E8] rounded-[1.5rem] p-4">
          <p className="text-[10px] font-black text-[#CF8F73] uppercase tracking-[0.15em] mb-3">на 100 грамм</p>
          <div className="grid grid-cols-4 gap-3">
           {[
            { label: "Ккал/кДж", val: selectedProduct.nutrition.kcal },
            { label: "Белки, г", val: selectedProduct.nutrition.proteins },
            { label: "Жиры, г", val: selectedProduct.nutrition.fats },
            { label: "Углеводы, г", val: selectedProduct.nutrition.carbs },
           ].map((n, i) => (
            <div key={i} className="flex flex-col gap-0.5">
             <span className="text-[16px] font-black text-[#CF8F73] leading-none">{n.val}</span>
             <span className="text-[8px] font-bold text-[#CF8F73]/40 uppercase leading-tight">{n.label}</span>
            </div>
           ))}
          </div>
         </div>
        )}
        {selectedProduct.description && (
         <div>
          <h3 className="text-[17px] font-bold text-[#4A403A] mb-1.5">Описание</h3>
          <p className="text-[14px] text-[#4A403A]/80 leading-[1.6] font-medium">{selectedProduct.description}</p>
         </div>
        )}
        {selectedProduct.composition && (
         <div>
          <h3 className="text-[17px] font-bold text-[#4A403A] mb-1.5">Состав</h3>
          <p className="text-[13px] text-[#4A403A]/60 leading-[1.5] font-medium">{selectedProduct.composition}</p>
         </div>
        )}
       </div>
      </div>
     </motion.div>

     {/* Desktop: right drawer */}
     <motion.div
      key="modal-desktop"
      className="fixed inset-y-0 right-0 z-[110] hidden sm:flex items-stretch"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
     >
      <div className="relative bg-white shadow-2xl w-[min(680px,100vw)] h-full overflow-y-auto flex flex-col font-montserrat">
       {/* Close */}


       {/* Image */}
       <div className="w-full bg-[#EBE7E2] overflow-hidden aspect-[16/9] relative shrink-0 group">
        <motion.img
         src={selectedProduct.image}
         alt={selectedProduct.name}
         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
         initial={{ scale: 0.95, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        />
        <button className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center text-[#D8D8D8] hover:text-[#CF8F73] transition-colors z-10">
         <Heart className="w-5 h-5" />
        </button>
       </div>

       {/* Content */}
       <div className="flex flex-col p-6 sm:p-8 gap-6 flex-1">
        {/* Name + weight */}
        <div>
         <h1 className="text-[26px] sm:text-[32px] font-bold text-[#4A403A] leading-[1.1] mb-1">
          {selectedProduct.name}
         </h1>
         <p className="text-[15px] sm:text-[16px] font-medium text-[#4A403A]/60">{selectedProduct.weight}</p>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
         <span className="px-6 py-3 bg-[#CF8F73] text-white text-[20px] sm:text-[24px] font-bold rounded-[1rem] shadow-sm shadow-[#CF8F73]/20">
          {selectedProduct.price} ₽/шт
         </span>
         <span className="text-[14px] font-medium text-[#4A403A]/50">в наличии 31 шт</span>
        </div>

        {/* Quantity + Add */}
        <div className="flex items-center gap-4">
         <div className="flex items-center gap-6 bg-[#FDF4EE] rounded-[1.2rem] px-6 py-3.5">
          <button
           onClick={decrement}
           className="text-[28px] font-light text-[#CF8F73] leading-none w-6 text-center hover:opacity-70 transition-opacity"
          >−</button>
          <span className="text-[20px] font-bold text-[#4A403A] min-w-[24px] text-center">{quantity}</span>
          <button
           onClick={increment}
           className="text-[28px] font-light text-[#CF8F73] leading-none w-6 text-center hover:opacity-70 transition-opacity"
          >+</button>
         </div>

         <button
          onClick={handleAddToCart}
          className="flex-1 h-[68px] bg-[#CF8F73] text-white rounded-[1.2rem] font-semibold text-[18px] flex items-center justify-center gap-3 shadow-lg shadow-[#CF8F73]/20 hover:bg-[#b87a60] transition-all active:scale-95"
         >
          <ShoppingBag className="w-6 h-6 shrink-0" />
          Добавить в корзину
         </button>
        </div>

        {/* Nutrition */}
        {selectedProduct.nutrition && (
         <div className="w-full bg-[#FEF4E8] rounded-[1.5rem] p-5 sm:p-6">
          <p className="text-[11px] sm:text-[12px] font-black text-[#CF8F73] uppercase tracking-[0.15em] mb-4">
           на 100 грамм
          </p>
          <div className="grid grid-cols-4 gap-4">
           {[
            { label: "Ккал/кДж", val: selectedProduct.nutrition.kcal },
            { label: "Белки, г", val: selectedProduct.nutrition.proteins },
            { label: "Жиры, г", val: selectedProduct.nutrition.fats },
            { label: "Углеводы, г", val: selectedProduct.nutrition.carbs },
           ].map((n, i) => (
            <div key={i} className="flex flex-col gap-1">
             <span className="text-[18px] sm:text-[22px] font-black text-[#CF8F73] leading-none">{n.val}</span>
             <span className="text-[9px] sm:text-[10px] font-bold text-[#CF8F73]/40 uppercase leading-tight">{n.label}</span>
            </div>
           ))}
          </div>
         </div>
        )}

        {/* Description */}
        {selectedProduct.description && (
         <div>
          <h3 className="text-[18px] sm:text-[20px] font-bold text-[#4A403A] mb-2">Описание</h3>
          <p className="text-[15px] sm:text-[16px] text-[#4A403A]/80 leading-[1.7] font-medium">{selectedProduct.description}</p>
         </div>
        )}

        {/* Composition */}
        {selectedProduct.composition && (
         <div className="pb-2">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-[#4A403A] mb-2">Состав</h3>
          <p className="text-[14px] sm:text-[15px] text-[#4A403A]/60 leading-[1.6] font-medium">{selectedProduct.composition}</p>
         </div>
        )}
       </div>
      </div>
     </motion.div>
    </>
   )}
  </AnimatePresence>
 )
}
