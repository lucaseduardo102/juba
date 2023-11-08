import { Link, Navigate } from "react-router-dom";
import React from "react";
import logoMarca from "../../assets/images/logoMarca.png";
import { NavBar } from "../../components/NavBar";
import "../../assets/global.css";
import Footer from "../../components/Footer";
import { Loading, Slide } from "../../components";

export const Home = () => {
  // const navegarParaAgendamento = () => {
  //   return <Navigate to="/agendamento" />;
  // };

  return (
    <div>
      <NavBar />
      <section className="hero text-dark text-center py-2">
        <div className="container-hero">
          <div className="row align-items-center justify-content-center">
            <div className="col">
              <img src={logoMarca} alt="Logo" className="logo mx-auto d-block" />
              <h1 className="display-4">Bem-vindo à Barbearia Jubas</h1>
              <p className="lead">
                Sua experiência de barbearia de primeira classe. Venha conhecer nosso serviços!
              </p>
              <br />
              <br />
              <Slide />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};