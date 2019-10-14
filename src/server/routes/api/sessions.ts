import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let result = await db.sessions.post(req.body.name, req.body.trainerid, req.body.sportid, req.body.summary, req.body.date);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json("Contact Admin")
    }
})

export default router;