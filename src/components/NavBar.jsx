import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../assets/images/logoMarca.png"
import './components.css';

export const NavBar = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm py-3" id="navbar">
        <div className="container-fluid navbar-center">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" style={{ width: "40px", height: "auto" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-items"
            aria-controls="navbar-items"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbar-items">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
            <Link to="/home" className={`nav-link ${location.pathname === "/home" ? 'nav-link-all' : ''}`}>
              Inicio
            </Link>
              </li>
              <li className="nav-item">
              <Link to="/agendamento" className={`nav-link ${location.pathname === "/agendamento" ? 'nav-link-all' : ''}`}>
              Agendamento
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/services" className={`nav-link ${location.pathname === "/services" ? 'nav-link-all' : ''}`}>
              Serviços
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/profissionales" className={`nav-link ${location.pathname === "/profissionales" ? 'nav-link-all' : ''}`}>
              Profissionais
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/users" className={`nav-link ${location.pathname === "/users" ? 'nav-link-all' : ''}`}>
              Usuários
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/about" className={`nav-link ${location.pathname === "/about" ? 'nav-link-all' : ''}`}>
              Sobre
              </Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/"> Sair </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ paddingTop: "20px" }}>
        {children}
      </div>
    </div>
  );
};

export default NavBar;
