import dotenv from 'dotenv';

// run config
dotenv.config();

export default {
	PORT: process.env.PORT || 9000,
	API_KEY: process.env.API_KEY,
	API_GATEWAY_URL: process.env.API_GATEWAY_URL,
	testapikey: ['http://127.0.0.1:7000/', 'http://192.168.100.52:8000/']
};
