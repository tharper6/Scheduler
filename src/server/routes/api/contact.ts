import * as express from 'express';
import * as mailgunLoader from 'mailgun-js';
import keys from '../../config'

const router = express.Router();

let mailgun = mailgunLoader({
    apiKey: keys.keys.apikey,
    domain: keys.keys.domain
});

let sendEmail = (to: string, from: string, subject: string, content: string) => {
    let data = {
        to,
        from,
        subject,
        text: content
    };
    return mailgun.messages().send(data);
}

router.post('/', async (req, res, next) => {
    try {
        await sendEmail('harper.trent@rocketmail.com', req.body.email, req.body.subject, req.body.messages);
        res.json('Email Sent!')
    } catch (error) {
        console.log(error);
        res.status(500);
    }
})

export default router;