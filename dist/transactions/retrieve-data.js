"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

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
        name,
        result,
        predicateKeys,
        queryBuilder,
        _loop,
        _i,
        _predicateKeys,
        _ret,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            predicate = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
            id = predicate.id, name = predicate.name;

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
            if (name) {
              delete predicate.name;
            }

            predicateKeys = Object.keys(predicate);
            queryBuilder = _rethinkdb["default"].table(tableName);

            _loop = function _loop() {
              var key = _predicateKeys[_i];
              var value = predicate[key];

              if (Array.isArray(value)) {
                return {
                  v: queryBuilder = queryBuilder.filter(function (data) {
                    return data(key).contains(value);
                  })
                };
              }
            };

            _i = 0, _predicateKeys = predicateKeys;

          case 15:
            if (!(_i < _predicateKeys.length)) {
              _context.next = 22;
              break;
            }

            _ret = _loop();

            if (!((0, _typeof2["default"])(_ret) === "object")) {
              _context.next = 19;
              break;
            }

            return _context.abrupt("return", _ret.v);

          case 19:
            _i++;
            _context.next = 15;
            break;

          case 22:
            if (!name) {
              _context.next = 24;
              break;
            }

            return _context.abrupt("return", queryBuilder.filter(predicate).filter(function (data) {
              return data('name').match("^".concat(name));
            }).run(connection).then(function (cursor) {
              return cursor.toArray(function (err, results) {
                if (err) throw err;

                _hoopaLogger["default"].info("Search results: ".concat(results.length));

                return processResults(results);
              });
            }));

          case 24:
            return _context.abrupt("return", queryBuilder.filter(predicate).run(connection).then(function (cursor) {
              return cursor.toArray(function (err, results) {
                if (err) throw err;

                _hoopaLogger["default"].info("Search results: ".concat(results.length));

                return processResults(results);
              });
            }));

          case 25:
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