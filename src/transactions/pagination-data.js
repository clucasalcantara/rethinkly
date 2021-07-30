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
  const { page, pageSize } = predicate

  return rethinkdb.table(tableName)
    .orderBy('teste')
    .skip(page)
    .limit(pageSize)
    .run(connection)
    .then(cursor =>
      cursor.toArray((err, results) => {
        if (err) throw err

        //todo: add in results total_items, page, next_page, total_pages, result inside data
        return processResults(results)
      })
    )
}
