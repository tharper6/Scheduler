import * as express from 'express';
import db from '../../db';
import * as multer from 'multer';
import * as aws from 'aws-sdk';
import * as multers3 from 'multer-s3';
import config from '../../config/development';

aws.config.update({
    secretAccessKey: config.awskeys.secretkey,
    accessKeyId: config.awskeys.accesskeyid
});

const s3 = new aws.S3();

const upload = multer({
    storage: multers3({
        s3,
        bucket: 'protrainersuseravatars',
        key: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`)
        },
        acl: 'public-read'
    })
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const router = express.Router();

router.get('/', async(req, res, next) => {
    let users = await db.users.getAll();
    res.json(users);
});

router.get('/:id', async(req, res, next) => {
    let [users]: any = await db.users.findOneById(req.params.id);
    res.json(users);
});

router.post('/:id', upload.single('avatar'), (req, res) => {
    let userAvatar = db.users.updateAvatar(req.file.location, req.params.id)
    // console.log(req.file.location);
    // console.log(req.body);
    res.json('Test')
});

// router.get('/:trainingrole', async (req, res, next) => {
//     console.log(req.params)
//     let trainers = await db.users.findTrainers(req.params.trainingrole);
//     res.json(trainers);
// })

// router.put('/:id', async(req, res) => {
//     try {
//         let user = await db.users.addSportTrainingRole(req.body.sportid, req.body.trainingrole, req.params.id);
//         res.json(user)
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('Contact Admin')
//     }
// })

export default router;