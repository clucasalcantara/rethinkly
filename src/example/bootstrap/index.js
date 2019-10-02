/**
 * Rethinkly example bootstraper
 * @memberof rethinkly
 * Made to show a few usage of rethink and also to create the teste suite database
 */
import logger from 'hoopa-logger'
import { data, table, database, createLink } from '../../../dist'

/**
 * Run
 * Runs the bootstraper
 * @returns void
 */
const run = async () => {
  const db = 'rethinkly_example'
  const connection = await createLink({
    host: process.env.ENV === 'mock' ? '172.18.0.2' : 'localhost',
    port: '28015',
    db,
  })

  await database.create(connection, db)
  await table.create(connection, 'simple_table')
  await data.insert(connection, 'simple_table', [
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
