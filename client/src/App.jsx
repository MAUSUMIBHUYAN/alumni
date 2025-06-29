import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import UpdateFormPage from './pages/UpdateFormPage';
import AlumniFilterPage from './pages/AlumniFilterPage'; // 👈 Add this import
import './index.css';

function App() {
  return (
    <div className="app-container">
      <h1>Alumni Portal</h1>

      {/* Navigation */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/alumni">Filter Alumni</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/update" element={<UpdateFormPage />} />
        <Route path="/alumni" element={<AlumniFilterPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
