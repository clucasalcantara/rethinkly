"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createLink", {
  enumerable: true,
  get: function get() {
    return _connection["default"];
  }
});
Object.defineProperty(exports, "retrieveData", {
  enumerable: true,
  get: function get() {
    return _transactions.retrieveData;
  }
});
Object.defineProperty(exports, "insertData", {
  enumerable: true,
  get: function get() {
    return _transactions.insertData;
  }
});
Object.defineProperty(exports, "createDatabase", {
  enumerable: true,
  get: function get() {
    return _database.createDatabase;
  }
});
Object.defineProperty(exports, "dropDatabase", {
  enumerable: true,
  get: function get() {
    return _database.dropDatabase;
  }
});
Object.defineProperty(exports, "createTable", {
  enumerable: true,
  get: function get() {
    return _table.createTable;
  }
});
exports["default"] = void 0;

var _connection = _interopRequireDefault(require("./connection"));

var _transactions = require("./transactions");

var _database = require("./transactions/database");

var _table = require("./transactions/table");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(dbConfig) {
  return (0, _connection["default"])(dbConfig);
};

exports["default"] = _default;
//# sourceMappingURL=index.js.map