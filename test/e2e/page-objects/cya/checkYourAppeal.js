const DateUtils = require('utils/DateUtils');
const checkYourAppealContentEn = require('steps/check-your-appeal/content.en');
const checkYourAppealContentCy = require('steps/check-your-appeal/content.cy');
const supportContentEn = require('steps/hearing/support/content.en');
const supportContentCy = require('steps/hearing/support/content.cy');
const datesCantAttendContentEn = require('steps/hearing/dates-cant-attend/content.en');
const datesCantAttendContentCy = require('steps/hearing/dates-cant-attend/content.cy');
const config = require('config');

const evidenceUploadEnabled = config.get('features.evidenceUpload.enabled');
const allowSaveAndReturnEnabled = config.get('features.allowSaveAndReturn.enabled') === 'true';

const selectors = require('steps/check-your-appeal/selectors');
const paths = require('paths');
const testData = require('test/e2e/data');

const appellant = testData.appellant;
const oneMonthAgo = DateUtils.oneMonthAgo();

function enterDetailsFromStartToNINO(commonContent, benefitTypeCode = testData.benefitType.code) {
  const I = this;

  I.enterBenefitTypeAndContinue(commonContent, benefitTypeCode);
  // I.chooseLanguagePreference(commonContent, 'no');
  I.enterPostcodeAndContinue(commonContent, appellant.contactDetails.postCode);
  I.continueFromIndependance(commonContent);
  if (allowSaveAndReturnEnabled) {
    I.selectIfYouWantToCreateAccount(commonContent, '#createAccount-no');
  }
  I.selectHaveYouGotAMRNAndContinue(commonContent, '#haveAMRN-yes');
  I.enterAnMRNDateAndContinue(commonContent, oneMonthAgo);
  I.enterDWPIssuingOfficeAndContinue(commonContent, testData.mrn.dwpIssuingOffice);
  I.selectAreYouAnAppointeeAndContinue(commonContent, '#isAppointee-no');
  I.enterAppellantNameAndContinue(commonContent, appellant.title, appellant.firstName, appellant.lastName);
  I.enterAppellantDOBAndContinue(commonContent, appellant.dob.day, appellant.dob.month, appellant.dob.year);
  I.enterAppellantNINOAndContinue(commonContent, appellant.nino);
}

function enterDetailsFromNoRepresentativeToUploadingEvidence(commonContent) {
  const I = this;

  I.selectDoYouHaveARepresentativeAndContinue(commonContent, '#hasRepresentative-no');
  I.addReasonForAppealingUsingTheOnePageFormAndContinue(commonContent, testData.reasonsForAppealing.reasons[0]);
  I.enterAnythingElseAndContinue(commonContent, testData.reasonsForAppealing.otherReasons);
  if (!evidenceUploadEnabled) {
    I.readSendingEvidenceAndContinue(commonContent);
  }
  if (evidenceUploadEnabled) {
    I.selectAreYouProvidingEvidenceAndContinue(commonContent, '#evidenceProvide-yes');
    I.uploadAPieceOfEvidence();
    I.enterDescription(commonContent, 'Some description of the evidence');
  }
}

function enterDetailsFromNoRepresentativeToEnd(commonContent) {
  const I = this;

  I.enterDetailsFromNoRepresentativeToUploadingEvidence(commonContent);
  I.enterDoYouWantToAttendTheHearing(commonContent, '#attendHearing-no');
  I.readYouHaveChosenNotToAttendTheHearingNoticeAndContinue(commonContent);
}

async function enterDetailsFromAttendingTheHearingToEnd(commonContent, language, date) {
  const I = this;
  const datesCantAttendContent = language === 'en' ? datesCantAttendContentEn : datesCantAttendContentCy;

  I.enterDoYouWantToAttendTheHearing(commonContent, '#attendHearing-yes');
  I.selectDoYouNeedSupportAndContinue(commonContent, '#arrangements-yes');
  I.checkAllArrangementsAndContinue(commonContent, language);
  I.selectHearingAvailabilityAndContinue(commonContent, '#scheduleHearing-yes');
  await I.turnOffJsAndReloadThePage();
  I.enterDateCantAttendAndContinue(commonContent, date, datesCantAttendContent.links.add);
  I.click(commonContent.continue);
}

async function enterDetailsFromAttendingTheHearingDatePickerToEnd(commonContent, language, date) {
  const I = this;
  const supportContent = language === 'en' ? supportContentEn : supportContentCy;

  I.enterDoYouWantToAttendTheHearing(commonContent, '#attendHearing-yes');
  I.selectDoYouNeedSupportAndContinue(supportContent.fields.arrangements.yes);
  I.checkAllArrangementsAndContinue(commonContent, language);
  I.wait(2);
  I.selectHearingAvailabilityAndContinue(commonContent, '#scheduleHearing-yes');
  I.wait(2);
  await I.selectDates([date]);
  I.click(commonContent.continue);
}

function enterDetailsFromAttendingTheHearingWithSupportToEnd(commonContent, language, options, fields = []) {
  const I = this;
  const supportContent = language === 'en' ? supportContentEn : supportContentCy;

  I.enterDoYouWantToAttendTheHearing(commonContent, '#attendHearing-yes');
  I.selectDoYouNeedSupportAndContinue(supportContent.fields.arrangements.yes);
  options.forEach(option => {
    I.click(option);
  });
  fields.forEach(field => {
    I.fillField(field.id, field.content);
  });
  I.click('Continue');
  I.selectHearingAvailabilityAndContinue(commonContent, '#scheduleHearing-no');
}

function confirmDetailsArePresent(language, hasMRN = true, mrnDate = oneMonthAgo) {
  const I = this;
  const checkYourAppealContent = language === 'en' ? checkYourAppealContentEn : checkYourAppealContentCy;

  // We are on CYA
  I.seeCurrentUrlEquals(paths.checkYourAppeal);

  // Type of benefit
  I.see(testData.benefitType.description);

  if (hasMRN) {
    // MRN address number
    I.see(testData.mrn.dwpIssuingOffice, selectors[language].mrn.dwpIssuingOffice);

    // The Date of the MRN
    I.see(DateUtils.formatDate(mrnDate, 'DD MMMM YYYY', language));

    if (mrnDate.isAfter(oneMonthAgo)) {
      // Reason why the MRN is late
      I.see(testData.mrn.reasonWhyMRNisLate);
    }
  } else {
    // Reason for no MRN
    I.see(testData.mrn.reasonForNoMRN, selectors[language].mrn.noMRN);
  }

  // Appellant name
  I.see(`${appellant.title}. ${appellant.firstName} ${appellant.lastName}`);

  // Appellant DOB
  if (language === 'en') {
    I.see('25 January 1980');
  } else {
    I.see('25 Ionawr 1980');
  }

  // Appellant NINO
  I.see(appellant.nino);

  // Appellant address
  I.see(appellant.contactDetails.addressLine1);
  I.see(appellant.contactDetails.addressLine2);
  I.see(appellant.contactDetails.townCity);
  I.see(appellant.contactDetails.county);
  I.see(appellant.contactDetails.postCode);

  // Appellant Reason for appealing
  I.see(testData.reasonsForAppealing.reasons[0].whatYouDisagreeWith);
  I.see(testData.reasonsForAppealing.reasons[0].reasonForAppealing);

  // Anything else the appellant wants to tell the tribunal
  I.see(testData.reasonsForAppealing.otherReasons);

  // Shows when the appeal is complete
  I.see(checkYourAppealContent.header);
}

module.exports = {
  enterDetailsFromStartToNINO,
  enterDetailsFromNoRepresentativeToUploadingEvidence,
  enterDetailsFromAttendingTheHearingToEnd,
  enterDetailsFromAttendingTheHearingDatePickerToEnd,
  enterDetailsFromNoRepresentativeToEnd,
  confirmDetailsArePresent,
  enterDetailsFromAttendingTheHearingWithSupportToEnd
};
