import './Kainoraštis.css';
import bgImage from '../../components/img/2.jpg';
import Masažas from './masažai/Masažas.jsx';
import { massages } from './data';

function Kainoraštis() {
  // split massages into two roughly equal columns
  const mid = Math.ceil(massages.length / 2);
  const left = massages.slice(0, mid);
  const right = massages.slice(mid);
  return (
    <section id="menu" className="kainorastis-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="kainorastis-container" id="menu1">
        <div className="title-center">
          <h2 className="kainorastis-title">Kainoraštis</h2>
        </div>

        <div className="cards-row">
          <div className="price-card">
            {left.map((m) => (
              <Masažas key={m.slug} massage={m} />
            ))}
          </div>
          <div className="price-card">
            {right.map((m) => (
              <Masažas key={m.slug} massage={m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kainoraštis;
