"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, Truck, User } from "lucide-react";

const Header: React.FC = () => {
 const [searchFocused, setSearchFocused] = useState(false);

 return (
  <div className="sticky top-0 z-50 flex flex-col">
   <header className="bg-white/80 backdrop-blur-xl flex h-20 items-center justify-between gap-8 px-8 lg:px-12 border-b border-black/[0.04]">

    {/* ── Journal-Style Logo ── */}
    <Link href="/" className="flex shrink-0 cursor-pointer flex-col select-none group transition-all duration-700 hover:scale-[1.02] active:scale-95 px-2 leading-none no-underline border-none bg-transparent">
     <span className="text-journal text-[42px] text-meren-black tracking-[-0.1em] group-hover:tracking-[-0.08em] transition-all duration-700">
      смысл есть
     </span>
    </Link>

    {/* ── Master Polished Search ── */}
    <div className="flex-1 max-w-[700px] flex items-center bg-[#F5F5F7] rounded-2xl px-6 py-3.5 transition-all duration-500 border-2 border-transparent focus-within:border-meren-black focus-within:bg-white focus-within:shadow-wow group/search">
     <Search className="w-5 h-5 text-meren-black/20 group-focus-within/search:text-meren-black transition-colors" strokeWidth={3} />
     <input
      type="text"
      placeholder="найти свежее..."
      onFocus={() => setSearchFocused(true)}
      onBlur={() => setSearchFocused(false)}
      className="w-full bg-transparent text-[16px] font-[1000] text-meren-black outline-none placeholder:text-meren-black/20 tracking-tight lowercase ml-3"
     />
    </div>

    {/* ── Action Badges ── */}
    <div className="flex items-center gap-3">
     <div className="hidden md:flex h-11 items-center px-6 rounded-full bg-meren-black text-white cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-bold shadow-black/10">
      <span className="text-[13px] font-[1000] lowercase tracking-tight">акад. янгеля</span>
     </div>

     <div className="hidden lg:flex h-11 items-center px-6 rounded-full border border-black/[0.06] bg-white text-meren-black cursor-pointer transition-all hover:bg-[#F5F5F7] active:scale-95 shadow-sm">
      <span className="text-[13px] font-[1000] lowercase tracking-tight">⚡ 15 мин</span>
     </div>

     <button className="h-11 w-11 shrink-0 flex items-center justify-center rounded-full border border-black/[0.06] bg-[#F5F5F7] text-meren-black transition-all hover:bg-meren-black hover:text-white hover:scale-110 active:scale-90 cursor-pointer shadow-sm">
      <User className="w-5 h-5" strokeWidth={3} />
     </button>
    </div>

   </header>
  </div>
 );
};

export default Header;
