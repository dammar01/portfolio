import { createContext, useState } from "react";

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const path = window.location.pathname;
  const [where, setWhere] = useState(path !== "/" ? "#" + path.slice(1) : "#home");
  const handleWhere = (w) => {
    if (w !== where) {
      setWhere(w);
      window.history.pushState(null, "", w.slice(1));
    }
  };

  return <NavbarContext.Provider value={{ where, handleWhere }}>{children}</NavbarContext.Provider>;
};

export { NavbarProvider, NavbarContext };
