import React, { useState } from 'react';
import { FaRegCircle } from 'react-icons/fa'; // Utilisation de React Icons pour l'icône

const SkillsProfiles = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const skillsPerPage = 4;

  // Données des compétences
  const skills = [
    { percentage: 30, label: 'Stratégie de financement des énergies renouvelables' },
    { percentage: 50, label: 'Technologies solaires au Maroc' },
    { percentage: 40, label: 'Optimisation énergétique pour les villes intelligentes' },
    { percentage: 80, label: 'Projets d’infrastructure renouvelables' },
    { percentage: 70, label: 'Gestion de projets d’énergie verte' },
    { percentage: 60, label: 'Collaboration en équipe pour la transition énergétique' },
    { percentage: 75, label: 'Analyse de marché pour l’énergie durable' },
    { percentage: 65, label: 'Développement des infrastructures de recharge de véhicules électriques' },
  ];
  
  // Logique de pagination
  const indexOfLastSkill = selectedPage * skillsPerPage;
  const indexOfFirstSkill = indexOfLastSkill - skillsPerPage;
  const currentSkills = skills.slice(indexOfFirstSkill, indexOfLastSkill);

  const totalPages = Math.ceil(skills.length / skillsPerPage);

  const handlePageChange = (pageNumber) => {
    setSelectedPage(pageNumber);
  };

  return (
    <div className="bg-green-100 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Compétences Professionnelles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-green-200 p-6 rounded-xl shadow-lg"
            >
              <div className="relative mb-4">
                <svg width="100" height="100" className="animate-spin">
                  <circle cx="50" cy="50" r="45" stroke="#e2e8f0" strokeWidth="10" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#4ade80"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={`${skill.percentage} ${100 - skill.percentage}`}
                    strokeDashoffset="25"
                    style={{ transition: 'stroke-dasharray 0.5s ease-in-out' }}
                  />
                </svg>
                <div className="absolute top-0 left-0 right-0 text-center">
                  <span className="text-2xl font-bold">{skill.percentage}%</span>
                </div>
              </div>
              <p className="mt-2 text-lg font-medium">{skill.label}</p>
              {/* Icône en dessous avec un style similaire aux cartes */}
              <div className="mt-4 bg-white p-2 rounded-full border-2 border-green-500">
                <FaRegCircle size={24} color="#4ade80" />
              </div>
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

export default SkillsProfiles;
