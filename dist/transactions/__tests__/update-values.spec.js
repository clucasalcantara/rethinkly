"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ava = _interopRequireDefault(require("ava"));

var _insertData = _interopRequireDefault(require("../insert-data"));

var _updateValues = _interopRequireDefault(require("../update-values"));

var _database = require("../database");

var _table = require("../table");

(0, _ava["default"])('[transactions]: should update a value properly', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(t) {
    var conn, dbCreated, tableCreated, result, updatedValue;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.getConnection)();

          case 2:
            conn = _context.sent;
            _context.next = 5;
            return (0, _database.createDatabase)(conn, 'update_example');

          case 5:
            dbCreated = _context.sent;

            if (!dbCreated) {
              _context.next = 19;
              break;
            }

            _context.next = 9;
            return (0, _table.createTable)(conn, 'update_example');

          case 9:
            tableCreated = _context.sent;

            if (!tableCreated) {
              _context.next = 19;
              break;
            }

            _context.next = 13;
            return (0, _insertData["default"])(conn, 'update_example', {
              teste: 'fail'
            });

          case 13:
            result = _context.sent;

            if (!result.generated_keys) {
              _context.next = 19;
              break;
            }

            _context.next = 17;
            return (0, _updateValues["default"])(conn, {
              tableName: 'update_example',
              keyValue: {
                teste: 'pass'
              }
            });

          case 17:
            updatedValue = _context.sent;

            if (updatedValue.replaced) {
              t.pass('A value was updated');
            }

          case 19:
            _context.next = 21;
            return (0, _database.dropDatabase)(conn, 'update_example');

          case 21:
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
//# sourceMappingURL=update-values.spec.js.map