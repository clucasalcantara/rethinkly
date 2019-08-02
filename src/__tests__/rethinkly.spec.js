import test from 'ava'
import connect, { transactions } from '..'

test('[core structure]: should run on mock env for testing', t => {
  if (process.env.ENV === 'mock') t.pass()
})

test('[core structure]: should have a retrieve data function', t => {
  if (transactions.data.retrieveData) t.pass()
})

test('[core structure]: should have a insert data function', t => {
  if (transactions.data.insertData) t.pass()
})

test('[core structure]: should have a default instance with a connect method', t => {
  if (connect) t.pass()
})
