import * as express from 'express';
import sportsRouter from './sports'

const router = express.Router();

router.use('/sports', sportsRouter)


export default router;