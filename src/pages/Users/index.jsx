import { Screen, ScreenTitle } from "../../components/";
import { useVisibility } from "../../hooks/useVisibility";
import { useUserGetAll } from "../../domain";
import { Button, Table } from "react-bootstrap";
import { UserUpdate } from "./components/UserUpdate";
import { UserCreate } from "./components/UserCreate";

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
            <UserUpdate key={user.id} user={user} />
          ))}
        </tbody>
      </Table>

      {isVisible && <UserCreate handleVisibility={handleVisibility} />}
    </Screen>
  );
};
