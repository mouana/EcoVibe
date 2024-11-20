import React from 'react';

const images = [
  {
    src: 'WhatsApp Image 2024-11-16 at 20.37.11_f3699c6a.jpg', // Première image à gauche
    alt: 'Image solaire 1',
    gridClass: 'col-span-1',
  },
  {
    src: 'WhatsApp Image 2024-11-16 at 20.37.12_a8731360.jpg', // Image au centre
    alt: 'Image solaire 2',
    gridClass: 'col-span-1',
  },
  {
    src: 'WhatsApp Image 2024-11-16 at 20.37.45_b7b0219f.jpg', // Image à droite
    alt: 'Image solaire 3',
    gridClass: 'col-span-1',
  },
];

const GallerySection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-screen-lg">
        {/* Titre de la section */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Notre <span className="text-green-600">Galerie</span>
        </h2>

        {/* Grille des images */}
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg ${image.gridClass}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
