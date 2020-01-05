import createLink from './connection'
import { retrieveData, insertData, deleteData, updateData } from './transactions'
import { createDatabase, dropDatabase } from './transactions/database'
import { createTable } from './transactions/table'

export default dbConfig => createLink(dbConfig)

module.exports = {
  // Data
  data: {
    get: retrieveData,
    insert: insertData,
    remove: deleteData,
    update: updateData,
  },
  // Database
  database: {
    create: createDatabase,
    drop: dropDatabase,
  },
  // Table
  table: {
    create: createTable,
  },
  // Connection
  createLink,
}
