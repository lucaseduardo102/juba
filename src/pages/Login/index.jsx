import { Link } from "react-router-dom";
import React, { useState } from "react";
import { repository } from "../../repositories";
import "../../assets/global.css";

export const Login = () => {
  const { user, signIn, isLoading, isError } = repository.useUserSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    signIn(email, password);
    if (user.id) {
      //envia para a tela home
      console.log("tela home");
    }
  }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <div className="logoTitle">
            <h1 className="title-text">Juba's Barbearia</h1>
            <img
              src={require("../../assets/images/logoMarca.png")}
              alt="Logo"
              className="logo"
            />
            {isError && (
              <p className="error-message">{"E-mail e/ou Senha Incorretos"}</p>
            )}
          </div>

          <form>
            <div className="field-container">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={email ? "has-val input" : "input"}
                placeholder="Email"
                maxLength={35} // Defina o máximo de caracteres permitidos
              />
            </div>
            <div className="password-container">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={password !== "" ? "has-val input" : "input"}
                placeholder="Senha"
                required
              />
            </div>
            <div className="button-container">
              <button
                className="btn btn-primary custom-button"
                type="button"
                onClick={handleLogin}
              >
                Entrar
              </button>
            </div>
            <p className="text-center">
              <Link to="#">Esqueci minha senha</Link>
              <p></p>
              <Link className="create-account" to="/Register">
                Não possui uma conta? Cadastre-se
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
