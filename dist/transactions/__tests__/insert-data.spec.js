'use strict'

var _ava = _interopRequireDefault(require('ava'))

var _connection = _interopRequireDefault(require('../../connection'))

var _database = require('../database')

var _table = require('../table')

var _insertData = _interopRequireDefault(require('../insert-data'))

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

var getConnection =
  /*#__PURE__*/
  (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                return _context.abrupt(
                  'return',
                  (0, _connection['default'])({
                    host: process.env.ENV === 'mock' ? '172.18.0.2' : 'localhost',
                    port: '28015',
                    db: 'insertion_example',
                  })
                )

              case 1:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee)
      })
    )

    return function getConnection() {
      return _ref.apply(this, arguments)
    }
  })()

;(0, _ava['default'])(
  '[transactions]: should inserts value properly',
  /*#__PURE__*/
  (function() {
    var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(t) {
        var conn, dbCreated, tableCreated, result
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.next = 2
                return getConnection()

              case 2:
                conn = _context2.sent
                _context2.next = 5
                return (0, _database.createDatabase)(conn, 'insertion_example')

              case 5:
                dbCreated = _context2.sent

                if (!dbCreated) {
                  _context2.next = 15
                  break
                }

                _context2.next = 9
                return (0, _table.createTable)(conn, 'insertion_example')

              case 9:
                tableCreated = _context2.sent

                if (!tableCreated) {
                  _context2.next = 15
                  break
                }

                _context2.next = 13
                return (0, _insertData['default'])(conn, 'insertion_example', {
                  teste: 'pass',
                })

              case 13:
                result = _context2.sent

                if (result.generated_keys) {
                  t.pass('value inserted properly')
                }

              case 15:
                _context2.next = 17
                return (0, _database.dropDatabase)(conn, 'insertion_example')

              case 17:
              case 'end':
                return _context2.stop()
            }
          }
        }, _callee2)
      })
    )

    return function(_x) {
      return _ref2.apply(this, arguments)
    }
  })()
)
//# sourceMappingURL=insert-data.spec.js.map
