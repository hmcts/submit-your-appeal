function selectIfYouWantToCreateAccount(commonContent, option) {
  const I = this;

  I.wait(3);
  I.checkOption(option);
  I.scrollPageToBottom();
  I.click(commonContent.continue);
}

module.exports = { selectIfYouWantToCreateAccount };
