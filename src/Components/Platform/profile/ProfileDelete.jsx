import React, { useState } from "react";
import axios from "axios";

const ProfileDelete = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    axios
      .delete("http://127.0.0.1:8000/api/utilisateur", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(() => {
        alert("Compte supprimé avec succès !");
        localStorage.removeItem("token");
        window.location.href = "/login";
      })
      .catch((error) => alert("Erreur lors de la suppression du compte."));
  };

  return (
    <div className="uk-card uk-card-default uk-card-body uk-margin">
      <h3>Supprimer Votre Compte</h3>
      {showConfirmation ? (
        <div>
          <p>Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.</p>
          <button
            className="uk-button uk-button-danger uk-margin-right"
            onClick={handleDelete}
          >
            Oui
          </button>
          <button
            className="uk-button uk-button-default"
            onClick={() => setShowConfirmation(false)}
          >
            Annuler
          </button>
        </div>
      ) : (
        <button
          className="uk-button uk-button-danger"
          onClick={() => setShowConfirmation(true)}
        >
          Supprimer
        </button>
      )}
    </div>
  );
};

export default ProfileDelete;
