/**
 * Insert data module
 * @memberof rethinkly
 */
import rethinkdb from 'rethinkdb'

/**
 * Insert data
 * Grab data from database
 * @param {Object} connection
 * @param {String} tableName
 * @param data
 * @returns {Array||Object} results || result
 */
export default async (connection, tableName, data) =>
  rethinkdb
    .table(tableName)
    .insert(data)
    .run(connection)
