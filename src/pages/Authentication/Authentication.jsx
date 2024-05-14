import { SignUp } from "./componentes/SignUp";
import { SignIn } from "./componentes/SignIn";
import "../../assets/global.css";
import { Screen, ScreenTitle, Toast, WhatsApp } from "../../components";
import { Col, Container, Row } from "react-bootstrap";

export function Authentication() {
  return (
    <Container
      fluid="sm"
      className="bg-body-tertiary border rounded shadow b-1 mt-5 p-5 "
    >
      <Toast />
      <WhatsApp />
      <div className="text-center" style={{ marginBottom: 40 }}>
        <ScreenTitle>Jubas Barbearia</ScreenTitle>
        <img
          style={{
            height: 150,
            padding: 2,
            borderRadius: 10,
          }}
          src={require("../../assets/images/logoMarca.png")}
          alt="logo"
        ></img>
      </div>
      <Row xs={1} sm={1} lg={2}>
        <Col md={6}>
          <SignUp />
        </Col>
        <Col md={6}>
          <SignIn />
        </Col>
      </Row>
    </Container>
  );
}
