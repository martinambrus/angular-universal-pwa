const awsServerlessExpress = require('aws-serverless-express');
const app = require('./server');
const server = awsServerlessExpress.createServer(app, null, ['image/png'])

module.exports.universal = (event, context) => awsServerlessExpress.proxy(server, event, context);
