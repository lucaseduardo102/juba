import { Form, Button } from "react-bootstrap";
import { useUserGetById } from "../../../domain";
import { Load } from "../../../components";
import { ButtonAddProfile } from "./ButtonAddProfile";
import { useAuthStore } from "../../../services/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useScheduleStore } from "../../../services";

export function ClientSelector() {
  const {
    isLoading,
    isError,
    handleProfile,
    user,
    selectedClientId,
    navigateToPaymentScreen,
  } = useClientService();

  if (isLoading || isError) {
    return <Load />;
  }

  return (
    <>
      <Form.Label className="ms-2 mt-3">Cliente</Form.Label>
      <div className="d-flex gap-2 align-items-center">
        <Form.Select value={selectedClientId} onChange={handleProfile}>
          {user?.profiles?.length === 0 && !selectedClientId ? (
            <option>Nenhum perfil cadastrado</option>
          ) : (
            <option>Selecione um perfil</option>
          )}
          {user?.profiles?.map((profile) => (
            <option key={profile.id} value={profile.id}>
              {profile.name}
            </option>
          ))}
        </Form.Select>
        <ButtonAddProfile />
      </div>
      <div className="d-flex justify-content-center">
        {selectedClientId && (
          <Button
            style={{ marginTop: 50 }}
            variant="outline-dark"
            onClick={navigateToPaymentScreen}
          >
            Ir para pagamento
          </Button>
        )}
      </div>
    </>
  );
}

const useClientService = () => {
  const {
    authCredentials: {
      user: { id },
    },
  } = useAuthStore();

  const { data: user, isLoading, isError } = useUserGetById(id);

  const {
    appointment: { client: selectedClient },
    handleChangeValue,
  } = useScheduleStore();

  const getClient = (clientId) =>
    user?.profiles?.find(({ id }) => id === clientId);

  const handleProfile = (event) => {
    handleChangeValue("client", getClient(event.target.value));
  };

  const navigate = useNavigate();

  const navigateToPaymentScreen = () => {
    navigate("/payment");
  };

  return {
    isLoading,
    isError,
    handleProfile,
    user,
    selectedClientId: selectedClient?.id,
    navigateToPaymentScreen,
  };
};
