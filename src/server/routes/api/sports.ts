import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/', async(req, res, ) => {
    try {
        let sports = await db.sports.getAll();
        res.json(sports);
    } catch (error) {
        console.log(error);
        res.status(500).json('Contact Admin')
    }
});

router.get('/:id', async(req, res, ) => {
    try {
        let sport = await db.sports.getOne(req.params.id);
        res.json(sport);
    } catch (error) {
        console.log(error);
        res.status(500).json('Contact Admin')
    }
});

export default router;