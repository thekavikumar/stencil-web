"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _axios = _interopRequireDefault(require("axios"));
var saveTelemetryEvent = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(version, eventId, event, subEvent, eventData) {
    var telemetryApi, _window$navigator, _window$navigator2, telemetryData;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          telemetryApi = process.env.NEXT_PUBLIC_TELEMETRY_API + '/metrics/v1/save' || '';
          _context.prev = 1;
          telemetryData = {
            generator: process.env.NEXT_PUBLIC_BOT_NAME,
            version: version,
            timestamp: Math.floor(new Date().getTime() / 1000),
            actorId: localStorage.getItem('userID') || '',
            actorType: 'user',
            env: process.env.NEXT_PUBLIC_ENV === 'production' ? 'prod' : 'dev',
            eventId: eventId,
            event: event,
            subEvent: subEvent,
            os:
            // @ts-ignore
            ((_window$navigator = window.navigator) === null || _window$navigator === void 0 || (_window$navigator = _window$navigator.userAgentData) === null || _window$navigator === void 0 ? void 0 : _window$navigator.platform) || window.navigator.platform,
            browser: window.navigator.userAgent,
            ip: sessionStorage.getItem('ip') || '',
            // @ts-ignore
            deviceType: (_window$navigator2 = window.navigator) !== null && _window$navigator2 !== void 0 && (_window$navigator2 = _window$navigator2.userAgentData) !== null && _window$navigator2 !== void 0 && _window$navigator2.mobile ? 'mobile' : 'desktop',
            sessionId: sessionStorage.getItem('sessionId') || '',
            eventData: eventData
          };
          _context.next = 5;
          return _axios.default.post(telemetryApi, [telemetryData], {
            headers: {
              orgId: process.env.NEXT_PUBLIC_ORG_ID || ''
            }
          });
        case 5:
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](1);
          console.error('Error saving telemetry event:', _context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 7]]);
  }));
  return function saveTelemetryEvent(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
var _default = exports.default = saveTelemetryEvent;