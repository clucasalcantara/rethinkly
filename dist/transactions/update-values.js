"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _hoopaLogger = _interopRequireDefault(require("hoopa-logger"));

var _rethinkdb = _interopRequireDefault(require("rethinkdb"));

/**
 * Update values from a table
 * @memberof rethinkly
 */

/**
 * Update values
 * Update a key value scheme from
 * on table
 * @param {Object} connection
 * @param {Object} updateData - The update config object
 */
var _default = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection, _ref) {
    var tableName, record, keyValue, _result, result;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tableName = _ref.tableName, record = _ref.record, keyValue = _ref.keyValue;

            if (!record) {
              _context.next = 7;
              break;
            }

            _hoopaLogger["default"].info("Updating ".concat(tableName, ", setting ").concat(keyValue, " on record ").concat(record));

            _context.next = 5;
            return _rethinkdb["default"].table(tableName).get(record).update(keyValue).run(connection);

          case 5:
            _result = _context.sent;
            return _context.abrupt("return", _result);

          case 7:
            _hoopaLogger["default"].info("Updating ".concat(tableName, ", setting ").concat(JSON.stringify(keyValue)));

            _context.next = 10;
            return _rethinkdb["default"].table(tableName).update(keyValue).run(connection);

          case 10:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;
//# sourceMappingURL=update-values.js.map