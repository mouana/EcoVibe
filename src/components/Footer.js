import '../styles/Inscription.css';
import '../styles/Signup.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>EcoVibe</h2>
          <p>Des solutions durables pour un avenir meilleur.</p>
        </div>
        
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email : contact@ecovibe.com</p>
            <p>Téléphone : +123 456 789</p>
            <p>Adresse : 123 Rue Verte, Ville Écologique</p>
          </div>

          <div className="footer-section">
            <h3>Liens Rapides</h3>
            <ul>
              <li><a href="/about">À propos</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projets</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Suivez-nous</h3>
            <div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
    <i className="fab fa-linkedin-in"></i>
  </a>
</div>

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 EcoVibe. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
