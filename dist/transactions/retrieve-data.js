"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _rethinkdb = _interopRequireDefault(require("rethinkdb"));

var _hoopaLogger = _interopRequireDefault(require("hoopa-logger"));

/**
 * Retrieve data module
 * @memberof rethinkly
 */

/**
 * ProcessResults
 * Callback to process data on gathering, for now don't
 * need any transformation
 * @param {Array} results
 * @return {Array} results
 */
var processResults = function processResults(results) {
  return results && results.length > 0 ? results[0] : results;
};
/**
 * RetrieveData
 * Grab data from database
 * @param {Object} connection
 * @param {String} tableName
 * @param {String} predicate?
 * @returns {Array||Object} results || result
 */


var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection, tableName) {
    var predicate,
        id,
        result,
        predicateKey,
        predicateValues,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            predicate = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
            id = predicate.id;

            if (predicate) {
              _context.next = 5;
              break;
            }

            _hoopaLogger["default"].info("Searching using no predicate");

            return _context.abrupt("return", _rethinkdb["default"].table(tableName).run(connection).then(function (cursor) {
              return cursor.toArray(function (err, results) {
                if (err) throw err;
                return processResults(results);
              });
            }));

          case 5:
            if (!(id && Object.keys(predicate).length === 1)) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return _rethinkdb["default"].table(tableName).get(id).run(connection).then(function (result) {
              return result;
            });

          case 8:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 10:
            predicateKey = Object.keys(predicate)[0];
            predicateValues = Object.values(predicate)[0];

            if (!Array.isArray(predicateValues)) {
              _context.next = 15;
              break;
            }

            _hoopaLogger["default"].info("Searching using the predicate ".concat(JSON.stringify(predicate)));

            return _context.abrupt("return", _rethinkdb["default"].table(tableName).filter(function (data) {
              var _data;

              return (_data = data(predicateKey)).contains.apply(_data, (0, _toConsumableArray2["default"])(predicateValues));
            }).run(connection).then(function (cursor) {
              return cursor.toArray(function (err, results) {
                if (err) throw err;

                _hoopaLogger["default"].info("Search resuls: ".concat(results.length));

                return processResults(results);
              });
            }));

          case 15:
            return _context.abrupt("return", _rethinkdb["default"].table(tableName).filter((0, _defineProperty2["default"])({}, predicateKey, predicateValues)).run(connection).then(function (cursor) {
              return cursor.toArray(function (err, results) {
                if (err) throw err;

                _hoopaLogger["default"].info("Search resuls: ".concat(results.length));

                return processResults(results);
              });
            }));

          case 16:
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