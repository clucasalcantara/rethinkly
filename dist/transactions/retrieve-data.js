"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rethinkdb = _interopRequireDefault(require("rethinkdb"));

var _hoopaLogger = _interopRequireDefault(require("hoopa-logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * ProcessResults
 * Callback to process data on gathering, for now don't
 * need any transformation
 * @param {Array} results
 * @return {Array} results
 */
var processResults = function processResults(results) {
  return results;
};
/**
 * RetrieveData
 * Grab data from database
 * @param {Object} connection
 * @param {String} tableName
 * @param {String} predicate?
 * @returns {Array||Object} results || result
 */


var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(connection, tableName) {
    var predicate,
        id,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            predicate = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            id = predicate.id;

            if (predicate) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", _rethinkdb["default"].table(tableName).run(connection).then(function (cursor) {
              return cursor.toArray(function (err, results) {
                if (err) throw err;
                return processResults(results);
              });
            }));

          case 4:
            if (!(id && Object.keys(predicate).length === 1)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", _rethinkdb["default"].table(tableName).get(id).run(connection).then(function (result) {
              return result;
            }));

          case 6:
            _hoopaLogger["default"].info("Searching using the predicate ".concat(JSON.stringify(predicate)));

            return _context.abrupt("return", _rethinkdb["default"].table(tableName).filter(predicate).run(connection).then(function (cursor) {
              return cursor.toArray(function (err, results) {
                if (err) throw err;

                _hoopaLogger["default"].info("Search resuls: ".concat(results.length));

                return processResults(results);
              });
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;
//# sourceMappingURL=retrieve-data.js.map