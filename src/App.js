import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Contato from "./components/pages/Contato";
import Historia from "./components/pages/Historia";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Midias from "./components/pages/Midias";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/midias" element={<Midias />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
