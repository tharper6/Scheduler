import * as express from 'express';
import sportsRouter from './sports';
import usersRouter from './users';

const router = express.Router();

router.use('/sports', sportsRouter);
router.use('/users', usersRouter)


export default router;