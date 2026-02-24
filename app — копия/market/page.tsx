"use client"

import React, { useState } from "react"
import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"
import CartSidebar from "@/components/CartSidebar"
import FiltersSidebar from "@/components/FiltersSidebar"
import PromoBanners from "@/components/PromoBanners"
import {
 Sparkles,
 Leaf,
 Star,
 Cookie,
 CakeSlice,
 Croissant,
 RotateCcw,
 Search,
 Truck
} from "lucide-react"
import { products } from "@/components/data"



export interface CartItem {
 id: number
 name: string
 image: string
 price: number
 oldPrice?: number
 quantity: number
}

const CATEGORIES = [
 "постное меню",
 "23 февраля",
 "новинки",
 "эклеры",
 "пирожные",
 "торты",
 "хлеб",
 "слойка",
 "кексы и печенье",
 "случайный выбор",
]

export default function Home() {
 const [cart, setCart] = useState<CartItem[]>([])
 const [activeCategory, setActiveCategory] = useState("новинки")
 const [onlyDelivery, setOnlyDelivery] = useState(false)

 const addToCart = (product: typeof products[0]) => {
  setCart((prev) => {
   const found = prev.find((i) => i.id === product.id)
   if (found) return prev.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i))
   return [
    ...prev,
    {
     id: product.id,
     name: product.name,
     image: product.image ?? "",
     price: product.price,
     oldPrice: product.oldPrice,
     quantity: 1,
    },
   ]
  })
 }

 const updateQty = (id: number, delta: number) => {
  setCart((prev) =>
   prev
    .map((i) => (i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i))
    .filter((i) => i.quantity > 0)
  )
 }

 const total = cart.reduce((s, i) => s + i.price * i.quantity, 0)

 return (
  <div className="min-h-screen bg-white font-manrope selection:bg-meren-black/10 selection:text-meren-black">
   <Header />

   <main className="mx-auto w-full max-w-[2400px] px-8 py-6">

    {/* ── Promo stories section ── */}
    <PromoBanners />

    {/* ── Category Chips & Controls (Sticky) ── */}
    <div className="sticky top-20 z-20 flex flex-col gap-4 bg-white/95 pb-4 pt-2 backdrop-blur-md border-b border-black/[0.03] mb-8">
     <div className="flex items-center justify-between gap-6">

      {/* Horizontal Category Scroll */}
      <div className="smooth-scroll flex h-16 flex-1 items-center gap-2 overflow-x-auto">
       {CATEGORIES.map((cat) => (
        <button
         key={cat}
         onClick={() => setActiveCategory(cat)}
         className={`flex items-center px-8 h-12 rounded-full transition-all duration-500 ease-premium whitespace-nowrap ${activeCategory === cat
          ? "bg-meren-black text-white shadow-wow scale-105"
          : "bg-meren-light-gray text-meren-black/60 hover:bg-[#EBEBF0] hover:text-meren-black"
          }`}
        >
         <span className="text-[15px] font-[1000] tracking-tight lowercase">
          {cat}
         </span>
        </button>
       ))}
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-3 pr-4">
       <div className="hidden md:flex h-12 items-center gap-4 rounded-full bg-[#F5F5F7] px-6 border border-black/5 hover:bg-[#EBEBF0] transition-all cursor-pointer group shadow-sm">
        <Truck className="w-5 h-5 text-meren-black/40 group-hover:text-meren-black transition-colors" />
        <span className="text-[12px] font-black uppercase text-meren-black/60 group-hover:text-meren-black tracking-widest">Только доставка</span>
        <button
         onClick={() => setOnlyDelivery(!onlyDelivery)}
         className={`relative h-6 w-11 shrink-0 rounded-full transition-all duration-700 cursor-pointer border-none shadow-inner ${onlyDelivery ? "bg-meren-black" : "bg-black/10"
          }`}
        >
         <div
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-md transition-all duration-700 ease-premium ${onlyDelivery ? "left-[22px]" : "left-1"
           }`}
         />
        </button>
       </div>
      </div>
     </div>
    </div>

    {/* ═══ 3-COLUMN LAYOUT ═══ */}
    <div className="flex gap-10 items-start">

     {/* ── Left Sidebar (Filters) ── */}
     <aside className="hidden xl:block sticky top-32 w-[300px] shrink-0 h-[calc(100vh-160px)] pr-8">
      <FiltersSidebar
       categories={CATEGORIES}
       activeCategory={activeCategory}
       onCategorySelect={setActiveCategory}
       onlyDelivery={onlyDelivery}
       onDeliveryToggle={() => setOnlyDelivery(!onlyDelivery)}
      />
     </aside>

     {/* ── Main Product Grid (Center) ── */}
     <section className="flex-1 min-w-0">
      <div className="mb-8 flex items-baseline gap-4 px-4 anim-slide-up">
       <h1 className="text-[48px] font-[1000] tracking-[-0.07em] text-meren-black lowercase leading-none">
        {activeCategory}
       </h1>
       <div className="flex items-center gap-2 text-[13px] font-black text-[#AEAEB2] uppercase tracking-widest whitespace-nowrap">
        <div className="h-1.5 w-1.5 rounded-full bg-meren-black/10" />
        {products.length} позиций
       </div>
      </div>

      {/* Premium Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4">
       {products
        .filter(p => activeCategory === "случайный выбор" || p.category.toLowerCase() === activeCategory.toLowerCase())
        .map((p) => (
         <ProductCard key={p.id} {...p} onAdd={() => addToCart(p)} />
        ))}

       {/* Explorer Tile */}
       <button className="flex min-h-[120px] items-center justify-center rounded-[1.75rem] bg-[#F5F5F7] border-2 border-dashed border-black/[0.05] transition-all duration-500 hover:bg-[#EBEBF0] hover:border-black/10 cursor-pointer group shadow-subtle">
        <div className="flex flex-col items-center gap-3">
         <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
          <Sparkles className="w-6 h-6 text-meren-black" strokeWidth={2.5} />
         </div>
         <span className="text-[11px] font-black text-[#AEAEB2] uppercase tracking-[0.2em] group-hover:text-meren-black transition-colors">Смотреть всё</span>
        </div>
       </button>
      </div>
     </section>

     {/* ── Right Sidebar (Cart) ── */}
     <aside className="hidden lg:block sticky top-32 w-[400px] shrink-0 h-[calc(100vh-160px)] pl-8">
      <CartSidebar cart={cart} onUpdateQuantity={updateQty} total={total} />
     </aside>

    </div>
   </main>
  </div>
 )
}
