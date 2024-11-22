import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Modules nécessaires
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiEnvelope, BiWorld } from "react-icons/bi";

const TeamSection = () => {
  const experts = [
    {
      name: "Dr. Amina El Fassi",
      role: "Spécialiste en Énergie Solaire",
      email: "amina.elfassi@example.com",
      linkedin: "linkedin.com/in/aminaelfassi",
      img: "./Simulateur_img/ex2.jpeg",
    },
    {
      name: "Hassan Benali",
      role: "Consultant en Énergie Éolienne",
      email: "hassan.benali@example.com",
      linkedin: "linkedin.com/in/hassanbenali",
      img: "./Simulateur_img/ex3.jpeg",
    },
    {
        name: "Youssef Idrissi",
        role: "Expert en Transition Énergétique",
        email: "youssef.idrissi@example.com",
        linkedin: "linkedin.com/in/youssefidrissi",
        img: "./Simulateur_img/ex1.jpeg",
      },
    {
      name: "Fatima Zahra Chami",
      role: "Ingénieure en Énergie Hydraulique",
      email: "fatimaz.chami@example.com",
      linkedin: "linkedin.com/in/fatimazchami",
      img: "./Simulateur_img/ex4.jpeg",
    },

    {
      name: "Karim Khattabi",
      role: "Chercheuse en Énergies Renouvelables",
      email: "karim.khattabi@example.com",
      linkedin: "linkedin.com/in/karimkhattabi",
      img: "./Simulateur_img/ex5.jpeg",
    },
  ];

  return (
    <section className="text-center py-6 mt-3">
      <h3 className="text-primary">NOTRE ÉQUIPE CRÉATIVE</h3>
      <h2 className="text-center fw-bold mb-4" style={{ color: "black" }}>
        Rencontrez Nos Experts Marocains
      </h2>
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Déclarez les modules ici
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // Temps avant le passage au slide suivant (en millisecondes)
            disableOnInteraction: false, // Continue l'autoplay même après interaction
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ height: "70vh" }}
        >
          {/* Slides */}
          {experts.map((expert, index) => (
            <SwiperSlide key={index}>
              <div className="card border-0" style={{ height: "60vh" }}>
                <img
                  src={expert.img}
                  alt={expert.name}
                  className="rounded-circle mx-auto mt-3"
                  style={{ width: "150px", height: "150px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{expert.name}</h5>
                  <p className="text-primary mb-1">{expert.role}</p>
                  <p className="d-flex align-items-center justify-content-center mb-1">
                    <BiEnvelope className="text-primary me-2" size={20} />{" "}
                    {expert.email}
                  </p>
                  <p className="d-flex align-items-center justify-content-center">
                    <BiWorld className="text-primary me-2" size={20} />{" "}
                    <a
                      href={`https://${expert.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bouton Contactez-Nous */}
        <div className="mt-4">
          <button className="btn btn-primary">Contactez-Nous</button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
