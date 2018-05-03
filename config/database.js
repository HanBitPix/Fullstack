'use strict';

if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI:
    'mongodb://admin:hanone123@ds049568.mlab.com:49568/trachyourtech'}
} else{
  module.exports = {mongoURI: 'mongodb://localhost/fullstack'}
}
