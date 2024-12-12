import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed El Idrissi',
    position: 'Directeur de la mobilité régionale',
    text: '"EcoVibe a véritablement transformé la façon dont nous abordons la gestion de l\'environnement. Leur approche innovante et leurs solutions écologiques ont permis de réduire considérablement notre empreinte carbone. Nous avons vu des résultats tangibles en termes de durabilité et de rentabilité. Un partenaire indispensable pour notre avenir vert."',
    rating: 5,
    image: '/service/ex5.jpeg', // L'image de l'utilisateur 1
  },
  {
    id: 2,
    name: 'Khalid Amrani',
    position: 'Responsable des appareils électroniques',
    text: '"Travailler avec EcoVibe a été une expérience très positive. Leur équipe est extrêmement professionnelle, et leurs solutions ont permis à notre entreprise d\'adopter des pratiques plus écologiques tout en maintenant notre efficacité. Nous sommes fiers de soutenir une entreprise qui met l\'accent sur l\'environnement et le développement durable."',
    rating: 5,
    image: '/service/ex1.jpeg', // L'image de l'utilisateur 2
  },
  {
    id: 3,
    name: 'Sara Markhi',
    position: 'Superviseur des relations humaines',
    text: '"J\'ai eu le plaisir de travailler avec EcoVibe et de voir de première main l\'impact positif de leurs solutions. Leur capacité à allier performance et respect de l\'environnement est impressionnante. En tant qu\'entreprise, nous avons pu intégrer ces solutions de manière fluide et efficace. Je recommande vivement leurs services à toute entreprise soucieuse de son empreinte écologique."',
    rating: 5,
    image: '/service/sara.png', // L'image de l'utilisateur 3
  },
  {
    id: 4,
    name: 'Rachid Benali',
    position: 'Directeur de la stratégie',
    text: '"EcoVibe a joué un rôle essentiel dans l\'amélioration de notre approche environnementale. Leur expertise et leur engagement à fournir des solutions écologiques et durables sont inégalés. Grâce à leur accompagnement, nous avons pu réduire notre consommation d\'énergie et adopter des pratiques plus respectueuses de l\'environnement. C\'est un plaisir de collaborer avec une équipe aussi dévouée et compétente."',
    rating: 5,
    image: '/service/ex3.jpeg', // L'image de l'utilisateur 4
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
              className="p-6 rounded-lg shadow-lg bg-white text-gray-700 transition-all duration-300 transform hover:!bg-green-100 hover:scale-105"
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
