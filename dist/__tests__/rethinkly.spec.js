'use strict'

var _ava = _interopRequireDefault(require('ava'))

var _ = _interopRequireWildcard(require('..'))

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  } else {
    var newObj = {}
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc)
          } else {
            newObj[key] = obj[key]
          }
        }
      }
    }
    newObj['default'] = obj
    return newObj
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

;(0, _ava['default'])('[core structure]: should run on mock env for testing', function(t) {
  if (process.env.ENV === 'mock') t.pass()
})
;(0, _ava['default'])('[core structure]: should have a retrieve data function', function(t) {
  if (_.transactions.data.retrieveData) t.pass()
})
;(0, _ava['default'])('[core structure]: should have a insert data function', function(t) {
  if (_.transactions.data.insertData) t.pass()
})
;(0, _ava['default'])('[core structure]: should have a default instance with a connect method', function(t) {
  if (_['default']) t.pass()
})
//# sourceMappingURL=rethinkly.spec.js.map
