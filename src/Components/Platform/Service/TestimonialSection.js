import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials from the backend
    axios.get('http://127.0.0.1:8000/api/testimonials')
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        {/* Title of the section */}
        <h2 className="text-4xl font-bold mb-12">
          Découvrez ce qu'ils disent à propos de{' '}
          <span className="text-green-600">EcoVibe</span>
        </h2>

        {/* Grid of testimonials */}
        <div className="grid grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-lg shadow-lg bg-white text-gray-700 transition-all duration-300 transform hover:!bg-green-100 hover:scale-105"
            >
              {/* Image and user info */}
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
              {/* Testimonial text */}
              <p className="italic">{testimonial.text}</p>
              {/* Rating stars */}
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
