import * as express from 'express';
import sportsRouter from './sports';
import usersRouter from './users';
import trainersRouter from './trainers';

const router = express.Router();

router.use('/sports', sportsRouter);
router.use('/users', usersRouter);
router.use('/trainingrole', trainersRouter)


export default router;