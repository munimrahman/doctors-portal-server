const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Doctors Portal Server is Running",
  });
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});
