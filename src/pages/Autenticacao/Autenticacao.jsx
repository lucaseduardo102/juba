import { Cadastro } from "./componentes/Cadastro";
import { Login } from "./componentes/Login";
import "../../assets/global.css";
import { Logo } from "./componentes/Logo,";



export function Autenticacao() {
  return (
    <div className="content">
      <Logo />
      <div className="container">
        <div className="wrap">
          <Cadastro />
          <Login />
        </div>
      </div>
    </div>
  );
}
