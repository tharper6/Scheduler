import {Query} from '../index';

const findOneByEmail = async (email: string) => Query('SELECT * FROM users WHERE email = ?', [email]);
const findOneById = (id: number) => Query(`SELECT * FROM users WHERE id = ?`, [id]);
const insert = (email: string, password: string, name: string) => Query('INSERT INTO users (email, password, name) VALUE (?)', [[email, password, name]]);
const getAll = () => Query('SELECT id, name, sportid, role FROM users');
const addSportTrainingRole = (sportid: string, trainingrole: number, id: number) => Query('UPDATE users SET sportid = ?, trainingrole = ? where id = ?', [sportid, trainingrole, id])

export default{
    findOneByEmail,
    findOneById,
    insert,
    getAll,
    addSportTrainingRole
}