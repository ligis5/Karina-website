import './Kontaktai.css';
import bgImage from '../../components/img/4.jpg';

function Kontaktai() {
  const mapQuery = encodeURIComponent('Harmony feeling Gargždai, Lithuania');
  return (
    <section id="contact" className="kontaktai-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="kontaktai-container">
        <div className="cards-row">
          <div className="card light-card">
            <div className='google-maps'>
              <iframe
                title="Google Map"
                src={`https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="section-contacts">
              <span className="block">Telefonas registracijai ar pasiteiravimui: <a href="tel:(8-636) 68728" className="contact-link">(8-636) 68728</a></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kontaktai;
