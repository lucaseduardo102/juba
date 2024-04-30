import { AlertStatus } from "../../../components";
import { Modal } from "../../../components/Modal";
import { useProfileRemove } from "../../../domain/Profile/profileUseCases";

export function ModalDelete({ modalDelete, selectedProfile }) {
  const { mutate, isError, isSuccess } = useProfileRemove();

  if (selectedProfile) {
    const sendData = () => {
      mutate(selectedProfile.id);
    };

    return (
      <Modal
        isVisible
        handleVisibility={modalDelete.handleVisibility}
        headerTitle="Excluir perfil"
        customFooter={
          !isSuccess && (
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-outline-danger"
                onClick={sendData}
              >
                Confirmar
              </button>
            </div>
          )
        }
      >
        <AlertStatus
          isError={isError}
          isSuccess={isSuccess}
          customMessage={{ success: "Excluído com sucesso" }}
          successAction={modalDelete.handleVisibility}
        />
        {!isSuccess && (
          <p>Deseja excluir o perfil de {selectedProfile?.name}?</p>
        )}
      </Modal>
    );
  }
}
