import './Apie-mane.css';
import karina from '../../components/img/karina.jpg';
import bgImage from '../../components/img/3.jpg';

function ApieMane() {
  return (
    <div id="about" className="apie-mane-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="apie-container">
        <div className="title-section">
          <h2 className="apie-title">Apie Mane</h2>
        </div>
        <div className="content-wrapper">
          <img src={karina} className="karina-image" alt="Karina" />
          <div className="text-container">
            <div className="text-box">
              <h3 className="text-content">
                Masažas man nėra tik technika – tai menas išgirsti kūną. Kiekvienas žmogus atsineša savą istoriją, o per
                prisilietimą aš padedu jam išlaisvinti įtampą, paleisti emocijas ir sugrįžti į vidinę pusiausvyrą. Mano
                tikslas – ne tik atpalaiduoti kūną, bet ir sušvelninti sielą.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApieMane;
