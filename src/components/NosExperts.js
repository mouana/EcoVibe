import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const NosExperts = () => {
  const experts = [
    {
      name: 'Dr. Emma Lefèvre',
      role: 'Ingénieure en Énergies Renouvelables',
      image: '/expert1.jpg',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      competencies: [
        { label: 'Énergie Solaire', value: 25 },
        { label: 'Énergie Éolienne', value: 40 },
        { label: 'Réseaux Intelligents', value: 50 },
        { label: 'Consultation', value: 90 },
      ],
    },
    {
      name: 'Mme. Clara Belleville',
      role: 'Analyste en Transition Énergétique',
      image: '/expert2.jpg',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      competencies: [
        { label: 'Énergie Solaire', value: 25 },
        { label: 'Énergie Éolienne', value: 40 },
        { label: 'Réseaux Intelligents', value: 50 },
        { label: 'Consultation', value: 90 },
      ],
    },
    {
      name: 'Dr. Rachid Benkacem',
      role: 'Ingénieur en Technologies Solaires Avancées',
      image: '/expert3.jpg',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      competencies: [
        { label: 'Énergie Solaire', value: 25 },
        { label: 'Énergie Éolienne', value: 40 },
        { label: 'Réseaux Intelligents', value: 50 },
        { label: 'Consultation', value: 90 },
      ],
    },
    {
      name: 'Thomas Walkar',
      role: 'Ingénieur en Énergies Renouvelables',
      image: '/expert4.jpg',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      competencies: [
        { label: 'Énergie Solaire', value: 25 },
        { label: 'Énergie Éolienne', value: 40 },
        { label: 'Réseaux Intelligents', value: 50 },
        { label: 'Consultation', value: 90 },
      ],
    },
    {
      name: 'Expert 5',
      role: 'Rôle de l\'expert 5',
      image: '/expert5.jpg',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      competencies: [
        { label: 'Compétence 1', value: 30 },
        { label: 'Compétence 2', value: 60 },
        { label: 'Compétence 3', value: 75 },
        { label: 'Compétence 4', value: 85 },
      ],
    },
    {
      name: 'Expert 6',
      role: 'Rôle de l\'expert 6',
      image: '/expert6.jpg',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      competencies: [
        { label: 'Compétence 1', value: 40 },
        { label: 'Compétence 2', value: 55 },
        { label: 'Compétence 3', value: 65 },
        { label: 'Compétence 4', value: 80 },
      ],
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const expertsPerPage = 3;

  const totalPages = Math.ceil(experts.length / expertsPerPage);
  const currentExperts = experts.slice(
    (currentPage - 1) * expertsPerPage,
    currentPage * expertsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
     <header className="text-center my-5 header-background">
        <div className="Nos-expert">
  <h1>Nos Experts</h1>
  <p>Les spécialistes dédiés à la transition énergétique</p></div>
  <br></br>
  <div className="exp">
<h1>.</h1>
<h1>.</h1>
<h1>.</h1>
<h1>.</h1>
<h1>.</h1>
<h1>.</h1>
<h1>.</h1>
</div>
</header>
      <div class="row text-center mb-5 bg-success-subtle">
        <h1>Compétences Professionnelles</h1>
        {currentExperts.map((expert, index) => (
          <div className="col-md-3" key={index}>
            {expert.competencies.map((competency, i) => (
              <div key={i}>
                <CircularProgressbar
                  value={competency.value}
                  text={`${competency.value}%`}
                  styles={{
                    path: {
                      stroke: '#28a745',
                    },
                  }}
                />
                <p>{competency.label}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center my-5">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`btn btn-primary mx-1 ${currentPage === page ? 'active' : ''}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  {currentExperts.map((expert, index) => (
    <div className="col" key={index}>
      <div className="card h-100 text-center">
        <div className="expert-card-image" style={{ backgroundImage: `url(${expert.image})` }} />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{expert.name}</h5>
            <p className="card-text">{expert.role}</p>
          </div>
          <div className="d-flex justify-content-center">
            <a href={expert.facebook} className="btn btn-success btn-sm mx-1">
              <FaFacebookF />
            </a>
            <a href={expert.twitter} className="btn btn-success btn-sm mx-1">
              <FaTwitter />
            </a>
            <a href={expert.linkedin} className="btn btn-success btn-sm mx-1">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
      

     
    </div>
  );
};

export default NosExperts;