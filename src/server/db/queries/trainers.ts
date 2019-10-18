import {Query} from '../index';

const findTrainers = (trainingrole: string) => Query('select users.id, users.username, users.email, users.role, users.trainingrole, users.bio, users.avatar, sports.sportname from users join sports on sports.id = users.sportid where trainingrole = ?', [trainingrole])


export default {
    findTrainers
}