import { Link } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Screen, ScreenTitle, } from '../../components';
import { Modal, Button } from 'react-bootstrap';

export const Agendamento = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [specificOptions, setSpecificOptions] = useState([]);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);

    // Define as opções específicas com base na escolha do serviço
    if (event.target.value === 'cabelo') {
      setSpecificOptions([
        "Cortes tradicionais",
        "Degrade",
        "Mid fade",
        "Low fade em V",
        "Moicano",
        "Militar"
      ]);
    } else if (event.target.value === 'barba') {
      setSpecificOptions([
        "Barba completa",
        "Aparar",
        "Retirar barba"
      ]);
    } else {
      setSpecificOptions([]);
    }
  }

  return (
    <div>
      <NavBar />
      <ScreenTitle text='Agendamento' />
      
      <Button variant="primary" onClick={handleModalShow} className="my-3">
        Novo agendamento
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Novo Agendamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select className="form-control mb-3" onChange={handleServiceChange} value={selectedService}>
            <option value="">Tipo de serviço</option>
            <option value="cabelo">Cortes</option>
            <option value="barba">Barba</option>
          </select>
          {specificOptions.length > 0 &&
            <select className="form-control mb-3">
              {specificOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          }
          <select className="form-control mb-3">
            <option value="">Profissional</option>
            <option value="profissional1">Profissional 1</option>
            <option value="profissional2">Profissional 2</option>
            <option value="profissional3">Profissional 3</option>
            <option value="profissional4">Profissional 4</option>
          </select>
          <input type="date" className="form-control mb-3" />
          <input type="time" className="form-control mb-3" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Agendar
          </Button>
        </Modal.Footer>
      </Modal>
      
      <Footer />
    </div>
  );
};

export default Agendamento;
