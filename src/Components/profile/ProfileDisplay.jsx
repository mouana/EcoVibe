import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileDisplay = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }

    axios
      .get("http://127.0.0.1:8000/api/utilisateur", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
        setUpdatedUser(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching user data:", error.response || error.message);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const token = localStorage.getItem("token");

    axios
      .put("http://127.0.0.1:8000/api/utilisateur", updatedUser, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
        setIsEditing(false); 
      })
      .catch((error) => {
        console.error("Error updating user data:", error.response || error.message);
      });
  };

  if (!user) {
    return <p>Problem l'hors de telechargement</p>;
  }

  return (
    <div className="uk-card uk-card-default uk-card-body uk-margin">
      <h3>Votre Informations</h3>
      <div>
        <p>
          <strong>Nom:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={updatedUser.name || ""}
              onChange={handleInputChange}
              className="uk-input uk-form-width-medium"
            />
          ) : (
            user.name
          )}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={updatedUser.email || ""}
              onChange={handleInputChange}
              className="uk-input uk-form-width-medium"
            />
          ) : (
            user.email
          )}
        </p>
        <p>
          <strong>Telephon:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={updatedUser.phone || ""}
              onChange={handleInputChange}
              className="uk-input uk-form-width-medium"
            />
          ) : (
            user.phone
          )}
        </p>
        <p>
          <strong>Cree à</strong> {new Date(user.created_at).toLocaleDateString()}
        </p>
      </div>
      <div className="uk-margin">
        {isEditing ? (
          <>
            <button className="uk-button uk-button-primary" onClick={handleUpdate}>
              Enregistrer
            </button>
            <button
              className="uk-button uk-button-default uk-margin-left"
              onClick={() => setIsEditing(false)}
            >
              Annuler
            </button>
          </>
        ) : (
          <button className="uk-button uk-button-primary" onClick={() => setIsEditing(true)}>
            Modifier
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileDisplay;
