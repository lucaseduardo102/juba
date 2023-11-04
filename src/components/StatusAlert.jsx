import { useState, useEffect } from "react";
import { Alert } from ".";

export function StatusAlert({ status }) {
  const [isVisible, setVisible] = useState(false);
  const state = {
    message: null,
    type: "danger",
  };

  useEffect(() => {
    if (status !== null) {
      setVisible(true);
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  switch (status) {
    case 200:
      state.message = "Requisição bem-sucedida.";
      state.type = "success";
      break;
    case 201:
      state.message = "Recurso criado com sucesso.";
      state.type = "success";
      break;
    case 401:
      state.message = "Credenciais inválidas.";
      break;
    case 403:
      state.message = "Acesso negado.";
      break;
    case 404:
      state.message = "Recurso não encontrado.";
      break;
    case 405:
      state.message = "Método não permitido.";
      break;
    case 413:
      state.message = "Requisição muito grande.";
      break;
    case 500:
      state.message = "Erro interno do servidor.";
      break;
    case 503:
      state.message = "Serviço indisponível.";
      break;
    default:
      state.message = "Erro inesperado.";
      break;
  }
  return isVisible && <Alert type={state.type} message={state.message} />;
}
