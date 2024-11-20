import React from "react";
import HeroSection from "../components/HeroSection"; // Import HeroSection

function Home() {
  return (
    <div>
      {/* Use HeroSection on Home page */}

      {/* Other content on the Home page */}
      <div className="eco-vibe-container">
        <div className="eco-vibe-text">
          <h1>Bienvenue sur EcoVibe</h1>
          <h2>Votre portail vers un avenir énergétique durable</h2>
          <p>Bienvenue sur EcoVibe, votre portail vers un avenir énergétique durable.</p>
          <button className="eco-vibe-button">Découvrez</button>
        </div>
        <div className="eco-vibe-images">
          <img src="./image2.jpg" alt="Wind Turbine" className="image-style"/>
          <img src="./image3.jpeg" alt="Wind Farm" className="image-style"/>
          <img src="./img1.jpeg" alt="Hydrogen Energy" className="image-style"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
