import React, { useState } from 'react';
import '../CSS/Account.css'

function AccountPage() {
  const [name, setName] = useState('Guru Vel');
  const [email, setEmail] = useState('guru@gamil.com');
  const [picture, setPicture] = useState(null); 
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAliasesChange = (event) => {
    setAliases(event.target.value);
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

  return (
    <div className="account-page">
      <aside className="sidebar">
        <div className="account-section">
          <a href="/account">Account</a>
          <a href="/logout">Sign out</a>
        </div>
      </aside>

      <main className="content">
        <h2>General information</h2>

        <div className="info-section">
          <div className="info-label">Profile</div>
          <div className="info-value">
            <div className="picture-preview">
              {picture ? (
                <img src={picture} alt="Profile" />
              ) : (
                <div className="picture-placeholder"></div> // Placeholder if no picture
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
              Change
            </button>
          </div>
        </div>

        <div className="info-section">
          <div className="info-label">Name</div>
          <div className="info-value">
            <input type="text" value={name} onChange={handleNameChange} />
            <button>Edit</button>
          </div>
        </div>


        <div className="info-section">
          <div className="info-label">Email</div>
          <div className="info-value">
            <input type="email" value={email} onChange={handleEmailChange} />
            <button>Edit</button>
          </div>
        </div>

      </main>
    </div>
  );
}

export default AccountPage;