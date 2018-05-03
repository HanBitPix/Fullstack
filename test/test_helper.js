'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  // drop test connection when connecting!
  mongoose.connect('mongodb://localhost/fullstack_test');
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

// for each test, will drop the collection to start fresh
// after((done) => {
//   mongoose.connection.collections.users.drop(() => {
//     done();
//   });
// });

