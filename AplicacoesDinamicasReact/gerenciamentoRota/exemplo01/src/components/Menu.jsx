import { Link, useLocation } from "react-router-dom";
import "../App.css";

function Menu() {
  const location = useLocation();

  return (
    <nav className="menu-nav">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Início
      </Link>
      <Link
        to="/sobre"
        className={location.pathname === "/sobre" ? "active" : ""}
      >
        Sobre
      </Link>
      <Link
        to="/contato"
        className={location.pathname === "/contato" ? "active" : ""}
      >
        Contato
      </Link>
    </nav>
  );
}

export default Menu;
