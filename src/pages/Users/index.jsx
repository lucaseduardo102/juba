import { Screen, ScreenTitle } from "../../components/";
import { useVisibility } from "../../hooks/useVisibility";
import { useUserGetAll } from "../../domain";
import { Button, Table } from "react-bootstrap";
import { UserUpdateForm } from "./components/UserUpdateForm";
import { ModalCreate } from "./components/ModalCreate";

export const Users = () => {
  const { data } = useUserGetAll();

  const { isVisible, handleVisibility } = useVisibility();

  return (
    <Screen>
      <ScreenTitle>Lista de Usuários</ScreenTitle>
      <Table striped>
        <thead>
          <tr>
            <th className="col-4">E-mail</th>
            <th className="col-3 text-center">Senha</th>
            <th className="col-3 text-center">Permissão</th>
            <th className="col-2 text-center ">
              <Button
                variant="outline-dark"
                size="sm"
                onClick={handleVisibility}
              >
                <i className="bi bi-person-plus-fill"></i>
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <UserUpdateForm key={user.id} user={user} />
          ))}
        </tbody>
      </Table>

      {/* {modalUpdateUser.isVisible && modalUpdateUser.selectedData && (
        <ModalUpdate
          closeModal={modalUpdateUser.closeModal}
          user={modalUpdateUser.selectedData}
        />
      )} */}
      {/* {modalCreateUser.isVisible && (
        <ModalCreate closeModal={modalCreateUser.handleVisibility} />
      )} */}
      {isVisible && <ModalCreate handleVisibility={handleVisibility} />}
    </Screen>
  );
};
