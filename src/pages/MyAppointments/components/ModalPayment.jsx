import { CardForm } from "./CardForm";
import { Accordion, Form, Modal } from "react-bootstrap";
import { PixInfo } from "./PixInfo";
import { FormGroupMethod } from "./FormGroupMethod";
import { usePaymentStore } from "../../../services";

export function ModalPayment({ handleVisibility, appointmentId }) {
  const { payment: method } = usePaymentStore();

  return (
    <Modal show onHide={handleVisibility}>
      <Modal.Header closeButton>Pagamento</Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroupMethod />
          <Accordion defaultActiveKey={method}>
            <CardForm
              appointmentId={appointmentId}
              handleVisibility={handleVisibility}
            />
            <PixInfo />
          </Accordion>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
