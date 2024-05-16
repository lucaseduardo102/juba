import { Col, Row } from "react-bootstrap";
import { Load, Screen, ScreenTitle } from "../../components";
import { useUserGetById } from "../../domain";
import { useAuthStore } from "../../services";
import { FormUser } from "./components/FormUser";
import { FormProfile } from "./components/FormProfile";
import { ModalCreateProfile } from "./components/ModalCreateProfile";
import { useVisibility } from "../../hooks/useVisibility";

export function MyAccount() {
  const {
    authCredentials: {
      user: { id },
    },
  } = useAuthStore();
  const { isVisible, handleVisibility } = useVisibility();

  const { data: user, isLoading, isError } = useUserGetById(id);

  return (
    <Screen>
      {isLoading || isError ? (
        <Load />
      ) : (
        <>
          <ScreenTitle>Gerencie sua conta</ScreenTitle>
          <Row xs={1} sm={1} md={1} className="justify-content-center p-5">
            <Col
              className="bg-body-tertiary border b-1 shadow p-5 rounded"
              md={6}
            >
              <FormUser user={user} />
              <div className="d-flex mb-3 justify-content-between align-items-center">
                <h3 className="">Perfis</h3>
                <i
                  className="bi bi-person-plus-fill"
                  style={{ fontSize: "1.5rem" }}
                  onClick={handleVisibility}
                ></i>
              </div>

              {user?.profiles?.length === 0 && (
                <div className="text-center " style={{ marginBottom: 100 }}>
                  Nenhum perfil associado
                </div>
              )}

              {user?.profiles.map((profile, index, array) => (
                <div key={profile.id}>
                  <FormProfile profile={profile} />
                  {array.length - 1 !== index && (
                    <div className="border-bottom border-2 border-dark my-4"></div>
                  )}
                </div>
              ))}
            </Col>
          </Row>
        </>
      )}
      {isVisible && (
        <ModalCreateProfile handleVisibility={handleVisibility} userId={id} />
      )}
    </Screen>
  );
}
