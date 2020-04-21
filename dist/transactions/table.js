"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTable = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _rethinkdb = _interopRequireDefault(require("rethinkdb"));

var _hoopaLogger = _interopRequireDefault(require("hoopa-logger"));

/**
 * Table controls
 * @memberof rethinkly
 */

/**
 * Creates a table
 * @param {Object} connection
 * @param {String} dbName
 * @param {Function} done
 */
var createTable = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection, tableName, done) {
    var tableList, tableAlreadyExists;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _rethinkdb["default"].tableList().run(connection);

          case 2:
            tableList = _context.sent;
            tableAlreadyExists = tableList.find(function (table) {
              return table === tableName;
            });

            if (!tableAlreadyExists) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", _hoopaLogger["default"].warn("table ".concat(tableName, " already exists, skipping!")));

          case 6:
            _context.next = 8;
            return _rethinkdb["default"].tableCreate(tableName).run(connection, done);

          case 8:
            return _context.abrupt("return", _hoopaLogger["default"].info("table ".concat(tableName, " created successfully!")));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createTable(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.createTable = createTable;
//# sourceMappingURL=table.js.map