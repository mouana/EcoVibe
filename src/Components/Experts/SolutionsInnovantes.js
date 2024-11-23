import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importation de l'icône

const SolutionsInnovantes = () => {
  return (
    <div
      className="flex items-start justify-start min-h-screen"
      style={{
        backgroundImage: "url('/imagesper/footer.jpg')", // Arrière-plan
        backgroundRepeat: "no-repeat", // Empêche la répétition
        backgroundSize: "cover", // Ajuste l'image pour couvrir toute la page
        backgroundAttachment: "fixed", // Garde l'image fixe lors du défilement
      }}
    >
      <div className="flex flex-col min-h-screen pl-8">
        {/* Tout le contenu principal */}
        <div className="bg-black shadow-lg rounded-lg p-8 max-w-lg text-center text-white mb-4 bg-opacity-30">
          <h1 className="text-2xl font-bold mb-4">
            Solutions Innovantes pour le Développement de l'Énergie Durable
          </h1>
          <p className="mb-6">
            Nous offrons des solutions innovantes qui favorisent la durabilité
            et permettent l'énergie propre pour un avenir vert.
          </p>
          <h2 className="text-xl font-semibold mb-2">
            Expertise en Technologies Renouvelables :
          </h2>
          <ul className="list-disc list-inside mb-4 text-left">
            <li>Spécialités dans les énergies renouvelables.</li>
            <li>
              Solutions personnalisées : systèmes énergétiques et de stockage
              d'énergie.
            </li>
            <li>
              Innovation Durable : aide sur la réduction des coûts et
              l'amélioration de l'efficacité.
            </li>
            <li>
              Approche Axée sur le Client : personnalisation de nos solutions en
              fonction de vos besoins spécifiques.
            </li>
            <li>
              Innovations Continues : utilisation des dernières technologies et
              pratiques pour promouvoir l'adoption des énergies renouvelables.
            </li>
          </ul>

          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center gap-2">
            
            <FaArrowRight /> {/* Icône flèche */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionsInnovantes;