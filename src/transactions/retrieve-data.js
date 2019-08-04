/**
 * Retrieve data module
 * @memberof rethinkly
 */
import rethinkdb from 'rethinkdb'
import logger from 'hoopa-logger'

/**
 * ProcessResults
 * Callback to process data on gathering, for now don't
 * need any transformation
 * @param {Array} results
 * @return {Array} results
 */
const processResults = results => results

/**
 * RetrieveData
 * Grab data from database
 * @param {Object} connection
 * @param {String} tableName
 * @param {String} predicate?
 * @returns {Array||Object} results || result
 */
export default async (connection, tableName, predicate = {}) => {
  const { id } = predicate

  if (!predicate) {
    return rethinkdb
      .table(tableName)
      .run(connection)
      .then(cursor =>
        cursor.toArray((err, results) => {
          if (err) throw err

          return processResults(results)
        })
      )
  }

  if (id && Object.keys(predicate).length === 1) {
    return rethinkdb
      .table(tableName)
      .get(id)
      .run(connection)
      .then(result => result)
  }

  logger.info(`Searching using the predicate ${JSON.stringify(predicate)}`)

  return rethinkdb
    .table(tableName)
    .filter(predicate)
    .run(connection)
    .then(cursor =>
      cursor.toArray((err, results) => {
        if (err) throw err
        logger.info(`Search resuls: ${results.length}`)
        return processResults(results)
      })
    )
}
