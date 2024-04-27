import { Modal } from "../../../../components/Modal";

export function ModalDeleteProfile({ isVisible, handleVisibility ,userId}) {
  return (
    <Modal isVisible={isVisible} handleVisibility={handleVisibility}></Modal>
  );
}
