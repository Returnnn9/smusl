"use client";

import { useSyncExternalStore } from "react";
import { useRootStore } from "./StoreProvider";

export { useRootStore };
export function useStoreData<TStore extends { subscribe: (l: () => void) => () => void }, TResult>(
 store: TStore,
 selector: (store: TStore) => TResult
): TResult {
 return useSyncExternalStore(
  store.subscribe,
  () => selector(store),
  () => selector(store)
 );
}

export const useCartStore = () => {
 const { cartStore } = useRootStore();
 return cartStore;
};

export const useUserStore = () => {
 const { userStore } = useRootStore();
 return userStore;
};

export const useUIStore = () => {
 const { uiStore } = useRootStore();
 return uiStore;
};
