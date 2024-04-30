import { useProfileCreate } from "../../../domain/Profile/profileUseCases";
import { ModalProfile } from "./ModalProfile";

export function ModalCreate({ modalCreate, userId }) {
  const { mutate, isError, isSuccess } = useProfileCreate();

  const sendForm = (name, cpf, statusProfile) => {
    mutate({ name, cpf, statusProfile, userId });
  };

  return (
    <ModalProfile
      isVisible={modalCreate.isVisible}
      handleVisibility={modalCreate.handleVisibility}
      headerTitle="Adicionar perfil"
      isError={isError}
      isSuccess={isSuccess}
      sendForm={sendForm}
    />
  );
}
