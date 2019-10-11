import * as mysql from 'mysql';
import config from '../config';

export const connection = mysql.createPool(config.mysql)

export const Query = (query: string, values?: any) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if(err) reject(err);
            resolve(results);
        });
    });
};

import users from './queries/users';
import tokens from './queries/tokens';
import sports from './queries/sports';
import sessions from './queries/sessions';

export default{
    users,
    tokens,
    sports,
    sessions
}