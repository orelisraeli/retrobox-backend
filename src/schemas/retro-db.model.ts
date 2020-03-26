import mongoose, {Schema} from 'mongoose';
import {Retro} from "../models/retro.model";

const RetroSchema: Schema = new Schema({
    key: {type: String, required: true},
    team: {type: String, required: true},
    sprintIteration: {type: Number, required: true},
    createDate: {type: String, required: true},
    message: {type: String, required: true},
    name: {type: String, required: false},
    reaction: {type: String, required: false}
});

const RetroModel = mongoose.model<Retro>('Retro', RetroSchema);

export default RetroModel;