import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* <Home /> */}
        {/* <About /> */}
        <Project />
      </main>
    </>
  );
};

export default App;
