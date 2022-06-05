const express = require("express");
const app = express();
const PORT = 3002;
const noteRoutes = require("./routes/noteRoutes");

// Basic Router
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Express server</h1>");
});

// Base route for notes
app.use("/api/notes", noteRoutes);

// For undefined Route
app.use((req, res) => {
  res.status(404).json({ error: { message: "Not Found!" } });
});

// Bind a Connection
app.listen(PORT, () => {
  console.log(`Express server listening at ${PORT}`);
});
