"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ava = _interopRequireDefault(require("ava"));

var _database = require("../database");

var _table = require("../table");

(0, _ava["default"])('should create and drop a table properly', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(t) {
    var conn, result, created;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.getConnection)();

          case 2:
            conn = _context.sent;
            _context.next = 5;
            return (0, _database.createDatabase)(conn, 'table_example');

          case 5:
            result = _context.sent;

            if (!result) {
              _context.next = 17;
              break;
            }

            _context.next = 9;
            return (0, _table.createTable)(conn, 'table_example');

          case 9:
            created = _context.sent;

            if (!created) {
              _context.next = 17;
              break;
            }

            t.pass('table succesfully created');
            _context.next = 14;
            return (0, _table.dropTable)(conn, 'table_example');

          case 14:
            t.pass('table succesfully dropped');
            _context.next = 17;
            return (0, _database.dropDatabase)(conn, 'table_example');

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
//# sourceMappingURL=table.spec.js.map