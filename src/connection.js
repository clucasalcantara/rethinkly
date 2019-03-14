/**
 * Connection module
 * @memberof rethinkly
 * @params dbConfig? (Object)
 */
const rethinkdb = require('rethinkdb')

const isDev = process.env._DEV_

const rethinkConfig = {
  host: isDev ? process.env.DB_URL_DEV : process.env.DB_URL,
  port: isDev ? process.env.DB_PORT_DEV : process.env.DB_PORT,
  db: isDev ? process.env.DB_NAME_DEV : process.env.DB_NAME,
}

/**
 * Connect
 * Get an active rethinkdb instance
 * @param {Object} dbConfig
 * @returns {Object} connection
 */
module.exports = async dbConfig =>
  rethinkdb.connect(dbConfig || rethinkConfig).then(connection => connection)
