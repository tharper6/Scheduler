import * as express from 'express';
import * as path from 'path';
import * as passport from 'passport';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as compression from 'compression';
import routes from './routes';

import './middleware/localstrategy';
import './middleware/bearerstrategy';

const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(passport.initialize());
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));
app.use(routes);
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));


// api/user/1
// api/sessions/2
// delete button/ edit for events.
// about page/ contact