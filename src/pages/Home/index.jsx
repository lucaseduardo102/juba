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
    <>
      <NavBar />

          <div className="container-lg">
                      <div className="col">
              <h1 className="text-center">Bem-vindo à Barbearia Jubas</h1>
              <p className="text-center">
                Sua experiência de barbearia de primeira classe. Venha conhecer nosso serviços!
              </p>
              <Slide />
            </div>
          </div>
      <Footer />
    </>
  );
};