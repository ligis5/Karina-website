import "./Apie-mane.css";
import karina from "../../components/img/karina.jpg";
import bgImage from "../../components/img/3.jpg";

function ApieMane() {
  return (
    <div
      id="about"
      className="apie-mane-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="apie-container">
        <div className="apie-title-section">
          <h2 className="apie-title">Apie Mane</h2>
        </div>
        <div className="apie-content-wrapper">
          <div className="apie-image-wrapper">
            <img src={karina} className="karina-image" alt="Karina" />
            <div className="apie-text-container">
              <div className="apie-text-box" style={{ margin: 0 }}>
                <h3 className="apie-text-content">
                  Masažas man nėra tik technika – tai menas išgirsti kūną.
                  Kiekvienas žmogus atsineša savą istoriją, o per prisilietimą
                  aš padedu jam išlaisvinti įtampą, paleisti emocijas ir
                  sugrįžti į vidinę pusiausvyrą. Mano tikslas – ne tik
                  atpalaiduoti kūną, bet ir sušvelninti sielą.
                </h3>
              </div>
            </div>
          </div>
          <div className="apie-patirtis-container">
            <div className="apie-text-container">
              <div className="apie-text-box">
                <h3 className="apie-text-content">
                  2014 m. baigiau kineziterapijos studijas Klaipėdos
                  Valstybinėje Kolegijoje. Iškart po jų buvau pakviesta dirbti
                  tuomet naujai duris atvėrusioje reabilitacijos klinikoje
                  „Salumeda“. Dar studijų metais pabaigiau klasikinio masažo
                  pagrindus ISPADO akademijoje. Tais pačiais metais buvau
                  išsiųsta į stažuotę Druskininkuose, kur įgijau gydomojo masažo
                  specialisto licenciją.
                </h3>
              </div>
            </div>
            <div className="apie-text-container">
              <div className="apie-text-box">
                <h3 className="apie-text-content">
                  2015 m. įgijau „Training Course in Children Massage“
                  sertifikatą, kurį vedė „Tunnistus“ masažo mokyklos mokytoja
                  Aljona Säilev.
                </h3>
              </div>
            </div>
            <div className="apie-text-container">
              <div className="apie-text-box">
                <h3 className="apie-text-content">
                  2016 m. dalyvavau praktiniame seminare „Dr. E. Reich kūno
                  psichoterapijos metodas: Drugelio prisilietimo masažas“. Tais
                  pačiais metais pajutau, kad noras gilintis į masažo pasaulį
                  tik stiprėja, todėl pasirinkau Rūtos Stratkauskienės
                  Holistinio masažo mokyklą. Būtent ten masažas palietė mano
                  širdį itin giliai – atradau pašaukimą ir motyvaciją kurti savo
                  kelią.
                </h3>
              </div>
            </div>
            <div className="apie-text-container">
              <div className="apie-text-box">
                <h3 className="apie-text-content">
                  2017 m. baigusi Holistinio masažo mokyklą, su dideliu jauduliu
                  išsinuomavau pirmąsias patalpas. Taip gimė mano vizija ir
                  vardas – Harmony Feeling.
                </h3>
              </div>
            </div>
            <div className="apie-text-container">
              <div className="apie-text-box">
                <h3 className="apie-text-content">
                  Tais pačiais metais mokiausi I lygio tailandietiško masažo
                  technikų pas mokytoją Takashi. Taip pat „Shiatsu Lietuva“
                  organizuotuose mokymuose gilinau žinias tema: „Išeminė
                  kompresija. Trigeriniai taškai“.
                </h3>
              </div>
            </div>
            <div className="apie-text-container">
              <div className="apie-text-box">
                <h3 className="apie-text-content">
                  Sportas man visada buvo arti, todėl nuolat siekiu būti
                  pavyzdžiu savo klientams – esant galimybei dalyvauju ne tik
                  masažo, bet ir sporto temų seminaruose.
                </h3>
              </div>
            </div>
            <div className="apie-text-container">
              <div className="apie-text-box">
                <h3 className="apie-text-content">Papildyti mokymai:</h3>
                <p className="apie-text-content">
                  {" "}
                  Celiulitas. Chiromasažas Iq.
                </p>
                <p className="apie-text-content">
                  {" "}
                  2022 m. sportinio masažo mokymai pas Andrių Jovaišą{" "}
                </p>
                <p className="apie-text-content">
                  {" "}
                  2022 m. RS holistinis karštų akmenų masažas{" "}
                </p>
                <p className="apie-text-content">
                  {" "}
                  2022 m. skaičiau paskaitą I kurso studentėms tema „Ergonomika
                  specialisto darbe“{" "}
                </p>
                <p className="apie-text-content">
                  {" "}
                  2023 m. pradėjau mokytis japoniško terapinio veido masažo –
                  baigiau I–II lygius, o 2024 m. sėkmingai išlaikiau egzaminą{" "}
                </p>
                <p className="apie-text-content">
                  {" "}
                  2023 m. kūno limfodrenažinio masažo teorijos ir praktikos
                  mokymai (lektorė Ana Kastrica){" "}
                </p>
                <p className="apie-text-content">
                  {" "}
                  2025 m. dalyvavau osteobukalinio masažo mokymuose
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApieMane;
