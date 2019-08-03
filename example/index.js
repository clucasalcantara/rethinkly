import Rethinkly, { transactions } from '..'

const test = async () => {
  const connection = await Rethinkly.connect({
    host: process.env.ENV === 'mock' ? '172.18.0.2' : 'localhost',
    port: '28015',
    db: 'rethinkly_example',
  })

  const data = await transactions.data.retrieveData(connection, 'simple_table')
  console.log(data)
}

test()
