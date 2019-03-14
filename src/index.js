const rethinkdb = require('rethinkdb')
const connect = require('./connection')
const retrieveData = require('./retrieveData')

export default async (dbConfig) => await connect(dbConfig)

export {
    retrieveData
}