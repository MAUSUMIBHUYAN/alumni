import React, { useState } from 'react';
import axios from 'axios';
import { FaSave, FaArrowLeft } from 'react-icons/fa';

export default function UpdateForm({ user, onUpdate }) {
  const [form, setForm] = useState({
    jobTitle: user.jobTitle || '',
    company: user.company || '',
    location: user.location || ''
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:5000/user/update", form, { withCredentials: true })
      .then(res => {
        alert("Details updated successfully ✅");
        if (onUpdate) onUpdate(res.data);
      })
      .catch(err => {
        console.error("Update failed:", err);
        alert("Update failed ❌");
      });
  };

  return (
    <div className="update-form-container">
      <form className="update-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={form.jobTitle}
            onChange={handleChange}
            placeholder="Enter your job title"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Enter your company name"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Enter your location"
            className="form-input"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            <FaSave className="button-icon" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}