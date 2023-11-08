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
        className="modal fade"
        id="corteModal"
        tabIndex="-1"
        aria-labelledby="corteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          {" "}
          {/* Modal grande */}
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="corteModalLabel">
                Tipos de Corte de Cabelo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Aqui estão alguns dos nossos estilos de corte de cabelo:</p>
              <ul>
                <li>Corte Clássico</li>
                <li>Corte Moderno</li>
                <li>Corte Somente com tesoura</li>
                <li>Corte Undercut</li>
                <li>Corte Navalhado</li>
              </ul>
              <p>
                Oferecemos uma variedade de estilos para atender às suas
                necessidades de aparência.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para "Barba" */}
      <div
        className="modal fade"
        id="barbaModal"
        tabIndex="-1"
        aria-labelledby="barbaModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="barbaModalLabel">
                Serviços de Barba
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Oferecemos uma variedade de serviços de barba para manter seu
                visual impecável:
              </p>
              <ul>
                <li>Barba Tradicional</li>
                <li>Barba Desenhada</li>
                <li>Barba Curta</li>
                <li>Barba Longa</li>
              </ul>
              <p>
                Nossa equipe está pronta para cuidar da sua barba e mantê-la em
                perfeitas condições.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
        <Link to="/home" className="btn btn-primary ">
          Voltar
        </Link>
    </div>
  );
};

export default Agendamento;
