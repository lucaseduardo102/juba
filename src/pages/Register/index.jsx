import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";
import '../../assets/global.css';
import InputMask from 'react-input-mask';
import axios from 'axios';

export const Register = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault(); // Correção: era preventDefalt(), mas deve ser preventDefault()

    try {
      const user = {
        cpf,
        name,
        email,
        date,
        phoneNumber,
        password,
      };

      const response = await axios.post('https://jubas-backend.onrender.com/user', user);

      console.log('Resposta da rota /user:', response.data);

    } catch (error) {
      console.error('Erro na requisição /user:', error);
    }
  };

  return (
    <LayoutComponents>
      <form onSubmit={handleRegister}>
        <div className="logoTitleCad">
          <h1 className="logoTitleCad"> Cadastre-se </h1>
        </div>
        <p></p>
        <span className="title-text">
          <div className="logoTitleCad">
            <img
              src={require('../../assets/images/logoMarca.png')}
              alt="Logo"
              className="logo"
            />
          </div>
        </span>
        <div className="field-container">
          <InputMask mask="999.999.999-99"
            maskChar="_"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          >
            {(inputProps) => <input {...inputProps} className={cpf ? 'has-val input' : 'input'} />}
          </InputMask>
          <span className="focus-input" data-placeholder="CPF"></span>
        </div>
        <div className="field-container">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome Completo"></span>
        </div>
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
            className={date !== "" ? "has-val input" : "input"}
            type="date"
            value={date}
            onChange={(e) => {
              if (e.target.value.length <= 10) {
                setDate(e.target.value);
              }
            }}
            maxLength={10} // Defina o máximo de caracteres permitidos para a data de nascimento
          />
        </div>
        <div className="field-container">
          <InputMask mask="(99) 99999-9999"
            maskChar="_"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          >
            {(inputProps) => <input {...inputProps} className={phoneNumber ? 'has-val input' : 'input'} />}
          </InputMask>
          <span className="focus-input" data-placeholder="Telefone"></span>
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
        <div className="field-container">
          <input
            className={confpassword !== "" ? "has-val input" : "input"}
            type="password"
            value={confpassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Confirmar Senha"></span>
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-primary custom-button">Cadastrar</button>
        </div>
        <div className="text-center">
          <Link className="create-account" to="/login">
            Já possui conta? Acessar
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
