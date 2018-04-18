'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../server');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Testing Get /', function() {
  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('When at root URL, get 200 status and HTML', function(done) {
    chai.request(app)
      .get('/')
      .then(function(res) {
        expect(res).to.be.html;
        expect(res).to.have.status(200);
        done();
      });
  });
});

