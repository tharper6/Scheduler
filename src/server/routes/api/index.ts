import * as express from 'express';
import sportsRouter from './sports';
import usersRouter from './users';
import trainersRouter from './trainers';
import sessionsRouter from './sessions';

const router = express.Router();

router.use('/sports', sportsRouter);
router.use('/users', usersRouter);
router.use('/trainingrole', trainersRouter);
router.use('/sessions', sessionsRouter);


export default router;