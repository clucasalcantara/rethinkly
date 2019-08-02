'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

var _rethinkdb = _interopRequireDefault(require('rethinkdb'))

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
 * Insert data
 * Grab data from database
 * @param {Object} connection
 * @param {String} tableName
 * @returns {Array||Object} results || result
 */
var _default =
  /*#__PURE__*/
  (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(connection, tableName, data) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                return _context.abrupt(
                  'return',
                  _rethinkdb['default']
                    .table(tableName)
                    .insert(data)
                    .run(connection)
                )

              case 1:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee)
      })
    )

    return function(_x, _x2, _x3) {
      return _ref.apply(this, arguments)
    }
  })()

exports['default'] = _default
//# sourceMappingURL=insert-data.js.map
