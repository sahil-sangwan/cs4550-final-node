const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session')
const cors = require('cors');
const routeController = require("./controllers/routeController");
const userController = require("./controllers/userController")
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors({
    credentials: true,
    origin: 'https://localhost:3000'
}));
app.use(express.json());

const sess = {
    secret: 'bike route',
    cookie: {}
}

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

routeController(app);
userController(app);
app.listen(process.env.PORT || 4000);