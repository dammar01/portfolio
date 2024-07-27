import React, { createContext, useState, useContext, useEffect, useMemo } from "react";
import { PRELOAD_IMAGES, PRELOAD_MUSIC } from "./DataAssets";
import ParticlesBackground from "./ParticlesBackground";

const PreloaderContext = createContext();

export const Preloader = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [assets, setAssets] = useState({
    images: {},
    music: {},
  });

  const particle = useMemo(() => <ParticlesBackground />, []);

  useEffect(() => {
    const preload = (item, type) => {
      return new Promise((resolve) => {
        if (type === "image") {
          const img = new Image();
          img.src = item.src;
          img.onload = () => {
            setAssets((prev) => ({
              ...prev,
              images: { ...prev.images, [item.name]: item.src },
            }));
            resolve();
          };
        } else if (type === "audio") {
          const audio = new Audio();
          audio.src = item.src;
          audio.oncanplaythrough = () => {
            setAssets((prev) => ({
              ...prev,
              music: { ...prev.music, [item.name]: item.src },
            }));
            resolve();
          };
        }
      });
    };

    const preloadAssets = async () => {
      const imagePromises = PRELOAD_IMAGES.map((item) => preload(item, "image"));
      const musicPromises = PRELOAD_MUSIC.map((item) => preload(item, "audio"));

      await Promise.all([...imagePromises, ...musicPromises]);
      setIsLoaded(true);
    };

    preloadAssets();
  }, []);

  const preloadedAssets = useMemo(() => assets, [assets]);

  return (
    <PreloaderContext.Provider value={{ isLoaded, assets: preloadedAssets }}>
      {particle}
      {isLoaded ? children : <div className="loader">Wait a moment...</div>}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => useContext(PreloaderContext);
