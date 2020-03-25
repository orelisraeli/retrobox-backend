import {Document} from 'mongoose';

export interface Retro extends Document {
    team: string
    sprintIteration: number
    createDate: string
    message: string
    name?: string
    reaction?: string
}