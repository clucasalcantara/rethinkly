/**
 * Connection module
 * @memberof rethinkly
 * @params dbConfig? (Object)
 */
import rethinkdb from 'rethinkdb'

/**
 * Create Link
 * creates a rethinkdb instance bridge,
 * @param {Object} dbConfig
 * @returns {Object} connection
 */
export default async dbConfig => rethinkdb.connect(dbConfig).then(connection => connection)
