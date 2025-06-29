const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user');

const app = express();


const allowedOrigins = [
  "http://localhost:5173",                  // ✅ for local dev
  process.env.CLIENT_URL                    // ✅ for production (Vercel)
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
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
