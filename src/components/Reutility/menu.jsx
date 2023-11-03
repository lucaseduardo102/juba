import React from "react";
import { Link } from "react-router-dom";
import "../LayoutComponents/styles.css"; // Importe seu arquivo CSS de estilo

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gerenciar-usuarios">Gerenciar Usuários</Link>
        </li>
        <li>
          <Link to="/profissionais-disponiveis">Profissionais Disponíveis</Link>
        </li>
        <li>
          <Link to="/marcar-agenda">Marcar Agenda</Link>
        </li>
        <li>
          <Link to="/minha-conta">Minha Conta</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;