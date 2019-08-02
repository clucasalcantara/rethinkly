/**
 * Database controls
 * @memberof rethinkly
 */
import rethinkdb from 'rethinkdb'
import logger from 'hoopa-logger'

/**
 * Creates a database
 * @param {Object} connection
 * @param {String} dbName
 * @param {Function} done
 */
export const createDatabase = async (connection, dbName, done) => {
  const databaseList = await rethinkdb.dbList().run(connection)
  const dbAlreadyExists = databaseList.find(db => db === dbName)

  if (dbAlreadyExists) {
    await rethinkdb.dbDrop(dbName).run(connection, done)
  }

  const result = await rethinkdb.dbCreate(dbName).run(connection, done)

  if (result.dbs_created) {
    logger.info(`db ${dbName} created successfully!`)
    return true
  }

  return false
}

/**
 * Drops a database
 * @param {Object} connection
 * @param {String} dbName
 * @param {Function} done
 */
export const dropDatabase = async (connection, dbName, done) => {
  const databaseList = await rethinkdb.dbList().run(connection)
  const dbAlreadyExists = databaseList.find(db => db === dbName)

  if (dbAlreadyExists) {
    const result = await rethinkdb.dbDrop(dbName).run(connection, done)

    if (result.dbs_droped) {
      logger.info(`db ${dbName} dropped`)
      return true
    }
  }

  logger.warn(`db ${dbName} does not exists!`)
  return false
}
