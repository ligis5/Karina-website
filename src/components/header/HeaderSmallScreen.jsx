import logo from "../img/logo-icon.png";
import "./HeaderSmallScreen.css";
import menuLogo from "../img/burger-menu.svg";
import { useState } from "react";

const HeaderSmallScreen = ({ isScrolled, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`header-small-screen ${isScrolled ? "scrolled" : ""}`}>
      <img src={logo} className="logo" alt="logo" />
      <img
        src={menuLogo}
        className="menu-logo"
        alt="menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <div
        className={`header-small-links-container ${isMenuOpen ? "open" : ""}`}
      >
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
    </header>
  );
};

export default HeaderSmallScreen;
