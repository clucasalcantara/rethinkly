"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ava = _interopRequireDefault(require("ava"));

var _database = require("../database");

var _table = require("../table");

var _insertData = _interopRequireDefault(require("../insert-data"));

var _retrieveData = _interopRequireDefault(require("../retrieve-data"));

(0, _ava["default"])('[transactions]: should retrieve a value properly', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(t) {
    var conn, dbCreated, tableCreated, result, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.getConnection)('retrieve_example');

          case 2:
            conn = _context.sent;
            _context.next = 5;
            return (0, _database.createDatabase)(conn, 'retrieve_example');

          case 5:
            dbCreated = _context.sent;

            if (!dbCreated) {
              _context.next = 21;
              break;
            }

            _context.next = 9;
            return (0, _table.dropTable)(conn, 'retrieve_example');

          case 9:
            _context.next = 11;
            return (0, _table.createTable)(conn, 'retrieve_example');

          case 11:
            tableCreated = _context.sent;

            if (!tableCreated) {
              _context.next = 21;
              break;
            }

            _context.next = 15;
            return (0, _insertData["default"])(conn, 'retrieve_example', [{
              teste: 'pass'
            }, {
              teste: 'fail'
            }]);

          case 15:
            result = _context.sent;

            if (!(result && result.generated_keys)) {
              _context.next = 21;
              break;
            }

            _context.next = 19;
            return (0, _retrieveData["default"])(conn, 'retrieve_example');

          case 19:
            data = _context.sent;
            if (data.length === 2) t.pass('Retrieve data with success');

          case 21:
            _context.next = 23;
            return (0, _database.dropDatabase)(conn, 'retrieve_example');

          case 23:
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
//# sourceMappingURL=retrieve-data.spec.js.map