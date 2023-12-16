import { Link, Navigate } from "react-router-dom";
import React from "react";
import logoMarca from "../../assets/images/logoMarca.png";
import { NavBar } from "../../components/NavBar";
import "../../assets/global.css";
import Footer from "../../components/Footer";

export const Users = () => {

  return (
    <div className="container-fluid">
      <NavBar />
      <div className="row py-5">
        <div className="col-12">
          <h1 className="display-4">Gerenciamento de Usuários</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2>Lista de Usuários</h2>
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
      </div>
      <Footer />
    </div>
  );
};