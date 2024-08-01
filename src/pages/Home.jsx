import { IconPlayerPlayFilled, IconPlayerStopFilled } from "@tabler/icons-react";
import { NavbarContext } from "../components/NavbarContext";
import { useContext } from "react";
import { usePreloader } from "../components/Preloader";
import { Link } from "react-router-dom";

const Home = () => {
  const { handleWhere, handlePlay, isPlaying, currentTime, duration } = useContext(NavbarContext);
  const { assets } = usePreloader();
  return (
    <section id="home">
      <div className="title-area">
        <h1 className="greet">Hello there, I'm</h1>
        <h1 className="name">Dammar Syaputra</h1>
        <h1 className="position">
          <span className="code">Fullstack</span> Web developer
        </h1>
        <p>
          Passionate about coding to the rhythm of PIKASONIC's music, with a solid understanding of user experience principles, a
          focus on seamless functionality, and pixel-perfect precision.
        </p>
        <Link to="/about" onClick={() => handleWhere("#about")}>
          <button className="btn-primary px-9 py-4">Get Started</button>
        </Link>
      </div>
      <div className="filling-area">
        <div className="cover">
          <img src={assets.images["remember"]} alt="" className="h-100 fit-cover" />
          <div className="track">
            <div className="aksi">
              <div className="judul">
                <h1>
                  <a href="https://youtu.be/vk4l_gkzrgU?si=xfZBRRAT4iw6k6h8" target="_blank" rel="noopener noreferrer">
                    Remember
                  </a>
                </h1>
                <a href="https://www.youtube.com/@PIKASONIC/featured" target="_blank" rel="noopener noreferrer">
                  PIKASONIC
                </a>
              </div>
              <div className="tombol">
                {isPlaying ? (
                  <IconPlayerStopFilled stroke={2} className="mx-2" onClick={handlePlay} />
                ) : (
                  <IconPlayerPlayFilled stroke={2} className="mx-2" onClick={handlePlay} />
                )}
              </div>
            </div>
            <input type="range" min={0} value={currentTime} max={duration} disabled />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
