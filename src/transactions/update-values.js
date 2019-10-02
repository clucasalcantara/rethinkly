/**
 * Update values from a table
 * @memberof rethinkly
 */
import logger from 'hoopa-logger'
import rethinkdb from 'rethinkdb'

/**
 * Update values
 * Update a key value scheme from
 * on table
 * @param {Object} connection
 * @param {Object} updateData - The update config object
 */
export default async (connection, { tableName, record, keyValue }) => {
  if (record) {
    logger.info(`Updating ${tableName}, setting ${keyValue} on record ${record}`)
    const result = await rethinkdb
      .table(tableName)
      .get(record)
      .update(keyValue)
      .run(connection)

    return result
  }

  logger.info(`Updating ${tableName}, setting ${JSON.stringify(keyValue)}`)
  const result = await rethinkdb
    .table(tableName)
    .update(keyValue)
    .run(connection)

  return result
}
