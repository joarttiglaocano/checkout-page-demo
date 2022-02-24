import axios from 'axios';
import config from '../../../config';

export const createInvoice = async (data: any) => {
	const url = `${config.API_GATEWAY_URL}/v2/invoices`;
	const headers = {
		'Content-Type': 'application/json'
	};
	try {
		const res = await axios.post(url, data, {
			headers,
			auth: {
				username: config?.API_KEY || '',
				password: ''
			}
		});
		return res.data;
	} catch (error) {
		console.log('createInvoice ~ error', error);
	}
};
