const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
