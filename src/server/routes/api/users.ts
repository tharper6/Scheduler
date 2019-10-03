import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/', async(req, res, next) => {
    let users = await db.users.getAll();
    res.json(users);
});

export default router;