import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedImage = ({ src, alt }) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (src !== currentSrc) {
      setIsLoaded(false);
    }
  }, [src, currentSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
    setCurrentSrc(src);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <AnimatePresence>
        {!isLoaded && (
          <motion.img
            key="old-image"
            src={currentSrc}
            alt={alt}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          />
        )}
      </AnimatePresence>
      <motion.img
        key="new-image"
        src={src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        onLoad={handleLoad}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default AnimatedImage;
