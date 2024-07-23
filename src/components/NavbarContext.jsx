import { createContext, useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import { usePreloader } from "./Preloader";

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const path = window.location.pathname;
  const [where, setWhere] = useState(path !== "/" ? "#" + path.slice(1) : "#home");
  const handleWhere = (w) => {
    if (w !== where) {
      setWhere(w);
      window.history.pushState(null, "", w.slice(1));
    }
  };

  const { assets } = usePreloader();
  const [play, { stop, sound }] = useSound(assets.music["remember"], {
    autoplay: true,
    loop: true,
    volume: 0.025,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if (sound) {
      if (isPlaying) {
        stop();
        setIsPlaying(false);
      } else {
        play();
        setIsPlaying(true);
      }
    }
  };

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    if (sound) {
      setDuration(sound.duration());
      sound.on("play", () => {
        intervalRef.current = setInterval(() => {
          setCurrentTime(sound.seek());
        }, 1000);
      });

      sound.on("stop", () => {
        clearInterval(intervalRef.current);
        setCurrentTime(0);
      });
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [sound]);

  return (
    <NavbarContext.Provider value={{ where, handleWhere, handlePlay, isPlaying, currentTime, duration }}>
      {children}
    </NavbarContext.Provider>
  );
};

export { NavbarProvider, NavbarContext };
