import images from "./imagesImport";
import { useEffect, useState, useRef } from "react";

const Thumbnails = () => {
  const [scrollDirection, setScrollDirection] = useState(null); // 'left', 'right', or null
  const thumbnailsRef = useRef(null);
  const animationFrameRef = useRef(null);

  const onMouseMove = (e) => {
    // if (!mouseInside) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const containerWidth = rect.width;

    // Left third: scroll left, right third: scroll right, middle: stop
    if (relativeX < containerWidth / 3) {
      setScrollDirection("left");
    } else if (relativeX > (2 * containerWidth) / 3) {
      setScrollDirection("right");
    } else {
      setScrollDirection(null);
    }
  };
  useEffect(() => {
    const el = thumbnailsRef.current;
    if (!el) return;

    el.addEventListener("mousemove", onMouseMove);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const scroll = (e) => {
    if (!scrollDirection) {
      animationFrameRef.current = null;
      return;
    }

    const maxScrollLeft = e.scrollWidth - e.clientWidth;

    if (scrollDirection === "left") {
      if (e.scrollLeft > 0) {
        e.scrollLeft -= 0.5;
        animationFrameRef.current = requestAnimationFrame(() => scroll(e));
      } else {
        animationFrameRef.current = null;
      }
    } else if (scrollDirection === "right") {
      if (e.scrollLeft < maxScrollLeft) {
        e.scrollLeft += 0.5;
        animationFrameRef.current = requestAnimationFrame(() => scroll(e));
      } else {
        animationFrameRef.current = null;
      }
    }
  };

  useEffect(() => {
    const el = thumbnailsRef.current;
    if (!el) return;

    if (scrollDirection && !animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(() => scroll(el));
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [scrollDirection]);

  return (
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
  );
};

export default Thumbnails;
