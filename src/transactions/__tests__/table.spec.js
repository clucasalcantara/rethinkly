import test from 'ava'
import { createDatabase, dropDatabase, getConnection } from '../database'
import { createTable, dropTable } from '../table'

test('should create and drop a table properly', async t => {
  const conn = await getConnection()
  const result = await createDatabase(conn, 'table_example')

  if (result) {
    const created = await createTable(conn, 'table_example')
    if (created) {
      t.pass('table succesfully created')
      await dropTable(conn, 'table_example')
      t.pass('table succesfully dropped')
      await dropDatabase(conn, 'table_example')
    }
  }
})
