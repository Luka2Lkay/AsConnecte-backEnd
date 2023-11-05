const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const port = 3300;

const resellerRouter = require('./src/routes/reseller_routes.js');
const { db } = require("./src/config/db_config");

const app = express();
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose.connect(db.mongoUrl)
  .then(() => {
    console.log("Connected to APi");
  })
  .catch((error) => {
    console.log("Oops! Connection access denied!", error);
  });

app.use('/reseller', resellerRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
