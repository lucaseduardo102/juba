export function Logo() {
    return (
      <div className="logo-title">
        <h1 className="title-text">Jubas Barbearia</h1>
        <img
          src={require("../../../assets/images/logoMarca.png")}
          alt="Logo"
          className="logo"
        />
      </div>
    );
  }