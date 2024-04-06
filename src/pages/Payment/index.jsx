import React from "react";
import { Link } from "react-router-dom";
import { Screen, ScreenTitle } from "../../components";
import './index.css'

export function Payment() {
  return (
    <Screen>
      <div className="container">
        <ScreenTitle>Finalizar Pagamento</ScreenTitle>

        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="pagamento-title">Resumo do Pedido</h5>
                <p className="pagamento-text">Subtotal: R$ 99.99</p>
                <p className="pagamento-text">Frete: R$ 10.00</p>
                <p className="pagamento-text">Total: R$ 109.99</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="pagamento-title">Forma de Pagamento</h5>
                <form>
                  <div className="mb-3">
                    <label htmlFor="pagamento-creditCardNumber" className="pagamento-label">Número do Cartão</label>
                    <input type="text" className="pagamento-control" id="pagamento-creditCardNumber" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pagamento-expirationDate" className="pagamento-label">Data de Expiração</label>
                    <input type="text" className="pagamento-control" id="pagamento-expirationDate" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pagamento-cvv" className="pagamento-label">CVV</label>
                    <input type="text" className="pagamento-control" id="pagamento-cvv" />
                  </div>
                  <button type="submit" className="btn btn-primary">Finalizar Pagamento</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
}
