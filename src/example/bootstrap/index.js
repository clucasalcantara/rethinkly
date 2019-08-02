/**
 * Rethinkly example bootstraper
 * @memberof rethinkly
 * Made to show a few usage of rethink and also to create the teste suite database
 */
import logger from 'hoopa-logger'
import Rethinkly, { transactions } from '../..'

/**
 * Run
 * Runs the bootstraper
 * @returns void
 */
const run = async () => {
  const db = 'rethinkly_example'
  const connection = await Rethinkly.connect({
    host: 'localhost',
    port: 28015,
    db,
  })

  await transactions.database.create(connection, db)
  await transactions.table.create(connection, 'simple_table')
  await transactions.data.insertData(connection, 'simple_table', [
    { data: 'Dummy Jhon' },
    { data: 'Dummy Jeff' },
    { data: 'Dummy Albert' },
    { data: 'Dummy Crazy' },
    { data: 'Dummy Logan' },
    { data: 'Dummy Links' },
    { data: 'Dummy Joao' },
    { data: 'Dummy Joseph' },
    { data: 'Dummy Jizz' },
    { data: 'Dummy Jah' },
  ])
  logger.info(`Bootstrap ended.`)

  /* eslint-disable unicorn/no-process-exit */
  process.exit(0)
}

/* eslint-enable */
run()
