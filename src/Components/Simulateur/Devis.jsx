
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
function Devis(){
    return (
        <div
          className="container py-4 justify-content-center"
          style={{ backgroundColor: "#ffffff", color: "#000000" }}
        >
          <div className="row align-items-center justify-content-center">
            {/* Section gauche : Texte */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <h1 className="display-5 fw-bold mb-4">
                Obtenez un{" "}
                <span style={{ color: "#82D49D" }}>devis personnalisé</span> <br />{" "}
                avec EcoVibe
              </h1>
              <p className="text-muted mb-4">
                Simulez vos besoins en énergie renouvelable et recevez un devis
                détaillé adapté à vos objectifs. Profitez de solutions innovantes
                pour un avenir plus durable.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <button
                  className="btn btn-lg text-white"
                  style={{ backgroundColor: "#007AFF" }}
                >
                  Demande de devis
                </button>
              </div>
              <p className="text-muted small">
                <strong>Déjà plus de 500 projets réalisés</strong> avec une
                satisfaction de <strong>98%</strong>.
              </p>
            </div>

            <div className="col-lg-6 col-md-12 position-relative " >
      
              <img
                src="./Simulateur_img/devis1.jpg"
                alt="Simulation de devis"
                className="img-fluid rounded shadow w-100"
                style={{height:'60vh'}}
              />
              <div
                className="position-absolute bg-white text-dark shadow rounded p-3"
                style={{
                  bottom: "10px",
                  left: "20px",
                  transform: "translateY(50%)",
                  zIndex: 10,
                }}
              >
                <h3 className="mb-0" style={{ color: "#82D49D" }}>
                  +500
                </h3>
                <p className="mb-0 small text-muted">Projets réalisés</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Devis;