module.exports = {
  build: {
    options: {
      pretty: true,
    },
    files: {
      'www/index.html': 'src/views/index.jade',
      'www/status-code.html': 'src/views/status-code.jade',
    },
  },
};
