import { Link, Navigate } from "react-router-dom";
import React from "react";
import { NavBar } from "../../components/NavBar";
import "../../assets/global.css";
import Footer from "../../components/Footer";
import { ScreenTitle } from "../../components";

export const Services = () => {
  return (
    <>
      <NavBar />
      <ScreenTitle text="Conheça abaixo nossos serviços" />
      <div className="col-12 col-md-10 offset-md-1">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="card text-center">
                  <i className="bi bi-scissors primary-color"></i>
                    <div className="card-body">
                      <h5 className="card-title primary-color">Cortes</h5>
                      <p className="card-text secondary-color">Faça seu JUBA mais feliz com nossas opções de cortes!
                      </p>
                      <button type="button" class="btn btn-dark">Ver mais</button>
                    </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card text-center">
                  <i className="bi bi-lightning-fill primary-color"></i>
                    <div className="card-body">
                      <h5 className="card-title primary-color">Barba</h5>
                      <p className="card-text secondary-color">Sinta-se confiante com um visual impecável e elegante!
                      </p>
                      <button type="button" class="btn btn-dark">Ver mais</button>
                    </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card text-center">
                  <i className="bi bi-handbag-fill primary-color"></i>
                    <div className="card-body">
                      <h5 className="card-title primary-color">Produtos</h5>
                      <p className="card-text secondary-color">Explore nossa linha exclusiva de produtos premium JUBA!
                      </p>
                      <button type="button" class="btn btn-dark">Ver mais</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
      ; ;
      <Footer />
    </>
  );
};
