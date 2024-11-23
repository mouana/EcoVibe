import React, { useState } from 'react';

const ProjectCards = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = {
    1: [
      {
        title: 'Noor Ouarzazate',
        image: '/imagesper/v1.jpg',
        description: 'Le plus grand complexe solaire au monde situé à Ouarzazate, fournissant de l’électricité à des millions au Maroc.',
        progress: '100%',
      },
      {
        title: 'Parc Éolien de Tarfaya',
        image: '/imagesper/v2.jpg',
        description: 'Un projet majeur de 131 éoliennes produisant de l’énergie propre et durable pour réduire les émissions de CO2.',
        progress: '90%',
      },
      {
        title: 'Programme National de Biomasse',
        image: '/imagesper/v3.jpg',
        description: 'Utilisation des déchets agricoles et organiques pour produire de l’énergie renouvelable et réduire les déchets.',
        progress: '75%',
      },
      {
        title: 'Parc Éolien de Tanger',
        image: '/imagesper/v4.jpg',
        description: 'Un des premiers grands parcs éoliens du Maroc, jouant un rôle clé dans l’augmentation de la capacité éolienne.',
        progress: '100%',
      },
      {
        title: 'Parc Solaire Noor Laâyoune',
        image: '/imagesper/v5.jpg',
        description: 'Un projet solaire dans le sud marocain pour exploiter le potentiel énergétique de la région.',
        progress: '100%',
      },
      {
        title: 'Biogaz de Casablanca',
        image: '/imagesper/v6.jpg',
        description: 'Conversion des déchets organiques de la ville en biogaz pour une énergie durable.',
        progress: '65%',
      },
      {
        title: 'Énergie Verte à Khouribga',
        image: '/imagesper/v7.jpg',
        description: 'Un projet solaire visant à alimenter l’industrie phosphatière tout en réduisant l’empreinte carbone.',
        progress: '90%',
      },
      {
        title: 'Programme Éolien de Dakhla',
        image: '/imagesper/v8.jpg',
        description: 'Développement de parcs éoliens pour soutenir les initiatives de développement durable dans la région de Dakhla.',
        progress: '75%',
      },
    ],
    2: [
      {
        title: 'Centrale de Boujdour',
        image: '/imagesper/v9.jpg',
        description: 'Un projet d’énergie éolienne pour développer l’infrastructure énergétique dans la région de Boujdour.',
        progress: '85%',
      },
      {
        title: 'Recyclage des Batteries Solaires',
        image: '/imagesper/v10.jpg',
        description: 'Programme national pour recycler les anciennes batteries solaires et minimiser les déchets électroniques.',
        progress: '50%',
      },
      {
        title: 'Noor Boujdour',
        image: '/imagesper/v11.png',
        description: 'Nouvelle centrale solaire pour renforcer la capacité énergétique du sud marocain.',
        progress: '95%',
      },
      {
        title: 'Parc Éolien à Oualidia',
        image: '/imagesper/v12.jpg',
        description: 'Projet éolien combinant énergie propre et préservation écologique des zones côtières.',
        progress: '80%',
      },
      {
        title: 'Noor Midelt',
        image: '/imagesper/v13.jpg',
        description: 'Un complexe solaire hybride combinant technologies CSP et PV pour une production énergétique optimale.',
        progress: '70%',
      },
      {
        title: 'Hydroélectricité d’Al Wahda',
        image: '/imagesper/v14.jpg',
        description: 'Utilisation du barrage Al Wahda pour générer de l’énergie propre et réduire la dépendance aux combustibles fossiles.',
        progress: '95%',
      },
      {
        title: 'Ferme Éolienne de Essaouira',
        image: '/imagesper/v15.jpg',
        description: 'Un projet éolien près d’Essaouira contribuant à la préservation de l’environnement côtier et à l’énergie durable.',
        progress: '85%',
      },
      {
        title: 'Station Solaire de Tata',
        image: '/imagesper/v16.jpg',
        description: 'Exploitation du potentiel solaire de Tata pour un projet à grande échelle visant l’autosuffisance énergétique.',
        progress: '60%',
      },
    ],
    3: [
      {
        title: 'Énergie Solaire à Zagora',
        image: '/imagesper/v17.jpg',
        description: 'Installation de panneaux solaires dans les zones rurales pour électrifier les foyers isolés.',
        progress: '80%',
      },
      {
        title: 'Parc Éolien de Laâyoune',
        image: '/imagesper/v18.jpg',
        description: 'Un parc éolien stratégique pour soutenir les initiatives de durabilité énergétique dans le sud marocain.',
        progress: '90%',
      },
      {
        title: 'Centrale Solaire à Marrakech',
        image: '/imagesper/v19.jpg',
        description: 'Fournir de l’énergie propre pour répondre aux besoins croissants en électricité de la ville ocre.',
        progress: '95%',
      },
      {
        title: 'Biomasse de Fès',
        image: '/imagesper/v20.jpg',
        description: 'Utilisation des déchets urbains pour produire une énergie alternative et réduire la pollution.',
        progress: '70%',
      },
      {
        title: 'Microcentrales Hydroélectriques',
        image: '/imagesper/v21.jpg',
        description: 'Développement de microcentrales pour alimenter les villages montagneux en énergie propre.',
        progress: '60%',
      },
  
    ],
  };

  const projects = projectsData[selectedPage];

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto px-4 w-full max-w-screen-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
            style={{ minHeight: '300px' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p
                  className="text-gray-600 mb-2 line-clamp-3"
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2, 
                  }}
                >
                  {project.description}
                </p>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full h-3 flex-grow mr-2">
                  <div
                    className="bg-green-500 rounded-full h-3"
                    style={{ width: project.progress }}
                  ></div>
                </div>
                <span className="text-green-500 text-sm font-bold">{project.progress}</span>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-1 px-3 rounded ml-2"
                  onClick={() => handleProjectClick(project)}
                >
                  Voir plus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
  
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 text-sm ${selectedPage === page ? 'bg-green-500 text-white' : 'bg-white text-green-500'} border border-green-500 rounded-lg mx-1`}
          >
            {page}
          </button>
        ))}
      </div>
   
      {/* Modale */}
      {selectedProject && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full h-4 flex-grow mr-2">
                  <div
                    className="bg-green-500 rounded-full h-4"
                    style={{ width: selectedProject.progress }}
                  ></div>
                </div>
                <span className="text-green-500 font-bold">{selectedProject.progress}</span>
              </div>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded mt-4"
                onClick={handleCloseModal}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCards;