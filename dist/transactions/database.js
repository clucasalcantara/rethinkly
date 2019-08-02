'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.dropDatabase = exports.createDatabase = void 0

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
 * Creates a database
 * @param {Object} connection
 * @param {String} dbName
 * @param {Function} done
 */
var createDatabase =
  /*#__PURE__*/
  (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(connection, dbName, done) {
        var databaseList, dbAlreadyExists, result
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2
                return _rethinkdb['default'].dbList().run(connection)

              case 2:
                databaseList = _context.sent
                dbAlreadyExists = databaseList.find(function(db) {
                  return db === dbName
                })

                if (!dbAlreadyExists) {
                  _context.next = 7
                  break
                }

                _context.next = 7
                return _rethinkdb['default'].dbDrop(dbName).run(connection, done)

              case 7:
                _context.next = 9
                return _rethinkdb['default'].dbCreate(dbName).run(connection, done)

              case 9:
                result = _context.sent

                if (!result.dbs_created) {
                  _context.next = 13
                  break
                }

                _hoopaLogger['default'].info('db '.concat(dbName, ' created successfully!'))

                return _context.abrupt('return', true)

              case 13:
                return _context.abrupt('return', false)

              case 14:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee)
      })
    )

    return function createDatabase(_x, _x2, _x3) {
      return _ref.apply(this, arguments)
    }
  })()
/**
 * Drops a database
 * @param {Object} connection
 * @param {String} dbName
 * @param {Function} done
 */

exports.createDatabase = createDatabase

var dropDatabase =
  /*#__PURE__*/
  (function() {
    var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(connection, dbName, done) {
        var databaseList, dbAlreadyExists, result
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.next = 2
                return _rethinkdb['default'].dbList().run(connection)

              case 2:
                databaseList = _context2.sent
                dbAlreadyExists = databaseList.find(function(db) {
                  return db === dbName
                })

                if (!dbAlreadyExists) {
                  _context2.next = 11
                  break
                }

                _context2.next = 7
                return _rethinkdb['default'].dbDrop(dbName).run(connection, done)

              case 7:
                result = _context2.sent

                if (!result.dbs_droped) {
                  _context2.next = 11
                  break
                }

                _hoopaLogger['default'].info('db '.concat(dbName, ' dropped'))

                return _context2.abrupt('return', true)

              case 11:
                _hoopaLogger['default'].warn('db '.concat(dbName, ' does not exists!'))

                return _context2.abrupt('return', false)

              case 13:
              case 'end':
                return _context2.stop()
            }
          }
        }, _callee2)
      })
    )

    return function dropDatabase(_x4, _x5, _x6) {
      return _ref2.apply(this, arguments)
    }
  })()

exports.dropDatabase = dropDatabase
//# sourceMappingURL=database.js.map
