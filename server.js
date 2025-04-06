const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());

// Data storage
let works = [];
let isDataLoaded = false;

// Function to load CSV data
function loadWorksData() {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream("Nicolas_Cage_Works.csv")
      .pipe(csv())
      .on("data", (row) => results.push(row))
      .on("end", () => {
        works = results;
        isDataLoaded = true;
        console.log(`✅ Successfully loaded ${works.length} works.`);
        resolve();
      })
      .on("error", (err) => {
        console.error("❌ Error reading CSV:", err);
        reject(err);
      });
  });
}

// Load data when server starts
loadWorksData().catch((err) => {
  console.error("Failed to load initial data:", err);
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    dataLoaded: isDataLoaded,
    worksCount: works.length,
  });
});

// Main endpoint
app.get("/api/nicolas-cage", (req, res) => {
  if (!isDataLoaded) {
    return res.status(503).json({
      error: "Service Unavailable",
      message: "Data is still loading. Please try again shortly.",
    });
  }
  res.json(works);
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

// Handle process termination
process.on("SIGINT", () => {
  console.log("\n🔴 Server shutting down...");
  process.exit(0);
});
