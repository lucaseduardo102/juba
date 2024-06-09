import { useVisibility } from "../../../hooks/useVisibility";
import { Button } from "react-bootstrap";
import { ModalAssessment } from "./ModalAssessment";
import { ModalPayment } from "./ModalPayment";

export function ActionButtons({ appointment: { id, status } }) {
  const { handleVisibility, isVisible } = useVisibility();

  if (status === "FINALIZADO") {
    return (
      <>
        <Button variant="dark" size="sm" onClick={handleVisibility}>
          Pagar
        </Button>
        {isVisible && (
          <ModalPayment
            appointmentId={id}
            handleVisibility={handleVisibility}
          />
        )}
      </>
    );
  }
  if (status === "PAGO") {
    return (
      <>
        <Button variant="dark" size="sm" onClick={handleVisibility}>
          Avaliar
        </Button>
        {isVisible && (
          <ModalAssessment
            appointmentId={id}
            handleVisibility={handleVisibility}
          />
        )}
      </>
    );
  }
}
