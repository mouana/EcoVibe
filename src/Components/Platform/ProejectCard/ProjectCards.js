import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/projet');
        const formattedProjects = response.data.map((item) => ({
          id: item.id,
          title: item.type,
          image: `${process.env.PUBLIC_URL}/storage/${item.image}`,
          description: item.details,
          progress: item.status === 'en cours' ? '50%' : '100%',
          location: item.location,
        }));
        setProjects(formattedProjects);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load projects.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  if (loading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 w-full max-w-screen-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
        {projects.map((project) => (
          <div
            key={project.id}
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

      {/* Modal */}
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
              <p className="text-gray-500">Location: {selectedProject.location}</p>
              <div className="flex items-center mt-2">
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
