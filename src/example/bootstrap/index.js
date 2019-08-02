import logger from 'hoopa-logger'
import Rethinkly, { insertData } from '../..'
import { createDatabase, createTable } from '../../transactions/creation'

const run = async () => {
  const db = 'rethinkly_example'
  const connection = await Rethinkly.connect({
    host: 'localhost',
    port: 28015,
    db,
  })

  await createDatabase(connection, db)
  await createTable(connection, 'simple_table')
  await insertData(connection, 'simple_table', [
    { data: 'Dummy' },
    { data: 'Dummy' },
    { data: 'Dummy' },
    { data: 'Dummy' },
    { data: 'Dummy' },
    { data: 'Dummy' },
    { data: 'Dummy' },
    { data: 'Dummy' },
    { data: 'Dummy' },
    { data: 'Dummy' },
    { data: 'Dummy' },
  ])
  logger.info(`Bootstrap ended.`)
}

run()
