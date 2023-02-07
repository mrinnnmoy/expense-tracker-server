const express = require("express");
const app = express();
const cors = require("cors");

require('dotenv').config({path : "./config.env"});
const port = process.env.PORT || 5000;

// Use middleware
app.use(cors());
app.use(express.json());

// Using routes
app.use(require('./routes/route'));

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});
