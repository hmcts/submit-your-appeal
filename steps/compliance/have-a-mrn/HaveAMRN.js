'use strict';

const { Question, goTo, branch } = require('@hmcts/one-per-page');
const { form, textField } = require('@hmcts/one-per-page/forms');
const { answer } = require('@hmcts/one-per-page/checkYourAnswers');
const Joi = require('joi');
const DateUtils = require('utils/DateUtils');
const paths = require('paths');
const userAnswer = require('utils/answer');

class HaveAMRN extends Question {

    static get path() {

        return paths.compliance.haveAMRN;
    }

    get form() {

        return form(

            textField('haveAMRN').joi(
                this.content.fields.haveAMRN.error.required,
                Joi.string().valid([userAnswer.YES, userAnswer.NO]).required()
            )
        );
    }

    answers() {

        return [

            answer(this, {
                question: this.content.cya.haveAMRN.question,
                section: 'have-a-mrn',
                answer: this.fields.haveAMRN.value
            })
        ];
    }

    next() {

        const hasAMRN = this.fields.haveAMRN.value === userAnswer.YES;

        return branch(
            goTo(this.journey.steps.DWPIssuingOffice).if(hasAMRN),
            goTo(this.journey.steps.HaveContactedDWP)
        );
    }
}

module.exports = HaveAMRN;
