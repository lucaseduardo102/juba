import React from "react";
import { Link } from "react-router-dom";
import { Screen, ScreenTitle } from "../../components";
import Footer from "../../components/Footer";
import aboutImage from "../../assets/images/aboutImage.jpg";

export function About() {
  return (
    <Screen>
      <div className="container-lg">
        <ScreenTitle text="Sobre a nossa barbearia" />

        <div className="mx-5">
          <p className="mt-5">
            Na JUBA, comprometemo-nos a fornecer os melhores serviços de
            cuidados pessoais da cidade. Nossos experientes barbeiros estão
            dedicados a proporcionar a você um corte de cabelo impecável e uma
            experiência de cuidados excepcionais.
          </p>
          <p className="card-text">
            Seja um corte de cabelo clássico ou moderno, estamos prontos para
            atender às suas necessidades. Nossa equipe amigável e profissional
            está aqui para ajudar você a se sentir e parecer incrível.
          </p>
          <p className="card-text">
            Venha nos visitar hoje mesmo e desfrute da experiência de barbearia
            definitiva na JUBA. Estamos ansiosos para recebê-lo e garantir que
            você saia daqui totalmente satisfeito.
          </p>
          <div className="d-flex justify-content-center mt-5">
            <Link to="/services" className="btn btn-primary">
              Conhecer serviços
            </Link>
          </div>
        </div>
      </div>
    </Screen>
  );
}
