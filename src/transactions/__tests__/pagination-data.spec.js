import test from 'ava'
import { createDatabase, dropDatabase, getConnection } from '../database'
import { createTable, dropTable } from '../table'
import paginationData from '../pagination-data'
import insertData from '../insert-data'

const fakerData = [
  { teste: 'a pass' },
  { teste: 'b fail' },
  { teste: 'c lorem' },
  { teste: 'd ipsum' },
  { teste: 'e cat' },
  { teste: 'f dog' },
  { teste: 'g hades' },
  { teste: 'h nala' },
  { teste: 'i joe' }
]

test('[transactions]: should retrieve a data paginated', async t => {
  let databaseAndTableName = 'retrieve_paginated_example'

  const conn = await getConnection(databaseAndTableName)
  const dbCreated = await createDatabase(conn, databaseAndTableName)

  if (dbCreated) {
    await dropTable(conn, databaseAndTableName)
    const tableCreated = await createTable(conn, databaseAndTableName)

    if (tableCreated) {
      const result = await insertData(conn, databaseAndTableName, fakerData)

      if (result && result.generated_keys) {
        const page = 0;
        const pageSize = 3;

        const data = await paginationData(conn, databaseAndTableName, {page: page, pageSize: pageSize})

        if (data.length === pageSize) t.pass('Retrieve data with correct page size')
        if (data[0].teste === fakerData[0].teste) t.pass('Retrieve data with the expected content')
      }
    }
  }

  await dropDatabase(conn, databaseAndTableName)
})
