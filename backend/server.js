const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// --- Import the JWT Verification Middleware ---
const { verifyToken } = require('./middleware/authMiddleware');

const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); 
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// --- ROUTES IMPORTS ---
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const messageRoutes = require("./routes/messageRoutes");
const laborRoutes = require("./routes/laborRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const sitesTasksRoutes = require("./routes/sitesTasksRoutes");

// --- ROUTE IMPLEMENTATION ---

// 1. Unprotected Routes (Login, Register)
app.use("/api/auth", authRoutes);

// 2. Protected Routes (Require JWT Verification)
// Apply the verifyToken middleware to all secure routes
app.use("/api/users", verifyToken, userRoutes);
app.use("/api/messages", verifyToken, messageRoutes);
app.use("/api/dashboard", verifyToken, dashboardRoutes);
app.use("/api/labors", verifyToken, laborRoutes); 
app.use("/api/inventory", verifyToken, inventoryRoutes);
app.use("/api/sites", verifyToken, sitesTasksRoutes); 

// Test Route
app.get("/", (req, res) => {
  res.send("BuildTarck API is running");
});

// Port
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;