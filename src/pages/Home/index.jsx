import React from "react";
import { Screen } from "../../components";

export const Home = () => {
  return (
    <Screen>
      <div className="row">
        <div className="col">
          <h1 className="text-center">Bem-vindo à Barbearia Jubas</h1>
          <p className="text-center">
            Sua experiência de barbearia de primeira classe. Venha conhecer
            nossos serviços!
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <div className="card text-center shadow">
                <i className="bi bi-calendar2-check primary-color fs-3 mt-3"></i>
                <div className="card-body">
                  <h5 className="card-title primary-color">Agendamento</h5>
                  <p className="card-text secondary-color">
                    Agende seu horário conosco e desfrute de um serviço
                    personalizado.
                  </p>
                  <button type="button" className="btn btn-dark">
                    Agendamento
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card text-center shadow">
                <i className="bi bi-scissors primary-color fs-3 mt-3"></i>
                <div className="card-body">
                  <h5 className="card-title primary-color">Serviços</h5>
                  <p className="card-text secondary-color">
                    Conheça nossos serviços e se surpreenda com todas as
                    variedades.
                  </p>
                  <button type="button" className="btn btn-dark">
                    Serviços
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card text-center shadow">
                <i className="bi bi-people-fill primary-color fs-3 mt-3"></i>
                <div className="card-body">
                  <h5 className="card-title primary-color">Sobre</h5>
                  <p className="card-text secondary-color">
                    Venha se divertir conhecendo um pouquinho mais sobre a nossa
                    historia.
                  </p>
                  <button type="button" className="btn btn-dark">
                    Sobre nós
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};
