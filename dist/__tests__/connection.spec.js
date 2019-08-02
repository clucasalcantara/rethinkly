'use strict'

var _ava = _interopRequireDefault(require('ava'))

var _connection = _interopRequireDefault(require('../connection'))

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

;(0, _ava['default'])(
  'should have the right connection shape',
  /*#__PURE__*/
  (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(t) {
        var connection
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2
                return (0, _connection['default'])({
                  host: 'localhost',
                  port: 28015,
                  db: 'rethinkly_example',
                })

              case 2:
                connection = _context.sent

                if (!connection) {
                  _context.next = 5
                  break
                }

                return _context.abrupt('return', t.pass('connected succesfully!'))

              case 5:
                t.fail('Unsuccessful connection')

              case 6:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee)
      })
    )

    return function(_x) {
      return _ref.apply(this, arguments)
    }
  })()
)
//# sourceMappingURL=connection.spec.js.map
