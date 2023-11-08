import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import Footer from '../../components/Footer';
import aboutImage from '../../assets/images/aboutImage.jpg';

export const About = () => {
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <div className="row mt-4">
          <div className="col-md-6">
            <img
              src={aboutImage}
              alt="Barbearia Interior"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h5>Sobre a nossa Barbearia</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Na nossa barbearia, estamos comprometidos em oferecer os
                  melhores serviços de cuidados pessoais da cidade. Nossos
                  experientes barbeiros se dedicam a proporcionar a você um
                  corte de cabelo de alta qualidade e uma experiência de
                  cuidados excepcionais.
                </p>
                <p className="card-text">
                  Quer você precise de um corte de cabelo clássico ou estilo
                  moderno, estamos prontos para atender às suas necessidades.
                  Nossa equipe amigável e profissional está aqui para ajudar
                  você a se sentir e parecer o seu melhor.
                </p>
                <p className="card-text">
                  Venha nos visitar hoje e experimente o tratamento de barbearia
                  definitivo. Estamos ansiosos para recebê-lo e garantir que
                  você saia daqui satisfeito.
                </p>
                <Link to="/agendamento" className="btn btn-primary">
                  Agendar Agora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};