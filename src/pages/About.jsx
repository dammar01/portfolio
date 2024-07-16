import saya from "../assets/img/saya.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="foto">
        <img src={saya} alt="" />
      </div>
      <div className="isi">
        <h1>About Me</h1>
        <p>
          Back in <span>High school</span>, I decided to try my hand at coding and quickly fell in love with the world of web
          development. Since then, I've had the opportunity to work on a variety of projects, including coding with{" "}
          <span>Arduino</span> and developing <span>Full-stack web applications</span>.
        </p>
        <p>
          I thrive on learning new technologies and enjoy the challenge of bringing innovative ideas to life. I find that coding
          while listening to Japanese EDM keeps me focused and inspired. Currently, I'm a <span>Mentor</span> at the IT Club of{" "}
          <span>Politeknik Negeri Pontianak</span>, sharing my knowledge and passion for technology with others.
        </p>
        <div className="tombol">
          <button className="btn-primary">Hire Me</button>
          <button className="btn-primary-outline">Resume</button>
        </div>
      </div>
    </section>
  );
};

export default About;
