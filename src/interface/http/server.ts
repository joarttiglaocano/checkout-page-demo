import http from 'http';
import config from '../../config';

import app from './';

const server = http.createServer(app);
server.listen(config.PORT);
server.on('listening', () => console.log(`Listening on port ${config.PORT}`));
server.on('error', () => console.log('error'));

export default server;
