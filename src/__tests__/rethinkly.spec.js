import test from 'ava'
import Rethinkly, { retrieveData, insertData, createDatabase, dropDatabase, createTable, createLink } from '..'

test('[core structure]: should have a retrieve data function', t => {
  if (retrieveData) t.pass()
})

test('[core structure]: should have a insertData function', t => {
  if (insertData) t.pass()
})

test('[core structure]: should have a createDatabase function', t => {
  if (createDatabase) t.pass()
})

test('[core structure]: should have a dropDatabase function', t => {
  if (dropDatabase) t.pass()
})

test('[core structure]: should have a createTable function', t => {
  if (createTable) t.pass()
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
