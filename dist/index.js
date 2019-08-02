'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.transactions = exports['default'] = void 0

var _connection = _interopRequireDefault(require('./connection'))

var _transactions = require('./transactions')

var _database = require('./transactions/database')

var _table = require('./transactions/table')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  connect: function connect(dbConfig) {
    return (0, _connection['default'])(dbConfig)
  },
}
exports['default'] = _default
var transactions = {
  database: {
    create: _database.createDatabase,
    drop: _database.dropDatabase,
  },
  table: {
    create: _table.createTable,
  },
  data: {
    retrieveData: _transactions.retrieveData,
    insertData: _transactions.insertData,
  },
}
exports.transactions = transactions
//# sourceMappingURL=index.js.map
