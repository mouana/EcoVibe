import React, { useState, useEffect } from "react";

const ExpertSection = () => {
  const [randomImages, setRandomImages] = useState([]);

  // Liste des images
  const images = [
    "/imagesper/p1.jpg",
    "/imagesper/p2.jpg",
    "/imagesper/p3.jpg",
    "/imagesper/p4.jpg",
    "/imagesper/p5.jpg",
    "/imagesper/p6.jpg",
    "/imagesper/p7.jpg",
    "/imagesper/p8.jpg",
    "/imagesper/p9.jpg",
    "/imagesper/p10.jpg",
    "/imagesper/p11.jpg",
    "/imagesper/p12.jpg",
    "/imagesper/p19.jpg",
    "/imagesper/p14.jpg",
    "/imagesper/p15.jpg",
    "/imagesper/p16.jpeg",
    "/imagesper/p17.jpeg",
    "/imagesper/p18.jpg",
    "/imagesper/p19.jpg", "/imagesper/p10.jpg",
    "/imagesper/p11.jpg",
    "/imagesper/p12.jpg",
    "/imagesper/p16.jepg",
    "/imagesper/p14.jpg",
    "/imagesper/p15.jpg",
    "/imagesper/p16.jpeg",
    "/imagesper/p17.jpeg",
    "/imagesper/p18.jpg",
    "/imagesper/p19.jpg", "/imagesper/p10.jpg",
    "/imagesper/p11.jpg",
    "/imagesper/p12.jpg",
    "/imagesper/p1.jpg",
    "/imagesper/p14.jpg",
    "/imagesper/p15.jpg",
    "/imagesper/p16.jpeg",
    "/imagesper/p17.jpeg",
    "/imagesper/p18.jpg",
    "/imagesper/p19.jpg", "/imagesper/p10.jpg",
    "/imagesper/p11.jpg",
    "/imagesper/p12.jpg",
    "/imagesper/p1.jpg",
    "/imagesper/p14.jpg",
    "/imagesper/p15.jpg",
    "/imagesper/p16.jpeg",
    "/imagesper/p17.jpeg",
    "/imagesper/p18.jpg",
    "/imagesper/p19.jpg",  "/imagesper/p5.jpg",
    "/imagesper/p6.jpg",
    "/imagesper/p7.jpg",
    // ... autres images
  ];

  const getRandomImages = () => {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(52, shuffled.length)); // Limiter à 52 ou moins selon le nombre d'images disponibles
  };

  useEffect(() => {
    setRandomImages(getRandomImages());

    const interval = setInterval(() => {
      setRandomImages(getRandomImages());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.appContainer}>
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Nos Experts</h1>
        <p style={styles.heroText}>
          Nous sommes spécialisés dans les solutions innovantes en énergies
          renouvelables.
        </p>
      </div>

      <div style={styles.imagesSection}>
        {randomImages.map((image, index) => (
          <div key={index} style={styles.imageWrapper}>
            <img
              src={image}
              alt={`Expert ${index + 1}`}
              style={styles.personImage}
              onError={(e) => e.target.src = "/imagesper/p13.jpg"} // Image par défaut si l'image est manquante
            />
          </div>
        ))}
      </div>
    </div>
  );
};


const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: 0,
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
  },
  heroSection: {
    backgroundImage: 'url("/imagesper/Nos.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh",
    width: "100%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  },
  heroTitle: {
    fontSize: "3rem",
    margin: 0,
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
  },
  heroText: {
    fontSize: "1.5rem",
    margin: "10px 0",
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
  },
  imagesSection: {
    display: "grid",
    gridTemplateColumns: "repeat(13, 1fr)", // 13 images par ligne
    gap: "10px",
    padding: "20px",
  },
  imageWrapper: {
    textAlign: "center",
  },
  personImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
    border: "3px solid #ddd",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },
};

export default ExpertSection;