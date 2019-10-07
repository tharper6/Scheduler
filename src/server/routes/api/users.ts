import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/', async(req, res, next) => {
    let users = await db.users.getAll();
    res.json(users);
});

router.get('/:id', async(req, res, next) => {
    let users = await db.users.findOneById(req.params.id);
    res.json(users);
});

router.put('/:id', async(req, res) => {
    try {
        let user = await db.users.addSportTrainingRole(req.body.sportid, req.body.trainingrole, req.params.id);
        res.json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json('Contact Admin')
    }
})

export default router;