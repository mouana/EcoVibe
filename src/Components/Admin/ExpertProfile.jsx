import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpertProfile = () => {
    const [expert, setExpert] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        nom_prenom: '',
        specialty: '',
        biography: '',
        phone: '',
        email: '',
        image: null,
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchExpert = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/profile`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const fetchedExpert = response.data.expert;
                setExpert(fetchedExpert);
                setFormData({
                    nom_prenom: fetchedExpert.nom_prenom,
                    specialty: fetchedExpert.specialty,
                    biography: fetchedExpert.biography,
                    phone: fetchedExpert.phone,
                    email: fetchedExpert.email,
                    image: null,
                });
            } catch (error) {
                console.error('Failed to fetch expert data:', error);
            }
        };

        fetchExpert();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('nom_prenom', formData.nom_prenom);
            formDataToSend.append('specialty', formData.specialty);
            formDataToSend.append('biography', formData.biography);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('email', formData.email);
            if (formData.image) {
                formDataToSend.append('image', formData.image); 
            }
    
            const response = await axios.put(
                `http://127.0.0.1:8000/api/experts/${expert.id}`,
                formDataToSend,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
    
            alert(response.data.message);
            setExpert(response.data.expert);
            setIsEditing(false);
        } catch (error) {
            console.error('Error:', error.response?.data || error.message);
            alert('Failed to update profile.');
        } finally {
            setLoading(false);
        }
    };
    
    if (!expert) {
        return <div className="uk-text-center uk-margin-large">Loading...</div>;
    }

    return (
        <div className="uk-container uk-margin-large-top">
            {isEditing ? (
                <form
                    onSubmit={handleSubmit}
                    className="uk-form-stacked uk-card uk-card-default uk-card-body uk-width-1-2@m uk-align-center"
                >
                    <h3 className="uk-card-title uk-text-center">Edit Profile</h3>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="nom_prenom">Name</label>
                        <input
                            id="nom_prenom"
                            type="text"
                            name="nom_prenom"
                            className="uk-input"
                            value={formData.nom_prenom}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="specialty">Specialty</label>
                        <input
                            id="specialty"
                            type="text"
                            name="specialty"
                            className="uk-input"
                            value={formData.specialty}
                            onChange={handleChange}
                            placeholder="Specialty"
                        />
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="biography">Biography</label>
                        <textarea
                            id="biography"
                            name="biography"
                            className="uk-textarea"
                            value={formData.biography}
                            onChange={handleChange}
                            placeholder="Biography"
                        ></textarea>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            type="text"
                            name="phone"
                            className="uk-input"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                        />
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="uk-input"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="image">Profile Image</label>
                        <input
                            id="image"
                            type="file"
                            name="image"
                            className="uk-input"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="uk-flex uk-flex-between">
                        <button type="submit" className="uk-button uk-button-primary">Save</button>
                        <button
                            type="button"
                            className="uk-button uk-button-default"
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-align-center">
                    <h3 className="uk-card-title">{expert.nom_prenom}</h3>
                    {expert.image && (
                        <img
                            className="uk-margin-top uk-border-circle"
                            src={`http://127.0.0.1:8000/storage/${expert.image}`}
                            alt="Expert"
                            style={{ width: '150px', height: '150px' }}
                        />
                    )}
                    <ul className="uk-list uk-list-striped">
                        <li><strong>Specialty:</strong> {expert.specialty}</li>
                        <li><strong>Biography:</strong> {expert.biography}</li>
                        <li><strong>Phone:</strong> {expert.phone}</li>
                        <li><strong>Email:</strong> {expert.email}</li>
                    </ul>
                    <button
                        className="uk-button uk-button-primary uk-margin-top"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit Profile
                    </button>
                </div>
            )}
        </div>
    );
};

export default ExpertProfile;
