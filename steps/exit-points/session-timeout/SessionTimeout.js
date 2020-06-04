const { shimSessionExitPoint } = require('middleware/shimSession');
const paths = require('paths');
const checkWelshToggle = require('middleware/checkWelshToggle');

class SessionTimeout extends shimSessionExitPoint {
  static get path() {
    return paths.session.timeout;
  }

  get middleware() {
    return [
      checkWelshToggle,
      ...super.middleware
    ];
  }
}

module.exports = SessionTimeout;
