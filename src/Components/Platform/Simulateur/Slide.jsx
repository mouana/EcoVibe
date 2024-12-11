import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";

function Slide() {
  const handleStartSimulation = () => {
    window.scrollTo({
      top: document.getElementById("formSection").offsetTop,
      behavior: "smooth",
    });
  };

  const handleSavoirPlus = () => {
    window.scrollTo({
      top: document.getElementById("information").offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        style={{ height: "80vh" }}
      >
        <SwiperSlide>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: "url('./Simulateur_img/bg1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80vh",
              color: "white",
              textAlign: "center",
            }}
          >
            <div
              className="container bg-dark bg-opacity-50 p-5 rounded align-items-center"
              style={{ width: "80%", maxWidth: "900px" }}
            >
              <h1 className="mb-4" style={{ fontSize: "2rem" }}>
                Simulez votre Projet Énergétique
              </h1>
              <p className="mb-4" style={{ fontSize: "1rem" }}>
                Utilisez notre simulateur interactif pour évaluer la production
                énergétique et le retour sur investissement de votre projet. En
                quelques étapes simples, entrez vos données (localisation, taille
                de l'installation) et obtenez des résultats précis sur la
                rentabilité et les économies potentielles.
              </p>
              <button className="btn btn-primary btn-lg" onClick={handleStartSimulation}>
                Commencer la Simulation
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: "url('./Simulateur_img/maroc.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80vh",
              color: "white",
              textAlign: "center",
            }}
          >
            <div
              className="container bg-dark bg-opacity-50 p-5 rounded"
              style={{ width: "80%", maxWidth: "900px" }}
            >
              <h1 className="mb-4" style={{ fontSize: "2rem" }}>
                Découvrez nos solutions
              </h1>
              <p className="mb-4" style={{ fontSize: "1rem" }}>
                Explorez nos différentes offres pour répondre à vos besoins
                énergétiques tout en respectant l'environnement.
              </p>
              <button className="btn btn-primary btn-lg" onClick={handleSavoirPlus}>
                En savoir plus
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx>{`
        @media (max-width: 768px) {
          .mySwiper {
            height: 60vh;
          }
          .container {
            width: 90%; 
            padding: 3rem 1rem;
          }

          h1 {
            font-size: 1.5rem;
          }
          p {
            font-size: 0.9rem;
          }

          button {
            font-size: 1rem; 
          }
        }

        @media (max-width: 480px) {
          .mySwiper {
            height: 50vh;
          }

          .container {
            width: 95%;
            padding: 2rem 1rem;
          }
          h1 {
            font-size: 1.2rem;
          }

          p {
            font-size: 0.85rem; 
          }

          button {
            font-size: 0.9rem; 
          }
        }
      `}</style>
    </div>
  );
}

export default Slide;
