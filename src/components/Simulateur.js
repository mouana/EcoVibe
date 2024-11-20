import React from 'react';
import { Swiper, SwiperSlide  } from 'swiper/react';
import '../styles/Simulateur.css';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaPhoneAlt, FaEnvelope, FaGlobe ,FaCheck} from 'react-icons/fa';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, A11y ,Autoplay} from 'swiper/modules';

const projects = [
  {
    title: "Suiveur Solaire Flottant Panneau Solaire",
    type: "Énergie Solaire",
    benefits: [
      "Réduire les coûts d'électricité",
      "Augmenter les profits",
      "Générer de l'indépendance"
    ],
    annualSavings: "$21,00",
    savingsText: "Économies Annuelles",
    imageUrl: "./expert1.jpg"
  },
  {
    title: "Installation Panneaux Solaires Résidentiel",
    type: "Énergie Solaire",
    benefits: [
      "Réduire la facture d'électricité",
      "Augmenter la valeur de la propriété",
      "Énergie durable"
    ],
    annualSavings: "$15,00",
    savingsText: "Économies Annuelles",
    imageUrl: "./expert4.jpeg"
  },
  {
    title: "Parc Éolien Industriel",
    type: "Énergie Éolienne",
    benefits: [
      "Réduire les émissions de carbone",
      "Production d'énergie propre",
      "Indépendance énergétique"
    ],
    annualSavings: "$30,00",
    savingsText: "Économies Annuelles",
    imageUrl: "./expert5.jpeg"
  },
  {
    title: "Parc Éolien Industriel",
    type: "Énergie Éolienne",
    benefits: [
      "Réduire les émissions de carbone",
      "Production d'énergie propre",
      "Indépendance énergétique"
    ],
    annualSavings: "$30,00",
    savingsText: "Économies Annuelles",
    imageUrl: "./expert6.jpeg"
  },
];

const teamMembers = [
  {
    name: "Thomas Walkar",
    role: "Engineer Solutions",
    email: "info@example.com",
    social: "Facebook",
  },
  {
    name: "Willimes Jassi",
    role: "Engineer Solutions",
    email: "info@example.com",
    social: "Facebook",
  },
  {
    name: "Willimes Jassi",
    role: "Engineer Solutions",
    email: "info@example.com",
    social: "Facebook",
  },
  {
    name: "Willimes Jassi",
    role: "Engineer Solutions",
    email: "info@example.com",
    social: "Facebook",
  },
];

const Simulateur = () => {
  const [currentProject, setCurrentProject] = React.useState(0);

  const handleNext = () => {
    setCurrentProject((prevProject) => (prevProject + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProject((prevProject) => (prevProject - 1 + projects.length) % projects.length);
  };

  return (
    <div className="slide-container">
      <Swiper navigation={true} modules={[Navigation, Autoplay ]} autoplay={{delay: 2000, disableOnInteraction: false, }} className="mySwiper">

   

        <SwiperSlide>
          <div className="slide-content" style={{ backgroundImage: 'url(./bg1.jpg)' }}>
            <div className="overlay">
              <h2>Simulez votre Projet Énergétique</h2>
              <p>
                Utilisez notre simulateur interactif pour évaluer la production énergétique et le retour sur investissement de votre projet. En quelques étapes simples, entrez vos données (localisation, taille de l'installation) et obtenez des résultats précis sur la rentabilité et les économies potentielles.
              </p>
              <button className="simulation-button">Commencer la Simulation</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content" style={{ backgroundImage: 'url(./service1.jpg)' }}>
            <div className="overlay">
              <h2>Simulez votre Projet Énergétique</h2>
              <p>
                Utilisez notre simulateur interactif pour évaluer la production énergétique et le retour sur investissement de votre projet. En quelques étapes simples, entrez vos données (localisation, taille de l'installation) et obtenez des résultats précis sur la rentabilité et les économies potentielles.
              </p>
              <button className="simulation-button">Commencer la Simulation</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="simulator-container">
  <div className="simulator-content">
    <div className="simulator-image-container">
      <h2 className="simulator-title">Créez Votre Énergie, Pas à Pas</h2>
      <img
        src="./expert.jpeg"
        alt="Énergie renouvelable"
        className="simulator-image"
      />
    </div>
    <form className="simulator-form">
      <div className="simulator-input-group">
        <label>Type d'énergie</label>
        <select>
          <option value="">Sélectionner l'énergie</option>
          <option value="solaire">Énergie Solaire</option>
          <option value="eolienne">Énergie Éolienne</option>
          <option value="hydraulique">Énergie Hydraulique</option>
        </select>
      </div>
      <div className="simulator-input-group">
        <label>Localisation</label>
        <input
          type="text"
          placeholder="Choisir l'emplacement"
          required
        />
      </div>
      <div className="simulator-input-group">
        <label>Taille de l'installation (m²)</label>
        <input
          type="number"
          placeholder="Exemple : 100"
          min="1"
          required
        />
      </div>
      <div className="simulator-input-group">
  <label>Budget estimé (€)</label>
  <input
    type="number"
    placeholder="Exemple : 5000"
    min="1"
    required
  />
</div>

      <div className="simulator-input-group">
        <label>Données additionnelles</label>
        <textarea
          placeholder="Décrivez vos besoins spécifiques ici..."
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="simulator-button">
        Lancer la Simulation
      </button>
    </form>
  </div>
</div>


      <section className="how-it-works">
        <div className="content">
          <h2>Comment ça marche ?</h2>
          <ul>
            <li>Remplissez le formulaire ci-dessus : Indiquez vos données de consommation et le type d'énergie renouvelable qui vous intéresse.</li>
            <li>Analyse des données : Nous calculerons les bénéfices potentiels de votre passage à l'énergie renouvelable.</li>
            <li>Affichage des résultats : Après soumission, vous recevrez une estimation de votre consommation d'énergie renouvelable et des économies réalisées.</li>
          </ul>
          <Link to="/voir-plus" className="learn-more">Voir Plus <span className='fleche_plus'>&gt;</span></Link>
        </div>
        <div className="image">
          <img src="./image1.jpeg" alt="Panneaux solaires" />
        </div>
      </section>

      <div className="recent-projects-container">
      <h2>Nos Dernières Réalisations</h2>
      <Swiper
      modules={[Navigation, Autoplay]} 
      spaceBetween={20}
      slidesPerView={2}
      navigation
      autoplay={{
        delay: 2000, 
        disableOnInteraction: false, 

      }}
      className='card-swiper'

>
  {projects.map((project, index) => (
    <SwiperSlide key={index}>
      <div className="project-card">
        <div className="project-info">
          <h3 className="project-type">{project.type}</h3>
          <h2 className="project-title">{project.title}</h2>
          <ul className="project-benefits">
            {project.benefits.map((benefit, idx) => (
              <li key={idx}>
             <FaCheck className='Check-icon'/>
                {benefit}
              </li>
            ))}
          </ul>
          <p className="project-savings">{project.annualSavings}</p>
          <p className="savings-text">{project.savingsText}</p>
        </div>
        <div className="project-image">
          <img src={project.imageUrl} alt={project.title} className='expertName'/>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </div>
    {/* ContactSection */}

    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Contactez-Nous Pour Discuter De La Manière Dont Nous Pouvons Vous Aider !</h2>
          <p>Nous sommes ravis d'accueillir nos clients parmi nous</p>
          <div className="contact-buttons">
            <button className="btn-primary">Demander un devis</button>
            <div className="phone">
            <FaPhoneAlt className="phone-icon"/> Phone : 01234 525 407
            </div>
          </div>
        </div>
      </div>
      <img
        className="contact-image"
        src="./contact.png"
        alt="Solar Panel Worker"
      />
    </div>
 



              {/* teamMembers */}
      <div className="team-section">
      <h3 className="creative-team-title">NOTRE ÉQUIPE CRÉATIVE</h3>
      <h2 className="sub-title">Rencontrez Nos Experts</h2>

      <Swiper
        modules={[ Pagination,Autoplay]}
        spaceBetween={60}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        className="swiperCard"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-member">
              <div className="profile-pic">
                <div className="progress-ring"></div>
                <img src='./profile1.jpeg' alt=''/>
              </div>
              <h4 className="member-name">{member.name}</h4>
              <p className="member-role">{member.role}</p>
              <div className="contact-info">
                <a href={`mailto:${member.email}`} className="email">
                  <FaEnvelope className="email-icon" /> {member.email}
                </a>
                <a href="#" className="social-link">
                  <FaGlobe className="social-link-icon" /> {member.social}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        <div className="contact-action">
          <button className="contact-button-card"><Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
    Contactez-Nous
  </Link></button>
          
        </div>
      </div>
    </div>
  );
};

export default Simulateur;
