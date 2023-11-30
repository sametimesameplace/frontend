import React from "react";

import { useNavigate } from "react-router-dom";

import "./Profile.css"; // Import the CSS file for styling
import backgroundImage2 from "../../images/image44.png";
//import { Navbar } from "./Dashboard";: todo: wrapp "logged in pages" and set navbar+ footer
//import { Footer } from "./Dashboard";

export function ProfilePage() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/Dashboard");
  };
  return (
    <div className="profile-page-container">

      <div className="profile-page">
        <div className="profilecontent">
          <button className="back-dashboard-btn" onClick={handleBackClick}>
            Back to Dashboard
          </button>
          <div className="profile-container">
            <div className="profile-header">
              <h1>User Profile</h1>
            </div>
            <div className="profile-details">
              <div className="profile-info">
                <h2>Personal Information</h2>
                {/* Example user information, replace with dynamic data */}
                <p>
                  <strong>Name:</strong> Max Mustermann
                </p>
                <p>
                  <strong>Email:</strong> max@example.com
                </p>
                <p>
                  <strong>Location:</strong> Berlin, Germany
                </p>
                {/* Add more personal details here */}
              </div>
              <div className="profile-actions">
                <button className="profile-edit-btn">Edit Profile</button>
                <button className="profile-settings-btn">Settings</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={backgroundImage2} className="Background-image2" alt="logo" />
    </div>
  );
}

