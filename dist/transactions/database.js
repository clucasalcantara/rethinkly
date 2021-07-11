"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listAll = exports.checkForExistence = exports.dropDatabase = exports.createDatabase = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _rethinkdb = _interopRequireDefault(require("rethinkdb"));

var _hoopaLogger = _interopRequireDefault(require("hoopa-logger"));

/**
 * Database controls
 * @memberof rethinkly
 */

/**
 * Creates a database
 * @param {Object} connection
 * @param {String} dbName
 * @param {Function} done
 */
var createDatabase = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection, dbName, done) {
    var databaseList, dbAlreadyExists, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _rethinkdb["default"].dbList().run(connection);

          case 2:
            databaseList = _context.sent;
            dbAlreadyExists = databaseList.find(function (db) {
              return db === dbName;
            });

            if (!dbAlreadyExists) {
              _context.next = 7;
              break;
            }

            _context.next = 7;
            return _rethinkdb["default"].dbDrop(dbName).run(connection, done);

          case 7:
            _context.next = 9;
            return _rethinkdb["default"].dbCreate(dbName).run(connection, done);

          case 9:
            result = _context.sent;

            if (!result.dbs_created) {
              _context.next = 13;
              break;
            }

            _hoopaLogger["default"].info("db ".concat(dbName, " created successfully!"));

            return _context.abrupt("return", true);

          case 13:
            return _context.abrupt("return", false);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createDatabase(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Drops a database
 * @param {Object} connection
 * @param {String} dbName
 * @param {Function} done
 */


exports.createDatabase = createDatabase;

var dropDatabase = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(connection, dbName, done) {
    var databaseList, dbAlreadyExists, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _rethinkdb["default"].dbList().run(connection);

          case 2:
            databaseList = _context2.sent;
            dbAlreadyExists = databaseList.find(function (db) {
              return db === dbName;
            });

            if (!dbAlreadyExists) {
              _context2.next = 11;
              break;
            }

            _context2.next = 7;
            return _rethinkdb["default"].dbDrop(dbName).run(connection, done);

          case 7:
            result = _context2.sent;

            if (!result.dbs_droped) {
              _context2.next = 11;
              break;
            }

            _hoopaLogger["default"].info("db ".concat(dbName, " dropped"));

            return _context2.abrupt("return", true);

          case 11:
            _hoopaLogger["default"].warn("db ".concat(dbName, " does not exists!"));

            return _context2.abrupt("return", false);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function dropDatabase(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Check is a database exist into the server
 * @param {Object} connection
 * @param {String} dbName
 * @param {Function} done
 */


exports.dropDatabase = dropDatabase;

var checkForExistence = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(connection, dbName) {
    var databaseList, dbAlreadyExists;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _rethinkdb["default"].dbList().run(connection);

          case 2:
            databaseList = _context3.sent;
            dbAlreadyExists = databaseList.find(function (db) {
              return db === dbName;
            });

            if (!dbAlreadyExists) {
              _context3.next = 7;
              break;
            }

            _hoopaLogger["default"].info("DB ".concat(dbName, " already exists"));

            return _context3.abrupt("return", true);

          case 7:
            _hoopaLogger["default"].warn("DB ".concat(dbName, " does not exists!"));

            return _context3.abrupt("return", false);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function checkForExistence(_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Return databases list
 * @param {Object} connection
 * @param {String} dbName
 * @param {Function} done
 */


exports.checkForExistence = checkForExistence;

var listAll = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(connection) {
    var databaseList;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _rethinkdb["default"].dbList().run(connection);

          case 2:
            databaseList = _context4.sent;

            if (!(databaseList.length > 0)) {
              _context4.next = 6;
              break;
            }

            _hoopaLogger["default"].info("".concat(databaseList.length, " listed"));

            return _context4.abrupt("return", databaseList);

          case 6:
            _hoopaLogger["default"].warn("No existent databases");

            return _context4.abrupt("return", []);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function listAll(_x9) {
    return _ref4.apply(this, arguments);
  };
}();

exports.listAll = listAll;
//# sourceMappingURL=database.js.map