const express = require("express");
const router = express.Router();
const User = require("../models/user");
const axios = require("axios");

// CREATE
router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

// READ ALL
router.get("/data", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// READ ONE
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

// AI Endpoint: Generate summary of users
router.get("/ai/summary", async (req, res) => {
  const users = await User.find();
  const prompt = `Summarize the following users: ${JSON.stringify(users)}`;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  res.json({ ai_summary: response.data.choices[0].message.content });
});

module.exports = router;
