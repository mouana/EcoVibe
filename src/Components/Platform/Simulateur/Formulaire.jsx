import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

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
  const { isLoggedIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    energyType: "",
    location: "",
    installationSize: "",
    budget: "",
    additionalData: "",
  });
  const [simulationResult, setSimulationResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSimulation = async () => {
      if (isLoggedIn) {
        try {
          const response = await axios.get("http://localhost:8000/api/simulations", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });

          if (response.data.length > 0) {
            const simulation = response.data[0];
            setSimulationResult(simulation);
            localStorage.setItem("simulationResult", JSON.stringify(simulation)); // Sauvegarder la simulation dans localStorage
          }
        } catch (error) {
          console.error("Erreur lors de la récupération des simulations :", error);
        }
      }
    };

    fetchSimulation();
  }, [isLoggedIn]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      navigate("/signup"); 
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/simulations", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const result = response.data.data;
      setSimulationResult(result);
      localStorage.setItem("simulationResult", JSON.stringify(result));  // Sauvegarder les résultats dans localStorage
    } catch (error) {
      if (error.response) {
        console.error("Erreur dans la réponse de l'API:", error.response.data);
        alert(`Erreur: ${error.response.data.message || "Erreur inconnue"}`);
      } else {
        console.error("Erreur de connexion:", error.message);
        alert("Erreur lors de l'enregistrement de la simulation.");
      }
    }
  };

  const handleDevis = () => {
    window.scrollTo({
      top: document.getElementById("devis").offsetTop,
      behavior: "smooth",
    });
  };

  const chartData = {
    labels: ["Année 1", "Année 2", "Année 3", "Année 4", "Année 5"],
    datasets: [
      {
        label: "Revenu annuel estimé (Dh)",
        data: simulationResult?.output_data
          ? Array(5).fill(simulationResult.output_data.annualRevenue.toFixed(2))
          : [],
        backgroundColor: "#82D49D",
      },
      {
        label: "Production annuelle (kWh)",
        data: simulationResult?.output_data
          ? Array(5).fill(simulationResult.output_data.annualProduction.toFixed(2))
          : [],
        backgroundColor: "#000000",
      },
    ],
  };

  return (
    <div>
      <div
        id="formSection"
        className="container-fluid py-5"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div
          className="container p-5 rounded shadow-lg"
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1
            className="text-center mb-4"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Simulateur Énergétique Avancé
          </h1>
          <div className="row align-items-center">
            <div className="col-md-5">
              <img
                src="./Simulateur_img/expert4.jpeg"
                alt="Simulation Énergétique"
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-md-7">
              {isLoggedIn && simulationResult ? (
                <div>
                  <h3>Résultats de la Simulation</h3>
                  <p>
                    <strong>Production annuelle :</strong>{" "}
                    {simulationResult?.output_data?.annualProduction} kWh
                  </p>
                  <p>
                    <strong>Revenu annuel estimé :</strong>{" "}
                    {simulationResult?.output_data?.annualRevenue} Dh
                  </p>
                  <div className="my-4">
                    <Bar data={chartData} options={{ responsive: true }} />
                  </div>
                  <button onClick={handleDevis} className="btn btn-success">
                    Générer le devis
                  </button>
                </div>
              ) : (
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
                      <option value="solaire">Énergie solaire</option>
                      <option value="éolien">Énergie éolienne</option>
                      <option value="hydro">Énergie Hydraulique</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                      Emplacement
                    </label>
                    <input
                      type="text"
                      id="location"
                      className="form-control"
                      placeholder="Ville ou région"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="installationSize" className="form-label">
                      Surface d'installation (m²)
                    </label>
                    <input
                      type="number"
                      id="installationSize"
                      className="form-control"
                      value={formData.installationSize}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="budget" className="form-label">
                      Budget (en Dh)
                    </label>
                    <input
                      type="number"
                      id="budget"
                      className="form-control"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="additionalData" className="form-label">
                      Données supplémentaires
                    </label>
                    <textarea
                      id="additionalData"
                      className="form-control"
                      rows="3"
                      value={formData.additionalData}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Soumettre
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;
