import express from 'express';
import {Retro} from '../models/retro.model';
import RetroModel from "../schemas/retro-db.model";

export class RetroController {
    public router = express.Router();

    constructor() {
        this.router.post('/retro', this.save);
    }

    public save(request: express.Request, response: express.Response) {
        const retro: Retro = request.body;

        retro.createDate = new Date().toLocaleString('en-GB');

        const retroModel = new RetroModel({
            sprintIteration: retro.sprintIteration,
            createDate: retro.createDate,
            message: retro.message
        });

        retroModel.save();

        response.send(retro);
    }
}