"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ava = _interopRequireDefault(require("ava"));

var _database = require("../database");

var _table = require("../table");

var _insertData = _interopRequireDefault(require("../insert-data"));

var _deleteData = _interopRequireDefault(require("../delete-data"));

/* eslint-disable camelcase */
(0, _ava["default"])('[transactions]: should delete a value properly', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(t) {
    var conn, dbCreated, tableCreated, _yield$insertData, _yield$insertData$gen, generated_keys, _yield$deleteData, errors;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.getConnection)();

          case 2:
            conn = _context.sent;
            _context.next = 5;
            return (0, _database.createDatabase)(conn, 'deletion_example');

          case 5:
            dbCreated = _context.sent;

            if (!dbCreated) {
              _context.next = 22;
              break;
            }

            _context.next = 9;
            return (0, _table.createTable)(conn, 'deletion_example');

          case 9:
            tableCreated = _context.sent;

            if (!tableCreated) {
              _context.next = 22;
              break;
            }

            _context.next = 13;
            return (0, _insertData["default"])(conn, 'deletion_example', {
              teste: 'pass'
            });

          case 13:
            _yield$insertData = _context.sent;
            _yield$insertData$gen = _yield$insertData.generated_keys;
            generated_keys = _yield$insertData$gen === void 0 ? [] : _yield$insertData$gen;

            if (!(generated_keys.length > 0)) {
              _context.next = 22;
              break;
            }

            _context.next = 19;
            return (0, _deleteData["default"])(conn, 'deletion_example', generated_keys[0]);

          case 19:
            _yield$deleteData = _context.sent;
            errors = _yield$deleteData.errors;

            if (!errors) {
              t.pass("Record ".concat(generated_keys[0], " deleted successfully"));
            }

          case 22:
            _context.next = 24;
            return (0, _database.dropDatabase)(conn, 'deletion_example');

          case 24:
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
/* eslint-enable camelcase */
//# sourceMappingURL=delete-data.spec.js.map