import { IconChevronsLeft, IconChevronsRight, IconMinimize, IconPoint, IconPointFilled, IconUnlink } from "@tabler/icons-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloader } from "../components/Preloader";
import AnimatedImage from "../components/AnimatedImage";
import { DATA_PROJECT } from "../components/DataProject";

const Project = () => {
  const [ind, setInd] = useState(0);
  const [view, setView] = useState(-1);
  const [onView, setOnView] = useState(0);
  const { assets } = usePreloader();
  const handlePrev = () => {
    const min = DATA_PROJECT.length > 3 ? 3 : 0;
    const newIndex = ind === 0 ? DATA_PROJECT.length - (1 + min) : ind - 1;
    setInd(newIndex);
  };

  const handleNext = () => {
    const min = DATA_PROJECT.length > 3 ? 3 : 0;
    const newIndex = ind === DATA_PROJECT.length - (1 + min) ? 0 : ind + 1;
    setInd(newIndex);
  };

  const overview = (i) => {
    setView(i);
    if (i === -1) setOnView(0);
  };

  const onOverview = (i) => {
    setOnView(i);
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
        <img src={assets.images["logo"]} className="logo" alt="" />
      </div>
      <div className="isi">
        <div className="data" style={{ transform: getTransformValue() }}>
          {DATA_PROJECT.map((item) => (
            <div className="wrapper" key={item.id} onClick={() => overview(item.id - 1)}>
              <img src={item.view} alt="" />
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
              <div className="data-img">
                <AnimatedImage src={DATA_PROJECT[view].img[onView]} alt="Overview" />
                <div className="pages">
                  {DATA_PROJECT[view].img.map((val, i) => (
                    <>{i === onView ? <IconPointFilled className="active" /> : <IconPoint onClick={() => onOverview(i)} />}</>
                  ))}
                </div>
              </div>
            </div>
            <div className="detail">
              <h1>{DATA_PROJECT[view].name}</h1>
              <div className="isi">
                <p>
                  <b>{DATA_PROJECT[view].tanggal}</b> - {DATA_PROJECT[view].isi}
                  {DATA_PROJECT[view].link ? (
                    <a href={DATA_PROJECT[view].link} target="_blank" rel="noopener noreferrer">
                      <span>To the website</span>
                      <IconUnlink />
                    </a>
                  ) : null}
                </p>
                <div className="lang">
                  {DATA_PROJECT[view].lang.map((val) => (
                    <span className="badge">{val}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
