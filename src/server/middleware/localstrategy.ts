import * as passport from 'passport';
import * as localStrategy from 'passport-local';
import {comparePassword} from '../utils/security/passwords';
import db from '../db'

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new localStrategy.Strategy({
    usernameField: 'email',
    session: false
}, async (email, password, done) => {
    try {
        let [author]: any = await db.users.findOneByEmail(email);
        if (author && comparePassword(password, author.password)) {
            done(null, author)
        } else {
            done(null, false)
        }
    } catch (error) {
        console.log(error)
    }
}))