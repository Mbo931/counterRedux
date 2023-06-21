import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Profil from "./views/Profil";
import Panier from "./views/Panier";
import './App.css';
import Navbar from "./components/header/Navbar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    // Ajouter ou supprimer la classe "dark" sur la balise body
    document.body.classList.toggle('dark');
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  };
  return (
    <>
    <div className={isDarkMode ? 'dark' : 'light-mode'}>
    <Navbar toggleMode={toggleMode} isDarkMode={isDarkMode} className={isDarkMode ? 'dark-mode' : 'light-mode'} />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </div>
    </>
      
    
  );
}

export default App;
