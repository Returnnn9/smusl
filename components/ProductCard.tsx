"use client";
import React from "react";
import { Plus, Image as ImageIcon } from "lucide-react";

interface Props {
 id: number;
 name: string;
 weight: string;
 price: number;
 oldPrice?: number;
 discount?: string;
 image?: string;
 onAdd: () => void;
}

const ProductCard: React.FC<Props> = ({ name, weight, price, oldPrice, discount, image, onAdd }) => (
 <div
  onClick={onAdd}
  className="group relative flex flex-col bg-white p-4 transition-all duration-500 ease-premium cursor-pointer rounded-[1.75rem] hover:shadow-wow-hover shadow-subtle border border-black/[0.04] min-h-[120px] justify-between overflow-hidden"
 >
  {/* ── Status Label ── */}
  {discount && (
   <div className="absolute top-3 right-3 z-20 flex items-center gap-1 rounded-full bg-meren-black text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider shadow-sm">
    {discount}
   </div>
  )}

  {/* ── Minimalist Info ── */}
  <div className="flex flex-col font-manrope pr-6 mb-2">
   <p className="text-[14px] font-[1000] leading-[1.2] text-meren-black tracking-[-0.03em] mb-1 line-clamp-2 min-h-[2.4em]">
    {name}
   </p>
   <div className="flex items-center gap-1.5">
    <span className="text-[10px] font-black text-meren-gray/40 uppercase tracking-widest leading-none">
     {weight}
    </span>
   </div>
  </div>

  <div className="flex items-end justify-between mt-auto">
   <div className="flex flex-col">
    {oldPrice && (
     <p className="text-[11px] font-black text-meren-gray/30 line-through leading-none mb-1">
      {oldPrice} ₽
     </p>
    )}
    <div className="flex items-baseline gap-0.5">
     <p className="text-[17px] font-[1000] text-meren-black tracking-tighter leading-none">
      {price}
     </p>
     <span className="text-[12px] font-black text-meren-black/20 uppercase leading-none">₽</span>
    </div>
   </div>

   <button
    onClick={(e) => { e.stopPropagation(); onAdd(); }}
    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F7] text-meren-black transition-all duration-500 hover:bg-meren-black hover:text-white hover:scale-110 active:scale-95 shadow-sm border-none group-hover:bg-meren-black group-hover:text-white"
   >
    <Plus className="w-5 h-5" strokeWidth={3} />
   </button>
  </div>
 </div>
);

export default ProductCard;
