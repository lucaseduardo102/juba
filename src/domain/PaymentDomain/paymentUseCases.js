import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { initMercadoPago } from "@mercadopago/sdk-react";
import {
  createCardToken,
  getPaymentMethods,
} from "@mercadopago/sdk-react/coreMethods";
import { paymentApi } from "./paymentApi";
import { QueryKeys } from "../../services";

initMercadoPago(process.env.REACT_APP_MERCADO_PAGO_PUBLIC_KEY);

export function usePaymentCreateCardToken() {
  return useMutation({ mutationFn: createCardToken });
}

export function usePaymentMethods({ bin }) {
  return useQuery({
    queryKey: [QueryKeys.PaymentGetMethods, bin],
    queryFn: () => getPaymentMethods({ bin }),
  });
}

export function usePaymentCreate({ bin }) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: paymentApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PaymentGetMethods, bin],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.AppointmentGetByUserId],
      });
    },
  });
}
