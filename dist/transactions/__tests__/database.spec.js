"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ava = _interopRequireDefault(require("ava"));

var _connection = _interopRequireDefault(require("../../connection"));

var _database = require("../database");

var getConnection = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _connection["default"])({
              host: process.env.ENV === 'mock' ? '172.18.0.2' : 'localhost',
              port: '28015',
              db: 'db_example'
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

(0, _ava["default"])('[database]: should create and drops a database properly', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(t) {
    var conn, isCreated, dropped;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getConnection();

          case 2:
            conn = _context2.sent;
            _context2.next = 5;
            return (0, _database.createDatabase)(conn, 'db_example');

          case 5:
            isCreated = (0, _database.checkForExistence)(conn, 'db_example');

            if (!isCreated) {
              _context2.next = 16;
              break;
            }

            t.pass('database succesfully created');
            _context2.t0 = _database.dropDatabase;
            _context2.next = 11;
            return getConnection();

          case 11:
            _context2.t1 = _context2.sent;
            _context2.next = 14;
            return (0, _context2.t0)(_context2.t1, 'db_example');

          case 14:
            dropped = _context2.sent;

            if (dropped) {
              t.pass('database succesfully dropped');
            }

          case 16:
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
(0, _ava["default"])('[database]: should list all databases', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(t) {
    var conn, dbList;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getConnection();

          case 2:
            conn = _context3.sent;
            (0, _database.createDatabase)(conn, 'list_example');
            _context3.next = 6;
            return (0, _database.listAll)(conn);

          case 6:
            dbList = _context3.sent;
            _context3.t0 = _database.dropDatabase;
            _context3.next = 10;
            return getConnection();

          case 10:
            _context3.t1 = _context3.sent;
            _context3.next = 13;
            return (0, _context3.t0)(_context3.t1, 'list_example');

          case 13:
            if (dbList) t.pass('Databases listed');

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}());
//# sourceMappingURL=database.spec.js.map