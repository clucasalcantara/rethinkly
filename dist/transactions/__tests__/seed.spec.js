"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ava = _interopRequireDefault(require("ava"));

var _seed = require("../seed");

var _database = require("../database");

// Resources
var seedInfo = {
  database: 'seed_example',
  tables: ['table1', 'table2', 'table3']
};
(0, _ava["default"])('should seed a database structure properly', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(t) {
    var conn, dbSown;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.getConnection)(seedInfo.database);

          case 2:
            conn = _context.sent;
            _context.next = 5;
            return (0, _seed.seed)(seedInfo);

          case 5:
            _context.next = 7;
            return (0, _database.checkForExistence)(conn, seedInfo.database);

          case 7:
            dbSown = _context.sent;

            if (!dbSown) {
              _context.next = 12;
              break;
            }

            _context.next = 11;
            return (0, _database.dropDatabase)(conn, seedInfo.database);

          case 11:
            t.pass("".concat(seedInfo.database, " sown successfully!"));

          case 12:
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
//# sourceMappingURL=seed.spec.js.map