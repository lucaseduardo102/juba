import { create } from "zustand";

const initialValues = {
  type: {
    CREDITO: "CREDITO",
    DEBITO: "DEBITO",
    DINHEIRO: "DINHEIRO",
  },
  method: null, // CREDITO, DEBITO, DINHEIRO
  methodId: null, // master, visa, elo
  typeId: null, // credit_card, debit_card
};

const paymentStore = create((set) => ({
  payment: initialValues,
  handlePayment: (key, value) =>
    set((prevState) => ({ payment: { ...prevState.payment, [key]: value } })),
  clear: () => set({ payment: initialValues }),
}));

export function usePaymentStore() {
  const payment = paymentStore((state) => state.payment);
  const handlePayment = paymentStore((state) => state.handlePayment);

  return { payment, handlePayment };
}
