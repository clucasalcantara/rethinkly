import Rethinkly, { retrieveData } from '..'

const test = async () => {
  const connection = await Rethinkly.connect({
    host: 'localhost',
    port: 28015,
    db: 'rethinkly_example',
  })

  const data = await retrieveData(connection, 'simple_table')

  console.log(data)
}

test()
