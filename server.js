import express from 'express';
import cors from 'cors';
import routeController from "./controllers/routeController.js";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb+srv://ssangwan:mSoShc6jv6w3Tw0J@cluster0.1ohtl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
routeController(app);
app.listen(process.env.PORT || 4000);