import test from 'ava'
import { getConnection } from '../transactions/database'

test('should have the right connection shape', async t => {
  const connection = getConnection()

  if (connection) {
    return t.pass('connected succesfully!')
  }

  t.fail('Unsuccessful connection')
})
