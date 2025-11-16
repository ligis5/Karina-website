import './MasažasDetail.css';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { massages } from '../data';
import karina from '../../../components/img/karina.jpg';
import bg1 from '../../../components/img/1.jpg';
import bg2 from '../../../components/img/2.jpg';
import bg3 from '../../../components/img/3.jpg';
import bg4 from '../../../components/img/4.jpg';

const backgrounds = [bg1, bg2, bg3, bg4];

function MasažasDetail() {
  const { slug } = useParams();
  const massage = massages.find(m => m.slug === slug);
  
  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  // Pick random background based on slug for consistency
  const bgIndex = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % backgrounds.length;
  const bgImage = backgrounds[bgIndex];

  if (!massage) {
    return (
      <div className="masazas-detail-section" style={{ paddingTop: '10rem' }}>
        <div className="masazas-apie-container">
          <h2>Masažas nerastas</h2>
          <Link to="/" className="back-link">Grįžti į pradžią</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="masazas-detail-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="masazas-apie-container">
        <div className="masazas-title-section">
          <h2 className="masazas-apie-title">{massage.title}</h2>
        </div>
        <div className="masazas-content-wrapper">
          <img src={karina} className="karina-image" alt="Karina" />
          <div className="masazas-text-container">
            <div className="masazas-text-box-detail">
              <div className="masazas-info">
                <p><strong>Trukmė:</strong> {massage.duration}</p>
                <p><strong>Kaina:</strong> {massage.price}</p>
              </div>
              <h3 className="masazas-text-content">
                Masažas man nėra tik technika – tai menas išgirsti kūną. Kiekvienas žmogus atsineša savą istoriją, o per
                prisilietimą aš padedu jam išlaisvinti įtampą, paleisti emocijas ir sugrįžti į vidinę pusiausvyrą. Mano
                tikslas – ne tik atpalaiduoti kūną, bet ir sušvelninti sielą.
              </h3>
            </div>
            <div className="masazas-back-button-container">
              <Link to="/" className="back-link">Grįžti į pradžią</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasažasDetail;
