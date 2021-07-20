import test from 'ava'
import { createDatabase, dropDatabase, getConnection } from '../database'
import { createTable } from '../table'
import insertData from '../insert-data'
import deleteData from '../delete-data'

/* eslint-disable camelcase */
test('[transactions]: should delete a value properly', async t => {
  const conn = await getConnection()
  const dbCreated = await createDatabase(conn, 'deletion_example')
  if (dbCreated) {
    const tableCreated = await createTable(conn, 'deletion_example')
    if (tableCreated) {
      const { generated_keys = [] } = await insertData(conn, 'deletion_example', { teste: 'pass' })
      if (generated_keys.length > 0) {
        const { errors } = await deleteData(conn, 'deletion_example', generated_keys[0])
        if (!errors) {
          t.pass(`Record ${generated_keys[0]} deleted successfully`)
        }
      }
    }
  }

  await dropDatabase(conn, 'deletion_example')
})
/* eslint-enable camelcase */
