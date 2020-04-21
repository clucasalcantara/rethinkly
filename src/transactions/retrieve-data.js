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
const processResults = results => (results && results.length > 0 ? results[0] : results)

/**
 * RetrieveData
 * Grab data from database
 * @param {Object} connection
 * @param {String} tableName
 * @param {String} predicate?
 * @returns {Array||Object} results || result
 */
export default async (connection, tableName, predicate = false) => {
  const { id } = predicate

  if (!predicate) {
    logger.info(`Searching using no predicate`)

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
    const result = await rethinkdb
      .table(tableName)
      .get(id)
      .run(connection)
      .then(result => result)

    return result
  }

  const predicateKey = Object.keys(predicate)[0]
  const predicateValues = Object.values(predicate)[0]

  if (Array.isArray(predicateValues)) {
    logger.info(`Searching using the predicate ${JSON.stringify(predicate)}`)

    return rethinkdb
      .table(tableName)
      .filter(data => data(predicateKey).contains(...predicateValues))
      .run(connection)
      .then(cursor =>
        cursor.toArray((err, results) => {
          if (err) throw err
          logger.info(`Search resuls: ${results.length}`)
          return processResults(results)
        })
      )
  }

  return rethinkdb
    .table(tableName)
    .filter({ [predicateKey]: predicateValues })
    .run(connection)
    .then(cursor =>
      cursor.toArray((err, results) => {
        if (err) throw err
        logger.info(`Search resuls: ${results.length}`)
        return processResults(results)
      })
    )
}
