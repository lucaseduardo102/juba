import { FeedbackDescription } from "./FeedbackDescription";
import { FormStatusOptions } from "./FormStatusOptions";

const STATUS_TYPE = {
  CANCELADO: "CANCELADO",
  MARCADO: "MARCADO",
  EM_ATENDIMENTO: "EM_ATENDIMENTO",
  FINALIZADO: "FINALIZADO",
  PAGO: "PAGO",
  AVALIADO: "AVALIADO",
};

export function StatusOptions({ status, appointmentId, handleVisibility }) {
  const STATUS_TYPE_MESSAGES = {
    MARCADO: [
      { type: STATUS_TYPE.CANCELADO, title: "Cancelar" },
      { type: STATUS_TYPE.EM_ATENDIMENTO, title: "Iniciar atendimento" },
    ],
    EM_ATENDIMENTO: [
      { type: STATUS_TYPE.CANCELADO, title: "Cancelar" },
      { type: STATUS_TYPE.FINALIZADO, title: "Finalizar atendimento" },
    ],
    FINALIZADO: [{ type: STATUS_TYPE.PAGO, title: "Confirmar pagamento" }],
    AVALIADO: [{ type: STATUS_TYPE.AVALIADO, title: "Ver feedback" }],
  };

  const canContinue = !(
    status === STATUS_TYPE.CANCELADO || status === STATUS_TYPE.PAGO
  );
  if (canContinue) {
    return (
      <>
        <hr />
        {status === STATUS_TYPE.AVALIADO ? (
          <FeedbackDescription appointmentId={appointmentId} />
        ) : (
          <FormStatusOptions
            appointmentId={appointmentId}
            status={status}
            statusTypeMessages={STATUS_TYPE_MESSAGES}
            handleVisibility={handleVisibility}
          />
        )}
      </>
    );
  }
}
