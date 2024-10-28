import React from 'react';
import { FaGlobe, FaUserCircle } from 'react-icons/fa'; 


const Header = () => {
  return (
    <div>
      <div className="top-header">
        <div className="language-icon">
          <FaGlobe size={24} /> 
        </div>
        <div className="logo">
          <img src="./logo.png" alt="EcoVibe Logo" />
        </div>
        <div className="header-buttons">
          <button className="client-btn">Devenir client</button>
          <button className="account-btn">
            <FaUserCircle size={15} /> Mon espace
          </button>
        </div>
      </div>

      <div className="bottom-header">
        <nav>
          <a href="#home" className="active">Accueil</a>
          <a href="#label">Label</a>
          <a href="#simulator">Simulateur</a>
          <a href="#label1">Label</a>
          <a href="#label2">Label</a>
          <a href="#label3">Label</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
