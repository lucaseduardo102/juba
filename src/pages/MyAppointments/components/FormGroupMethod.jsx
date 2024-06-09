import { FaPix } from "react-icons/fa6";
import { Form } from "react-bootstrap";
import { usePaymentStore } from "../../../services";

export function FormGroupMethod() {
  const {
    payment: { method, type, typeId },
    handlePayment,
  } = usePaymentStore();

  const handleChange = (event) => {
    handlePayment("method", event.target.id);
  };

  return (
    <Form.Group>
      <Form.Label>Formas de pagamento</Form.Label>
      <div className="px-2 border rounded">
        <div className="d-flex align-items-center gap-4 m-2">
          <Form.Check
            type="radio"
            id={type.CREDITO}
            checked={method === type.CREDITO}
            onChange={handleChange}
          />
          <i className="bi bi-credit-card fs-2" />
          <div>
            <span>Cartão de crédito</span>
            {typeId === "debit_card" && method === type.DEBITO && <InfoText />}
          </div>
        </div>
        <div className="border" />
        <div className="d-flex align-items-center gap-4 m-2">
          <Form.Check
            type="radio"
            id={type.DEBITO}
            checked={method === type.DEBITO}
            onChange={handleChange}
          />
          <i className="bi bi-credit-card-2-front fs-2" />
          <div>
            <span>Cartão de débito</span>
            {typeId === "credit_card" && method === type.DEBITO && <InfoText />}
          </div>
        </div>
        <div className="border" />
        <div className="d-flex align-items-center gap-4 m-2">
          <Form.Check
            type="radio"
            id={type.DINHEIRO}
            checked={method === type.DINHEIRO}
            onChange={handleChange}
          />
          <FaPix size={25} className="my-2" />
          <span>Pix ou Dinheiro</span>
        </div>
      </div>
    </Form.Group>
  );
}

function InfoText() {
  return (
    <article className="text-danger" style={{ fontSize: "10pt" }}>
      Não está disponível para esta bandeira
    </article>
  );
}
