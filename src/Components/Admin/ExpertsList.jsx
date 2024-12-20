import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UIkit from "uikit";
import { Link } from "react-router-dom";
import ExpertForm from './AddExpert'

const ExpertsList = () => {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingExpert, setEditingExpert] = useState(null);
  const [updatedExpert, setUpdatedExpert] = useState({
    nom_prenom: "",
    email: "",
    specialty: "",
    phone: "",
  });

  useEffect(() => {
    fetchExperts();
  }, []);

  const fetchExperts = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://127.0.0.1:8000/api/admin/experts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setExperts(response.data);
    } catch (error) {
      UIkit.notification({
        message: "Failed to fetch experts",
        status: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  const startEditing = (expert) => {
    setEditingExpert(expert.id);
    setUpdatedExpert({
      nom_prenom: expert.nom_prenom,
      email: expert.email,
      specialty: expert.specialty,
      phone: expert.phone,
    });
  };

  const handleUpdate = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `http://127.0.0.1:8000/api/experts/${id}`,
        updatedExpert,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      UIkit.notification({
        message: response.data.message || "Expert updated successfully!",
        status: "success",
      });

      const updatedExperts = experts.map((expert) =>
        expert.id === id ? { ...expert, ...response.data.expert } : expert
      );
      setExperts(updatedExperts);
      setEditingExpert(null);
    } catch (error) {
      console.error("Update Error:", error.response?.data || error.message);
      UIkit.notification({
        message: error.response?.data?.message || "Failed to update expert",
        status: "danger",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedExpert({
      ...updatedExpert,
      [name]: value,
    });
  };

  if (loading) {
    return <div className="text-center">Loading experts...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Manage Experts</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Expertise</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {experts.map((expert, index) => (
              <tr key={expert.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`http://127.0.0.1:8000/storage/${expert.image}`}
                    alt={`${expert.nom_prenom}`}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </td>
                <td>
                  {editingExpert === expert.id ? (
                    <input
                      type="text"
                      name="nom_prenom"
                      value={updatedExpert.nom_prenom}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  ) : (
                    <Link to={`/experts/${expert.id}`} className="text-decoration-none">
                      {expert.nom_prenom}
                    </Link>
                  )}
                </td>
                <td>
                  {editingExpert === expert.id ? (
                    <input
                      type="email"
                      name="email"
                      value={updatedExpert.email}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  ) : (
                    expert.email
                  )}
                </td>
                <td>
                  {editingExpert === expert.id ? (
                    <input
                      type="text"
                      name="specialty"
                      value={updatedExpert.specialty}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  ) : (
                    expert.specialty
                  )}
                </td>
                <td>
                  {editingExpert === expert.id ? (
                    <input
                      type="text"
                      name="phone"
                      value={updatedExpert.phone}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  ) : (
                    expert.phone
                  )}
                </td>
                <td>
                  {editingExpert === expert.id ? (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleUpdate(expert.id)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setEditingExpert(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => startEditing(expert)}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ExpertForm />
    </div>
  );
};

export default ExpertsList;
