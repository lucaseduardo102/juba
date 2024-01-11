import { Link, Navigate } from "react-router-dom";
import React from "react";
import logoMarca from "../../assets/images/logoMarca.png";
import { Screen, ScreenTitle } from "../../components/";
import "../../assets/global.css";
import Footer from "../../components/Footer";

export const Users = () => {

  return (
    <Screen>
      <div className="d-flex justify-content-end">

      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
      </div>
      <div className="col-12">
        
        <ScreenTitle text="Lista de Usuários" />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">João da Silva</td>
              <td>joao.silva@example.com</td>
              <td>
                <Link to="/users/editar/1" className="btn btn-primary">Editar</Link>
                <Link to="/users/remover/1" className="btn btn-danger">Remover</Link>
              </td>
            </tr>
            <tr>
              <td scope="row">Maria da Silva</td>
              <td>maria.silva@example.com</td>
              <td>
                <Link to="/users/editar/2" className="btn btn-primary">Editar</Link>
                <Link to="/users/remover/2" className="btn btn-danger">Remover</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Screen>
  );
};