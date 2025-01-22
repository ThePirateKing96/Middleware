const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Middleware for logging requests
const loggerMiddleware = (req, res, next) => {
  const currentDate = new Date().toISOString();
  console.log(`[${req.method}] ${req.path} - ${currentDate}`);
  next();
};

// Middleware for admin authorization
const adminMiddleware = (req, res, next) => {
  const user = req.query.user;
  if (!user || user !== "admin") {
    res.status(403).send("Access Denied.");
    return;
  }
  console.log("User authorized");
  next();
};

// Apply logger middleware globally
app.use(loggerMiddleware);

// Define routes
app.get("/public", (req, res) => {
  res.status(200).send("This is a public page.");
});

app.get("/admin", adminMiddleware, (req, res) => {
  res.status(200).send("Welcome to the Admin Page!");
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Home Page!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
