import { iframeOptions } from './iframeOptions';

jest.mock('../config', () => {
	return {
		testapikey: ['http://127.0.0.1:7000/']
	};
});

describe('iframeOptions', () => {
	it('should not set X-FRAME-OPTIONS if host is registered with valid apiKey', async () => {
		//arrange
		const mockAppend = jest.fn();
		const mockRes = {
			append: mockAppend
		} as any;
		const mockReq = {
			headers: {
				referer: 'http://127.0.0.1:7000/'
			},
			query: {
				api_key: 'testapikey'
			}
		} as any;
		const mockNext = jest.fn();
		//act
		iframeOptions(mockReq, mockRes, mockNext);

		//assert
		expect(mockAppend).not.toHaveBeenCalled();
	});
	it('should set X-FRAME-OPTIONS if the apiKey is not valid', async () => {
		//arrange

		const mockAppend = jest.fn();
		const mockRes = {
			append: mockAppend
		} as any;
		const mockReq = {
			headers: {
				referer: 'http://127.0.0.1:7000/'
			},
			query: {
				api_key: 'invalid-api-key'
			}
		} as any;
		const mockNext = jest.fn();
		//act
		iframeOptions(mockReq, mockRes, mockNext);

		//assert
		expect(mockAppend).toHaveBeenCalledWith('X-Frame-Options', 'SAMEORIGIN');
	});

	it('should set X-FRAME-OPTIONS if host/merchant is not registered', async () => {
		//arrange

		const mockAppend = jest.fn();
		const mockRes = {
			append: mockAppend
		} as any;
		const mockReq = {
			headers: {
				referer: 'http://127.0.0.1:8000/'
			},
			query: {
				api_key: 'testapikey'
			}
		} as any;
		const mockNext = jest.fn();
		//act
		iframeOptions(mockReq, mockRes, mockNext);

		//assert
		expect(mockAppend).toHaveBeenCalledWith('X-Frame-Options', 'SAMEORIGIN');
	});
});
