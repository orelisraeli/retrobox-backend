import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import {Retro} from '../models/retro.model';
import RetroModel from "../schemas/retro-db.model";

export class RetroController {
    public router = express.Router();

    constructor() {
        this.router.get('/retro', this.getAll);
        this.router.post('/retro', this.save);
    }

    public async getAll(request: express.Request, response: express.Response) {
        const params = request.query;

        const retros = await RetroModel.find(params).select('-_id -__v');

        response.send(retros);
    }

    public save(request: express.Request, response: express.Response) {
        const retro: Retro = request.body.data;

        retro.createDate = new Date().toLocaleString('en-GB');

        const retroModel = new RetroModel({
            key: uuidv4(),
            team: retro.team,
            sprintIteration: retro.sprintIteration,
            createDate: retro.createDate,
            message: retro.message,
            name: retro.name,
            reaction: retro.reaction
        });

        retroModel.save();

        response.send(retro);
    }
}