/**
 * Connection module
 * @memberof rethinkly
 * @params dbConfig? (Object)
 */
const rethinkdb = require('rethinkdb')
// isDev?
const isDev = process.env._DEV_

// ENV configurations
const rethinkConfig = {
    host: !isDev ? process.env.DB_URL : process.env.DB_URL_DEV,
    port: !isDev ? process.env.DB_PORT : process.env.DB_PORT_DEV,
    db: !isDev ? process.env.DB_NAME : process.env.DB_NAME_DEV,
}

/**
 * connect
 * Get an active rethinkdb instance
 * @param {Object} dbConfig 
 * @returns {Object} connection
 */
module.exports = async (dbConfig) => rethinkdb.connect(dbConfig || rethinkConfig)
    .then(connection => connection)



