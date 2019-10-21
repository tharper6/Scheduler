import {Query} from '../index';

const findOneByEmail = async (email: string) => Query('SELECT * FROM users WHERE email = ?', [email]);
const findOneById = (id: number) => Query(`SELECT users.id, users.username, users.email, users.role, users.trainingrole, users.bio, users.avatar, users.sportid, sports.sportname FROM users JOIN sports ON users.sportid = sports.id WHERE users.id = ?`, [id]);
const insert = (email: string, password: string, username: string, trainingrole: string, sportid: string) => Query('INSERT INTO users (email, password, username, trainingrole, sportid) VALUE (?)', [[email, password, username, trainingrole, sportid]]);
const getAll = () => Query('SELECT id, name, sportid, role FROM users');
const findTrainers = (trainingrole: string) => Query('SELECT users.id, users.name, users.email, users.sportid, users.trainingrole, users.bio, sports.sportname FROM users JOIN sports ON sports.id = users.sportid WHERE trainingrole = ?', [trainingrole])

export default{
    findOneByEmail,
    findOneById,
    insert,
    getAll,
    findTrainers
}