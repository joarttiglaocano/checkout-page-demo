import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import routes from './routes';
import { iframeOptions } from '../../middlewares/iframeOptions';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
// setup web front
app.use(iframeOptions);
app.use(
	express.static(path.join(__dirname, '../../../public'), {
		extensions: ['html'],
		etag: false
	})
);

app.use('/api', routes);

export default app;
