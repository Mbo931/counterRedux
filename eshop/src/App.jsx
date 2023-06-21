import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Profil from "./views/Profil";
import Panier from "./views/Panier";
import './App.css';
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </>
      
    
  );
}

export default App;
