import React, { useState, useEffect } from 'react';

const CreateServiceForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    infographic: '',
    price: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Vérifiez si le token est stocké dans localStorage
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    } else {
      console.log('Pas de token trouvé dans localStorage.');
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!token) {
      setError('Vous devez être connecté pour ajouter un service.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('Service ajouté avec succès.');
        setFormData({ type: '', description: '', infographic: '', price: '' });
        setShowForm(false); 
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erreur lors de l’ajout du service.');
      }
    } catch (err) {
      setError('Une erreur s’est produite. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto my-5">

      {/* Success Message */}
      {successMessage && (
        <div className="uk-alert-success uk-margin-small-bottom" uk-alert="true">
          <p>{successMessage}</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="uk-alert-danger uk-margin-small-bottom" uk-alert="true">
          <p>{error}</p>
        </div>
      )}

      {/* Button to toggle form */}
      {!showForm && (
        <button
          className="uk-button uk-button-primary bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          onClick={() => setShowForm(true)}
        >
          Ajouter un service
        </button>
      )}

      {/* Service Form */}
      {showForm && (
        <form
          className="uk-form-stacked bg-white p-6 rounded shadow-lg mt-5"
          onSubmit={handleSubmit}
        >
          <div className="uk-margin">
          <label className="uk-form-label text-gray-700">Type de service</label>
<select
  className="uk-select border border-gray-300 rounded py-2 px-3 w-full"
  name="type"
  value={formData.type}
  onChange={handleChange}
  required
>
  <option value="">Choisir un type</option>
  <option value="solaire">Solaire</option>
  <option value="éolien">Éolien</option>
  <option value="hydro">Hydro</option>
</select>

          </div>
          <div className="uk-margin">
            <label className="uk-form-label text-gray-700">Description</label>
            <textarea
              className="uk-textarea border border-gray-300 rounded py-2 px-3 w-full"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="uk-margin">
            <label className="uk-form-label text-gray-700">Infographie</label>
            <input
              className="uk-input border border-gray-300 rounded py-2 px-3 w-full"
              type="text"
              name="infographic"
              value={formData.infographic}
              onChange={handleChange}
            />
          </div>
          <div className="uk-margin">
            <label className="uk-form-label text-gray-700">Prix</label>
            <input
              className="uk-input border border-gray-300 rounded py-2 px-3 w-full"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="uk-margin">
            <button
              type="submit"
              className={`uk-button uk-button-primary bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Ajout en cours...' : 'Ajouter'}
            </button>
            <button
              type="button"
              className="uk-button uk-button-secondary bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded ml-3"
              onClick={() => setShowForm(false)}
            >
              Annuler
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateServiceForm;
