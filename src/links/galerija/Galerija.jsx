import "./Galerija.css";
import Thumbnails from "./Thumbnails.jsx";

const Galerija = () => {
  return (
    <div id="galerija" className="galerija-section">
      <div className="originals"></div>
      <Thumbnails />
    </div>
  );
};

export default Galerija;
