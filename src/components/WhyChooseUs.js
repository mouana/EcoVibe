import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Icône pour les points validés

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
        {/* Image */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <img
            src="./WhatsApp Image 2024-11-16 at 01.42.22_7795dfd0.jpg"
            alt="Wind turbine"
            className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto lg:max-w-full"
          />
        </div>

        {/* Texte et points */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-4xl font-bold mb-6">
            Ils nous <span className="text-green-600">choisissent</span>
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante.
          </p>
          <ul className="space-y-6">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 text-2xl mr-4" />
              <span className="text-lg font-medium">Expertise</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 text-2xl mr-4" />
              <span className="text-lg font-medium">Timeliness</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 text-2xl mr-4" />
              <span className="text-lg font-medium">Customization</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 text-2xl mr-4" />
              <span className="text-lg font-medium">Quality Workmanship</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
