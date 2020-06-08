const { Question } = require('@hmcts/one-per-page');
const paths = require('paths');
const checkWelshToggle = require('middleware/checkWelshToggle');

class ContactUs extends Question {
  static get path() {
    return paths.policy.contactUs;
  }

  get middleware() {
    return [
      ...super.middleware,
      checkWelshToggle
    ];
  }
}

module.exports = ContactUs;
