const { ExitPoint } = require('@hmcts/one-per-page');
const idam = require('middleware/idam');
const paths = require('paths');

class SignOut extends ExitPoint {
  static get path() {
    return paths.idam.signOut;
  }

  get isUserLoggedIn() {
    return this.req.idam;
  }

  static clearCookies(req, res, next) {
    res.clearCookie('__auth-token', {
      path: '/',
      domain: req.hostname,
      httpOnly: true,
      secure: true
    });
    res.clearCookie('__state', {
      path: '/',
      domain: req.hostname,
      httpOnly: true,
      secure: true
    });
    next();
  }

  get middleware() {
    return [
      idam.authenticate,
      this.journey.collectSteps,
      ...super.middleware,
      idam.logout,
      SignOut.clearCookies
    ];
  }
}

module.exports = SignOut;