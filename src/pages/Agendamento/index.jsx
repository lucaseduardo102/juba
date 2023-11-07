import { Link } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const Agendamento = () => {
  // Estados para controlar a visibilidade dos modais de "Corte de Cabelo" e "Barba"
  const [showCorteModal, setShowCorteModal] = useState(false);
  const [showBarbaModal, setShowBarbaModal] = useState(false);

  // Funções para abrir e fechar os modais de "Corte de Cabelo"
  const openCorteModal = () => setShowCorteModal(true);
  const closeCorteModal = () => setShowCorteModal(false);

  // Funções para abrir e fechar os modais de "Barba"
  const openBarbaModal = () => setShowBarbaModal(true);
  const closeBarbaModal = () => setShowBarbaModal(false);

  return (
    <div>
      <NavBar />
      <div className="container text-center py-5">
        <h1 className="display-4">Agendamento</h1>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Corte de Cabelo</h5>
                <p className="card-text">
                  Descrição do serviço e informações adicionais.
                </p>
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal" // Ativa a funcionalidade modal do Bootstrap
                  data-bs-target="#corteModal" // Define o alvo do modal
                >
                  Detalhes
                </button>
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
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal" // Ativa a funcionalidade modal do Bootstrap
                  data-bs-target="#barbaModal" // Define o alvo do modal
                >
                  Detalhes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para "Corte de Cabelo" */}
      <div
        className="modal fade" // Classe Bootstrap para criar o efeito de modal
        id="corteModal" // ID do modal
        tabIndex="-1"
        aria-labelledby="corteModalLabel" // Rótulo do modal
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="corteModalLabel">
                Detalhes do Corte de Cabelo
              </h5>
              <button
                type="button"
                className="btn-close" // Botão de fechamento do modal
                data-bs-dismiss="modal" // Fecha o modal ao clicar no botão
                aria-label="Close"
                onClick={closeCorteModal}
              ></button>
            </div>
            <div className="modal-body">
              <p>Detalhes dos possíveis cortes de cabelo aqui...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para "Barba" */}
      <div
        className="modal fade" // Classe Bootstrap para criar o efeito de modal
        id="barbaModal" // ID do modal
        tabIndex="-1"
        aria-labelledby="barbaModalLabel" // Rótulo do modal
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="barbaModalLabel">
                Detalhes da Barba
              </h5>
              <button
                type="button"
                className="btn-close" // Botão de fechamento do modal
                data-bs-dismiss="modal" // Fecha o modal ao clicar no botão
                aria-label="Close"
                onClick={closeBarbaModal}
              ></button>
            </div>
            <div className="modal-body">
              <p>Detalhes dos possíveis cortes de barba aqui...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center py-4">
        <Link to="/home" className="btn btn-primary">
          Voltar
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Agendamento;