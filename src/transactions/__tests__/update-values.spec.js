import test from 'ava'
import insertData from '../insert-data'
import updateValues from '../update-values'

import { createDatabase, dropDatabase, getConnection } from '../database'
import { createTable } from '../table'

test('[transactions]: should update a value properly', async t => {
  const conn = await getConnection()
  const dbCreated = await createDatabase(conn, 'update_example')
  if (dbCreated) {
    const tableCreated = await createTable(conn, 'update_example')
    if (tableCreated) {
      const result = await insertData(conn, 'update_example', { teste: 'fail' })
      if (result.generated_keys) {
        const updatedValue = await updateValues(conn, {
          tableName: 'update_example',
          keyValue: { teste: 'pass' },
        })

        if (updatedValue.replaced) {
          t.pass('A value was updated')
        }
      }
    }
  }

  await dropDatabase(conn, 'update_example')
})
