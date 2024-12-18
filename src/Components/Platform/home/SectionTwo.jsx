import React, { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Énergie Éolienne",
    description:
      "Adoptez la puissance du vent avec nos solutions d'énergie éolienne de pointe. Nos services incluent des parcs éoliens terrestres et en mer, garantissant une capture maximale de l'énergie. Transformez votre environnement avec une énergie renouvelable qui façonne un avenir plus propre.",
    imgSrc: "./homephotos/Custom-Luxury-Home-Dallas.jpg",
  },
  {
    id: 2,
    title: "Énergie Solaire",
    description:
      "Exploitez le potentiel du soleil avec nos services d'énergie solaire. Des toits résidentiels aux grandes fermes solaires, nous concevons et mettons en place des systèmes photovoltaïques efficaces qui réduisent votre empreinte carbone et vos coûts énergétiques",
    imgSrc: "./homephotos/energies_renouvelables_grand_est_2023.jpg",
  },
  {
    id: 3,
    title: "Énergie Hydraulique",
    description:
      "Découvrez la puissance de l'eau avec nos solutions d'énergie hydraulique. Nous proposons des technologies de pointe pour exploiter les rivières et les ruisseaux, offrant ainsi une énergie durable et fiable pour votre communauté ou votre entreprise. Ensemble, alimentons l'avenir avec des ressources propres et renouvelables",
    imgSrc: "./homephotos/P22.jpg",
  },
];

const SectionTwo = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gray-100 p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
        Découvrez nos services
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
        {/* Left Section */}
        <div
          className="relative w-full lg:w-2/3 mb-6 lg:mb-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={selectedService.imgSrc}
              alt={selectedService.title}
              className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg transform transition-transform duration-500"
            />
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                isHovered ? "bg-black bg-opacity-50 opacity-100" : "bg-transparent opacity-0"
              }`}
            >
              <p
                className={`text-white text-base sm:text-lg md:text-xl font-bold transition-opacity duration-500 text-center ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                {selectedService.description}
              </p>
              <button
                className={`mt-2 px-3 py-2 bg-blue-500 text-white text-sm md:text-base font-semibold rounded-lg transition-opacity duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <Link className="text-white text-decoration-none" to="/service">
                  Voir plus
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 flex flex-col space-y-4 sm:space-y-6 mx-2 sm:mx-4">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`cursor-pointer flex items-center space-x-3 sm:space-x-4 transition-transform duration-300 transform ${
                selectedService.id === service.id ? "scale-105" : ""
              }`}
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h2 className="text-sm sm:text-lg font-semibold">{service.title}</h2>
                <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm">
                  {service.description.substring(0, 40)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
