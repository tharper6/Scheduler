import * as express from 'express';
import * as passport from 'passport';
// import {createToken} from '../../utils/security/passwords'

const router = express.Router();

router.post('/', passport.authenticate('local'), async (req, res) => {
    try {
        // let token = createToken()
    } catch (error) {
        console.log(error);
        res.status(500).json('Contact Admin')
    }
})

export default router;