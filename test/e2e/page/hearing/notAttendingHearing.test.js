/* eslint-disable max-len */

const paths = require('paths');

Feature('Not Attending Hearing @blah');

Before(I => {
  I.createTheSession();
  I.amOnPage(paths.hearing.notAttendingHearing);
});

After(I => {
  I.endTheSession();
});

Scenario('When I click Continue, I am taken to the check your appeal page', I => {
  I.continueFromnotAttendingHearing();
  I.seeInCurrentUrl(paths.checkYourAppeal);
});
