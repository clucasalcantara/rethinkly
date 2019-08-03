import test from 'ava'
import createLink from '../connection'

test('should have the right connection shape', async t => {
  const connection = await createLink({
    host: process.env.ENV === 'mock' ? '172.18.0.2' : 'localhost',
    port: '28015',
    db: 'rethinkly_example',
  })

  if (connection) {
    return t.pass('connected succesfully!')
  }

  t.fail('Unsuccessful connection')
})
