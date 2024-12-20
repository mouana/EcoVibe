import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Icône pour les points validés

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
        {/* Image */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <img
            src={`${process.env.PUBLIC_URL}/service/Eolienne.jpg`}
            alt="Éolienne"
            className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto lg:max-w-full"
          />
        </div>

        {/* Texte et points */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-4xl font-bold mb-6">
            Ils nous <span className="text-green-600">choisissent</span>
          </h2>
          <p className="text-gray-700 text-lg mb-8">
          Chez EcoVibe, nous nous engageons à offrir des solutions innovantes et durables pour répondre aux besoins de nos clients. Avec notre équipe d'experts passionnés, nous garantissons des résultats de qualité, livrés dans les délais et adaptés aux exigences spécifiques de chaque projet. Nous plaçons toujours la satisfaction de nos clients au cœur de nos priorités et veillons à offrir un service personnalisé, qui dépasse leurs attentes.          </p>
          <ul className="space-y-6">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 text-2xl mr-4" />
              <span className="text-lg font-medium">Expertise</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 text-2xl mr-4" />
              <span className="text-lg font-medium">Ponctualité</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 text-2xl mr-4" />
              <span className="text-lg font-medium">Personnalisation</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 text-2xl mr-4" />
              <span className="text-lg font-medium">Qualité du travail</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
