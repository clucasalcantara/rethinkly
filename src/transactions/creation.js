/**
 * Creation module
 * @memberof rethinkly
 */
import rethinkdb from 'rethinkdb'
import logger from 'hoopa-logger'

const createDatabase = async (connection, dbName, done) => {
  const databaseList = await rethinkdb.dbList().run(connection)
  const dbAlreadyExists = databaseList.find(db => db === dbName)

  if (dbAlreadyExists) {
    return logger.warn(`${dbName} already exists, skipping!`)
  }

  await rethinkdb.dbCreate(dbName).run(connection, done)
  return logger.info(`${dbName} created successfully!`)
}

const createTable = async (connection, tableName, done) => {
  const tableList = await rethinkdb.tableList().run(connection)
  const tableAlreadyExists = tableList.find(table => table === tableName)

  if (tableAlreadyExists) {
    return logger.warn(`${tableName} already exists, skipping!`)
  }

  await rethinkdb.tableCreate(tableName).run(connection, done)
  return logger.info(`${tableName} created successfully!`)
}

export { createDatabase, createTable }
