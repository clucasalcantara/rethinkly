import test from 'ava'
import { createDatabase, dropDatabase, getConnection } from '../database'
import { createTable } from '../table'
import insertData from '../insert-data'
import retrieveData from '../retrieve-data'

test('[transactions]: should retrieve a value properly', async t => {
  const conn = await getConnection()
  const dbCreated = await createDatabase(conn, 'retrieve_example')
  if (dbCreated) {
    const tableCreated = await createTable(conn, 'retrieve_example')
    if (tableCreated) {
      const result = await insertData(conn, 'retrieve_example', [{ teste: 'pass' }, { teste: 'fail' }])
      if (result && result.generated_keys) {
        const data = await retrieveData(conn, 'retrieve_example')

        if (data.length === 2) t.pass('Retrieve data with success')
      }
    }
  }

  await dropDatabase(conn, 'retrieve_example')
})
