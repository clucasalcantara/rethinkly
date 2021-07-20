import test from 'ava'
// Resources
import { seed } from '../seed'
import { dropDatabase, checkForExistence, getConnection } from '../database'

const seedInfo = {
  database: 'seed_example',
  tables: ['table1', 'table2', 'table3'],
}

test('should seed a database structure properly', async t => {
  const conn = await getConnection(seedInfo.database)

  await seed(seedInfo)

  const dbSown = await checkForExistence(conn, seedInfo.database)
  if (dbSown) {
    await dropDatabase(conn, seedInfo.database)
    t.pass(`${seedInfo.database} sown successfully!`)
  }
})
