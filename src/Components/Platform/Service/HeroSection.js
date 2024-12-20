import React from 'react';
import CountUp from 'react-countup';

const formatNumber = (value) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`; // Formate les grands nombres avec "K"
  }
  return value; // Retourne la valeur pour les petits nombres
};

const HeroSection = () => {
  const handleSavoirPlus = () => {
    window.scrollTo({
      top: document.getElementById("formation").offsetTop,
      behavior: "smooth",
    });
  };
  const handleCommencer = () => {
    window.scrollTo({
      top: document.getElementById("commencer").offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/service/img1.png)` }} >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        {/* Titre */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Apprenez les meilleures pratiques pour une gestion énergétique durable
        </h1>
        
        {/* Boutons */}
        <div className="flex space-x-4 mb-8">
          <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700" onClick={handleSavoirPlus}>En savoir plus</button>
          <button className="bg-green-600 px-6 py-2 rounded hover:bg-green-700" onClick={handleCommencer}>Commencer</button>
        </div>
        
        {/* Statistiques */}
        <div className="flex flex-wrap space-x-6 bg-white text-gray-800 p-4 rounded shadow-md">
  <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
    <span className="block text-2xl font-bold text-green-600">
      <CountUp end={15} duration={3} />+
    </span>
    <span>Années d'expérience</span>
  </div>
  <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
    <span className="block text-2xl font-bold text-green-600">
      <CountUp
        end={10000}
        duration={3}
        separator=","
        formattingFn={(value) => formatNumber(value)} // Utilisation de la fonction de formatage
      />
      +
    </span>
    <span>Produits</span>
  </div>
  <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
    <span className="block text-2xl font-bold text-green-600">
      <CountUp
        end={5000}
        duration={3}
        separator=","
        formattingFn={(value) => formatNumber(value)} // Utilisation de la fonction de formatage
      />
      +
    </span>
    <span>Clients satisfaits</span>
  </div>
  <div className="text-center w-full sm:w-auto">
    <span className="block text-2xl font-bold text-green-600">
      <CountUp end={87} duration={3} />+
    </span>
    <span>Membres de l'équipe locale</span>
  </div>
</div>

      </div>
    </section>
  );
};

export default HeroSection;
