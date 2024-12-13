import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UIkit from "uikit";
import { Link, useNavigate } from "react-router-dom";
const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState(null);
  const [updatedProject, setUpdatedProject] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://127.0.0.1:8000/api/admin/projects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(response.data);
    } catch (error) {
      UIkit.notification({
        message: "Failed to fetch projects",
        status: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  const startEditing = (project) => {
    setEditingProject(project.id);
    setUpdatedProject({
      type: project.type,
      location: project.location,
      details: project.details,
      status: project.status,
    });
  };

  const handleUpdate = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `http://127.0.0.1:8000/api/projects/${id}`,
        updatedProject,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      UIkit.notification({
        message: response.data.message || "Project updated successfully!",
        status: "success",
      });
      const updatedProjects = projects.map((project) =>
        project.id === id ? { ...project, ...response.data.project } : project
      );
      setProjects(updatedProjects);
      setEditingProject(null);
    } catch (error) {
      UIkit.notification({
        message: error.response?.data?.message || "Failed to update project",
        status: "danger",
      });
    }
  };

  const navigateToDetails = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  if (loading) {
    return <div className="text-center">Loading projects...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Manage Projects</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Type</th>
              <th>Location</th>
              <th>Details</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`http://127.0.0.1:8000/storage/${project.image}`}
                    alt={project.type}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                </td>
                <td>
                  {editingProject === project.id ? (
                    <select
                      className="form-select"
                      defaultValue={project.type}
                      onChange={(e) =>
                        setUpdatedProject({ ...updatedProject, type: e.target.value })
                      }
                    >
                      <option value="hydro">hydro</option>
                      <option value="solaire">solaire</option>
                      <option value="éolien">éolien</option>
                    </select>
                  ) : (
                    project.type
                  )}
                </td>
                <td>
                  {editingProject === project.id ? (
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={project.location}
                      onChange={(e) =>
                        setUpdatedProject({ ...updatedProject, location: e.target.value })
                      }
                    />
                  ) : (
                    project.location
                  )}
                </td>
                <td>
                  {editingProject === project.id ? (
                    <textarea
                      className="form-control"
                      defaultValue={project.details}
                      onChange={(e) =>
                        setUpdatedProject({ ...updatedProject, details: e.target.value })
                      }
                    />
                  ) : (
                    project.details
                  )}
                </td>
                <td>
                  {editingProject === project.id ? (
                    <select
                      className="form-select"
                      defaultValue={project.status}
                      onChange={(e) =>
                        setUpdatedProject({ ...updatedProject, status: e.target.value })
                      }
                    >
                      <option value="en cours">en cours</option>
                      <option value="terminé">terminé</option>
                    </select>
                  ) : (
                    project.status
                  )}
                </td>
                <td>
                  {editingProject === project.id ? (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleUpdate(project.id)}
                      >
                        Enregistrer
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setEditingProject(null)}
                      >
                        Annuler
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => startEditing(project)}
                      >
                        Modifier
                      </button>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => navigateToDetails(project.id)}
                      >
                        Details
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsList;
