import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../../assets/global.css";
import { Screen, ScreenTitle } from "../../components";

export const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <Screen>
      <ScreenTitle>Catálogo de Serviços</ScreenTitle>
      <div className="col-12 col-md-10 offset-md-1">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card text-center">
              <i className="bi bi-lightning-fill primary-color"></i>
              <div className="card-body">
                <h5 className="card-title primary-color">Categorias</h5>
                <p className="card-text secondary-color">
                  Conheça nossas opções de categorias e se surpreenda!
                </p>
                <Button
                  variant="dark"
                  onClick={() => handleShowModal("categories")}
                >
                  Ver mais
                </Button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card text-center">
              <i className="bi bi-scissors primary-color"></i>
              <div className="card-body">
                <h5 className="card-title primary-color">Serviços</h5>
                <p className="card-text secondary-color">
                  Faça seu cabelo mais feliz com nossas opções de serviços!
                </p>
                <Button
                  variant="dark"
                  onClick={() => handleShowModal("services")}
                >
                  Ver mais
                </Button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card text-center">
              <i className="bi bi-handbag-fill primary-color"></i>
              <div className="card-body">
                <h5 className="card-title primary-color">Produtos</h5>
                <p className="card-text secondary-color">
                  Explore nossa linha exclusiva de produtos premium!
                </p>
                <Button
                  variant="dark"
                  onClick={() => handleShowModal("products")}
                >
                  Ver mais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modais */}
      {/* Modal para categorias */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Categorias</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Conteúdo específico para categorias */}
          {modalContent === "categories" && (
            <>
              <p>Aqui estão algumas das nossas categorias:</p>
              <ul>
                <li>Corte de cabelo masculino</li>
                <li>Corte de cabelo feminino</li>
                <li>Coloração de cabelo</li>
                <li>Tratamentos capilares</li>
                <li>Barbearia</li>
              </ul>
            </>
          )}
        </Modal.Body>
      </Modal>

      {/* Modal para serviços */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Serviços</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Conteúdo específico para serviços */}
          {modalContent === "services" && (
            <>
              <p>Aqui estão alguns dos serviços que oferecemos:</p>
              <ul>
                <li>Corte de cabelo</li>
                <li>Barba completa</li>
                <li>Coloração de cabelo</li>
                <li>Tratamento de cabelo</li>
                <li>Penteado para ocasiões especiais</li>
              </ul>
            </>
          )}
        </Modal.Body>
      </Modal>

      {/* Modal para produtos */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>incluir texto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Conteúdo específico para produtos */}
          {modalContent === "products" && (
            <>
              <p>Aqui estão alguns dos nossos produtos premium:</p>
              <ul>
                <li>Shampoo para cabelo</li>
                <li>Condicionador nutritivo</li>
                <li>Máscara de hidratação</li>
                <li>Spray modelador</li>
                <li>Óleo de barba</li>
              </ul>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Screen>
  );
};
