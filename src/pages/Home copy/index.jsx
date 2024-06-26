import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Screen, ScreenTitle } from "../../components";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Screen>
      <Container>
        <ScreenTitle className="text-center">
          Bem-vindo à Barbearia Jubas
        </ScreenTitle>
        <p className="text-center">
          Sua experiência de barbearia de primeira classe. Venha conhecer nossos
          serviços!
        </p>
        <Row xs={1} sm={1} md={3} lg={3} className="justify-content-center">
          <Col className="mb-4">
            <Card className="text-center shadow">
              <i className="bi bi-calendar2-check primary-color fs-3 mt-3"></i>
              <Card.Body>
                <Card.Title className="primary-color">Agendamento</Card.Title>
                <Card.Text className="secondary-color">
                  Agende seu horário conosco e desfrute de um serviço
                  personalizado.
                </Card.Text>
                <Button variant="dark" as={Link} to="/agendamento">
                  Agendar
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card className="text-center shadow">
              <i className="bi bi-scissors primary-color fs-3 mt-3"></i>
              <Card.Body>
                <Card.Title className="primary-color">Serviços</Card.Title>
                <Card.Text className="secondary-color">
                  Conheça nossos serviços e se surpreenda com todas as
                  variedades.
                </Card.Text>
                <Button variant="dark" as={Link} to="/lista-de-servicos">
                  Serviços
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card className="text-center shadow">
              <i className="bi bi-info-square primary-color fs-3 mt-3"></i>
              <Card.Body>
                <Card.Title className="primary-color">Sobre</Card.Title>
                <Card.Text className="secondary-color">
                  Conheça a história por trás da nossa missão. Do sonho a
                  realidade
                </Card.Text>
                <Button variant="dark" as={Link} to="/sobre">
                  Sobre nós
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card className="text-center shadow">
              <i className="bi bi-person-circle primary-color fs-3 mt-3"></i>
              <Card.Body>
                <Card.Title className="primary-color">Minha conta</Card.Title>
                <Card.Text className="secondary-color">
                  Acesse e gerencie sua conta para obter uma experiência
                  personalizada.
                </Card.Text>
                <Button variant="dark" as={Link} to="/minha-conta">
                  Minha conta
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card className="text-center shadow">
              <i className="bi bi-calendar-check primary-color fs-3 mt-3"></i>
              <Card.Body>
                <Card.Title className="primary-color">
                  Meus agendamentos
                </Card.Title>
                <Card.Text className="secondary-color">
                  Visualize e gerencie seus agendamentos de forma fácil e
                  rápida.
                </Card.Text>
                <Button variant="dark" as={Link} to="/meus-agendamentos">
                  Meus agendamentos
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card className="text-center shadow">
              <i className="bi bi-calendar-check primary-color fs-3 mt-3"></i>
              <Card.Body>
                <Card.Title className="primary-color">Gerenciamento</Card.Title>
                <Card.Text className="secondary-color">
                  Visualize e gerencie seus agendamentos de forma fácil e
                  rápida.
                </Card.Text>
                <Button variant="dark" as={Link} to="/gerenciamento">
                  Gerenciamento
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Screen>
  );
};
