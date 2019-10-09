import {Query} from '../index';

const findOneByEmail = async (email: string) => Query('SELECT * FROM users WHERE email = ?', [email]);
const findOneById = (id: number) => Query(`SELECT * FROM users WHERE id = ?`, [id]);
const insert = (email: string, password: string, name: string, trainingrole: string, sportid: string) => Query('INSERT INTO users (email, password, name, trainingrole, sportid) VALUE (?)', [[email, password, name, trainingrole, sportid]]);
const getAll = () => Query('SELECT id, name, sportid, role FROM users');
const findTrainers = (trainingrole: string) => Query('SELECT * FROM users WHERE trainingrole = ?', [trainingrole])

export default{
    findOneByEmail,
    findOneById,
    insert,
    getAll,
    findTrainers
}