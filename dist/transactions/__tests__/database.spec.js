'use strict'

var _ava = _interopRequireDefault(require('ava'))

var _connection = _interopRequireDefault(require('../../connection'))

var _database = require('../database')

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
                    db: 'db_example',
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
  '[transactions]: should create and drops a database properly',
  /*#__PURE__*/
  (function() {
    var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(t) {
        var conn, created, dropped
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.next = 2
                return getConnection()

              case 2:
                conn = _context2.sent
                created = (0, _database.createDatabase)(conn, 'db_example')

                if (!created) {
                  _context2.next = 14
                  break
                }

                t.pass('database succesfully created')
                _context2.t0 = _database.dropDatabase
                _context2.next = 9
                return getConnection()

              case 9:
                _context2.t1 = _context2.sent
                _context2.next = 12
                return (0, _context2.t0)(_context2.t1, 'db_example')

              case 12:
                dropped = _context2.sent

                if (dropped) {
                  t.pass('database succesfully dropped')
                }

              case 14:
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
//# sourceMappingURL=database.spec.js.map
