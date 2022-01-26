"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rethinkdb = _interopRequireDefault(require("rethinkdb"));

var _connection = _interopRequireDefault(require("./connection"));

var _transactions = require("./transactions");

var _database = require("./transactions/database");

var _table = require("./transactions/table");

var _seed = require("./transactions/seed");

var _default = function _default(dbConfig) {
  return (0, _connection["default"])(dbConfig);
};

exports["default"] = _default;
module.exports = {
  // Data
  data: {
    get: _transactions.retrieveData,
    insert: _transactions.insertData,
    remove: _transactions.deleteData,
    update: _transactions.updateData,
    seed: _seed.seed
  },
  // Database
  database: {
    create: _database.createDatabase,
    drop: _database.dropDatabase,
    checkForExistence: _database.checkForExistence,
    list: _database.listAll
  },
  // Table
  table: {
    create: _table.createTable,
    drop: _table.dropTable
  },
  // Connection
  createLink: _connection["default"],
  // RethinkDB library
  r: _rethinkdb["default"]
};
//# sourceMappingURL=index.js.map