const jwt = require('express-jwt');

const getTokenFromHeaders = (req) => {
  const {
    headers: {
      authorization
    }
  } = req;

  if (authorization && authorization.split(' ')[0] === 'Token') {
    console.log("-------------------------------");
    console.log(authorization.split(' ')[1]);
    console.log("-------------------------------");

    return authorization.split(' ')[1];
  }
  return null;
};

const auth = {
  required: jwt({
    secret: '1337fil',
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
  }),
  optional: jwt({
    secret: '1337fil',
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
  }),
};

module.exports = auth;