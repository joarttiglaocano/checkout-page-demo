import { Request, Response } from 'express';
import { createInvoice } from '../services';

// Create invoice
export const invoice = async (req: Request, res: Response) => {
	const data = req?.body;
	const result = await createInvoice(data);
	res.json(result);
};
