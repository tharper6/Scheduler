import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let result = await db.sessions.post(req.body.name, req.body.sportid, req.body.trainerid, req.body.traineeid, req.body.summary, req.body.date, req.body.time);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json("Contact Admin")
    }
})

router.get('/trainer/:trainerid', async (req, res) => {
    try {
        let result = await db.sessions.getSessionsByTrainer(req.params.trainerid)
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('Contact Admin')
    }
})

router.get('/trainee/:traineeid', async (req, res) => {
    try {
        let result = await db.sessions.getSessionsByTrainee(req.params.traineeid)
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('Contact Admin')
    }
})

export default router;