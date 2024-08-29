const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const DB = require("./config/database");
const cardRoutes = require("./routes/cardRoutes");

const app = express();

DB();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", cardRoutes);

app.get("/ping", (req, res) => {
  res.json({ message: "Server is running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
