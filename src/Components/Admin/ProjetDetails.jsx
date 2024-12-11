import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams for extracting params from the URL

const ProjectDetails = () => {
  const { projectId } = useParams(); 
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    if (projectId) {
      fetchProjectDetails();
    }
  }, [projectId]);

  const fetchProjectDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://127.0.0.1:8000/api/admin/projects/${projectId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.expert) {
        setProject(response.data.expert); 
      } else {
        setError("Project not found.");
      }
    } catch (error) {
      setError("Failed to fetch project details");
      console.error("Failed to fetch project details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading project details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Project Details</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={project.image ? `http://127.0.0.1:8000/storage/${project.image}` : "https://via.placeholder.com/150"}
            alt={project.type}
            style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div className="col-md-6">
          <h3>{project.type}</h3>
          <p><strong>Location:</strong> {project.location}</p>
          <p><strong>Details:</strong> {project.details}</p>
          <p><strong>Status:</strong> {project.status}</p>
          <p><strong>Created At:</strong> {new Date(project.created_at).toLocaleDateString()}</p>
          <p><strong>Updated At:</strong> {new Date(project.updated_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
