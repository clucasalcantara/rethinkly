"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ava = _interopRequireDefault(require("ava"));

var _connection = _interopRequireDefault(require("../../connection"));

var _database = require("../database");

var _table = require("../table");

var getConnection = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _connection["default"])({
              host: process.env.ENV === 'mock' ? '172.18.0.2' : 'localhost',
              port: '28015',
              db: 'table_example'
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

(0, _ava["default"])('should create a table properly', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(t) {
    var conn, result, created;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getConnection();

          case 2:
            conn = _context2.sent;
            _context2.t0 = _database.createDatabase;
            _context2.next = 6;
            return getConnection();

          case 6:
            _context2.t1 = _context2.sent;
            _context2.next = 9;
            return (0, _context2.t0)(_context2.t1, 'table_example');

          case 9:
            result = _context2.sent;

            if (!result) {
              _context2.next = 15;
              break;
            }

            _context2.next = 13;
            return (0, _table.createTable)(conn, 'table_example');

          case 13:
            created = _context2.sent;

            if (created) {
              t.pass('table succesfully created');
              (0, _database.dropDatabase)(conn, 'table_example');
            }

          case 15:
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
//# sourceMappingURL=table.spec.js.map