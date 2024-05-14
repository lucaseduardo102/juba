import React from "react";
import { Link } from "react-router-dom";
import { Screen, ScreenTitle } from "../../components";

export function About() {
  return (
    <Screen>
      <div className="container-lg">
        <ScreenTitle>Conheça nossa historia</ScreenTitle>
        <div className="mx-5">
          <p className="mt-5">
            A JUBA nasceu do sonho de dois jovens desenvolvedores que iniciaram
            sua carreira enquanto ainda cursavam a faculdade. Cansados do
            atendimento demorado e convencional em barbearias, eles decidiram
            mudar essa realidade. Inspirados por um projeto de conclusão de
            curso, iniciaram e finalizaram o projeto JUBA a fim de ajudar
            estabelecimentos/empreendedores.
          </p>
          <p className="card-text">
            Comprometidos em proporcionar a melhor experiência de agendamento,
            os fundadores da JUBA desenvolveram esse sistema amigavel para
            somar.
          </p>
          <p className="card-text">
            Seja um corte de cabelo clássico ou moderno, estamos prontos para
            atender às suas necessidades. Nossa equipe está comprometida em
            proporcionar uma experiência incrivel. Agende um serviço hoje mesmo
            e desfrute dos recursos do sistema JUBA. Estamos ansiosos para te
            conhecer e receber um feedback.
          </p>
          <div className="d-flex justify-content-center mt-3">
            <Link to="/services" className="btn btn-dark">
              Conhecer serviços
            </Link>
          </div>
        </div>
      </div>
    </Screen>
  );
}
