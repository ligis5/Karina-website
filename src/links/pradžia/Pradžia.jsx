
import './Pradžia.css';
import '../../fonts.css';
import logoName from '../../components/img/logo-name.jpg';
import bgImage from '../../components/img/1.jpg';

function Pradžia() {
  return (
    <section className="pradzia-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container">
      <div className="intro-section">
        <img 
          src={logoName} 
          alt="Logo" 
          className="logo-image" 
        />
      </div>
      
      <div className="quote-box">
        <p className="quote-text">
          Man dar neteko pajausti tokių švelnių, tvirtų ir gilių rankų"
          taip sako Mano Klientai
        </p>
      </div>
      
      <div className="button-container">
        <div className="button-wrapper">
          <a href="#contact" className="registration-button">
            <i className="fas fa-smile icon"></i>
            <span className="button-text">Registracija</span>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Pradžia;
