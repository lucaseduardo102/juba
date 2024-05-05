import { useProfileCreate } from "../../../domain/ProfileDomain/profileUseCases";
import { ModalProfile } from "./ModalProfile";

export function ModalCreate({ modalCreate, userId }) {
  const { mutate, isError, isSuccess, isPending } = useProfileCreate();

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
      isPending={isPending}
      sendForm={sendForm}
    />
  );
}
