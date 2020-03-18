import mongoose, {Schema} from 'mongoose';
import {Retro} from "../models/retro.model";

const RetroSchema: Schema = new Schema({
    sprintIteration: {type: Number},
    createDate: {type: String},
    message: {type: String}
});

const RetroModel = mongoose.model<Retro>('Retro', RetroSchema);

export default RetroModel;