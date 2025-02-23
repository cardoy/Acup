import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.Module.css";
import Home from "./components/Home/Home";
import Acupuntura from "./components/Acupuntura/Acupuntura";
import Sobre  from "./components/Sobre/Sobre";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import "./App.Module.css";


export default function App() {
  return (
    <div className="fundo">
    <Router>
      <div className="layout-container">
      <NavBar />
      <div style={{ height: '65px' }}></div>
      <div className="content"> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inicio" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Acupuntura" element={<Acupuntura />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </div>
      </div>
      </Router>
      <Footer />  
      </div>
  );
}

