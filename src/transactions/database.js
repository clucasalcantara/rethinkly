/**
 * Database controls
 * @memberof rethinkly
 */
import rethinkdb from 'rethinkdb'
import logger from 'hoopa-logger'
import createLink from '../connection'

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
 */
export const getConnection = async () => {
  return await createLink({
    host: process.env.ENV === 'mock' ? '172.18.0.2' : 'localhost',
    port: process.env.ENV === 'mock' ? '28015' : '55001',
  })
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

/**
 * Check is a database exist into the server
 * @param {Object} connection
 * @param {String} dbName
 * @param {Function} done
 */
export const checkForExistence = async (connection, dbName) => {
  const databaseList = await rethinkdb.dbList().run(connection)
  const dbAlreadyExists = databaseList.find(db => db === dbName)

  if (dbAlreadyExists) {
    logger.info(`DB ${dbName} already exists`)
    return true
  }

  logger.warn(`DB ${dbName} does not exists!`)
  return false
}

/**
 * Return databases list
 * @param {Object} connection
 * @param {String} dbName
 * @param {Function} done
 */
export const listAll = async connection => {
  const databaseList = await rethinkdb.dbList().run(connection)

  if (databaseList.length > 0) {
    logger.info(`${databaseList.length} listed`)
    return databaseList
  }

  logger.warn(`No existent databases`)
  return []
}
