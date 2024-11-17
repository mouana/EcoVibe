import React from 'react';
import { FaGlobe, FaUserCircle } from 'react-icons/fa'; 

import { NavLink } from 'react-router-dom';



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
        <NavLink to="/signup" className="client-btn">
          <button className="client-btn">Devenir client</button>
          </NavLink>
          <button className="account-btn">
         
               <FaUserCircle size={15} /> Mon espace
           
          </button>
        </div>
      </div>

      <div className="bottom-header">
      <nav>
  <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Accueil</NavLink>
  <NavLink to="/label" className={({ isActive }) => (isActive ? "active" : "")}>Label</NavLink>
  <NavLink to="/simulateur" className={({ isActive }) => (isActive ? "active" : "")}>Simulateur</NavLink>
  <NavLink to="/label1" className={({ isActive }) => (isActive ? "active" : "")}>Label</NavLink>
  <NavLink to="/label2" className={({ isActive }) => (isActive ? "active" : "")}>Label</NavLink>
  <NavLink to="/label3" className={({ isActive }) => (isActive ? "active" : "")}>Label</NavLink>
  <NavLink to="/produits" className={({ isActive }) => (isActive ? "active" : "")}>Produits</NavLink>

</nav>
    </div>
    </div>
  );
};

export default Header;
