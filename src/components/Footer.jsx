import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="spacer" style={{ height: "100px", visibility: "hidden" }}></div>
      <footer className="p-1 bg-dark text-light text-center fixed-bottom">
        <p>
          Entre em contato conosco via{" "}
          <a href="https://api.whatsapp.com/send?phone=61999735264">
            WhatsApp <i className="fa fa-whatsapp"
            aria-hidden="true"></i>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
