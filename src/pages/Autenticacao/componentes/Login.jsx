import { Link, Navigate } from "react-router-dom";
import React, { useState } from "react";
import { repository } from "../../../repositories";

export const Login = () => {
  const { user, signIn, isLoading, isError } = repository.useUserSignIn();
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  function handleUserFormState(key, value) {
    setUserForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleLogin() {
    signIn(userForm.email, userForm.password);
  }

  // NAVEGAR PARA HOME
  if (user.id) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="box-autenticacao-login">
      <form>
      <div className="logoTitleCad">
        <h1 className="title-text"> Login </h1>
      </div>
      <p></p>
        <div className="field-container">
          <input
            className={userForm.email !== "" ? "has-val input" : "input"}
            type="email"
            value={userForm.email}
            onChange={(e) => handleUserFormState("email", e.target.value)}
            maxLength={35} // Defina o máximo de caracteres permitidos
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>
        <div className="field-container">
          <input
            className={userForm.password !== "" ? "has-val input" : "input"}
            type="password"
            value={userForm.password}
            onChange={(e) => handleUserFormState("password", e.target.value)}
            required
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>
        {isError && (
          <p className="error-message">{"E-mail e/ou Senha Incorretos"}</p>
        )}
        <div className="button-container">
          <button className="custom-button" type="button" onClick={handleLogin}>
            Entrar
          </button>
        </div>
        <p className="text-center">
          <Link to="#">Esqueci minha senha</Link>
        </p>
      </form>
    </div>
  );
};
