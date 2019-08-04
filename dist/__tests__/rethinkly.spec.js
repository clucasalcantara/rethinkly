"use strict";

var _ava = _interopRequireDefault(require("ava"));

var _ = _interopRequireWildcard(require(".."));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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