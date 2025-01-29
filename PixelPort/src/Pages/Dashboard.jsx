import React, { useState } from 'react';
import '../CSS/Dashboard.css'

function PortfolioPage() {
  const [coverImage, setCoverImage] = useState(null);
  const [subheadline, setSubheadline] = useState('');

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImage(file);
  };

  const handleSubheadlineChange = (event) => {
    setSubheadline(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission and upload cover image here
    console.log('Cover Image:', coverImage);
    console.log('Subheadline:', subheadline);
  };

  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src="authory-logo.svg" alt="Authory Logo" />
        </div>
        <div className="header-right">
          <ul className="nav">
            <li>Home</li>
            <li>Create page</li>
          </ul>
          <div className="header-actions">
            <button className="header-action">Header Layout</button>
            <button className="header-action">Content Layout</button>
            <button className="header-action">Settings</button>
            <button className="header-action">Preview</button>
            <button className="publish-btn">Publish</button>
          </div>
        </div>
      </header>

      <main>
        <div className="cover-section">
          {coverImage ? (
            <img src={URL.createObjectURL(coverImage)} alt="Cover Image" />
          ) : (
            <div className="default-cover">
              {/* Add default cover image here */}
            </div>
          )}
          <div className="cover-overlay">
            <h2>Guru Vel</h2>
            <input
              type="text"
              placeholder="Enter subheadline"
              value={subheadline}
              onChange={handleSubheadlineChange}
            />
            <button onClick={() => document.getElementById('coverInput').click()}>
              Edit Cover
            </button>
            <input
              type="file"
              id="coverInput"
              accept="image/*"
              onChange={handleCoverImageChange}
              style={{ display: 'none' }}
            />
          </div>
        </div>

        <div className="content">
          <div className="filters">
            <button className="active">All Content</button>
            <button>Create Collection</button>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="work-samples">
          <h2>Get started by adding your work samples</h2>
          <p>
            Authory will automatically import your online content, or upload it
            straight from your device.
          </p>
          {/* Add components for adding work samples here */}
        </div>
      </main>
    </div>
  );
}

export default PortfolioPage;