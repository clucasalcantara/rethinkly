const connect = require('./connection')
const retrieveData = require('./retrieve-data')

export default async dbConfig => connect(dbConfig)

export { retrieveData }
