import logo from "../img/logo-icon.png";
import "./HeaderBigScreen.css";

const HeaderBigScreen = ({ isScrolled, scrollToSection }) => {
  return (
    <header className={`header-big-screen ${isScrolled ? "scrolled" : ""}`}>
      <img src={logo} className="logo" alt="logo" />
      <div className="header-links">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="link pradžia"
        >
          <h1>Pradžia</h1>
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("about")}
          className="link apie-mane"
        >
          <h1>Apie Mane</h1>
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("menu")}
          className="link kainorastis"
        >
          <h1>Kainoraštis</h1>
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="link kontaktai"
        >
          <h1>Kontaktai</h1>
        </button>
      </div>
      {/* to center links */}
      <div className="fill-in"></div>
    </header>
  );
};

export default HeaderBigScreen;
