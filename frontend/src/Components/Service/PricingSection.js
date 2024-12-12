import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 
import 'react-toastify/dist/ReactToastify.css'; 

const PricingSection = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const navigate = useNavigate(); 

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/services')
      .then((response) => {
        setServices(response.data); 
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
        toast.error('Erreur lors du chargement des services');
        setIsLoading(false); 
      });
  }, []);

  const handleRequest = (service) => {
    const token = localStorage.getItem('token'); 

    if (!token) {
      toast.error('Veuillez vous connecter avant de demander.');
      navigate('/signup'); 
    } else {
      const user = JSON.parse(localStorage.getItem('user')); // On suppose que l'utilisateur est stocké en localStorage

      axios
        .post('http://127.0.0.1:8000/api/demandes', {
          service_id: service.id,
          user_id: user.id, // Utilisation de l'ID de l'utilisateur authentifié
          nom: user.name,
          email: user.email,
          description: service.description,
          prix: service.price,
          status: 'pending',  // L'état de la demande (vous pouvez changer si nécessaire)
        }, {
          headers: {
            Authorization: `Bearer ${token}`, // Authentification avec le token
          },
        })
        .then((response) => {
          toast.success('L\'admin va vous contacter bientôt.');
        })
        .catch((error) => {
          console.error('Error creating request:', error);
          toast.error('Erreur lors de la création de la demande');
        });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section id='commencer' className="py-8 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Tableau <span className="text-green-600">des tarifs</span>
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative w-full md:w-1/3 bg-white rounded-xl shadow-lg border flex flex-col justify-between ${
                index === 1 ? 'border-green-600' : 'border-gray-200'
              }`}
              style={{ minHeight: '350px' }}
            >
              {/* Badge */}
              <div
                className={`absolute top-4 right-4 px-4 py-1 rounded-full text-white text-sm font-medium ${
                  index === 2 ? 'bg-green-600' : 'bg-gray-400'
                }`}
              >
                {service.type}
              </div>

              {/* Content */}
              <div className="flex flex-col px-6 py-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">{service.type}</h3>
                <div className="text-3xl font-extrabold text-green-600">
                  {service.price} Dh
                </div>
                <p className="text-gray-500 text-sm">/Par mois</p>

                {/* Description */}
                <p className="text-gray-700 text-sm my-4">{service.description}</p>
              </div>

              {/* Button */}
              <div className="px-6 py-4">
                <button
                  onClick={() => handleRequest(service)}  // Passer le service en paramètre
                  className="w-full h-12 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Demander
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
