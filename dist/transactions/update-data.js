"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _rethinkdb = _interopRequireDefault(require("rethinkdb"));

var _hoopaLogger = _interopRequireDefault(require("hoopa-logger"));

/**
 * Update data module
 * @memberof rethinkly
 */

/**
 * Update data
 * Updates a record from the database
 * @param {Object} connection
 * @param {String} tableName
 * @param {String} id
 * @param {Object} values
 * @returns {Boolean} status
 */
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection, tableName, id, values) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", id ? _rethinkdb["default"].table(tableName).get(id).update(values).run(connection).then(function (result) {
              _hoopaLogger["default"].info("Record updated: ".concat(id));

              return result;
            }) : _hoopaLogger["default"].error("You should provide an id to update a record"));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;
//# sourceMappingURL=update-data.js.map