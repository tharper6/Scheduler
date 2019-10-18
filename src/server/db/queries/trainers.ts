import {Query} from '../index';

const findTrainers = (trainingrole: string) => Query('select users.id, users.username, users.email, users.role, users.trainingrole, users.bio, users.avatar, sports.sportname from users join sports on sports.id = users.sportid where trainingrole = ?', [trainingrole])
const insertBio = (bio: string, id: number) => Query('UPDATE users SET bio = ? WHERE id = ?', [bio, id]);
const updateBio = (bio: string, id: number) => Query('UPDATE users SET bio = ? WHERE id = ?', [bio, id]);

export default {
    findTrainers,
    insertBio
}