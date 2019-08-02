import test from 'ava'
import createLink from '../../connection'
import { createDatabase, dropDatabase } from '../database'

const getConnection = async () =>
  createLink({
    host: '172.18.0.2',
    port: 28015,
    db: 'db_example',
  })

test('[transactions]: should create and drops a database properly', async t => {
  const conn = await getConnection()
  const created = createDatabase(conn, 'db_example')
  if (created) {
    t.pass('database succesfully created')
    const dropped = await dropDatabase(await getConnection(), 'db_example')
    if (dropped) {
      t.pass('database succesfully dropped')
    }
  }
})
