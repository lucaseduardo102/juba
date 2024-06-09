import { Accordion } from "react-bootstrap";
import { usePaymentStore } from "../../../services";

export function PixInfo() {
  const {
    payment: { method, type },
  } = usePaymentStore();

  return (
    <Accordion.Collapse eventKey="3" in={method === type.DINHEIRO}>
      <div className="justify-content-center align-items-center mt-4 p-3 border rounded">
        <p className="text-center fw-bold m-0">
          Procure um funcionário para realizar o pagamento
        </p>
      </div>
    </Accordion.Collapse>
  );
}
