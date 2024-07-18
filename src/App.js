import { useContext } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { NavbarContext } from "./components/NavbarContext";

const App = () => {
  const { where } = useContext(NavbarContext);
  return (
    <>
      <Navbar />
      <main>
        {where === "#home" ? <Home /> : null}
        {where === "#about" ? <About /> : null}
        {where === "#project" ? <Project /> : null}
      </main>
    </>
  );
};

export default App;
