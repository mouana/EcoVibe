import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UIkit from "uikit";
import CreateServiceForm  from './CreateServiceForm '
const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://127.0.0.1:8000/api/services", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setServices(response.data);
    } catch (error) {
      UIkit.notification({
        message: "Failed to fetch services",
        status: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  const destroyService = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://127.0.0.1:8000/api/services/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      UIkit.notification({
        message: "Service deleted successfully!",
        status: "success",
      });

      setServices(services.filter((service) => service.id !== id));
    } catch (error) {
      console.error("Delete Error:", error.response?.data || error.message);
      UIkit.notification({
        message: "Failed to delete service",
        status: "danger",
      });
    }
  };

  if (loading) {
    return <div className="text-center">Loading services...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Service List</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Service Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={service.id}>
                <td>{index + 1}</td>
                <td>{service.name}</td>
                <td>{service.description}</td>
                <td>{service.price}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => destroyService(service.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CreateServiceForm  />
    </div>
  );
};

export default ServiceList;
