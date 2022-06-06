const express = require("express");
const app = express();
var cors = require("cors");
const PORT = 3002;
require ("./helpers/dbCon");
const {authUser} = require("./middleware/authentication");
const noteRoutes = require("./routes/noteRoutes");
const userRoutes = require("./routes/userRoutes");

// common middleware
app.use(express.json());
app.use(cors());

// Basic Router
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Express server</h1>");
});

// Base route for notes
app.use("/api/notes", authUser, noteRoutes);

// Base route for users
app.use("/api/users", userRoutes);

// For undefined Route
app.use((req, res) => {
  res.status(404).json({ error: { message: "Not Found!" } });
});

// Bind a Connection
app.listen(PORT, () => {
  console.log(`Express server listening at ${PORT}`);
});
