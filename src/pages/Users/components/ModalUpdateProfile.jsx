import { Modal } from "../../../components/Modal";

export function ModalUpdateProfile({ isVisible, handleVisibility }) {
  return (
    <Modal isVisible={isVisible} handleVisibility={handleVisibility}></Modal>
  );
}
