'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _customStyleMap;

var _constants = require('./constants');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Custom style map for custom entities like Hihglight.
*/
var customStyleMap = (_customStyleMap = {}, _defineProperty(_customStyleMap, _constants.Inline.HIGHLIGHT, {
  backgroundColor: 'yellow'
}), _defineProperty(_customStyleMap, _constants.Inline.CODE, {
  fontFamily: 'SFMono-Regular,Consolas,Menlo,Courier,monospace',
  margin: '36px 0',
  fontSize: '12px',
  lineHeight: '18px',
  padding: '36px',
  whiteSpace: 'pre-wrap',
  color: '#fff',
  backgroundColor: '#282c34',
  display: 'block'
}), _customStyleMap);

exports.default = customStyleMap;