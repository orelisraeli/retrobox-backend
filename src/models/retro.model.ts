import {Document} from 'mongoose';

export interface Retro extends Document {
    sprintIteration: number
    createDate: string
    message: string
}