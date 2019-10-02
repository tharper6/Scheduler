import * as express from 'express';

const router = express.Router();

router.use()
router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

export default router;