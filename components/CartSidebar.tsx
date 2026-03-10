"use client"

import React from "react"
import { Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useUIStore, useCartStore, useUserStore, useStoreData } from "@/store/hooks"
import { cn } from "@/lib/utils"

interface CartSidebarProps {
 isMobile?: boolean
 onClose?: () => void
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isMobile = false, onClose }) => {
 const uiStore = useUIStore()
 const cartStore = useCartStore()
 const userStore = useUserStore()

 const cart = useStoreData(cartStore, s => s.getCart())
 const address = useStoreData(userStore, s => s.getAddress())

 const updateQuantity = (id: number, d: number) => cartStore.updateQuantity(id, d)
 const setCheckoutOpen = (o: boolean) => uiStore.setCheckoutOpen(o)
 const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

 return (
  <div className={`flex flex-col ${isMobile ? "h-full" : "h-[calc(100vh-8rem)]"} ${!isMobile ? "bg-gradient-to-b from-[#FDF8ED] to-[#F5E6DA] rounded-[2.5rem] shadow-2xl border border-white/20 p-6" : ""} font-manrope overflow-hidden`}>

   {/* Header Area */}
   <div className={`flex items-center justify-between shrink-0 ${isMobile ? "mb-4 pt-1" : "mb-6"}`}>
    <div className="flex flex-col min-w-0 w-full">
     <span className="text-[10px] sm:text-[12px] font-bold text-[#CF8D72] uppercase tracking-[0.2em] mb-1">Ваша корзина</span>
     <h2 className="flex items-center gap-2 min-w-0">
      <span className="w-2 h-2 rounded-full bg-[#CF8D72] animate-pulse shrink-0" />
      <span className={cn(
       "font-extrabold text-[#4A423D] truncate max-w-full",
       isMobile ? "text-[17px]" : "text-[20px]"
      )} title={address || "ул. Ижорская, 3"}>
       {address || "ул. Ижорская, 3"}
      </span>
     </h2>
    </div>
   </div>

   {/* Items List */}
   <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
    {cart.length === 0 ? (
     <div className="h-full flex flex-col items-center justify-center text-center px-6">
      <div className="w-24 h-24 mb-6 rounded-full bg-[#EBE7E2]/50 flex items-center justify-center shadow-inner">
       <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#CF8D72]/40">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
       </svg>
      </div>
      <h3 className="text-[22px] font-black text-[#4A423D]/80 mb-3 tracking-tight">Корзина пуста</h3>
      <p className="text-[14px] text-[#8D8681] font-medium leading-[1.6] max-w-[240px]">
       Ваши будущие сладости появятся здесь. Давайте что-нибудь выберем!
      </p>
     </div>
    ) : (
     <div className="flex flex-col gap-4">
      <AnimatePresence initial={false}>
       {cart.map((item) => (
        <motion.div
         key={item.id}
         layout
         initial={{ opacity: 0, scale: 0.95, y: 10 }}
         animate={{ opacity: 1, scale: 1, y: 0 }}
         exit={{ opacity: 0, scale: 0.9, x: -50 }}
         whileTap={isMobile ? { scale: 0.98 } : {}}
         transition={{ type: "spring", stiffness: 400, damping: 25 }}
         className="relative group shrink-0"
        >
         {/* Background swipe action (Remove) */}
         {isMobile && (
          <div className="absolute top-[1px] bottom-[1px] left-[1px] right-[1px] bg-red-500 rounded-[2rem] flex items-center justify-end pr-6 shadow-inner z-0">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
           </svg>
          </div>
         )}

         {/* Foreground Draggable Card */}
         <motion.div
          drag={isMobile ? "x" : false}
          dragConstraints={{ left: -100, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(e, { offset }) => {
           if (offset.x < -60) {
            updateQuantity(item.id, -item.quantity); // Remove completely
           }
          }}
          className="bg-[#FCF5EF] border border-[#4A403A]/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[2rem] p-3 flex gap-4 overflow-hidden relative z-10 w-full items-center"
         >
          <div className="relative flex-shrink-0 w-[96px] h-[96px] rounded-[1.5rem] overflow-hidden bg-[#F5E6DA]/50 border border-[#4A403A]/5">
           {item.image && (
            <Image
             src={item.image}
             alt={item.name}
             fill
             sizes="192px"
             quality={90}
             className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
           )}
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col justify-between py-1 min-w-0 h-full">
           <div>
            <h4 className="text-[15px] font-extrabold text-[#4A423D] leading-tight mb-1 truncate">
             {item.name}
            </h4>
            <p className="text-[11px] font-bold text-[#8D8681] uppercase tracking-widest mt-1">
             {item.quantity} шт
            </p>
           </div>

           <div className="flex items-center justify-between mt-auto">
            {/* Quantity Pill */}
            <div className="flex items-center bg-[#FDF4EE] rounded-full p-0.5 border border-[#4A423D]/5">
             <button
              onClick={() => updateQuantity(item.id, -1)}
              className="w-8 h-8 flex items-center justify-center text-[18px] font-light text-[#4A423D] hover:text-[#CF8D72] transition-colors active:scale-90"
             >−</button>
             <span className="w-5 text-center text-[13px] font-extrabold text-[#4A423D]">
              {item.quantity}
             </span>
             <button
              onClick={() => updateQuantity(item.id, 1)}
              className="w-8 h-8 flex items-center justify-center text-[18px] font-light text-[#4A423D] hover:text-[#CF8D72] transition-colors active:scale-90"
             >+</button>
            </div>

            {/* Price */}
            <div className="text-right pr-2">
             <span className="block text-[16px] font-black text-[#4A423D] tracking-tighter">
              {(item.price * item.quantity).toLocaleString("ru-RU")} ₽
             </span>
            </div>
           </div>
          </div>
         </motion.div>
        </motion.div>
       ))}
      </AnimatePresence>
     </div>
    )}
   </div>

   {/* Checkout Footer */}
   {
    cart.length > 0 && (
     <div className="mt-6 space-y-5 shrink-0">
      <div className="flex items-end justify-between px-2">
       <span className="text-[14px] font-[900] text-[#8D8681] uppercase tracking-[0.2em] pb-1">итого</span>
       <span className="text-[28px] font-black text-[#4A423D] tracking-tight leading-none">{total.toLocaleString("ru-RU")} ₽</span>
      </div>

      <motion.button
       whileHover={{ scale: 1.02 }}
       whileTap={{ scale: 0.98 }}
       onClick={() => {
        setCheckoutOpen(true)
        if (onClose) onClose()
       }}
       className="w-full bg-[#CF8D72] rounded-[1.5rem] px-8 h-[72px] flex items-center justify-between text-white shadow-[0_8px_30px_rgb(207,141,114,0.4)] group relative overflow-hidden"
      >
       {/* Button shimmer effect */}
       <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ translateX: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 1 }}
       />
       <span className="text-[20px] font-extrabold relative z-10 drop-shadow-sm">Оформить</span>
       <div className="flex items-center gap-2 relative z-10">
        <div className="w-[1px] h-8 bg-[#FDF8ED]/30 mx-2" />
        <motion.svg
         width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
         animate={{ x: [0, 5, 0] }}
         transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
         <path d="M5 12h14m-7-7 7 7-7 7" />
        </motion.svg>
       </div>
      </motion.button>
     </div>
    )
   }
  </div >
 )
}

export default CartSidebar
