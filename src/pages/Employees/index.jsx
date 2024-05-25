import { Table } from "react-bootstrap";
import { Load, Screen, ScreenTitle } from "../../components";
import { useEmployeeGetAll } from "../../domain";
import { TableLine } from "./components/TableLine";

export function Employees() {
  const {
    data: employees,
    isLoading,
    isError,
  } = useEmployeeGetAll({ available: false });

  return (
    <Screen>
      {isLoading || isError ? (
        <Load />
      ) : (
        <>
          <ScreenTitle>Funcionários</ScreenTitle>

          <Table striped>
            <thead>
              <tr>
                <th className="col-5">Nome</th>
                <th className="col-4 text-center">Jornada de Trabalho</th>
                <th className="col-1 text-center">Especialidades</th>
                <th className="col-2 text-center"></th>
              </tr>
            </thead>

            <tbody>
              {employees?.map((employee) => (
                <TableLine key={employees.id} employee={employee} />
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Screen>
  );
}
