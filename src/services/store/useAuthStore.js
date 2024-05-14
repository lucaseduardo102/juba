import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StoreKeys } from "./Storekeys";

const authStore = create(
  persist(
    (set) => ({
      authCredentials: null,
      saveCredentials: (authCredentials) => set(() => ({ authCredentials })),
      removeCredentials: () => set(() => ({ authCredentials: null })),
    }),
    {
      name: StoreKeys.AuthCredentials,
    }
  )
);

export function useAuthStore() {
  const authCredentials = authStore((state) => state.authCredentials);
  const saveCredentials = authStore((state) => state.saveCredentials);
  const removeCredentials = authStore((state) => state.removeCredentials);

  return {
    authCredentials,
    saveCredentials,
    removeCredentials,
  };
}
