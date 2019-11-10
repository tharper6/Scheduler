import {Query} from '../index';

const post = (name: string, sportid: number, trainerid: number, traineeid: number, summary: string, date: string, time: string) => Query('INSERT INTO sessions (name, sportid, trainerid, traineeid, summary, date, time) VALUES (?)', [[name, sportid, trainerid, traineeid, summary, date, time]]);
const getSessionsByTrainer = (trainerid: number) => Query('SELECT s.id, s.name, s.summary, s.date, s.trainerid, s.traineeid, s.time, sp.sportname, u1.username as trainer_name, u2.username as trainee_name FROM sessions s JOIN sports sp ON sp.id = s.sportid JOIN users u1 ON u1.id = s.trainerid JOIN users u2 ON u2.id = s.traineeid WHERE s.trainerid = ?', [trainerid])
const getSessionsByTrainee = (traineeid: number) => Query('SELECT s.id, s.name, s.summary, s.date, s.trainerid, s.traineeid, s.time, sp.sportname, u1.username as trainer_name, u2.username as trainee_name FROM sessions s JOIN sports sp ON sp.id = s.sportid JOIN users u1 ON u1.id = s.trainerid JOIN users u2 ON u2.id = s.traineeid WHERE s.traineeid = ?', [traineeid])
const destroySession = (id: number) => Query('DELETE FROM sessions WHERE id = ?', [id])
const countSessionsByTrainer = (trainerid: number) => Query('SELECT COUNT(id) AS NumberOfSessions FROM sessions WHERE trainerid = ?', [trainerid])
const countSessionsByTrainee = (traineeid: number) => Query('SELECT COUNT(id) AS NumberOfSessions FROM sessions WHERE traineeid = ?', [traineeid])

export default {
    post,
    getSessionsByTrainer,
    getSessionsByTrainee,
    destroySession,
    countSessionsByTrainer,
    countSessionsByTrainee
}