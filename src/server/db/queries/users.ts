import {Query} from '../index';

const findOneByEmail = async (email: string) => Query('SELECT * FROM users WHERE email = ?', [email]);
const findOneById = (id: number) => Query(`SELECT * FROM users WHERE id = ?`, [id]);
const insert = (email: string, password: string, name: string, role: string) => Query('INSERT INTO users (email, password, name, role) VALUE (?)', [[email, password, name, role]])

export default{
    findOneByEmail,
    findOneById,
    insert
}