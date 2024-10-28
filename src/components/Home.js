
import React from "react";


function Home() {
  return (
    <div className="eco-vibe-container">
      <div className="eco-vibe-text">
        <h1>Bienvenue sur EcoVibe</h1>
        <h2>Votre portail vers un avenir énergétique durable</h2>
        <p>Bienvenue sur EcoVibe Votre portail vers un avenir énergétique durable</p>
        <button className="eco-vibe-button">Découvrez</button>
      </div>
      <div className="eco-vibe-images">
      <img src="./image2.jpg" alt="Wind Turbine" className="image-style"/>
          <img src="./image3.jpeg" alt="Wind Farm" className="image-style"/>
          <img src="./img1.jpeg" alt="Hydrogen Energy" className="image-style"/>
      </div>
    </div>
  );
}

export default Home;
