"use client"

import React, { createContext, useContext, ReactNode } from "react"
import { useCartStore } from "./useCartStore"
import { useUserStore } from "./useUserStore"
import { useUIStore } from "./useUIStore"
import { Product, CartItem, Notification, Order } from "./types"

// ─── Context Shape ───────────────────────────────────────────────────────────

interface AppState {
  cart: CartItem[]
  balance: number
  activeOrders: number
  address: string
  deliveryType: "delivery" | "pickup" | null
  notifications: Notification[]
  addToCart: (product: Product) => void
  addMultipleToCart: (products: Product[]) => void
  updateQuantity: (id: number, delta: number) => void
  checkout: () => boolean
  topUpBalance: (amount: number) => void
  updateAddress: (newAddress: string, type: "delivery" | "pickup") => void
  isCheckoutOpen: boolean
  setCheckoutOpen: (open: boolean) => void
  selectedProduct: Product | null
  setSelectedProduct: (product: Product | null) => void
  isCartOpen: boolean
  setCartOpen: (open: boolean) => void
  isAddressModalOpen: boolean
  setAddressModalOpen: (open: boolean) => void
  isAuthModalOpen: boolean
  setAuthModalOpen: (open: boolean) => void
  userName: string
  setUserName: (name: string) => void
  userPhone: string
  setUserPhone: (phone: string) => void
  favorites: number[]
  toggleFavorite: (productId: number) => void
  orderHistory: Order[]
  activeCategory: string
  setActiveCategory: (category: string) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  hasSetAddress: boolean
  setHasSetAddress: (val: boolean) => void
}

const AppContext = createContext<AppState | undefined>(undefined)

// ─── Provider (Bridge to Zustand) ───────────────────────────────────────────

export function AppProvider({ children }: { children: ReactNode }) {
  // Pull state and actions from new Zustand stores
  const cartStore = useCartStore()
  const userStore = useUserStore()
  const uiStore = useUIStore()

  // Map stores to the old AppState interface
  const value: AppState = {
    cart: cartStore.cart,
    balance: userStore.balance,
    activeOrders: userStore.activeOrders,
    address: userStore.address,
    deliveryType: userStore.deliveryType,
    notifications: userStore.notifications,
    
    addToCart: (product) => cartStore.addToCart(product),
    addMultipleToCart: (products) => cartStore.addMultipleToCart(products),
    updateQuantity: cartStore.updateQuantity,
    
    checkout: () => {
      // Bridge call — note: uses async checkout under the hood
      userStore.checkout(cartStore.cart, cartStore.getCartTotal())
      cartStore.clearCart()
      return true
    },
    
    topUpBalance: userStore.topUpBalance,
    updateAddress: userStore.updateAddress,
    
    isCheckoutOpen: uiStore.isCheckoutOpen,
    setCheckoutOpen: uiStore.setCheckoutOpen,
    
    selectedProduct: uiStore.selectedProduct,
    setSelectedProduct: uiStore.setSelectedProduct,
    
    isCartOpen: uiStore.isCartOpen,
    setCartOpen: uiStore.setCartOpen,
    
    isAddressModalOpen: uiStore.isAddressModalOpen,
    setAddressModalOpen: uiStore.setAddressModalOpen,
    
    isAuthModalOpen: uiStore.isAuthModalOpen,
    setAuthModalOpen: uiStore.setAuthModalOpen,
    
    userName: userStore.userName,
    setUserName: userStore.setUserName,
    
    userPhone: userStore.userPhone,
    setUserPhone: userStore.setUserPhone,
    
    favorites: userStore.favorites,
    toggleFavorite: userStore.toggleFavorite,
    
    orderHistory: userStore.orderHistory,
    
    activeCategory: uiStore.activeCategory,
    setActiveCategory: uiStore.setActiveCategory,
    
    searchQuery: uiStore.searchQuery,
    setSearchQuery: uiStore.setSearchQuery,
    
    hasSetAddress: userStore.hasSetAddress,
    setHasSetAddress: userStore.setHasSetAddress,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useApp(): AppState {
  const context = useContext(AppContext)
  if (!context) throw new Error("useApp must be used within an AppProvider")
  return context
}
