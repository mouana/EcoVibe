import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import UIkit from "uikit"; // Import UIkit

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // For navigation after successful login

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": document.cookie, // Utilisation du token CSRF
        },
        credentials: "include", // Nécessaire pour Sanctum
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Erreur de connexion");
      }

      const data = await response.json();
      console.log("Connexion réussie :", data);

      // Display a success message using UIkit
      UIkit.notification({
        message: "Connexion réussie !",
        status: "success",
        pos: "top-center",
      });

      // Redirect to home after successful login
      setTimeout(() => {
        navigate("/");
      }, 2000); // Redirect after 2 seconds
    } catch (err) {
      // Display an error message using UIkit
      UIkit.notification({
        message: err.message || "Erreur de connexion",
        status: "danger",
        pos: "top-center",
      });
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center bg-light"
      style={{ height: "100vh" }}
    >
      <div className="row w-75 shadow-lg rounded" style={{ height: "100%" }}>
        <div
          className="col-md-6 text-white d-flex flex-column justify-content-center align-items-center p-5"
          style={{ backgroundColor: "#82D49D", height: "100%" }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="mb-4"
            style={{ width: "100%" }}
          >
            <SwiperSlide>
              <img
                src="./Simulateur_img/login2.png"
                alt="Slide 1"
                className="d-block w-50 mx-auto rounded"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./Simulateur_img/login4.png"
                alt="Slide 2"
                className="d-block w-50 mx-auto rounded"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./Simulateur_img/login5.png"
                alt="Slide 3"
                className="d-block w-50 mx-auto rounded"
              />
            </SwiperSlide>
          </Swiper>
          <h1 className="text-center fw-bold">Bienvenue sur EcoVibe !</h1>
          <p className="text-center mt-3">
            Découvrez des solutions énergétiques durables avec notre plateforme.
          </p>
        </div>
        <div
          className="col-md-6 bg-white d-flex flex-column justify-content-center p-5"
          style={{ height: "100%" }}
        >
          <h2 className="text-primary fw-bold text-center">Connexion</h2>
          {error && <div className="alert alert-danger">{error}</div>}
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
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="form-check-input"
                />
                <label htmlFor="rememberMe" className="form-check-label">
                  Se souvenir du mot de passe
                </label>
              </div>
              <a href="#forgot-password" className="text-primary">
                Mot de passe oublié ?
              </a>
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
    </div>
  );
}

export default Signup;
