import React from "react";
import { Icon, Wpp } from "./Icon";
import './components.css';

const Footer = () => {
  return (
    <div>
      <div className="spacer" style={{ position: "fixed", bottom: 0, width: "100%", visibility: "hidden" }}></div>
      <footer className="p-1 bg-dark text-light text-center fixed-bottom">
        <p className="footer-text">
          Entre em contato conosco clicando no icone: {" "}
          <a href="https://api.whatsapp.com/send?phone=61999735264">
        <Wpp name="wpp" size={25} />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;