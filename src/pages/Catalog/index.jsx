import { Card, Col, Row, Table } from "react-bootstrap";
import { Load, Screen, ScreenTitle } from "../../components";
import { useCategoryGetAll } from "../../domain";
import { LineUpdate } from "./components/LineUpdate";
import { LineCreate } from "./components/LineCreate";
import { CardTitle } from "./components/CardTitle";
import { CardCreateCategory } from "./components/CardCreateCategory";

export function Catalog() {
  const { data: categories, isError, isLoading } = useCategoryGetAll();

  return (
    <Screen>
      {isLoading || isError ? (
        <Load />
      ) : (
        <>
          <ScreenTitle>Catálogo</ScreenTitle>
          <Row className="m-5 gap-4" xs={1} sm={1} md={1} xl={1} xxl={1}>
            {categories?.map(({ id, name, specialties }) => (
              <Col className="p5" key={id}>
                <Card style={{ minWidth: 550 }}>
                  <Card.Body>
                    <CardTitle category={{ id, name }} />
                    <Table striped>
                      <TableHead />
                      <tbody>
                        {specialties?.map((specialty) => (
                          <LineUpdate
                            key={specialty.id}
                            specialty={specialty}
                          />
                        ))}
                        <LineCreate categoryId={id} />
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <CardCreateCategory />
          </Row>
        </>
      )}
    </Screen>
  );
}

function TableHead() {
  return (
    <thead>
      <tr>
        <th className="col-5">Nome</th>
        <th className="col-3 text-center">Preço</th>
        <th className="col-3 text-center">Duração</th>
        <th className="col-1 text-center"></th>
      </tr>
    </thead>
  );
}
