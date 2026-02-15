const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// --- Import the JWT Verification Middleware ---
const { verifyToken } = require('./middleware/authMiddleware');

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors()); 
app.use(express.json());

// --- ROUTES IMPORTS ---
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

// --- ROUTE IMPLEMENTATION ---

// 1. Unprotected Routes (Login, Register)
app.use("/api/auth", authRoutes);

// 2. Protected Routes (Require JWT Verification)
// Apply the verifyToken middleware to all secure routes
app.use("/api/users", verifyToken, userRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("BuildTarck API is running");
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});