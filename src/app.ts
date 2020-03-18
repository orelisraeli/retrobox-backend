import express from 'express';
import * as bodyParser from 'body-parser';
import {RetroController} from './controllers/retro.controller';

import mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/', new RetroController().router);

app.get('/health', (request, response) => {
    response.send('UP');
});

mongoose.connect('mongodb://localhost:27017/retro', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on ${port}`);
});