import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { StepsAssessment } from "./StepsAssessment";
import { useModalAssessmentService } from "../service/useModalAssessmentService";

export function ModalAssessment({ handleVisibility, appointmentId }) {
  const {
    canContinue,
    isPending,
    emotion,
    handleComment,
    handleEmotion,
    sendData,
  } = useModalAssessmentService(appointmentId);

  return (
    <Modal show onHide={handleVisibility}>
      <Modal.Header closeButton>
        <Modal.Title>Avalie nosso serviço</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StepsAssessment
          currentEmotion={emotion}
          handleEmotion={handleEmotion}
        />

        <Form.Label className="mt-2">
          Dê mais detalhes sobre sua experiência
        </Form.Label>
        <Form.Control
          as="textarea"
          minLength={2}
          maxLength={350}
          onChange={(event) => handleComment(event)}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="dark"
          disabled={canContinue || isPending}
          onClick={sendData}
        >
          Salvar {isPending && <Spinner size="sm" />}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
