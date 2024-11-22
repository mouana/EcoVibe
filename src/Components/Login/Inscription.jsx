import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt,FaArrowRight, FaArrowLeft  } from "react-icons/fa"; // Importer les icônes
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function inscrire() {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    birthdate: "",
    gender: "",
    address: "",
    category: "",
    interests: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #e0f7fa, #e3f2fd)",
      }}
    >
      <div className="row w-75 shadow rounded overflow-hidden" style={{ maxWidth: "1000px", backgroundColor: "white" }}>
        <div
          className="col-md-6 p-4 d-flex flex-column justify-content-center align-items-center"
          style={{
            background: "#82D49D",
            color: "white",
          }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            style={{ width: "100%" }}
          >
            <SwiperSlide>
              <img src="./Simulateur_img/login2.png" alt="Slide 1" className="d-block w-75 mx-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Simulateur_img/login4.png" alt="Slide 2" className="d-block w-75 mx-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Simulateur_img/login5.png" alt="Slide 3" className="d-block w-75 mx-auto" />
            </SwiperSlide>
          </Swiper>
          <h1 className="text-center mt-4 fw-bold">Rejoignez EcoVibe</h1>
          <p className="text-center mt-2">Participez à un avenir durable avec des solutions énergétiques innovantes !</p>
        </div>

        <div className="col-md-6 p-5" style={{ position: "relative", background: "white" }}>
          <h2 className="fw-bold" style={{ color: "#007AFF", textAlign: "center", marginBottom: "30px" }}>
            Créez un compte
          </h2>

          {/* Ligne des étapes  */}
          <div className="d-flex justify-content-between mb-4">
            <div
              className={`step-indicator ${step === 1 ? "active" : ""}`}
              style={step === 1 ? { color: "#007AFF", fontWeight: "bold" } : {}}
            >
              <FaUser size={20} /> 
            </div>
            <div
              className={`step-indicator ${step === 2 ? "active" : ""}`}
              style={step === 2 ? { color: "#007AFF", fontWeight: "bold" } : {}}
            >
              <FaEnvelope size={20} /> 
            </div>
            <div
              className={`step-indicator ${step === 3 ? "active" : ""}`}
              style={step === 3 ? { color: "#007AFF", fontWeight: "bold" } : {}}
            >
              <FaLock size={20} />
            </div>
            <div
              className={`step-indicator ${step === 4 ? "active" : ""}`}
              style={step === 4 ? { color: "#007AFF", fontWeight: "bold" } : {}}
            >
              <FaPhoneAlt size={20} /> 
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Étape 1  */}
            {step === 1 && (
              <>
                <div className="mb-4">
                  <label htmlFor="fullName" className="form-label" style={{ fontWeight: "bold" }}>
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-control rounded-pill"
                    placeholder="Entrez votre nom complet"
                    value={formData.fullName}
                    onChange={handleChange}
                    style={{ padding: "10px 20px" }}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label" style={{ fontWeight: "bold" }}>
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
                    style={{ padding: "10px 20px" }}
                  />
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <button type="button" className="btn btn-primary custom-btn" onClick={nextStep}>
                    Suivant
                  </button>
                </div>
              </>
            )}

            {/* Étape 2 - Informations de sécurité */}
            {step === 2 && (
              <>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label" style={{ fontWeight: "bold" }}>
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
                    style={{ padding: "10px 20px" }}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label" style={{ fontWeight: "bold" }}>
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
                    style={{ padding: "10px 20px" }}
                  />
                </div>

                <div className="d-flex justify-content-center mt-4 gap-1">
                  <button type="button" className="btn btn-secondary custom-btn" onClick={prevStep}>
                  <FaArrowLeft size={15} />
                  </button>
                  <button type="button" className="btn btn-primary custom-btn" onClick={nextStep}>
                  <FaArrowRight size={15} />
                  </button>
                </div>
              </>
            )}

            {/* Étape 3 - Informations personnelles */}
            {step === 3 && (
              <>
                <div className="mb-4">
                  <label htmlFor="phone" className="form-label" style={{ fontWeight: "bold" }}>
                    Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control rounded-pill"
                    placeholder="Entrez votre numéro de téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ padding: "10px 20px" }}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="birthdate" className="form-label" style={{ fontWeight: "bold" }}>
                    Date de naissance
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    className="form-control rounded-pill"
                    value={formData.birthdate}
                    onChange={handleChange}
                    style={{ padding: "10px 20px" }}
                  />
                </div>

                <div className="d-flex justify-content-center mt-4 gap-1">
                  <button type="button" className="btn btn-secondary custom-btn" onClick={prevStep}>
                  <FaArrowLeft size={15} />
                  </button>
                  <button type="button" className="btn btn-primary custom-btn" onClick={nextStep}>
                  <FaArrowRight size={15} />
                  </button>
                </div>
              </>
            )}

            {/* Étape 4 - */}
            {step === 4 && (
              <>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="form-check-input"
                    checked={formData.terms}
                    onChange={handleChange}
                  />
                  <label htmlFor="terms" className="form-check-label">
                    J'accepte les termes et conditions
                  </label>
                </div>
                <div className="d-flex justify-content-center mt-4 gap-1">
                  <button type="button" className="btn btn-secondary custom-btn" onClick={prevStep}>
                  <FaArrowLeft size={15} />
                  </button>
                  <button type="submit" className="btn btn-success custom-btn">
                    Terminer
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

export default inscrire;
