/**
 * Table controls
 * @memberof rethinkly
 */
import rethinkdb from 'rethinkdb'
import logger from 'hoopa-logger'

/**
 * Creates a table
 * @param {Object} connection
 * @param {String} dbName
 * @param {Function} done
 */
export const createTable = async (connection, tableName, done) => {
  const tableList = await rethinkdb.tableList().run(connection)
  const tableAlreadyExists = tableList.find(table => table === tableName)

  if (tableAlreadyExists) {
    return logger.warn(`table ${tableName} already exists, skipping!`)
  }

  await rethinkdb.tableCreate(tableName).run(connection, done)
  return logger.info(`table ${tableName} created successfully!`)
}
