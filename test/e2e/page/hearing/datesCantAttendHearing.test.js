const content = require('steps/hearing/dates-cant-attend/content.en');
const paths = require('paths');
const moment = require('moment');
const DateUtils = require('utils/DateUtils');

const validDate = DateUtils.getRandomWeekDayFromDate(moment().add(5, 'weeks'));
const additionalValidDate = DateUtils.getRandomWeekDayFromDate(moment().add(10, 'weeks'));

Feature('Dates can\'t attend');

Before(I => {
  I.createTheSession();
  I.amOnPage(paths.hearing.datesCantAttend);
});

After(I => {
  I.endTheSession();
});

xScenario('When I go to the page and there are no dates I see the Add date link', I => {
  I.see(content.noDates);
  I.see(content.links.add);
});

xScenario('When I click the Add date link, I go to the page where I can enter dates', I => {
  I.see(content.noDates);
  I.click(content.links.add);
  I.see(content.fields.cantAttendDate.legend);
  I.seeElement('.form-group-day input');
  I.seeElement('.form-group-month input');
  I.seeElement('.form-group-year input');
});

xScenario('When I add a date I see the date in the list', I => {
  I.enterDateCantAttendAndContinue(validDate, content.links.add);
  I.seeFormattedDate(validDate);
});

xScenario('When I add a date I see the add another date link', I => {
  I.enterDateCantAttendAndContinue(validDate, content.links.add);
  I.see(content.links.addAnother);
});

xScenario('When I add multiple dates, I see them in the list', I => {
  I.enterDateCantAttendAndContinue(validDate, content.links.add);
  I.enterDateCantAttendAndContinue(additionalValidDate, content.links.addAnother);
  I.seeFormattedDate(validDate);
  I.seeFormattedDate(additionalValidDate);
});

xScenario('When I add a date and click the delete link, the date is removed', I => {
  I.enterDateCantAttendAndContinue(validDate, content.links.add);
  I.seeFormattedDate(validDate);
  I.click('Delete');
  I.dontSeeFormattedDate(validDate);
});

xScenario('I add a single date, I remove it, I see Add date', I => {
  I.enterDateCantAttendAndContinue(validDate, content.links.add);
  I.see(content.links.addAnother);
  I.click('Delete');
  I.dontSee(content.links.addAnother);
  I.see(content.links.add);
});

xScenario('When I click Continue without add a date, I see errors', I => {
  I.click('Continue');
  I.see(content.noDates);
});

xScenario('When I add a date and the edit it, I see the new date', I => {
  I.enterDateCantAttendAndContinue(validDate, content.links.add);
  I.seeFormattedDate(validDate);
  I.enterDateCantAttendAndContinue(additionalValidDate, 'Edit');
  I.dontSeeFormattedDate(validDate);
  I.seeFormattedDate(additionalValidDate);
});

xScenario('When I click Continue without filling in the date fields, I see errors', I => {
  I.click(content.links.add);
  I.click('Continue');
  I.see(content.fields.cantAttendDate.error.allRequired);
});

xScenario('When I click Continue when only entering the day field, I see errors', I => {
  I.click(content.links.add);
  I.fillField('.form-group-day input', validDate.date());
  I.click('Continue');
  I.see(content.fields.cantAttendDate.error.monthRequired);
  I.see(content.fields.cantAttendDate.error.yearRequired);
});

xScenario('When I click Continue when only entering the month field, I see errors', I => {
  I.click(content.links.add);
  I.fillField('.form-group-month input', validDate.month() + 1);
  I.click('Continue');
  I.see(content.fields.cantAttendDate.error.dayRequired);
  I.see(content.fields.cantAttendDate.error.yearRequired);
});

xScenario('When I click Continue when only entering the year field, I see errors', I => {
  I.click(content.links.add);
  I.fillField('.form-group-year input', validDate.year());
  I.click('Continue');
  I.see(content.fields.cantAttendDate.error.dayRequired);
  I.see(content.fields.cantAttendDate.error.monthRequired);
});

xScenario('When I enter a date that is under four weeks from now, I see errors', I => {
  const dateUnderFourWeeks = moment();
  I.enterDateCantAttendAndContinue(dateUnderFourWeeks, content.links.add);
  I.see(content.fields.cantAttendDate.error.underFourWeeks);
});

xScenario('When I enter a date that is over twenty two weeks from now, I see errors', I => {
  const dateOverTwentyTwoWeeks = moment().add(23, 'weeks');
  I.enterDateCantAttendAndContinue(dateOverTwentyTwoWeeks, content.links.add);
  I.see(content.fields.cantAttendDate.error.overTwentyTwoWeeks);
});

xScenario('I enter a date I cant attend with the long name of month', I => {
  const month = validDate.format('MMMM');
  I.click(content.links.add);
  I.enterADateAndContinue(validDate.date(), month, validDate.year());
  I.click('Continue');
  I.seeCurrentUrlEquals(paths.checkYourAppeal);
});

xScenario('I enter a date I cant attend with the short name of month', I => {
  const month = validDate.format('MMM');
  I.click(content.links.add);
  I.enterADateAndContinue(validDate.date(), month, validDate.year());
  I.click('Continue');
  I.seeCurrentUrlEquals(paths.checkYourAppeal);
});

xScenario('I enter a date I cant attend with an invalid name of month', I => {
  I.click(content.links.add);
  I.enterADateAndContinue(validDate.date(), 'invalidMonth', validDate.year());
  I.see(content.fields.cantAttendDate.error.invalid);
});
