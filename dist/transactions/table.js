'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.createTable = void 0

var _rethinkdb = _interopRequireDefault(require('rethinkdb'))

var _hoopaLogger = _interopRequireDefault(require('hoopa-logger'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg)
    var value = info.value
  } catch (error) {
    reject(error)
    return
  }
  if (info.done) {
    resolve(value)
  } else {
    Promise.resolve(value).then(_next, _throw)
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args)
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value)
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err)
      }
      _next(undefined)
    })
  }
}

/**
 * Creates a table
 * @param {Object} connection
 * @param {String} dbName
 * @param {Function} done
 */
var createTable =
  /*#__PURE__*/
  (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(connection, tableName, done) {
        var tableList, tableAlreadyExists
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2
                return _rethinkdb['default'].tableList().run(connection)

              case 2:
                tableList = _context.sent
                tableAlreadyExists = tableList.find(function(table) {
                  return table === tableName
                })

                if (!tableAlreadyExists) {
                  _context.next = 6
                  break
                }

                return _context.abrupt(
                  'return',
                  _hoopaLogger['default'].warn('table '.concat(tableName, ' already exists, skipping!'))
                )

              case 6:
                _context.next = 8
                return _rethinkdb['default'].tableCreate(tableName).run(connection, done)

              case 8:
                return _context.abrupt(
                  'return',
                  _hoopaLogger['default'].info('table '.concat(tableName, ' created successfully!'))
                )

              case 9:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee)
      })
    )

    return function createTable(_x, _x2, _x3) {
      return _ref.apply(this, arguments)
    }
  })()

exports.createTable = createTable
//# sourceMappingURL=table.js.map
