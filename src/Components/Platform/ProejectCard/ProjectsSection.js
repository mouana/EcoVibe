import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const handleSavoirPlus = () => {
    window.scrollTo({
      top: document.getElementById("projet").offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div 
      className="flex items-center justify-start h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/imagesper/foter2.jpg')", width: "100%" }}
    >
      <div 
        className="bg-blue-500 bg-opacity-90 rounded-lg p-8 text-center w-50" 
       
      >
        <h1 className="text-3xl font-bold text-white mb-4">  Découvrir</h1>
        <h2 className="text-xl text-white mb-6" id='projet'>Nos Projets</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition" 
        onClick={handleSavoirPlus}
         >
          Découvrir 
          
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;