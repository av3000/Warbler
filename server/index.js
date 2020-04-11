require("dotenv").config();
const express = require("express"),
      app = express(),
      cors = require("cors"),
      bodyParser = require("body-parser"),
      errorHandler = require("./handlers/error"),
      authRoutes = require("./routes/auth"),
      db = require("./models"),
      PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
});