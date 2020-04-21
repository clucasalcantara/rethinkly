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
 * Retrieve data module
 * @memberof rethinkly
 */

/**
 * Delete data
 * Remove a record from the database
 * @param {Object} connection
 * @param {String} tableName
 * @param {String} id
 * @returns {Boolean} status
 */
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection, tableName) {
    var id,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _args.length > 2 && _args[2] !== undefined ? _args[2] : '';
            return _context.abrupt("return", id ? _rethinkdb["default"].table(tableName).get(id)["delete"]().run(connection).then(function (result) {
              _hoopaLogger["default"].info("Deleting the record: ".concat(id));

              return result;
            }) : _hoopaLogger["default"].error("You should provide an id to delete a record"));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;
//# sourceMappingURL=delete-data.js.map