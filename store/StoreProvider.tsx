"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { RootStore, rootStore } from "./stores/RootStore";

export const StoreContext = createContext<RootStore | null>(null);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
 const [isHydrated, setIsHydrated] = useState(false);

 useEffect(() => {
  rootStore.hydrate();
  setIsHydrated(true);
 }, []);

 return (
  <StoreContext.Provider value={rootStore}>
   {children}
  </StoreContext.Provider>
 );
};

export const useRootStore = () => {
 const context = useContext(StoreContext);
 if (!context) {
  throw new Error("useRootStore must be used within StoreProvider");
 }
 return context;
};
