import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <h2>User Profile</h2>
      <div className="profile-details">
        <div className="p-detail">
          <span className="p-label">Name:</span>
          <span className="p-value">John Doe</span>
        </div>
        <div className="p-detail">
          <span className="p-label">Age:</span>
          <span className="p-value">25</span>
        </div>
        <div className="p-detail">
          <span className="p-label">Address:</span>
          <span className="p-value">123 Main St, City</span>
        </div>
        <div className="p-detail">
          <span className="p-label">Gender:</span>
          <span className="p-value">Male</span>
        </div>
        <div className="p-detail">
          <span className="p-label">Email:</span>
          <span className="p-value">johndoe@example.com</span>
        </div>
      </div>
      <button className="p-edit-button">Edit Details</button>
    </div>
  );
};

export default Profile;
