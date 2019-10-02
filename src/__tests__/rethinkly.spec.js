import test from 'ava'
import Rethinkly, { data, table, database, createLink } from '../../dist'

test('[core structure]: should have a retrieve data function', t => {
  if (data.get) t.pass()
})

test('[core structure]: should have a insertData function', t => {
  if (data.insert) t.pass()
})

test('[core structure]: should have a createDatabase function', t => {
  if (database.create) t.pass()
})

test('[core structure]: should have a dropDatabase function', t => {
  if (database.drop) t.pass()
})

test('[core structure]: should have a createTable function', t => {
  if (table.create) t.pass()
})

test('[core structure]: should have a createLink function', t => {
  if (createLink) t.pass()
})

// TODO: Add specs to creatlink and assertions, for example
// create a new link and verify if the passed host was
// applied correclty
test('[core structure]: should create an instance', t => {
  if (Rethinkly) t.pass()
})
