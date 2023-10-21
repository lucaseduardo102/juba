import { Link } from 'react-router-dom';
import React from 'react';

export const Agendamento = () => {
  return (
    <div style={{ background: '#CCCED9', minHeight: '100vh', padding: '20px' }}>
      <div className="container">
        <h1 className="text-center mt-4">Agendamento</h1>

        {/* Escolher Serviços */}
        <section className="my-4">
          <h2>Escolher Serviços</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Corte de Cabelo</h5>
                  <p className="card-text">Descrição do serviço e informações adicionais.</p>
                  <button className="btn btn-primary">Marcar</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Barba</h5>
                  <p className="card-text">Descrição do serviço e informações adicionais.</p>
                  <button className="btn btn-primary">Marcar</button>
                </div>
              </div>
            </div>
            {/* Adicione mais serviços conforme necessário */}
          </div>
        </section>

        {/* Profissionais Disponíveis */}
        <section className="my-4">
          <h2>Profissionais Disponíveis</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Barbeiro 1</h5>
                  <p className="card-text">Descrição do profissional e informações adicionais.</p>
                  <button className="btn btn-primary">Agendar com este Profissional</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Barbeiro 2</h5>
                  <p className="card-text">Descrição do profissional e informações adicionais.</p>
                  <button className="btn btn-primary">Agendar com este Profissional</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Botão "Voltar" para a página /home */}
      <div className="text-center mt-4">
        <Link to="/home" className="btn btn-primary">
          Voltar
        </Link>
      </div>
    </div>
  );
}

export default Agendamento;