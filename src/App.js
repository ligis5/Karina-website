import "./App.css";
import "./fonts.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import logo from "./components/img/logo-icon.png";
import Pradžia from "./links/pradžia/Pradžia.jsx";
import ApieMane from "./links/apie-mane/Apie-mane.jsx";
import Kainoraštis from "./links/kainoraštis/Kainoraštis.jsx";
import Kontaktai from "./links/kontaktai/Kontaktai.jsx";
import MasažasDetail from "./links/kainoraštis/masažai/MasažasDetail.jsx";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="App">
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <img src={logo} className="logo" alt="logo" />
        <div className="header-links">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="linklike pradžia"
          >
            <h1>Pradžia</h1>
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="linklike apie-mane"
          >
            <h1>Apie Mane</h1>
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("menu")}
            className="linklike kainorastis"
          >
            <h1>Kainoraštis</h1>
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="linklike kontaktai"
          >
            <h1>Kontaktai</h1>
          </button>
        </div>
        <div className="fill-in"></div>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Pradžia />
              </div>
              <ApieMane />
              <Kainoraštis />
              <Kontaktai />
            </>
          }
        />
        <Route path="/masazas/:slug" element={<MasažasDetail />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
