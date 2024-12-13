import React, { useState, useEffect } from "react";
import axios from "axios";
import TableauEnergie from "./Dashboard"; // Dashboard Component
import { useNavigate } from "react-router-dom"; // Navigation

const ProfileDisplay = () => {
  const [user, setUser] = useState(null); // State for the user
  const [projects, setProjects] = useState([]); // State for projects
  const [isEditing, setIsEditing] = useState(false); // Toggle for editing mode
  const [updatedUser, setUpdatedUser] = useState({}); // Editable user data
  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      console.error("No token found");
      return;
    }
  
    // Step 1: Fetch the authenticated user's data
    axios
      .get("http://127.0.0.1:8000/api/utilisateur", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("User response:", response); // Log the response to verify structure
        
        if (!response.data || !response.data.id) {
          throw new Error("User data is missing or invalid in the response");
        }
  
        const user = response.data; // Directly use response.data as the user object
        setUser(user);
        setUpdatedUser(user); // Initialize editable user state
  
        // Step 2: Fetch projects related to this user
        return axios
        .get("http://127.0.0.1:8000/api/projet", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("Projects response:", response); // Log the projects response
          
          if (!response.data || !Array.isArray(response.data)) {
            throw new Error("Projects data is invalid or not an array");
          }
      
          const userProjects = response.data.filter(
            (project) => project.user_id === user.id // Ensure only projects belonging to the current user are selected
          );
      
          if (userProjects.length === 0) {
            console.warn("No projects found for the current user");
          }
      
          setProjects(userProjects); // Update state with filtered projects
        })
        .catch((error) => {
          console.error("Error fetching projects:", error.response || error.message);
        });
      })
     
      
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
        setUser(response.data.user); // Update user data
        setIsEditing(false); // Exit editing mode
      })
      .catch((error) => {
        console.error("Error updating user data:", error.response || error.message);
      });
  };

  if (!user) {
    return <p>Problème lors du téléchargement des données utilisateur.</p>;
  }

  return (
    <div className="uk-card uk-card-default uk-card-body uk-margin">
      <h3>Vos Informations</h3>
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
          <strong>Téléphone:</strong>{" "}
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
          <strong>Créé à:</strong> {new Date(user.created_at).toLocaleDateString()}
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

      {/* Conditionally render projects */}
      {projects.length > 0 ? (
        <div className="mt-6">
          <h4>Dashboard</h4>
          <TableauEnergie projects={projects} /> {/* Display dashboard */}
        </div>
      ) : (
        <div className="mt-6">
          <p>Aucun projet trouvé.</p>
          <button
            className="uk-button uk-button-primary"
            onClick={() => navigate("/service")} // Navigate to service page
          >
            Ajouter Projet
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDisplay;
