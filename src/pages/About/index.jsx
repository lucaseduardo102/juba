import React from "react";
import { Link } from "react-router-dom";
import { Screen, ScreenTitle } from "../../components";
import Footer from "../../components/Footer";
import aboutImage from "../../assets/images/aboutImage.jpg";

export function About() {
  return (
    <Screen>
      <div className="container-lg">
        <ScreenTitle text="Conheça nossa historia" />
        <div className="mx-5">
          <p className="mt-5">
            A JUBA nasceu do sonho de dois jovens desenvolvedores que iniciaram sua carreira enquanto ainda cursavam a faculdade. Cansados do atendimento demorado e convencional em barbearias, eles decidiram mudar essa realidade. Inspirados pela sua própria experiência, expandiram seu projeto inicial e comercializaram o  sistema a fim de ajudar empreendedores.
          </p>
          <p className="card-text">
            Comprometidos em proporcionar a melhor experiência de cuidados pessoais da cidade, os fundadores da JUBA desenvolveram esse sistema para somar. Agora, nossos experientes barbeiros estão dedicados a proporcionar a você um corte de cabelo impecável e uma experiência de cuidados excepcionais.
          </p>
          <p className="card-text">
            Seja um corte de cabelo clássico ou moderno, estamos prontos para atender às suas necessidades. Nossa equipe amigável e profissional está aqui para ajudar você a se sentir e parecer incrível. Venha nos visitar hoje mesmo e desfrute da experiência de barbearia definitiva na JUBA. Estamos ansiosos para recebê-lo e garantir que você saia daqui totalmente satisfeito.
          </p>
          <div className="d-flex justify-content-center mt-3">
            <Link to="/services" className="btn btn-primary">
              Conhecer serviços
            </Link>
          </div>
        </div>
      </div>
    </Screen>
  );
}
