import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";
import "chart.js/auto";

function TableauEnergie() {
  const [consommation, setConsommation] = useState(300); // Consommation mensuelle en kWh
  const [surface, setSurface] = useState(20); // Surface des panneaux solaires en m²
  const [rendement, setRendement] = useState(0.15); // Rendement des panneaux solaires
  const [tarifElectricite, setTarifElectricite] = useState(1.172); // Tarif électrique (MAD/kWh)
  const [dataSolaire, setDataSolaire] = useState(null);
  const consommationMoyenne = 360; // Consommation moyenne d'un foyer marocain en kWh/mois
  const consommationAnnuelle = consommationMoyenne * 12; // Consommation annuelle

  useEffect(() => {
    const fetchSolarData = async () => {
      try {
        const response = await axios.get("https://developer.nrel.gov/api/solar/solar_resource/v1.json?api_key=OXi8af3J5F8ITDfX8tXQtzn2Ki1rNaW2TQjw0jhq&lat=40.7128&limit=1&lon=-74.0060", {
          params: {
            lat: 40.7128, // Exemple : Latitude
            lon: -74.0060, // Exemple : Longitude
          },
        });
        setDataSolaire(response.data.outputs.avg_ghi.monthly);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchSolarData();
  }, []);

  // Calcul de la production et des économies
  const calculerProductionMensuelle = (ghi) => ghi * surface * rendement * 30;
  const calculerEconomiesMensuelles = (production) => production * tarifElectricite;
  const calculerDifferenceMensuelle = (production, consommationNormale) =>
    consommationNormale - production;

  const donneesProduction =
    dataSolaire &&
    Object.entries(dataSolaire).map(([mois, ghi]) => {
      const production = calculerProductionMensuelle(ghi);
      return {
        mois,
        production,
        economies: calculerEconomiesMensuelles(production),
        difference: calculerDifferenceMensuelle(production, consommationMoyenne),
      };
    });

  const economiesAnnuelles =
    donneesProduction &&
    donneesProduction.reduce((somme, donnees) => somme + donnees.economies, 0);

  const productionAnnuelle =
    donneesProduction &&
    donneesProduction.reduce((somme, donnees) => somme + donnees.production, 0);

  // Données pour les graphiques
  const barChartData = donneesProduction && {
    labels: donneesProduction.map((data) => data.mois),
    datasets: [
      {
        label: "Production solaire (kWh)",
        data: donneesProduction.map((data) => data.production),
        backgroundColor: "#82ca9d",
      },
      {
        label: "Différence consommation (kWh)",
        data: donneesProduction.map((data) => data.difference),
        backgroundColor: "#fcbf49",
      },
    ],
  };

  const lineChartData = donneesProduction && {
    labels: donneesProduction.map((data) => data.mois),
    datasets: [
      {
        label: "Économies (MAD)",
        data: donneesProduction.map((data) => data.economies),
        borderColor: "#2563eb",
        fill: false,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Tableau de suivi énergétique
      </h1>

      {/* Entrées */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-lg font-semibold">
            Consommation mensuelle (kWh)
          </label>
          <input
            type="number"
            value={consommation}
            onChange={(e) => setConsommation(Number(e.target.value))}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold">
            Surface des panneaux (m²)
          </label>
          <input
            type="number"
            value={surface}
            onChange={(e) => setSurface(Number(e.target.value))}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold">
            Tarif électricité (MAD/kWh)
          </label>
          <input
            type="number"
            value={tarifElectricite}
            onChange={(e) => setTarifElectricite(Number(e.target.value))}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      {/* Résultats */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Production annuelle</h2>
          <p className="text-2xl font-semibold text-blue-500">
            {productionAnnuelle
              ? productionAnnuelle.toFixed(2)
              : "Chargement..."}{" "}
            kWh
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Économies annuelles</h2>
          <p className="text-2xl font-semibold text-green-500">
            {economiesAnnuelles
              ? economiesAnnuelles.toFixed(2)
              : "Chargement..."}{" "}
            MAD
          </p>
        </div>
      </div>
      
      {/* Graphiques */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">
          Comparaison entre production solaire et consommation
        </h2>
        {barChartData && (
          <div className="h-64">
            <Bar
              data={barChartData}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </div>
        )}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Économies mensuelles</h2>
        {lineChartData && (
          <div className="h-64">
            <Line
              data={lineChartData}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </div>
        )}
      </div>

      {/* Note */}
      <div className="mt-6 text-sm text-gray-500">
        <p>
          <strong>Note :</strong> Ces estimations sont basées sur des données
          approximatives et peuvent varier en fonction des conditions locales et
          météorologiques.
        </p>
      </div>
    </div>
  );
}

export default TableauEnergie;
