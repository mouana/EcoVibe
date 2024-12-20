import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ExpertProfiles = () => {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const expertsPerPage = 4;

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/expert");
        setExperts(response.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Une erreur est survenue lors du chargement des experts."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchExperts();
  }, []);

  // Pagination logic
  const indexOfLastExpert = selectedPage * expertsPerPage;
  const indexOfFirstExpert = indexOfLastExpert - expertsPerPage;
  const currentExperts = experts.slice(indexOfFirstExpert, indexOfLastExpert);
  const totalPages = Math.ceil(experts.length / expertsPerPage);

  const handlePageChange = (pageNumber) => {
    setSelectedPage(pageNumber);
  };

  const handleExpertClick = (expert) => {
    setSelectedExpert(expert);
  };

  const handleCloseDescription = () => {
    setSelectedExpert(null);
  };

  if (loading) return <div className="text-center mt-10">Chargement...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-600">{error}</div>;

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentExperts.map((expert) => (
            <div
              key={expert.id}
              className="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              <div className="w-24 h-24 mb-4">
                <img
                  src={
                    expert.image && expert.image !== "null"
                      ? `${process.env.PUBLIC_URL}/storage/${expert.image}`  
                      : "https://via.placeholder.com/96"
                  }                  
                  alt={expert.Nom || "Expert"}
                  className="w-full h-full object-cover rounded-full border-4 border-green-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{expert.nom_prenom}</h3>
              <p className="mb-4">{expert.specialty}</p>
              <div className="flex space-x-3 mb-4">
                <a
                  href={`mailto:${expert.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-green-600 text-xl"
                  />
                </a>
                <a
                  href={`tel:${expert.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-green-600 text-xl"
                  />
                </a>
              </div>
              <button
                onClick={() => handleExpertClick(expert)}
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
                  ? "bg-green-500 text-white"
                  : "bg-white text-green-500"
              } border border-green-500 rounded-lg mx-1`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Detailed Description */}
        {selectedExpert && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">
              <div className="w-24 h-24 mb-4">
                <img
                  src={
                    selectedExpert.image
                      ? `${process.env.PUBLIC_URL}/storage/${selectedExpert.image}`
                      : "https://via.placeholder.com/96"
                  }
                  alt={selectedExpert.NometPrenom || "Expert"}
                  className="w-full h-full object-cover rounded-full border-4 border-green-500"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">
                {selectedExpert.NometPrenom}
              </h2>
              <p className="mb-4">{selectedExpert.specialty}</p>
              <p className="mb-4 max-h-96 break-words">
                {selectedExpert.biography || "Pas de biographie disponible."}
              </p>
              <p className="mb-2 text-secondary">
                Email: {selectedExpert.email}
              </p>
              <p className="mb-2 text-secondary">
                Téléphone: {selectedExpert.phone}
              </p>

              <button
                onClick={handleCloseDescription}
                className="bg-gray-500 text-white px-4 py-2 rounded-full mt-4"
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

export default ExpertProfiles;
