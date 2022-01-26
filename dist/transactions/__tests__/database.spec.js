"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ava = _interopRequireDefault(require("ava"));

var _database = require("../database");

(0, _ava["default"])('[database]: should create and drops a database properly', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(t) {
    var conn, isCreated, dropped;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.getConnection)();

          case 2:
            conn = _context.sent;
            _context.next = 5;
            return (0, _database.createDatabase)(conn, 'db_example');

          case 5:
            isCreated = (0, _database.checkForExistence)(conn, 'db_example');

            if (!isCreated) {
              _context.next = 16;
              break;
            }

            t.pass('database succesfully created');
            _context.t0 = _database.dropDatabase;
            _context.next = 11;
            return (0, _database.getConnection)();

          case 11:
            _context.t1 = _context.sent;
            _context.next = 14;
            return (0, _context.t0)(_context.t1, 'db_example');

          case 14:
            dropped = _context.sent;

            if (dropped) {
              t.pass('database succesfully dropped');
            }

          case 16:
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
(0, _ava["default"])('[database]: should list all databases', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(t) {
    var conn, dbList;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.getConnection)();

          case 2:
            conn = _context2.sent;
            (0, _database.createDatabase)(conn, 'list_example');
            _context2.next = 6;
            return (0, _database.listAll)(conn);

          case 6:
            dbList = _context2.sent;
            _context2.t0 = _database.dropDatabase;
            _context2.next = 10;
            return (0, _database.getConnection)();

          case 10:
            _context2.t1 = _context2.sent;
            _context2.next = 13;
            return (0, _context2.t0)(_context2.t1, 'list_example');

          case 13:
            if (dbList) t.pass('Databases listed');

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());
//# sourceMappingURL=database.spec.js.map