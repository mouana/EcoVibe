import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const ClientReviews = () => {
    const [review, setReview] = useState('');

    const handleReviewChange = (e) => {
      setReview(e.target.value);
    };
  const reviews = [
    { 
      title: 'Great Experience', 
      body: 'Had an amazing time!', 
      reviewer: 'Mona Souabni', 
      date: '2024-09-20',
      rating: 5  
    },
    { 
      title: 'Good Service', 
      body: 'The service was good, but room for improvement.', 
      reviewer: 'Sara Markhi', 
      date: '2024-09-18',
      rating: 4
    },
    { 
      title: 'Average Stay', 
      body: 'It was okay, nothing special.', 
      reviewer: 'Salma Azamara', 
      date: '2024-09-15',
      rating: 3
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-8">Les avis de nos clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg uk-box-shadow-medium">
            {/* Stars */}
            <div className="flex mb-3 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon 
                  key={i} 
                  icon={i < review.rating ? solidStar : regularStar} 
                  className="mr-1" 
                />
              ))}
            </div>
            {/* Review Content */}
            <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
            <p className="text-gray-600 mb-4">{review.body}</p>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/40" alt="Reviewer" className="rounded-full w-10 h-10 mr-3" />
              <div>
                <p className="text-gray-700 font-bold">{review.reviewer}</p>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section: Your Review */}
      <div className="bg-white p-6 rounded-lg shadow-lg uk-box-shadow-medium text-center max-w-lg mx-auto">
        <h3 className="text-2xl font-semibold mb-3">Votre Avis</h3>
        {/* Static Stars Input */}
        <div className="flex justify-center mb-3 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={solidStar} className="mr-1 cursor-pointer" />
          ))}
        </div>
        <form action="">
        <label htmlFor="review" className="block text-gray-700 mb-2 font-semibold">
        Votre Avis:
      </label>
      <textarea
        id="review"
        rows="4"
        value={review}
        onChange={handleReviewChange}
        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 text-gray-600"
        placeholder="Écrivez votre avis ici..."
      />
        <button className="bg-blue-500 text-white px-5 py-2 rounded-md font-bold hover:bg-blue-600">
          Poster
        </button>
        </form>
      </div>
    </div>
  );
};

export default ClientReviews;
