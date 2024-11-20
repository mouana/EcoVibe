import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const ContactSection = () => {
  const cities = [
    { name: "Casablanca", coords: [33.5731, -7.5898], color: "#82D49D" },
    { name: "Marrakech", coords: [31.6295, -7.9811], color: "#3498db" },
    { name: "Rabat", coords: [34.0209, -6.8417], color: "#f39c12" },
    { name: "Fès", coords: [34.0331, -5.0003], color: "#e74c3c" },
  ];
    return (
      <div className="contact-container">
        {/* Section de gauche */}
        <div className="contact-left">
          <h2>Entrer en contact</h2>
          <p>
            Nous vous garantissons fiabilité, tarifs accessibles, et surtout, une
            démarche respectueuse de l’environnement.
          </p>
          <p>
            Rejoignez-nous dans notre mission pour un avenir durable – pour chaque
            geste compte. Ensemble, nous pouvons réduire notre impact écologique
            et construire un monde plus vert.
          </p>
          <div className="social-icons">
            <i className="fab fa-linkedin icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-facebook icon"></i>
            <i className="fab fa-whatsapp icon"></i>
          </div>
        </div>
  
        {/* Section de droite */}
        <div className="contact-right">
          <h2>Nous Contacter</h2>
          <form className="contact-form">
            <label>Prénom</label>
            <input type="text" placeholder="Votre prénom" />
  
            <label>Nom</label>
            <input type="text" placeholder="Votre nom" />
  
            <label>Email</label>
            <input type="email" placeholder="Votre adresse email" />
  
            <label>Message</label>
            <textarea placeholder="Votre message" />
  
            <button type="submit">Envoyer</button>
          </form>
        </div>
  
        {/* Section de la carte */}
        <div className="contact-map"  style={{ height: "500px", borderRadius: "15px", overflow: "hidden", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" }}>
      <MapContainer
        center={[31.7917, -7.0926]} // Centre sur le Maroc
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Fond de carte stylisé */}
        <TileLayer
          url="https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=YOUR_ACCESS_TOKEN"
          attribution='&copy; <a href="https://jawg.io">Jawg Maps</a> contributors'
        />

        {/* Marqueurs stylisés pour les villes */}
        {cities.map((city, index) => (
          <CircleMarker
            key={index}
            center={city.coords}
            radius={12}
            color={city.color}
            fillColor={city.color}
            fillOpacity={0.7}
            weight={2}
          >
            {/* Info-bulle et popup pour des informations complémentaires */}
            <Tooltip direction="top" offset={[0, -10]} opacity={1}>
              <span style={{ fontWeight: "bold", color: city.color }}>{city.name}</span>
            </Tooltip>
            <Popup>
              <div style={{ textAlign: "center" }}>
                <h3 style={{ margin: "5px 0", color: city.color }}>{city.name}</h3>
                <p style={{ fontSize: "14px", margin: 0 }}>{city.description}</p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
       
    
      </div>
    );
  };
  
  export default ContactSection;
  