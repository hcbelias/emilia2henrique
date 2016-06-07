'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SendmailSchema = new _mongoose2.default.Schema({
  name: String,
  email: String,
  phone: String,
  attend: Boolean
});

exports.default = _mongoose2.default.model('Sendmail', SendmailSchema);
//# sourceMappingURL=sendmail.model.js.map
