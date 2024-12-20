import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import des icônes
const images = [
  {
    src: `${process.env.PUBLIC_URL}/service/Image____1.jpg`,
    alt: 'Image solaire 1',
  },
  {
    src: `${process.env.PUBLIC_URL}/service/WhatsApp-Image-2024-11-16-at-20.37.12_a8731360.jpg`,
    alt: 'Image solaire 2',
  },
  {
    src: `${process.env.PUBLIC_URL}/service/WhatsApp-Image-2024-11-16-at-20.37.45_b7b0219f.jpg`,
    alt: 'Image solaire 3',
  },
  {
    src: `${process.env.PUBLIC_URL}/service/img2.png`,
    alt: 'Image alternative 1',
  },
  {
    src: `${process.env.PUBLIC_URL}/service/img4.jpg`,
    alt: 'Image alternative 2',
  },
  {
    src: `${process.env.PUBLIC_URL}/service/img1.png`,
    alt: 'Image alternative 3',
  },
  {
    src: `${process.env.PUBLIC_URL}/service/WhatsApp-Image-2024-11-17-at-19.00.00_f12a1edb.jpg`,
    alt: 'Image alternative 4',
  },
  {
    src: `${process.env.PUBLIC_URL}/service/WhatsApp-Image-2024-11-16-at-20.37.12_a8731360.jpg`,
    alt: 'Image alternative 5',
  },
];


const GallerySection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="w-full mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Notre <span className="text-green-600">Galerie</span>
        </h2>

        {/* Conteneur Swiper */}
        <div className="relative">
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={30}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.custom-next', // Lier les boutons
              prevEl: '.custom-prev',
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="h-[400px] flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover h-full w-full rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Boutons personnalisés */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 custom-prev cursor-pointer bg-white p-2 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
            <FaChevronLeft className="text-xl text-green-600 hover:text-white" />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 custom-next cursor-pointer bg-white p-2 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
            <FaChevronRight className="text-xl text-green-600 hover:text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
