import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import UIkit from "uikit";
import "uikit/dist/css/uikit.min.css";

function Inscrire() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    birthday: "",
  });
  const [loading, setLoading] = useState(false);

  // Regular expressions
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const getMaxDate = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    return today.toISOString().split("T")[0];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email) {
        UIkit.notification("Tous les champs sont obligatoires.", {
          status: "danger",
        });
        return;
      }

      if (!emailRegex.test(formData.email)) {
        UIkit.notification("Email non valide.", { status: "danger" });
        return;
      }
    }

    if (step === 2) {
      if (!formData.password || !formData.confirmPassword) {
        UIkit.notification("Tous les champs sont obligatoires.", {
          status: "danger",
        });
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        UIkit.notification("Les mots de passe ne correspondent pas.", {
          status: "danger",
        });
        return;
      }

      if (formData.password.length < 6) {
        UIkit.notification(
          "Le mot de passe doit contenir au moins 6 caractères.",
          {
            status: "danger",
          }
        );
        return;
      }
    }
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!phoneRegex.test(formData.phone)) {
      UIkit.notification(
        "Numéro de téléphone non valide. Utilisez 10 chiffres.",
        {
          status: "danger",
        }
      );
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
        phone: formData.phone,
        birthday: formData.birthday,
        
      });

      UIkit.notification("Inscription réussie !", { status: "success" });
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        birthday: "",
      });
      setStep(1);
    } catch (error) {
      const errors = error.response?.data?.errors || {};
      if (errors.email) {
        UIkit.notification("Email déjà utilisé.", { status: "danger" });
      } else if (errors.phone) {
        UIkit.notification("Numéro de téléphone déjà utilisé.", {
          status: "danger",
        });
      } else {
        UIkit.notification("Erreur lors de l'inscription.", {
          status: "danger",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #e0f7fa, #e3f2fd)",
      }}
    >
      <div
        className="row w-75 shadow rounded overflow-hidden"
        style={{ maxWidth: "1000px", backgroundColor: "white" }}
      >
        <div
          className="col-md-6 p-4 d-flex flex-column justify-content-center align-items-center"
          style={{ background: "#82D49D", color: "white" }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            style={{ width: "100%" }}
          >
            <SwiperSlide>
              <img
                src="./Simulateur_img/login2.png"
                alt="Slide 1"
                className="d-block w-75 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./Simulateur_img/login4.png"
                alt="Slide 2"
                className="d-block w-75 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./Simulateur_img/login5.png"
                alt="Slide 3"
                className="d-block w-75 mx-auto"
              />
            </SwiperSlide>
          </Swiper>
          <h1 className="text-center mt-4 fw-bold">Rejoignez EcoVibe</h1>
          <p className="text-center mt-2">
            Participez à un avenir durable avec des solutions énergétiques
            innovantes !
          </p>
        </div>

        <div className="col-md-6 p-5">
          <h2
            className="fw-bold"
            style={{
              color: "#007AFF",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            Créez un compte
          </h2>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control rounded-pill"
                    placeholder="Entrez votre nom complet"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control rounded-pill"
                    placeholder="Entrez votre email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex justify-content-center mt-4 gap-1">
                  <button
                    type="button"
                    className="btn btn-primary custom-btn"
                    onClick={nextStep}
                  >
                    <FaArrowRight size={15} />
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control rounded-pill"
                    placeholder="Entrez votre mot de passe"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Confirmez le mot de passe
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control rounded-pill"
                    placeholder="Confirmez votre mot de passe"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex justify-content-center mt-4 gap-1">
                  <button
                    type="button"
                    className="btn btn-secondary custom-btn"
                    onClick={prevStep}
                  >
                    <FaArrowLeft size={15} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary custom-btn"
                    onClick={nextStep}
                  >
                    <FaArrowRight size={15} />
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Numéro de téléphone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control rounded-pill"
                    placeholder="Entrez votre numéro de téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="birthday"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Date de naissance
                  </label>
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    className="form-control rounded-pill"
                    value={formData.birthday}
                    onChange={handleChange}
                    max={getMaxDate()}
                  />
                </div>
                
                <div className="d-flex justify-content-center mt-4 gap-1">
                  <button
                    type="button"
                    className="btn btn-secondary custom-btn"
                    onClick={prevStep}
                  >
                    <FaArrowLeft size={15} />
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success custom-btn"
                    disabled={loading}
                  >
                    {loading ? "Chargement..." : "S'inscrire"}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Inscrire;
