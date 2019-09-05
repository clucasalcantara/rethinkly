"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ava = _interopRequireDefault(require("ava"));

var _ = _interopRequireWildcard(require(".."));

(0, _ava["default"])('[core structure]: should have a retrieve data function', function (t) {
  if (_.retrieveData) t.pass();
});
(0, _ava["default"])('[core structure]: should have a insertData function', function (t) {
  if (_.insertData) t.pass();
});
(0, _ava["default"])('[core structure]: should have a createDatabase function', function (t) {
  if (_.createDatabase) t.pass();
});
(0, _ava["default"])('[core structure]: should have a dropDatabase function', function (t) {
  if (_.dropDatabase) t.pass();
});
(0, _ava["default"])('[core structure]: should have a createTable function', function (t) {
  if (_.createTable) t.pass();
});
(0, _ava["default"])('[core structure]: should have a createLink function', function (t) {
  if (_.createLink) t.pass();
}); // TODO: Add specs to creatlink and assertions, for example
// create a new link and verify if the passed host was
// applied correclty

(0, _ava["default"])('[core structure]: should create an instance', function (t) {
  if (_["default"]) t.pass();
});
//# sourceMappingURL=rethinkly.spec.js.map