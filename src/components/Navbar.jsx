import { useContext } from "react";
import { NavbarContext } from "./NavbarContext";
import { IconBrandGithub, IconBrandInstagram, IconDeviceMobileMessage } from "@tabler/icons-react";

const NavLink = ({ judul, id, sect, onClick }) => {
  return (
    <li className={`nav-link ${sect === id ? "active" : ""}`} onClick={() => onClick(id)}>
      {judul}
    </li>
  );
};

const Navbar = () => {
  const { where, handleWhere } = useContext(NavbarContext);
  return (
    <>
      <nav className="navbar">
        <div className="logo" onClick={() => handleWhere("#home")}>
          Dammar's
        </div>
        <div className="menu">
          <NavLink judul="Home" id="#home" sect={where} onClick={handleWhere} />
          <NavLink judul="About" id="#about" sect={where} onClick={handleWhere} />
          <NavLink judul="Project" id="#project" sect={where} onClick={handleWhere} />
        </div>
        <div className="kontak">
          <button className="btn-primary fs-normal">Contact</button>
          <IconDeviceMobileMessage stroke={2} />
        </div>
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
