"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ava = _interopRequireDefault(require("ava"));

var _connection = _interopRequireDefault(require("../../connection"));

var _database = require("../database");

var _table = require("../table");

var _insertData = _interopRequireDefault(require("../insert-data"));

var _deleteData = _interopRequireDefault(require("../delete-data"));

var getConnection = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _connection["default"])({
              host: process.env.ENV === 'mock' ? '172.18.0.2' : 'localhost',
              port: '28015',
              db: 'deletion_example'
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
/* eslint-disable camelcase */


(0, _ava["default"])('[transactions]: should delete a value properly', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(t) {
    var conn, dbCreated, tableCreated, _yield$insertData, _yield$insertData$gen, generated_keys, _yield$deleteData, errors;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getConnection();

          case 2:
            conn = _context2.sent;
            _context2.next = 5;
            return (0, _database.createDatabase)(conn, 'deletion_example');

          case 5:
            dbCreated = _context2.sent;

            if (!dbCreated) {
              _context2.next = 22;
              break;
            }

            _context2.next = 9;
            return (0, _table.createTable)(conn, 'deletion_example');

          case 9:
            tableCreated = _context2.sent;

            if (!tableCreated) {
              _context2.next = 22;
              break;
            }

            _context2.next = 13;
            return (0, _insertData["default"])(conn, 'deletion_example', {
              teste: 'pass'
            });

          case 13:
            _yield$insertData = _context2.sent;
            _yield$insertData$gen = _yield$insertData.generated_keys;
            generated_keys = _yield$insertData$gen === void 0 ? [] : _yield$insertData$gen;

            if (!(generated_keys.length > 0)) {
              _context2.next = 22;
              break;
            }

            _context2.next = 19;
            return (0, _deleteData["default"])(conn, 'deletion_example', generated_keys[0]);

          case 19:
            _yield$deleteData = _context2.sent;
            errors = _yield$deleteData.errors;

            if (!errors) {
              t.pass("Record ".concat(generated_keys[0], " deleted successfully"));
            }

          case 22:
            _context2.next = 24;
            return (0, _database.dropDatabase)(conn, 'deletion_example');

          case 24:
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
/* eslint-enable camelcase */
//# sourceMappingURL=delete-data.spec.js.map