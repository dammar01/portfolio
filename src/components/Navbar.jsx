import { IconBrandGithub, IconBrandInstagram, IconDeviceMobileMessage } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { NavbarContext } from "./NavbarContext";
import { useContext } from "react";

const NavLink = ({ judul, to, id, toId, onClick }) => {
  return (
    <Link to={to} className={`nav-link ${id === toId ? "active" : ""}`} onClick={onClick}>
      {judul}
    </Link>
  );
};

const Navbar = () => {
  const { where, handleWhere } = useContext(NavbarContext);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Dammar's
        </Link>
        <div className="menu">
          <NavLink judul="Home" to="/" id="#home" toId={where} onClick={() => handleWhere("#home")} />
          <NavLink judul="About" to="/about" id="#about" toId={where} onClick={() => handleWhere("#about")} />
          <NavLink judul="Project" to="/project" id="#project" toId={where} onClick={() => handleWhere("#project")} />
        </div>
        <a href="https://mailto:hello@dammar.s011@gmail.com" target="_blank" rel="noopener noreferrer" className="kontak">
          <button className="btn-primary fs-normal">Contact</button>
          <IconDeviceMobileMessage stroke={2} />
        </a>
      </nav>
      <div id="social-media">
        <a href="https://github.com/dammar01" target="_blank" rel="noopener noreferrer">
          <IconBrandGithub />
        </a>
        <a href="https://www.instagram.com/dmmrs_a/" target="_blank" rel="noopener noreferrer">
          <IconBrandInstagram />
        </a>
      </div>
    </>
  );
};

export default Navbar;
