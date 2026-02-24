"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Header from "@/components/Header"
import { ArrowRight, Sparkles, MapPin, Star, Play, Instagram, Globe, Zap, Coffee, Clock, ShieldCheck, ChevronRight } from "lucide-react"

export default function LandingPage() {
 const [scrollY, setScrollY] = useState(0)
 const [activeCategory, setActiveCategory] = useState("all")

 useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY)
  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
 }, [])

 return (
  <div className="min-h-screen bg-[#F9F8F5] font-manrope selection:bg-meren-black selection:text-white overflow-x-hidden relative">
   <div className="noise-overlay" />

   {/* Adaptive Mesh Background */}
   <div className="fixed inset-0 z-0 mesh-gradient opacity-10 pointer-events-none" />

   <Header />

   <main className="relative z-10">
    {/* ── HERO 2026: KINETIC GALLERY ── */}
    <section className="relative h-[110vh] flex flex-col items-center justify-center text-center px-8 overflow-hidden">
     <div
      className="anim-slide-up space-y-8"
      style={{ transform: `translateY(${scrollY * 0.2}px)` }}
     >
      <div className="flex items-center justify-center gap-6 mb-12">
       <div className="flex -space-x-4">
        {[1, 2, 3].map(i => (
         <div key={i} className="h-12 w-12 rounded-full border-4 border-[#F9F8F5] bg-meren-black overflow-hidden shadow-sm">
          <img src={`https://images.unsplash.com/photo-${1550000000000 + i}?w=50&q=80`} className="w-full h-full object-cover" alt="" />
         </div>
        ))}
       </div>
       <span className="text-[12px] font-black uppercase tracking-[0.6em] text-meren-black">Collective Art — 2026</span>
      </div>

      <h1 className="text-[18vw] leading-[0.65] tracking-[-0.12em] mb-12 kinetic-text">
       смысл<br />есть.
      </h1>

      <p className="max-w-[900px] mx-auto text-[32px] font-[1000] tracking-[-0.06em] leading-[0.95] text-meren-black mb-16 px-4">
       Будущее ремесла. Мы объединяем цифровой минимализм<br />и тепло человеческих рук в каждом изделии.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
       <Link href="/market">
        <button className="group relative h-24 px-16 rounded-full bg-meren-black text-white text-[22px] font-[1000] tracking-tight transition-all duration-700 hover:scale-[1.05] hover:shadow-wow active:scale-95 flex items-center gap-4 overflow-hidden border-none cursor-pointer shadow-bold">
         <Zap className="w-6 h-6 text-[#FFEC00]" fill="currentColor" />
         <span>В каталог</span>
         <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" strokeWidth={3} />
        </button>
       </Link>
      </div>
     </div>

     {/* Spatial Floating Masks */}
     <div
      className="absolute left-[-5vw] top-[20vh] w-[30vw] aspect-square glass-2026 mask-meren-organic overflow-hidden rotate-[-12deg] transition-all duration-1000 hover:rotate-0 hover:scale-110 group"
      style={{ transform: `translateY(${scrollY * -0.1}px) rotate(-12deg)` }}
     >
      <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80" className="w-full h-full object-cover grayscale opacity-50 mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="" />
     </div>
     <div
      className="absolute right-[-8vw] bottom-[15vh] w-[35vw] aspect-[4/3] glass-2026 mask-meren-pill overflow-hidden rotate-[8deg] transition-all duration-1000 hover:rotate-0 hover:scale-110 group"
      style={{ transform: `translateY(${scrollY * -0.15}px) rotate(8deg)` }}
     >
      <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80" className="w-full h-full object-cover grayscale opacity-50 mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="" />
     </div>
    </section>

    {/* ── SECTION 2: SMART MENU (Drinkit Style) ── */}
    <section className="bg-white py-40 border-y border-black/[0.04]">
     <div className="px-8 max-w-[1800px] mx-auto">
      <div className="flex items-center justify-between gap-12 mb-20 anim-slide-up">
       <div>
        <span className="text-[12px] font-black uppercase tracking-[0.4em] text-meren-gray mb-4 block">Quick Order</span>
        <h2 className="text-[80px] leading-[0.7] tracking-[-0.08em] mb-4">цифровое меню.</h2>
        <p className="text-[18px] font-bold text-meren-gray max-w-[500px]">Выбирайте любимые десерты и забирайте через 15 минут в любой точке.</p>
       </div>
       <div className="hidden lg:flex items-center gap-8 bg-[#F5F5F7] p-8 rounded-[3rem] border border-black/[0.03]">
        <div className="flex items-center gap-4">
         <div className="h-12 w-12 rounded-full bg-meren-black flex items-center justify-center text-white">
          <Clock className="w-6 h-6" />
         </div>
         <div className="flex flex-col">
          <span className="text-[14px] font-[1000] leading-none mb-1">15 мин</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-meren-gray">ожидание</span>
         </div>
        </div>
        <div className="w-px h-10 bg-meren-black/5" />
        <div className="flex items-center gap-4">
         <div className="h-12 w-12 rounded-full bg-[#FFEC00] flex items-center justify-center text-black">
          <ShieldCheck className="w-6 h-6" />
         </div>
         <div className="flex flex-col">
          <span className="text-[14px] font-[1000] leading-none mb-1">Без очереди</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-meren-gray">умная выдача</span>
         </div>
        </div>
       </div>
      </div>

      {/* Category Navigator */}
      <div className="flex gap-4 overflow-x-auto pb-12 smooth-scroll anim-slide-up stagger-1">
       {["all", "bakery", "pastry", "coffee", "sandwiches", "merch"].map((cat) => (
        <button
         key={cat}
         onClick={() => setActiveCategory(cat)}
         className={`chip-nav ${activeCategory === cat ? 'bg-meren-black text-white border-meren-black' : 'hover:bg-[#F5F5F7]'}`}
        >
         {cat === "all" ? "Все позиции" : cat === "bakery" ? "Выпечка" : cat === "pastry" ? "Десерты" : cat === "coffee" ? "Напитки" : cat === "sandwiches" ? "Завтраки" : "Мерч"}
        </button>
       ))}
      </div>

      {/* Smart Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 anim-slide-up stagger-2">
       {[
        { id: 101, name: "Круассан классический", price: 290, img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80" },
        { id: 102, name: "Капучино XL", price: 350, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80" },
        { id: 103, name: "Эклер ваниль", price: 420, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80" },
        { id: 104, name: "Тартин пшеничный", price: 580, img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80" }
       ].map((item) => (
        <div
         key={item.id}
         className="bg-[#F5F5F7] p-8 rounded-[2.5rem] border border-black/5 hover:bg-white hover:shadow-wow hover:scale-[1.02] transition-all duration-500 group cursor-pointer flex flex-col justify-between aspect-[4/5] overflow-hidden"
        >
         <div className="flex justify-between items-start mb-6">
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm">
           <Zap className="w-5 h-5 text-meren-black" />
          </div>
          <button className="h-12 px-6 rounded-full bg-meren-black text-white text-[13px] font-[1000] active:scale-95 shadow-lg border-none">
           Добавить
          </button>
         </div>
         <div className="space-y-4">
          <div className="h-40 w-full rounded-2xl overflow-hidden bg-white/50 mb-6">
           <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
          </div>
          <h3 className="text-[28px] leading-[1.1] tracking-tighter mb-2">{item.name}</h3>
          <div className="flex items-baseline gap-1">
           <span className="text-[22px] font-[1000]">{item.price}</span>
           <span className="text-[14px] font-black opacity-20">₽</span>
          </div>
         </div>
        </div>
       ))}
      </div>

      <div className="mt-20 flex justify-center anim-slide-up stagger-3">
       <Link href="/market">
        <button className="button-drinkit flex items-center gap-4 group">
         <span>Открыть всё меню</span>
         <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
       </Link>
      </div>
     </div>
    </section>

    {/* ── SPATIAL STORYTELLING (Keeping 2026 Style) ── */}
    <section className="px-8 py-60 max-w-[2000px] mx-auto space-y-80 relative">
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
      <div className="lg:col-span-6 group relative">
       <div className="absolute inset-0 bg-[#FFEC00] blur-[150px] opacity-10 group-hover:opacity-20 transition-opacity" />
       <div className="aspect-square glass-2026 mask-meren-organic p-4 transition-all duration-1000 group-hover:rotate-1 group-hover:scale-[1.02]">
        <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80" className="w-full h-full object-cover mask-meren-organic grayscale group-hover:grayscale-0 transition-all duration-1000" alt="" />
       </div>
      </div>
      <div className="lg:col-span-6 space-y-12">
       <div>
        <span className="text-[14px] font-black uppercase tracking-[0.8em] text-meren-gray mb-10 block">System — 2026</span>
        <h2 className="text-[10vw] leading-[0.7] mb-12 tracking-[-0.1em]">эфирный<br />опыт.</h2>
        <p className="text-[28px] font-[1000] text-meren-gray tracking-tighter leading-[1.1] max-w-[600px]">
         Метаморфозы вкуса в цифровой среде. Мы создаем не просто еду, а пространственный опыт для ваших органов чувств.
        </p>
       </div>
       <button className="h-24 px-16 rounded-full glass-2026 text-meren-black text-[18px] font-[1000] border-none hover:bg-white hover:shadow-wow transition-all cursor-pointer">
        Explore Philosophy
       </button>
      </div>
     </div>
    </section>

    {/* ── DRINKIT: COFFEE FOUNDATION ── */}
    <section className="px-8 py-20 max-w-[1800px] mx-auto overflow-hidden">
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div className="lg:col-span-8 anim-slide-up">
       <div className="rounded-drinkit overflow-hidden aspect-[16/10] bg-zinc-100 shadow-wow">
        <img
         src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80"
         className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
         alt="Specialty Coffee"
        />
       </div>
      </div>
      <div className="lg:col-span-4 bg-drinkit-sky rounded-drinkit p-16 flex flex-col justify-center anim-slide-up stagger-1">
       <h2 className="text-[56px] leading-[1.05] tracking-[-0.05em] text-meren-black mb-12 lowercase">
        high-quality coffee is the foundation of our menu
       </h2>
       <p className="text-[18px] font-medium text-meren-black opacity-60 leading-relaxed text-balance">
        We use manual espresso machines and work with top roasters to craft a vibrant espresso blend — the perfect base for both black and milk-based drinks
       </p>
      </div>
     </div>
    </section>

    {/* ── DRINKIT: TECH-FORWARD STORY ── */}
    <section className="px-8 py-40 max-w-[1800px] mx-auto overflow-hidden">
     <div className="text-center mb-24 anim-slide-up">
      <h2 className="text-[120px] leading-[0.8] tracking-[-0.08em] mb-12 lowercase">
       <span className="text-drinkit-blue">waits for you</span>, not the<br />other way around
      </h2>
     </div>

     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-7 anim-slide-up stagger-1">
       <div className="rounded-drinkit overflow-hidden aspect-[16/11] bg-zine-200 shadow-wow relative group">
        <img
         src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80"
         className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
         alt="Smart Pickup"
        />
        <div className="absolute inset-0 bg-meren-black/10 group-hover:bg-transparent transition-colors duration-700" />
       </div>
      </div>

      <div className="lg:col-span-5 space-y-16 py-12">
       <div className="space-y-8 anim-slide-up stagger-2">
        <p className="text-[24px] font-[1000] text-meren-black leading-[1.1] tracking-tight">
         We reimagined what a coffee shop could be: no cashier, self-service terminals, and a smart pickup counter.
        </p>
        <p className="text-[24px] font-[1000] text-meren-black/40 leading-[1.1] tracking-tight">
         This design removes the barrier between guests and baristas, making the space feel both cozy and tech-forward
        </p>
       </div>

       <div className="grid grid-cols-3 gap-6 anim-slide-up stagger-3">
        {[1, 2, 3].map(i => (
         <div key={i} className="aspect-[9/16] rounded-3xl bg-meren-black overflow-hidden shadow-bold p-1 border border-white/10 group">
          <img
           src={`https://images.unsplash.com/photo-1550000000000?w=400&q=80`}
           className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
           alt="App Interface"
          />
         </div>
        ))}
       </div>
      </div>
     </div>
    </section>

    {/* ── CHROME FOOTER ── */}
    <footer className="px-8 py-40 flex flex-col items-center gap-20 relative overflow-hidden">
     <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
     <div className="text-[12vw] font-[1000] tracking-[-0.15em] text-meren-black hover:tracking-[-0.1em] transition-all duration-1000 select-none cursor-default">смысл есть.</div>

     <div className="flex flex-wrap justify-center gap-16 text-[14px] font-black uppercase tracking-[0.4em] text-black/40">
      <span className="hover:text-meren-black cursor-pointer transition-all hover:tracking-[0.6em]">Universe</span>
      <span className="hover:text-meren-black cursor-pointer transition-all hover:tracking-[0.6em]">Experience</span>
      <span className="hover:text-meren-black cursor-pointer transition-all hover:tracking-[0.6em]">Contact</span>
     </div>

     <div className="flex items-center gap-4 text-[12px] font-bold text-black/20">
      <span>SMYSL — 2026 DIGITAL COLLECTIVE</span>
      <div className="w-1 h-1 rounded-full bg-black/10" />
      <span>MOSCOW</span>
     </div>
    </footer>
   </main>
  </div>
 )
}
