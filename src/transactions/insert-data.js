/**
 * Insert data module
 * @memberof rethinkly
 */
const rethinkdb = require('rethinkdb')

/**
 * Insert data
 * Grab data from database
 * @param {Object} connection
 * @param {String} tableName
 * @returns {Array||Object} results || result
 */
module.exports = async (connection, tableName, data) =>
  rethinkdb
    .table(tableName)
    .insert(data)
    .run(connection)
