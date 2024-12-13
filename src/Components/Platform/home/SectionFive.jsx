import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const ClientReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState('');
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  // Fetch reviews on component mount
  useEffect(() => {
    setLoading(true);
    axios.get('http://127.0.0.1:8000/api/reviews')
      .then(response => {
        setReviews(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching reviews.');
        setLoading(false);
        console.error('Error fetching reviews:', error);
      });
  }, []);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !review || rating === 0) {
      setSubmitError('All fields are required. Please provide a title, a review, and a rating.');
      return;
    }

    const newReview = {
      title,
      body: review,
      reviewer: 'Anonymous',  // Replace with dynamic user info if available
      rating,
      date: new Date().toISOString().split('T')[0],
    };

    setLoading(true);
    setSubmitError(null); // Clear previous submit error
    // Ensure to send the authentication token if necessary
    const token = localStorage.getItem('token'); // Assumes token is stored in local storage

    axios.post('http://127.0.0.1:8000/api/reviews', newReview, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setReviews([...reviews, response.data]);
        setReview('');
        setTitle('');
        setRating(0);
        setLoading(false);
      })
      .catch(error => {
        setSubmitError('Error submitting review. Please try again later.');
        setLoading(false);
        console.error('Error submitting review:', error);
      });
  };

  return (
    // <div className="container mx-auto p-6">
    //   <h2 className="text-2xl font-bold mb-8">Les avis de nos clients</h2>

    //   {/* Loading Spinner */}
    //   {loading && <div className="text-center">Chargement...</div>}

    //   {/* Error Message for fetching reviews */}
    //   {error && <div className="text-red-500 text-center mb-4">{error}</div>}

    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    //     {reviews.map((review, index) => (
    //       <div key={index} className="bg-white p-6 rounded-lg shadow-lg uk-box-shadow-medium">
    //         {/* Stars */}
    //         <div className="flex mb-3 text-yellow-500">
    //           {[...Array(5)].map((_, i) => (
    //             <FontAwesomeIcon
    //               key={i}
    //               icon={i < review.rating ? solidStar : regularStar}
    //               className="mr-1"
    //             />
    //           ))}
    //         </div>
    //         {/* Review Content */}
    //         <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
    //         <p className="text-gray-600 mb-4">{review.body}</p>
    //         <div className="flex items-center">
    //           <img src="https://via.placeholder.com/40" alt="Reviewer" className="rounded-full w-10 h-10 mr-3" />
    //           <div>
    //             <p className="text-gray-700 font-bold">{review.reviewer}</p>
    //             <p className="text-gray-500 text-sm">{review.date}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   {/* Bottom Section: Your Review */}
    //   <div className="bg-white p-6 rounded-lg shadow-lg uk-box-shadow-medium text-center max-w-lg mx-auto">
    //     <h3 className="text-2xl font-semibold mb-3">Votre Avis</h3>
        
    //     {/* Display error for review submission */}
    //     {submitError && <div className="text-red-500 mb-4">{submitError}</div>}
        
    //     {/* Stars Input */}
    //     <div className="flex justify-center mb-3 text-yellow-500">
    //       {[...Array(5)].map((_, i) => (
    //         <FontAwesomeIcon
    //           key={i}
    //           icon={i < rating ? solidStar : regularStar}
    //           className="mr-1 cursor-pointer"
    //           onClick={() => handleRatingChange(i + 1)}
    //         />
    //       ))}
    //     </div>

    //     <form onSubmit={handleSubmitReview}>
    //       <label htmlFor="title" className="block text-gray-700 mb-2 font-semibold">
    //         Titre de l'avis:
    //       </label>
    //       <input
    //         type="text"
    //         id="title"
    //         value={title}
    //         onChange={handleTitleChange}
    //         className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 text-gray-600 mb-3"
    //         placeholder="Entrez le titre de votre avis"
    //       />
    //       <label htmlFor="review" className="block text-gray-700 mb-2 font-semibold">
    //         Votre Avis:
    //       </label>
    //       <textarea
    //         id="review"
    //         rows="4"
    //         value={review}
    //         onChange={handleReviewChange}
    //         className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 text-gray-600"
    //         placeholder="Écrivez votre avis ici..."
    //       />
    //       <button
    //         type="submit"
    //         className="bg-blue-500 text-white px-5 py-2 rounded-md font-bold hover:bg-blue-600 mt-3"
    //         disabled={loading}
    //       >
    //         {loading ? 'Envoi en cours...' : 'Poster'}
    //       </button>
    //     </form>
    //   </div>
    // </div>
 <></> );
};

export default ClientReviews;
