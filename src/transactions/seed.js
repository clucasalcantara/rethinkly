import logger from 'hoopa-logger'
// Resources
import createLink from '../connection'
import { createDatabase, getConnection } from './database'
import { createTable } from './table'

/**
 * Seed a database structure
 * @typedef {SeedInfo}
 * @property {object} connection { {string} host, {string} port  }
 * @property {string} database ex: 'seed_example'
 * @property {array} tables ex: ['table1'],
 * @param dbConfig
 */
export const seed = async dbConfig => {
  const { database, tables } = dbConfig
  const conn = getConnection()

  if (!database || !tables) {
    return logger.error(`Error seedling, malformed configuration scheme`)
  }

  logger.info('Connection stablished successfully!')

  try {
    await createDatabase(conn, database)
    logger.info(`${database} created successfully!`)
    const contextualConnection = await createLink({ ...connection, db: database })
    tables.map(async table => {
      await createTable(contextualConnection, table)
      logger.info(`${table} created successfully!`)
    })
  } catch (error) {
    logger.error(`Error while seedling ${error}`)
  }
}
