import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const images = [
  {
    src: 'WhatsApp Image 2024-11-16 at 20.37.11_f3699c6a.jpg',
    alt: 'Image solaire 1',
  },
  {
    src: 'WhatsApp Image 2024-11-16 at 20.37.12_a8731360.jpg',
    alt: 'Image solaire 2',
  },
  {
    src: 'WhatsApp Image 2024-11-16 at 20.37.45_b7b0219f.jpg',
    alt: 'Image solaire 3',
  },
  {
    src: 'WhatsApp Image 2024-11-19 at 23.29.29_2806a5c2.jpg',
    alt: 'Image alternative 1',
  },
  {
    src: 'WhatsApp Image 2024-11-19 at 23.29.29_068e6760.jpg',
    alt: 'Image alternative 2',
  },
  {
    src: 'WhatsApp Image 2024-11-19 at 23.29.21_a83cd0db.jpg',
    alt: 'Image alternative 3',
  },
  {
    src: 'WhatsApp Image 2024-11-17 at 19.00.00_f12a1edb.jpg',
    alt: 'Image alternative 4',
  },
  {
    src: 'WhatsApp Image 2024-11-16 at 20.37.12_a8731360.jpg',
    alt: 'Image alternative 5',
  },
];

const GallerySection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="w-full mx-auto px-4 ">

        <h2 className="text-4xl font-bold text-center mb-8">
          Notre <span className="text-green-600">Galerie</span>
        </h2>

        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
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
          navigation={true}
          className="mySwiper"
          breakpoints={{
            // When the viewport is 640px or larger
            640: {
              slidesPerView: 1,
            },
            // When the viewport is 768px or larger
            768: {
              slidesPerView: 2,
            },
            // When the viewport is 1024px or larger
            1024: {
              slidesPerView: 3,
            },
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
      </div>
    </section>
  );
};

export default GallerySection;
