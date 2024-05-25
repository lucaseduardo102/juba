import { Button, Card, Col, Row } from "react-bootstrap";
import { Screen, ScreenTitle } from "../../components";
import { Link } from "react-router-dom";

export function BusinessManagement() {
  return (
    <Screen>
      <ScreenTitle className="text-center">
        Gerenciamento da Barbearia
      </ScreenTitle>
      <p className="text-center">
        Sua experiência de barbearia de primeira classe.
      </p>
      <Row xs={1} sm={1} md={3} lg={3} className="justify-content-center">
        <Col className="mb-4">
          <Card className="text-center shadow">
            <i className="bi bi-calendar2 fs-3 mt-3"></i>
            <Card.Body>
              <Card.Title>Atendimentos</Card.Title>
              <Card.Text>Gerencie os atendimentos</Card.Text>
              <Button variant="dark" as={Link} to="/catalogo">
                Atendimentos
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card className="text-center shadow">
            <i className="bi bi-bag fs-3 mt-3"></i>
            <Card.Body>
              <Card.Title>Catálogo</Card.Title>
              <Card.Text>Administre seu catálogo facilmente</Card.Text>
              <Button variant="dark" as={Link} to="/catalogo">
                Catálogo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card className="text-center shadow">
            <i className="bi bi-person-square fs-3 mt-3"></i>
            <Card.Body>
              <Card.Title>Funcionários</Card.Title>
              <Card.Text>Acesse e organize sua equipe</Card.Text>
              <Button variant="dark" as={Link} to="/funcionarios">
                Funcionários
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card className="text-center shadow">
            <i className="bi bi-cart-check fs-3 mt-3"></i>
            <Card.Body>
              <Card.Title>Pagamentos</Card.Title>
              <Card.Text>Gerencie todos os perfis de usuários</Card.Text>
              <Button variant="dark" as={Link} to="/usuarios">
                Usuários
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Screen>
  );
}
