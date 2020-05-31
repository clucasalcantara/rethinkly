import createLink from './connection'
import { retrieveData, insertData, deleteData, updateData } from './transactions'
import { createDatabase, dropDatabase, checkForExistence, listAll } from './transactions/database'
import { createTable } from './transactions/table'
import { seed } from './transactions/seed'

export default dbConfig => createLink(dbConfig)

module.exports = {
  // Data
  data: {
    get: retrieveData,
    insert: insertData,
    remove: deleteData,
    update: updateData,
    seed,
  },
  // Database
  database: {
    create: createDatabase,
    drop: dropDatabase,
    checkForExistence,
    list: listAll,
  },
  // Table
  table: {
    create: createTable,
  },
  // Connection
  createLink,
}
