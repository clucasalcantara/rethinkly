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
  const { id, name } = predicate

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

  // ID SEARCH
  if (id && Object.keys(predicate).length === 1) {
    const result = await rethinkdb
      .table(tableName)
      .get(id)
      .run(connection)
      .then(result => result)

    return result
  }

  if (name) {
    delete predicate.name
  }

  const predicateKeys = Object.keys(predicate)
  let queryBuilder = rethinkdb.table(tableName)

  for (const key of predicateKeys) {
    const value = predicate[key]

    if (Array.isArray(value)) {
      queryBuilder = queryBuilder.filter(data => data(key).contains(value))
      delete predicate[key]

      return queryBuilder
    }
  }

  if (name) {
    return queryBuilder
      .filter(predicate)
      .filter(data => data('name').match(`^${name}`))
      .run(connection)
      .then(cursor =>
        cursor.toArray((err, results) => {
          if (err) throw err
          logger.info(`Search results: ${results.length}`)

          return processResults(results)
        })
      )
  }

  return queryBuilder
    .filter(predicate)
    .run(connection)
    .then(cursor =>
      cursor.toArray((err, results) => {
        if (err) throw err
        logger.info(`Search results: ${results.length}`)

        return processResults(results)
      })
    )
}
