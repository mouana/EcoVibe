import React from 'react';
import { Link } from 'react-router-dom';
const SectionFour = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-10 gap-16 bg-[#c9eed55c] h-[80vh] mt-5">
      <div className="relative w-full md:w-1/2 flex justify-center">
        <div className="absolute top-5 left-10 w-72 h-60 bg-[#82d49d54] rounded-lg z-0"></div>
        <img
          src="./image3.jpeg"
          alt="Energies Renouvelables"
          className="relative z-10 rounded-lg w-80"
        />
<div className="absolute bottom-[-60px] left-56 bg-[#82D49D] text-white font-bold p-4 w-40 h-36 flex items-center justify-center text-center rounded-lg shadow-lg z-20 hidden sm:flex">
Agissez pour la planète et économisez dès aujourd'hui
        </div>
      </div>
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-2xl text-gray-800 mb-4">
          Pourquoi Choisir les Énergies Renouvelables
        </h2>
        <p className="text-gray-600 mb-6">
          Les énergies renouvelables offrent une énergie propre et économique, réduisant votre impact
          environnemental tout en vous faisant économiser. Adoptez des solutions durables pour un avenir
          plus vert.
        </p>
        <button className="px-3 py-2 bg-blue-500 text-white rounded-md font-bold hover:bg-blue-600">
        <Link className="text-white text-decoration-none " to ="/devis">Découvrez</Link>
        </button>
      </div>
    </div>
  );
};

export default SectionFour;
