import { useState } from "react";
import { useUserCreate } from "../../../domain";
import { Alert } from "../../../components";
import { Navigate } from "react-router-dom";

export function Cadastro() {
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const { status, fetchData } = useUserCreate(
    userForm.email,
    userForm.password,
    3
  );

  function handleUserFormState(key, value) {
    setUserForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleRegister() {
    fetchData();
  }

  function StatusAlert() {
    let message = null;
    let type = 'danger'
    if (status === 201) {
      message = "Usuário criado com sucesso.";
      type='success'
    }
    if (status === 401) {
      message = "Usuário já existe!";
    }
    if (status === 500) {
      message = "Ocorreu um erro inesperado, tente novamente.";
    }
    if (message) {
      return <Alert type={type} message={message}/>;
    }
  }

  return (
    <div className="box-autenticacao-cadastro">
      <form>
        <div className="logoTitleCad">
          <h1 className="title-text"> Cadastre-se </h1>
        </div>
        <StatusAlert />
        <div className="field-container">
          <input
            className={userForm.email !== "" ? "has-val input" : "input"}
            type="email"
            value={userForm.email}
            onChange={(e) => handleUserFormState("email", e.target.value)}
            maxLength={35} // Defina o máximo de caracteres permitidos para o email
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>
        <div className="field-container">
          <input
            className={userForm.password !== "" ? "has-val input" : "input"}
            type="password"
            value={userForm.password}
            onChange={(e) => handleUserFormState("password", e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>
        <div className="button-container">
          <button
            type="submit"
            className="custom-button"
            onClick={handleRegister}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
