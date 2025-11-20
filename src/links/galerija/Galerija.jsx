import { useState } from "react";
import "./Galerija.css";
import Thumbnails from "./Thumbnails.jsx";
import img5 from "../../components/img/5.jpg";
import exampleImage from "../../components/img/original/15.jpg";

const Galerija = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const showImage = (image) => {
    setSelectedImage(image);
  };
  return (
    <div
      id="galerija"
      className="galerija-section"
      style={{ backgroundImage: `url(${img5})` }}
    >
      <div className="originals">
        {selectedImage ? (
          <img src={selectedImage} alt="selected" className="original-photo" />
        ) : (
          <img src={exampleImage} alt="example" className="original-photo" />
        )}
      </div>
      <Thumbnails showImage={showImage} />
    </div>
  );
};

export default Galerija;
