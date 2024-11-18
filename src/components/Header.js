import React from 'react';
import { FaGlobe, FaUserCircle } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; // Import Link for routing

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
          <Link to="/" className="active">Accueil</Link>
          <Link to="#label">Label</Link>
          <Link to="#simulator">Simulateur</Link>
          <Link to="#label1">Label</Link>
          <Link to="/service">Service</Link> {/* Link to Service page */}
          <Link to="#label3">Label</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
