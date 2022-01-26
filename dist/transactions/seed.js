"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seed = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _hoopaLogger = _interopRequireDefault(require("hoopa-logger"));

var _connection = _interopRequireDefault(require("../connection"));

var _database = require("./database");

var _table = require("./table");

// Resources

/**
 * Seed a database structure
 * @typedef {SeedInfo}
 * @property {object} connection { {string} host, {string} port  }
 * @property {string} database ex: 'seed_example'
 * @property {array} tables ex: ['table1'],
 * @param dbConfig
 */
var seed = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(dbConfig) {
    var database, tables, conn;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            database = dbConfig.database, tables = dbConfig.tables;
            _context2.next = 3;
            return (0, _database.getConnection)(database);

          case 3:
            conn = _context2.sent;

            if (!(!database || !tables)) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", _hoopaLogger["default"].error("Error seedling, malformed configuration scheme"));

          case 6:
            _hoopaLogger["default"].info('Connection stablished successfully!');

            _context2.prev = 7;
            _context2.next = 10;
            return (0, _database.createDatabase)(conn, database);

          case 10:
            _hoopaLogger["default"].info("".concat(database, " created successfully!"));

            tables.map( /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(table) {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0, _table.createTable)(conn, table);

                      case 2:
                        _hoopaLogger["default"].info("".concat(table, " created successfully!"));

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](7);

            _hoopaLogger["default"].error("Error while seedling ".concat(_context2.t0));

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[7, 14]]);
  }));

  return function seed(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.seed = seed;
//# sourceMappingURL=seed.js.map