import test from 'ava'
import { createDatabase, dropDatabase, checkForExistence, listAll, getConnection } from '../database'

test('[database]: should create and drops a database properly', async t => {
  const conn = await getConnection()
  await createDatabase(conn, 'db_example')

  const isCreated = checkForExistence(conn, 'db_example')
  if (isCreated) {
    t.pass('database succesfully created')
    const dropped = await dropDatabase(await getConnection(), 'db_example')
    if (dropped) {
      t.pass('database succesfully dropped')
    }
  }
})

test('[database]: should list all databases', async t => {
  const conn = await getConnection()
  createDatabase(conn, 'list_example')
  const dbList = await listAll(conn)
  await dropDatabase(await getConnection(), 'list_example')

  if (dbList) t.pass('Databases listed')
})
