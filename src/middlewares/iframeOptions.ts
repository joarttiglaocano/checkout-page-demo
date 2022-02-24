import { NextFunction, Request, Response } from 'express';
import config from '../config';

export const iframeOptions = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const iframeReferrer = req?.headers?.referer;
	const apiKey: string = (req?.query?.api_key || '') as string;

	// Note: this should be fetch from invoice settings
	// This was only used for demo purpose only
	const validHosts = (config as any)[apiKey] || [];

	// We make sure that there is an api_key query
	// if the request is coming from different origin
	// otherwise will denied the request.
	if (
		!iframeReferrer ||
		!apiKey ||
		(!!validHosts && !validHosts.includes(iframeReferrer))
	) {
		res.append('X-Frame-Options', 'SAMEORIGIN');
	}

	next();
};
