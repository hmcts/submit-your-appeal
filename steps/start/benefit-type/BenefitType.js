const { Question } = require('@hmcts/one-per-page/steps');
const { redirectTo, goTo, branch } = require('@hmcts/one-per-page/flow');
const { form, text } = require('@hmcts/one-per-page/forms');
const { answer } = require('@hmcts/one-per-page/checkYourAnswers');
const { splitBenefitType } = require('utils/stringUtils');
const sections = require('steps/check-your-appeal/sections');
const Joi = require('joi');
const paths = require('paths');
const benefitTypes = require('steps/start/benefit-type/types');
const config = require('config');
const requestHandler = require('middleware/services/parseRequest');

const allowESA = config.get('features.allowESA.enabled') === 'true';

const {
  restoreFromDraftStore,
  saveSessionToDraftStore,
  saveSessionToDraftStoreAndClose,
  saveSessionToDraftStoreAndReply
} = require('middleware/draftPetitionStoreMiddleware');


class BenefitType extends Question {
  static get path() {
    return paths.start.benefitType;
  }

  get form() {
    const types = Object.values(benefitTypes);
    return form({
      benefitType: text.joi(
        this.content.fields.benefitType.error.required,
        Joi.string().valid(types).required()
      )
    });
  }

  answers() {
    return answer(this, {
      question: this.content.cya.benefitType.question,
      section: sections.benefitType,
      answer: this.fields.benefitType.value
    });
  }

  values() {
    return {
      benefitType: splitBenefitType(this.fields.benefitType.value)
    };
  }

  next() {
    const allowedTypes = [benefitTypes.personalIndependencePayment];
    if (allowESA) {
      allowedTypes.push(benefitTypes.employmentAndSupportAllowance);
    }
    const isAllowedBenefit = () => allowedTypes.indexOf(this.fields.benefitType.value) !== -1;
    return branch(
      goTo(this.journey.steps.PostcodeChecker).if(isAllowedBenefit),
      redirectTo(this.journey.steps.AppealFormDownload)
    );
  }

  parseRequest(req) {
    return requestHandler.parse(this, req);
  }

  get middleware() {
    return [
      ...super.middleware,
      restoreFromDraftStore,
      saveSessionToDraftStoreAndClose
    ];
  }

  get postMiddleware() {
    return [
      ...super.middleware,
      saveSessionToDraftStore,
      saveSessionToDraftStoreAndReply
    ];
  }
}

module.exports = BenefitType;
