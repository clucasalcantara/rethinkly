import createLink from './connection'
import { retrieveData, insertData } from './transactions'
import { createDatabase, dropDatabase } from './transactions/database'
import { createTable } from './transactions/table'

export default dbConfig => createLink(dbConfig)

export {
  // Data
  retrieveData,
  insertData,
  // Database
  createDatabase,
  dropDatabase,
  // Table
  createTable,
  // Connection
  createLink,
}
