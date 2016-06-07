/**
 * Sendmail model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _sendmail = require('./sendmail.model');

var _sendmail2 = _interopRequireDefault(_sendmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SendmailEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
SendmailEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _sendmail2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    SendmailEvents.emit(event + ':' + doc._id, doc);
    SendmailEvents.emit(event, doc);
  };
}

exports.default = SendmailEvents;
//# sourceMappingURL=sendmail.events.js.map
