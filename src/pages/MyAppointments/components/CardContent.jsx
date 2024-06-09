import { Button, Card } from "react-bootstrap";
import { mask } from "../../../utils";

export function CardContent({
  children,
  appointment: { id, employee, client, specialty, status, scheduling },
}) {
  const statusText = {
    CANCELADO: "Cancelado",
    MARCADO: "Marcado",
    EM_ATENDIMENTO: "Em atendimento",
    FINALIZADO: "Finalizado",
    PAGO: "Pago",
    AVALIADO: "Avaliado",
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{specialty?.name}</Card.Title>
        <div className="mb-2">
          <b>Data: </b>
          {mask.parseDateToBrl(scheduling?.date) +
            " às " +
            scheduling?.startTime}
        </div>
        <div className="mb-2">
          <b>Cliente: </b>
          {client?.name}
        </div>
        <div className="mb-2">
          <b>Funcionário: </b>
          {employee?.name}
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <b>Status: </b>
            {status && statusText[status]}
          </div>
          {children}
        </div>
      </Card.Body>
    </Card>
  );
}
