import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UpdateForm from '../components/UpdateForm';

export default function UpdateFormPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) {
    return (
      <div className="error-container">
        <p>User data not found. Please return to your profile.</p>
        <button onClick={() => navigate('/')} className="back-button">
          <FaArrowLeft className="button-icon" />
          Back to Profile
        </button>
      </div>
    );
  }

  const onUpdate = (updatedUser) => {
    navigate('/', { state: { updatedUser } });
  };

  return (
    <div className="update-page-container">
      <div className="update-page-header">
        <h2>Update Your Profile Details</h2>
        <p className="subtitle">Keep your information current and accurate</p>
      </div>
      <UpdateForm user={user} onUpdate={onUpdate} />
    </div>
  );
}