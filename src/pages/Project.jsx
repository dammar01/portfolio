import { IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react";
import tes from "../assets/img/forward.jpeg";
import logo from "../assets/img/logo.png";

const Project = () => {
  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
  ];
  return (
    <section id="project">
      <div className="text">
        <h1>
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>J</span>
          <span>E</span>
          <span>C</span>
          <span>T</span>
        </h1>
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="isi">
        <div className="data">
          {data.map((item) => (
            <div className="wrapper" key={item.id}>
              <img src={tes} alt="" />
              <div className="overlay"></div>
            </div>
          ))}
        </div>
        <div className="tombol">
          <button>
            <IconChevronsLeft />
          </button>
          <button>
            <IconChevronsRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
