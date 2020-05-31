import test from 'ava'
// Resources
import createLink from '../../connection'
import { seed } from '../seed'
import { dropDatabase, checkForExistence } from '../database'

const seedInfo = {
  connection: {
    host: process.env.ENV === 'mock' ? '172.18.0.2' : 'localhost',
    port: '28015',
  },
  database: 'seed_example',
  tables: ['table1', 'table2', 'table3'],
}

test('should seed a database structure properly', async t => {
  const conn = await createLink({
    host: process.env.ENV === 'mock' ? '172.18.0.2' : 'localhost',
    port: '28015',
  })

  await seed(seedInfo)

  const dbSown = await checkForExistence(conn, seedInfo.database)
  if (dbSown) {
    dropDatabase(conn, seedInfo.database)
    t.pass(`${seedInfo.database} sown successfully!`)
  }
})
