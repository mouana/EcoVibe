import React from 'react';
import '../styles/Inscription.css';

const Inscription = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-content">
          <h2>Rejoignez-nous !</h2>
          <h3>Créez un compte sur EcoVibe</h3>
          <form className="signup-form">
            <label>Nom d'utilisateur</label>
            <input type="text" placeholder="Entrez votre nom d'utilisateur" />
            <label>Adresse e-mail</label>
            <input type="email" placeholder="Entrez votre adresse e-mail" />
            <label>Mot de passe</label>
            <input type="password" placeholder="Définissez un mot de passe sécurisé" />
            <label>Confirmer le mot de passe</label>
            <input type="password" placeholder="Confirmez votre mot de passe" />
            <button type="submit" className="signup-button">INSCRIPTION</button>
          </form>
          <div className="sign-up-options">
            <p>S'inscrire avec</p>
            <div className="social-icons">
              <i className="fab fa-google"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
        <div className="signup-footer">
          <p>Déjà un compte ? <a href="/login">Connexion</a></p>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
