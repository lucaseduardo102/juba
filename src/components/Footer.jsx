import React from "react";
import { Icon, Wpp } from "./Icon";

const Footer = () => {
  return (
    <div>
      <div className="spacer" style={{ height: "100px", visibility: "hidden" }}></div>
      <footer className="p-1 bg-dark text-light text-center fixed-bottom">
        <p>
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
