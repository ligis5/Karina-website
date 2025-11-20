import "./App.css";
import "./fonts.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pradžia from "./links/pradžia/Pradžia.jsx";
import ApieMane from "./links/apie-mane/Apie-mane.jsx";
import Kainoraštis from "./links/kainoraštis/Kainoraštis.jsx";
import Kontaktai from "./links/kontaktai/Kontaktai.jsx";
import MasažasDetail from "./links/kainoraštis/masažai/MasažasDetail.jsx";
import Galerija from "./links/galerija/Galerija.jsx";
import Header from "./components/header/Header.jsx";

function AppContent() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/Karina-website/"
          element={
            <>
              <div id="home">
                <Pradžia />
              </div>
              <Galerija />
              <ApieMane />
              <Kainoraštis />
              <Kontaktai />
            </>
          }
        />
        <Route
          path="/Karina-website/masazas/:slug"
          element={<MasažasDetail />}
        />
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
