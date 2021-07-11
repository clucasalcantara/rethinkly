"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _ava = _interopRequireDefault(require("ava"));

var _dist = _interopRequireWildcard(require("../../dist"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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