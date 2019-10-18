import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/:trainingrole', async(req, res) => {
    let trainers = await db.trainers.findTrainers(req.params.trainingrole);
    res.json(trainers)
})

router.post('/trainers/:id', async (req, res) => {
    try {
        let trainerbio = await db.trainers.insertBio(req.body.bio, req.params.id);
        res.json(trainerbio)
    } catch (error) {
        console.log(error);
        res.status(500).json("Please Contact Admin")
    }
})

router.put('/trainers/:id', async (req, res) => {
    try {
        let trainerbio = await db.trainers.insertBio(req.body.bio, req.params.id);
        res.json(trainerbio)
    } catch (error) {
        console.log(error);
        res.status(500).json("Please Contact Admin")
    }
})


export default router;