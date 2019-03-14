<p align="center">
	<img src="https://deepstreamhub.com/open-source/integrations/db-rethinkdb/deepstream-rethinkdb.png" width="200px"/>
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width="200px"/>

</p>

# Rethinkly 🚀
[![Maintainability](https://api.codeclimate.com/v1/badges/171166ddf3def955c383/maintainability)](https://codeclimate.com/github/clucasalcantara/rethinkly/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/171166ddf3def955c383/test_coverage)](https://codeclimate.com/github/clucasalcantara/rethinkly/test_coverage)
#### 👷 Work in progress 🚧

A carefuly created set of bindings to present an easy way to retrieve data from RethinkDB instances. 

Rethinkly is a collection of methods to make more literal and legible gathering data from rethink into JavaScript applications. Supports node and browser.

Rethink. Again.

#### Installation
```
- $ yarn add rethinkly
- $ npm i rethinkly --save
```

#### Available methods:
- rethinkly
- retrieveData

#### Usage
```javascript
import rethinkly from 'rethinkly'

const dbConfig = {
	host: 'localhost',
	port: 32769,
	db: 'the_database'
};

const instance = rethinkly(dbConfig);
```
### API

##### `retrieveData`
- Method to get a list or a specific value from a table.

#### Params:
- connection: object
- tableName: string
- id?: string

#### Example
```javascript
const rethinkly = require('rethinkly')
const instance = rethinkly(dbConfig)
// Select your database
instance.selectDB('rethinkly');

// Get your data as list
const users = instance.retrieveData('users')
/** output 
[
    {
        id: 'a3bbd8e3-b53f-4ecd-bab9-6c65cfcf931b',
        name: 'Caio Alcantara',
        nickname: 'caio',
        role: '99bd6af9-922e-4787-a97d-3d915f60e65b'
    }
]
*/


/**
* Match your results using where clause
*/
const users = instance.retrieveData('users', { role: '99bd6af9-922e-4787-a97d-3d915f60e65b' })
/**

* Implicit byId
*/
const users = instance.retrieveData('users', 'a3bbd8e3-b53f-4ecd-bab9-6c65cfcf931b')

/** output 
[
    {
        id: 'a3bbd8e3-b53f-4ecd-bab9-6c65cfcf931b',
        name: 'Caio Alcantara',
        nickname: 'caio',
        role: '99bd6af9-922e-4787-a97d-3d915f60e65b'
    }
]
*/
```
