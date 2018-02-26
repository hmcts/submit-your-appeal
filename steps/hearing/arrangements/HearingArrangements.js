'use strict';

const { Question, goTo } = require('@hmcts/one-per-page');
const { form, text, list } = require('@hmcts/one-per-page/forms');
const { answer } = require('@hmcts/one-per-page/checkYourAnswers');
const { whitelist } = require('utils/regex');
const { getHearingArrangementsAnswer } = require('steps/hearing/arrangements/cyaHearingArrangementsUtils');
const sections = require('steps/check-your-appeal/sections');
const Joi = require('joi');
const paths = require('paths');

const arrangements = {
    languageInterpreter: 'Language interpreter',
    signLanguageInterpreter: 'Sign language interpreter',
    hearingLoop: 'Hearing loop',
    accessibleHearingRoom: 'Accessible hearing rooms',
    other: 'Other'
};

class HearingArrangements extends Question {

    static get path() {

        return paths.hearing.hearingArrangements;
    }

    get cyaArrangements() {

        let arrangementType = {};

        Object.keys(arrangements).forEach(arrangement => {
            arrangementType[arrangement] = getHearingArrangementsAnswer(this.fields, arrangement);
        });

        return arrangementType;
    }

    get form() {

        const validAnswers = Object.keys(arrangements);

        return form(

            arrayField('selection').joi(
                this.content.fields.selection.error.required,
                Joi.array().items(validAnswers).min(1)
            ),

            textField('interpreterLanguageType').joi(
                this.content.fields.interpreterLanguageType.error.invalid,
                Joi.string().regex(whitelist).allow('')
            ),

            textField('signLanguageType').joi(
                this.content.fields.signLanguageType.error.invalid,
                Joi.string().regex(whitelist).allow('')
            ),

            textField('anythingElse').joi(
                this.content.fields.anythingElse.error.required,
                Joi.string().regex(whitelist).allow('')
            )
        );
    }

    answers() {

        return [

            answer(this, {
                section: sections.hearingArrangements,
                template: 'answer.html'
            })
        ];
    }

    values() {

        const values = {
            hearing: {
                arrangements: {
                    languageInterpreter: false,
                    signLanguageInterpreter: false,
                    hearingLoop: false,
                    accessibleHearingRoom: false,
                    other: false
                },
                interpreterLanguageType: this.fields.interpreterLanguageType.value,
                signLanguageType: this.fields.signLanguageType.value,
                anythingElse: this.fields.anythingElse.value,
            }
        };

        this.fields.selection.value.forEach((arrangement) => {
            values.hearing.arrangements[arrangement] = true;
        });

        return values;
    }

    next() {

        return goTo(this.journey.steps.HearingAvailability);
    }
}

module.exports = HearingArrangements;
