import React from 'react';
import { Link } from 'react-router-dom';
import { Screen, ScreenTitle, } from '../../components';
import Footer from '../../components/Footer';
import aboutImage from '../../assets/images/aboutImage.jpg';


export function About () {
  return (
    <Screen>
        <div className='container-lg'>
              <ScreenTitle text='Sobre a nossa barbearia' />
              
              <div className='mx-5'>
              <p className="mt-5">
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
              <div className="d-flex justify-content-center mt-5">

              <Link to="/agendamento" className="btn btn-primary">
                Agendar Agora
              </Link>
            </div>
            </div>

            </div>
    </Screen>
  );
};