import { create } from "zustand";

/**
 * isVisible: boolean -> define se o Toast estará visível
 * message: string -> define a mensagem de resposta
 */
const toastStore = create((set) => ({
  toast: { isVisible: false, message: null },
  showToast: ({ message = "Ocorreu um erro" } = {}) =>
    set({ toast: { isVisible: true, message } }),
  hideToast: () =>
    set((prevState) => ({ toast: { ...prevState.toast, isVisible: false } })),
}));

export function useToastStore() {
  const toast = toastStore((state) => state.toast);
  const showToast = toastStore((state) => state.showToast);
  const hideToast = toastStore((state) => state.hideToast);

  return {
    toast,
    showToast,
    hideToast,
  };
}
