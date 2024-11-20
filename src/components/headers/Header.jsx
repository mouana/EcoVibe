import React from "react";
import { FaGlobe, FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* Top Header */}
      <div className="flex justify-center items-center py-2 px-5 bg-white shadow-md relative">
        <div className="absolute left-5 text-blue-500 text-2xl cursor-pointer">
          <FaGlobe />
        </div>
        <div className="flex justify-center">
          <img src="./logo.png" alt="EcoVibe Logo" className="h-10" />
        </div>
        <div className="absolute right-5 flex gap-3">
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
      </div>

      {/* Bottom Header */}
      <div className="flex justify-center py-4 bg-white border-t border-gray-300 shadow-sm">
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
            to="/NosExperts"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Experts
          </NavLink>
          <NavLink
            to="/label2"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Label
          </NavLink>
          <NavLink
            to="/label3"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Label
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
    </div>
  );
};

export default Header;
