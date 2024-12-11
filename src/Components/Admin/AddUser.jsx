import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'uikit/dist/css/uikit.min.css';

const AddUser = () => {
  const { expertId } = useParams(); // Retrieve expertId from the URL
  const [users, setUsers] = useState([]); // All users fetched from the API
  const [selectedUserId, setSelectedUserId] = useState(''); // User ID selected from the dropdown
  const [message, setMessage] = useState(''); // Feedback message
  const [showDropdown, setShowDropdown] = useState(false);
   // Toggle for showing the dropdown

  // Token for authorization
  const token = localStorage.getItem('token');

  // Fetch all users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/getAllUsers', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setMessage('Failed to fetch users.');
      }
    };

    fetchUsers();
  }, [token]);

  // Handle adding the user to the expert
  const handleAddUser = async () => {
    if (!selectedUserId) {
      setMessage('Please select a user.');
      return;
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/expert-user',
        {
          expert_id: expertId,
          user_id: selectedUserId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        setMessage('User successfully added to the expert.');
      } else {
        setMessage(`Failed to add user. Status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error adding user:', error.response || error.message || error);
      if (error.response) {
        setMessage(`Error occurred while adding user: ${error.response.data.message || error.response.statusText}`);
      } else {
        setMessage('Error occurred while adding user.');
      }
    }
  };

 

  return (
    <div style={{ padding: '10px', maxWidth: '500px', marginLeft: '30px', position: 'relative', left: '0px' }}>
      {/* Button to toggle dropdown */}
      <button
        className="uk-button uk-button-primary"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        + Ajouter Utilisateur
      </button>

      {/* Dropdown list */}
      {showDropdown && (
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="userSelect">Select User:</label>
          <select
            id="userSelect"
            className="uk-select"
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
          >
            <option value="">-- Select a User --</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name} (ID: {user.id})
              </option>
            ))}
          </select>

          {/* Button to confirm adding the user */}
          <button
            className="uk-button uk-button-secondary"
            style={{ marginTop: '10px' }}
            onClick={handleAddUser}
          >
            Confirm Add User
          </button>
        </div>
      )}

      {/* Display list of users with remove buttons */}
      

      {/* Feedback message */}
      {message && <p style={{ marginTop: '10px', color: 'green' }}>{message}</p>}
    </div>
  );
};

export default AddUser;
