import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm py-3">
      <div className="container-fluid">
        <a href="#" className="navbar-brand d-flex">
          Inicio
        </a>
        
        <button className="navbar-toggler" type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#menuNavbar">
        <span className="navbar-toggler-icon"></span>    
        </button>
        
        <div className="collapse navbar-collapse"
        id="menuNavbar"
        >
          <div className="navbar-nav">
            <a href="#" className="nav-link">
              Serviços
            </a>
            <a href="#" className="nav-link">
              Profissionais
            </a>
            <a href="#" className="nav-link">
              Sobre
            </a>
            <a href="#" className="nav-link ms-auto
            disabled">
              Sair
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
