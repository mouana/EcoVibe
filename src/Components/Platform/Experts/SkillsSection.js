import React, { useState } from 'react';
import { FaRegCircle } from 'react-icons/fa';

const SkillsProfiles = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const skillsPerPage = 4;

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

  const indexOfLastSkill = selectedPage * skillsPerPage;
  const indexOfFirstSkill = indexOfLastSkill - skillsPerPage;
  const currentSkills = skills.slice(indexOfFirstSkill, indexOfLastSkill);

  const totalPages = Math.ceil(skills.length / skillsPerPage);

  const handlePageChange = (pageNumber) => {
    setSelectedPage(pageNumber);
  };

  const getStrokeDasharray = (percentage) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    return `${(percentage / 100) * circumference} ${circumference}`;
  };

  return (
    <div className="bg-green-50 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green-700">
          Compétences Professionnelles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative mb-4">
                <svg width="100" height="100" className="transform transition-transform duration-500 hover:scale-110">
                  {/* Portion grise (reste du cercle) */}
                  <circle cx="50" cy="50" r="45" stroke="#e2e8f0" strokeWidth="10" fill="none" />
                  {/* Portion verte (progressive) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#4ade80"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={getStrokeDasharray(skill.percentage)} // Dynamically change based on percentage
                    strokeDashoffset="25" // Starts from the left side of the circle
                    style={{ transition: 'stroke-dasharray 0.5s ease-in-out' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-green-800">{skill.percentage}%</span>
                </div>
              </div>
              <p className="mt-2 text-center text-lg font-medium text-green-800">{skill.label}</p>
              
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 rounded-lg border transition-all duration-300 ${
                selectedPage === index + 1
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-white text-green-500 border-green-300'
              } hover:bg-green-500 hover:text-white`}
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
