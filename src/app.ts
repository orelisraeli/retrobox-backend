import express from 'express';
import * as bodyParser from 'body-parser';
import {RetroController} from './controllers/retro.controller';

import dotenv = require('dotenv');
import mongoose = require("mongoose");

const app = express();
const port = 3000;

dotenv.config();

app.use(bodyParser.json());

app.use('/', new RetroController().router);

app.get('/health', (request, response) => {
    response.send('UP');
});

mongoose.connect(process.env.MONGO_DB_ADDRESS, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on ${port}`);
});