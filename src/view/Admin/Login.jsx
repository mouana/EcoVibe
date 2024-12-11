import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import UIkit from "uikit";

function Login() {
  const { setIsLoggedIn } = useContext(AuthContext); // Managing login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Navigation after successful login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("API Response:", data); // Log the entire API response
  
      if (!response.ok) {
        throw new Error(data.message || "Erreur de connexion");
      }
  
      // Access the token from the response
      const token = data.token;
  
      // Store the admin token and role in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", "admin");
      UIkit.notification({ message: "Connexion réussie !", status: "success" });
  
      // Update AuthContext state
      setIsLoggedIn(true);
  
      // Navigate to admin dashboard
      setTimeout(() => navigate("/Dashboard"), 2000);
    } catch (err) {
      console.error("Login Error:", err); // Log any errors
      UIkit.notification({ message: err.message, status: "danger" });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center bg-light"
      style={{ height: "100vh" }}
    >
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h2 className="text-center text-primary fw-bold mb-4">Admin Connexion</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
