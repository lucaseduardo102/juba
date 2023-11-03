import { useState } from "react";

export function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="box-autenticacao-cadastro">
    <form onSubmit={handleRegister}>
      <div className="logoTitleCad">
        <h1 className="title-text"> Cadastre-se </h1>
      </div>
      <p></p>
      <div className="field-container">
        <input
          className={email !== "" ? "has-val input" : "input"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={35} // Defina o máximo de caracteres permitidos para o email
        />
        <span className="focus-input" data-placeholder="Email"></span>
      </div>
      <div className="field-container">
        <input
          className={password !== "" ? "has-val input" : "input"}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Senha"></span>
      </div>
      <div className="button-container">
        <button type="submit" className="custom-button">
          Cadastrar
        </button>
      </div>
    </form>
</div>
  );
}
