import { Card, Col, Table } from "react-bootstrap";
import { TableLine } from "./TableLine";

export function CardItem({ category: { name, specialties } }) {
  const hasSpecialties = specialties?.length !== 0;

  if (hasSpecialties) {
    return (
      <Col>
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Table striped size="sm">
              <thead>
                <TableLine first="Nome" second="Preço" third="Duração" />
              </thead>
              <tbody>
                {specialties?.map(({ id, name, price, timeDuration }) => (
                  <TableLine
                    key={id}
                    first={name}
                    second={price}
                    third={timeDuration}
                  />
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
