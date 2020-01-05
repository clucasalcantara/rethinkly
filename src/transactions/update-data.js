/**
 * Update data module
 * @memberof rethinkly
 */
import rethinkdb from 'rethinkdb'
import logger from 'hoopa-logger'

/**
 * Update data
 * Updates a record from the database
 * @param {Object} connection
 * @param {String} tableName
 * @param {String} id
 * @param {Object} values
 * @returns {Boolean} status
 */
export default async (connection, tableName, id, values) => {
  return id
    ? rethinkdb
        .table(tableName)
        .get(id)
        .update(values)
        .run(connection)
        .then(result => {
          logger.info(`Record updated: ${id}`)

          return result
        })
    : logger.error(`You should provide an id to update a record`)
}
