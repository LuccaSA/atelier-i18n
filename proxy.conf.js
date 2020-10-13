const luccaProxy = require('@lucca/proxy');

const PROXY_CONFIG = [
	luccaProxy({
		context: [
			'/getFile.ashx',
			'/api',
			'/directory/api',
			'/organization/structure/api',
		],
		logLevel: 'debug',
	}),
];

module.exports = PROXY_CONFIG;