import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ExpertProfiles = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const expertsPerPage = 4;

  // Pagination logic
  const indexOfLastExpert = selectedPage * expertsPerPage;
  const indexOfFirstExpert = indexOfLastExpert - expertsPerPage;
  const currentExperts = experts.slice(indexOfFirstExpert, indexOfLastExpert);

  const totalPages = Math.ceil(experts.length / expertsPerPage);

  const handlePageChange = (pageNumber) => {
    setSelectedPage(pageNumber);
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
      </div>
    </div>
  );
};

// Données des experts
const experts = [
  {
    name: 'Thomas Walkar',
    role: 'Ingénieur en Énergies Renouvelables',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/p4.jpg',
    progress: 90,
  },
  {
    name: 'Mme. Clara Belleville',
    role: 'Analyste en Efficacité Énergétique',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/p2.jpg',
    progress: 40,
  },
  {
    name: 'Dr. Rachid Benkacem',
    role: 'Ingénieur en Technologies Solaires Avancées',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/p3.jpg',
    progress: 50,
  },

  {
    name: 'Fatima Zahra El Alaoui',
    role: 'Experte en Énergies Vertes',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/p5.jpg',
    progress: 60,
  }, {
    name: 'Dr. Emma Lefèvre',
    role: 'Ingénieure en Énergies Renouvelables',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/p20.jpg',
    progress: 25,
  },
  {
    name: 'Jean Dupont',
    role: 'Spécialiste en Biomasse',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/p6.jpg',
    progress: 75,
  },
  {
    name: 'Ahmed Taleb',
    role: 'Consultant en Transition Énergétique',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/p7.jpg',
    progress: 80,
  },
  {
    name: 'Sofia Amrani',
    role: 'Chercheuse en Hydroélectricité',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    image: '/imagesper/p13.jpg',
    progress: 65,
  },
];

export default ExpertProfiles;
