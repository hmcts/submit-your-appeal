const paths = require('paths');
const content = require('steps/policy-pages/cookie-policy/content.en');

Feature('Cookie policy @batch-10');

Scenario('When I go to the cookie policy page, I see the page heading', I => {
  I.amOnPage(paths.policy.cookiePolicy);
  I.see(content.cookies.title);
});
