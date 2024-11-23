import React from 'react';
import { FaLeaf, FaTree, FaUserTie, FaSeedling, FaWater, FaSprayCan } from 'react-icons/fa';

const services = [
  {
    icon: <FaLeaf size={36} />,
    title: 'Lawn Care',
    text: 'Lorem ipsum dolor sit anet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas.',
  },
  {
    icon: <FaTree size={36} />,
    title: 'Tree and Shrub Care',
    text: 'Lorem ipsum dolor sit anet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas.',
  },
  {
    icon: <FaUserTie size={36} />,
    title: 'Free Consultations',
    text: 'Lorem ipsum dolor sit anmet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas.',
  },
  {
    icon: <FaSeedling size={36} />,
    title: 'Garden Design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas.',
  },
  {
    icon: <FaWater size={36} />,
    title: 'Water Features',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas.',
  },
  {
    icon: <FaSprayCan size={36} />,
    title: 'Irrigation Systems',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 bg-gray-100"> {/* Background homogène */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Nos travaux et services <span className="text-green-600">des produits Énergétique</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4 text-green-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">
                {/** Mise en vert uniquement pour les mots spécifiques */}
                {service.title.split(' ').map((word, i) =>
                  ['Care', 'Shrub', 'Consultations', 'Design', 'Features', 'Systems'].includes(word) ? (
                    <span key={i} className="text-green-600">{word} </span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </h3>
              <p className="text-sm text-gray-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
