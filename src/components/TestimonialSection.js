import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Eko Susiloanto',
    position: 'Regional Mobility Manager',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi at est euismod volutpat. Fusce a iaculis leo. Maecenas tempor hendrerit cursus."',
    rating: 5,
    image: 'WhatsApp Image 2024-11-17 at 14.48.26_135bdf91.jpg', // Chemin de l'image 1
  },
  {
    id: 2,
    name: 'Tjandra Mangkualam',
    position: 'District Devices Producer',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi at est euismod volutpat. Fusce a iaculis leo. Maecenas tempor hendrerit cursus."',
    rating: 5,
    image: 'WhatsApp Image 2024-11-17 at 14.50.51_497209be.jpg', // Chemin de l'image 2
  },
  {
    id: 3,
    name: 'Tri Cahyono',
    position: 'Human Accounts Supervisor',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi at est euismod volutpat. Fusce a iaculis leo. Maecenas tempor hendrerit cursus."',
    rating: 5,
    image: 'WhatsApp Image 2024-11-17 at 14.50.51_3093f1da.jpg', // Chemin de l'image 3
  },
  {
    id: 4,
    name: 'Cak Mukidi',
    position: 'Forward Paradigm Manager',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi at est euismod volutpat. Fusce a iaculis leo. Maecenas tempor hendrerit cursus."',
    rating: 5,
    image: 'WhatsApp Image 2024-11-17 at 14.53.42_990e0584.jpg', // Chemin de l'image 4
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        {/* Titre de la section */}
        <h2 className="text-4xl font-bold mb-12">
          Découvrez ce qu'ils disent à propos de{' '}
          <span className="text-green-600">EcoVibe</span>
        </h2>

        {/* Grille des cartes */}
        <div className="grid grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-lg shadow-lg bg-white text-gray-700 transition-all duration-300 transform hover:bg-green-100 hover:scale-105"
            >
              {/* Image et infos utilisateur */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm">{testimonial.position}</p>
                </div>
              </div>
              {/* Texte du témoignage */}
              <p className="italic">{testimonial.text}</p>
              {/* Étoiles de notation */}
              <div className="mt-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
