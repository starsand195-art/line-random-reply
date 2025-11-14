const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// 測試 GET (避免 404)
app.get("/", (req, res) => {
  res.send("Server is running.");
});

// LINE Webhook
app.post("/webhook", (req, res) => {
  console.log("Webhook received:", req.body);
  res.status(200).send("OK");
});

// Render 必須使用的 PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Your random reply server is running on port " + port);
});
