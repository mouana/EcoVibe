import React from "react";

import "../styles/Signup.css";
import {  Pagination,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const Signup = () => {
  

  return (
    <div className="custom-login-page">
      {/* Section Carousel */}
      <div className="custom-carousel-section">
      <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="custom-swiper"
        >
          <SwiperSlide>
            <img
             src="./login4.png" alt="EcoVibe Logo"
              className="custom-carousel-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./login2.png"
              alt="Illustration 2"
              className="custom-carousel-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./login5.png"
              alt="Illustration 3"
              className="custom-carousel-image"
            />
          </SwiperSlide>
        </Swiper>
        <div className="custom-welcome-text">
          <h1 className="custom-title">Bienvenue sur EcoVibe !</h1>
          <p className="custom-description">
            Découvrez des solutions énergétiques durables avec notre plateforme. Simulez, gérez et partagez des projets d'énergie verte en temps réel.
          </p>
        </div>
      </div>

      {/* Section Form */}
      <div className="custom-form-section">
        <h2 className="custom-form-title">Connexion</h2>
        <p className="custom-form-subtitle">
          Vous n'avez pas de compte ? <a href="#register"><Link  to="/inscription" >Créez un compte</Link></a>
        </p>
        <form className="custom-form">
          <input type="text" placeholder="Nom d'utilisateur" className="custom-input" />
          <input type="password" placeholder="Mot de passe" className="custom-input" />
          <div className="custom-form-options">
            <label className="custom-remember-label">
              <input type="checkbox" /> Se souvenir du mot de passe
            </label>
            <a href="#forgot-password" className="custom-forgot-link">Mot de passe oublié ?</a>
          </div>
          <button className="custom-login-button">Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
