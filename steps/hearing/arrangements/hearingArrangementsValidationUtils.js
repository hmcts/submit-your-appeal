const { whitelist } = require('utils/regex');
const languages = require('steps/hearing/arrangements/languages');
const Joi = require('joi');

const optionSelected = options => {

    const optionValues = Object.values(options);
    let valueSet = false;

    optionValues.forEach(arrangement => {
        valueSet = valueSet ? valueSet : arrangement.requested;
    });

    return valueSet
};

const languageInList = value => {

    return value.requested ? languages.includes(value.language) : true;
};

const emptyLanguageFieldValidation = value => {

    return value.requested && !value.language ? false : true;
};

const validCharacters = value => {

    let validated;

    if (value.requested) {
        const validString = Joi.validate(value.language, Joi.string().regex(whitelist));
        validated = validString.error === null;
    } else {
        validated = true;
    }

    return validated;
};

module.exports = {
    optionSelected,
    languageInList,
    emptyLanguageFieldValidation,
    validCharacters
};
