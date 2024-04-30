import { useProfileUpdate } from "../../../domain/Profile/profileUseCases";
import { ModalProfile } from "./ModalProfile";

export function ModalUpdate({ modalUpdate, selectedProfile }) {
  const { mutate, isError, isSuccess } = useProfileUpdate();

  if (selectedProfile) {
    const sendForm = (name, cpf, statusProfile) => {
      mutate({ name, cpf, statusProfile, id: selectedProfile.id });
    };

    return (
      <ModalProfile
        handleVisibility={modalUpdate.handleVisibility}
        headerTitle="Atualizar perfil"
        profile={selectedProfile}
        sendForm={sendForm}
        isError={isError}
        isSuccess={isSuccess}
      />
    );
  }
}
