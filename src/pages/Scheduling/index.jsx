import { Link } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { BiCalendarPlus } from "react-icons/bi";
import { Screen, ScreenTitle, } from '../../components';
import { Modal, Button, Row, Card , Col} from 'react-bootstrap';


export const Agendamento = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [specificOptions, setSpecificOptions] = useState([]);
  const [observations, setObservations] = useState('');
  const [agendamentos, setAgendamentos] = useState([]);

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

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleAgendamento = () => {
    const novoAgendamento = {
      service: selectedService,
      options: selectedOption !== '' ? [selectedOption] : [], // Seleciona apenas a opção escolhida
      observations: observations
    };

    setAgendamentos([...agendamentos, novoAgendamento]);
    handleModalClose();
  }

  return (
    <div>
      <NavBar />
      <ScreenTitle text="Agende seu serviço" />

      <p className="mb-3">Clique no botão abaixo para criar um novo agendamento:</p>

      <Button variant="dark" onClick={handleModalShow} className="mb-3 bi bi-plus">
        Agendar 
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title> Agendamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select
            className="form-control mb-3"
            onChange={handleServiceChange}
            value={selectedService}
          >
            <option value="">Tipo de serviço</option>
            <option value="cabelo">Cortes</option>
            <option value="barba">Barba</option>
          </select>
          {specificOptions.length > 0 && (
            <select 
              className="form-control mb-3"
              onChange={handleOptionChange}
              value={selectedOption}
            >
              <option value="">Opções</option>
              {specificOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          <select className="form-control mb-3">
            <option value="">Profissional</option>
            <option value="profissional1">Profissional 1</option>
            <option value="profissional2">Profissional 2</option>
            <option value="profissional3">Profissional 3</option>
            <option value="profissional4">Profissional 4</option>
          </select>
          <input type="date" className="form-control mb-3" />
          <input type="time" className="form-control mb-3" />
          <textarea
            className="form-control mb-3"
            placeholder="Observações"
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleAgendamento}>
            Agendar
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mt-3">
        <Col>
          <h2>Meus Agendamentos</h2>
          {agendamentos.map((agendamento, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title>Serviço: {agendamento.service}</Card.Title>
                {agendamento.options.length > 0 && (
                  <Card.Text>Opção: {agendamento.options[0]}</Card.Text>
                )}
                {agendamento.observations && (
                  <Card.Text>Observações: {agendamento.observations}</Card.Text>
                )}
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default Agendamento;