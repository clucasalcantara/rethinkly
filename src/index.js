const connect = require('./connection')
const { retrieveData, insertData } = require('./transactions')

export default async dbConfig => connect(dbConfig)

export { insertData, retrieveData }
