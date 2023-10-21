import { Link } from 'react-router-dom'
import React from 'react';
import { useState } from "react";
import logoMarca from '../../assets/images/logoMarca.png'; 
import Menu from '../../components/Reutility/menu';

export const Home = () => {
  return (
    <div>
      <section className="hero text-dark text-center py-5">
        <div className="container">
          <img src={logoMarca} alt="Logo" className="logo" />
          <h1 className="display-4">Bem-vindo à Barbearia Jubas</h1>
          <p className="lead">
            Sua experiência de barbearia de primeira classe. Agende seu horário agora!
          </p>
          <a href="/agendamento" className="btn btn-primary btn-lg">
            Agendar Horário
          </a>
        </div>
      </section>

      <section className="about text-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Sobre Nós</h2>
              <p>
                A Barbearia Jubas é conhecida por sua dedicação à qualidade e estilo.
                Nossos profissionais talentosos estão aqui para oferecer a você a melhor
                experiência de barbearia. Conheça nossos serviços e reserve seu horário hoje.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
