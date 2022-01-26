"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ava = _interopRequireDefault(require("ava"));

var _database = require("../database");

var _table = require("../table");

var _insertData = _interopRequireDefault(require("../insert-data"));

(0, _ava["default"])('[transactions]: should inserts value properly', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(t) {
    var conn, dbCreated, tableCreated, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.getConnection)();

          case 2:
            conn = _context.sent;
            _context.next = 5;
            return (0, _database.createDatabase)(conn, 'insertion_example');

          case 5:
            dbCreated = _context.sent;

            if (!dbCreated) {
              _context.next = 18;
              break;
            }

            _context.next = 9;
            return (0, _table.createTable)(conn, 'insertion_example');

          case 9:
            tableCreated = _context.sent;

            if (!tableCreated) {
              _context.next = 18;
              break;
            }

            _context.next = 13;
            return (0, _insertData["default"])(conn, 'insertion_example', {
              teste: 'pass'
            });

          case 13:
            result = _context.sent;

            if (!result.generated_keys) {
              _context.next = 18;
              break;
            }

            _context.next = 17;
            return (0, _database.dropDatabase)(conn, 'insertion_example');

          case 17:
            t.pass('value inserted properly');

          case 18:
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
//# sourceMappingURL=insert-data.spec.js.map