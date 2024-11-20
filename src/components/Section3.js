import '../styles/Home.css'


const EnergySection = () => {
  return (
    <div className="energy-section">
      <div className="image-container">
        <div className="shadow-box"></div>
        <img
          src="./image3.jpeg"
          alt="Energies Renouvelables"
          className="main-image"
        />
        <div className="overlay-text">
          Agissez pour la planète et économisez dès aujourd'hui
        </div>
      </div>
      <div className="text-content">
        <h2>Pourquoi Choisir les Énergies Renouvelables</h2>
        <p>
          Les énergies renouvelables offrent une énergie propre et économique, réduisant votre impact
          environnemental tout en vous faisant économiser. Adoptez des solutions durables pour un avenir
          plus vert.
        </p>
        <button className="cta-button">VOIR PLUS</button>
      </div>
    </div>
  );
};

export default EnergySection;
