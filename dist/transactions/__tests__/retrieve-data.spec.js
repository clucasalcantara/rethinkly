"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ava = _interopRequireDefault(require("ava"));

var _connection = _interopRequireDefault(require("../../connection"));

var _database = require("../database");

var _table = require("../table");

var _insertData = _interopRequireDefault(require("../insert-data"));

var _retrieveData = _interopRequireDefault(require("../retrieve-data"));

var getConnection = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _connection["default"])({
              host: process.env.ENV === 'mock' ? '172.18.0.2' : 'localhost',
              port: '28015',
              db: 'retrieve_example'
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getConnection() {
    return _ref.apply(this, arguments);
  };
}();

(0, _ava["default"])('[transactions]: should retrieve a value properly', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(t) {
    var conn, dbCreated, tableCreated, result, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getConnection();

          case 2:
            conn = _context2.sent;
            _context2.next = 5;
            return (0, _database.createDatabase)(conn, 'retrieve_example');

          case 5:
            dbCreated = _context2.sent;

            if (!dbCreated) {
              _context2.next = 19;
              break;
            }

            _context2.next = 9;
            return (0, _table.createTable)(conn, 'retrieve_example');

          case 9:
            tableCreated = _context2.sent;

            if (!tableCreated) {
              _context2.next = 19;
              break;
            }

            _context2.next = 13;
            return (0, _insertData["default"])(conn, 'retrieve_example', [{
              teste: 'pass'
            }, {
              teste: 'fail'
            }]);

          case 13:
            result = _context2.sent;

            if (!(result && result.generated_keys)) {
              _context2.next = 19;
              break;
            }

            _context2.next = 17;
            return (0, _retrieveData["default"])(conn, 'retrieve_example');

          case 17:
            data = _context2.sent;
            if (data.length === 2) t.pass('Retrieve data with success');

          case 19:
            _context2.next = 21;
            return (0, _database.dropDatabase)(conn, 'retrieve_example');

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());
//# sourceMappingURL=retrieve-data.spec.js.map