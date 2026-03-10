"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import { useUIStore, useUserStore, useStoreData } from "@/store/hooks"
import { X, ChevronDown, MapPin, ArrowLeft, Loader2, Edit3 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import MapPicker from "./MapPicker"
import { cn } from "@/lib/utils"
import { useAddressSearch } from "@/hooks/useAddressSearch"

type DeliveryType = "delivery" | "pickup" | null

import { PICKUP_POINTS, CITY_COORDS } from "@/lib/constants/delivery"
import DeliveryTypeSelector from "./DeliveryTypeSelector"

type PickupPoint = typeof PICKUP_POINTS[number];

const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
  opacity: 1,
  transition: {
   staggerChildren: 0.1,
   delayChildren: 0.1
  }
 }
}

const itemVariants = {
 hidden: { opacity: 0, y: 15, scale: 0.98 },
 visible: {
  opacity: 1,
  y: 0,
  scale: 1,
  transition: {
   type: "spring" as const,
   damping: 25,
   stiffness: 200
  }
 },
 exit: {
  opacity: 0,
  scale: 0.98,
  transition: { duration: 0.2 }
 }
}

export default function AddressModal() {
 const uiStore = useUIStore()
 const userStore = useUserStore()

 const isAddressModalOpen = useStoreData(uiStore, s => s.getIsAddressModalOpen())
 const address = useStoreData(userStore, s => s.getAddress())

 const setAddressModalOpen = (o: boolean) => uiStore.setAddressModalOpen(o)
 const updateAddress = (a: string, t: "delivery" | "pickup") => userStore.updateAddress(a, t)

 const [step, setStep] = useState<1 | 2 | 3>(1)
 const [deliveryType, setDeliveryType] = useState<DeliveryType>(null)
 const [tempAddress, setTempAddress] = useState(address)
 const [selectedPickup, setSelectedPickup] = useState<PickupPoint | null>(null)
 const [mapError, setMapError] = useState<string | null>(null)
 const [selectedCity, setSelectedCity] = useState<'Москва' | 'Санкт-Петербург'>('Москва')
 const [showCityDropdown, setShowCityDropdown] = useState(false)
 const [selectedCoords, setSelectedCoords] = useState<[number, number] | null>(null)

 // Mobile WOW adaptive states
 const [isEditingAddress, setIsEditingAddress] = useState(false)

 // Expanded address fields
 const [house, setHouse] = useState('')
 const [entrance, setEntrance] = useState('')
 const [floor, setFloor] = useState('')
 const [apartment, setApartment] = useState('')

 // Address search hook
 const {
  suggestions,
  setSuggestions,
  isLoading: isLoadingSuggestions,
  isLocating,
  skipNextFetch,
  fetchSuggestions,
  geolocate,
  searchTimeout
 } = useAddressSearch(selectedCity);

 useEffect(() => {
  if (skipNextFetch.current) {
   skipNextFetch.current = false
   return
  }

  if (step === 2 && deliveryType === "delivery" && tempAddress.length >= 2) {
   if (searchTimeout.current) clearTimeout(searchTimeout.current)
   searchTimeout.current = setTimeout(() => {
    fetchSuggestions(tempAddress)
   }, 400)
  } else {
   setSuggestions([])
  }
  return () => { if (searchTimeout.current) clearTimeout(searchTimeout.current) }

 }, [tempAddress, step, deliveryType, selectedCity, fetchSuggestions])

 const reset = () => {
  setStep(1)
  setDeliveryType(null)
  setTempAddress(address)
  setSelectedPickup(null)
  setMapError(null)
  setSelectedCity('Москва')
  setShowCityDropdown(false)
  setSelectedCoords(null)
  setHouse('')
  setEntrance('')
  setFloor('')
  setApartment('')
  setIsEditingAddress(false)
 }

 // Reset modal to Step 1 when it opens
 useEffect(() => {
  if (isAddressModalOpen) {
   reset() // Start at Step 1 (Способ получения)
  }
 }, [isAddressModalOpen])

 const handleGeolocate = () => {
  geolocate((addr, coords, matchedCity) => {
   if (matchedCity) setSelectedCity(matchedCity);
   setTempAddress(addr);
   setSelectedCoords(coords);
  });
 }

 const handleClose = () => {
  setAddressModalOpen(false)
  setTimeout(reset, 400)
 }

 const handleSaveDelivery = () => {
  if (tempAddress) {
   const fullAddress = [
    tempAddress,
    house && `д. ${house}`,
    entrance && `под. ${entrance}`,
    floor && `эт. ${floor}`,
    apartment && `кв. ${apartment}`
   ].filter(Boolean).join(', ')

   updateAddress(fullAddress, "delivery")
   handleClose()
  }
 }

 const handleSavePickup = () => {
  if (selectedPickup) {
   updateAddress(`${selectedPickup.city}, ${selectedPickup.address}`, "pickup")
   handleClose()
  }
 }

 // Stabilized callbacks for MapPicker
 const onAddressSelect = useCallback((val: string) => {
  skipNextFetch.current = true;
  setTempAddress(val);
 }, [skipNextFetch]);

 const onAddressDetailsSelect = useCallback((details: any) => {
  skipNextFetch.current = true;
  const road = details.road || details.full.split(',')[0];
  const house = details.house || '';
  const displayAddr = house ? `${road}, ${house}` : road;
  setTempAddress(displayAddr.replace(`${selectedCity}, `, '').replace('Москва, ', '').replace('Санкт-Петербург, ', ''));
  setHouse(house);
  if (details.coords) {
   setSelectedCoords(details.coords);
  }
 }, [selectedCity, skipNextFetch]);

 if (!isAddressModalOpen) return null

 return (
  <AnimatePresence>
   <div className="fixed inset-0 z-[100] flex items-stretch justify-end p-0 sm:p-6 overflow-hidden bg-black/50 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none">
    <motion.div
     key="backdrop"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     className="absolute inset-0 bg-transparent sm:bg-[#3A332E]/40 sm:backdrop-blur-[8px]"
     onClick={handleClose}
    />

    <motion.div
     key="modal"
     layout
     initial={{ opacity: 0, y: "100%" }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: "100%" }}
     transition={{ type: "spring" as const, damping: 32, stiffness: 280 }}
     className="relative z-10 bg-white sm:bg-white/95 sm:backdrop-blur-[20px] rounded-t-[2rem] sm:rounded-[3rem] shadow-[0_-8px_40px_rgba(0,0,0,0.12)] sm:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] overflow-hidden flex w-full max-w-[900px] h-[95vh] sm:h-full font-manrope sm:border-l sm:border-white/20 mt-auto sm:mt-0"
    >
     <button onClick={handleClose} className="absolute top-6 right-6 z-50 p-2 bg-white/50 backdrop-blur-md rounded-full text-black hover:bg-white transition-colors sm:hidden">
      <X className="w-5 h-5" />
     </button>

     <AnimatePresence mode="wait">

      {/* ───── STEP 1: Способ получения ───── */}
      {step === 1 && (
       <motion.div
        key="step1"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        className="flex flex-col sm:flex-row h-full w-full"
       >
        <div className="flex-1 p-5 sm:p-10 flex flex-col justify-center overflow-y-auto max-w-2xl mx-auto w-full">
         <div className="flex items-center justify-between mb-8">
          <h2 className="text-[22px] sm:text-[26px] font-extrabold text-smusl-brown tracking-tight">
           Способ получения
          </h2>
          <button
           onClick={handleClose}
           className="hidden sm:block p-2 text-smusl-gray hover:text-smusl-brown transition-colors"
          >
           <X className="w-6 h-6" />
          </button>
         </div>

         <div className="space-y-4">
          <DeliveryTypeSelector onSelect={(type) => {
           setDeliveryType(type);
           if (type === "delivery" && userStore.getSavedAddresses().length > 0) {
            setStep(2);
           } else {
            setStep(type === "delivery" ? 3 : 2);
           }
          }} />
         </div>
        </div>
       </motion.div>
      )}

      {/* ───── STEP 2: Saved Addresses (Delivery) ───── */}
      {step === 2 && deliveryType === "delivery" && (
       <motion.div
        key="step2-saved"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="flex flex-col h-full w-full p-6 sm:p-12"
       >
        <div className="flex items-center justify-between mb-8">
         <div className="flex items-center gap-4">
          <button onClick={() => setStep(1)} className="p-1 text-[#3A332E]">
           <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-[24px] sm:text-[28px] font-extrabold text-[#3A332E] tracking-tight">Выбрать адрес</h2>
         </div>
         <button onClick={handleClose} className="p-1 text-gray-300 hover:text-[#3A332E] transition-colors hidden sm:block">
          <X className="w-6 h-6" />
         </button>
        </div>

        <motion.div
         variants={containerVariants}
         initial="hidden"
         animate="visible"
         className="flex-1 overflow-y-auto pr-1 no-scrollbar space-y-3"
        >
         <AnimatePresence mode="popLayout">
          {userStore.getSavedAddresses().map((addr, idx) => (
           <motion.button
            key={addr}
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            layout
            onClick={() => {
             updateAddress(addr, "delivery");
             handleClose();
            }}
            className={cn(
             "w-full px-6 py-5 rounded-[1.5rem] border transition-all flex items-center justify-between group",
             address === addr ? "border-[#CF8F73] bg-[#CF8F73]/5 shadow-sm" : "border-gray-100 bg-white hover:border-gray-200"
            )}
           >
            <div className="flex flex-col items-start gap-1">
             <span className={cn(
              "text-[16px] font-[800] transition-colors text-left",
              address === addr ? "text-[#CF8F73]" : "text-[#3A332E]"
             )}>{addr}</span>
             <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Москва</span>
            </div>
            <div className={cn(
             "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shrink-0",
             address === addr ? "border-[#CF8F73] bg-[#CF8F73]" : "border-gray-200"
            )}>
             {address === addr && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
           </motion.button>
          ))}
         </AnimatePresence>
        </motion.div>

        <motion.button
         whileHover={{ scale: 1.02 }}
         whileTap={{ scale: 0.98 }}
         onClick={() => setStep(3)}
         className="mt-6 w-full h-[64px] bg-[#CF8F73] text-white rounded-[1.2rem] font-[800] text-[18px] hover:bg-[#CF8F73]/80 transition-all active:scale-95 shadow-xl shadow-[#CF8F73]/20 shrink-0"
        >
         Новый адрес
        </motion.button>
       </motion.div>
      )}

      {/* ───── STEP 3: Delivery ───── */}
      {step === 3 && deliveryType === "delivery" && (
       <motion.div
        key="step3-delivery"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="flex flex-col sm:flex-row h-full w-full relative"
       >
        <div className="absolute inset-0 sm:relative sm:inset-auto sm:w-[55%] sm:h-full p-0 sm:p-6 sm:pb-6 z-0">
         <div className="w-full h-full sm:rounded-[2rem] overflow-hidden sm:border border-gray-100 relative">
          <MapPicker
           hideSearch={true}
           showGeolocate={deliveryType === "delivery"}
           initialAddress={tempAddress}
           onAddressSelect={onAddressSelect}
           onAddressDetailsSelect={onAddressDetailsSelect}
           onError={setMapError}
           externalCoords={selectedCoords}
          />
         </div>
        </div>

        <motion.div
         initial={{ y: "10%" }}
         animate={{ y: 0 }}
         className={cn(
          "absolute bottom-0 left-0 right-0 sm:relative sm:bottom-auto flex-1 bg-white sm:bg-transparent z-10 flex flex-col rounded-t-[2rem] sm:rounded-none shadow-[0_-12px_40px_rgba(0,0,0,0.1)] sm:shadow-none overflow-hidden sm:overflow-y-auto no-scrollbar",
          isEditingAddress ? "h-[85vh] sm:h-full p-5 sm:p-10" : "p-5 pb-[env(safe-area-inset-bottom)] sm:h-full sm:p-10"
         )}
        >
         {/* Mobile Compact View */}
         <div className={cn("sm:hidden flex flex-col gap-4", isEditingAddress ? "hidden" : "flex")}>
          <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto my-1" />
          <motion.button
           whileHover={{ scale: 1.02 }}
           whileTap={{ scale: 0.98 }}
           onClick={() => setIsEditingAddress(true)}
           className="w-full p-4 bg-[#F8F8F8] rounded-[1.2rem] border border-gray-100 flex items-center justify-between shadow-sm active:scale-[0.98] transition-all cursor-text"
          >
           <div className="flex flex-col gap-1 overflow-hidden pr-4">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Куда везем?</span>
            <span className="text-[15px] font-extrabold text-[#3A332E] truncate">
             {tempAddress || "Укажите на карте..."} {house ? `, д. ${house}` : ''}
            </span>
           </div>
           <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 text-[#3A332E]">
            <Edit3 className="w-4 h-4" />
           </div>
          </motion.button>
          <button
           onClick={handleSaveDelivery}
           disabled={!tempAddress}
           className="w-full h-[64px] bg-[#CF8F73] disabled:bg-[#CF8F73]/40 text-white rounded-[1.2rem] font-[800] text-[18px] hover:bg-[#b87a60] transition-all active:scale-95 shadow-xl shadow-[#CF8F73]/20 mt-1 mb-2"
          >
           Да, всё верно
          </button>
         </div>

         {/* Expanded / Desktop View */}
         <div className={cn("flex-col h-full", isEditingAddress ? "flex" : "hidden sm:flex")}>
          <div className="flex items-center justify-between mb-5 sm:mb-8 shrink-0">
           <div className="flex items-center gap-4">
            <button
             onClick={() => {
              if (window.innerWidth < 640 && isEditingAddress) {
               setIsEditingAddress(false);
              } else {
               setStep(1);
              }
             }}
             className="p-1 text-[#3A332E] hover:text-smusl-brown transition-colors"
            >
             <ArrowLeft className="w-6 h-6" />
            </button>
            <h2 className="text-[22px] sm:text-[24px] font-[800] text-[#3A332E] tracking-tight">
             {isEditingAddress && window.innerWidth < 640 ? 'Детали адреса' : 'Введите адрес'}
            </h2>
           </div>
           <button onClick={handleClose} className="hidden sm:block p-1 text-gray-300 hover:text-[#3A332E] transition-colors">
            <X className="w-6 h-6" />
           </button>
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto no-scrollbar pb-4">
           <div className="relative z-50">
            <div
             className="bg-[#F8F8F8] rounded-[1.2rem] px-5 py-4.5 sm:py-4 cursor-pointer select-none border border-transparent hover:border-gray-200 transition-colors"
             onClick={() => setShowCityDropdown(v => !v)}
            >
             <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1">Город</span>
             <div className="flex items-center justify-between text-[#3A332E]">
              <span className="text-[17px] font-extrabold">{selectedCity}</span>
              <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", showCityDropdown && "rotate-180")} />
             </div>
            </div>
            {showCityDropdown && (
             <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-[1.2rem] shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
              {(['Москва', 'Санкт-Петербург'] as const).map(c => (
               <button
                key={c}
                onClick={() => { setSelectedCity(c); setTempAddress(''); setSuggestions([]); setSelectedCoords(null); setShowCityDropdown(false) }}
                className={cn(
                 'w-full text-left px-5 py-3.5 text-[15px] font-bold transition-colors border-b last:border-0 border-gray-50',
                 selectedCity === c ? 'text-[#3A332E] bg-gray-50' : 'text-[#3A332E] hover:bg-gray-50'
                )}
               >
                {c}
               </button>
              ))}
             </div>
            )}
           </div>

           <div className="relative z-40">
            <div className="bg-[#F8F8F8] rounded-[1.2rem] px-5 py-4.5 sm:py-4 flex flex-col justify-center border border-transparent focus-within:border-gray-300 transition-all">
             <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1">Улица и дом</span>
             <div className="flex items-center gap-2">
              <input
               type="text"
               value={tempAddress}
               onChange={(e) => setTempAddress(e.target.value)}
               placeholder="Введите адрес"
               className="w-full bg-transparent border-none outline-none text-[17px] font-extrabold text-[#3A332E] placeholder:text-[#3A332E]/30"
              />
              {isLoadingSuggestions && <Loader2 className="w-4 h-4 animate-spin text-smusl-brown flex-shrink-0" />}
              {tempAddress && !isLoadingSuggestions && (
               <button
                onClick={() => { setTempAddress(''); setSuggestions([]); setHouse(''); }}
                className="p-1 hover:bg-black/5 rounded-full transition-colors flex-shrink-0 -mr-1"
               >
                <X className="w-4 h-4 text-[#4A3F39]" />
               </button>
              )}
             </div>
            </div>
            {suggestions.length > 0 && (
             <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 bg-white rounded-[1.2rem] shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden max-h-[280px] overflow-y-auto no-scrollbar absolute w-full left-0 py-1.5 z-50"
             >
              {suggestions.map((s, idx) => {
               const title = (s.address as any)?.title || s.display_name;
               const subtitle = (s.address as any)?.subtitle || selectedCity;
               const road = (s.address as any)?.road || title;
               const houseNum = (s.address as any)?.house_number || "";

               return (
                <button
                 key={idx}
                 onClick={() => {
                  skipNextFetch.current = true;
                  const displayAddr = houseNum ? `${road}, ${houseNum}` : road;
                  setTempAddress(displayAddr);
                  setHouse(houseNum);
                  if (s.lat && s.lon) {
                   setSelectedCoords([parseFloat(s.lat), parseFloat(s.lon)]);
                  }
                  setSuggestions([]);
                 }}
                 className="w-full text-left px-5 py-3.5 flex flex-col group hover:bg-[#F8F9FA] transition-colors border-b border-gray-50 last:border-0"
                >
                 <span className="text-[15px] font-[800] text-[#333333] leading-tight group-hover:text-smusl-brown transition-colors">{title}</span>
                 <span className="text-[12px] font-[600] text-[#999999] mt-1 uppercase tracking-wider">{subtitle}</span>
                </button>
               );
              })}
             </motion.div>
            )}
           </div>

           <div className="grid grid-cols-4 gap-2 sm:gap-4">
            <div className="bg-[#F8F8F8] rounded-[1rem] px-2 sm:px-5 py-3.5 sm:py-3 flex flex-col justify-center overflow-hidden border border-transparent focus-within:border-gray-300">
             <span className="block text-[8px] min-[375px]:text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-normal sm:tracking-[0.1em] mb-1 whitespace-nowrap overflow-hidden text-ellipsis">Дом</span>
             <input
              type="text"
              value={house}
              onChange={(e) => setHouse(e.target.value)}
              placeholder="1"
              className="w-full bg-transparent border-none outline-none text-[15px] sm:text-[15px] font-extrabold text-[#3A332E] placeholder:text-[#3A332E]/20"
             />
            </div>
            <div className="bg-[#F8F8F8] rounded-[1rem] px-2 sm:px-5 py-3.5 sm:py-3 flex flex-col justify-center overflow-hidden border border-transparent focus-within:border-gray-300">
             <span className="block text-[8px] min-[375px]:text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-normal sm:tracking-[0.1em] mb-1 whitespace-nowrap overflow-hidden text-ellipsis">Подъезд</span>
             <input
              type="text"
              value={entrance}
              onChange={(e) => setEntrance(e.target.value)}
              placeholder="1"
              className="w-full bg-transparent border-none outline-none text-[15px] sm:text-[15px] font-extrabold text-[#3A332E] placeholder:text-[#3A332E]/20"
             />
            </div>
            <div className="bg-[#F8F8F8] rounded-[1rem] px-2 sm:px-5 py-3.5 sm:py-3 flex flex-col justify-center overflow-hidden border border-transparent focus-within:border-gray-300">
             <span className="block text-[8px] min-[375px]:text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-normal sm:tracking-[0.1em] mb-1 whitespace-nowrap overflow-hidden text-ellipsis">Этаж</span>
             <input
              type="text"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              placeholder="1"
              className="w-full bg-transparent border-none outline-none text-[15px] sm:text-[15px] font-extrabold text-[#3A332E] placeholder:text-[#3A332E]/20"
             />
            </div>
            <div className="bg-[#F8F8F8] rounded-[1rem] px-2 sm:px-5 py-3.5 sm:py-3 flex flex-col justify-center overflow-hidden border border-transparent focus-within:border-gray-300">
             <span className="block text-[8px] min-[375px]:text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-normal sm:tracking-[0.1em] mb-1 whitespace-nowrap overflow-hidden text-ellipsis">Кв. / Офис</span>
             <input
              type="text"
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
              placeholder="1"
              className="w-full bg-transparent border-none outline-none text-[15px] sm:text-[15px] font-extrabold text-[#3A332E] placeholder:text-[#3A332E]/20"
             />
            </div>
           </div>

           {/* Geolocation moved to MapPicker */}
          </div>

          <button
           onClick={() => {
            if (window.innerWidth < 640 && isEditingAddress) {
             setIsEditingAddress(false);
            } else {
             handleSaveDelivery();
            }
           }}
           disabled={!tempAddress}
           className="mt-2 sm:mt-6 w-full h-[64px] sm:h-[72px] bg-[#3A332E] disabled:bg-[#3A332E]/40 text-white rounded-[1.2rem] font-[800] text-[18px] sm:text-[20px] hover:bg-[#2A2420] transition-all active:scale-95 shadow-xl shadow-[#3A332E]/20 z-10 shrink-0 mb-[calc(1rem+env(safe-area-inset-bottom))] sm:mb-0"
          >
           {isEditingAddress && window.innerWidth < 640 ? 'Готово' : 'Всё верно'}
          </button>
         </div>
        </motion.div>
       </motion.div>
      )}

      {/* ───── STEP 2: Pickup ───── */}
      {step === 2 && deliveryType === "pickup" && (
       <motion.div
        key="step2-pickup"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="flex flex-col sm:flex-row h-full w-full relative"
       >
        <div className="absolute inset-0 sm:relative sm:inset-auto sm:w-[55%] sm:h-full p-0 sm:p-6 sm:pb-6 z-0">
         <div className="w-full h-full sm:rounded-[2rem] overflow-hidden sm:border border-gray-100 relative">
          <MapPicker
           hideSearch={true}
           showGeolocate={false}
           initialAddress={selectedPickup ? `${selectedPickup.city}, ${selectedPickup.address}` : ""}
           onAddressSelect={() => { }}
           onError={setMapError}
           externalCoords={selectedPickup ? (selectedPickup.coords as [number, number]) : CITY_COORDS[selectedCity]}
          />
         </div>
        </div>

        <motion.div
         initial={{ y: "10%" }}
         animate={{ y: 0 }}
         className={cn(
          "absolute bottom-0 left-0 right-0 sm:relative sm:bottom-auto flex-1 bg-white sm:bg-transparent z-10 flex flex-col rounded-t-[2rem] sm:rounded-none shadow-[0_-12px_40px_rgba(0,0,0,0.1)] sm:shadow-none overflow-hidden sm:overflow-y-auto no-scrollbar",
          isEditingAddress ? "h-[85vh] sm:h-full p-5 sm:p-10" : "p-5 pb-[env(safe-area-inset-bottom)] sm:h-full sm:p-10"
         )}
        >
         {/* Mobile Compact View */}
         <div className={cn("sm:hidden flex flex-col gap-4", isEditingAddress ? "hidden" : "flex")}>
          <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto my-1" />
          <motion.button
           whileHover={{ scale: 1.02 }}
           whileTap={{ scale: 0.98 }}
           onClick={() => setIsEditingAddress(true)}
           className="w-full p-4 bg-[#F8F8F8] rounded-[1.2rem] border border-gray-100 flex items-center justify-between shadow-sm active:scale-[0.98] transition-all cursor-pointer"
          >
           <div className="flex flex-col gap-1 overflow-hidden pr-4">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Пункт выдачи</span>
            <span className="text-[15px] font-extrabold text-[#CF8F73] truncate">
             {selectedPickup ? selectedPickup.address : "Выберите на карте или из списка"}
            </span>
           </div>
           <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 text-[#3A332E]">
            <Edit3 className="w-4 h-4" />
           </div>
          </motion.button>
          <button
           onClick={handleSavePickup}
           disabled={!selectedPickup}
           className="w-full h-[64px] bg-[#CF8F73] disabled:bg-[#CF8F73]/40 text-white rounded-[1.2rem] font-[800] text-[18px] hover:bg-[#b87a60] transition-all active:scale-95 shadow-xl shadow-[#CF8F73]/20 mt-1 mb-2"
          >
           Да, всё верно
          </button>
         </div>

         {/* Expanded / Desktop View */}
         <div className={cn("flex-col h-full", isEditingAddress ? "flex" : "hidden sm:flex")}>
          <div className="flex items-center justify-between mb-5 sm:mb-8 shrink-0">
           <div className="flex items-center gap-4">
            <button
             onClick={() => {
              if (window.innerWidth < 640 && isEditingAddress) {
               setIsEditingAddress(false);
              } else {
               setStep(1);
              }
             }}
             className="p-1 text-[#3A332E] hover:text-smusl-brown transition-colors"
            >
             <ArrowLeft className="w-6 h-6" />
            </button>
            <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#3A332E] tracking-tight">
             Точка самовывоза
            </h2>
           </div>
           <button
            onClick={handleClose}
            className="hidden sm:block p-1 text-gray-300 hover:text-[#3A332E] transition-colors"
           >
            <X className="w-6 h-6" />
           </button>
          </div>

          <div className="relative mb-5 sm:mb-6 z-50">
           <div
            className="bg-[#F8F8F8] rounded-[1.2rem] px-5 py-3.5 sm:py-4 cursor-pointer select-none border border-transparent hover:border-gray-200 transition-colors"
            onClick={() => setShowCityDropdown(v => !v)}
           >
            <span className="block text-[9px] font-[700] text-[#B5B5B5] uppercase tracking-[0.1em] mb-0.5">ГОРОД</span>
            <div className="flex items-center justify-between">
             <span className="text-[15px] sm:text-[16px] font-[800] text-[#3A332E]">{selectedCity}</span>
             <ChevronDown className={cn('w-4 h-4 text-gray-300 transition-transform duration-200', showCityDropdown && 'rotate-180')} />
            </div>
           </div>
           {showCityDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-[1.2rem] shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
             {(['Москва', 'Санкт-Петербург'] as const).map(c => (
              <button
               key={c}
               onClick={() => { setSelectedCity(c); setSelectedPickup(null); setShowCityDropdown(false) }}
               className={cn(
                'w-full text-left px-5 py-3.5 text-[15px] font-bold transition-colors border-b last:border-0 border-gray-50',
                selectedCity === c ? 'text-[#3A332E] bg-gray-50' : 'text-[#3A332E] hover:bg-gray-50'
               )}
              >
               {c}
              </button>
             ))}
            </div>
           )}
          </div>

          <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           className="flex flex-col gap-2 flex-1 overflow-y-auto pr-1 no-scrollbar z-40 pb-4"
          >
           <AnimatePresence mode="popLayout">
            {PICKUP_POINTS.filter(p => p.city === selectedCity).map((p) => (
             <motion.button
              key={p.address}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              layout
              onClick={() => setSelectedPickup(p)}
              className={cn(
               "w-full px-6 py-4 rounded-[1.5rem] border transition-all flex items-center justify-between group",
               selectedPickup?.address === p.address
                ? "border-[#CF8F73] bg-[#CF8F73] shadow-sm"
                : "border-gray-100 bg-white hover:border-gray-300"
              )}
             >
              <span className={cn(
               "text-[18px] font-[800] transition-colors tracking-tight",
               selectedPickup?.address === p.address ? "text-white" : "text-[#3A332E]"
              )}>
               {p.address}
              </span>
              <div className={cn(
               "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
               selectedPickup?.address === p.address ? "border-white" : "border-gray-200"
              )}>
               <div className={cn(
                "w-2.5 h-2.5 rounded-full bg-white transition-all duration-300",
                selectedPickup?.address === p.address ? "scale-100 opacity-100" : "scale-0 opacity-0"
               )} />
              </div>
             </motion.button>
            ))}
           </AnimatePresence>
          </motion.div>

          <button
           onClick={() => {
            if (window.innerWidth < 640 && isEditingAddress) {
             setIsEditingAddress(false);
            } else {
             handleSavePickup();
            }
           }}
           disabled={!selectedPickup}
           className="mt-2 sm:mt-6 w-full h-[64px] sm:h-[72px] bg-[#3A332E] disabled:bg-[#3A332E]/40 text-white rounded-[1.2rem] font-[800] text-[18px] sm:text-[20px] hover:bg-[#2A2420] transition-all active:scale-95 shadow-xl shadow-[#3A332E]/20 z-10 shrink-0 mb-[calc(1rem+env(safe-area-inset-bottom))] sm:mb-0"
          >
           {isEditingAddress && window.innerWidth < 640 ? 'Готово' : 'Всё верно'}
          </button>
         </div>
        </motion.div>
       </motion.div>
      )}

     </AnimatePresence>
    </motion.div>
   </div>
  </AnimatePresence>
 )
}
