import { createContext, useState } from "react";

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [where, setWhere] = useState("#home");
  const handleWhere = (w) => {
    if (w !== where) {
      setWhere(w);
    }
  };

  return <NavbarContext.Provider value={{ where, handleWhere }}>{children}</NavbarContext.Provider>;
};

export { NavbarProvider, NavbarContext };
