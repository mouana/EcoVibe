import React from 'react';
import { FaLeaf, FaTree, FaUserTie, FaSeedling, FaWater, FaSprayCan } from 'react-icons/fa';

const services = [
  {
    icon: <FaLeaf size={36} />,
    title: 'Entretien de pelouse',
    text: 'Nous offrons des services complets d\'entretien de pelouse, y compris la tonte, la fertilisation et l\'aération pour garantir une pelouse saine et verdoyante tout au long de l\'année.',
  },
  {
    icon: <FaTree size={36} />,
    title: 'Entretien des arbres et arbustes',
    text: 'Nos experts en arboriculture prennent soin de vos arbres et arbustes, y compris la taille, le traitement des maladies et l\'élagage pour assurer leur croissance optimale.',
  },
  {
    icon: <FaUserTie size={36} />,
    title: 'Consultations gratuites',
    text: 'Nous proposons des consultations gratuites pour évaluer vos besoins paysagers et vous aider à concevoir le projet qui correspond à vos attentes et à votre budget.',
  },
  {
    icon: <FaSeedling size={36} />,
    title: 'Conception de jardins',
    text: 'Nos designers paysagistes créent des jardins sur mesure en fonction de vos goûts et de votre environnement, en intégrant des plantes locales et des éléments naturels pour un design harmonieux.',
  },
  {
    icon: <FaWater size={36} />,
    title: 'Aménagements aquatiques',
    text: 'Nous créons des aménagements aquatiques tels que des étangs, des fontaines et des ruisseaux pour apporter une touche de sérénité et d\'élégance à votre espace extérieur.',
  },
  {
    icon: <FaSprayCan size={36} />,
    title: 'Systèmes d\'irrigation',
    text: 'Nous installons des systèmes d\'irrigation efficaces qui garantissent une distribution optimale de l\'eau tout en réduisant la consommation et en maintenant la santé de vos plantes.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 bg-gray-100"> {/* Background homogène */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Nos travaux et services <span className="text-green-600">des produits Énergétiques</span>
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
