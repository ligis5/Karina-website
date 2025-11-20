import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderBigScreen from "./HeaderBigScreen.jsx";
import useIsMobile from "../isMobile.jsx";
import HeaderSmallScreen from "./HeaderSmallScreen.jsx";

const Header = () => {
  const isMobile = useIsMobile();
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
    if (location.pathname !== "/Karina-website/") {
      navigate("/Karina-website/");
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
    <>
      {isMobile ? (
        <HeaderSmallScreen
          isScrolled={isScrolled}
          scrollToSection={scrollToSection}
        />
      ) : (
        <HeaderBigScreen
          isScrolled={isScrolled}
          scrollToSection={scrollToSection}
        />
      )}
    </>
  );
};

export default Header;
