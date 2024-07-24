import { IconChevronsLeft, IconChevronsRight, IconMinimize, IconPoint, IconPointFilled, IconUnlink } from "@tabler/icons-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloader } from "../components/Preloader";
import AnimatedImage from "../components/AnimatedImage";

const Project = () => {
  const [ind, setInd] = useState(0);
  const [view, setView] = useState(-1);
  const [onView, setOnView] = useState(0);
  const { assets } = usePreloader();
  const data = [
    {
      id: 1,
      name: "MRT",
      img: [
        assets.images["mrt-1"],
        assets.images["mrt-2"],
        assets.images["mrt-3"],
        assets.images["mrt-4"],
        assets.images["mrt-5"],
      ],
      view: assets.images["mrt-view"],
      isi: "The Integrated Material Return (IMR) Website is a platform for recording and managing data of items located in the main warehouse and other warehouses.",
      lang: ["Laravel", "SCSS", "jQuery"],
    },
    {
      id: 2,
      name: "MRT",
      img: [
        assets.images["mrt-1"],
        assets.images["mrt-2"],
        assets.images["mrt-3"],
        assets.images["mrt-4"],
        assets.images["mrt-5"],
      ],
      view: assets.images["mrt-view"],
    },
  ];
  const handlePrev = () => {
    const min = data.length > 3 ? 3 : 0;
    const newIndex = ind === 0 ? data.length - (1 + min) : ind - 1;
    setInd(newIndex);
  };

  const handleNext = () => {
    const min = data.length > 3 ? 3 : 0;
    const newIndex = ind === data.length - (1 + min) ? 0 : ind + 1;
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
          {data.map((item) => (
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
                <AnimatedImage src={data[view].img[onView]} alt="Overview" />
                <div className="pages">
                  {data[view].img.map((val, i) => (
                    <>{i === onView ? <IconPointFilled className="active" /> : <IconPoint onClick={() => onOverview(i)} />}</>
                  ))}
                </div>
              </div>
            </div>
            <div className="detail">
              <h1>{data[view].name}</h1>
              <div className="isi">
                <p>
                  {data[view].isi}
                  {data[view].link ? (
                    <a href={data[view].link} target="_blank" rel="noopener noreferrer">
                      <span>To the website</span>
                      <IconUnlink />
                    </a>
                  ) : null}
                </p>
                <div className="lang">
                  {data[view].lang.map((val) => (
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
