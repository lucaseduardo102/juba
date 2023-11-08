import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm py-3">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand d-flex">
          Inicio
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuNavbar">
          <div className="navbar-nav">
          <Link to="/agendamento" className="nav-link">
              Agendamento
            </Link>
            <Link to="/services" className="nav-link">
              Serviços
            </Link>
            <Link to="/profissionales" className="nav-link">
              Profissionais
            </Link>
            <Link to="/users" className="nav-link">
              Gerenciar usuários
            </Link>
            <Link to="/about" className="nav-link">
              Sobre
            </Link>
            <a href="#" className="nav-link ms-auto disabled">
              Sair
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
