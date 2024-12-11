import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AddProject = () => {
  const [formData, setFormData] = useState({
    expert_id: '',
    user_id: '',
    type: '',
    location: '',
    details: '',
    status: '',
    image: null,
  });

  const [users, setUsers] = useState([]); // Store all users
  const [expert, setExpert] = useState(null);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'danger'
  const [formVisible, setFormVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // For loading state

  const { expertId } = useParams();

  const fetchExpert = async (expertId) => {
    setIsLoading(true);
    try {
      console.log('Fetching expert data...');
      const response = await axios.get(
        `http://127.0.0.1:8000/api/admin/experts/${expertId}`
      );
      console.log('Expert data fetched:', response.data);

      if (response.data.expert) {
        setExpert(response.data.expert);
        setFormData((prevData) => ({
          ...prevData,
          expert_id: response.data.expert.id,
        }));
      }
    } catch (error) {
      console.error('Error fetching expert data:', error.response || error);
      setMessage('Error fetching expert data. Check the network request.');
      setMessageType('danger');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUsers = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/getAllUsers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
      console.log('Users fetched:', response.data);
    } catch (error) {
      console.error('Error fetching users:', error.response || error);
      setMessage('Failed to fetch users. Check your token or API endpoint.');
      setMessageType('danger');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(`Updated formData: ${name} = ${value}`);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setFormData({ ...formData, image: file });
      console.log('Image selected:', file.name);
    } else {
      setMessage('Invalid file type. Please upload a valid image.');
      setMessageType('danger');
      console.warn('Invalid file type:', file?.type);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Preparing formData for submission...');
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('expert_id', formData.expert_id);
    formDataToSubmit.append('user_id', formData.user_id);
    formDataToSubmit.append('type', formData.type);
    formDataToSubmit.append('location', formData.location);
    formDataToSubmit.append('details', formData.details);
    formDataToSubmit.append('status', formData.status);

    if (formData.image) {
      formDataToSubmit.append('image', formData.image);
    }

    console.log([...formDataToSubmit.entries()]);

    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('You are not authorized. Please log in.');
      setMessageType('danger');
      console.error('Token missing from localStorage.');
      return;
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/project',
        formDataToSubmit,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Response Data:', response.data);
      setMessage('Project successfully added!');
      setMessageType('success');
    } catch (error) {
      console.error('Error submitting project:', error.response || error);
      setMessage(
        error.response?.data?.message || 'Error occurred while adding the project.'
      );
      setMessageType('danger');
    }
  };

  useEffect(() => {
    console.log('Component mounted. Fetching expert and users data...');
    fetchExpert(expertId);
    fetchUsers();
  }, [expertId]);

  return (
    <div className="uk-container uk-margin-top">
      {isLoading && <div>Loading...</div>}

      {!formVisible && !isLoading && (
        <button
          className="uk-button uk-button-primary"
          onClick={() => setFormVisible(true)}
        >
          Add Project
        </button>
      )}

      {formVisible && expert && !isLoading && (
        <form
          className="uk-form-stacked uk-margin-top uk-card uk-card-default uk-card-body uk-box-shadow-medium"
          onSubmit={handleSubmit}
        >
          <h3 className="uk-card-title">Ajouter un projet</h3>
          <div className="uk-margin">
            <label className="uk-form-label">Choisie un client</label>
            <select
              className="uk-select"
              name="user_id"
              value={formData.user_id}
              onChange={handleInputChange}
              required
            >
              <option value="">Choisie un client</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} (ID: {user.id})
                </option>
              ))}
            </select>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label">Nom d'Expert</label>
            <input
              className="uk-input"
              type="text"
              value={expert.NometPrenom}
              disabled
            />
          </div>
          <div className="uk-margin">
            <label className="uk-form-label">Type</label>
            <select
              className="uk-select"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Choisie un type
              </option>
              <option value="solaire">Solaire</option>
              <option value="éolien">Éolien</option>
              <option value="hydro">Hydro</option>
            </select>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label">Location</label>
            <input
              className="uk-input"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="uk-margin">
            <label className="uk-form-label">Details</label>
            <textarea
              className="uk-textarea"
              name="details"
              value={formData.details}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label">Status</label>
            <select
              className="uk-select"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Choisie un status
              </option>
              <option value="en cours">En cours</option>
              <option value="terminé">Terminé</option>
            </select>
          </div>
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
          <button className="uk-button uk-button-primary" type="submit">
            Submit
          </button>
        </form>
      )}

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

export default AddProject;
