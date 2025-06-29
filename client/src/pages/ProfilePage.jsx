import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaCheckCircle, FaBuilding, FaMapMarkerAlt, FaBriefcase, FaEnvelope, FaIdBadge, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/user/profile", { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(err => console.error("Error fetching profile:", err));
  }, []);

  const handleVerification = () => {
    alert("Verification request sent ✅ (dummy alert)");
  };

  const goToUpdatePage = () => {
    navigate('/update', { state: { user } });
  };

  return user ? (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <FaUserCircle className="avatar-icon" />
        </div>
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-title">{user.jobTitle}</p>
      </div>

      <div className="profile-details">
        <div className="detail-item">
          <FaIdBadge className="detail-icon" />
          <div>
            <h3 className="detail-label">Name</h3>
            <p className="detail-value">{user.name}</p>
          </div>
        </div>

        <div className="detail-item">
          <FaEnvelope className="detail-icon" />
          <div>
            <h3 className="detail-label">Email</h3>
            <p className="detail-value">{user.email}</p>
          </div>
        </div>

        <div className="detail-item">
          <FaBuilding className="detail-icon" />
          <div>
            <h3 className="detail-label">Department</h3>
            <p className="detail-value">{user.department}</p>
          </div>
        </div>
        <div className="detail-item">
          <FaGraduationCap className="detail-icon" />
          <div>
            <h3 className="detail-label">Degree</h3>
            <p className="detail-value">{user.degree}</p>
          </div>
        </div>

        <div className="detail-item">
          <FaCalendarAlt className="detail-icon" />
          <div>
            <h3 className="detail-label">Passout Year</h3>
            <p className="detail-value">{user.passoutYear}</p>
          </div>
        </div>
        <div className="detail-item">
          <FaBriefcase className="detail-icon" />
          <div>
            <h3 className="detail-label">Job Title</h3>
            <p className="detail-value">{user.jobTitle}</p>
          </div>
        </div>

        <div className="detail-item">
          <FaBuilding className="detail-icon" />
          <div>
            <h3 className="detail-label">Company</h3>
            <p className="detail-value">{user.company}</p>
          </div>
        </div>

        <div className="detail-item">
          <FaMapMarkerAlt className="detail-icon" />
          <div>
            <h3 className="detail-label">Location</h3>
            <p className="detail-value">{user.location}</p>
          </div>
        </div>
      </div>

      <div className="profile-actions">
        <button
          onClick={handleVerification}
          className="action-button verify-button"
        >
          <FaCheckCircle className="button-icon" />
          Request Verification
        </button>
        <button
          onClick={goToUpdatePage}
          className="action-button update-button"
        >
          <FaEdit className="button-icon" />
          Update Details
        </button>
      </div>
    </div>
  ) : (
    <div className="loading-container">
      <p className="loading-text">Loading profile...</p>
    </div>
  );
}