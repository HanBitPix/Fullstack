'use strict';

const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');

const {
  app,
  runServer,
  closeServer
} = require('../app');

chai.use(chaiHttp);

describe('Successfully register user', () => {

  // Creating a test user
  const registerUser = {
    name: 'Test',
    email: 'test@test.com',
    password: 'test',
    password2: 'test'
  };

  // 
  it('if user register successfully then will redirect to login', () => {
    return chai.request(app)
      .post('/user/register')
      .send(registerUser)
      .then(function(res){
        expect(res.statusCode === 200);
        expect(res.req.path === '/user/login');
      });
  });
});
