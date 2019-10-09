import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/:trainingrole', async(req, res) => {
    let trainers = await db.users.findTrainers(req.params.trainingrole);
    res.json(trainers)
})

export default router;