import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AuthContext} from '../../../context/AuthContext'
import { useNavigate } from "react-router-dom"; // Importez useNavigate

const MessageSection = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Accédez au contexte AuthContext pour vérifier si l'utilisateur est connecté
  const { isLoggedIn } = useContext(AuthContext); 
  const navigate = useNavigate(); // Hook de redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifiez si l'utilisateur est connecté
    if (!isLoggedIn) {
      // Rediriger l'utilisateur vers la page d'inscription
      navigate("/signup");
      return; // Stoppe l'exécution de la fonction si l'utilisateur n'est pas connecté
    }

    setIsLoading(true);

    try {
      // Envoi des données au backend
      const response = await axios.post('http://127.0.0.1:8000/api/contact', {
        full_name: fullName,
        email: email,
        message: message,
      });

      toast.success(response.data.message); 

      setFullName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id='contact-section' className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-screen-lg">
        <h2 className="text-4xl font-bold text-center mb-8">
          Contactez <span className="text-green-600">nous</span>
        </h2>
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <img
              src="/service/WhatsApp Image 2024-11-17 at 19.00.00_f12a1edb.jpg" // Remplacez par le chemin de votre image
              alt="Paysage avec panneaux solaires"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 bg-[#2DA884] p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2" htmlFor="fullName">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Entrez votre nom complet"
                  className="w-full p-3 rounded-full border border-transparent bg-white text-gray-700 focus:outline-none focus:border-green-500"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-white mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Entrez votre email"
                  className="w-full p-3 rounded-full border border-transparent bg-white text-gray-700 focus:outline-none focus:border-green-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-white mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Entrez votre message"
                  className="w-full p-3 rounded-full border border-transparent bg-white text-gray-700 focus:outline-none focus:border-green-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-green-600 font-bold py-3 rounded-full hover: hover:text-green-600 transition duration-300"
                disabled={isLoading}
              >
                {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default MessageSection;
