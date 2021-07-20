import test from 'ava'
import { createDatabase, dropDatabase, getConnection } from '../database'
import { createTable } from '../table'
import insertData from '../insert-data'

test('[transactions]: should inserts value properly', async t => {
  const conn = await getConnection()
  const dbCreated = await createDatabase(conn, 'insertion_example')
  if (dbCreated) {
    const tableCreated = await createTable(conn, 'insertion_example')
    if (tableCreated) {
      const result = await insertData(conn, 'insertion_example', { teste: 'pass' })
      if (result.generated_keys) {
        await dropDatabase(conn, 'insertion_example')
        t.pass('value inserted properly')
      }
    }
  }
})
