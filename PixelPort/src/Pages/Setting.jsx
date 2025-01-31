import React, { useState, useEffect } from 'react';
import '../CSS/Setting.css';
import PixelPortLogo from '../Img/PixelPort.jpg';
import axios from 'axios';

function SettingsPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [editingName, setEditingName] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch user details from the API
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Using Token:', token); // Debug token

        if (!token) {
          console.error('No token found');
          return;
        }

        const response = await axios.get('https://pixelport-2.onrender.com/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('User data:', response.data); // Log the response data

        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setLoading(false);
      } catch (error) {
        // Detailed error handling
        if (error.response) {
          console.error('Error fetching user details:', error.response.data);
        } else {
          console.error('Error fetching user details:', error.message);
        }
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const toggleNameEditing = () => setEditingName(!editingName);
  const toggleEmailEditing = () => setEditingEmail(!editingEmail);

  const saveChanges = async () => {
    try {
      const response = await axios.put(
        'http://localhost:5000/api/user',
        { firstName, lastName, email },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log('User details updated successfully', response.data);
      setEditingName(false);
      setEditingEmail(false);
    } catch (error) {
      console.error('Error saving user details:', error.response || error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="settings-page">
      <header>
        <div className="logo">
          <img src={PixelPortLogo} alt="PixelPort Logo" />
          <h3>PixelPort</h3>
        </div>
      </header>

      <div className="sidebar">
        <div className="settings-section">
          <a href="/dashboard">Back to Dashboard</a>
          <a href="/">Home</a>
          <a href="/logout">Sign out</a>
        </div>
      </div>

      <main className="setting-content">
        <h2>Settings</h2>

        <div className="info-section">
          <div className="info-label">First Name</div>
          <div className="info-value">
            {editingName ? (
              <input type="text" value={firstName} onChange={handleFirstNameChange} />
            ) : (
              <span>{firstName}</span>
            )}
            <button onClick={toggleNameEditing}>
              {editingName ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>

        <div className="info-section">
          <div className="info-label">Last Name</div>
          <div className="info-value">
            {editingName ? (
              <input type="text" value={lastName} onChange={handleLastNameChange} />
            ) : (
              <span>{lastName}</span>
            )}
            <button onClick={toggleNameEditing}>
              {editingName ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>

        <div className="info-section">
          <div className="info-label">Email</div>
          <div className="info-value">
            {editingEmail ? (
              <input type="email" value={email} onChange={handleEmailChange} />
            ) : (
              <span>{email}</span>
            )}
            <button onClick={toggleEmailEditing}>
              {editingEmail ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>

        {(editingName || editingEmail) && (
          <div className="save-changes">
            <button onClick={saveChanges}>Save All Changes</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default SettingsPage;
