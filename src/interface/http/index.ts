import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes';
import apiKeyMapper from '../../config/api-key-mapper';
import config from '../../config';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
// setup web front
app.disable('view cache');
app.use(function (req, res, next) {
	const iframeReferrer = req.headers.referer;
	const apiKey: string = (req.query?.api_key || '') as string;
	const apiKeyRecord = (config as any)[apiKey] || [];

	if (
		!iframeReferrer ||
		!apiKey ||
		(!!apiKeyRecord && !apiKeyRecord.includes(iframeReferrer))
	) {
		res.append('X-Frame-Options', 'SAMEORIGIN');
	}

	next();
});
app.use(
	express.static(path.join(__dirname, '../../../public'), {
		extensions: ['html'],
		etag: false
	})
);

app.use('/api', routes);

export default app;
