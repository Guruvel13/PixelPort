import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Dashboard.css";
import PixelPortLogo from '../Img/PixelPort.jpg'; 

function Dashboard() {
  const [coverImage, setCoverImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [headline, setHeadline] = useState("");
  const [subheadline, setSubheadline] = useState("");
  const [skills, setSkills] = useState([
    { name: "", id: 1 }, // Initial skill
  ]);
  const [projects, setProjects] = useState([]);

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

  const handleHeadlineChange = (event) => {
    setHeadline(event.target.value);
  };

  const handleSubheadlineChange = (event) => {
    setSubheadline(event.target.value);
  };

  const handleSkillsChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index].name = event.target.value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => {
    const newSkill = { name: "", id: skills.length + 1 };
    setSkills((prevSkills) => [...prevSkills, newSkill]);
  };

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
    const newProject = {
      name: "",
      description: "",
      files: [],
    };
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  return (
    <div className="Dash-container">
      <header>
        <div className="logo">
          <img src={PixelPortLogo} alt="PixelPort Logo" />  
          <h3>PixelPort</h3>
        </div>
        <div className="button-actions">
          <Link to="/setting">
            <button className="Setting">Setting</button>
          </Link>
        </div>
      </header>

      <main>
        <div className="cover-section">
          {coverImage ? (
            <img src={coverImage} alt="Cover" />
          ) : (
            <div className="default-cover"></div>
          )}

          <div className="cover-overlay">
            <div className="profile-container">
              <div className="profile-image">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" />
                ) : (
                  <div className="profile-image-placeholder"></div>
                )}
              </div>
              <button
                className="edit-profile-btn"
                onClick={() => document.getElementById("profileInput").click()}
              >
                Edit Profile
              </button>
              <input
                type="file"
                id="profileInput"
                accept="image/*"
                onChange={handleProfileImageChange}
                style={{ display: "none" }}
              />
            </div>
            <div className="user-info">
              <input
                type="text"
                placeholder="Enter headline"
                value={headline}
                onChange={handleHeadlineChange}
              />
              <input
                type="text"
                placeholder="Enter subheadline"
                value={subheadline}
                onChange={handleSubheadlineChange}
              />
            </div>
            <button
              className="edit-cover-btn"
              onClick={() => document.getElementById("coverInput").click()}
            >
              Edit Cover
            </button>
            <input
              type="file"
              id="coverInput"
              accept="image/*"
              onChange={handleCoverImageChange}
              style={{ display: "none" }}
            />
          </div>
        </div>

        {/* Skills Section Below the Cover */}
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-inputs">
            {skills.map((skill, index) => (
              <div className="skills-column" key={skill.id}>
                <label htmlFor={`skill-${index}`}>{`Skill ${index + 1}`}</label>
                <input
                  type="text"
                  id={`skill-${index}`}
                  placeholder={`Enter Skill ${index + 1}`}
                  value={skill.name}
                  onChange={(e) => handleSkillsChange(index, e)}
                />
              </div>
            ))}
          </div>
          <button onClick={handleAddSkill} className="add-skill-btn">
            Add Skill
          </button>
        </div>

        {/* Projects Section Below the Skills */}
        <div className="projects-section">
          <h3>Projects</h3>

          <button onClick={handleAddProject} className="add-project-btn">
            Add Project
          </button>

          <div className="projects-list">
            {projects.length > 0 ? (
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <div key={index} className="project-item">
                    <label htmlFor={`project-name-${index}`}>{`Project ${index + 1}`}</label>
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
                  </div>
                ))}
              </div>
            ) : (
              <p>No projects added yet.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
