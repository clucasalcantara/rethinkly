import createLink from './connection'
import { retrieveData, insertData } from './transactions'

export default {
  connect: dbConfig => createLink(dbConfig),
}

export { insertData, retrieveData }
