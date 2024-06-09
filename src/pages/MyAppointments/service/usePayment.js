import { useFormik } from "formik";
import {
  usePaymentCreate,
  usePaymentCreateCardToken,
  usePaymentMethods,
} from "../../../domain";
import { PaymentMethodSchema, mask } from "../../../utils";
import {
  ToastMessages,
  usePaymentStore,
  useToastStore,
} from "../../../services";
import { useEffect } from "react";

export function usePayment({ appointmentId, handleVisibility }) {
  const {
    payment: { method, methodId, type, typeId },
    handlePayment,
  } = usePaymentStore();

  const formik = useFormik({
    validationSchema: PaymentMethodSchema,
    initialValues: {
      cardNumber: "",
      holderName: "",
      expirationDate: "",
      securityCode: "",
      identificationNumber: "",
      identificationType: "CPF",
    },
    onSubmit: handleSubmit,
  });

  const getBin = (cardNumber) => {
    return cardNumber?.length >= 6 ? cardNumber.slice(0, 6) : null;
  };

  const bin = getBin(mask.removeSpaces(formik.values.cardNumber));

  const { showToast } = useToastStore();
  const paymentCreateCard = usePaymentCreateCardToken();
  const paymentCreate = usePaymentCreate({ bin });

  const paymentMethods = usePaymentMethods({
    bin,
  });

  console.log(methodId);

  useEffect(() => {
    handlePaymentMethodsSuccess(paymentMethods.data);
  }, [paymentMethods.data]);

  function handleSubmit(values) {
    const {
      cardNumber,
      holderName,
      expirationDate,
      securityCode,
      identificationNumber,
      identificationType,
    } = values;

    createCardToken({
      cardNumber: mask.removeSpaces(cardNumber),
      cardholderName: holderName,
      cardExpirationMonth: expirationDate.slice(0, 2),
      cardExpirationYear: "20" + expirationDate.slice(-2),
      securityCode,
      identificationNumber: mask.removeMaskOfCpfOrCnpj(identificationNumber),
      identificationType,
    });
  }

  function handlePaymentMethodsSuccess(data) {
    const result = data?.results[0] ?? undefined;
    handlePayment("methodId", result?.id);
    handlePayment("typeId", result?.payment_type_id);
  }

  function createCardToken(request) {
    const options = {
      onSuccess: ({ id: cardToken }) => {
        sendPayment(cardToken);
      },
    };
    paymentCreateCard.mutate(request, options);
  }

  function sendPayment(cardToken) {
    const request = {
      appointmentId,
      cardToken,
      paymentMethod: method,
      paymentMethodId: methodId,
      identificationType: formik.values.identificationType,
      identificationNumber: mask.removeMaskOfCpfOrCnpj(
        formik.values.identificationNumber
      ),
    };

    const options = {
      onSuccess: () => {
        showToast({ message: ToastMessages.MyAppointments.Payment.success });
        handleVisibility();
      },
      onError: () =>
        showToast({ message: ToastMessages.MyAppointments.Payment.error }),
    };

    paymentCreate.mutate(request, options);
  }

  const isPaymentByCard = method === type.CREDITO || method === type.DEBITO;
  const acceptPayment =
    (typeId === "credit_card" && method === type.CREDITO) ||
    (typeId === "debit_card" && method === type.DEBITO);

  return {
    formik,
    isPaymentByCard,
    acceptPayment,
    isPending: paymentCreate.isPending,
  };
}
