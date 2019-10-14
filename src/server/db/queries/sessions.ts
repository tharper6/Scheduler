import {Query} from '../index';

const post = (name: string,trainerid: number, sportid: number, summary: string, date: Date) => Query('INSERT INTO sessions (name, trainerid, sportid, summary, date) VALUES (?)', [[name, trainerid, sportid, summary, date]]);

export default {
    post
}