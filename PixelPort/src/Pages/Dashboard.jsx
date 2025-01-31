import React, { useState } from "react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas"; // Import html2canvas
import "../CSS/Dashboard.css";
import PixelPortLogo from '../Img/PixelPort.jpg'; 

function Dashboard() {
  const [coverImage, setCoverImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [headline, setHeadline] = useState("");
  const [subheadline, setSubheadline] = useState("");
  const [skills, setSkills] = useState([{ name: "", id: 1 }]); // Initial skill
  const [projects, setProjects] = useState([]);
  const [isPreviewMode, setIsPreviewMode] = useState(false); // Track whether preview mode is on

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleHeadlineChange = (event) => setHeadline(event.target.value);
  const handleSubheadlineChange = (event) => setSubheadline(event.target.value);

  const handleSkillsChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index].name = event.target.value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => setSkills([...skills, { name: "", id: skills.length + 1 }]);

  const handleProjectNameChange = (index, event) => {
    const newProjects = [...projects];
    newProjects[index].name = event.target.value;
    setProjects(newProjects);
  };

  const handleProjectDescriptionChange = (index, event) => {
    const newProjects = [...projects];
    newProjects[index].description = event.target.value;
    setProjects(newProjects);
  };

  const handleAddProject = () => {
    setProjects([...projects, { name: "", description: "", files: [] }]);
  };

  // Function to capture and download the Dashboard as an image
  const downloadPortfolioImage = () => {
    const dashboardElement = document.getElementById("dashboard-content"); // Select the main container

    html2canvas(dashboardElement, { useCORS: true }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "Portfolio.png";
      link.click();
    });
  };

  return (
    <div className="Dash-container">
      <header>
        <div className="logo">
          <img src={PixelPortLogo} alt="PixelPort Logo" />  
          <h3>PixelPort</h3>
        </div>
        <div className="button-actions">
          <button className="Download" onClick={downloadPortfolioImage}>Download Portfolio</button>
          <button className="Preview" onClick={() => setIsPreviewMode(!isPreviewMode)}>
            {isPreviewMode ? 'Edit' : 'Preview'}
          </button>
          <Link to="/setting">
            <button className="Setting">Setting</button>
          </Link>
        </div>
      </header>

      <main id="dashboard-content"> {/* This is the section we capture */}
        <div className="cover-section">
          {coverImage ? <img src={coverImage} alt="Cover" /> : <div className="default-cover"></div>}
          <div className="cover-overlay">
            <div className="profile-container">
              <div className="profile-image">
                {profileImage ? <img src={profileImage} alt="Profile" /> : <div className="profile-image-placeholder"></div>}
              </div>
              {!isPreviewMode && (
                <button className="edit-profile-btn" onClick={() => document.getElementById("profileInput").click()}>
                  Edit Profile
                </button>
              )}
              <input type="file" id="profileInput" accept="image/*" onChange={handleProfileImageChange} style={{ display: "none" }} />
            </div>
            <div className="user-info">
              {isPreviewMode ? (
                <>
                  <h2>{headline}</h2>
                  <p>{subheadline}</p>
                </>
              ) : (
                <>
                  <input type="text" placeholder="Enter headline" value={headline} onChange={handleHeadlineChange} />
                  <input type="text" placeholder="Enter subheadline" value={subheadline} onChange={handleSubheadlineChange} />
                </>
              )}
            </div>
            {!isPreviewMode && (
              <button className="edit-cover-btn" onClick={() => document.getElementById("coverInput").click()}>
                Edit Cover
              </button>
            )}
            <input type="file" id="coverInput" accept="image/*" onChange={handleCoverImageChange} style={{ display: "none" }} />
          </div>
        </div>

        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-inputs">
            {skills.map((skill, index) => (
              <div className="skills-column" key={skill.id}>
                <label htmlFor={`skill-${index}`}>{`Skill ${index + 1}`}</label>
                {isPreviewMode ? (
                  <p>{skill.name}</p> // Display skill name in preview mode
                ) : (
                  <input 
                    type="text" 
                    id={`skill-${index}`} 
                    placeholder={`Enter Skill ${index + 1}`} 
                    value={skill.name} 
                    onChange={(e) => handleSkillsChange(index, e)} 
                  />
                )}
              </div>
            ))}
          </div>
          {!isPreviewMode && <button onClick={handleAddSkill} className="add-skill-btn">Add Skill</button>}
        </div>

        <div className="projects-section">
          <h3>Projects</h3>
          {!isPreviewMode && <button onClick={handleAddProject} className="add-project-btn">Add Project</button>}
          <div className="projects-list">
            {projects.length > 0 ? (
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <div key={index} className="project-item">
                    <label htmlFor={`project-name-${index}`}>{`Project ${index + 1}`}</label>
                    {isPreviewMode ? (
                      <>
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                      </>
                    ) : (
                      <>
                        <input 
                          type="text" 
                          id={`project-name-${index}`} 
                          placeholder={`Enter Project ${index + 1} Name`} 
                          value={project.name} 
                          onChange={(e) => handleProjectNameChange(index, e)} 
                        />
                        <textarea 
                          placeholder={`Enter Project ${index + 1} Description`} 
                          value={project.description} 
                          onChange={(e) => handleProjectDescriptionChange(index, e)} 
                        />
                      </>
                    )}
                  </div>
                ))}
              </div>
            ) : <p>No projects added yet.</p>}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
