import { Button, Card } from "react-bootstrap";
import { mask } from "../../../utils";

export function CardContent({
  appointment: { id, employee, client, specialty, status, scheduling },
  openModalFeedback,
}) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{specialty?.name}</Card.Title>
        <div className="mb-2">
          <b>Funcionário: </b>
          {employee?.name}
        </div>
        <div className="mb-2">
          <b>Data: </b>
          {mask.parseDateToBrl(scheduling?.date) +
            " às " +
            scheduling?.startTime}
        </div>
        <div className="mb-2">
          <b>Preço: </b>
          {specialty?.price.toLocaleString("pt-Br", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
        <div className="mb-2">
          <b>Cliente: </b>
          {client?.name}
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <b>Status: </b>
            {mask.capitalizeFirstLetter(status)}
          </div>
          {status === "FINALIZADO" && (
            <Button variant="dark" size="sm" onClick={() => openModalFeedback(id)}>
              Avaliar
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
