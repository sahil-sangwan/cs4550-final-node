const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const routeController = require("./controllers/routeController");
const userController = require("./controllers/userController")
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
routeController(app);
userController(app);
app.listen(process.env.PORT || 4000);