import { Link } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { BiCalendarPlus } from "react-icons/bi";
import { Screen, ScreenTitle } from "../../components";
import {
  Modal,
  Form,
  Button,
  Row,
  Card,
  Col,
  Toast,
  Spinner,
} from "react-bootstrap";
import { useCategoryGetAll } from "../../domain/CategoryDomain/categoryUseCases";
import { useEmployeeGetAll } from "../../domain/Employee/employeeUseCases";

export function Schedule() {
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState();
  const [observations, setObservations] = useState("");
  const [agendamentos, setAgendamentos] = useState([]);

  const handleCategory = (event) => {
    setSelectedCategoryId(event.target.value);
  };

  const handleSpecialty = (event) => {
    setSelectedSpecialtyId(event.target.value);
  };

  // const handleAgendamento = () => {
  //   const novoAgendamento = {
  //     service: selectedService,
  //     options: selectedSpecialtyId !== "" ? [selectedSpecialtyId] : [], // Seleciona apenas a opção escolhida
  //     observations: observations,
  //   };

  //   setAgendamentos([...agendamentos, novoAgendamento]);
  //   handleModalClose();
  // };

  const { isLoading, data: categories } = useCategoryGetAll();

  const specialties = categories
    ?.filter((category) => category.id == selectedCategoryId)
    .flatMap((category) => category.specialties);


    // criar o hook
    // passar para outro componente
    // listar horários
  // const query = useScheduleGetAll()


  return (
    <div>
      <NavBar />
      <ScreenTitle text="Novo agendamento" />

      {isLoading && <LoadComponent />}

      <Form.Label className="ps-2">Categoria</Form.Label>
      <Form.Select
        className="mb-3"
        value={selectedCategoryId}
        onChange={handleCategory}
      >
        <option value="">Selecione uma categoria</option>
        {categories?.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </Form.Select>

      {specialties && specialties?.length > 1 && (
        <Form.Select
          className="mb-3"
          onChange={handleSpecialty}
          value={selectedSpecialtyId}
        >
          <option value="">Selecione uma especialidade</option>
          {specialties.map((specialty) => (
            <option key={specialty.id} value={specialty.id}>
              {specialty.name}
            </option>
          ))}
        </Form.Select>
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
}

function LoadComponent() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Spinner />
    </div>
  );
}
