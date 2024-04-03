import { Link, Navigate } from "react-router-dom";
import React from "react";
import logoMarca from "../../assets/images/logoMarca.png";
import { NavBar } from "../../components/NavBar";
import "../../assets/global.css";
import Footer from "../../components/Footer";
import { Loading, Slide } from "../../components";
import '../Home/index.css'

export const Home = () => {
  // const navegarParaAgendamento = () => {
  //   return <Navigate to="/agendamento" />;
  // };

  return (
    <>
      <NavBar />

         <div class="container-lg">
    <div class="row">
        <div class="col">
            <h1 class="text-center">Bem-vindo à Barbearia Jubas</h1>
            <p class="text-center">Sua experiência de barbearia de primeira classe. Venha conhecer nossos serviços!</p>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-12 col-md-10">
            <div class="row">
                <div class="col-12 col-md-4 mb-4">
                    <div class="card text-center shadow">
                        <i class="bi bi-calendar2-check primary-color fs-3 mt-3"></i>
                        <div class="card-body">
                            <h5 class="card-title primary-color">Agendamento</h5>
                            <p class="card-text secondary-color">Agende seu horário conosco e desfrute de um serviço personalizado.</p>
                            <button type="button" class="btn btn-dark">Agendamento</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <div class="card text-center shadow">
                        <i class="bi bi-scissors primary-color fs-3 mt-3"></i>
                        <div class="card-body">
                            <h5 class="card-title primary-color">Serviços</h5>
                            <p class="card-text secondary-color">Conheça nossos serviços e se surpreenda com todas as variedades.</p>
                            <button type="button" class="btn btn-dark">Serviços</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <div class="card text-center shadow">
                        <i class="bi bi-people-fill primary-color fs-3 mt-3"></i>
                        <div class="card-body">
                            <h5 class="card-title primary-color">Sobre</h5>
                            <p class="card-text secondary-color">Venha se divertir conhecendo um pouquinho mais sobre a nossa historia.</p>
                            <button type="button" class="btn btn-dark">Sobre nós</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


      <Footer />
    </>
  );
};