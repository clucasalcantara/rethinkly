import createLink from './connection'
import { retrieveData, insertData } from './transactions'
import { createDatabase, dropDatabase } from './transactions/database'
import { createTable } from './transactions/table'

export default {
  connect: dbConfig => createLink(dbConfig),
}

const transactions = {
  database: {
    create: createDatabase,
    drop: dropDatabase,
  },
  table: {
    create: createTable,
  },
  data: {
    retrieveData,
    insertData,
  },
}

export { transactions }
