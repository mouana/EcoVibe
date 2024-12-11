import React from 'react';

const MessageSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-screen-lg">
        {/* Titre de la section */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Contactez <span className="text-green-600">nous</span>
        </h2>

        {/* Conteneur de la section */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image de gauche */}
          <div className="md:w-1/2">
            <img
              src="/service/WhatsApp Image 2024-11-17 at 19.00.00_f12a1edb.jpg" // Remplacez par le chemin de votre image
              alt="Paysage avec panneaux solaires"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Formulaire à droite */}
          <div className="md:w-1/2 bg-[#2DA884] p-8">
            <form className="space-y-6">
              {/* Champ nom complet */}
              <div>
                <label className="block text-white mb-2" htmlFor="fullName">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="w-full p-3 rounded-full border border-transparent bg-white text-gray-700 focus:outline-none focus:border-green-500"
                />
              </div>

              {/* Champ email */}
              <div>
                <label className="block text-white mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-full border border-transparent bg-white text-gray-700 focus:outline-none focus:border-green-500"
                />
              </div>

              {/* Champ message */}
              <div>
                <label className="block text-white mb-2" htmlFor="message">
                  Message
                </label>
                <input
                  type="message"
                  id="message"
                  placeholder="Enter your message"
                  className="w-full p-3 rounded-full border border-transparent bg-white text-gray-700 focus:outline-none focus:border-green-500"
                />
              </div>

              {/* Bouton d'envoi */}
              <button
                type="submit"
                className="w-full bg-white text-green-600 font-bold py-3 rounded-full hover:bg-green-700 hover:text-white transition duration-300"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
