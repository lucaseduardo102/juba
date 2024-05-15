import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { Load, Screen, ScreenTitle } from "../../components";
import { useCategoryGetAll } from "../../domain";
import { useState } from "react";
import { LineUpdate } from "./components/LineUpdate";
import { LineCreate } from "./components/LineCreate";

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
                    <div className="d-flex justify-content-between ">
                      <Card.Title>
                        {name}
                        {/* {true && <Form.Control value={name} />} */}
                      </Card.Title>
                      <i
                        className="bi bi-pencil-square"
                        style={{ fontSize: "1.2rem" }}
                      ></i>
                    </div>
                    <Table striped>
                      <TableHead />
                      <tbody>
                        {specialties?.map((specialty) => (
                          <LineUpdate
                            key={specialty.id}
                            specialty={specialty}
                          />
                        ))}
                        <LineCreate />
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            ))}
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
