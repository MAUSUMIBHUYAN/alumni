const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// Dummy user session
router.use((req, res, next) => {
  req.session.userId = 1; // assume logged in user ID = 1
  next();
});

// Fetch user profile
router.get('/profile', (req, res) => {
  db.query('SELECT * FROM users WHERE id = ?', [req.session.userId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result[0]);
  });
});

// Update details (including degree and passoutYear)
router.put('/update', (req, res) => {
  const { jobTitle, company, location, degree, passoutYear } = req.body;

  db.query(
    'UPDATE users SET jobTitle = ?, company = ?, location = ?, degree = ?, passoutYear = ? WHERE id = ?',
    [jobTitle, company, location, degree, passoutYear, req.session.userId],
    (err) => {
      if (err) return res.status(500).send(err);
      
      db.query('SELECT * FROM users WHERE id = ?', [req.session.userId], (err2, result) => {
        if (err2) return res.status(500).send(err2);
        res.json(result[0]);
      });
    }
  );
});
// Filter alumni
router.get('/filter', (req, res) => {
  const { department, degree, passoutYear } = req.query;

  let baseQuery = 'SELECT * FROM users WHERE 1=1';
  const params = [];

  if (department) {
    baseQuery += ' AND department = ?';
    params.push(department);
  }
  if (degree) {
    baseQuery += ' AND degree = ?';
    params.push(degree);
  }
  if (passoutYear) {
    baseQuery += ' AND passoutYear = ?';
    params.push(passoutYear);
  }

  db.query(baseQuery, params, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);  
  });
});


module.exports = router;
