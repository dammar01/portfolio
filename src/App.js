import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { NavbarContext } from "./components/NavbarContext";
import { usePreloader } from "./components/Preloader";
import useSound from "use-sound";

const App = () => {
  const { where } = useContext(NavbarContext);
  const { assets } = usePreloader();
  const [play, { sound }] = useSound(assets.music["remember"], {
    autoplay: false,
    loop: true,
    volume: 0.01,
  });
  useEffect(() => {
    if (sound) {
      // play();
      console.log(sound);
    }
  }, [play, sound]);
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
