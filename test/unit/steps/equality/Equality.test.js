const { expect, sinon } = require('test/util/chai');
const nock = require('nock');
const rewire = require('rewire');
const config = require('config');
const httpStatus = require('http-status-codes');

const Equality = rewire('steps/equality/Equality');

describe('Equality.js', () => {
  let req = {};
  let res = {};
  const pcqHost = config.services.equalityAndDiversity.url;

  before(() => {
    nock.cleanAll();
    nock.activate();
  });

  beforeEach(() => {
    req = {
      session: {},
      journey: {
        steps: {}
      },
      idam: { userDetails: { email: 'test@test.com' } },
      headers: { host: 'localhost' }
    };
    res = {
      redirect: sinon.spy()
    };
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('redirects to PCQ with the correct parameters', done => {
    nock(pcqHost)
      .get('/health')
      .reply(httpStatus.OK, { status: 'UP' });

    const revert = Equality.__set__('uuidv4', () => {
      return 'r123';
    });

    const step = new Equality(req, res);
    step.handler(req, res);

    setTimeout(() => {
      expect(res.redirect.calledOnce).to.equal(true);
      expect(res.redirect.args[0][0]).to.satisfy(str => str.startsWith(
        // eslint-disable-next-line max-len
        'http://localhost:4000/service-endpoint?serviceId=SSCS&actor=APPELLANT&pcqId=r123&partyId=test@test.com&returnUrl=localhost/check-your-appeal&language=en&token='
      ));
      revert();
      done();
    }, 100);
  });

  it('values() returns the correct pcqId', done => {
    nock(pcqHost)
      .get('/health')
      .reply(httpStatus.OK, { status: 'UP' });

    const revert = Equality.__set__('uuidv4', () => {
      return 'r123';
    });

    const step = new Equality(req, res);
    step.handler(req, res);

    setTimeout(() => {
      expect(step.values()).to.deep.equal({
        pcqId: 'r123'
      });
      revert();
      done();
    }, 100);
  });

  it('skips PCQ if it is unhealthy', done => {
    nock(pcqHost)
      .get('/health')
      .reply(httpStatus.OK, { status: 'DOWN' });

    const step = new Equality(req, res);
    step.handler(req, res);

    setTimeout(() => {
      expect(res.redirect.calledOnce).to.equal(false);
      done();
    }, 100);
  });

  it('skips PCQ if there is an error retrieving the PCQ health', done => {
    const step = new Equality(req, res);
    step.handler(req, res);

    setTimeout(() => {
      expect(res.redirect.calledOnce).to.equal(false);
      done();
    }, 100);
  });

  it('skips PCQ if the user did not login to IDAM', done => {
    nock(pcqHost)
      .get('/health')
      .reply(httpStatus.OK, { status: 'UP' });

    const revert = Equality.__set__('goTo', () => {
      // eslint-disable-next-line no-empty-function
      return { redirect: () => {} };
    });

    delete req.idam;

    const step = new Equality(req, res);
    step.handler(req, res);

    setTimeout(() => {
      expect(res.redirect.calledOnce).to.equal(false);
      revert();
      done();
    }, 100);
  });

  it('answers() returns an empty array', () => {
    const step = new Equality(req, res);
    step.handler(req, res);

    expect(step.answers()).to.deep.equal([]);
  });
});
