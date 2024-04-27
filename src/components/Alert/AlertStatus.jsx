import { useEffect } from "react";
import { Alert } from "./Alert";

export function AlertStatus({
  isSuccess,
  isError,
  successAction,
  errorAction,
  customMessage,
}) {
  const handleAction = () => {
    if (isSuccess && successAction) successAction();
    else if (isError && errorAction) errorAction();
  };

  useEffect(() => {
    if (isSuccess || isError) {
      setTimeout(() => {
        handleAction();
      }, MODAL_TIMEOUT);
    }
  }, [isSuccess, isError]);

  const styleKey = isSuccess ? "success" : "danger";

  const style = { ...ALERT_MESSAGE, ...customMessage };

  if (isSuccess || isError) {
    return <Alert type={styleKey} message={style[styleKey]} />;
  }
}

const ALERT_MESSAGE = {
  success: "Requisição bem-sucedida.",
  danger: "Erro inesperado.",
};

const MODAL_TIMEOUT = 2000;
