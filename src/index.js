const rethinkdb = require('rethinkdb')

const connect = require('./connection')
const retrieveData = require('./retrieve-data')

export default async (dbConfig) => await connect(dbConfig)

export {
  retrieveData
}