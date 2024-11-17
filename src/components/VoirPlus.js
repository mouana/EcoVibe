import React from 'react';
import { FaClipboardList, FaChartLine, FaRegChartBar } from 'react-icons/fa'; // Import des icônes
import '../styles/VoirPlus.css';

const VoirPlus = () => {
  return (
    <div className="voir-plus-container">
      <h1>En savoir plus sur notre simulateur énergétique</h1>
      <section className="intro">
        <p>
          Découvrez comment notre simulateur peut vous aider à estimer votre consommation d'énergie renouvelable et à déterminer vos économies potentielles. En quelques étapes simples, nous vous guidons pour comprendre l'impact de votre transition vers les énergies renouvelables. Le simulateur est conçu pour être intuitif et vous fournir des informations précises pour soutenir vos décisions en matière d'énergie.
        </p>
      </section>
      
      <section className="step-by-step">
        <h2>Les étapes de notre simulateur</h2>
        <div className="steps">
          <div className="step">
            <FaClipboardList className="step-icon" />
            <div className="step-description">
              <p>
                <strong>Étape 1 : Remplissez le formulaire</strong> <br />
                Dans cette première étape, vous allez renseigner vos données de consommation énergétique actuelles, comme vos factures d’électricité, et sélectionner le type d'énergie renouvelable qui vous intéresse (solaire, éolien, ou hydraulique). Cette information est cruciale pour évaluer votre profil énergétique et pour ajuster la simulation selon vos besoins spécifiques.
              </p>
            </div>
          </div>
          <div className="step">
            <FaChartLine className="step-icon" />
            <div className="step-description">
              <p>
                <strong>Étape 2 : Analyse des données</strong> <br />
                Une fois les informations collectées, notre simulateur commence l'analyse de vos données. Nous prenons en compte plusieurs paramètres, comme les conditions climatiques de votre région, l'ensoleillement pour le solaire, ou le potentiel de vent pour l'éolien. En combinant vos données de consommation et nos algorithmes d'analyse, nous calculons les avantages potentiels d'une transition vers une source d'énergie renouvelable.
              </p>
            </div>
          </div>
          <div className="step">
            <FaRegChartBar className="step-icon" />
            <div className="step-description">
              <p>
                <strong>Étape 3 : Affichage des résultats</strong> <br />
                À la fin de l'analyse, vous recevez un rapport détaillé qui montre l'impact de votre transition vers l'énergie renouvelable. Ce rapport comprend une estimation de la réduction de votre consommation en énergies fossiles, les économies financières que vous pourriez réaliser, et une évaluation de votre empreinte carbone réduite. Ces informations vous aident à visualiser les avantages à long terme de cette démarche.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <p>Prêt à utiliser notre simulateur ? Lancez-vous et découvrez comment vous pouvez économiser tout en protégeant l'environnement grâce aux énergies renouvelables.</p>
        <button className="cta-button">Lancer la Simulation</button>
      </section>
    </div>
  );
};

export default VoirPlus;
