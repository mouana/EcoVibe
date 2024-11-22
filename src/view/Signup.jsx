import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center bg-light"
      style={{ height: "100vh" }} 
    >
      <div
        className="row w-75 shadow-lg rounded"
        style={{ height: "100%" }} 
      >
        <div
          className="col-md-6 text-white d-flex flex-column justify-content-center align-items-center p-5"
          style={{
            backgroundColor: "#82D49D",
            height: "100%",
          }}
        >
          <Swiper
            modules={[ Pagination, Autoplay]}
            
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
            Simulez, gérez et partagez des projets d'énergie verte en temps réel.
          </p>
        </div>
        <div
          className="col-md-6 bg-white d-flex flex-column justify-content-center p-5"
          style={{ height: "100%" }} 
        >
          <h2 className="text-primary fw-bold text-center">Connexion</h2>
          <p className="mb-4">
            Vous n'avez pas de compte ?{" "}
            
            <Link  to="/inscription" ><a href="#register" className="text-primary">Créez un compte </a></Link>
          </p>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Nom d'utilisateur
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Entrez votre nom d'utilisateur"
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
            <button type="submit" className="btn btn-primary w-100">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
