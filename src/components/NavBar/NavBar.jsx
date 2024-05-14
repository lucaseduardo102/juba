import { useLocation } from "react-router-dom";
import logo from "../../assets/images/logoMarca.png";
import { NavigationItems } from "./NavigationItems";

export function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-dark mb-3" data-bs-theme="dark">
      <div className="container-fluid navbar-center">
        <Logo />
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-items"
          aria-controls="navbar-items"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavigationItems location={location} />
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <a className="navbar-brand" href="/home">
      <img src={logo} alt="logo" style={{ width: "40px", height: "auto" }} />
    </a>
  );
}
