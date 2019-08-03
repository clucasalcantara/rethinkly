import test from 'ava'
import createLink from '../../connection'
import { createDatabase, dropDatabase } from '../database'
import { createTable } from '../table'
import insertData from '../insert-data'

const getConnection = async () =>
  createLink({
    host: process.env.ENV === 'mock' ? '172.18.0.2' : 'localhost',
    port: '28015',
    db: 'insertion_example',
  })

test('[transactions]: should inserts value properly', async t => {
  const conn = await getConnection()
  const dbCreated = await createDatabase(conn, 'insertion_example')
  if (dbCreated) {
    const tableCreated = await createTable(conn, 'insertion_example')
    if (tableCreated) {
      const result = await insertData(conn, 'insertion_example', { teste: 'pass' })
      if (result.generated_keys) {
        t.pass('value inserted properly')
      }
    }
  }

  await dropDatabase(conn, 'insertion_example')
})
