import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../../assets/global.css';
import { repository } from '../../repositories';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleLogin() {
    console.log('press')
    const data = await repository.user.signIn(email,password);
    console.log(data)
    // // Aqui você pode adicionar a lógica de autenticação com o email e senha
    // // Por exemplo, fazer uma solicitação de API para verificar as credenciais

    // // Se a autenticação for bem-sucedida, redirecione o usuário para a página Home
    // if (email === "admin@jubas.com" && password === "12345678") {
    //   window.location.href = '/home';
    // } else {
    //   setError("Usuário ou senha incorreto");
    // }
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <div className="logoTitle">
            <h1 className="title-text">Juba's Barbearia</h1>
            <img
              src={require('../../assets/images/logoMarca.png')}
              alt="Logo"
              className="logo"
            />
          </div>
          <form>
            <div className="field-container">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={email ? 'has-val input' : 'input'}
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
            {error && <p className="error-message">{error}</p>}
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
