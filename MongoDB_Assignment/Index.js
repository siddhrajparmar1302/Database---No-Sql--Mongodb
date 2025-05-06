const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const UserRoutes  = require('./Routes/User-Routers')

const app = express();
app.use(bodyParser.json());

const mongoURI = "mongodb://localhost:27017/mydatabase";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..!"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.use('/api', UserRoutes);


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on the port ${PORT}`));
