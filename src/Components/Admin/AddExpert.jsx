import React, { useState } from 'react';
import axios from 'axios';

const ExpertForm = () => {
  const [formData, setFormData] = useState({
    nom_prenom: '',
    specialty: '',
    biography: '',
    reviews: 0,
    image: null,
    phone: '',
    email: '',
    password: '', 
  });
  const [formVisible, setFormVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); 

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file changes
  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    if (!formData.specialty || !formData.phone || !formData.email || !formData.nom_prenom) {
      setMessage('Please fill in all required fields.');
      setMessageType('danger');
      return;
    }

    // Prepare form data to submit
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('nom_prenom', formData.nom_prenom);
    formDataToSubmit.append('specialty', formData.specialty);
    formDataToSubmit.append('biography', formData.biography);
    formDataToSubmit.append('reviews', formData.reviews);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('password', formData.password);

    if (formData.image) {
      formDataToSubmit.append('image', formData.image);
    }

    try {
      const token = localStorage.getItem('token'); // Ensure the token is valid
      const response = await axios.post(
        'http://127.0.0.1:8000/api/experts',
        formDataToSubmit,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setMessage('Expert successfully added!');
      setMessageType('success');
      setFormVisible(false); // Hide the form after success
    } catch (error) {
      console.log('Error response: ', error.response);
      if (error.response?.data?.errors) {
        const validationErrors = error.response.data.errors;
        const errorMessages = Object.keys(validationErrors)
          .map((field) => `${field}: ${validationErrors[field].join(', ')}`)
          .join(', ');
        setMessage(`Validation Error: ${errorMessages}`);
      } else {
        setMessage(error.response?.data?.message || 'An error occurred.');
      }
      setMessageType('danger');
    }
  };

  return (
    <div className="uk-container uk-margin-top">
      {/* Toggle Form Visibility */}
      {!formVisible && (
        <button
          className="uk-button uk-button-primary"
          onClick={() => setFormVisible(true)}
        >
          Add Expert
        </button>
      )}

      {/* Expert Form */}
      {formVisible && (
        <form
          className="uk-form-stacked uk-margin-top uk-card uk-card-default uk-card-body uk-box-shadow-medium"
          onSubmit={handleSubmit}
        >
          <h3 className="uk-card-title">Add Expert</h3>

          {/* Input Fields */}
          {[{ label: 'Name', name: 'nom_prenom', type: 'text' },
            { label: 'Specialty', name: 'specialty', type: 'text' },
            { label: 'Phone', name: 'phone', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Password', name: 'password', type: 'password' }
          ]
            .map(({ label, name, type }) => (
              <div className="uk-margin" key={name}>
                <label className="uk-form-label">{label}</label>
                <input
                  className="uk-input"
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  required
                />
              </div>
            ))}

          {/* Biography Field */}
          <div className="uk-margin">
            <label className="uk-form-label">Biography</label>
            <textarea
              className="uk-textarea"
              name="biography"
              value={formData.biography}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Reviews */}
          <div className="uk-margin">
            <label className="uk-form-label">Reviews</label>
            <input
              className="uk-input"
              type="number"
              name="reviews"
              value={formData.reviews}
              onChange={handleInputChange}
              min="0"
            />
          </div>

          {/* Image Upload */}
          <div className="uk-margin">
            <label className="uk-form-label">Image</label>
            <input
              className="uk-input"
              type="file"
              name="image"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>

          {/* Submit Button */}
          <button className="uk-button uk-button-primary" type="submit">
            Submit
          </button>
        </form>
      )}

      {/* Message */}
      {message && (
        <div
          className={`uk-alert-${messageType} uk-margin-top`}
          uk-alert="true"
        >
          <a className="uk-alert-close" uk-close="true"></a>
          {message}
        </div>
      )}
    </div>
  );
};

export default ExpertForm;
