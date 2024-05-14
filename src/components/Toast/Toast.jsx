import {
  Toast as BToast,
  CloseButton,
  Col,
  Row,
  ToastContainer,
} from "react-bootstrap";
import { useToastStore } from "../../services";

export function Toast() {
  const {
    toast: { isVisible, message },
    hideToast,
  } = useToastStore();

  return (
    <div
      className="toast-container"
      style={{ position: "absolute", bottom: 140, right: 10 }}
    >
      <BToast show={isVisible} onClose={hideToast} delay={4000} autohide>
        <BToast.Body className="d-flex justify-content-between">
          {message}
          <CloseButton onClick={hideToast} />
        </BToast.Body>
      </BToast>
    </div>
  );
}
