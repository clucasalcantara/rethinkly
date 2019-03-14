/**
 * Rethinkly entrypoint
 * Env loading...
 */

const dotenv = require('dotenv')

dotenv.load()

module.exports = require('./src')
