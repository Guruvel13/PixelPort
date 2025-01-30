import React, { useState } from 'react';
import '../CSS/Setting.css';
import PixelPortLogo from '../Img/PixelPort.jpg';

function SettingsPage() {
  const [name, setName] = useState('Guru Vel');
  const [email, setEmail] = useState('guru@gamil.com');
  const [picture, setPicture] = useState(null);
  const [editingName, setEditingName] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleNameEditing = () => {
    setEditingName(!editingName);
  };

  const toggleEmailEditing = () => {
    setEditingEmail(!editingEmail);
  };

  const saveChanges = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    setEditingName(false);
    setEditingEmail(false);
  };

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
          <div className="info-label">Profile Picture</div>
          <div className="info-value">
            <div className="picture-preview">
              {picture ? (
                <img src={picture} alt="Profile" />
              ) : (
                <div className="picture-placeholder">No Image</div>
              )}
            </div>
            <input
              type="file"
              id="pictureInput"
              accept="image/*"
              onChange={handlePictureChange}
              style={{ display: 'none' }}
            />
            <button onClick={() => document.getElementById('pictureInput').click()}>
              Change Picture
            </button>
          </div>
        </div>

        <div className="info-section">
          <div className="info-label">Name</div>
          <div className="info-value">
            {editingName ? (
              <input type="text" value={name} onChange={handleNameChange} />
            ) : (
              <span>{name}</span>
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
