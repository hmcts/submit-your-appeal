'use strict';

const { expect } = require('test/util/chai');
const CantAppeal = require('steps/compliance/cant-appeal/CantAppeal');
const paths = require('paths');

describe('CantAppeal.js', () => {

    let cantAppealClass;

    beforeEach(() => {
       cantAppealClass = new CantAppeal;
    });

    describe('get url()', () => {

        it('returns url /cant-appeal', () => {
            expect(cantAppealClass.url).to.equal(paths.compliance.cantAppeal);
        });

    });

    describe('next()', () => {

        it('should return undefined', () => {
            expect(cantAppealClass.next()).to.be.undefined;
        });

    });

});
