"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ava = _interopRequireDefault(require("ava"));

var _dist = _interopRequireWildcard(require("../../dist"));

(0, _ava["default"])('[core structure]: should have a retrieve data function', function (t) {
  if (_dist.data.get) t.pass();
});
(0, _ava["default"])('[core structure]: should have a insertData function', function (t) {
  if (_dist.data.insert) t.pass();
});
(0, _ava["default"])('[core structure]: should have a createDatabase function', function (t) {
  if (_dist.database.create) t.pass();
});
(0, _ava["default"])('[core structure]: should have a dropDatabase function', function (t) {
  if (_dist.database.drop) t.pass();
});
(0, _ava["default"])('[core structure]: should have a createTable function', function (t) {
  if (_dist.table.create) t.pass();
});
(0, _ava["default"])('[core structure]: should have a createLink function', function (t) {
  if (_dist.createLink) t.pass();
}); // TODO: Add specs to creatlink and assertions, for example
// create a new link and verify if the passed host was
// applied correclty

(0, _ava["default"])('[core structure]: should create an instance', function (t) {
  if (_dist["default"]) t.pass();
});
//# sourceMappingURL=rethinkly.spec.js.map