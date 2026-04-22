"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface DeliveryTypeSelectorProps {
 onSelect: (type: "delivery" | "pickup") => void
 selectedType?: "delivery" | "pickup" | null
}

export default function DeliveryTypeSelector({ onSelect, selectedType }: DeliveryTypeSelectorProps) {
 return (
  <div className="space-y-4">
   <button
    onClick={() => onSelect("delivery")}
    className={cn(
     "w-full h-[68px] px-6 rounded-[1.4rem] border transition-all duration-300 flex items-center justify-between group",
     selectedType === "delivery" 
       ? "border-[#CA8A70] bg-white shadow-[0_0_0_4px_rgba(202,138,112,0.12)]" 
       : "border-[#F2EEE9] hover:border-[#E8E1DA] bg-[#FCFBF9] focus-within:border-[#CA8A70]"
    )}
   >
    <span className={cn("text-[17px] font-[800] transition-colors", selectedType === "delivery" ? "text-[#CA8A70]" : "text-[#3A332E]")}>Доставка на дом</span>
    <div className={cn(
     "w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-colors px-[0.1rem]",
     selectedType === "delivery" ? "border-[#CA8A70]" : "border-[#E8E1DA] group-hover:border-[#CA8A70]/50"
    )}>
     <div className={cn(
      "w-2.5 h-2.5 rounded-full bg-[#CA8A70] transition-all duration-300",
      selectedType === "delivery" ? "scale-100 opacity-100" : "scale-0 opacity-0"
     )} />
    </div>
   </button>

   <button
    onClick={() => onSelect("pickup")}
    className={cn(
     "w-full h-[68px] px-6 rounded-[1.4rem] border transition-all duration-300 flex items-center justify-between group",
     selectedType === "pickup" 
       ? "border-[#CA8A70] bg-white shadow-[0_0_0_4px_rgba(202,138,112,0.12)]" 
       : "border-[#F2EEE9] hover:border-[#E8E1DA] bg-[#FCFBF9] focus-within:border-[#CA8A70]"
    )}
   >
    <span className={cn("text-[17px] font-[800] transition-colors", selectedType === "pickup" ? "text-[#CA8A70]" : "text-[#3A332E]")}>Самовывоз</span>
    <div className={cn(
     "w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-colors px-[0.1rem]",
     selectedType === "pickup" ? "border-[#CA8A70]" : "border-[#E8E1DA] group-hover:border-[#CA8A70]/50"
    )}>
     <div className={cn(
      "w-2.5 h-2.5 rounded-full bg-[#CA8A70] transition-all duration-300",
      selectedType === "pickup" ? "scale-100 opacity-100" : "scale-0 opacity-0"
     )} />
    </div>
   </button>
  </div>
 )
}

