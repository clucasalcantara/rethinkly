"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _connection = _interopRequireDefault(require("./connection"));

var _transactions = require("./transactions");

var _database = require("./transactions/database");

var _table = require("./transactions/table");

var _default = function _default(dbConfig) {
  return (0, _connection["default"])(dbConfig);
};

exports["default"] = _default;
module.exports = {
  // Data
  data: {
    get: _transactions.retrieveData,
    insert: _transactions.insertData,
    remove: _transactions.deleteData
  },
  // Database
  database: {
    create: _database.createDatabase,
    drop: _database.dropDatabase
  },
  // Table
  table: {
    create: _table.createTable
  },
  // Connection
  createLink: _connection["default"]
};
//# sourceMappingURL=index.js.map