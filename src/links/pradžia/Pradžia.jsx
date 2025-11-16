
import './Pradžia.css';
import '../../fonts.css';
import logoName from '../../components/img/logo-name.jpg';
import bgImage from '../../components/img/1.jpg';

function Pradžia() {
  return (
    <section className="pradzia-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="pradžia-container">
      <div className="pradžia-intro-section">
        <img 
          src={logoName} 
          alt="Logo" 
          className="logo-image" 
        />
      </div>
      
      <div className="pradžia-quote-box">
        <p className="pradžia-quote-text">
          Man dar neteko pajausti tokių švelnių, tvirtų ir gilių rankų"
          taip sako Mano Klientai
        </p>
      </div>
      
      <div className="pradžia-button-container">
        <div className="pradžia-button-wrapper">
          <a href="#contact" className="pradžia-registration-button">
            <i className="fas fa-smile pradžia-icon"></i>
            <span className="pradžia-button-text">Registracija</span>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Pradžia;
