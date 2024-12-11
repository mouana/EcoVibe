import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddProject from "./AddProject";
import "uikit/dist/css/uikit.min.css";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);

const ExpertDetails = () => {
  const { expertId } = useParams();
  const [expert, setExpert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (expertId) {
      fetchExpertDetails();
    }
  }, [expertId]);

  const fetchExpertDetails = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/experts/${expertId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data) {
        setExpert(response.data);
      } else {
        setError("Expert introuvable.");
      }
    } catch (error) {
      setError("Échec du chargement des détails de l'expert.");
      console.error("Échec du chargement des détails de l'expert:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/projects/${projectId}`,
        {
          data: {
            id: projectId,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        UIkit.notification({
          message: "Projet supprimé avec succès.",
          status: "success",
          pos: "top-right",
          timeout: 3000,
        });
        setExpert((prevExpert) => ({
          ...prevExpert,
          projets: prevExpert.projets.filter((p) => p.id !== projectId),
        }));
      } else {
        UIkit.notification({
          message: "Échec de la suppression du projet.",
          status: "warning",
          pos: "top-right",
          timeout: 3000,
        });
      }
    } catch (error) {
      console.error("Error removing project:", error);
      UIkit.notification({
        message: "Une erreur s'est produite lors de la suppression du projet.",
        status: "danger",
        pos: "top-right",
        timeout: 3000,
      });
    }
  };

  if (loading) {
    return <div className="uk-text-center uk-margin-large">Chargement des détails de l'expert...</div>;
  }

  if (error) {
    return <div className="uk-text-center uk-text-danger uk-margin-large">{error}</div>;
  }

  if (!expert) {
    return <div className="uk-text-center uk-margin-large">Expert introuvable</div>;
  }

  return (
    <div className="uk-container uk-margin-large-top">
      <h2 className="uk-heading-line uk-text-center"><span>Détails de l'Expert</span></h2>

      <div className="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
        <div className="uk-card-media-left uk-cover-container">
          <img
            src={
              expert.image
                ? `http://127.0.0.1:8000/storage/${expert.image}`
                : "https://via.placeholder.com/150"
            }
            alt={expert.NometPrenom}
            className="uk-border-circle"
            style={{ maxWidth: "200px", objectFit: "cover", margin: "20px auto" }}
          />
        </div>
        <div>
          <div className="uk-card-body">
            <h3>{expert.NometPrenom}</h3>
            <p><strong>Email :</strong> {expert.email}</p>
            <p><strong>Spécialité :</strong> {expert.specialty}</p>
            <p><strong>Téléphone :</strong> {expert.phone}</p>
            <p><strong>Biographie :</strong> {expert.biography}</p>
            <p><strong>Avis :</strong> {expert.reviews}</p>
            <p><strong>Rôle :</strong> {expert.role}</p>
            <p><strong>Créé le :</strong> {new Date(expert.created_at).toLocaleDateString()}</p>
            <p><strong>Mis à jour le :</strong> {new Date(expert.updated_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <h3 className="uk-heading-line uk-margin-large-top"><span>Liste des Projets</span></h3>

      {expert.projets && expert.projets.length > 0 ? (
        <div className="uk-grid-match uk-child-width-1-2@m" data-uk-grid>
          {expert.projets.map((projet) => (
            <div key={projet.id}>
              <div className="uk-card uk-card-default uk-card-hover">
                <div className="uk-card-body">
                  <h5>{projet.name}</h5>
                  <p><strong>Type :</strong> {projet.type}</p>
                  <p><strong>Localisation :</strong> {projet.location}</p>
                  <p><strong>Détails :</strong> {projet.details}</p>
                  <p><strong>Statut :</strong> {projet.status}</p>
                  <p><strong>Client :</strong> {projet.utilisateur.Nom}</p>
                  <p><strong>Id du client :</strong> {projet.user_id}</p>
                  <p><strong>Téléphone du client :</strong> {projet.utilisateur.phone}</p>
                  <p><strong>Email du client :</strong> {projet.utilisateur.email}</p>
                </div>
                <div className="uk-card-footer">
                  <button
                    onClick={() => handleDeleteProject(projet.id)}
                    className="uk-button uk-button-danger uk-width-expand"
                  >
                    Supprimer Projet
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="uk-text-center">Aucun projet lié à cet expert.</p>
      )}

      <div className="uk-margin-large-top mb-4">
        <AddProject />
      </div>
    </div>
  );
};

export default ExpertDetails;
