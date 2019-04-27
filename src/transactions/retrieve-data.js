/**
 * Data module
 * @memberof rethinkly
 */
const rethinkdb = require('rethinkdb')

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
 * @param {String} id?
 * @returns {Array||Object} results || result
 */
module.exports = async (connection, tableName, id = null) => {
  if (!id) {
    return rethinkdb
      .table(tableName)
      .run(connection)
      .then(cursor =>
        cursor.toArray((err, results) => {
          if (err) throw err

          processResults(results)
        })
      )
  }

  return rethinkdb
    .table(tableName)
    .get(id)
    .run(connection)
    .then(result => result)
}
