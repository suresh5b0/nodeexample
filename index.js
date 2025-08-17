const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./models/user");
const userRoutes = require("./routes/user");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
//require("dotenv").config();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

console.log(process.env.MONGO_URI);

let items = [];

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/myappdb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB Connection error:", err));

app.get("/health", (req, res) => res.sendStatus(200));

app.get("/", (req, res) => {
  res.send(`Hello, world! ${process.env.APP_NAME}`);
});

app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// user endopoints
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
