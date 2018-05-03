'use strict';

const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
// const assert = require('assert');
// const should = chai.should();
// const request = require('supertest');
const mongoose = require('mongoose');
// const User = require('../models/User');

mongoose.Promise = global.Promise;

const {
  app,
  runServer,
  closeServer
} = require('../app');

chai.use(chaiHttp);

const userCredentials = {
  email: "jake@jake.com",
  password: "jake"
};

var authenticatedUser = chai.request.agent(app);

before((done) => {
  mongoose.connect('mongodb://localhost/fullstack_test');
  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

describe('something to do', () => {

  
  // Creating a test user
  const registerUser = {
    name: 'jake',
    email: 'jake@jake.com',
    password: 'jake',
    password2: 'jake'
  };

  before((done) => {
    // To drop collection before going through auth login
    mongoose.connection.collections.users.drop();
    chai.request(app)
      .post('/user/register')
      .send(registerUser)
      .then(function (res) {
        done();
      });
  });

  it('should return a 200 response if the user is logged in', function () {

    return authenticatedUser
      .post('/user/login')
      // .set('Connection', 'keep-alive')
      .send({
        email: "jake@jake.com",
        password: "jake"
      })
      .then(function (res) {
        authenticatedUser
          .get('/item')
          .then(function (res) {
            console.log(res.text);
            expect(res.statusCode === 200);
          });
      });
  });
});