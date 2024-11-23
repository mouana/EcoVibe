import React, { useState } from "react";
import { FaGlobe, FaUserCircle, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Top Header */}
      <div className="flex items-center py-2 px-5 bg-white shadow-md relative">
        {/* Globe Icon */}
        <div className="absolute left-5 text-blue-500 text-2xl cursor-pointer">
          <FaGlobe />
        </div>
        {/* Logo */}
        <div className="flex-grow flex justify-center">
          <img src="./logo.png" alt="EcoVibe Logo" className="h-10" />
        </div>
        {/* Buttons */}
        <div className="absolute right-5 hidden md:flex gap-3">
          <NavLink to="/signup">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
              Devenir client
            </button>
          </NavLink>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded flex items-center gap-2">
            <FaUserCircle size={15} />
            Mon espace
          </button>
        </div>
        {/* Burger Menu */}
        <div className="flex md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>

      {/* Bottom Header */}
      <div className="hidden md:flex justify-center py-4 bg-white border-t border-gray-300 shadow-sm">
        <nav className="flex gap-14">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/label"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Label
          </NavLink>
          <NavLink
            to="/simulateur"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Simulateur
          </NavLink>
          <NavLink
            to="/Expert"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Experts
          </NavLink>
          <NavLink
            to="/Card"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Card
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Service
          </NavLink>
        </nav>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full top-16 left-0 flex flex-col items-center gap-4 py-4 z-10">
          <NavLink to="/" className="text-gray-800" onClick={toggleMenu}>
            Accueil
          </NavLink>
          <NavLink to="/label" className="text-gray-800" onClick={toggleMenu}>
            Label
          </NavLink>
          <NavLink to="/simulateur" className="text-gray-800" onClick={toggleMenu}>
            Simulateur
          </NavLink>
          <NavLink to="/Expert" className="text-gray-800" onClick={toggleMenu}>
            Experts
          </NavLink>
          <NavLink to="/Card" className="text-gray-800" onClick={toggleMenu}>
          Card
          </NavLink>
          <NavLink to="/service" className="text-gray-800" onClick={toggleMenu}>
            Service
          </NavLink>
          <NavLink to="/signup" className="text-gray-800" onClick={toggleMenu}>
            Devenir client
          </NavLink>
          <button className="flex items-center gap-2 text-gray-800" onClick={toggleMenu}>
            <FaUserCircle />
            Mon espace
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
