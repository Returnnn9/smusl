"use client"

import React, { useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"
import CartSidebar from "@/components/CartSidebar"

import { Search, ShoppingCart } from "lucide-react"
import { useUIStore, useCartStore, useProductStore, useStoreData } from "@/store/hooks"
import { Product } from "@/store/types"
import { ProductCardSkeleton } from "@/components/Skeleton"
import { motion, AnimatePresence } from "framer-motion"

export default function MarketPage() {
  const uiStore = useUIStore()
  const cartStore = useCartStore()
  const productStore = useProductStore()

  const isCartOpen = useStoreData(uiStore, s => s.getIsCartOpen())
  const activeCategory = useStoreData(uiStore, s => s.getActiveCategory())
  const searchQuery = useStoreData(uiStore, s => s.getSearchQuery())
  const selectedProduct = useStoreData(uiStore, s => s.getSelectedProduct())

  const cart = useStoreData(cartStore, s => s.getCart())
  const products = useStoreData(productStore, s => s.getProducts()) || []
  const isLoading = useStoreData(productStore, s => s.getIsLoading())

  useEffect(() => {
    if (products.length === 0) {
      productStore.fetchProducts()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filteredProducts = products.filter((p: Product) => {
    const tokens = searchQuery.toLowerCase().split(' ').filter(Boolean)
    const matchesSearch = tokens.length === 0 || tokens.every(t =>
      p.name.toLowerCase().includes(t) ||
      (p.description && p.description.toLowerCase().includes(t))
    )
    // When there's an active query, search across all categories
    const matchesCategory = !searchQuery.trim()
      ? p.category.toLowerCase() === activeCategory.toLowerCase()
      : true
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#FDF9F6] transition-colors duration-500 font-montserrat flex flex-col">
      <Header />

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-10 pb-40 lg:pb-32 pt-4 lg:pt-6">

        <div className="mb-8 flex items-center justify-between">
          <span className="text-[10px] font-[800] text-[#A19C98] uppercase tracking-[0.16em]">
            Товаров в категории: <span className="text-[#CA8A70] pl-1 text-[11px] font-[900]">{filteredProducts.length}</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_500px] gap-4 items-start">
          <section>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 gap-1.5 sm:gap-3"
              >
                {isLoading
                  ? Array.from({ length: 6 }).map((_, i) => <ProductCardSkeleton key={i} />)
                  : filteredProducts.length > 0 ? (
                    filteredProducts.map((p: Product, i: number) => (
                      <ProductCard key={p.id} {...p} onAdd={() => cartStore.addToCart(p)} index={i} />
                    ))
                  ) : (
                    <div className="col-span-full py-20 flex flex-col items-center justify-center text-center bg-white rounded-[2rem] border border-[#F2F2F2] shadow-[0_4px_20px_rgba(202,138,112,0.05)]">
                      <Search className="w-10 h-10 text-[#CA8A70]/30 mb-4" />
                      <p className="text-[#A19C98] font-[800] uppercase tracking-widest text-[11px]">Ничего не найдено</p>
                    </div>
                  )
                }
              </motion.div>
            </AnimatePresence>
          </section>

          {/* Sticky Cart Sidebar */}
          <aside className="hidden md:block md:sticky md:top-8">
            <CartSidebar />
          </aside>
        </div>

        {/* ── Mobile Cart Layer ── */}
        <AnimatePresence>
          {isCartOpen && (
            <div className="fixed inset-0 z-[100] md:hidden">
              {/* Glass Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => uiStore.setCartOpen(false)}
                className="absolute inset-0 bg-[#2A1F1A]/70"
              />
              {/* Bottom Sheet Panel */}
              <motion.div
                initial={{ y: "100%", opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0.5 }}
                transition={{ type: "spring", damping: 32, stiffness: 300 }}
                drag="y"
                dragConstraints={{ top: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.y > 150 || velocity.y > 500) {
                    uiStore.setCartOpen(false)
                  }
                }}
                className="absolute bottom-0 w-full h-[88vh] bg-[#F6EDE4] rounded-t-[2.5rem] flex flex-col shadow-[0_-20px_60px_rgba(0,0,0,0.15)] overflow-hidden"
              >
                <div
                  className="w-full pt-4 pb-2 flex items-center justify-center shrink-0 cursor-grab active:cursor-grabbing"
                  onClick={() => uiStore.setCartOpen(false)}
                >
                  <div className="w-12 h-1.5 rounded-full bg-[#E8E1DA]" />
                </div>
                <div className="flex-1 overflow-y-auto w-full px-2 sm:px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] no-scrollbar">
                  <CartSidebar isMobile={true} onClose={() => uiStore.setCartOpen(false)} />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ── Mobile FAB ── */}
        <AnimatePresence>
          {cart.length > 0 && !selectedProduct && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[400px] md:hidden"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => uiStore.setCartOpen(true)}
                className="w-full bg-[#CA8A70]/90 backdrop-blur-md text-white px-6 py-4 rounded-[1.4rem] shadow-[0_8px_30px_rgb(202,138,112,0.3)] border border-[#be7e64]/30 flex relative items-center justify-between transition-all overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{ opacity: [0, 0.4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <div className="flex items-center gap-3 relative z-10 min-w-0">
                  <div className="relative shrink-0">
                    <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      key={cart.length}
                      className="absolute -top-1.5 -right-2 bg-white text-[#CA8A70] text-[10px] font-[900] w-4 h-4 rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
                    >
                      {cart.reduce((sum, item) => sum + item.quantity, 0)}
                    </motion.div>
                  </div>
                  <span className="font-[800] text-[15px] sm:text-[17px] truncate tracking-wide">Корзина</span>
                </div>
                <span className="font-[900] text-[16px] sm:text-[18px] relative z-10 shrink-0 ml-2">
                  {cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString("ru-RU")} ₽
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modals are handled globally via GlobalModals in layout.tsx */}
      </main>

      <Footer />
    </div>
  )
}
