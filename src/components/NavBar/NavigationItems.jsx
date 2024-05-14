import { Link } from "react-router-dom";
import { useAuthStore } from "../../services";

export function NavigationItems({ location }) {
  const { authCredentials } = useAuthStore();

  return (
    <div className="collapse navbar-collapse" id="navbar-items">
      <ul className="navbar-nav mb-2 mb-lg-0  mx-auto">
        <NavItem to="/home" pathname={location.pathname}>
          Inicio
        </NavItem>

        {authCredentials && (
          <>
            <NavItem to="/agendamento" pathname={location.pathname}>
              Agenda
            </NavItem>
            <NavItem to="/meus-agendamentos" pathname={location.pathname}>
              Meus Agendamentos
            </NavItem>
          </>
        )}
        <NavItem to="/lista-de-servicos" pathname={location.pathname}>
          Serviços
        </NavItem>
        <NavItem to="/about" pathname={location.pathname}>
          Sobre
        </NavItem>
      </ul>
      {authCredentials && <ButtonLogout />}
    </div>
  );
}

function NavItem({ to, pathname, children, ...props }) {
  return (
    <li className="nav-item" {...props}>
      <Link
        to={to}
        className={`nav-link ${pathname === to ? "nav-link-all" : ""}`}
      >
        {children}
      </Link>
    </li>
  );
}

function ButtonLogout() {
  const { removeCredentials } = useAuthStore();

  return (
    <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item">
        <button
          className="btn text-secondary-emphasis "
          style={{
            textDecoration: "none",
            border: "none",
            background: "none",
          }}
          onClick={removeCredentials}
        >
          Sair
        </button>
      </li>
    </ul>
  );
}
