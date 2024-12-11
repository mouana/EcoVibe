import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Formulaire() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    energyType: "",
    location: "",
    installationSize: "",
    budget: "",
    additionalData: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Calculs avancés
  const calculateEnergyProduction = (size) => {
    const efficiency = formData.energyType === "Énergie solaire" ? 0.2 : 0.35;
    return size * efficiency * 365; // Production annuelle estimée en kWh
  };

  const calculateROI = (size, budget) => {
    const energyPrice = 0.15; // Prix moyen par kWh en €
    const annualRevenue = calculateEnergyProduction(size) * energyPrice;
    return (annualRevenue / budget) * 100; // Retour sur investissement en %
  };

  const suggestImprovements = () => {
    if (formData.energyType === "Énergie solaire" && parseFloat(formData.budget) < 5000) {
      return "Augmentez votre budget pour intégrer des panneaux solaires de meilleure qualité.";
    } else if (formData.energyType === "Énergie éolienne" && parseFloat(formData.installationSize) < 50) {
      return "Une installation plus grande serait idéale pour maximiser la production d'énergie.";
    }
    return "Votre configuration semble optimale.";
  };


  const installationSize = parseFloat(formData.installationSize) || 0;
  const budget = parseFloat(formData.budget) || 0;

  const energyProduction = calculateEnergyProduction(installationSize);
  const roi = calculateROI(installationSize, budget);

  const chartData = {
    labels: ["Année 1", "Année 2", "Année 3", "Année 4", "Année 5"],
    datasets: [
      {
        label: "Revenu annuel (€)",
        data: Array(5)
          .fill()
          .map(() => (energyProduction * 0.15).toFixed(2)),
        backgroundColor: "#82D49D",
      },
    ],
  };

  return (
    <div>
      <div id="formSection" className="container-fluid py-5" style={{ backgroundColor: "#f5f5f5" }}>
        <div
          className="container p-5 rounded shadow-lg"
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1 className="text-center mb-4" style={{ color: "black", fontWeight: "bold" }}>
            Simulateur Énergétique Avancé
          </h1>
          <div className="row align-items-center">
           
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <div
                className="rounded shadow-lg overflow-hidden"
                style={{
                  height: "70vh",
                  width: "100%",
                  backgroundColor: "#e8f5e9",
                  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
                  position: "relative",
                }}
              >
                <img
                  src="./Simulateur_img/expert4.jpeg"
                  alt="Simulation Énergétique"
                  className="img-fluid"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.8)",
                  }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100 text-center text-white py-3"
                  style={{
                    background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.8))",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  Optimisez Votre Transition Énergétique
                </div>
              </div>
            </div>

            
            <div className="col-md-7">
              {!isSubmitted ? (
                <form className="p-4 bg-light rounded shadow" onSubmit={handleSubmit}>
              
                  <div className="mb-3">
                    <label htmlFor="energyType" className="form-label">
                      Type d'énergie
                    </label>
                    <select
                      className="form-select"
                      id="energyType"
                      value={formData.energyType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionner l'énergie</option>
                      <option value="Énergie solaire">Énergie solaire</option>
                      <option value="Énergie éolienne">Énergie éolienne</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                      Localisation
                    </label>
                    <select
                      className="form-select"
                      id="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choisir l'emplacement</option>
                      <option value="Casablanca">Casablanca</option>
                      <option value="Rabat">Rabat</option>
                      <option value="Marrakech">Marrakech</option>
                      <option value="Fès">Fès</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="installationSize" className="form-label">
                      Taille de l'installation (m²)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="installationSize"
                      value={formData.installationSize}
                      onChange={handleChange}
                      placeholder="Exemple : 100"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="budget" className="form-label">
                      Budget estimé (Dh)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="Exemple : 5000"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn w-100"
                    style={{
                      backgroundColor: "#007AFF",
                      color: "#ffffff",
                      
                    }}
                  >
                    Lancer la Simulation
                  </button>
                </form>
              ) : (
                <div>
                  <h3 className=" mb-3" style={{ fontWeight: "bold" ,color:'#82D49D' }}>
                    Résultats de la Simulation
                  </h3>
                  <p>
                    <strong>Production annuelle :</strong> {energyProduction.toFixed(2)} kWh
                  </p>
                  <p>
                    <strong>Retour sur investissement :</strong> {roi.toFixed(2)}%
                  </p>
                  <p>
                    <strong>Suggestions :</strong> {suggestImprovements()}
                  </p>
                  <Bar data={chartData} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;
