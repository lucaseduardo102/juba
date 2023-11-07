import { Link } from "react-router-dom";
import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const Agendamento = () => {
  return (
    <div className="agendamento-page">
      <NavBar />
      <div className="container">
        <h1 className="text-center mt-4">Agendamento</h1>

        <section className="my-4">
          <h2>Escolher Serviços</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Corte de Cabelo</h5>
                  <p className="card-text">
                    Descrição do serviço e informações adicionais.
                  </p>
                  <button className="btn btn-primary">Marcar</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Barba</h5>
                  <p className="card-text">
                    Descrição do serviço e informações adicionais.
                  </p>
                  <button className="btn btn-primary">Marcar</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-4">
          <h2>Profissionais Disponíveis</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Barbeiro 1</h5>
                  <p className="card-text">
                    Descrição do profissional e informações adicionais.
                  </p>
                  <button className="btn btn-primary">
                    Agendar com este Profissional
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Barbeiro 2</h5>
                  <p className="card-text">
                    Descrição do profissional e informações adicionais.
                  </p>
                  <button className="btn btn-primary">
                    Agendar com este Profissional
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center mt-4">
        <Link to="/home" className="btn btn-primary">
          Voltar
        </Link>
      </div>
      <Footer/>
    </div>
  );
};