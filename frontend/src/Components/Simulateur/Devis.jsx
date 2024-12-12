import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { jsPDF } from "jspdf";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext"; 
import { useNavigate } from "react-router-dom"; // Importez useNavigate


function Devis() {
  const { user, isLoggedIn } = useContext(AuthContext); 
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Navigation after successful login


 
  const fetchDevisData = async () => {
    if (!isLoggedIn) {
      navigate("/signup")
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8000/api/devis", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`, // Ajouter le token dans l'en-tête
        },
      });

      if (response.data) {
        setUserData(response.data); // Récupérer les données de l'utilisateur et de la simulation
      } else {
        console.error("Erreur de récupération des données.");
        alert("Erreur lors de la récupération des données.");
      }
    } catch (error) {
      console.error("Erreur de connexion:", error.response ? error.response.data : error.message);
      alert(`Erreur de connexion: ${error.response ? error.response.data : error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour générer le PDF
  const generatePDF = async () => {
    if (!userData) {
      alert("Données non disponibles.");
      return;
    }
  
    try {
      const rawOutputData = userData.simulation?.output_data || "{}";
      const outputData = JSON.parse(rawOutputData);
  
      const annualRevenue = outputData.annualRevenue || 0;
      const annualProduction = outputData.annualProduction || 1;
      const improvementSuggestion = outputData.improvementSuggestion;
  
      const pricePerUnit = annualRevenue / annualProduction;
      const totalEstimatedPrice = annualRevenue;
  
      let adjustedPrice = totalEstimatedPrice;
      if (improvementSuggestion) {
        const improvementPercentage = 0.10;
        adjustedPrice = totalEstimatedPrice * (1 - improvementPercentage);
      }
  
      const doc = new jsPDF();
  
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text("Devis Personnalisé - EcoVibe", 20, 20);
  
      doc.addImage("./logo.png", "PNG", 150, 10, 30, 30);  
      doc.setFontSize(12);
      doc.text(`Nom : ${userData.user.name}`, 20, 50);
      doc.text(`Date de naissance : ${userData.user.birthday}`, 20, 60);
  
      doc.text(`Type de Simulation : ${userData.simulation.type}`, 20, 80);
  
      doc.text("Données de simulation :", 20, 100);
      doc.text(`Revenu Annuel : ${annualRevenue} DH`, 20, 110);
      doc.text(`Production Annuelle : ${annualProduction} unités`, 20, 120);
      doc.text(`Prix par unité : ${pricePerUnit.toFixed(2)} Dh`, 20, 130);
  
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(`Montant total estimé : ${totalEstimatedPrice.toFixed(2)} DH`, 20, 150);
  
      if (improvementSuggestion) {
        doc.text(
          `Montant ajusté (avec amélioration) : ${adjustedPrice.toFixed(2)} DH`,
          20,
          160
        );
      }
  
      doc.setFontSize(10);
      doc.setFont("helvetica", "italic");
      doc.text(
        "EcoVibe - Solidaire et durable pour votre avenir énergétique.",
        20,
        180
      );
  
      const pageHeight = doc.internal.pageSize.getHeight();
      const pageWidth = doc.internal.pageSize.getWidth();
      const imageWidth = 30;
      const imageHeight = 30; 
      const x = pageWidth - imageWidth - 60; 
      const y = pageHeight - imageHeight - 70; 
      doc.addImage("./Simulateur_img/cacher.png", "PNG", x, y, imageWidth, imageHeight);
  
      doc.save("devis-ecovibe.pdf");
    } catch (error) {
      console.error("Erreur lors du traitement des données ou de la génération du PDF :", error);
      alert("Une erreur est survenue lors de la génération du PDF.");
    }
  };
  

  return (
    <div
      className="container py-4 justify-content-center"
      style={{ backgroundColor: "#ffffff", color: "#000000" }}
    >
      <div className="row align-items-center justify-content-center">
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
              onClick={fetchDevisData}
              disabled={loading}
            >
              {loading ? "Chargement..." : "Demander le devis"}
            </button>
            <button
              className="btn btn-lg text-white"
              style={{ backgroundColor: "#007AFF" }}
              onClick={generatePDF}
              disabled={!userData}
            >
              Télécharger le devis
            </button>
          </div>
          <p className="text-muted small">
            <strong>Déjà plus de 500 projets réalisés</strong> avec une
            satisfaction de <strong>98%</strong>.
          </p>
        </div>

        {/* Section droite : Image */}
        <div className="col-lg-6 col-md-12 position-relative">
          <img
            src="./Simulateur_img/devis1.jpg"
            alt="Simulation de devis"
            className="img-fluid rounded shadow w-100"
            style={{ height: "60vh" }}
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
