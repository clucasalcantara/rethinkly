'use strict'

var _ava = _interopRequireDefault(require('ava'))

var _connection = _interopRequireDefault(require('../../connection'))

var _database = require('../database')

var _table = require('../table')

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
                    host: 'localhost',
                    port: 28015,
                    db: 'table_example',
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
  'should create a table properly',
  /*#__PURE__*/
  (function() {
    var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(t) {
        var conn, result, created
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.next = 2
                return getConnection()

              case 2:
                conn = _context2.sent
                _context2.t0 = _database.createDatabase
                _context2.next = 6
                return getConnection()

              case 6:
                _context2.t1 = _context2.sent
                _context2.next = 9
                return (0, _context2.t0)(_context2.t1, 'table_example')

              case 9:
                result = _context2.sent

                if (!result) {
                  _context2.next = 15
                  break
                }

                _context2.next = 13
                return (0, _table.createTable)(conn, 'table_example')

              case 13:
                created = _context2.sent

                if (created) {
                  t.pass('table succesfully created')
                  ;(0, _database.dropDatabase)(conn, 'table_example')
                }

              case 15:
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
//# sourceMappingURL=table.spec.js.map
