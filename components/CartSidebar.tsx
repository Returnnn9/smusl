"use client"

import React from "react"
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
    <div className={`flex flex-col ${isMobile ? "h-full" : "h-[calc(100vh-8rem)]"} ${!isMobile ? "bg-[#F6EDE4] rounded-[2.5rem] shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6 lg:p-8" : ""} font-montserrat overflow-hidden`}>

      {/* Header Area */}
      <div className={`flex flex-col min-w-0 w-full shrink-0 ${isMobile ? "mb-6 pt-2" : "mb-8"} px-1 pl-4 sm:pl-5`}>
        <span className="text-[10.5px] font-[900] text-[#CA8A70]/90 uppercase tracking-[0.15em] mb-1.5">
          Ваша корзина
        </span>
        <div className="flex items-start min-w-0 relative">
          <span className="w-[7px] h-[7px] rounded-full bg-[#CA8A70] opacity-70 absolute left-[-15px] sm:left-[-18px] top-[7px]" />
          <h2 className="font-[800] text-[#3A332E] leading-[1.25] text-[16px] sm:text-[18px] whitespace-normal block pr-2">
            {address || "Адрес не выбран"}
          </h2>
        </div>
      </div>

      {/* Items List */}
      <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-full flex flex-col items-center justify-center text-center px-6"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-20 h-20 mb-6 rounded-[2rem] bg-white flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.03)]"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CA8A70]/40">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </motion.div>
            <h3 className="text-[20px] font-[900] text-[#3A332E] mb-3 tracking-tight">Корзина пуста</h3>
            <p className="text-[14px] text-[#A19C98] font-[700] leading-[1.6] max-w-[240px]">
              Самое время добавить в неё что-нибудь вкусное
            </p>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="popLayout">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout="position"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9, transition: { duration: 0.2 } }}
                  whileTap={isMobile ? { scale: 0.98 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 25, delay: index * 0.05 }}
                  className="relative group shrink-0"
                >
                  {isMobile && (
                    <div className="absolute top-[1px] bottom-[1px] left-[1px] right-[1px] bg-red-500 rounded-[2.5rem] flex items-center justify-end pr-8 shadow-inner z-0 overflow-hidden">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center gap-1"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                        <span className="text-[10px] font-[900] text-white uppercase tracking-widest">Удалить</span>
                      </motion.div>
                    </div>
                  )}

                  <motion.div
                    drag={isMobile ? "x" : false}
                    dragConstraints={{ left: -110, right: 0 }}
                    dragElastic={0.05}
                    onDragEnd={(e, { offset }) => {
                      if (offset.x < -70) {
                        updateQuantity(item.id, -item.quantity);
                      }
                    }}
                    className="bg-[#FCFBFA] shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-[2.5rem] p-4 flex gap-5 overflow-hidden relative z-10 w-full items-center active:bg-[#FAF8F5] transition-all duration-300"
                  >
                    <div className="relative flex-shrink-0 w-[85px] h-[85px] rounded-[1.8rem] overflow-hidden bg-[#F2F2F2]/30">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="200px"
                          quality={90}
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between py-1.5 min-w-0 h-full">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-[15.5px] font-[800] text-[#3A332E] leading-[1.3] line-clamp-2 flex-1 tracking-tight">
                          {item.name}
                        </h4>
                        <motion.span
                          key={item.quantity}
                          initial={{ scale: 0.95, opacity: 0.8 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="text-[16px] font-[800] text-[#3A332E] tracking-tight shrink-0 pt-0.5"
                        >
                          {(item.price * item.quantity).toLocaleString("ru-RU")} ₽
                        </motion.span>
                      </div>

                      <div className="flex items-center justify-start mt-auto pt-2">
                        {/* Quantity Pill */}
                        <div className="flex items-center gap-4 bg-white rounded-full px-3.5 py-1 box-border shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-[#F2EEE9]/60">
                          <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); updateQuantity(item.id, -1) }}
                            className="w-5 h-5 flex items-center justify-center text-[18px] font-[400] text-[#A19C98] hover:text-[#CA8A70] transition-colors active:scale-90"
                          >−</button>
                          <span className="min-w-[14px] text-center text-[15px] font-[900] text-[#3A332E]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); updateQuantity(item.id, 1) }}
                            className="w-5 h-5 flex items-center justify-center text-[18px] font-[400] text-[#3A332E] hover:text-[#CA8A70] transition-colors active:scale-90"
                          >+</button>
                        </div>ition-colors active:scale-90"
                          >+</button>
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

      {cart.length > 0 && (
        <div className="mt-8 shrink-0 relative px-1 sm:px-2">
          <div className="flex justify-between items-baseline mb-6">
            <span className="text-[14px] sm:text-[15px] font-[900] text-[#A19C98] uppercase tracking-[0.2em]">итого</span>
            <motion.span
              key={total}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[32px] sm:text-[36px] font-[900] text-[#3A332E] tracking-tight leading-none"
            >
              {total.toLocaleString("ru-RU")} ₽
            </motion.span>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setCheckoutOpen(true)
              if (onClose) onClose()
            }}
            className="w-full bg-[#CA8A70] rounded-full px-8 h-[76px] flex items-center justify-between text-white shadow-[0_12px_30px_rgba(202,138,112,0.3)] hover:bg-[#bd7d64] hover:shadow-[0_15px_40px_rgba(202,138,112,0.4)] transition-all relative overflow-hidden group"
          >
            <span className="text-[22px] sm:text-[24px] font-[900] flex-1 text-left relative z-10 tracking-wide">Оформить</span>
            <div className="flex items-center gap-5 relative z-10 shrink-0">
              <div className="w-[1.5px] h-[34px] bg-white/30 rounded-full" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
            {/* Gloss effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.button>
          
          <p className="mt-5 text-[10.5px] font-[600] text-[#A19C98] leading-[1.6] text-center px-4">
            Нажимая «Оформить», вы принимаете условия{" "}
            <a href="/offer" className="text-[#CA8A70] hover:text-[#bd7d64] transition-colors border-b border-[#CA8A70]/30 hover:border-[#bd7d64]">оферты</a>
            {" "}и{" "}
            <a href="/privacy" className="text-[#CA8A70] hover:text-[#bd7d64] transition-colors border-b border-[#CA8A70]/30 hover:border-[#bd7d64]">политики конфиденциальности</a>
          </p>
        </div>
      )}
    </div>
  )
}

export default CartSidebar
