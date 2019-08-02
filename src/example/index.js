import Rethinkly, { retrieveData } from '..'

const test = async () => {
  const connection = await Rethinkly.connect({
    host: 'localhost',
    port: 28015,
    db: 'brian',
  })

  const data = await retrieveData(connection, 'config')
  const data2 = await retrieveData(connection, 'people')

  console.log(data)
  console.log(data2)
}

test()
