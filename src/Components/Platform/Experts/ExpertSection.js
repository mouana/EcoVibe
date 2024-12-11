import React, { useState, useEffect } from "react";

const ExpertSection = () => {
  const [randomImages, setRandomImages] = useState([]);
  const [corruptedImages, setCorruptedImages] = useState([]);

  // Liste des images
  const images = [
    "/imagesper/p11.jpg",
    "/imagesper/p12.jpg",
    "/imagesper/p43.jpg", 
    "/imagesper/p44.jpg", 
    "/imagesper/p45.jpg", 
    "/imagesper/p46.jpeg", 
    "/imagesper/p46.jpg", 
    "/imagesper/p47.jpg", 
    "/imagesper/p48.jpg", 
    "/imagesper/52.jpg", 
    "/imagesper/p53.jpeg", 
    "/imagesper/p53.jpg",
    "/imagesper/p60.jpeg", 
    "/imagesper/p61.jpeg", 
  ];

  // Obtenir des images aléatoires
  const getRandomImages = () => {
    // Filtrer les images corrompues
    const validImages = images.filter((image) => !corruptedImages.includes(image));

    const shuffled = [...validImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(52, shuffled.length)); // Limiter à 52 ou moins
  };

  useEffect(() => {
    // Charger les images aléatoires initialement
    setRandomImages(getRandomImages());

    // Mettre à jour les images toutes les 3 secondes
    const interval = setInterval(() => {
      setRandomImages(getRandomImages());
    }, 3000);

    return () => clearInterval(interval);
  }, [corruptedImages]); // Recalculer les images si certaines sont marquées comme corrompues

  // Gérer les images corrompues
  const handleImageError = (image) => {
    setCorruptedImages((prev) => [...new Set([...prev, image])]); // Ajouter à la liste des corrompues
  };

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
              onError={() => handleImageError(image)} // Appelle la fonction pour gérer les erreurs
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
