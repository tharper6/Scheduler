import {Query} from '../index';

const getAll = () => Query('SELECT * FROM sports');
const getOne = (id: string) => Query('SELECT * FROM sports WHERE id = ?', [id]);

export default {
    getAll,
    getOne
}