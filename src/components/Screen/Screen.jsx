import { Container } from "react-bootstrap";
import { NavBar } from "../NavBar/NavBar";
import { Toast } from "../Toast/Toast";
import { WhatsApp } from "../WhatsApp/WhatsApp";

export function Screen({ children, ...props }) {
  return (
    <>
      <NavBar />
      <Toast />
      <Container fluid="lg" {...props}>
        {children}
      </Container>
      <WhatsApp />
    </>
  );
}
