import test from 'ava'
import createLink from '../../connection'
import { createDatabase, dropDatabase } from '../database'
import { createTable, dropTable } from '../table'

const getConnection = async () =>
  createLink({
    host: process.env.ENV === 'mock' ? '172.18.0.2' : 'localhost',
    port: '28015',
    db: 'table_example',
  })

test('should create and drop a table properly', async t => {
  const conn = await getConnection()
  const result = await createDatabase(await getConnection(), 'table_example')

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
