/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['**/**/*.test.ts'],
	verbose: true,
	forceExit: true,
	testTimeout: 10000
	// clearMocks: true
};
