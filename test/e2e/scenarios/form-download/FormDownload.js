const content = require('steps/form-download/content.en.json');
const paths = require('paths');

Feature('Form download page');

Before((I) => {
    I.createTheSession();
    I.amOnPage(paths.formDownload);
});

After((I) => {
    I.endTheSession();
});

Scenario.only('I see the correct information is displayed', (I) => {

    I.see('You need to download and fill out a paper form');

});
