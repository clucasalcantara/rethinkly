/**
 * Retrieve data module
 * @memberof rethinkly
 */
import rethinkdb from 'rethinkdb'
import logger from 'hoopa-logger'

/**
 * Delete data
 * Remove a record from the database
 * @param {Object} connection
 * @param {String} tableName
 * @param {String} id
 * @returns {Boolean} status
 */
export default async (connection, tableName, id = '') => {
  return id
    ? rethinkdb
        .table(tableName)
        .get(id)
        .delete()
        .run(connection)
        .then(result => {
          logger.info(`Deleting the record: ${id}`)

          return result
        })
    : logger.error(`You should provide an id to delete a record`)
}
