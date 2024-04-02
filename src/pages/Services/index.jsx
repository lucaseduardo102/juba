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
      <ScreenTitle text="Serviços" />
      <div className="container" style={{ marginTop: "35px" }}>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cortes</h5>
                <p className="card-text">
                  Faça seu JUBA mais feliz com nossas opções de cortes!
                </p>
                <Link to="/agendar/corte" className="btn btn-primary">
                  Agendar
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Barba</h5>
                <p className="card-text">
                  Sinta-se confiante com um visual impecável e elegante!
                </p>
                <Link to="/agendar/barba" className="btn btn-primary">
                  Agendar
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Produtos</h5>
                <p className="card-text">
                  Explore nossa linha exclusiva de produtos premium JUBA!{" "}
                </p>
                <Link to="/agendar/penteado" className="btn btn-primary">
                  Agendar
                </Link>
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
