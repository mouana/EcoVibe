import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa'; // Import des icônes React

const SolutionsSection = () => {
  return (
    <section id='formation' className="py-16 bg-gray-100">
      {/* Titre principal */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">
          Nous proposons <span className="text-green-600">des solutions clés</span>, pour vous
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
        Nous offrons des solutions clés en main pour l’installation de panneaux solaires, permettant aux entreprises et foyers de produire leur propre électricité et de réduire leur empreinte carbone.
        </p>
      </div>

      {/* Contenu principal avec Mission */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:space-x-10">
        {/* Section Mission */}
        <div className="bg-white p-8 rounded-lg shadow-lg lg:w-1/2 mb-8 lg:mb-0 flex items-start">
          <div className="text-green-600 text-4xl mr-4">
            <FaBullseye /> 
          </div>
          <div>
            <h3 className="text-2xl font-semibold  mb-4"><span className="text-green-600">Notre</span> Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
            Notre mission est de rendre l’énergie solaire accessible à tous, en offrant des solutions fiables et durables pour aider à la transition énergétique.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={`${process.env.PUBLIC_URL}/service/img2.png`}
            alt="Wind turbine and solar panels"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Contenu secondaire avec Vision */}
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-between lg:space-x-10 mt-16">
        {/* Section Vision */}
        <div className="bg-white p-8 rounded-lg shadow-lg lg:w-1/2 mb-8 lg:mb-0 flex items-start">
          <div className="text-green-600 text-4xl mr-4">
            <FaEye /> {/* Icône pour la vision */}
          </div>
          <div>
            <h3 className="text-2xl font-semibold  mb-4"><span className="text-green-600">Notre</span> Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
            Nous visons un avenir où l’énergie renouvelable est la norme, en contribuant activement à la réduction de l’empreinte écologique avec des solutions innovantes.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={`${process.env.PUBLIC_URL}/service/WhatsApp-Image-2024-11-16-at-00.45.38_8fb5b4a8.jpg`} // Fixed the filename for spaces and special characters
            alt="Sustainable energy solutions"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
