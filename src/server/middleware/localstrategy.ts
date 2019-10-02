import * as passport from 'passport';
import * as localStrategy from 'passport-local';
import {comparePassword} from '../utils/security/passwords';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new localStrategy.Strategy({
    usernameField: 'email',
    session: false
}, async (email, password, done) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}))