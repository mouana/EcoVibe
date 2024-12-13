import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function SectionOne() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: "./image2.jpg", alt: "Wind Turbine" },
    { src: "./image3.jpeg", alt: "Wind Farm" },
    { src: "./img1.jpeg", alt: "Hydrogen Energy" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-row w-full bg-emerald-400 text-white h-[30rem]">
      <div className="w-1/2 text-center">
        <h1 className="m-4 leading-[4rem]">
          Bienvenue sur EcoVibe Votre portail vers un avenir énergétique durable
        </h1>
        <p className="text-blue-500 text-wrap text-2xl font-medium leading-[4rem]">
          Bienvenue sur EcoVibe Votre portail vers un avenir énergétique durable
        </p>
        <button className="text-white w-25 h-10 rounded bg-blue-500 font-medium m-3">
          <Link className="text-white text-decoration-none " to ="/service">Découvrez</Link>
        </button>
      </div>
      <div className="w-1/2 flex justify-center items-center space-x-4 overflow-hidden relative m-4">
        {images.map((image, index) => {
          const positionClass =
            index === activeIndex
              ? "translate-x-0 scale-125 z-10"
              : index === (activeIndex + 1) % images.length
              ? "translate-x-full scale-100 z-0"
              : "translate-x-[-100%] scale-100 z-0";
          return (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute w-1/3 h-3/4 rounded transition-all duration-1000 ease-in-out ${positionClass}`}
            />
          );
        })}
      </div>
    </div>
  );
}
