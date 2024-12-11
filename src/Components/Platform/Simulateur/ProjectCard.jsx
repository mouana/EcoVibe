import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCard() {
  const realisations = [
    {
      title: "Ferme Solaire de Ben Guerir",
      description:
        "La ferme solaire de Ben Guerir fait partie du plan Maroc 2020 pour produire de l'énergie solaire propre et fournir une énergie durable aux zones rurales.",
      price: "250 000 Dh",
      img: "./Simulateur_img/maroc1.png",
    },
    {
      title: "Parc Éolien de Tarfaya",
      description:
        "Le parc éolien de Tarfaya, situé dans le sud du Maroc, est l'un des plus grands en Afrique, avec une capacité de production d'énergie propre pour plusieurs milliers de foyers.",
      price: "300 000 Dh",
      img: "./Simulateur_img/maroc2.jpeg"
    },
    {
      title: "Projet Éolien de Foum el Oued",
      description:
        "Ce projet éolien localisé près de Foum el Oued vise à exploiter les vents du littoral pour générer de l'énergie verte pour les communautés environnantes.",
      price: "300 000 Dh",
      img: "./Simulateur_img/maroc3.jpg"
    },
    {
      title: "Hydroélectriques de Al Wahda",
      description:
        "Le barrage hydroélectrique de Al Wahda est un projet majeur pour produire de l'électricité à partir des ressources en eau du fleuve Oum Er-Rbia, dans le centre du Maroc.",
      price: "500 000 Dh",
      img: "./Simulateur_img/maroc4.jpeg",
    },
  ];

  return (
    <div id="information" className="container my-2">
      <h2 className="text-center fw-bold mb-4" style={{ color: "black" }}>
        Nos Réalisations au Maroc
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {realisations.map((realisation, index) => (
          <SwiperSlide key={index}>
            <div
              className="card border-0 shadow-sm card-hover"
              style={{
                backgroundImage: `url(${realisation.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                className="card-body d-flex flex-column justify-content-end text-content"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "10px",
                  color: "white",
                  padding: "20px",
                  opacity: 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                <h5 className="card-title text-white">{realisation.title}</h5>
                <p className="card-text text-light">{realisation.description}</p>
                <h4 className=" " style={{color:'#82D49D', fontFamily:'serif'}}>{realisation.price}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          .card-hover:hover .text-content {
            opacity: 1 !important;
          }
        `}
      </style>
    </div>
  );
}

export default ProjectCard;
