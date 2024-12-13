import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-500 text-white">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-between px-8 py-8 md:flex-row">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">Passez à l'énergie renouvelable aujourd'hui</h1>
          <p className="mt-2">
            🌿 Réduisez votre empreinte carbone et adoptez un mode de vie durable grâce à nos solutions d'énergie verte.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4">
          <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900">
          <Link className="text-white text-decoration-none " to ="/simulateur">Commencer</Link>

          </button>
          <button className="bg-green-500 text-black px-6 py-2 rounded hover:bg-green-600">
            <Link className="text-white text-decoration-none " to ="/service"> Contactez-nous</Link>

          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-8">
          {/* Solutions Section */}
          <div>
            <h4 className="font-bold mb-3">Nos Solutions</h4>
            <ul className="space-y-2">
              <li>Énergie solaire</li>
              <li>Éoliennes</li>
              <li>Stockage d'énergie</li>
              <li>Optimisation énergétique</li>
            </ul>
          </div>

          {/* Pourquoi Choisir Section */}
          <div>
            <h4 className="font-bold mb-3">Pourquoi nous choisir ?</h4>
            <ul className="space-y-2">
              <li>Durabilité garantie</li>
              <li>Coûts réduits</li>
              <li>Innovation technologique</li>
              <li>Impact environnemental positif</li>
            </ul>
          </div>

          {/* Ressources Section */}
          <div>
            <h4 className="font-bold mb-3">Ressources</h4>
            <ul className="space-y-2">
              <li>Guide des énergies renouvelables</li>
              <li>Blog sur la durabilité</li>
              <li>FAQs</li>
              <li>Webinaires</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold mb-3">Contactez-nous</h4>
            <ul className="space-y-2">
              <li>Email: contact@energieverte.com</li>
              <li>Téléphone: +212 6 23 45 67 89</li>
              <li>Adresse: 123 Rue de l'Énergie, Marrakech</li>
              <li>Suivez-nous :
                <div className="flex space-x-4 mt-2">
                  <span>🌍</span>
                  <span>🐦</span>
                  <span>📷</span>
                  <span>✉️</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center mt-8 text-sm border-t border-gray-700 pt-4">
          <p>
            © 2024 Énergie Verte. Tous droits réservés. |{" "}
            <span className="hover:underline">Politique de confidentialité</span> |{" "}
            <span className="hover:underline">Conditions d'utilisation</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
