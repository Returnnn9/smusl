"use client"
import React from "react"
import { CartItem } from "@/app/page"
import {
 ShoppingBag,
 Truck,
 Info,
 Minus,
 Plus,
 CreditCard,
 ArrowRight
} from "lucide-react"

interface Props {
 cart: CartItem[]
 onUpdateQuantity: (id: number, delta: number) => void
 total: number
}

const CartSidebar: React.FC<Props> = ({ cart, onUpdateQuantity, total }) => {
 return (
  <div className="flex flex-col h-full bg-white rounded-[2.5rem] border border-black/[0.03] font-manrope shadow-subtle hover:shadow-wow transition-all duration-500 ease-premium selection:bg-black/5 overflow-hidden">

   {/* ── Reference Header ── */}
   <div className="p-8 pb-4 flex items-center justify-between">
    <div className="flex items-center gap-2">
     <span className="text-[20px] font-[1000] tracking-tight text-meren-black">35–70 мин, 0–219 ₽</span>
     <button className="h-5 w-5 rounded-full border border-black/[0.08] flex items-center justify-center text-black/20 hover:bg-[#F5F5F7] transition-colors cursor-help">
      <Info className="w-3 h-3" strokeWidth={3} />
     </button>
    </div>
   </div>

   {/* ── Body ── */}
   <div className="flex-1 overflow-y-auto px-8 py-4 smooth-scroll flex flex-col">
    {cart.length === 0 ? (
     <div className="flex-1 flex flex-col items-center justify-center anim-slide-up">
      {/* ── Reference Sad Bag Illustration ── */}
      <div className="mb-8 relative scale-110">
       <svg width="112" height="128" viewBox="0 0 112 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bag Body with 3D Side Fold */}
        <path d="M36 42 L80 42 L76 112 L40 112 Z" fill="#F0F0F2" />
        <path d="M30 42 L36 42 L40 112 L34 112 Z" fill="#E5E5E7" />

        {/* Top Zigzag Edge (More precise) */}
        <path
         d="M30 42 L32.5 38 L35 42 L37.5 38 L40 42 L42.5 38 L45 42 L47.5 38 L50 42 L52.5 38 L55 42 L57.5 38 L60 42 L62.5 38 L65 42 L67.5 38 L70 42 L72.5 38 L75 42 L77.5 38 L80 42"
         fill="#F0F0F2"
        />

        {/* Side Fold Top Zigzag */}
        <path
         d="M30 42 L31.5 38 L33 42 L34.5 38 L36 42"
         fill="#E5E5E7"
        />

        {/* x x eyes (precise placement) */}
        <g stroke="#8E8E93" strokeWidth="2.5" strokeLinecap="round">
         <path d="M48 64 L54 70" />
         <path d="M54 64 L48 70" />
         <path d="M62 64 L68 70" />
         <path d="M68 64 L62 70" />
        </g>

        {/* flat mouth */}
        <path d="M54 84 H62" stroke="#8E8E93" strokeWidth="3" strokeLinecap="round" />
       </svg>
      </div>
      <div className="text-center">
       <p className="text-[17px] font-[1000] text-meren-black tracking-tight mb-1">
        В корзине пока ничего нет.
       </p>
       <p className="text-[15px] font-bold text-black/40 tracking-tight leading-tight">
        Самое время наполнять её!
       </p>
      </div>
     </div>
    ) : (
     <div className="flex flex-col gap-8 pt-2">
      {cart.map((item) => (
       <div key={item.id} className="group flex items-center gap-5 anim-slide-up">
        {/* square image with rounded corners */}
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[1.4rem] bg-[#F2F2F7] p-2 transition-all duration-500 group-hover:bg-[#EBEBF0] group-hover:scale-105 border border-black/[0.02]">
         <img src={item.image} alt="" className="h-full w-full object-contain mix-blend-multiply" />
        </div>

        <div className="flex-1 min-w-0">
         <p className="text-[17px] font-[1000] tracking-[-0.02em] text-meren-black leading-tight mb-2">
          {item.name}
         </p>

         {/* Reference Quantity Pill */}
         <div className="flex w-[110px] items-center justify-between rounded-full bg-[#F2F2F7] px-3.5 py-2">
          <button
           onClick={() => onUpdateQuantity(item.id, -1)}
           className="flex h-5 w-5 items-center justify-center text-meren-black/30 hover:text-meren-black transition-all cursor-pointer border-none bg-transparent active:scale-75"
          >
           <Minus className="w-4 h-4" strokeWidth={2.5} />
          </button>
          <span className="text-[14px] font-[1000] text-meren-black tracking-tighter">
           {item.quantity}
          </span>
          <button
           onClick={() => onUpdateQuantity(item.id, 1)}
           className="flex h-5 w-5 items-center justify-center text-meren-black/30 hover:text-meren-black transition-all cursor-pointer border-none bg-transparent active:scale-75"
          >
           <Plus className="w-4 h-4" strokeWidth={2.5} />
          </button>
         </div>
        </div>

        <div className="text-right ml-4">
         <div className="flex items-baseline gap-1">
          <p className="text-[20px] font-[1000] tracking-[-0.04em] text-meren-black leading-none">
           {item.price * item.quantity}
          </p>
          <span className="text-[14px] font-[1000] text-black/20 leading-none">₽</span>
         </div>
        </div>
       </div>
      ))}
     </div>
    )}
   </div>

   {/* ── Reference Footer ── */}
   <div className="p-8 pt-4 flex items-end gap-3 bg-white">
    {/* Yellow Support Chat Button */}
    <button className="h-[52px] w-[52px] shrink-0 rounded-full bg-[#FFEC00] flex items-center justify-center shadow-lg shadow-yellow-400/20 transition-all hover:scale-110 active:scale-90 border-none cursor-pointer">
     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 11.5C21 16.1944 16.9706 20 12 20C10.7001 20 9.47525 19.7417 8.37527 19.2743L4 21L5.34024 16.8926C3.89675 15.4208 3 13.5604 3 11.5C3 6.80558 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z" fill="black" />
      <circle cx="8" cy="11.5" r="1.5" fill="white" fillOpacity="0.3" />
      <circle cx="12" cy="11.5" r="1.5" fill="white" fillOpacity="0.3" />
      <circle cx="16" cy="11.5" r="1.5" fill="white" fillOpacity="0.3" />
     </svg>
    </button>

    {cart.length > 0 ? (
     <button className="h-[52px] flex-1 rounded-[1.25rem] bg-meren-black text-[15px] font-[1000] text-white transition-all hover:scale-[1.02] active:scale-[0.98] border-none cursor-pointer shadow-bold">
      Оформить за {total} ₽
     </button>
    ) : (
     <button className="h-[52px] flex-1 rounded-[1.25rem] bg-[#F5F5F7] text-[15px] font-[1000] text-black/20 border-none cursor-default">
      Добавьте что-нибудь
     </button>
    )}
   </div>

  </div>
 )
}

export default CartSidebar
