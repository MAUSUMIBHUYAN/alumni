const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user');

const app = express();

// ✅ Allow frontend on localhost:5173 (Vite)
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true
}));

// Routes
app.use('/user', userRoutes);

// Start server
app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
