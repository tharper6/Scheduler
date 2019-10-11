import {Query} from '../index';

const post = (name: string, sportid: number, summary: string, date: Date) => Query('INSERT INTO sessions (name, sportid, summary, date) VALUES (?)', [[name, sportid, summary, date]]);

export default {
    post
}