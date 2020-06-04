const { expect } = require('test/util/chai');
const ContactDWP = require('steps/compliance/contact-dwp/ContactDWP');
const paths = require('paths');
const config = require('config');
const checkWelshToggle = require('middleware/checkWelshToggle');

describe('ContactDWP.js', () => {
  let contactDWP = null;
  beforeEach(() => {
    contactDWP = new ContactDWP({
      journey: {
        steps: {}
      },
      session: {
        BenefitType: {
          benefitType: 'Universal Credit (UC) Universal Credit UC'
        }
      }
    });
  });

  it('returns path /contact-dwp', () => {
    expect(ContactDWP.path).to.equal(paths.compliance.contactDWP);
  });

  it('get allowUC from config', () => {
    expect(contactDWP.allowUC).to.equal(config.get('features.allowUC.enabled') === 'true');
  });

  it('get benefitType', () => {
    expect(contactDWP.benefitType).to.equal('UC Universal Credit UC');
  });

  describe('get middleware()', () => {
    it('returns correct middleware array', () => {
      expect(contactDWP.middleware).to.be.an('array');
      expect(contactDWP.middleware).to.have.length(6);
      expect(contactDWP.middleware[0]).to.equal(checkWelshToggle);
    });
  });
});
