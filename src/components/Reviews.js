import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";  
import '../styles/Home.css'

const Review = ({ title, body, reviewer, date, rating }) => (
  <div className="review-card">
    <div className="review-stars">
      {Array(rating).fill(<FaStar />)} {/* Icônes d'étoiles remplies */}
      {Array(5 - rating).fill(<FaRegStar />)} {/* Icônes d'étoiles vides */}
    </div>
    <h3 className="review-title">{title}</h3>
    <p className="review-body">{body}</p>
    <div className="review-footer">
      <img src="reviewer-photo.jpg" alt="Reviewer" className="reviewer-photo" />
      <div>
        <p className="reviewer-name">{reviewer}</p>
        <p className="review-date">{date}</p>
      </div>
    </div>
  </div>
);

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { title: "Review title", body: "Review body", reviewer: "Reviewer name", date: "Date", rating: 3 },
    { title: "Review title", body: "Review body", reviewer: "Reviewer name", date: "Date", rating: 4 },
    { title: "Review title", body: "Review body", reviewer: "Reviewer name", date: "Date", rating: 5 }
  ]);

  const [newReview, setNewReview] = useState({ title: "", body: "", rating: 0 });

  const handleSubmit = () => {
    setReviews([...reviews, { ...newReview, reviewer: "Votre Avis", date: new Date().toLocaleDateString() }]);
    setNewReview({ title: "", body: "", rating: 0 });
  };

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Les avis de nos clients</h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>

      <div className="new-review-card">
        <h3>Votre Avis</h3>
        <div className="review-stars">
          {Array(5).fill(null).map((_, index) => (
            <span key={index} onClick={() => setNewReview({ ...newReview, rating: index + 1 })}>
              {index < newReview.rating ? <FaStar /> : <FaRegStar />}
            </span>
          ))}
        </div>
        <textarea
          placeholder="Écrivez votre avis ici..."
          value={newReview.body}
          onChange={(e) => setNewReview({ ...newReview, body: e.target.value })}
        />
        <button onClick={handleSubmit}>Poster</button>
      </div>
    </div>
  );
};

export default Reviews;
