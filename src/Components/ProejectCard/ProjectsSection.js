import React from 'react';

const ProjectsSection = () => {
  return (
    <div 
      className="flex items-center justify-start h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/imagesper/foter2.jpg')", width: "100%" }}
    >
      <div 
        className="bg-blue-500 bg-opacity-90 rounded-lg p-8 text-left" 
        style={{
          transform: 'rotateZ(-0.60rad)', // Rotation du contenu
          width: '600px', // Taille réduite de l'élément
          height: '280px', // Hauteur réduite
          borderRadius: '140px', // Bordure arrondie réduite
        }}
      >
        <h1 className="text-3xl font-bold text-white mb-4">  Découvrir</h1>
        <h2 className="text-xl text-white mb-6">Nos Projets</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          Découvrir
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;