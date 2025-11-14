const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// 測試 GET（讓 Verify 不 404）
app.get("/", (req, res) => {
  res.send("Server is running.");
});

// LINE Webhook
app.post("/webhook", (req, res) => {
  console.log("Webhook received:", req.body);
  res.status(200).send("OK");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server started on port " + port);
});
