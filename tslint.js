module.exports = {
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? true : false,
    'no-debugger': process.env.NODE_ENV === 'production' ? true : false,
  },
};
