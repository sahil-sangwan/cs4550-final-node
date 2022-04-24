import express from 'express';
import cors from 'cors';
import routeController from "./controllers/routeController.js";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
routeController(app);
app.listen(process.env.PORT || 4000);