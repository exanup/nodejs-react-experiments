module.exports = {
  httpErrMsg: {
    NOT_AUTHORIZED: { code: 401, message: 'Not authorized' },
    BAD_REQUEST: { code: 400, message: 'Bad request' },
    NOT_FOUND: { code: 404, message: 'Not found' },
  },
  generalErrMsg: {
    WRONG_CREDENTIALS: 'Username or password did not match',
    BAD_TOKEN: 'Invalid token',
  },
};
