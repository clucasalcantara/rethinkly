"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _hoopaLogger = _interopRequireDefault(require("hoopa-logger"));

var _dist = require("../../../dist");

/**
 * Rethinkly example bootstraper
 * @memberof rethinkly
 * Made to show a few usage of rethink and also to create the teste suite database
 */
var run =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var db, connection;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            db = 'rethinkly_example';
            _context.next = 3;
            return (0, _dist.createLink)({
              host: process.env.ENV === 'mock' ? '172.18.0.2' : 'localhost',
              port: '28015',
              db: db
            });

          case 3:
            connection = _context.sent;
            _context.next = 6;
            return _dist.database.create(connection, db);

          case 6:
            _context.next = 8;
            return _dist.table.create(connection, 'simple_table');

          case 8:
            _context.next = 10;
            return _dist.data.insert(connection, 'simple_table', [{
              data: 'Dummy Jhon'
            }, {
              data: 'Dummy Jeff'
            }, {
              data: 'Dummy Albert'
            }, {
              data: 'Dummy Crazy'
            }, {
              data: 'Dummy Logan'
            }, {
              data: 'Dummy Links'
            }, {
              data: 'Dummy Joao'
            }, {
              data: 'Dummy Joseph'
            }, {
              data: 'Dummy Jizz'
            }, {
              data: 'Dummy Jah'
            }]);

          case 10:
            _hoopaLogger["default"].info("Bootstrap ended.");
            /* eslint-disable unicorn/no-process-exit */


            process.exit(0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function run() {
    return _ref.apply(this, arguments);
  };
}();
/* eslint-enable */


run();
//# sourceMappingURL=index.js.map