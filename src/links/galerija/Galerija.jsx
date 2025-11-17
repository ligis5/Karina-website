import images from "./imagesImport";
import "./Galerija.css";
import { useEffect, useState, useRef } from "react";

const Galerija = () => {
  // to auto scroll thumbnails based on mouse position
  const [scroll, setScroll] = useState(false);
  const thumbnailsRef = useRef(null);

  useEffect(() => {
    const el = thumbnailsRef.current;
    if (!el) return;

    el.addEventListener("mousemove", onMouseMove);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const onMouseMove = (e) => {
    const mousePosX = e.clientX;
    if (mousePosX < window.innerWidth / 3) setScroll("left");
    else if (mousePosX > (2 * window.innerWidth) / 3) setScroll("right");
    else setScroll(false);
  };

  useEffect(() => {
    setInterval(autoScroll, 50);
    return () => {
      clearInterval(autoScroll);
    };
  }, [scroll]);

  const autoScroll = () => {
    const el = thumbnailsRef.current;
    if (!el) return;
    if (scroll === "left") {
      el.scrollBy({ left: -10, behavior: "smooth" });
    } else if (scroll === "right") {
      el.scrollBy({ left: 10, behavior: "smooth" });
    } else return;
  };

  return (
    <div id="galerija" className="galerija-section">
      <div className="originals"></div>
      <div className="thumbnails" ref={thumbnailsRef}>
        {images.map((img) => (
          <img
            src={img.thumbnail}
            alt="thumbnail"
            className="thumbnail-image"
            key={`${img.thumbnail}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Galerija;
