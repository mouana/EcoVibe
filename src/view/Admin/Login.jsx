import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import UIkit from "uikit";

function Login() {
  const { setAuthState } = useContext(AuthContext); // Destructure only the required context values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for displaying errors
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); // Clear any previous error messages

    // Basic client-side validation
    if (!email || !password) {
      setErrorMessage("Veuillez remplir tous les champs.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/userLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur de connexion");
      }

      const { token, user } = data;

      // Store token and user data locally
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Update auth state
      setAuthState({ token, user });

      UIkit.notification({ message: "Connexion réussie !", status: "success" });

      setTimeout(() => {
        if (user.role === "admin") {
          navigate("/Dashboard");
        } else if (user.role === null) {
          navigate("/expertProfile");
        } else {
          UIkit.notification({
            message: `Rôle utilisateur non autorisé : ${user.role}`,
            status: "warning",
          });
        }
      }, 2000);
      
    } catch (err) {
      console.error("Login Error:", err);
      setErrorMessage(err.message || "Une erreur est survenue.");
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
      <div className="card shadow-lg p-4" style={{ width: "400px", maxWidth: "90%" }}>
        <h2 className="text-center text-primary fw-bold mb-4">Admin Connexion</h2>

        {errorMessage && (
          <div className="alert alert-danger text-center" role="alert">
            {errorMessage}
          </div>
        )}

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
