import React from "react";
import { Link } from "react-router-dom";
import { Screen, ScreenTitle } from "../../components";
import "./index.css"

export function ShoppingCart() {
  return (
    <Screen>
      <ScreenTitle>Carrinho de Compras</ScreenTitle>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Produto" />
              <div className="card-body">
                <h5 className="card-title">Nome do Produto</h5>
                <p className="card-text">Descrição do produto.</p>
                <p className="card-text"><small className="text-muted">Preço: R$ 19.99</small></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Produto" />
              <div className="card-body">
                <h5 className="card-title">Nome do Produto</h5>
                <p className="card-text">Descrição do produto.</p>
                <p className="card-text"><small className="text-muted">Preço: R$ 29.99</small></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Produto" />
              <div className="card-body">
                <h5 className="card-title">Nome do Produto</h5>
                <p className="card-text">Descrição do produto.</p>
                <p className="card-text"><small className="text-muted">Preço: R$ 39.99</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="continue-shopping-button">
        <Link to="/payment" className="btn btn-primary">Ir para pagamento</Link>
      </div>
    </Screen>
  );
}