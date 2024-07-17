import { IconChevronsLeft, IconChevronsRight, IconMinimize } from "@tabler/icons-react";
import tes from "../assets/img/forward.jpeg";
import logo from "../assets/img/logo.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Project = () => {
  const [ind, setInd] = useState(0);
  const [view, setView] = useState(-1);
  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
  ];
  const handlePrev = () => {
    const newIndex = ind === 0 ? data.length - (1 + 3) : ind - 1;
    setInd(newIndex);
  };

  const handleNext = () => {
    const newIndex = ind === data.length - (1 + 3) ? 0 : ind + 1;
    setInd(newIndex);
  };

  const overview = (i) => {
    setView(i);
  };
  const getTransformValue = () => {
    return `translateX(-${ind * 21.8}%)`;
  };
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
        <div className="data" style={{ transform: getTransformValue() }}>
          {data.map((item) => (
            <div className="wrapper" key={item.id} onClick={() => overview(item.id - 1)}>
              <img src={tes} alt="" />
              <h1>{item.name}</h1>
              <div className="overlay"></div>
            </div>
          ))}
        </div>
        <div className="tombol">
          <button onClick={handlePrev}>
            <IconChevronsLeft />
          </button>
          <button onClick={handleNext}>
            <IconChevronsRight />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {view !== -1 && (
          <motion.div
            className="view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <button onClick={() => overview(-1)}>
              <IconMinimize />
            </button>
            <div className="wrapper">
              <img src={tes} alt="" />
            </div>
            <div className="detail">
              <h1>{data[view].name}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, atque. Ipsa similique reprehenderit fugiat,
                dolores tenetur at ipsam itaque sunt fuga accusamus culpa enim quis esse alias rerum illum unde?
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
