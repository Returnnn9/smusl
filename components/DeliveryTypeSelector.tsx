"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface DeliveryTypeSelectorProps {
 onSelect: (type: "delivery" | "pickup") => void
}

export default function DeliveryTypeSelector({ onSelect }: DeliveryTypeSelectorProps) {
 return (
  <div className="space-y-4">
   <button
    onClick={() => onSelect("delivery")}
    className="w-full h-[72px] px-6 rounded-[1.2rem] border border-gray-200 hover:border-[#CF8F73] bg-[#F8F8F8] hover:bg-white transition-all flex items-center justify-between group"
   >
    <span className="text-[17px] font-extrabold text-[#3A332E]">Доставка на дом</span>
    <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-[#CF8F73] transition-colors">
     <div className="w-3 h-3 rounded-full bg-[#CF8F73]/0 group-hover:bg-[#CF8F73] scale-0 group-hover:scale-100 transition-all duration-300" />
    </div>
   </button>

   <button
    onClick={() => onSelect("pickup")}
    className="w-full h-[72px] px-6 rounded-[1.2rem] border border-gray-200 hover:border-[#CF8F73] bg-[#F8F8F8] hover:bg-white transition-all flex items-center justify-between group"
   >
    <span className="text-[17px] font-extrabold text-[#3A332E]">Самовывоз</span>
    <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-[#CF8F73] transition-colors">
     <div className="w-3 h-3 rounded-full bg-[#CF8F73]/0 group-hover:bg-[#CF8F73] scale-0 group-hover:scale-100 transition-all duration-300" />
    </div>
   </button>
  </div>
 )
}
