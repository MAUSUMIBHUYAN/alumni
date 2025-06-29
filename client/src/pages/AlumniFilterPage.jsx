import React, { useState } from 'react';
import axios from 'axios';

export default function AlumniFilterPage() {
  const [filters, setFilters] = useState({
    department: '',
    degree: '',
    passoutYear: ''
  });

  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = async () => {
    const params = new URLSearchParams();
    if (filters.department) params.append('department', filters.department);
    if (filters.degree) params.append('degree', filters.degree);
    if (filters.passoutYear) params.append('passoutYear', filters.passoutYear);

    try {
      const res = await axios.get(`http://localhost:5000/user/filter?${params.toString()}`, {
        withCredentials: true
      });
      setResults(res.data);
    } catch (err) {
      console.error("Error fetching filtered alumni", err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🎓 Filter Alumni</h2>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <select name="department" value={filters.department} onChange={handleChange}>
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="EE">EE</option>
          <option value="ME">ME</option>
        </select>

        <select name="degree" value={filters.degree} onChange={handleChange}>
          <option value="">Select Degree</option>
          <option value="BTech">BTech</option>
          <option value="MTech">MTech</option>
        </select>

        <select name="passoutYear" value={filters.passoutYear} onChange={handleChange}>
          <option value="">Select Passout Year</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>

        <button onClick={handleSearch}>Search</button>
      </div>

      {results.length > 0 ? (
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Degree</th>
              <th>Passout Year</th>
              <th>Job Title</th>
              <th>Company</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {results.map((alumni) => (
              <tr key={alumni.id}>
                <td>{alumni.name}</td>
                <td>{alumni.email}</td>
                <td>{alumni.department}</td>
                <td>{alumni.degree}</td>
                <td>{alumni.passoutYear}</td>
                <td>{alumni.jobTitle}</td>
                <td>{alumni.company}</td>
                <td>{alumni.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No alumni found. Try adjusting filters.</p>
      )}
    </div>
  );
}
