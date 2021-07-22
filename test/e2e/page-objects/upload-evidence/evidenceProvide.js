function selectAreYouProvidingEvidenceAndContinue(commonContent, option) {
  const I = this;

  I.wait(3);
  I.checkOption(option);
  I.scrollPageToBottom();
  I.click(commonContent.continue);
}

function selectAreYouProvidingEvidenceAfterSignIn(commonContent, option) {
  const I = this;

  I.checkOption(option);
  I.scrollPageToBottom();
  I.click(commonContent.saveAndContinue);
}

module.exports = { selectAreYouProvidingEvidenceAndContinue, selectAreYouProvidingEvidenceAfterSignIn };
