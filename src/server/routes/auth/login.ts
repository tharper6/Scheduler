import * as express from 'express';
import * as passport from 'passport';
import {createToken} from '../../utils/security/tokens'

const router = express.Router();

router.post('/', passport.authenticate('local'), async (req: any, res) => {
    try {
        let token = createToken({ userid: req.user.id });
        res.json({
            token,
            userid: req.user.id
        });
    } catch (error) {
        console.log(error);
        res.status(500).json('Contact Admin')
    }
})

export default router;