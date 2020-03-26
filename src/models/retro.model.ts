import {Document} from 'mongoose';

export interface Retro extends Document {
    key: string
    team: string
    sprintIteration: number
    createDate: string
    message: string
    name?: string
    reaction?: string
}