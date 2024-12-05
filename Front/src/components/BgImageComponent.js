import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ExpertProfiles = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedExpert, setSelectedExpert] = useState(null); // Ajouter un état pour l'expert sélectionné
  const expertsPerPage = 4;

  // Pagination logic
  const indexOfLastExpert = selectedPage * expertsPerPage;
  const indexOfFirstExpert = indexOfLastExpert - expertsPerPage;
  const currentExperts = experts.slice(indexOfFirstExpert, indexOfLastExpert);

  const totalPages = Math.ceil(experts.length / expertsPerPage);

  const handlePageChange = (pageNumber) => {
    setSelectedPage(pageNumber);
  };

  const handleExpertClick = (expert) => {
    setSelectedExpert(expert); // Mettre à jour l'expert sélectionné
  };

  const handleCloseDescription = () => {
    setSelectedExpert(null); // Fermer la description détaillée
  };

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentExperts.map((expert) => (
            <div
              key={expert.name}
              className="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              {/* Image circulaire de l'expert */}
              <div className="w-24 h-24 mb-4">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover rounded-full border-4 border-green-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{expert.name}</h3>
              <p className="mb-4">{expert.role}</p>
              <div className="flex space-x-3 mb-4">
                <a href={expert.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-green-600 text-xl" />
                </a>
                <a href={expert.twitter} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="text-green-600 text-xl" />
                </a>
                <a href={expert.instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-green-600 text-xl" />
                </a>
              </div>
              <div className="w-full h-1 bg-gray-300 mb-4">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${expert.progress}%` }}
                ></div>
              </div>
              <p className="text-center">{expert.progress}% Complété</p>
              <button
                onClick={() => handleExpertClick(expert)} // Afficher la description détaillée
                className="mt-4 text-green-600 hover:text-green-800 text-sm font-semibold"
              >
                Voir Description
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 ${
                selectedPage === index + 1
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-green-500'
              } border border-green-500 rounded-lg mx-1`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Affichage de la description détaillée */}
        {selectedExpert && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-2xl font-bold mb-4">{selectedExpert.name}</h2>
              <p className="mb-4">{selectedExpert.role}</p>
              <div className="w-24 h-24 mb-4">
                <img
                  src={selectedExpert.image}
                  alt={selectedExpert.name}
                  className="w-full h-full object-cover rounded-full border-4 border-green-500"
                />
              </div>
              <p className="mb-4">{selectedExpert.description || 'Pas de description disponible.'}</p>
              <button
                onClick={handleCloseDescription}
                className="bg-gray-500 text-white px-4 py-2 rounded-full"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Données des experts avec description
const experts = [
  {
    name: 'Yassine El Idrissi',
    role: 'Ingénieur en Énergies Renouvelables',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/2.jpg',
    progress: 85,
    description: 'Yassine El Idrissi est un ingénieur marocain spécialisé dans les énergies renouvelables, avec une expertise en énergie solaire et éolienne au Maroc.',
  },
  {
    name: 'Mme. Salma Benjelloun',
    role: 'Consultante en Transition Énergétique',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/pe1.jpeg',
    progress: 70,
    description: 'Salma Benjelloun est une consultante marocaine en transition énergétique, œuvrant pour des solutions durables dans les zones rurales du Maroc.',
  },
  {
    name: 'Dr. Rachid Benkacem',
    role: 'Ingénieur en Technologies Solaires Avancées',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/per2.jpeg',
    progress: 50,
    description: 'Dr. Rachid Benkacem est un expert marocain reconnu pour ses travaux sur les technologies solaires avancées et la gestion de projets énergétiques.',
  },
  {
    name: 'Fatima Zahra El Alaoui',
    role: 'Experte en Énergies Vertes',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/per3.jpeg',
    progress: 60,
    description: 'Fatima Zahra El Alaoui est une experte marocaine en énergies vertes, développant des solutions durables pour améliorer la vie dans les villages reculés du Maroc.',
  },
  {
    name: 'Dr. Sofia Bakkali',
    role: 'Chercheuse en Hydroélectricité',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/per4.jpeg',
    progress: 65,
    description: 'Dr. Sofia Bakkali est une chercheuse marocaine travaillant sur des projets d’amélioration des barrages hydroélectriques pour une énergie propre au Maroc.',
  },
  {
    name: 'Khalid Amrani',
    role: 'Spécialiste en Biomasse Énergétique',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/per5.jpeg',
    progress: 75,
    description: 'Khalid Amrani est un spécialiste marocain en biomasse, transformant les déchets organiques en énergie pour les entreprises locales.',
  },
  {
    name: 'Dr. Laila Toumi',
    role: 'Analyste en Efficacité Énergétique',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/per6.jpeg',
    progress: 40,
    description: 'Dr. Laila Toumi est une analyste marocaine en efficacité énergétique, collaborant sur des projets de bâtiments écologiques au Maroc.',
  },
  {
    name: 'Ahmed Taleb',
    role: 'Consultant en Transition Énergétique',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/p7.jpg',
    progress: 80,
    description: 'Ahmed Taleb est un consultant marocain, conseillant des entreprises et des gouvernements sur les pratiques écologiques dans le contexte marocain.',
  },
];


export default ExpertProfiles;
