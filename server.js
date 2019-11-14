// server.js
const sls = require('serverless-http')
const app = require('./lib/app')
module.exports.run = sls(app)