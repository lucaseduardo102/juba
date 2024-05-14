import React from "react";
import { Screen, ScreenTitle } from "../../components";
import { PaymentBox } from "./PaymentModule";
import { Card } from "react-bootstrap";
import { useScheduleStore } from "../../services";
import { mask } from "../../utils";
import { Navigate } from "react-router-dom";

export function Payment() {
  const {
    appointment: { date, time, client, employee, specialty },
  } = useScheduleStore();

  if (!client) {
    return <Navigate replace to="/agendamento" />;
  }

  return (
    <Screen className="mb-5">
      <ScreenTitle>Pagamento</ScreenTitle>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Resumo</Card.Title>
          <article className="mt-4">
            <PropertyDisplay
              title="Dia:"
              value={mask.parseDateToBrl(date) + " às " + time + "h"}
            />
            <PropertyDisplay title="Funcionário:" value={employee?.name} />
            <PropertyDisplay title="Especialidade:" value={specialty?.name} />
            <PropertyDisplay
              title="Preço:"
              value={specialty?.price.toLocaleString("pt-Br", {
                style: "currency",
                currency: "BRL",
              })}
            />
            <PropertyDisplay title="Cliente:" value={client?.name} />
          </article>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title className="text-center">Método de Pagamento</Card.Title>

          <PaymentBox />
        </Card.Body>
      </Card>
    </Screen>
  );
}

function PropertyDisplay({ title, value }) {
  return (
    <div className="mb-2">
      <b>{title}</b> {value}
    </div>
  );
}
