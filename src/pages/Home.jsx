import forward from "../assets/img/forward.jpeg";
import { IconPlayerPlayFilled, IconPlayerTrackNextFilled, IconPlayerTrackPrevFilled } from "@tabler/icons-react";

const Home = () => {
  return (
    <section id="home">
      <div className="title-area">
        <h1 className="greet">Hello there, I'm</h1>
        <h1 className="name">Dammar Syaputra</h1>
        <h1 className="position">
          <span className="code">Fullstack</span> Web developer
        </h1>
        <p>
          Passionate about coding to the rhythm of music, with a solid understanding of user experience principles, a focus on
          seamless functionality, and pixel-perfect precision.
        </p>
        <button className="btn-primary px-9 py-4">Get Started</button>
      </div>
      <div className="filling-area">
        <div className="cover">
          <img src={forward} alt="" className="h-100 fit-cover" />
          <div className="track">
            <div className="aksi">
              <div className="judul">
                <h1>Forward</h1>
                <h5>PIKASONIC</h5>
              </div>
              <div className="tombol">
                <IconPlayerTrackPrevFilled stroke={2} className="mx-2" />
                <IconPlayerPlayFilled stroke={2} className="mx-2" />
                <IconPlayerTrackNextFilled stroke={2} className="mx-2" />
              </div>
            </div>
            <input type="range" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
