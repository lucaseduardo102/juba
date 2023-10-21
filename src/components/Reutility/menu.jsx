import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav id="sidebar" className="bg-light">
      <ul className="list-unstyled">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/servicos">Serviços</Link>
        </li>
        <li>
          <Link to="/profissionais">Profissionais</Link>
        </li>
        <li>
          <Link to="/gerenciar-usuarios">Gerenciar Usuários</Link>
        </li>
        <li>
          <Link to="/sair">Sair</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;