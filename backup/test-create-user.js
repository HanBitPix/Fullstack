// 'use strict';

// const {
//   app,
//   runServer,
//   closeServer
// } = require('../app');


// const user = require('../routes/user');
// const request = require('supertest');

// const chai = require('chai');
// const chaiHttp = require('chai-http');

// // const assert = require('chai').assert;
// const expect = chai.expect;

// chai.use(chaiHttp);

// const login = {
//   "email": "admin@admin.com",
//   "password": "hanone123"
// };

// describe('Testing stuff with Users', function (done) {
//   // Before our tests run, we activate the server. Our `runServer`
//   // function returns a promise, and we return the promise by
//   // doing `return runServer`. If we didn't return a promise here,
//   // there's a possibility of a race condition where our tests start
//   // running before our server has started.
//   before(function () {
//     return runServer();
//   });

//   // // Close server after these tests run in case
//   // // we have other test modules that need to 
//   // // call `runServer`. If server is already running,
//   // // `runServer` will error out.
//   after(function () {
//     return closeServer();
//   });

//   it('Testing server if we get 200 on /user/login', function () {
//     return chai.request(app)
//       .get('/')
//       .then(function (res) {
//         expect(res).to.have.status(200);
//       });
//   });


//   it('Able to login?', function () {
//     return chai.request(app)
//       .post('/user/login')
//       .send(login)
//       .then(function (res) {
//         expect(res.statusCode).to.equal(200);
//         expect(res).to.redirectTo('/item');
//       })
//       .catch(function (err) {
//         throw err;
//       });
//   });
// });