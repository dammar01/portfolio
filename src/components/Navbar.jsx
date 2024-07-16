import { useState } from "react";

const NavLink = ({ judul, id, sect, onClick }) => {
  return (
    <li className={`nav-link ${sect === id ? "active" : ""}`} onClick={() => onClick(id)}>
      {judul}
    </li>
  );
};

const Navbar = () => {
  const [sect, setSect] = useState("#home");
  const navClick = (param) => {
    if (param !== sect) {
      setSect(param);
    }
  };
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navClick("#home")}>
        Dammar's
      </div>
      <div className="menu">
        <NavLink judul="Home" id="#home" sect={sect} onClick={navClick} />
        <NavLink judul="About" id="#about" sect={sect} onClick={navClick} />
        <NavLink judul="Project" id="#project" sect={sect} onClick={navClick} />
      </div>
      <div className="kontak">
        <button className="btn-primary fs-normal">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
