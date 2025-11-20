import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Styles/banner.css";

function Banner() {
  return (
    <div className="banner">
        <img src={logo} alt="logo" />
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
                Accueil
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
                À propos
            </NavLink>
        </nav>
    </div>
  );
}

export default Banner;